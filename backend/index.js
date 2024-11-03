const port=4000;
const express= require("express");
const app= express();
const mongoose=require("mongoose");
const jwt= require("jsonwebtoken");
const multer= require("multer");
const path=require("path");
const cors=require("cors");
const { productModel } = require("./models/product.model");
const dotenv= require("dotenv");
dotenv.config()


app.use(express.json());

app.use(cors());


// Database Connection with MongoDB
mongoose.connect(process.env.MONGO_URL) 

// API Creation
app.get("/",(req,res)=>{
  return res.render("homepage")
})


// ejs

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))



// Image storage Engine
const storage= multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload= multer({storage:storage})

// Creating upload endpoint images
app.use("/images",express.static("upload/images"))

app.post('/upload',upload.single("productImage"),(req,res)=>{
    // if (!req.file) {
    //     return res.status(400).json({ success: 0, message: "No file uploaded" });
    // }
    console.log(req.body)
    console.log(req.file)
    
    res.json({success:1,image_url:`http://localhost:${port}/images/${req.file.filename}`})
})


// add data
app.post("/addproduct", async(req,res)=>{
    let products= await productModel.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1;
    }
    
    const product = new productModel({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })

    console.log(product)
    console.log("save")

    try{
        await product.save()
        res.json({succes:true,product:product})
    }catch(err){
        res.json({success:"false" })
        console.log(err)
    }
})

// Creating api for deleting products
app.post("/removeproduct", async (req,res)=>{
    await productModel.findOneAndDelete({id:req.body.id});

    console.log("Removed")
    res.json({success:true,name:req.body.name})

})


// Creating Api for getting all products 
app.get("/allproducts", async(req,res)=>{
    let products = await productModel.find({});
    console.log("All products fetched")

    res.json({succes:true,products:products})
})

app.listen(port,(error)=>{
    if(!error){
        console.log("server runninig on prt "+port)
    }else{
        console.log("Error: "+error)
    }
});