let quoteText= document.getElementsByTagName('h1')[0]
let author=document.getElementsByTagName('h2')[0]
let button= document.getElementsByTagName('button')[1]
let previous=document.getElementsByTagName('button')[0]
let savedQuote='';
window.onload=randomQuote();

async function randomQuote(){
    sessionStorage.setItem('quote',quoteText.textContent)
    sessionStorage.setItem('author',author.textContent)

    let url ='https://api.quotable.io/random'
    let response= await fetch(url)
    let Quotecontent=await response.json()


    quoteText.innerHTML=Quotecontent.content;
    author.innerHTML= '-' + Quotecontent.author;
    
}
function getQuote(){
    quoteText.innerHTML=sessionStorage.getItem('quote')
    author.innerHTML=sessionStorage.getItem('author')
}

button.addEventListener('click',randomQuote)
previous.addEventListener('click',getQuote)