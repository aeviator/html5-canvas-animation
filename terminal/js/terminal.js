window.onload = function() {
   var terminal = document.getElementById('terminal');
   var cursor = "_";
   var text = "┌──(aeviator㉿com)-[~]\n└─$";
   terminal.innerHTML = text + cursor;
   var intervalId = setInterval(function() {
       if (cursor === "_") {
           cursor = " ";
       } else {
           cursor = "_";
       }
       terminal.innerHTML = text + cursor;
   }, 500);
   setTimeout(function() {
       clearInterval(intervalId);
       text += "\nclick anywhere to continue";
       terminal.innerHTML = text + cursor;
   }, 2000);
};
