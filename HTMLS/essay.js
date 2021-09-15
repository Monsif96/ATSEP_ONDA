var date = new Date();
    console.log(date.getDay());
    console.log(date.getHours());
    if(date.getDay() === 2 && date.getHours() === 1) {
        console.log("HELLO WORLD!");
    }


// function to add new Task on Striped Table.
function addTask() {

	var arrHead = new Array();
    arrHead = ['Tasks', 'Done !', 'Status'];


    var empTab = document.getElementById('to');

    var rowCnt = empTab.rows.length;    // get the number of rows.
    var tr = empTab.insertRow(rowCnt); // table row.
    

    var td = document.createElement('td');
        td = tr.insertCell(0);
        td.setAttribute('id', 0);
        td.innerHTML = "Main.Hebdo";

        td = tr.insertCell(1);
        td.setAttribute('id', 1);
        var ele = document.createElement('input');
            ele.setAttribute('type', 'button');
            ele.setAttribute('class', 'btn btn-info');
            ele.setAttribute('value', 'Ok !');
            
		td.appendChild(ele);


		td = tr.insertCell(2);
        td.setAttribute('id', 2);
        td.setAttribute('class', 'font-weight-medium')
        var ele = document.createElement('div');
            ele.setAttribute('class', 'badge badge-warning');
            ele.innerHTML = "Pending";
            
		td.appendChild(ele);
}

// function to get current Date.
function Current() {
    var date = new Date();
    console.log(date);
    var CHours = date.getHours();
    var CDay = date.getDate();
    var CMonth = date.getMonth() +1;
    var CYear = date.getFullYear();
    
    return [CHours, CDay, CMonth, CYear]
}

// function to get Monday on specific Month.
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

// function to get Wednesday on specific Month.
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

// function to get Friday on specific Month.
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