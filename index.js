const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let data =[
    {
    "id": 2,
    "description": "Sweet and savory sauces relishes spreads and seasonings",
    "name": "Condiments"
    },
    {
    "id": 1,
    "description": "Soft drinks coffees teas beers and ales",
    "name": "Beverages"
    },
    {
    "id": 3,
    "description": "Desserts candies and sweet breads",
    "name": "Confections"
    },
    {
    "id": 4,
    "description": "Cheeses",
    "name": "Dairy Products"
    },
    {
    "id": 5,
    "description": "Breads crackers pasta and cereal",
    "name": "Grains/Cereals"
    },
    {
    "id": 6,
    "description": "Prepared meats",
    "name": "Meat/Poultry"
    },
    {
    "id": 7,
    "description": "Dried fruit and bean curd",
    "name": "Produce"
    },
    {
    "id": 8,
    "description": "Seaweed and fish",
    "name": "Seafood"
    }
    ]
  let counter =100


  
  app.get('/api/categories', (req, res) => {
      res.send(data)
    })
    
    app.get('/api/categories/:id', (req, res) => {
        const {id} =req.params
        const result =data.find(x=>x.id === +id)
        res.send(result)
      })


  app.post('/api/categories', (req, res) => {
    const {name} = req.body
    counter++
   data.push({name,id:counter})
    res.send("posted")    
  })
  
  app.put('/api/categories/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
   data.push({name,id:counter})
   const index= data.findIndex(x=>x.id === +id )
   data[index]={id,name}
    res.send('Updated')
  })
  
  app.delete('/api/categories/:id', (req, res) => {
    const {id} = req.params
    data = data.filter(x=>x.id !== +id)

    res.send('Deleted')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })