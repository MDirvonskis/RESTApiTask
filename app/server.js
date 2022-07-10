const express = require('express');
const app = express();
const port = 8000;

Attendees=[];


app.get('/', (req, res) => {

  res.send('Hello World!')
});
app.post('/List', (req, res) => {

  res.send('Got a POST request')
  });
app.put('/List/Insert', (req, res) => {

  res.send('Got a PUT request at /user')
});
app.delete('/List/Delete', (req, res) => {

  res.send('Got a DELETE request at /user')
  });
app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
});