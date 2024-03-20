import articles from "../../src/js/global.js";

const body = document.body;

// subcribe form

var form = document.createElement("form");

var submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Subscribe";

form.addEventListener("submit", function (event) {
  event.preventDefault();

});

form.prepend(submitButton);

document.getElementById("form").prepend(form);

// ===========================================================

// read url parameters
const paramString = window.location.search ;
const urlParam = new URLSearchParams (paramString);

// console.log(urlParam.get("name"));



document.getElementById("pharagrap").innerHTML = `


<h1 id="title">  ${urlParam.get("name")} </h1>

<p style="text-align: center; font-family: sans-serif; font-size:25px; line-height: 1.5 ; color: #476457; margin-top:-20px"> A description of the respective category goes right <br>here. Be as expressive as possible, but in brief. </p>

`;



for (let i = 0; i < articles.length; i++) {
  
    if (articles[i].category === urlParam.get("name")) {
      document.getElementById("articleContainer").innerHTML += `
      <a href="../../pages/single/index.html?id=${articles[i].id}"><div class="card">
      <div class="card-info">
      <h4>${articles[i].publishDate} </h4>
      <h2>${articles[i].title}</h2>
      <p style=" text-align:left;">${articles[i].paragraphs[0]}</p>
      </div>
      <div class="img"><img src="${articles[i].primaryImageUrl}"> </div>
    </div></a>
                `;
             
    }
  }



  
  document.getElementById("articleContainer").innerHTML +=`
  <div class="click" style="margin-top:2%;"><h8> <a href="">More Article</a></h8></div>`;


 
   let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

let box = document.createElement('div');
box.classList.add("box");
container.appendChild(box);

let box1 = document.createElement('div');
box1.innerHTML = "<h1>Personally Newsletter</h1>";
box1.classList.add("box1");
box.appendChild(box1);

let box2 = document.createElement('div');
box2.innerHTML = "<p>A bi-weekly newsletter of design inspiration, resources <br>and anything related to career development.</p>";
box2.classList.add("box2");
box.appendChild(box2);

var form = document.createElement('form');

var emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Email address');
emailInput.setAttribute('name', 'email');

var submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit1');
submitButton.textContent = 'Subscribe';

form.addEventListener('submit1', function(event) {
    event.preventDefault(); 

    var email = emailInput.value;

    alert('Subscribed with email: ' + email);
});

form.appendChild(emailInput);
form.appendChild(submitButton);

box.appendChild(form);

let footer = document.createElement('div');
footer.classList.add("footer");
container.appendChild(footer);
footer.innerHTML += `<p>Copyright 2024 - Elikem Daniels</p>

 `;

 

