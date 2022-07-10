const express = require('express');
const app = express();
const port = 8000;//Port of the server

app.use(express.json());//Allows to read/write json

Attendees=[
  {
  id:"1",//Int Object identifier
  name:"",//String
  notes:""//String
  }
];
findId(id)
{
  Attendees.filter(function(element){
    if(element.id == id)//Check if given id is contained in list.
    {
      return true;
    }
    else
    {
      return false;
    }
  });
}
app.get('/', (req, res) => {
  //Send html?  
  res.send('Server started...').status(200);
});
app.get('/List', (req, res) => {
  //Send list objects
  res.send(Attendees.json).status(200);//success
});
app.post('/List/', (req, res) => {
  //Check
  //Object.keys(req.).toString()
  if(findId(req.params.id))
  {
    res.send("Id already exist.").status(302)//302 Found
    //errorlog
  }
  else{
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
    res.send("Item not found").status(404);
    //Log error
  }
  });
app.listen(port, () => {
  console.log(`Server port:${port}`)
});