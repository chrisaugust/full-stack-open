```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: 201 created  
    deactivate server

    Note right of browser: the header 'Content-type' in the POST request tells the server that the included data is JSON; an event handler in the JavaScript code creates a new note using that JSON data, adds it to the list of notes on the page, and sends that note to the server
```
