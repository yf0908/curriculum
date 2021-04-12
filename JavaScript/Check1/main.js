let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i] + 'は偶数です');
        }
    }
}

let even = new isEven();


class Car {
    constructor(gass, num) {
        this.gass = gass;
        this.num = num;
    }

    GasStand() {
    console.log("ガソリンは" + this.gass + "です。ナンバーは" + this.num + "です")
    }
}

let getNumGas = new Car("〇〇", "△△");
getNumGas.GasStand();