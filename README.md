# Breve.js 🚀

Breve.js is a lightweight JavaScript library that simplifies common tasks and enhances the web development experience.  
It provides a set of shortcut functions for frequently used DOM operations, such as selecting elements, manipulating attributes, handling events, and making HTTP requests. Ideal for rapid prototyping and simplifying code. ⚡

## Features ✨

- Shortcuts for common DOM operations like `getElementById`, `querySelector`, `createElement`, etc. 📝
- Easy-to-use functions for handling events, attributes, and classes. 🎨
- Simple methods for making GET and POST requests using the `fetch` API. 🌐
- Utilities for working with `localStorage`, timeouts, intervals, and more. ⏱️

## Installation 💻

You can include Breve.js in your project by adding the following CDN link to your HTML file:
```html
<script src="https://cdn.jsdelivr.net/gh/Boiico/breve-js@main/breve.js"></script>
```
Alternatively, download the breve.js file directly and link it in your project. 📥

## Usage 📚
Here are some example usages of the Breve.js functions:

Use Breve.js to easily select an element and log it:
```
<script>
  const element = di("myElementId");
  log(element);
</script>
```
Fetch data from an API:
```
<script>
  fch("https://api.example.com/data")
    .then(data => log(data));
</script>
```
Set an item in localStorage:
```
<script>
  lsSet("user", "John Doe");
</script>
```

## Available Functions 🛠️

di(id) - Get an element by ID. 🎯

dw(content) - Write content to the document. 🖋️

log(message) - Log a message to the console. 📜

alr(message) - Show an alert. ⚠️

fch(url) - Perform a GET request using fetch. 🔄

fchPost(url, data) - Perform a POST request using fetch. 📬

st(callback, delay) - Set a timeout. ⏳

si(callback, interval) - Set an interval. 🔁

lsSet(key, value) - Store a value in localStorage. 💾

And many more... 🏗️


## License 📝
Distributed under the MIT License. See LICENSE for more information. 📄

Kindly Made By Paul Bakhtiari (BOIICO) in 2024 !!
feel free to use !!
