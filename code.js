const buttonAddP = document.getElementById("addP");
buttonAddP.addEventListener("click", addP);
const buttonMinusP = document.getElementById("minusP");
buttonMinusP.addEventListener("click", minusP);
const buttonAddN = document.getElementById("addN");
buttonAddN.addEventListener("click", addN);
const buttonMinusN = document.getElementById("minusN");
buttonMinusN.addEventListener("click", minusN);
var number = 0;


function addP() {
    number+=0.01;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
  }
function minusP() {
    number-=0.01;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
  }
  function addN() {
    number+=0.05;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
  }
function minusN() {
    number-=0.05;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
  }


  function rolldice()
  {
      let a = parseInt(Math.random()*6)+1;
      let b = parseInt(Math.random()*6)+1;
      const para = document.createElement("p");
      para.textContent = "Dice one: "+a+" Dice two: "+b+" Both dice: "+(a+b);
      document.body.appendChild(para);
  }


