const printResult = () => {
    let control = 0;
    return function(num){
        control += num;
        console.log(control);
    }
}

const printArr = () => {
    let count = 0;
    let control = [];
    return function(num){
        if(num !== undefined){
            control.push(num);
        }
        else{
            control = [];
        }
        count += 1;
        console.log(`Массив № ${count}`);
        control.map(n => {console.log(n)});
    }
}

const executeFirstTask = () => {
    let count = printResult();

    count (3);
    count (16);
    count (222);
    count (1);
    count (5);
}

const executeSecondTask = () => {
    let arr = printArr();

    arr(1);
    arr(2);
    arr(3);
    arr();
    arr(1);
}

executeFirstTask();
console.log("_____________________________________")
executeSecondTask();