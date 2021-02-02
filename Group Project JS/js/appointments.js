const _appointmentDate = document.getElementById("addInput-appointmentdate");
const _appointmentNotes = document.getElementById("addInput-appointmentnotes");
const _appointmentStarthours = document.getElementById("addInput-starttime-hours");
const _appointmentStartmins = document.getElementById("addInput-starttime-mins");
const _appointmentStartAMPM = document.getElementById("starttime-ampm");
const _appointmentEndhours = document.getElementById("addInput-endtime-hours");
const _appointmentEndmins = document.getElementById("addInput-endtime-mins");
const _appointmentEndAMPM = document.getElementById("endtime-ampm");
const _displayErrors = document.getElementById("displayErrors");
const _appointmentInput = document.getElementById("appointmentInput");

//Buttons
const _createAppointment = document.getElementById("createappointment");
const _clearAppointment = document.getElementById("clearappointment");
const _appointmentTable = document.getElementById("appointmentInput");


function padDigit(number) {
  if(number<10)
    return ("0" + number);
  else
    return number;
}

function validateDate() {
    let errorDate = "Please retry. Date is past overdue";
    let d= new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let apYear = parseInt(_appointmentDate.value.substring(0,4));
    let apMonth = parseInt(_appointmentDate.value.substring(5,7));
    let apDate = parseInt(_appointmentDate.value.substring(8,10));
    if(isNaN(apYear) || isNaN(apDate) || isNaN(apMonth))
        _displayErrors.innerHTML = "Please enter appointment date";
    else if (apYear < year) 
        _displayErrors.innerHTML = errorDate;
    else if (apYear > year)
        validateNotes();
    else {
        if(apMonth < (month+1))
            _displayErrors.innerHTML = errorDate;
        if(apMonth > (month+1))
            validateNotes();
        else {
            if(apDate <= date)
                _displayErrors.innerHTML = errorDate;
            else
                validateNotes();
        }
            
    }
        
}

function validateNotes() {
    let errorNote = "Please enter Note and retry.";
    if(!isNaN(_appointmentNotes.value))
        _displayErrors.innerHTML = errorNote;
    else 
        validateTime();
}

function validateTime() {
    let errorTime = "Start time is greater than End time. Please retry";
    let end;
    let start;
    if(_appointmentEndAMPM.value == "PM")
        end = parseInt(_appointmentEndhours.value) + 12;
    else 
        end = parseInt(_appointmentEndhours.value);
    if(_appointmentStartAMPM.value == "PM")
        start = parseInt(_appointmentStarthours.value) + 12;
    else 
        start = parseInt(_appointmentStarthours.value);
    
    
    if((isNaN(parseInt(_appointmentStarthours.value))) || (isNaN(parseInt(_appointmentStartmins.value))))
        _displayErrors.innerHTML = "Please enter start time";
    else if((isNaN(parseInt(_appointmentEndhours.value))) || isNaN(parseInt(_appointmentEndmins.value)))
        _displayErrors.innerHTML = "Please enter end time";
    else if( _appointmentStarthours.value > 12 ||
            _appointmentEndhours.value > 12 || 
            _appointmentStarthours.value < 0 ||
            _appointmentEndhours.value < 0 ||
            _appointmentEndmins > 60 ||
            _appointmentStartmins > 60 ||
            _appointmentEndmins < 0 ||
            _appointmentStartmins < 0
           )
        _displayErrors.innerHTML = "Please enter time in 12 hour format";
    else if (start > end)
        _displayErrors.innerHTML = errorTime;
    else if (start == end) {
        if((parseInt(_appointmentEndmins.value)) < parseInt(_appointmentStartmins.value))
            _displayErrors.innerHTML = errorTime;
        else displayAppointments();
        }
    else
        displayAppointments();
}
function displayAppointments() {
    _displayErrors.innerHTML = "";
    let startHours = padDigit(_appointmentStarthours.value);
    let endHours = padDigit(_appointmentEndhours.value);
    let startMins = padDigit(_appointmentStartmins.value);
    let endMins = padDigit(_appointmentEndmins.value);
    let row = _appointmentTable.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = _appointmentDate.value;
    cell2.innerHTML = _appointmentNotes.value;
    cell3.innerHTML = startHours + ":" + startMins +  " " + _appointmentStartAMPM.value;
    cell4.innerHTML = endHours + ":" + endMins +" " + _appointmentEndAMPM.value;
}

function clear() {
    _appointmentInput.innerHTML = "";
}

_createAppointment.onclick = validateDate;
_clearAppointment.onclick = clear;
