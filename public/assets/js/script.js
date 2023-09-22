function Choose() {
    choose = document.getElementById("select");
    var value = choose.value;
    // console.log(value);

    switch (value) {
        case "search":
            window.location.href = "../search.html";
            break;

        case "create":
            window.location.href = "../create.html";
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