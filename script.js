
var sign = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces","Not a real date."];
var message =[ "Sometimes later becomes never. Do it now.","Don't stop when you're tired, stop when you're done.","Wake up with determination, go to bed with satisfaction.","Little things make big days."
    ,"The power of imagination makes you infinite","Live your beliefs and turn the world around.","Be yourself, everyone else is already taken.","Hard work beats talent when talent refuses to work hard.",
    "You are what you repeatedly do, excellence therefore, is not an act but a habit.","Stop, collaborate and listen.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.","To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Not a real date."];
var image =["img/aries.jpg","img/taurus.jpg","img/gemini.jpg","img/cancer.jpg","img/leo.jpg","img/virgo.jpg","img/libra.jpg","img/scorpio.jpg","img/sagittarius.jpg","img/capricorn.jpg","img/aquarius.jpg","img/pisces.jpg","img/notreal.jpg"]
function go(){
    var month =document.getElementById("month").value;
    console.log(month);
    var day =document.getElementById("day").value;
    console.log(day);
    var name=document.getElementById("userName").value;

   var signNum= determineSign(day,month);

    document.getElementById( "message").innerHTML = name + "!! " + message[signNum];
    document.getElementById("sign").innerHTML=sign[signNum];
    document.getElementById("image").src= image[signNum];
}
function determineSign(day,month) {
    if((month==3 && day >= 21)||(month == 4 && day <= 19)){
       return 0;
    }
    if((month == 4 && day>=20 && day!==31)||(month == 5 && day <= 20)){
        return 1;
    }
    if((month==5 && day>=21)||(month==6 && day<=20)){
        return 2;
    }
    if((month==6 && day>=21 && day<31)||(month==7 && day<=22)){
        return 3;
    }
    if((month==7 && day>=23)||(month==8 && day<=22)){
        return 4;
    }
    if((month==8 && day>=23)||(month==9 && day<=22)){
        return 5;
    }
    if((month==9 && day>=23 && day<31)||(month==10 && day<=22)){
        return 6;
    }
    if((month==10 && day>=23)||(month==11 && day<=21)){
        return 7;
    }
    if((month==11 && day>=22 && day<31)||(month==12 && day<=21)){
        return 8;
    }
    if((month==12 && day>= 22)||(month==1 && day<=19)){
        return 9;
    }
    if((month==1 && day>=20)||(month==2 && day<=18)){
        return 10;
    }
    if((month==2 && day>=19 && day<28)||(month==3 && day<=20)){
        return 11;
    }
    if(month==2 && day>28){
        return 12;
    }
    if(month==4 && day>30){
        return 12;
    }
    if(month==6 && day>30){
        return 12;
    }
    if(month==9 && day>30){
        return 12;
    }
    if(month==11 && day>30){
        return 12;
    }
}

