const printResult = () => {
    let control = 0;
    return function(num){
        control += num;
        console.log(control);
    }
}

export const executeFirstTask = () => {
    let count = printResult();

    count (3);
    count (16);
    count (222);
    count (1);
    count (5);
}