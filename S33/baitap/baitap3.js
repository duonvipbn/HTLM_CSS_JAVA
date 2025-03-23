let store = [
    { name: "Rau sach", mode: "Do an" },
    { name: "Thit lon", mode: "Do an" },
    { name: "Pepsi khong calo", mode: "Nuoc" },
    { name: "Cocacola", mode: "Nuoc" },
    { name: "Co le", mode: "Do an" },
    { name: "Rau sach", mode: "Dung cu" },
    { name: "Tuy vit", mode: "Dung cu" }

];

function showItems() {
    let message = "";
    for (let i = 0; i < store.length; i++){
        message += `<li>Ten do an: ${store[i].name} - Danh muc: ${store[i].mode}</li>`;
    }
    document.getElementById("items").innerHTML = message;
}

function filter() {
    let modeFilter = document.getElementById("mode").value;
    console.log(modeFilter);
    if (modeFilter === "nothing") {
        showItems();
        return;
    }
    let message = "";
    for (let i = 0; i < store.length; i++){
        if (modeFilter === store[i].mode ) {
            message += `<li>Ten do an: ${store[i].name} - Danh muc: ${store[i].mode}</li>`;
        }
    }

    document.getElementById("items").innerHTML = message;
}


showItems()