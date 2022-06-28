function deleteUser(id) {
    console.log(id);
    $(`#${id}`).remove();
    $.ajax(`http://localhost:3000/person/${id}`, {
        type: 'DELETE'
    });

}

$(document).ready(function () {

    $(`
    <thead> <tr> <th>id</th> <th>name</th> <th>familysss</th> <th>age</th> <th>remove</th> </tr> </thead>
    <tbody></tbody>`)
        .appendTo("table");



    $.ajax({
        url: "http://localhost:3000/person",
        success: function (datas) {
            console.log(datas);
            var result = "";
            datas.forEach(item => {
                const { id, name, family, age } = item
                result += `
                <tr id="${id}">
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${family}</td>
                    <td>${age}</td>
                    <td> <botton onclick='deleteUser("${item.id}")' class='btn btn-danger'>Delete</botton></td>
                    </tr>
                `;
            });

            $('tbody').append(result);

        }

    });


});


