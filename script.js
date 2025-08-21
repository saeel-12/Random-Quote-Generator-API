// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const quoteBtn = document.getElementById("quote-btn");

// //function api url
// const quoteAPIUrl = "https://api.quotable.io/random";

// //function to get random quote
// const getQuote = async(apiUrl)=>{
// //setting quote button text to loading Quote while getting respone
//     quoteBtn.innerHTML = `<i class="fa fa-spinner fa-spin"></i>Loading Quotes....`;
//     //fetching data
//     const result= await fetch(apiUrl);

//     //getting dtata into json format
//     const data = await result.json();

//     //set new quote
//     quote.innerText = data.content;
//     //set new author
//     author.innerText = ` - ${data.author}`;

//     //setting quote button text back to original
//     quoteBtn.innerText = 'New Quote';
// }

// getQuote(quoteAPIUrl);

//............................

// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const quoteBtn = document.getElementById("quote-btn");

// const quoteAPIUrl = "https://api.quotable.io/random";

// const getQuote = async(apiUrl)=>{
//     quoteBtn.innerHTML = `<i class="fa fa-spinner fa-spin"></i>Loading Quotes....`;
//     const result= await fetch(apiUrl);
//     const data = await result.json();
//     quote.innerText = data.content;
//     author.innerText = ` - ${data.author}`;
//     quoteBtn.innerText = 'New Quote';
// }

// getQuote(quoteAPIUrl);

const quoteAPIUrl = "https://api.quotable.io/random";
<<<<<<< HEAD
async function getQuote() {
  try {
    document.querySelector("#quote-btn").innerHTML = `<i class="fa fa-spinner fa-spin"></i>Loading Quotes....`;
    const res = await fetch(quoteAPIUrl);
    const data = await res.json();
    document.querySelector("#quote").textContent = `"${data.content}"`;
    document.querySelector("#author").textContent = `- ${data.author}`;
    document.querySelector("#quote-btn").innerText = "New Quote";
  } catch (error) {
    document.querySelector("#quote").textContent =
      "Oops! Something went wrong.";
    document.querySelector("#author").textContent = "";
    setTimeout(() => {
        
        document.querySelector("#quote-btn").innerText = "Try Again";
    }, 1000);
  }
=======

//function to get random quote
const getQuote = async(apiUrl)=>{
//setting quote button text to loading Quote while getting respone
    //quoteBtn.innerHTML = `<i class="fa fa-spinner fa-spin"></i>Loading Quotes....`;
    //fetching data
    const result= await fetch(apiUrl);

    //getting dtata into json format
    const data = await result.json();
    
    //set new quote
    quote.innerText = data.content;
    //set new author
    author.innerText = ` - ${data.author}`;

    //setting quote button text back to original
    //quoteBtn.innerText = 'New Quote';
>>>>>>> 09e45e1eff39e7093a99d0cfb0fdc3eb994df12c
}
