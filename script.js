$(document).ready(function(){
var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 8; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = 15; // 2PM
var isPartyTime = false;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var updateclock = function()
{
var clockmessage = document.getElementById("timeEvent");
var clockimage = document.getElementById("lolcat");
if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} else if (time == napTime) {
    messageText = "IZ NAP TIME";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == wakeUpTime) {
    messageText = "IZ TIME TO GETTUP.";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time < noon) {
    messageText = "Good morning!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
} else if (time > evening) {
    messageText = "Good Evening!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
} else {
    messageText = "Good afternoon!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
}
clockmessage.innerText = messageText;
clockimage.src = image;

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
};
showCurrentTime();};
updateclock();
var onesecond = 1000;
setInterval(updateclock,onesecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var partyEvent = function()
{
	if(isPartyTime===false) {
	   isPartyTime = true;
	   time = partyTime;
		partyTimeButton.innerText = "PARTY TIME!";
		partyTimeButton.style.backgroundColor = 		"#222";
	   }
	else{
	   isPartyTime = false;
	   time = new Date().getHours();
		partyTimeButton.innerText = "PARTY OVER!";
		partyTimeButton.style.backgroundColor = 		"#0A8DAB";
		}
};
var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelector.value;
};
var napEvent = function()
{
	napTime = napTimeSelector.value;
};
var lunchEvent = function()
{
	lunchTime = lunchTimeSelector.value;
};

partyTimeButton.addEventListener('click',partyEvent);
wakeUpTimeSelector.addEventListener('change',wakeUpEvent);
napTimeSelector.addEventListener('change',napEvent);
lunchTimeSelector.addEventListener('change',lunchEvent);
});
