let name_input = prompt("input the name:");
if (name_input === "ADMIN") {
    let admin_password = prompt("input the password:");
    if (admin_password === "TheMaster") {
        alert("Welcome");
    } else if (admin_password === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (name_input === null) {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}