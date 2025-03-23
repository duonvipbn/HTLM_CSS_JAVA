let store = [
    {
        img: "../img/lap1.png",
        name: "Laptop Dell XPS 15",
        description: "Laptop cap cap voi man hinh 15 inch, CPU Intel Core i7 va RAM 16GB.",
        price: "35,990,000 VND",
    },
    {
        img: "../img/lap2.png",
        name: "iPhone 15 Pro Max",
        description: "Dien thoai flagship cua Apple voi camera 48MP va chip A17 Pro.",
        price: "32,990,000 VND",
    },
    {
        img: "../img/lap3.png",
        name: "Samsung Galaxy S24",
        description: "Dien thoai Android manh me voi but S-Pen va camera sieu zoom.",
        price: "28,990,000 VND",
    },
    {
        img: "../img/lap4.png",
        name: "Tai nghe Sony WH-1000XM5",
        description: "Tai nghe chong on tot nhat voi thoi luong pin len den 30 gio.",
        price: "7,990,000 VND",
    },
    {
        img: "../img/lap6.png",
        name: "Apple Watch Series 9",
        description: "Dong ho thong minh cap cap voi tinh nang do nhip tim va ho tro the thao.",
        price: "11,990,000 VND",
    },
    {
        img: "../img/lap5.png",
        name: "Loa JBL Charge 5",
        description: "Loa Bluetooth chong nuoc voi am bass manh me va pin 20 gio.",
        price: "3,990,000 VND",
    },
];

function showItems() {
    let message = "";
    for (let i = 0; i < store.length; i++) {
        message += `
        <div class="item">
            <img src="${store[i].img}" alt="">
            <h3>${store[i].name}</h3>
            <p>${store[i].description}</p>
            <p>${store[i].price}</p>
            <button>Buy</button>
        </div>
        `;
    }
    document.getElementById("items").innerHTML = message;
} 

showItems()