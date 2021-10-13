// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');

// Start up an instance of app
const app =express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
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
    console.log("new data was added temp is : " + projectData.temperature +' degree at : '+projectData.date +' feeling is '+projectData.content);
    res.send(JSON.stringify(projectData));
});


