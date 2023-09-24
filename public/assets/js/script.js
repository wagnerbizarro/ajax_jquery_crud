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

}

function Read() {
    dados = "read";

    //Ajax com JQuery
    $.ajax({
        url: 'assets/php/app.php',
        type: 'POST',
        data: { data: dados },
        success: function (result) {
            //Retorno se tudo ocorreu normalmente
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //Retorno caso algum erro ocorra
        }
    });

}

function Update() {

}

function Delete() {

}