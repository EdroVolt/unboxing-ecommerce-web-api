const mongoose=require("mongoose");

const schema = new mongoose.Schema({

        "name": {type:String, required:true},
        "description":{type:String, required:true},
        "count": Number,
        "size_count": {
          "xs": Number,
          "s": Number,
          "md": Number,
          "l": Number,
          "xl": Number
        },

        "ingredients": [String],
        "images": {type:String, required:true},
        "price":  {type:Number, required:true},
        "discount": Number,
        "offer": Number,
        "reviews": [
          { 
           
            "comment": String,
             "rate": Number
          }
        ],
        "numOfReviews": Number,
      

})

module.exports = mongoose.model("products",schema)



export interface Product {


    "name": string,
    "description":string,
    "count": number,
    "size_count": {
      "xs": number,
      "s": number,
      "md": number,
      "l": number,
      "xl": number
    },

    "ingredients": [string],
    "images":string,
    "price":  number,
    "discount": number,
    "offer": number,
    "reviews": [
      { 
       
        "comment": string,
         "rate": number
      }
    ],
    "numOfReviews": number,
  

}