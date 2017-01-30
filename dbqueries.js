<script type="text/javascript" charset="utf-8">

    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    var currentRow;
    // Populate the database
    //
    function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS COW (id INTEGER PRIMARY KEY AUTOINCREMENT, location,name,number,breed,dob,health_c,parents_d,medicines_u,other_i,life_status,gender)');

    }

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM PARAYANA', [], querySuccess, errorCB);
    }

    function searchQueryDB(tx) {
        tx.executeSql("SELECT * FROM PARAYANA where location like ('%"+ document.getElementById("txtName").value + "%')",
                [], querySuccess, errorCB);
    }
    function searchIDQueryDB(tx) {
        tx.executeSql("SELECT * FROM PARAYANA where id like ('%"+ document.getElementById("txtID").value + "%')",
                [], querySuccess, errorCB);
    }
    function searchName_GivenQueryDB(tx) {
        tx.executeSql("SELECT * FROM PARAYANA where name like ('%"+ document.getElementById("txtName1").value + "%')",
                [], querySuccess, errorCB);
    }
    function searchNumber_GivenQueryDB(tx) {
        tx.executeSql("SELECT * FROM PARAYANA where number like ('%"+ document.getElementById("txtNumber").value + "%')",
                [], querySuccess, errorCB);
    }
    function searchLifeStatus_And_LocationQueryDB(tx) {
        tx.executeSql("SELECT * FROM PARAYANA where location like ('%"+ document.getElementById("txtName").value + "%') and life_status like ('%"+ document.getElementById("txtLS").value + "%')",
                [], querySuccess, errorCB);
    }
    function searchLocation_And_BreedQueryDB(tx) {
        tx.executeSql("SELECT * FROM PARAYANA where location like ('%"+ document.getElementById("txtName").value + "%') and breed like ('%"+ document.getElementById("txtBreed").value + "%')",
                [], querySuccess, errorCB);
    }
    function searchLocation_And_GenderQueryDB(tx) {
        tx.executeSql("SELECT * FROM PARAYANA where location like ('%"+ document.getElementById("txtName").value + "%') and gender like ('%"+ document.getElementById("txtGender").value + "%')",
                [], querySuccess, errorCB);
    }
    // Query the success callback
    //
    function querySuccess(tx, results) {
        var tblText='<table id="t01"><tr><th>ID</th> <th>Name</th> <th>Number</th><th>Location</th><th>Breed</th><th>DOB</th><th>Health Condition</th><th>Parents Diseases</th><th>Medicines Used</th><th>Other Information</th><th>Life Status</th><th>Gender</th></tr>';
        var len = results.rows.length;
        for (var i = 0; i < len; i++) {
            var tmpArgs=results.rows.item(i).id + ",'" + results.rows.item(i).name
                    + "','" + results.rows.item(i).number+"'"+ results.rows.item(i).location
                            + "','"+ results.rows.item(i).dob+"'"+ results.rows.item(i).breed+"'"+ results.rows.item(i).health_c+"'"+ results.rows.item(i).parents_d+"'"+ results.rows.item(i).medicines_u+"'"+ results.rows.item(i).other_i
                            + results.rows.item(i).life_status+"'"+ results.rows.item(i).gender+"'";
            tblText +='<tr><td>' + results.rows.item(i).id +'</td><td>'
                    + results.rows.item(i).name +'</td><td>' + results.rows.item(i).number +'</td><td>' + results.rows.item(i).location +'</td><td>' + results.rows.item(i).breed +'</td><td>' + results.rows.item(i).dob +'</td><td>'
                    + results.rows.item(i).health_c +'</td><td>'
                    + results.rows.item(i).parents_d +'</td><td>' + results.rows.item(i).medicines_u +'</td><td>' + results.rows.item(i).other_i +'</td><td>' + results.rows.item(i).life_status +'</td><td>'
                    + results.rows.item(i).gender +'</td></tr>';
        }
        tblText +="</table>";
        document.getElementById("tblDiv").innerHTML =tblText;
    }

    //Delete query
    function deleteRow(tx) {
      tx.executeSql('DELETE FROM PARAYANA WHERE id = ' +document.getElementById("editID").value, [], queryDB, errorCB);
    }

    // Transaction error callback
    //
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(queryDB, errorCB);
    }

     // Cordova is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }

    //Insert query
    //
    function insertDB(tx) {
        tx.executeSql('INSERT INTO PARAYANA (location,name,number,breed,dob,health_c,parents_d,medicines_u,other_i,life_status,gender) VALUES ("' +document.getElementById("txtName").value
                +'","'+document.getElementById("txtName1").value+'","'+document.getElementById("txtNumber").value+'","'+document.getElementById("txtBreed").value+'","'+document.getElementById("txtDateOB").value+'","'+document.getElementById("txtHC").value+'","'+document.getElementById("txtPD").value+
                '","'+document.getElementById("txtMU").value+'","'+document.getElementById("txtOI").value+'","'+document.getElementById("txtLS").value+'","'+document.getElementById("txtGender").value+'")');
    }

    function goInsert() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(insertDB, errorCB, successCB);
    }

    function goSearch() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(searchQueryDB, errorCB);
    }
    function goSearchbyID() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(searchIDQueryDB, errorCB);
    }
    function goSearchbyName_Given() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(searchName_GivenQueryDB, errorCB);
    }
    function goSearchbyNumber_Given() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(searchNumber_GivenQueryDB, errorCB);
    }
    function goSearchbyLifeStatus_And_Location() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(searchLifeStatus_And_LocationQueryDB, errorCB);
    }
    function goSearchbyLocation_And_Breed() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(searchLocation_And_BreedQueryDB, errorCB);
    }
    function goSearchbyLocation_And_Gender() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(searchLocation_And_GenderQueryDB, errorCB);
    }

    function goDelete() {
         var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
         db.transaction(deleteRow, errorCB);
         document.getElementById('qrpopup').style.display='none';
    }

    //Show the popup after tapping a row in table
    //
    function goPopup(row,rowname,rownum) {
        currentRow=row;
        document.getElementById("qrpopup").style.display="block";
        document.getElementById("editNameBox").value = rowname;
        document.getElementById("editNumberBox").value = rownum;
    }

    function editRow(tx) {
        tx.executeSql('UPDATE PARAYANA SET location ="'+document.getElementById("editLocationBox").value+
                '", health_c= "'+document.getElementById("editHCBox").value+ '", medicines_u= "'+document.getElementById("editMUBox").value+ '", other_i= "'+document.getElementById("editOIBox").value+ '", life_status= "'+document.getElementById("editLSBox").value+ '" WHERE id = '+document.getElementById("editID").value , [], queryDB, errorCB);
    }
    function goEdit() {
        var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
        db.transaction(editRow, errorCB);
        document.getElementById('qrpopup').style.display='none';
    }

<!-- DatePicker-->
function handleDates(elm, options) {
  event.stopPropagation();
  var currentField = $(elm);
  var opts = options || {};
  var minVal = opts.min || 0;
  var maxVal = opts.max || 0;

  var myNewDate = Date.parse(currentField.val()) || new Date();
  if(typeof myNewDate === "number") {
      myNewDate = new Date (myNewDate);
  }

  window.plugins.datePicker.show({
      date : myNewDate,
      mode : 'date',
      minDate: Date.parse(minVal),
      maxDate: Date.parse(maxVal)
  }, function(returnDate) {
      if(returnDate !== "") {
          var newDate = new Date(returnDate);
          currentField.val(getFormattedDate(newDate));
      }
      currentField.blur();
  });
}
</script>
