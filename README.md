# RESTApiTask
* Small RESTApi and web-client task

Use
---

* [gitpod](https://gitpod.io#https://github.com/MDirvonskis/RESTApiTask)
* `make run`

Task
----

* You are to create an simple RSPV (Répondez s'il vous plaît) webapp with an API
* You are to implement the [openapi](https://swagger.io/specification/) specification and create a useable web interface using open source frameworks
    * [redocly -> openapi.yml](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/calaldees/RESTApiTask/main/openapi.yaml)
* You have been provided with a working complete examples in [expressjs](https://expressjs.com/) and [vuejs](https://vuejs.org/)

6. You will be supported in stages though the construction of the server and client
    * We will explore the documentation and tutorials together to build up the functionality
7. Digital Artifact
    * You will me marked on the functionality you produce under supervision
    * Marks (16)
        * Server Tests 8 (7 tests + startup port open check == 1 mark each == 8 total)
        * Client Tests 3 (3 tests (create/delete test is worth 6 marks) == 8 total)
8. Writeup
    * You will be supported in technically describing the features you have created and evidencing this as `writeup.md` in your repository
    * Marks (9)
        * Identification of 3 language features (3 marks)
        * Identification of 3 server framework features (3 marks)
        * Identification of 3 client framework features (3 marks)
9. Your work will be exported as a zip and submitted to turnitit and captured as a github permalink hash
    * On completing all these tasks you will be awarded 40%/Pass for the module


### Time
This task is expected to take 2 days with supervision.


Using the REST service
----------------------

```
curl -v -X POST    http://localhost:8000/attendee -H "Content-Type: application/json" -d '{"id": 123, "name": "test", "notes": "some notes"}'
curl -v -X GET     http://localhost:8000/attendees
curl -v -X DELETE  http://localhost:8000/attendee/123
curl -v -X OPTIONS http://localhost:8000/
```


```javascript
// Open a blank browser tab and bring up devtools (F12)
// Copy and paste the code below
//   These are javascript equivalent of `curl` statements
// Start server api
// Set `urlAPI` to your server address.
// TASK: using the devtools console
//   - add 3 items
//   - get the item list (explore in devtools)
//   - delete the middle item
//
// e.g:
//  addAttendee({id: 456, name: "test", notes: "some notes"})
//  getAttendees()
//  deleteAttendee(123)

urlAPI = 'http://localhost:8000'.replace(/\/+$/,'');

let attendees = []

function getAttendees() {
    fetch(`${urlAPI}/attendees`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(json => {
            console.log("getAttendees", json)
            attendees = json  // save the json we got back into the variable `attendees`
        })
    .catch(err => console.error(err))
}

function addAttendee(data) {
    fetch(`${urlAPI}/attendee`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(json => console.log('addAttendee()', json))
    .catch(err => console.error(err));
}

function deleteAttendee(attendee_id) {
    fetch(`${urlAPI}/attendee/${attendee_id}`, {
        method: 'DELETE',
    })
        .then(json => console.log('deleteAttendee()', json))
    .catch(err => console.error(err));
}
```