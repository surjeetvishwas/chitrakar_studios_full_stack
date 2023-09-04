const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://chitrakar:surjeet143@cluster0.ra06y8d.mongodb.net/chitrakar?retryWrites=true&w=majority'
const mongoDb =async() =>{
  await  mongoose.connect(mongoUri,{useNewUrlParser:true}, async(err,result)=>{
    if(err) console.log('---',err)   
    else{
      console.log("connected")
      const fetched_data = await mongoose.connection.db.collection("cloth_items");
      fetched_data.find({}).toArray (
        function(err, data){
          if(err) console.log(err)
          else console.log()
        }
      )
    }
   
    });
}

module.exports = mongoDb;