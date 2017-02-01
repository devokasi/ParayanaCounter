//Search by Date

function goSearch() {
    var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
    db.transaction(searchQueryDB, errorCB);
}
function searchQueryDB(tx) {
    tx.executeSql("SELECT * FROM PARAYANA where date like ('%" + document.getElementById("txtDateOB").value + "%')", [], querySuccess, errorCB);
}
