
const db = require('./config/database')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require('./models/flight')
const MO = require('method-override')
const Destination = require('./models/destination')

const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');
//middleware
app.use(express.urlencoded({ extended: false}))

app.use(MO("_method"));



//INDUCES
//Index
app.get('/flights', async (req, res) => {
  try {
    const foundFlights = await Flight.find({})
  res.render('flights/Index', {flights: foundFlights})   
  } catch (error) {
    res.status(400).send(error)
  }
})

//New
app.get('/flights/new', async (req,res) => {
  res.render('flights/New')
})


//Create
app.post('/flights', async (req,res) => {
  try {
  const newFlight = await Flight.create(req.body)
  res.redirect('/flights')   
  } catch (error) {
    res.status(400).send(error) 
  }

})




//Show
app.get('/flights/:id', async (req, res) => {
  try {
  const selectedFlight = await Flight.findById(req.params.id).populate('destinations')
  console.log(selectedFlight);
   res.render('flights/Show', {flight: selectedFlight})
  } catch (error) {
    res.status(400).send(error)
  }
})


//INDUCES
//Create
app.post('/destinations/:id', async (req,res) => {
  try {
    console.log(req.body);
    const newDestination = await Destination.create({
      flightID: req.params.id,
      airport: req.body.airport
    })
    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, 
      {$addToSet: {destinations: newDestination._id}},
      {new: true}
      )
      res.redirect('/flights')
  } catch (error) {
    res.status(400).send(error)
  }
})


app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
