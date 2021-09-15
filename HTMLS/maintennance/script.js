  
function Current() {
    var date = new Date();
    console.log(date);
    var CHours = date.getHours();
    var CDay = date.getDate();
    var CMonth = date.getMonth() +1;
    var CYear = date.getFullYear();
    
    return [CHours, CDay, CMonth, CYear]
}
console.log(Current());


var date = new Date();

var CurrentDay = date.getDay();
var CurrentMonth = date.getMonth();
var CurrentYear = date.getFullYear();
document.write("To day is : " + CurrentDay + "/"+ CurrentMonth + "/"+ CurrentYear + "<br>");

// if(date.getDay() === 4 && date.getHours() === 18) {
//     console.log("HELLO WORLD!");
// }








function mondaysInMonth(m,y) {
    var days = new Date(y,m,0).getDate();
    var mondays =  new Date(m +'/01/'+ y).getDay();
    if(mondays != 1){
      mondays = 9 - mondays;
    }
    mondays = [mondays];
    for (var i = mondays[0] + 7; i <= days; i += 7) {
      mondays.push(i);
    }
    return mondays;
  }
//console.log( mondaysInMonth( 9,2021 ) );

function wednesdaysInMonth(m,y) {
    var days = new Date(y,m,0).getDate();
    var wednesday =  new Date(m +'/01/'+ y).getDay();
    if(wednesday != 1){
        wednesday = 4 - wednesday;
    }
    wednesday = [wednesday];
    for (var i = wednesday[0] + 7; i <= days; i += 7) {
        wednesday.push(i);
    }
    return wednesday;
  }
//console.log( wednesdaysInMonth( 9,2021 ) );

function FridayInMonth(m,y) {
    var days = new Date(y,m,0).getDate();
    var friday =  new Date(m +'/01/'+ y).getDay();
    if(friday != 1){
        friday = 6 - friday;
    }
    friday = [friday];
    for (var i = friday[0] + 7; i <= days; i += 7) {
        friday.push(i);
    }
    return friday;
  }
//console.log( FridayInMonth( 9,2021 ) );
