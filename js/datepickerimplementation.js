
    $(document).ready(function() {
        $("#txtDateOB").datepicker();
    });

    $(function() {
        var $select = $(".nootaenimidhi");
        for (i = 1; i <= 108; i++) {
            $select.append($('<option></option>').val(i).html(i))
        }
        $('select.nootaenimidhi').on('change', function() {

        });
    });
        function handleDates(elm, options) {
            event.stopPropagation();
            var currentField = $(elm);
            var opts = options || {};
            var minVal = opts.min || 0;
            var maxVal = opts.max || 0;

            var myNewDate = Date.parse(currentField.val()) || new Date();
            if (typeof myNewDate === "number") {
                myNewDate = new Date(myNewDate);
            }

            window.plugins.datePicker.show({
                date: myNewDate,
                mode: 'date',
                minDate: Date.parse(minVal),
                maxDate: Date.parse(maxVal)
            }, function(returnDate) {
                if (returnDate !== "") {
                    var newDate = new Date(returnDate);
                    currentField.val(getFormattedDate(newDate));
                }
                currentField.blur();
            });
        }