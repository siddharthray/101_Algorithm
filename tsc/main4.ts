class Myclass {
    myMethod() {
        const foo = 123;
        console.log('this =>', this)
        let self = this;
        setTimeout(function () {
            console.log('this =>', self)
        }, 0)
    }
}

const myclassInstance = new Myclass();
myclassInstance.myMethod()
