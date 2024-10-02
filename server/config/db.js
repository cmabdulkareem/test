import mongoose from 'mongoose'
mongoose
        .connect("mongodb+srv://shop12:shop123@sample.kvxwkea.mongodb.net/testmern")
        .then(()=>{
            console.log("connected to mongodb");
        })
        .catch((err)=>{
          console.log(err);
        })
