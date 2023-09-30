//LOAD HTML
$(document).ready(function () {
    $("#div-create").hide();
    $("#div-read").hide();
    $("#div-update").hide();
    $("#div-return").hide();
    $("#loader").hide();
});


//MAIN
function Choose() {
    var choose = document.getElementById("select");
    var value = choose.value;

    switch (value) {
        case "create":
            $("#div-read").hide();
            $("#div-update").hide();
            $("#div-create").show();
            $("#div-return").hide();
            break;

        case "read":
            $("#div-update").hide();
            $("#div-create").hide();
            $("#div-read").show();
            $("#div-return").hide();
            break;

        default:
            $("#div-update").hide();
            $("#div-create").hide();
            $("#div-read").show();
            break;
    }
}

//READ
function Read() {
    $("#div-create").hide();
    $("#div-update").hide();

    readName = $('#name_read').val();

    $.ajax({
        url: 'assets/php/app.php',
        type: 'GET',
        data: { data: readName },
        beforeSend: function () {
            $("#div-read").hide();
            $("#div-return").show();
            $("#loader").show();

        },
        success: function (result) {
            $("#div-return").show();
            $('#div-return').html(result);
            $('#php_return').show();
            $("#loader").hide();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#div-return').show();
            $('#div-return').html(errorThrown);
        }
    });

}

//CREATE
function Create() {
    $("#div-read").hide();
    $("#div-update").hide();
    $("#div-create").hide();

    $("#div-return").show();
    $("#loader").show();

    var action = "create";
    var firstName = $('#firstName_create').val();
    var lastName = $('#lastName_create').val();
    var age = $('#age_create').val();

    if (firstName, lastName, age) {
        $.ajax({
            url: 'assets/php/app.php',
            type: 'POST',
            data: {
                action,
                firstName,
                lastName,
                age,
            },
            success: function (result) {
                alert("Cadastrado!");
                location.reload(true);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('#div-return').show();
                $('#div-return').html(errorThrown);
            }
        });
    }
    else {
        alert("ERRO: Preencha todos os campos!");
    }
}

//DELETE
function Delete(id_delete) {
    var action = "delete";

    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: {
            action,
            id_delete,
        },
        success: function () {
            alert("Removido!");
            location.reload(true);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#div-return').show();
            $('#div-return').html(errorThrown);
        }
    });

}

//UPDATE
function prepareUpdate(id_update,) {
    $("#div-create").hide();
    $("#div-read").hide();
    $("#div-return").hide();
    $("#div-update").show();

    $("#id_update").val(id_update);
    $('#id_update').attr('readonly', 'true');
    $('#id_update').css('background-color', '#DEDEDE');
}

function Update() {
    var action = "update";
    var id = $('#id_update').val();
    var firstName = $('#firstName_update').val();
    var lastName = $('#lastName_update').val();
    var age = $('#age_update').val();

    if (id, firstName, lastName, age) {
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
            success: function () {
                alert("Editado!");
                location.reload(true);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('#div-return').show();
                $('#div-return').html(errorThrown);
            }
        });
    }
    else {
        alert("ERRO: Preencha todos os campos!");
    }

}
