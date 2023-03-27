var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1; //January is 0!
var yyyy = hoy.getFullYear();
 if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
hoy = yyyy+'-'+mm+'-'+dd;
document.getElementById("fecha").setAttribute("min", hoy);
var futuro = new Date();
futuro.setDate(futuro.getDate()+30);
dd = futuro.getDate(); //January
mm = futuro.getMonth()+1; //January
yyyy = futuro.getFullYear(); //January
if(dd<10){
       dd='0'+dd
   }
   if(mm<10){
       mm='0'+mm
   }
futuro = yyyy+'-'+mm+'-'+dd;
document.getElementById("fecha").setAttribute("max", futuro);
