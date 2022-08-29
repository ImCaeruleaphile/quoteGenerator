const quoteContainer = document.getElementById('quote-generator');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');

let apiQuotes=[];

//Show Loading
function loading(){
    //loader.hidden=false;
    //quoteContainer.hidden=true;
}
//Hide Loading
function complete(){
    if(!loader.hidden){
    //quoteContainer.hidden=false;
    //loader.hidden=true;
}
}

//Show new Quotes
function newQuotes(){
    loading();
    //Pick a random quote from apiQuotes array
    ///const quote=localQuotes[Math.floor(Math.random() * localQuotes.length)];
    const quote=apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    //Check if author field is blank and replace it with 'Unknown'
    if(!quote.author){
        author.textContent='Unknown';
    }else{
        authorText.textContent=quote.author;
    }
    //Check Quote length to determine styling
    if(quote.text.length>50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    //Set Quote Hide Loader
    quoteText.textContent=quote.text;
    //console.log(quote);
    complete();
}



//Get Quotes From API
async function getQuotes(){
    loading();
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response= await fetch(apiUrl);
        apiQuotes= await response.json();
        newQuotes();
        //console.log(apiQuotes[7]);
    }catch(error){
        //Catch Error Here
        
    }

}
//Tweet Quote
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quote.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank')//to open in new tab
}

//Event Listeners
newQuoteBtn.addEventListener('click',newQuotes);
twitterBtn.addEventListener('click',tweetQuote);




//On Load
getQuotes();
///newQuotes();
