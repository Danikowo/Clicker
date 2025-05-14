let score = 0;
let clickPower = 1;
let autoClickerPower = 0;
let autoClickerCost = 50;
let clickerCost = 10;
let BackGround1Cost = 20;
let BackGround2Cost = 30;
let BackGround3Cost = 45;
let BackGround4Cost = 65;
let ClickIcon2Cost = 35;
let ClickIcon3Cost = 45;
let ClickIcon4Cost = 60;
let ClickIcon5Cost = 70;
let ClickIcon6Cost = 80;
let ClickIcon7Cost = 95;
let BonusX2Cost = 150;
let SkidkaX2Cost = 150;
let autoClickerInterval = null;

function loadData() {
	const savedClickPower = localStorage.getItem("clickPower");
	const savedAutoClickerPower = localStorage.getItem("autoClickerPower");
	const savedAutoClickerCost = localStorage.getItem("autoClickerCost");
	const savedScore = localStorage.getItem("score");
	const savedClickerCost = localStorage.getItem("clickerCost");

	if (savedScore) score = parseInt(savedScore);
	if (savedClickPower) clickPower = parseInt(savedClickPower);
	if (savedAutoClickerPower) autoClickerPower = parseInt(savedAutoClickerPower);
	if (savedAutoClickerCost) autoClickerCost = parseInt(savedAutoClickerCost);
	if (savedClickerCost) clickerCost = parseInt(savedClickerCost);

	document.getElementById("score").innerHTML = score;
	document.getElementById("priceClick").innerHTML = clickerCost;
	document.getElementById("priceAuto").innerHTML = autoClickerCost;
}

function saveData() {
	localStorage.setItem("score", score);
	localStorage.setItem("clickPower", clickPower);
	localStorage.setItem("autoClickerPower", autoClickerPower);
	localStorage.setItem("autoClickerCost", autoClickerCost);
	localStorage.setItem("clickerCost", clickerCost);
}

document.getElementById("click").addEventListener("click", function () {
	score += clickPower;
	document.getElementById("score").innerHTML = score;

	const animtext = document.createElement("div");
	animtext.innerHTML = `+${clickPower}`;
	animtext.className = "animtext";
	cl = document.getElementById("click");
	wi = this.clientWidth;
	he = this.clientHeight / 3;
	animtext.style.top = `${he}px`;
	animtext.style.left = `${wi}px`;
	animtext.style.right = `${wi}px`;
	cl.appendChild(animtext);
	setTimeout(() => animtext.remove(), 1000);
	saveData();
});
function open_but() {
	document.getElementById("dialog").showModal();
	document.getElementById("Moneylol").innerHTML = score;
}
function close_but() {
	document.getElementById("dialog").close();
}

function upgradeClick() {
	if (score >= clickerCost) {
		score -= clickerCost;
		clickPower+=1;
		clickerCost *=2;
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceClick").innerHTML = clickerCost;
	}
	saveData();
}
function autoClick() {
	if (score >= autoClickerCost) {
		score -= autoClickerCost;
		autoClickerPower++;
		autoClickerCost *= 3;
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceAuto").innerHTML = autoClickerCost;
		autoClickerInterval = setInterval(function () {
			score += autoClickerPower;
			document.getElementById("score").innerHTML = score;
		}, 1000);
	}
	saveData();
}
function BuyBackground1() {
	if (score >= BackGround1Cost) {
		score -= BackGround1Cost;
		backGround1()
		BackGround1Cost = 0;
		priceBackGround1 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceBackGround1").innerHTML = priceBackGround1;
			document.getElementById("Moneylol").innerHTML = score;
}
}
function BuyBackground2() {
	if (score >= BackGround2Cost) {
		score -= BackGround2Cost;
		backGround2()
		BackGround2Cost = 0;
		priceBackGround2 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceBackGround2").innerHTML = priceBackGround2;
			document.getElementById("Moneylol").innerHTML = score;
}
}
function BuyBackground3() {
	if (score >= BackGround3Cost) {
		score -= BackGround3Cost;
		backGround3()
		BackGround3Cost = 0;
		priceBackGround3 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceBackGround3").innerHTML = priceBackGround3;
			document.getElementById("Moneylol").innerHTML = score;
}
}
function BuyBackground4() {
	if (score >= BackGround4Cost) {
		score -= BackGround4Cost;
		backGround4()
		BackGround4Cost = 0;
		priceBackGround4 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceBackGround4").innerHTML = priceBackGround4;
			document.getElementById("Moneylol").innerHTML = score;
}
}

