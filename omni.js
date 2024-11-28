// Omni.js - A lightweight JavaScript library by Paul Bakhtiari (Boiico)

// Shortcut for document.getElementById
const di = (id) => document.getElementById(id);

// Shortcut for document.write
const dw = (content) => document.write(content);

// Shortcut for console.log
const log = (message) => console.log(message);

// Shortcut for alert
const alr = (message) => alert(message);

// Shortcut for prompt
const prm = (message) => prompt(message);

// Shortcut for numeric prompt
const prmNum = (message) => +prompt(message);

// Shortcut for document.querySelector
const qs = (selector) => document.querySelector(selector);

// Shortcut for document.querySelectorAll
const qsa = (selector) => document.querySelectorAll(selector);

// Shortcut for document.createElement
const ce = (tagName) => document.createElement(tagName);

// Shortcut for setAttribute
const sa = (element, attribute, value) => element.setAttribute(attribute, value);

// Shortcut for getAttribute
const ga = (element, attribute) => element.getAttribute(attribute);

// Shortcut for addEventListener
const ae = (element, event, callback) => element.addEventListener(event, callback);

// Shortcut for removeEventListener
const re = (element, event, callback) => element.removeEventListener(event, callback);

// Shortcut for classList.add
const cla = (element, className) => element.classList.add(className);

// Shortcut for classList.remove
const clm = (element, className) => element.classList.remove(className);

// Shortcut for classList.toggle
const clt = (element, className) => element.classList.toggle(className);

// Shortcut for innerHTML (set or get)
const ih = (element, content) => content !== undefined ? element.innerHTML = content : element.innerHTML;

// Shortcut for innerText (set or get)
const it = (element, content) => content !== undefined ? element.innerText = content : element.innerText;

// Shortcut for value (set or get for input elements)
const val = (element, value) => value !== undefined ? element.value = value : element.value;

// Shortcut for fetch GET request
const fch = (url) => fetch(url).then(response => response.json());

// Shortcut for fetch POST request
const fchPost = (url, data) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(response => response.json());

// Shortcut for setTimeout
const st = (callback, delay) => setTimeout(callback, delay);

// Shortcut for setInterval
const si = (callback, interval) => setInterval(callback, interval);

// Shortcut for generating random number
const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Shortcut for localStorage setItem
const lsSet = (key, value) => localStorage.setItem(key, value);

// Shortcut for localStorage getItem
const lsGet = (key) => localStorage.getItem(key);

// Shortcut for localStorage removeItem
const lsRemove = (key) => localStorage.removeItem(key);

// Shortcut for redirect
const go = (url) => window.location.href = url;

// Shortcut for scroll to top
const scrollTop = () => window.scrollTo(0, 0);
