const quoteText=document.querySelector('.quote');
const author = document.querySelector('.author .name');
const  quoteBtn=document.querySelector("button");
const soundBtn= document.querySelector('.sound');
const copyBtn= document.querySelector('.copy');
const twitterBtn= document.querySelector('.twitter');


const randomQuote=()=>{
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    console.log(result)   
    quoteText.innerText=result.content;
       author.innerText=result.author;
       quoteBtn.innerText="New Quote";
       quoteBtn.classList.remove("loading");
    })
}
soundBtn.addEventListener("click",()=>{
    //note:--This Web Speech API interface represents a speech request. 
    //It contains the content the speech service should read and information about how to read
    let utter=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utter);
    //note:-- speak moethod of speechSynthesis speaks the utter


})
copyBtn.addEventListener("click",()=>{
    //coping the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText);
})
twitterBtn.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
    
})
quoteBtn.addEventListener("click",randomQuote);