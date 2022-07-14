function computerPlay(){
    computer = ['rock','papar','scissors'];
    return computer[Math.floor(Math.random()*computer.length)]
}
console.log(computerPlay());