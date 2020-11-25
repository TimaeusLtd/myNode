
window.addEventListener("load", GetStaffList);

function GetStaffList(){
    
    const requestURL = 'list/data';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();    
    request.onload = ()=>{AppendStaffTable(request.response["staff"])};   
 }

 function AppendStaffTable(staffList){staffList.forEach(CreateRow);}

    function CreateRow(item, index){

        const staffTable = document.getElementById('tableStaff');
        let row = CreateRowCells(staffTable.insertRow(-1), 6);
        PopulateRowCells(row, item);
    }

    function CreateRowCells(newRow, cellCount){

        for(i=0;i<cellCount;i++){newRow.insertCell(i)};
        return newRow;
    }

    function PopulateRowCells(row, person){

        row.cells[0].innerHTML = person['title'];
        row.cells[1].innerHTML = person['firstName'];
        row.cells[2].innerHTML = person['lastName'];
        row.cells[3].innerHTML = person['contactDetails']['mobile'];
        row.cells[4].innerHTML = person['contactDetails']['landLine'];
        row.cells[5].innerHTML = person['contactDetails']['email'];
    }        


