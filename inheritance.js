class Father{
    num1=10;
    num2=20;
    addNumber(){
        let sum= this.num1 + this.num2;
        console.log(sum);
    }
}

class Son extends Father{

}

let SonObj= new Son();
console.log(SonObj);
console.log(SonObj.num1);
console.log(SonObj.num2);
SonObj.addNumber();