function maxNumber(num) {
    if (Number.isInteger(num)) {
        let strArr = num.toString().split("");
        strArr.sort((a, b) => b - a);
        let result = parseInt(strArr.join(""));
        alert(result);
    } else {
        alert("Du lieu khong hop le");
    }
}

maxNumber(2931);