function BuyClickIcon2() {
	if (score >= ClickIcon2Cost) {
		score -= ClickIcon2Cost;
		ClickIcon2()
		ClickIcon2Cost = 0;
		priceClickIcon2 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceClickIcon2").innerHTML = priceClickIcon2;
			document.getElementById("Moneylol").innerHTML = score;
}
}

function BuyClickIcon3() {
	if (score >= ClickIcon3Cost) {
		score -= ClickIcon3Cost;
		ClickIcon3()
		ClickIcon3Cost = 0;
		priceClickIcon3 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceClickIcon3").innerHTML = priceClickIcon3;
			document.getElementById("Moneylol").innerHTML = score;
}
}

function BuyClickIcon4() {
	if (score >= ClickIcon4Cost) {
		score -= ClickIcon4Cost;
		ClickIcon4()
		ClickIcon4Cost = 0;
		priceClickIcon4 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceClickIcon4").innerHTML = priceClickIcon4;
			document.getElementById("Moneylol").innerHTML = score;
}
}

function BuyClickIcon5() {
	if (score >= ClickIcon5Cost) {
		score -= ClickIcon5Cost;
		ClickIcon5()
		ClickIcon5Cost = 0;
		priceClickIcon5 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceClickIcon5").innerHTML = priceClickIcon5;
			document.getElementById("Moneylol").innerHTML = score;
}
}

function BuyClickIcon6() {
	if (score >= ClickIcon6Cost) {
		score -= ClickIcon6Cost;
		ClickIcon6()
		ClickIcon6Cost = 0;
		priceClickIcon6 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceClickIcon6").innerHTML = priceClickIcon6;
			document.getElementById("Moneylol").innerHTML = score;
}
}

function BuyClickIcon7() {
	if (score >= ClickIcon7Cost) {
		score -= ClickIcon7Cost;
		ClickIcon7()
		ClickIcon7Cost = 0;
		priceClickIcon7 = "Куплено";
		document.getElementById("score").innerHTML = score;
		document.getElementById("priceClickIcon7").innerHTML = priceClickIcon7;
			document.getElementById("Moneylol").innerHTML = score;
}
}


function backGround1(){
const buttonbg1 = document.getElementById('ColorBackGround');
buttonbg1.addEventListener('click', function() {
	const body = document.querySelector('body');
	body.style.backgroundImage = "url('BackGround1.png')";
	body.style.backgroundSize = '100%'
});}


function backGround2() {
const buttonbg2 = document.getElementById('ColorBackGround2');
buttonbg2.addEventListener('click', function() {
	const body = document.querySelector('body');
	body.style.backgroundImage = "url('BackGround2.webp')";
	body.style.backgroundSize = '100%'
});
}

function backGround3() {
const buttonbg3 = document.getElementById('ColorBackGround3');
buttonbg3.addEventListener('click', function() {
	const body = document.querySelector('body');
	body.style.backgroundImage = "url('BackGround4.webp')";
	body.style.backgroundSize = '100%'
});
}

function backGround4() {
const buttonbg4 = document.getElementById('ColorBackGround4');
buttonbg4.addEventListener('click', function() {
	const body = document.querySelector('body');
	body.style.backgroundImage = "url('BackGround3.webp')";
	body.style.backgroundSize = '100%'
});
}


function BonusX2(){
		if (score >= BonusX2Cost) {
		score -= BonusX2Cost;
		clickPower *= 2;
		priceX2 = "Куплено на 30 секунд"
		document.getElementById("score").innerHTML = score;
    document.getElementById("X2").style.background = "grey"
		document.getElementById("priceX2").innerHTML = priceX2;	
			document.getElementById("Moneylol").innerHTML = score;
		setTimeout(function(){
			clickPower /= 2;
			BonusX2Cost *= 2;
			priceX2 = BonusX2Cost;
			document.getElementById("priceX2").innerHTML = priceX2;	
			document.getElementById("X2").style.background = "orange";
				document.getElementById("Moneylol").innerHTML = score;
		},30000)
	}
}

