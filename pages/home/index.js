import articles from "../../src/js/global.js";


const body = document.body

var form = document.createElement('form');



var submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit1');
submitButton.textContent = 'Subscribe';

form.addEventListener('submit1', function(event) {
    event.preventDefault(); 
    
    alert('Subscribed with email: ' );
});


form.prepend(submitButton);

document.getElementById("form").prepend(form);



//text color//
document.getElementById("pharagrap") .innerHTML =`
<p id="button" style=" display: flex; height:40px; width:200px; font-family: sans-serif;  background: linear-gradient(20deg,red,yellow);justify-content: center;
border-radius: 50px; align-items: center; margin-left: 45%;margin-bottom:50px; height:50px  ">👋 Meet Personally </p>

<h1 id="title" style=" font-weight: bold; background: linear-gradient(60deg,#C41740,#EA9C28);  -webkit-background-clip :text;
color: transparent; text-align: center; font-family:sans-serif; font-size: 70px;">  Minimal blog template for <br> creative expressions </h1>

<p style="text-align: center; font-family: sans-serif; font-size:25px; line-height: 1.5 ; color: #476457; margin-top:20px"> 100% customisable and SEO-friendly blog template <br> for personal and commercial purposes. </p>

`
//cate//



document.getElementById("daily").innerHTML = `
<div>Daily Digest</div>`

document.getElementById("viewAll-1").addEventListener("click", function(event){
    console.log("View all!!!");
    alert("View all");
    return true;
    
});


document.getElementById("DesignTools").innerHTML = `
<div>Design Tools</div>`

document.getElementById("viewAll").addEventListener("click", function(event){
    console.log("View all!!!");
    alert("View all");
    return true;
    
});


document.getElementById("Tutorials").innerHTML = `
<div>Tutorials</div>`

document.getElementById("viewAll").addEventListener("click", function(event){
    console.log("View all!!!");
    alert("View all");
    return true;
    
});



let count1 = 0;
for (let i = 0; i < articles.length; i++) {
  if (count1 < 3) {
    if (articles[i].category === "daily-trends") {
      document.getElementById("articleContainer").innerHTML += `
      <a href="../../pages/single/index.html?id=${articles[i].id}"><div class="card">
      <div class="card-info">
    
      <h4>${articles[i].publishDate} </h4>
      <h1>${articles[i].title}<h1>
      <p>${articles[i].paragraphs[0]}</p>
      </div>
      <div class="img"><img src="${articles[i].primaryImageUrl}"> </div>
    </div>
                `;
                count1++; 
    }
  }
}



let count2 = 0;
for (let i = 0; i < articles.length; i++) {
  if (count2 < 3) {
    if (articles[i].category === "Development Tools") {
      document.getElementById("articleContainer1").innerHTML += `
      <a href="../../pages/single/index.html?id=${articles[i].id}"><div class="card">
      <div class="card-info">
    
      <h4>${articles[i].publishDate} </h4>
      <h1>${articles[i].title}<h1>
      <p>${articles[i].paragraphs[0]}</p>
      </div>
      <div class="img"><img src="${articles[i].primaryImageUrl}"> </div>
    </div>
                `;
                count2++; 
    }
  }
}



let count3 = 0;
for (let i = 0; i < articles.length; i++) {
  if (count3 < 3) {
    if (articles[i].category === "Tutorials") {
      document.getElementById("articleContainer2").innerHTML += `
      <a href="../../pages/single/index.html?id=${articles[i].id}"><div class="card">
      <div class="card-info">
    
      <h4>${articles[i].publishDate} </h4>
      <h1>${articles[i].title}<h1>
      <p>${articles[i].paragraphs[0]}</p>
      </div>
      <div class="img"><img src="${articles[i].primaryImageUrl}"> </div>
    </div>
                `;
                count3++; 
    }
  }
}









let container = document.createElement("div");
container.classList.add("container");
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
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Subscribe';

form.addEventListener('submit', function(event) {
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