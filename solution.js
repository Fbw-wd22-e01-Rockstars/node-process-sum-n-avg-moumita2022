const arguement=(arg) => { 
    const number= parseFloat(arg)
    if (isNaN(number)){
        console.log(`The arguement "${arg}" is  a number`);
        process.exit();
    }
    return number;
}


const sum =(num1) => {
    return num1.reduce((a,b) => a + b, 0);
    //console.log("Calculating sum of numbers");
}

const avg =(num1) => {
return sum(num1)/num1.length;
//    console.log("Calculating average of numbers");
}

const main =(num1) => {
const x= num1.slice().sort()
const y= (num1.length-1)/2
if(y%1!==0){
   return(x[Math.floor(y)]+x[Math.ceil(y)])/2
}
return x[y]

}

/* const main = () => {
if (argvs[2] === 'sum') {
sum();
} else if (argvs[2] === 'avg') {
avg();
} else if (argvs[2] === 'hello') {
error();
} else {
defaultFunction();
}
} */

const argvs = process.argv.slice(2);
const [operation,...rest]=argvs;
const num2 = rest.map(arguement)

switch (operation) {
    case 'sum':
        console.log(sum(num2));
        break;
    case 'avg':
        console.log(avg(num2));
        break;
    case 'main':
        console.log(main(num2));
        break;
default:
console.log("Hello,missing function,try with sum or avg or main");
        break;
}

