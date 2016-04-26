var duck = {  
    appearance: "feathers",  
    quack: function duck_quack(what) {  
        print(what + " quack-quack!");  
    },  
    color: "black"  
};

var someAnimal = {  
    appearance: "feathers",  
    quack: function animal_quack(what) {  
        print(what + " whoof-whoof!");  
    },  
    eyes: "yellow"  
};  

function check(who) {  
    if ((who.appearance == "feathers") && (typeof who.quack == "function")) {  
        who.quack("I look like a duck!\n");  
        return true;  
    }  
    return false;  
}  

check(duck);  // true
check(someAnimal);  // true
