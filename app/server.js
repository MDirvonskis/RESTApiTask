const express = require('express');
const app = express();
const port = 8000;//Port of the server
const cors = require('cors');//Need this to run use cors

app.use(express.json());//Allows to read/write json
app.use(cors());//Enables all cors request

//List
Attendees=[
  {
  "id":"1",//Int Object identifier
  "name":"a",//String
  "notes":"b"//String
  },
  {
    "id":"2",//Int Object identifier
    "name":"a",//String
    "notes":"b"//String
  }
];
/*function findID(id){
  Attendees.filter(function(element){
    if(element.id == id){
      return true;
    }
    else{
      return false;
    }
  })
};*/

//Routes

app.get('/', (req, res) => {
  //Send html?
  res.sendFile('client.html', {root: __dirname});
});
app.get('/attendees', (req, res) => {//Sending json list.
  res.json(Attendees).status(200);
});
app.post('/attendee/', (req, res) => {//Add new item to list
  if(Object.keys(req.body).sort().toString() != 'id,name,notes')
  {
    return res.status(405).json({message: 'missing fields'});
  }
  Attendees.push(req.body);
  res.status(201).json(req.body);
});
app.delete('/attendee/:id', (req, res) => {
  const id = parseFloat(req.params.id);//Store id from request into 'id'
  Attendees = [...Attendees.filter((aList) => aList.id != id)];
  // .filter: Make new array with the name of 'aList'
  res.status(204).json({});
  /*if(findId(((req.body).id)).toString)
  {
    Attendees.delete(req.body);
    //delete item from list
  }
  else{
    res.send("Item not found").status(404);//404 Missing
    //Log error
  }*/
});

//Server port
app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});

//Error handler needs to be at the bottom..

app.use((err, req, res, next) => {
  //Default error handler template
  console.error(err.stack);
  res.status(500).send('Something broke!');
});