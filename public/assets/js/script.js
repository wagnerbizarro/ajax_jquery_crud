function Choose() {
    var choose = document.getElementById("select");
    var value = choose.value;

    switch (value) {
        case "create":
            window.location.href = "create.html";
            break;

        case "read":
            window.location.href = "read.html";
            break;

        case "update":
            window.location.href = "update.html";
            break;

        case "delete":
            window.location.href = "delete.html";
            break;
        default:
            console.log("index.html");

    }
}

function Create() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var age = $('#age').val();

    //console.log(firstName+lastName+age);

    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: {
            firstName,
            lastName,
            age,
        },
        beforeSend: function () {
            $("#loader").show();
        },
        success: function (result) {
            $('#create_return').html(result);
            $("#loader").hide();
            $("#create_return").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#create_return').html(errorThrown);
        }
    })

}

function Read() {
    readName = $('#name_read').val();

    $.ajax({
        url: 'assets/php/app.php',
        type: 'GET',
        data: { data: readName },
        beforeSend: function () {
            $("#loader").show();
        },
        success: function (result) {
            $('#read_return').html(result);
            $("#loader").hide();
            $("#read_return").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#read_return').html(errorThrown);
        }
    });

}

function Update() {
    $.ajax({
        url: 'assets/php/app.php',
        type: 'PATCH',
        data: {
            id: $('#id_update').val(),
        },
        beforeSend: function () {
            $("#loader").show();
        },
        success: function (result) {
            $('#update_return').html(result);
            $("#loader").hide();
            $("#update_return").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#update_return').html(errorThrown);
        }
    })

}

function Delete() {
    $.ajax({
        url: 'assets/php/app.php',
        type: 'DELETE',
        data: {
            id: $('#id_delete').val(),
        },
        beforeSend: function () {
            $("#loader").show();
        },
        success: function (result) {
            $('#delete_return').html(result);
            $("#loader").hide();
            $("#delete_return").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#delete_return').html(errorThrown);
        }
    })

}