const body = document.body

let container = document.createElement("div");
container.classList.add("container");
body.prepend(container);

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
footer.innerHTML = "<p>Copyright 2024 - Elikem Daniels</p>"
