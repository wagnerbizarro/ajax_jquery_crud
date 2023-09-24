function Choose() {
    choose = document.getElementById("select");
    var value = choose.value;
    // console.log(value);

    switch (value) {
        case "create":
            window.location.href = "../create.html";
            break;

        case "read":
            window.location.href = "../read.html";
            break;

        case "update":
            window.location.href = "../update.html";
            break;

        case "delete":
            window.location.href = "../delete.html";
            break;
        default:
            console.log("Error");

    }
}

function Create() {
    var response_php = document.getElementById("create_return");
    dados = "create";

    //Ajax com JQuery
    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: { data: dados },
        success: function (result) {
            //Retorno se tudo ocorreu normalmente
            console.log("OK");
            console.log(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //Retorno caso algum erro ocorra
            console.log("NOT_OK");
            console.log(result);
        }
    });


}

function Read() {
    var response_php = document.getElementById("read_return");
    dados = "read";

    //Ajax com JQuery
    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: { data: dados },
        success: function (result) {
            //Retorno se tudo ocorreu normalmente
            console.log("OK");
            console.log(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //Retorno caso algum erro ocorra
            console.log("NOT_OK");
            console.log(result);
        }
    });

}

function Update() {
    var response_php = document.getElementById("update_return");
    dados = "update";

    //Ajax com JQuery
    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: { data: dados },
        success: function (result) {
            //Retorno se tudo ocorreu normalmente
            console.log("OK");
            console.log(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //Retorno caso algum erro ocorra
            console.log("NOT_OK");
            console.log(result);
        }
    });

}

function Delete() {
    var response_php = document.getElementById("delete_return");
    dados = "delete";

    //Ajax com JQuery
    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: { data: dados },
        success: function (result) {
            //Retorno se tudo ocorreu normalmente
            console.log("OK");
            console.log(result);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //Retorno caso algum erro ocorra
            console.log("NOT_OK");
            console.log(result);
        }
    });

}