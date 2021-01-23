const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random?minLength=1w00' ;
const displayarea = document.getElementById("display-area") ;
const quotearea = document.querySelector('.quotearea') ;

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
     .then(response => response.json())
     .then(data => data.content) ;
 }

async function myFunction() {
    const quote =  await getRandomQuote() ;
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20 && time > 10) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    displayarea.innerHTML = greeting ;
    quotearea.innerHTML = quote ;
}
myFunction()

async function getNewQuote(){
    const quote = await getRandomQuote() ;
    quotearea.innerHTML = quote ;
}