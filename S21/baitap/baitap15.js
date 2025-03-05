let money_input = +prompt("nhập vào số tiền cần rút (Số tiền nhập vào phải chia hết cho 1000):");
if (money_input && money_input % 1000 == 0) {
    let money_500000 = 0;
    let money_200000 = 0;
    let money_100000 = 0;
    let money_50000 = 0;
    let money_20000 = 0;
    let money_10000 = 0;
    let money_5000 = 0;
    let money_2000 = 0;
    let money_1000 = 0;
    while (money_input >= 500000) {
        money_input -= 500000;
        money_500000++;
    }
    while (money_input >= 200000) {
        money_input -= 200000;
        money_200000++;
    }
    while (money_input >= 100000) {
        money_input -= 100000;
        money_100000++;
    }
    while (money_input >= 50000) {
        money_input -= 50000;
        money_50000++;
    }
    while (money_input >= 20000) {
        money_input -= 20000;
        money_20000++;
    }
    while (money_input >= 10000) {
        money_input -= 10000;
        money_10000++;
    }
    while (money_input >= 5000) {
        money_input -= 5000;
        money_5000++;
    }
    while (money_input >= 2000) {
        money_input -= 2000;
        money_2000++;
    }
    while (money_input >= 1000) {
        money_input -= 1000;
        money_1000++;
    }
    if (money_500000 !== 0) {
        console.log(`500.000-${money_500000} tờ`);
    }
    if (money_200000 !== 0) {
        console.log(`200.000-${money_200000} tờ`);
    }
    if (money_100000 !== 0) {
        console.log(`100.000-${money_100000} tờ`);
    }
    if (money_50000 !== 0) {
        console.log(`50.000-${money_50000} tờ`);
    }
    if (money_20000 !== 0) {
        console.log(`20.000-${money_20000} tờ`);
    }
    if (money_10000 !== 0) {
        console.log(`10.000-${money_10000} tờ`);
    }
    if (money_5000 !== 0) {
        console.log(`5.000-${money_5000} tờ`);
    }
    if (money_2000 !== 0) {
        console.log(`2.000-${money_2000} tờ`);
    }
    if (money_1000 !== 0) {
        console.log(`1.000-${money_1000} tờ`);
    }

} else {
    alert("sai input");
}