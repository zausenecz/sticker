function AuthShow() {
    document.getElementById("auth").setAttribute('style', 'display: grid');
}

function AuthHide() {
    document.getElementById("auth").setAttribute('style', 'display: none');
}

function AuthCheck() {
    if (document.getElementById("pass").value == "9216") {
        document.getElementById("pass").setAttribute('style', 'border-color: green');
    } else {
        document.getElementById("pass").setAttribute('style', 'border-color: red');
        document.getElementById("pass").value = "";
    }
}

function PassClick() {
    document.getElementById("pass").setAttribute('style', 'border-color: #3f3f3f');
}
