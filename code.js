const buttonAddP = document.getElementById("addP");
buttonAddP.addEventListener("click", addP);
const buttonMinusP = document.getElementById("minusP");
buttonMinusP.addEventListener("click", minusP);
const buttonAddN = document.getElementById("addN");
buttonAddN.addEventListener("click", addN);
const buttonMinusN = document.getElementById("minusN");
buttonMinusN.addEventListener("click", minusN);
const buttonAddD = document.getElementById("addD");
buttonAddD.addEventListener("click", addD);
const buttonMinusD = document.getElementById("minusD");
buttonMinusD.addEventListener("click", minusD);
const buttonAddQ = document.getElementById("addQ");
buttonAddQ.addEventListener("click", addQ);
const buttonMinusQ = document.getElementById("minusQ");
buttonMinusQ.addEventListener("click", minusQ);
var number = 0;
var penny = 0;
var nickel = 0;
var dime = 0;
var quarter = 0;

function addP() {
    number+=0.01;
    penny+=1;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
    document.getElementById("penny").innerHTML = penny;
  }
function minusP() {

    number-=0.01;
    penny-=1;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
    document.getElementById("penny").innerHTML = penny;

  }
function addN() {
    number+=0.05;
    nickel++;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
    document.getElementById("nickel").innerHTML = nickel;
  }
function minusN() {
    number-=0.05;
    nickel--;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
    document.getElementById("nickel").innerHTML = nickel;
  }
function addD() {
    number+=0.1;
    dime++;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
    document.getElementById("dime").innerHTML = dime;
  }
function minusD() {
    number-=0.1;
    dime--;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
    document.getElementById("dime").innerHTML = dime;
  }
function addQ() {
    number+=0.25;
    quarter++;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
    document.getElementById("quarter").innerHTML = quarter;
  }
function minusQ() {
    number-=0.25;
    quarter--;
    number= Math.round(number*100)/100;
    document.getElementById("myText").innerHTML = number;
    document.getElementById("quarter").innerHTML = quarter;
  }


  function rolldice()
  {
      let a = parseInt(Math.random()*6)+1;
      let b = parseInt(Math.random()*6)+1;
      const para = document.createElement("p");
      para.textContent = "Dice one: "+a+" Dice two: "+b+" Both dice: "+(a+b);
      document.body.appendChild(para);
  }


