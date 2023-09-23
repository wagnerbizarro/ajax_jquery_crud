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

function Create(){

}

function Read(){
    var result = document.getElementById("read_return")
    var ajax = new XMLHttpRequest();

    result.innerHtml = '<img src="../img/loading.gif" width="100px">';

    ajax.open("GET", "../php/app.php?read", true);

}

function Update(){

}

function Delete(){

}