function Choose() {
    choose = document.getElementById("select");
    var value = choose.value;
    // console.log(value);

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

}

function Read() {
    nome = "read";

    //Ajax com JQuery
    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: { data: nome },
        beforeSend: function () {
            $("#loader").show();
        },
        success: function (result) {
            //Retorno se tudo ocorreu normalmente
            //console.log("OK")
            $('#read_return').html(result);
            $("#loader").hide();
            $("#read_return").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //Retorno de erro
            //console.log("NOT_OK")
            $('#read_return').html(errorThrown);
            //$('#read_return').html(textStatus);
        }
    });

}

function Update() {

}

function Delete() {

}