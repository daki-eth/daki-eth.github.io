// Existing functions remain unchanged
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

function handleEducationClick() {
    alert("You clicked on the Education section!");
}

function handleContactClick() {
    alert("You clicked on the Contact Information section!");
}

// Updated toggleDropdown function
function toggleDropdown(element) {
    var dropdownContent = element.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        // Close all open dropdowns before opening the new one
        var allDropdowns = document.querySelectorAll('.dropdown-content');
        for (var i = 0; i < allDropdowns.length; i++) {
            allDropdowns[i].style.display = 'none';
        }
        dropdownContent.style.display = "block";
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    for (var i = 0; i < allDropdowns.length; i++) {
        if (!allDropdowns[i].contains(event.target)) {
            allDropdowns[i].style.display = 'none';
        }
    }
}, true);
