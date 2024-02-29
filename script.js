const apikey = "&apikey=f278baab8f7cd00f36ca22486bb3ab35";
const url = "https://gnews.io/api/v4/search?q=";
// let cardClone='';

window.addEventListener("load",()=>fetchNews("India"));

async function fetchNews(query){
    const res=await fetch(`${url}${query}${apikey}`);
    const data=await res.json();
    console.log(data);
    bindData(data.articles);
}


function bindData(articles){

    const cards_container=document.getElementById("cards-container");
    const template=document.getElementById("card-template");

    cards_container.innerHTML='';

    articles.forEach(article => {
        if(!article.image) return;

        cardClone=template.content.cloneNode(true);

        fillDataIntoCard(cardClone,article);
        cards_container.appendChild(cardClone);
    });
}


function fillDataIntoCard(cardClone,article){
       const newsImg=cardClone.querySelector('#news-img');
       const newsTitle=cardClone.querySelector('#news-title');
       const pubDate=cardClone.querySelector('#pub-date');
       const newsDesc=cardClone.querySelector('#news-desc');

       newsImg.src=article.image;
       newsTitle.innerHTML=article.title;
       newsDesc.innerHTML=article.description;

       const date=new Date(article.publishedAt).toLocaleString("en-US",function(){
             timeZone:"Asia/jakarta"
       });
       
       pubDate.innerHTML=`${article.source.name} . ${date}`;

       // content page design here
       
       cardClone.querySelector('#card').addEventListener('click',function(){
        var newWindow=window.open('','_blank');
      
        newWindow.document.write('<!DOCTYPE html>');
        newWindow.document.write('<html>');
        newWindow.document.write('<head>');
        newWindow.document.write('<title>Window Content</title>');
        newWindow.document.write('<style>');
        newWindow.document.write('body { font-family: Arial, sans-serif; background-color: #181818; color:white; }');
        newWindow.document.write('h1 {font-weight: 600; line-height: 34px; font-weight: 600;font-family: sans-serif;}');
        newWindow.document.write('p { font-weight: 500;font-size: 16px;line-height: 27px;}');
        newWindow.document.write('img {display: block;border-radius:1rem;width: 720px;height: 400px;margin-left: auto;margin-right: auto;object-fit: cover;}');
        newWindow.document.write('</style>');
        newWindow.document.write('</head>');
        newWindow.document.write('<body>');
        newWindow.document.write(`<h1>${article.title}</h1>`);
        newWindow.document.write(`<img src='${article.image}'>`);
        newWindow.document.write(`<p>${article.content}</p>`);  
        newWindow.document.write('</body>');
        newWindow.document.write('</html>');
       });
}


document.getElementById('searchButton').addEventListener('click',function(){
    
    const value=document.getElementById('searchText').value;

     if(value!=""){
        fetchNews(`${value}`);    
     }

     else{
        alert("Search Type Not Be Empty");
     }


});


function checkValidate(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the provided email against the regular expression
    return (emailRegex.test(email));
}

// Example usage:

function validateEmail(){

    const email =document.getElementById("member_email").value;
    if (checkValidate(email)) {
        window.open("page2.html",'_self');
    } else {
        alert('Email is not valid');
    }
    
}