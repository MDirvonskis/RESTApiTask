const express = require('express');
const app = express();
const port = 8000;//Port of the server
const cors = require('cors');//Need this to run use cors

app.use(express.json());//Allows to read/write json
app.use(cors());//Enables all cors request

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
function findID(id){
  Attendees.filter(function(element){
    if(element.id == id){
      return true;
    }
    else{
      return false;
    }
  })
};
app.get('/', (req, res) => {
  //Send html?
  res.send('Server started...').status(200);
});
app.get('/List', (req, res) => {//Sending attendees to client.
  res.json(Attendees).status(200);
});
app.post('/List/', (req, res) => {//Need to check input
  if(findID(req.params.id))
  {
    res.send("Id already exist.").status(302)//302 Found
    //errorlog
  }
  else{//C
    Attendees.push(req.body)//Add new attendee to list (id, name, notes);
  }  
});
app.delete('/List/:id', (req, res) => {
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
app.listen(port, () => {
  console.log(`Server running on port:${port}`)
});
//Error handler needs to be at the bottom..
app.use((err, req, res, next) => {

  //Default error handler template
  console.error(err.stack)
  res.status(500).send('Something broke!')
});