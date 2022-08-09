
//a) com if aninhado
const dependente1 = Number(prompt("Qual sua idade?"));

if (dependente1 >= 13){
    if (dependente1 <18){
console.log("seu dependente já pode ter um cartão de crédito vinculado ao seu")
}else{
    console.log("Consulte outras possibilidades do Labank")}
}


//b) com if e operadores lógicos
const dependente2 = prompt("Qual a sua idade?")

if(dependente2 >=13 && dependente2<18) {
    console.log("Sue dependente já pode ter um cartão de crédito vinculado ao seu")
} else {
    console.log("Consulte outras possibilidades do Labank")
}

//c) com operador ternário

console.log(dependente1 === 13? "mensagem 1":"mensagem 2");

//d) com switch-case

const numeroRamal = Number(prompt("Solicitação de cartão de crédito desejado:\n1: Cartão Fácil\n2: Cartão Black\n3: Cartão Platinum\n4: Cartão Master Gold"));

switch(numeroRamal){
    case 1:
        console.log('cartão Fácil adquirido')
        break
    case 2:
        console.log('cartão Black adquirido')
        break
    case 3:
        console.log('cartão Platinum adquirido')
        break
    case 4:
        console.log('cartão Master Gold adquirido')
        break
    default:
        console.log("Escolha uma das quatros opções disponíveis")
}

const teste = Number(prompt("Coloque um número à sua escolha"));

if(teste %2 === 0) {
    if(teste %3 === 0)
    console.log("número é divisível por 2 e por 3")
} else {
    console.log("número não é divisível por 2 e por 3")
}

if(teste %2 === 0 && teste %3 === 0) {
    console.log("numero é divisível por 2 e por 3")
    console.log(teste ===30? "UFA ACERTEI!":"não foi dessa vez :(")
    switch(teste) {
        case 6:
            console.log("o numero escolhido é 6")
            break
        case 12:
        console.log("o numero escolhido é 12")
            break
        case 18:
        console.log("o numero escolhido é 18")
            break
        case 24:
        console.log("o numero escolhido é 24")
            break
        case 30:
        console.log("o numero escolhido é 30")
            break
        default:
        console.log("o número é maior do que 30 ou menor do que 6")
    }
} else {
    console.log("número não é divisível por 2 e por 3")
}