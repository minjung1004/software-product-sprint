// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function addRandomQuote() {
    const quotes =
    ['Look at them: A minute ago they were babies, and now they’re driving, and soon we’ll all be dead.' 
    ,'The minute they got rid of rotary phones everything went to hell.'
    ,'When life gives you lemonade, make lemons. Life will be all like, ‘What?!'
    ,'I might be coach, but I like to travel first class!'
    ,'Success is one per cent inspiration, 98 per cent perspiration, and two per cent attention to detail.'
    ,'No one wants to think at graduation! It’s graduation, the time when we celebrate being done with thinking.'
    ,'Books? Wake up and smell the Internet, grandma.'];

    //Pick a random quote
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    //Add it to the page
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quote;

    console.log(quote);

}

/** Fetches the hello world and adds it to the page. */
async function getHelloWorld() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.text();
  
    const helloContainer = document.getElementById('hello-container');
    helloContainer.innerText = textFromResponse;

  }

async function getShow(){
     // Get the list of shows from the server
     const responseFromServer = await fetch('/show');
     const shows = await responseFromServer.json();

     // Pick a random show
     const show = shows[Math.floor(Math.random() * shows.length)];
   
     // Add it to the page
     const showContainer = document.getElementById('show-container');
     showContainer.innerHTML = show;
 
     console.log(show);
}

/** Fetches tasks from the server and adds them to the DOM. */
function loadContacts() {
      fetch('/contact-list').then(response => response.json()).then((contacts) => {
          const contactListElement = document.getElementById('contact-list');
          contacts.forEach((contact) => {
              contactListElement.appendChild(createContactElement(contact));
            })
        });
}

/** Creates an element that represents a task, including its delete button. */
function createContactElement(contact) {
    const contactElement = document.createElement('li');
    contactElement.className = 'contact';
  
   // const nameElement = document.createElement('span');
    //nameElement.innerText = contact.name;

    const messageElement = document.createElement('span');
    messageElement.innerText = contact.message;
  
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.innerText = 'Delete';
    deleteButtonElement.addEventListener('click', () => {
      deleteContact(contact);
  
      // Remove the task from the DOM.
      contactElement.remove();
    });
    
    contactElement.appendChild(messageElement);
    contactElement.appendChild(deleteButtonElement);
    return contactElement;
  }

  /** Tells the server to delete the task. */
function deleteContact(contact) {
    const params = new URLSearchParams();
    params.append('id', contact.id);
    fetch('/delete-contact', {method: 'POST', body: params});
  }
  