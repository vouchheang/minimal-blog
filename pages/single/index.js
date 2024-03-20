import articles from "../../src/js/global.js";

const body = document.body;

var form = document.createElement("form");

var submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Subscribe";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Subscribed with email: ");
});

form.prepend(submitButton);

document.getElementById("form").prepend(form);

document.getElementById("pharagrap").innerHTML = `

<h1 id="title" style=" font-weight: bold; background-image: linear-gradient(60deg,#C41740,#EA9C28);  -webkit-background-clip :text;
color: transparent; text-align: center; font-family:sans-serif; font-size: 70px; margin-top:7%;"> 10 hilarious NFT sales that <br> broke the internet </h1>

<p style="text-align: center; font-family: sans-serif; font-size:15px; line-height: 1.5 ; color: #476457; margin-top:2%">  AUGUST 13, 2021 • <b style="color:black;"> DAILY DIGEST <b> </p>

`;





const parameterString = window.location.search;
const urlParams = new URLSearchParams(parameterString);
const articleId = urlParams.get("id");


  let article ;

for (let i = 0; i < articles.length; i++) {
  if (articles[i].id === articleId) {
    article=articles[i];
    document.getElementById("articleContainer").innerHTML += `
      <div class="img"><img src="${articles[i].primaryImageUrl}"></div>
      <div class="text-1">
      <p style="color:black;  font-size: 22px; ">
      ${articles[i].paragraphs[0]} <br><br>
      ${articles[i].paragraphs[1]} <br><br>
      ${articles[i].paragraphs[2]} <br><br>
      </p></div>
      <div class="img-1"><img src="${articles[i].secondaryImageUrl}"></div>
      <div class="text-2">
      <p style="color:black;  font-size: 22px;">
      ${articles[i].paragraphs[3]} <br><br>
      ${articles[i].paragraphs[4]} <br><br>
      </p>
      </div>
      <div class="none">
      <h3> ${articles[i].paragraphs[5]}</h3>
      </div>
      <div class="text-3">
      <p style="color:black;  font-size: 22px;">
      ${articles[i].paragraphs[6]} <br><br>
      ${articles[i].paragraphs[7]} <br><br>
      ${articles[i].paragraphs[8]} <br><br>
      ${articles[i].paragraphs[9]} <br><br>
      </p>
      </div>
      
      </div>
      
    </div>
                `;
  }
}
let count1 = 0;
for (let i = 0; i < articles.length; i++) {
  if (count1 < 3) {
    if (articles[i].category === article.category) {
      document.getElementById("recommend").innerHTML += `
      <a href="../../pages/single/index.html?id=${articles[i].id}"><div class="card">
      <div class="card-info">
    
      <h4>${articles[i].publishDate} </h4>
      <h1>${articles[i].title}<h1>
      <p>${articles[i].paragraphs[0]}</p>
      </div>
      <div class="img1"><img src="${articles[i].primaryImageUrl}"> </div>
    </div>
                `;
                count1++; 
    }
  }
}




let container = document.createElement("div");
container.classList.add("text-5");
document.body.appendChild(container);

let box = document.createElement('div');
box.classList.add("box");
container.appendChild(box);

let box1 = document.createElement('div');
box1.innerHTML = "<h2>Personally Newsletter</h2>";
box1.classList.add("box1");
box.appendChild(box1);

let box2 = document.createElement('div');
box2.innerHTML = "<h6>A bi-weekly newsletter of design inspiration, resources <br>and anything related to career development.</h6>";
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
footer.innerHTML += `<h6>Copyright 2024 - Elikem Daniels</h6>

 `;



