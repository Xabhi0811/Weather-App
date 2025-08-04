 const express = require('express')
 const dotenv = require('dotenv').config()
 const axios = require('axios')
 const cors = require('cors')

 const app = express()

 app.use(cors())

 app.get('/weather', async(req, res)=>{
    const city = req.query.city;
    try{
        const response =  await axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        res.json(response.data)
    }catch(error)
    {
        res.status(500).json({msg: " something is going wrong "})
    }
    
  
 })


 app.listen(4000,()=>{
  console.log('server.js running on 4000 ')
 })

 

