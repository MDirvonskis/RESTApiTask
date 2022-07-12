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
  res.send('Server started...').status(200);
});
app.get('/attendees', (req, res) => {//Sending json list.
  res.json(Attendees).status(200);
});
app.post('/attendee/', (req, res) => {//Add new item to list
  /*if(findID(req.params.id))
  {
    res.send("Id already exist.").status(302)//302 Found
    //errorlog
  }
  else{
    res.sendStatus(201);
    Attendees.push(req.body);//Add new attendee to list (id, name, notes);
  }*/
  if(Object.keys(req.body).sort().toString() =! 'id,name,notes')
  {
    return res.send("Fields not found").statusCode(405);
  }
    Attendees.push(req.body).statusCode(201);
});
app.delete('/ListDelete/:id', (req, res) => {
  res.send('Got a DELETE request at /user')

  if(findId(((req.body).id)).toString)
  {
    Attendees.delete(req.body);
    //delete item from list
  }
  else{
    res.send("Item not found").status(404);//404 Missing
    //Log error
  }
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