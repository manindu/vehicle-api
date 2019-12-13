const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// { vehicleId: string location: string }
const locations = [];

app.get('/', (req, res) => res.send('Vehicle info API is Running'))

app.post('/location', (req, res) => {
  locations.push({ vehicleId: req.body.vehicleId, location: req.body.location });
  
  fs.appendFile(`${req.body.vehicleId}.txt`, `${req.body.location} \n`, (err) => {

    if (err) throw err;

  })

  res.send('Record added succuessfully');
})

app.get('/location/:id', (req, res) => {
  const vehicleId = req.params.id;
  const vehicle = locations.filter(location => location.vehicleId === vehicleId);

  if  (vehicle && vehicle.length > 0) {
    const temp = vehicle.map(record => record.location).reverse();
    const lastFive = temp.slice(0, 5);
    res.json({
      locations: lastFive
    });
  } else {
    res.send('No location records for the given ID');
  }
})

app.listen(port, () => console.log(`App running on ${port}!`))