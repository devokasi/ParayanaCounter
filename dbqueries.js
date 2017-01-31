
        // Query the database


        function searchQueryDB(tx) {
            tx.executeSql("SELECT * FROM PARAYANA where date like ('%" + document.getElementById("txtDateOB").value + "%')", [], querySuccess, errorCB);
        }

        

        //Delete query
        function deleteRow(tx) {
            tx.executeSql('DELETE FROM PARAYANA WHERE id = ' + document.getElementById("editID").value, [], queryDB, errorCB);
        }

        //Insert query
        //
        function insertDB(tx) {
            tx.executeSql('INSERT INTO PARAYANA (parayanam,date,location,medium,astakam_count,astakam_value_count,comments) VALUES ("' + document.getElementById("txtparayanam").value + '","' + document.getElementById("txtDateOB").value +
                '","' + document.getElementById("txtLocation").value + '","' + document.getElementById("txtMedium").value + '","' + document.getElementById("txtAstakamCount").value + '","' + document.getElementById("txtAstakamValueCount").value +
                '","' + document.getElementById("txtComments").value + '")');
        }

        function goInsert() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(insertDB, errorCB, successCB);
        }

        function goSearch() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(searchQueryDB, errorCB);
        }


        function goDelete() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(deleteRow, errorCB);
            document.getElementById('qrpopup').style.display = 'none';
        }

        //Show the popup after tapping a row in table
        //
        function goPopup(row, rowname, rownum) {
            currentRow = row;
            document.getElementById("qrpopup").style.display = "block";
            document.getElementById("editNameBox").value = rowname;
            document.getElementById("editNumberBox").value = rownum;
        }

        function editRow(tx) {
            tx.executeSql('UPDATE PARAYANA SET location ="' + document.getElementById("editLocation").value +
                '", date= "' + document.getElementById("editdate").value + '", medium= "' + document.getElementById("editMedium").value + '", astakam_count= "' + document.getElementById("editAstakamCount").value + '", astakam_value_count= "' +
                document.getElementById("editAstakamValueCount").value + '" WHERE id = ' + document.getElementById("editID").value, [], queryDB, errorCB);
        }

        function goEdit() {
            var db = window.openDatabase("Database", "1.0", "Cordova PARAYANA", 200000);
            db.transaction(editRow, errorCB);
            document.getElementById('qrpopup').style.display = 'none';
        }
