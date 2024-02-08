document.getElementById("cell").onclick = function(){
    alert("hey, read the paragraph that pops out")
    document.getElementById("kell").innerHTML = "hey, i can sing";  
}

var t = document.getElementById("tell");

t.addEventListener("change", function(){
    var call = document.getElementById("tell").value;
    document.getElementById('mell').innerHTML = call;
})

var q = document.getElementById("slide");
q.addEventListener("mouseover", function() {
    document.getElementById("slide").style = "background-color: gold"
})

var a = document.getElementById("area");
a.addEventListener("keypress", function() {
    document.getElementById("areaplace").innerHTML = area.value;
})

var b = document.getElementById("area").addEventListener("focus", function() {
    document.getElementById("area").style.backgroundColor = "pink"
})

var z = document.getElementById("area").addEventListener("blur", function() {
    document.getElementById("area").style.backgroundColor = "grey";
    document.getElementById("slide").style.backgroundColor = "darkred";
    document.getElementById("areaplace").style.color = "gold"
})

var x = window.addEventListener("resize", function() {
    this.document.getElementById('width').innerHTML ="<p> screen-width:" + this.window.innerWidth;
    this.document.getElementById("height").innerHTML = "<p> screen-height:" + this.window.innerHeight;
})
function getrand(min, max){
    var lay = Math.floor((Math.random() * (max - min + 1)) + min)
    document.getElementById("sap").innerHTML = lay;
}

var cl = document.getElementById("state").addEventListener("click", function() {
    var age = document.getElementById("age").value;
    alert(age);
    if(age <= 18){
        return alert("you're too young to enter");
    }else {
        alert("you're just the right age")
    }
});
function greet(){
    var time = new Date().getHours;
    if (time > 11){
        return alert("good morning")
    }else if (time < 18){
        return alert("good afternoon")
    }else {
        return alert("good night")
    }
}

var list = "dragon";
switch(list) {
    case "dog":
        document.write("clor is braon")
        break;
    case "dragon":
        document.write("color is red")
        break;
}

var clist = ["dog", "cat", "lizard", "mouse", "chicken"];
for(value of clist){
    document.write("<br>" + value)
}

var i = 0;
while(i < 3){
    document.write("<br>" + "hello world");
    i++;
};

var i = 0;
var kin = "beast";
var len = kin.length;
do{
    document.write("<p>sleepy</p>");
    i++;
}while(i < len);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(values of numbers){
    if(values == 4){
        continue;
    }
    if (values == 7){
        break;
    }
document.write("<br>" + values);
}

var timeout = setInterval(function(){
    var lenme = "300px"
    document.getElementById("area").style.width = lenme
    if(lenme == "300px"){
        document.getElementById("area").style.width = "70px"
    }
}, 3000)

