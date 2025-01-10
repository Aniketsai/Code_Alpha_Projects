var selectedRow = null;

function onFormSubmit(event) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

// Retrieve the form data
function readFormData() {
    var formData = {};
    formData["employeeId"] = document.getElementById("employeeId").value;
    formData["employeeName"] = document.getElementById("employeeName").value;
    formData["employeeEmail"] = document.getElementById("employeeEmail").value;
    formData["employeeMobile"] = document.getElementById("employeeMobile").value;
    return formData;
}

// Insert a new record into the table
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    newRow.insertCell(0).innerHTML = data.employeeId;
    newRow.insertCell(1).innerHTML = data.employeeName;
    newRow.insertCell(2).innerHTML = data.employeeEmail;
    newRow.insertCell(3).innerHTML = data.employeeMobile;
    var actionCell = newRow.insertCell(4);
    actionCell.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

// Edit the record
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("employeeId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("employeeName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("employeeEmail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("employeeMobile").value = selectedRow.cells[3].innerHTML;
}

// Update the record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.employeeId;
    selectedRow.cells[1].innerHTML = formData.employeeName;
    selectedRow.cells[2].innerHTML = formData.employeeEmail;
    selectedRow.cells[3].innerHTML = formData.employeeMobile;
}

// Delete the record
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        var row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

// Reset the form data
function resetForm() {
    document.getElementById("employeeId").value = '';
    document.getElementById("employeeName").value = '';
    document.getElementById("employeeEmail").value = '';
    document.getElementById("employeeMobile").value = '';
    selectedRow = null;
}
