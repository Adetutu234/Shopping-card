// basket
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var count1 =0
var total = 0


function counter() {
    count1++ 
    document.getElementById('count1').innerText = count1;
    total += 100;
    document.querySelector('.total').innerText = total + "$";
}
btn2.onclick = function counter2(params) {
    if (count1>0) {
        count1--
        document.getElementById('count1').innerText = count1;
        total -=100; 
        document.querySelector('.total').innerText = total + "$"
    }
}
function deleted() {
    total -=100*count1;
    document.querySelector('.total').innerText = total + "$";
    count1=0
    document.getElementById('count1').innerText = count1;
}
function heart1() {
        document.getElementById('heart1').classList.toggle('liked')
}

// socks

var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var count2 = 0
var total = 0


function counter2() {
    count2++
    document.getElementById('count2').innerText = count2;
    total += 20;
    document.querySelector('.total').innerText = total + "$"
}
btn4.onclick = function counter2() {
    if (count2>0) {
        count2--
        document.getElementById('count2').innerText = count2;
        total -=20; 
        document.querySelector('.total').innerText = total + "$"
    }
}
function deleted2() {
    total -=20*count2;
    document.querySelector('.total').innerText = total + "$"
    count2=0;
    document.getElementById('count2').innerText = count2;
}
heart2.onclick = function heart2() {
    document.getElementById('heart2').classList.toggle('liked')
}

// Bag

var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')
var count3 = 0
var total = 0


function counter3() {
    count3++
    document.getElementById('count3').innerText = count3;
    total += 50;
    document.querySelector('.total').innerText = total + "$"
}
btn6.onclick = function counter3() {
    if (count3>0) {
        count3--
        document.getElementById('count3').innerText = count3;
        total -=50;
        document.querySelector(".total").innerText = total + "$"
    }
}
function deleted3() {
    total -=50*count3;
    document.querySelector('.total').innerText = total + "$"
    count3=0
    document.getElementById('count3').innerText = count3;
}
function heart3() {
    document.getElementById("heart3").classList.toggle('liked')
}