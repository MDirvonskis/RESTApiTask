# Express.js
## A feature of Express would be the use of middleware
Middleware allows modification of request and response objects. For example, using CORS (Cross-origin resource sharing) which modify `req` and `res` objects.
```
const cors = require('cors');//Need this to run use cors
app.use(cors());//Enables all cors request
```
This lets me use curl commands to test my server.
```
curl -v -X GET     http://localhost:8000/attendees
curl -v -X DELETE  http://localhost:8000/attendee/123
curl -v -X OPTIONS http://localhost:8000/
```
## Express.js is built on node.js, which means we have access function anywhere in the program. 
Code to import express libraries.
```
const express = require('express'); 
const app = express();
```
This function handles errors and gets called anytime the program experiences an error.  
```
app.use((err, req, res, next) => {
  //Default error handler template
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```
By having these functions like (`app.`), we are able to reduce that amount of code we have to manually program.

## Another feature of express.js is has Routing and HTTP Methods. 
Express use REST (representational state transfer), which provides the use of GET, PUT, POST, DELETE methods. I implemented these methods to request and respond to the client side network.
```
app.get('/attendees', (req, res) => {//Sending json list.
  ...
});
app.post('/attendee/', (req, res) => {//Add new item to list
  ...
});
app.delete('/attendee/:id', (req, res) => {//Retrieving a id from a delete fetch
  ...
});
```
# Vue.js

## The first feature of Vue.js framework is that you can bind html to the data model, creating a two way mapping when utilizing 'v-models'.
I'm mapping id and notes to user input. 
```
<input name="name" placeholder="name" v-model="attendee.name">   
<input name="notes" placeholder="notes" v-model="attendee.notes">
```
This would then bind user input to attendee object.
```
data()
    {
      return {
        attendee: {
          id: Math.random(),
          name: "",
          notes: "",
        },        
        attendees: [],
      }
    },
``` 

## Another feature would be that is seperated data from the layout with the use of states. 
```
created(){//Initiates when loaded
      this.updateAttendees();
    },
```
This fetches attendees list from the server
```
updateAttendees()
      {
        fetch(`${urlAPI}/attendees`, 
        {
          method: 'GET',
        })
        .then(response => response.json())
        .then(json => this.attendees = json)
        .catch(err => console.error(err))
      }
```
This keeps populating the list on each refresh
## Additionally, Vue.js contains directives like 'v-else', 'v-for', 'v-if' which interacts with DOM elements.
It takes attendees and output each json object contained into a list.
```
h2>List</h2>
    <ul>
      <li v-for="aa in attendees">
        <span>{{aa.id}}</span>
        <span>{{aa.name}}</span>
        <span>{{aa.notes}}</span>
      </li>
    </ul>
```

# JavaScript

## Javascript has inline functions like '.then()' which executes asynchronously which enables paralysation. 
Waits until it takes in a response and converts that response to json object.
```
.then(response => response.json())
```
This improves processing speed as the functions don't execute one by one. 

## Javascript has dynamic typing, meaning when you declear a variable, you do not need to specify it.

This means that we declear variables like `attendee = 1` this would now be consider as a interger and this a string `attendee = "1"`.

## Another feature would that we can perform in built functions. 
It has a extensive amount of in build functions like `.push()`
```
Attendees.push(req.body);
```
So I get attendees and initiate a function to get sent data and store it as another attendee in the list.