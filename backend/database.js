const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

//mongodb+srv://tonilogar:Zaratustra_27@cluster0.tnyvv.mongodb.net/projectsPcot
//mongodb://127.0.0.1/projectsPcot
//mongodb://mongo:Ydr5A8zm8f4objpG8DxD@containers-us-west-152.railway.app:7753
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err))


     ////mongodb://mongo:Ydr5A8zm8f4objpG8DxD@containers-us-west-152.railway.app:7753