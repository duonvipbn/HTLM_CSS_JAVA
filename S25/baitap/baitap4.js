function prime(n) {
    if (Number.isInteger(n) && n > 1) {
        for (let i = 2; i < n; i++){
            if (n % i === 0) {
                return "không phải số nguyên tố";
            }
        }
        return "là số nguyên tố";
    }
    return "dữ liệu không hợp lệ";
}

alert(prime(2));