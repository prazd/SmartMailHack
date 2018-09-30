
let express = require('express')
let app = express()
app.use(express.static(__dirname+'/dist')) // for vue
app.get('/',(req,res)=>{
res.sendFile(__dirname+'dist/index.html')
})
app.listen(80);