$(function () {
    $("#btnGenerate").click(function () {
        //Build an array containing Customer records.
        var customers = new Array();
        customers.push(["Month", "Sales", "Amount"]);
        customers.push(["january", 85, "$13.555.00"]);
        customers.push(["February", 73, "$9500.00"]);
        customers.push(["March", 135, "$18000.00"]);
        customers.push(["April", 45, "$27.500.00"]);
        customers.push(["May", 69, "$13.000.00"]);
        customers.push(["June", 105, "$20.500.00"]);

 
        //Create a HTML Table element.
        var table = $("<table />").css({"border":"1px solid silver", "width":"400px","margin": "25px auto"});
        table[0].border = "0";
 
        //Get the count of columns.
        var columnCount = customers[0].length;
 
        //Add the header row.
        var row = $(table[0].insertRow(-1));
        for (var i = 0; i < columnCount; i++) {
            var headerCell = $("<th />").css({"padding":"10px"});
            headerCell.html(customers[0][i]);
            row.append(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = $(table[0].insertRow(-1));
            for (var j = 0; j < columnCount; j++) {
                var cell = $("<td />").css({"padding":"10px"});
                cell.html(customers[i][j]);
                row.append(cell);
            }
        }
 
        var dvTable = $("#dvTable");
        dvTable.html("");
        dvTable.append(table);
        $("tr:nth-child(odd)").css({ "background-color": "silver" });
    });
    $("#btnGenerate").css({ "margin": "0 46%"})
});
