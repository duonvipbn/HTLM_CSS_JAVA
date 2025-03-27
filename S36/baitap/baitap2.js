let dataName = "dataS36B2";
let menu = [
    {
        img: "../img/bread.png",
        name: "Bun bo hue",
        like: 0,
    },
    {
        img: "../img/pho.png",
        name: "Pho bo Ha Noi",
        like: 0,
    },
    {
        img: "../img/rice.png",
        name: "Com tam Sai Gon",
        like: 0,
    },
];

function getData() {
    return JSON.parse(localStorage.getItem(dataName)) || menu;
}

function render() {
    let message = ``;
    let data = getData();
    for (let i = 0; i < data.length; i++){
        message += `
            <div class="item">
                <img src="${data[i].img}" alt="">
                <div class="fixBox">
                    <h3>${data[i].name}</h3>
                    <p>${data[i].like} luot thich</p>
                    <button onclick="like(${i})">Thich +1</button>
                </div>
            </div>
        `;
    }
    document.getElementById("list").innerHTML = message;
}
function like(id) {
    let data = getData();
    data[id].like += 1;
    localStorage[dataName] = JSON.stringify(data);
    render();
}

render();