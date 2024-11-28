// Breve.js - A lightweight JavaScript library by Paul Bakhtiari (BOIICO) 2024

// Shortcut for document.getElementById
const di = (id) => {
  const element = document.getElementById(id);

  // Define getter/setter for all shortcuts
  Object.defineProperties(element, {
    ih: {
      get() {
        return this.innerHTML;  // Get innerHTML
      },
      set(value) {
        this.innerHTML = value;  // Set innerHTML
      }
    },
    it: {
      get() {
        return this.innerText;  // Get innerText
      },
      set(value) {
        this.innerText = value;  // Set innerText
      }
    },
    val: {
      get() {
        return this.value;  // Get value (for inputs)
      },
      set(value) {
        this.value = value;  // Set value (for inputs)
      }
    },
    sa: {
      set([attribute, value]) {
        this.setAttribute(attribute, value);  // Set Attribute
      }
    },
    ga: {
      get(attribute) {
        return this.getAttribute(attribute);  // Get Attribute
      }
    },
    cla: {
      set(className) {
        this.classList.add(className);  // Add class
      }
    },
    clm: {
      set(className) {
        this.classList.remove(className);  // Remove class
      }
    },
    clt: {
      set(className) {
        this.classList.toggle(className);  // Toggle class
      }
    },
    ae: {
      set([event, callback]) {
        this.addEventListener(event, callback);  // Add EventListener
      }
    },
    re: {
      set([event, callback]) {
        this.removeEventListener(event, callback);  // Remove EventListener
      }
    },
  });

  return element;
};

// Shortcut for document.write
const dw = (content) => {
  document.write(content);  // Write content
};

// Shortcut for console.log
const log = (message) => {
  console.log(message);  // Log message
};

// Shortcut for alert
const alr = (message) => {
  alert(message);  // Show alert
};

// Shortcut for prompt
const prm = (message) => {
  return prompt(message);  // Prompt message
};

// Shortcut for numeric prompt
const prmNum = (message) => {
  return +prompt(message);  // Numeric prompt
};

// Shortcut for document.querySelector
const qs = (selector) => {
  return document.querySelector(selector);  // Query selector
};

// Shortcut for document.querySelectorAll
const qsa = (selector) => {
  return document.querySelectorAll(selector);  // Query all selectors
};

// Shortcut for document.createElement
const ce = (tagName) => {
  return document.createElement(tagName);  // Create element
};

// Shortcut for setAttribute
const sa = (element, attribute, value) => {
  element.setAttribute(attribute, value);  // Set attribute
};

// Shortcut for getAttribute
const ga = (element, attribute) => {
  return element.getAttribute(attribute);  // Get attribute
};

// Shortcut for fetch GET request
const fch = (url) => {
  return fetch(url).then((response) => response.json());  // Fetch GET request
};

// Shortcut for fetch POST request
const fchPost = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());  // Fetch POST request
};

// Shortcut for setTimeout
const st = (callback, delay) => {
  setTimeout(callback, delay);  // Set timeout
};

// Shortcut for setInterval
const si = (callback, interval) => {
  setInterval(callback, interval);  // Set interval
};

// Shortcut for generating random number
const rnd = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;  // Random number
};

// Shortcut for localStorage setItem
const lsSet = (key, value) => {
  localStorage.setItem(key, value);  // Set localStorage item
};

// Shortcut for localStorage getItem
const lsGet = (key) => {
  return localStorage.getItem(key);  // Get localStorage item
};

// Shortcut for localStorage removeItem
const lsRemove = (key) => {
  localStorage.removeItem(key);  // Remove localStorage item
};

// Shortcut for redirect
const go = (url) => {
  window.location.href = url;  // Redirect
};

// Shortcut for scroll to top
const scrollTop = () => {
  window.scrollTo(0, 0);  // Scroll to top
};
