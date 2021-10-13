/* Global Variables */
// Personal API Key for OpenWeatherMap API and base-URL
const weatherApiKey='9810618ae573e56505fc4cf79f6587af';
const baseURL='https://api.openweathermap.org/data/2.5/weather?';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(newDate);

// Event listener to add function to existing HTML DOM element
document.querySelector("#generate").addEventListener('click',async ()=>{
    const zip=document.querySelector('#zip').value;
    const feeling=document.querySelector('#feelings').value;
    try {
        const allData = await fetch(`${baseURL}zip=${zip}&units=metric&appid=${weatherApiKey}`);
        const d= await allData.json();
        const temp =d.main.temp;
        console.log(temp);
        const data={date:newDate,temperature:temp,content:feeling};
        const recieved=await fetch('/send',{
            method: 'POST', 
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    } catch (err) {
        console.log('error has done -> ' +err);
    }});

