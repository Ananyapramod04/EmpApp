
  const mongoose=require('mongoose');
  mongoose.connect('mongodb+srv://aromalm2310:9605467664@cluster0.3lutxiz.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0 ').then((res)=>{
      console.log('DB is connected');
  }).catch((error)=>{
      console.log('Error in connection')
  })