function SkidkaX2(){
		if (score >= SkidkaX2Cost) {
		score -= SkidkaX2Cost;
		clickerCost /= 2;
		autoClickerCost /= 2;
		ClickIcon2Cost /= 2;
		ClickIcon3Cost /= 2;
		ClickIcon4Cost /= 2;
		ClickIcon5Cost /= 2;
		ClickIcon6Cost /= 2;
		ClickIcon7Cost /= 2;
		BackGround1Cost /= 2;
		BackGround2Cost /= 2;
		BackGround3Cost /= 2;
		BackGround4Cost /= 2;
		priceSkidkaX2 = "Куплено на 30 секунд"
		document.getElementById("priceBack1").innerHTML = BackGround1Cost;
		document.getElementById("priceBack2").innerHTML = BackGround2Cost;
		document.getElementById("priceBack3").innerHTML = BackGround3Cost;
		document.getElementById("priceBack4").innerHTML = BackGround4Cost;
		document.getElementById("priceIcon2").innerHTML = ClickIcon2Cost;
		document.getElementById("priceIcon3").innerHTML = ClickIcon3Cost;
		document.getElementById("priceIcon4").innerHTML = ClickIcon4Cost;
		document.getElementById("priceIcon5").innerHTML = ClickIcon5Cost;
		document.getElementById("priceIcon6").innerHTML = ClickIcon6Cost;
		document.getElementById("priceIcon7").innerHTML = ClickIcon7Cost;
		document.getElementById("priceClick").innerHTML = clickerCost;
		document.getElementById("priceAuto").innerHTML = autoClickerCost;
		document.getElementById("score").innerHTML = score;
    document.getElementById("SkidX2").style.background = "grey"
			document.getElementById("Moneylol").innerHTML = score;
		document.getElementById("priceSkidkaX2").innerHTML = priceSkidkaX2;	
		setTimeout(function(){
			clickerCost *= 2;
		  autoClickerCost *= 2;
			SkidkaX2Cost *= 2;
			ClickIcon2Cost *= 2;
			ClickIcon3Cost *= 2;
			ClickIcon4Cost *= 2;
			ClickIcon5Cost *= 2;
			ClickIcon6Cost *= 2;
			ClickIcon7Cost *= 2;
			BackGround1Cost *= 2;
			BackGround2Cost *= 2;
			BackGround3Cost *= 2;
			BackGround4Cost *= 2;
			priceSkidkaX2 = SkidkaX2Cost;
			document.getElementById("priceBack1").innerHTML = BackGround1Cost;
			document.getElementById("priceBack2").innerHTML = BackGround2Cost;
			document.getElementById("priceBack3").innerHTML = BackGround3Cost;
			document.getElementById("priceBack4").innerHTML = BackGround4Cost;
			document.getElementById("priceIcon2").innerHTML = ClickIcon2Cost;
			document.getElementById("priceIcon3").innerHTML = ClickIcon3Cost;
			document.getElementById("priceIcon4").innerHTML = ClickIcon4Cost;
			document.getElementById("priceIcon5").innerHTML = ClickIcon5Cost;
			document.getElementById("priceIcon6").innerHTML = ClickIcon6Cost;
			document.getElementById("priceIcon7").innerHTML = ClickIcon7Cost;
			document.getElementById("priceClick").innerHTML = clickerCost;
			document.getElementById("priceAuto").innerHTML = autoClickerCost;
			document.getElementById("priceSkidkaX2").innerHTML = priceSkidkaX2;	
			document.getElementById("SkidX2").style.background = "orange";
				document.getElementById("Moneylol").innerHTML = score;
		},30000)
	}
}



const buttonIcon1 = document.getElementById('ClickIcon1');
buttonIcon1.addEventListener('click', function() {
	click.style.backgroundImage = "url('ClickIcon1.png')";
  click.style.width = '400px'
	click.style.height = '250px'
});

function ClickIcon2(){
const buttonIcon2 = document.getElementById('ClickIcon2');
buttonIcon2.addEventListener('click', function() {
	click.style.backgroundImage = "url('ClickIcon2.png')";
  click.style.width = '400px'
	click.style.height = '250px'
});}

function ClickIcon3(){
const buttonIcon3 = document.getElementById('ClickIcon3');
buttonIcon3.addEventListener('click', function() {
	click.style.backgroundImage = "url('ClickIcon3.jpg')";
   click.style.width = '250px'
	click.style.height = '250px'
});}

function ClickIcon4(){
const buttonIcon4 = document.getElementById('ClickIcon4');
buttonIcon4.addEventListener('click', function() {
	click.style.backgroundImage = "url('ClickIcon4.png')";
 click.style.width = '250px'
	click.style.height = '250px'
});}

function ClickIcon5(){
const buttonIcon5 = document.getElementById('ClickIcon5');
buttonIcon5.addEventListener('click', function() {
	click.style.backgroundImage = "url('ClickIcon5.jpg')";
 click.style.width = '250px'
	click.style.height = '250px'
});}

function ClickIcon6(){
const buttonIcon6 = document.getElementById('ClickIcon6');
buttonIcon6.addEventListener('click', function() {
	click.style.backgroundImage = "url('ClickIcon6.png')";
 click.style.width = '250px'
	click.style.height = '250px'
});}

function ClickIcon7(){
const buttonIcon7 = document.getElementById('ClickIcon7');
buttonIcon7.addEventListener('click', function() {
	click.style.backgroundImage = "url('ClickIcon7.webp')";
 click.style.width = '250px'
	click.style.height = '250px'
});}




loadData();
