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

/**
 * Adds a random greeting to the page.
 */
/** 
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
*/
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