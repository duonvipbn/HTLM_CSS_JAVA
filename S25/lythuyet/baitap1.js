
let store = [];
const alertWrong = "Something wrong!";

function addItem(name, count, price) {
    if (name && count && price) {
        store.push([name, count, price]);
    } else {
        alert(alertWrong);
    }
}

function removeItem(index) {
    if (index >= 0 && index < store.length) { 
        store.splice(index, 1);
    } else {
        alert(alertWrong);
    }
}

function createItem() {
    if (store.length > 0) {  
        for (let i = 0; i < store.length; i++) {
            document.writeln(`<h3 style="background-color: burlywood;font-size: 40px;">ID: ${i}</h3>`);
            document.writeln(`<p style="background-color: antiquewhite;font-size: 30px;">Name: ${store[i][0]}</p>`);
            document.writeln(`<p style="background-color: antiquewhite;font-size: 30px;">Count: ${store[i][1]}</p>`);
            document.writeln(`<p style="background-color: antiquewhite;font-size: 30px;">Price: ${store[i][2]}</p>`);

        }
    }
}

addItem("apple", 1, 10000);
addItem("Banana", 5, 7000);
addItem("Lemon", 20, 50000);
addItem("apple", 5, 50000);
addItem("Lemon", 10, 50000);
createItem();
