const mongoose=require("mongoose");
const customerSchema=new mongoose.Schema({
    email:{type:String},
    id:{type:String},
    subscribed:{type:Boolean},
},{timestamps:true})
module.exports=Customers=mongoose.model("stripeCustomers",customerSchema);