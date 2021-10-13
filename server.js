// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

// Start up an instance of app
const app =express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port=8000;
app.listen(port,()=>{console.log(`Server is running on port ${port}`)});

// Initialize all route with a callback function

app.get('/data',getData)

// Callback function to complete GET '/all'
function getData(req,res){
   res.send(projectData);
   console.log('object has sent');
}

// Post Route
 app.post('/send',(req,res)=>{
    projectData={...req.body};
    console.log("new data was added");
    res.send();
});


