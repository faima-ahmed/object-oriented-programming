// class Father{
//     num1=10;
//     num2=20;
//     addNumber(){
//         let sum= this.num1 + this.num2;
//         console.log(sum);
//     }
// }

// class Son extends Father{

// }

// let SonObj= new Son();
// console.log(SonObj);
// console.log(SonObj.num1);
// console.log(SonObj.num2);
// SonObj.addNumber();


/*
//constractor of parent class
class Father{
    constructor(){
        console.log('I am constructor of father class');
    }
}


class Son extends Father{

}

new Son();
new Father();
*/

/*
//constractor of child class
class Father{
    
}
class Son extends Father{
    constructor(){
        super();
        console.log('I am constructor of father class');
    }
}
new Son();
//new Father();
*/

/*
//both constructor ather and child
class Father{
   constructor(){
    console.log('I am constructor of father class');
   }
}


class Son extends Father{
    constructor(){
        super();
        console.log('I am constructor of son class');
    }
}

new Son();
new Father();
*/

//inheritance static properties
class Father{
    static greetParent(){
        return 'Hello, I am Father!';
    }
}
class Son extends Father{
    static greetChild(){
        return 'Hello, I am Son!';
    }
}

console.log(Son.greetChild());
console.log(Son.greetParent());
//console.log(Father.greetChild());
console.log(Father.greetParent());