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

        default:
            console.log("index.html");
    }
}

function Create() {
    var action = "create";
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var age = $('#age').val();

    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: {
            action,
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
            $('#php_return').show();
            $("#loader").hide();
            $("#read_return").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#read_return').html(errorThrown);
        }
    });

}

function Delete(id_delete) {
    var action = "delete";
    $('#php_return').hide();

    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: {
            action,
            id_delete,
        },
        beforeSend: function () {
            $("#loader").show();
        },
        success: function (result) {
            $('#read_return').html(result);
            $('#php_return').show();
            $("#loader").hide();
            $("#read_return").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#read_return').html(errorThrown);
        }
    })

}


function Update() {
    var action = "update";
    var id = $('#id_update').val();
    var firstName = $('#firstName_update').val();
    var lastName = $('#lastName_update').val();
    var age = $('#age_update').val();

    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: {
            action,
            id,
            firstName,
            lastName,
            age,
        },
        beforeSend: function () {
            $("#loader").show();
        },
        success: function (result) {
            $('#update_return').html(result);
            $('#php_return').show();
            $("#loader").hide();
            $("#update_returnn").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#update_return').html(errorThrown);
        }
    })

}