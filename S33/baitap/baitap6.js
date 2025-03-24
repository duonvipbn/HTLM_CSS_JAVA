const weatherData = {
    "Hà Nội": { temperature: 25, humidity: 70, windSpeed: 5, description: "Có mây", icon: "☁️" },
    "Hồ Chí Minh": { temperature: 32, humidity: 75, windSpeed: 7, description: "Nắng", icon: "☀️" },
    "Đà Nẵng": { temperature: 28, humidity: 82, windSpeed: 12, description: "Mưa rào", icon: "🌧️" }
};

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const list = document.getElementById("list");
    if (weatherData[city]) {
        list.innerHTML = `
                    <div class="item">
                        <h2>${city}</h2>
                        <div class="item_items">
                            <span class="icon">${weatherData[city].icon}</span>
                            <span class="deg">${weatherData[city].temperature}&deg;C</span>
                            <div class="item_items_title">
                                <p>${weatherData[city].description}</p>
                                <p>Độ ẩm: ${weatherData[city].humidity}%</p>
                                <p>Tốc độ gió: ${weatherData[city].windSpeed} km/h</p>
                            </div>
                        </div>
                    </div>
                `;
    } else {
        list.innerHTML = `<p style="color:red;">Không tìm thấy thông tin thời tiết cho thành phố này.</p>`;
    }
}