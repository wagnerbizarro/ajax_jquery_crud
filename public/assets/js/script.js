function Choose() {
    choose = document.getElementById("select");
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
    $.ajax({
        url:'assets/php/app.php',
        type:'DELETE',
        data: { 
            firstName:$('#firstName').val(),
            lastName:$('#lastName').val(),
            age:$('#age').val(),
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
    nome = "read";

    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: { data: nome },
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
        url:'assets/php/app.php',
        type:'PATCH',
        data: { 
            id:$('#id_update').val(),
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
        url:'assets/php/app.php',
        type:'DELETE',
        data: { 
            id:$('#id_delete').val(),
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