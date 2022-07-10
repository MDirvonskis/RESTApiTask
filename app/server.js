const express = require('express');
const app = express();
const port = 8000;//Port of the server

Attendees=[
  {
  id:"1",//Int Object identifier 
  name:"",//String
  notes:""//String
  }
];


app.get('/', (req, res) => {
  //Send html?
  res.send('Hello World!')
});
app.post('/List', (req, res) => {
  //Send list objects
  res.send('Got a POST request')
  });
app.put('/List/Insert', (req, res) => {
  //Add to list
  res.send('Got a PUT request at /user')
});
app.delete('/List/Delete', (req, res) => {
  //Delete from list
  res.send('Got a DELETE request at /user')
  });
app.listen(port, () => {

  console.log(`Server port:${port}`)
});