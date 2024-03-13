const body = document.body

var form = document.createElement('form');



var submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Subscribe';

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    

    alert('Subscribed with email: ' );
});


form.prepend(submitButton);

document.getElementById("form").prepend(form);

document.getElementById("pharagrap") .innerHTML =`


<h1 id="title" style=" font-weight: bold; background: linear-gradient(60deg,#C41740,#EA9C28);  -webkit-background-clip :text;
color: transparent; text-align: center; font-family:sans-serif; font-size: 50px; ">  Daily Digest </h1>

<p style="text-align: center; font-family: sans-serif; font-size:25px; line-height: 1.5 ; color: #476457; margin-top:-20px"> A description of the respective category goes right <br>here. Be as expressive as possible, but in brief. </p>

`




document.getElementById("titles").innerHTML = `
<p style="margin-bottom:40px;">AUGUST 13, 2021 </p>
<h3>10 Hilarious Cartoons That Depict Real-Life <br>Problems of Programmers</h3>
<p>Redefined the user acquisition and redesigned the onboarding <br>experience, all within 3 working weeks</p>`


const imageUrls = [
   "https://images.unsplash.com/photo-1637084576418-3f25344ccb7c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://media.istockphoto.com/id/1414348176/photo/businessman-touching-screen-virtual-icon-eco-energy-sustainable-environment-digital.webp?s=2048x2048&w=is&k=20&c=xqP8jr92DRztn9Rcmb_50m0jMBGzwDn8lioko9fjdko=",
   "https://media.istockphoto.com/id/1812239311/photo/a-businessman-is-displaying-a-3d-hologram-concept-of-the-ai-brain-on-his-hand-he-is-wearing-a.jpg?s=1024x1024&w=is&k=20&c=PrVa4T7leqvX1a1Phqf_gByZPcSo9SaLQs3lNpK0p44=",
  ];





  const imgContainer = document.getElementById("img");

for (let i = 0; i < imageUrls.length; i++) {
  const img = document.createElement("img");
  img.src = imageUrls[i];
  img.style.cssText = "height:100%; width:100%; border-radius: 10px; margin-right: 20px; object-fit: cover;";
  imgContainer.appendChild(img);
}

