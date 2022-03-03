// #24. ¿Puedo ahorrar en otros bancos?
// Te llegó un correo de un banco rival diciéndote que ellos te ofrecen un 3% de interés plus un 7% extra año con año
// ¿¿Cuál de los dos bancos te conviene más para un año de ahorro?¿Cuál para 2?¿Cuál para 3?

class Savings {
    constructor(amount1, amount2, months) {
    this.amount1 = amount1;
    this.amount2 = amount2;
    this.months = months;
    this.bank1();
    this.bank2();
    this.comparison();
    }
    bank1() {
        let interest = 4;
            for (let i = 0; i <= this.months; i++) {
            this.amount1 = (this.amount1 * (1 + (interest/12/100)));
        }
        console.log(`Con el banco 1 obtienes ${this.amount1} después de ${this.months} meses`)
    }
    bank2() {
        for (let i = 0; i <= 12; i++) {
            let interest = 3;
            this.amount2 = (this.amount2 * (1 + (interest/12/100)));
        }
        for (let i = 13; i <=this.months; i++) {
            let interest = 3+((((this.months-12)*7)/12));
            this.amount2 = (this.amount2 * (1 + (interest/12/100)));
        }
    console.log(`Con el banco 2 obtienes ${this.amount2} después de ${this.months} meses`);
    }
    comparison(){
        if(this.amount1 < this.amount2) {
            console.log(`El banco 2 te ofrece un mejor rendimiento en ${this.months} meses`);
        } 
        if (this.amount1 > this.amount2) {
            console.log(`El banco 1 te ofrece un mejor rendimiento en ${this.months} meses`);
    }
}
}

new Savings(100, 100, 12)
new Savings(100, 100, 24)
new Savings(100, 100, 36)