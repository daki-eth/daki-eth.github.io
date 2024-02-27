// main.js

function promptName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("output").innerHTML = "Hello, " + name + "!";
        document.getElementById("nameHeader").innerHTML = name;
    }
}

function toggleImageSize() {
    var image = document.getElementById("myImage");
    if (image.style.width === "200px") {
        image.style.width = "400px";
    } else {
        image.style.width = "200px";
    }
}

function highlight(element) {
    element.style.backgroundColor = "yellow";
}

function unhighlight(element) {
    element.style.backgroundColor = "";
}

function toggleDropdown(element) {
    var dropdownContent = element.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}