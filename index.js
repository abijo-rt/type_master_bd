const  {app,server} = require('./app')



const PORT = process.env.PORT || 3001;
server.listen(PORT ,"0.0.0.0" , ()=> {
    console.log(`Server listening in port ${PORT}`)
})