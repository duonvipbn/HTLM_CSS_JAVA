for (let i = 0; i < 10; i++) {
    let color =
        `rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
    
    console.log(`%c Màu sắc đã đượng thay đổi`, `color: ${color}; font-weight: bold;`);
}