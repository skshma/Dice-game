
// image one
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImages1="images/dice" + randomNumber1 + ".png"
var imags1=document.getElementsByTagName("img")[0];
imags1.setAttribute("src", randomImages1)
// image two 
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImages2="images/dice" + randomNumber2 + ".png"
var imags2=document.getElementsByTagName("img")[1];
imags2.setAttribute("src", randomImages2)

// win heading
var heading=document.getElementsByTagName("h2")[0]
if (randomNumber1<randomNumber2){
  heading.innerHTML="🚩 Player2 win"
  imags2.classList.add("style");
}
else if (randomNumber1==randomNumber2) {
  heading.innerHTML="🚩 Match draw 🚩"
}
else{
  heading.innerHTML="🚩 Player1 win"
  imags1.classList.add("style");
}

