/*console.log("gggg");
var readlineSync = require('readline-sync');
var username = readlineSync.question("what is your name?");
console.log("hi "+username);
function multiply(numberone,numbertwo){
    return numberone**numbertwo;
}
var result = multiply(2,5);
//console.log("result is :"+result)
for(i = 1 ;i<=5;i++){
    console.log(22+i);
}
var superhero = [[name="superman",color="blue",strenght=1000],[name="batman",color="black",strenght=1030],[name="  ",color="everypossible",strenght=null]];
for(i=0;i<superhero.length;i++){
    console.log(superhero[i][0],superhero[i][1]);
}

const chalk = require("chalk");
const log = console.log
log(chalk.red.bgYellow('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.green.bgYellow.bold('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.bgRed.bold("sunil hello"));*/
var readit = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
var score = 0 ;
log(chalk.yellow("what is the diffrence bw the Square of 4 and 5"));
log(chalk.blue("the options are :A) 2 , B) 9 , C) 25 , D)16"));
var username = readit.question("enter your Answer :");
if(username == "B" || username == "b"){
    score++;
    log(chalk.green("Shi Jawab"));
    log(chalk.yellow("how can you term Integer 43"));
    log(chalk.blue("the options are :A) Prime , B) Composite , C) Irrational , D)Even"));
    username = readit.question("enter your Answer :");
    if(username == "A" || username == "a"){
        score++;
        log(chalk.green("Shi Jawab"));
    }
    else{log(chalk.red("Galat Jawab"));
    }
    
    log(chalk.green("Score is :"+score));
}else{
    log(chalk.red("Galat Jawab"));
    log(chalk.yellow("what is the remainder of 34539102 divided by 4"));
    log(chalk.blue("the options are :A) 2 , B) 6 , C) 0 , D)1"));
    username = readit.question("enter your Answer :");
    if(username == "C" || username == "c"){
        score++;
        log(chalk.green("Shi Jawab"));
    }else{
        log(chalk.red("Galat Jawab"));
    }
    log(chalk.green("Score is :"+score));
}

