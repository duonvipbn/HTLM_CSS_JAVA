let result1 = "javascript" + 5;
// Kết quả: "javascript5"
// Giải thích: biến 5 thành string và nối lại.

let result2 = "javascript" - 1;
// Kết quả: NaN
// Giải thích: không thể biến javascript thành số nên trả ve giá trị không phải số.

let result3 = "3" + 2;
// Kết quả: "32"
// Giải thích: nối các chuỗi.

let result4 = "5" - 4;
// Kết quả: 1
// Giải thích: biến 5 thành số r thực hiện phép tính.

let result5 = isNaN("123");
// Kết quả: false
// Giải thích: 123 chuyển thành số được nên trả về `false`.

let result6 = isNaN("hello");
// Kết quả: true
// Giải thích: hello không phải số và không chuyển đc thành số nên trả về `true`.

let result7 = Number.isNaN("123");
// Kết quả: false
// Giải thích: "123" là một chuỗi nhưng không phải NaN, nên trả về false.  

let result8 = Number.isNaN(NaN);
// Kết quả: true
// Giải thích: đúng là NaN nên trả về trua.
