const printMessage = () => {
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

export const executeSecondTask = () => {
    let arr = printMessage();

    arr(1);
    arr(2);
    arr(3);
    arr();
    arr(1);
}