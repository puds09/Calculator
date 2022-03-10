teclas = document.querySelectorAll('.row button');


// definindo os parametros para fazer a conta
// na calculadora
let numero1 = "";
let operador = "";
let numero2 = "";
let flag = false
let conta = ""
let resultado = 0;

for (let cont = 0; cont < teclas.length; cont++) {
    const botao = teclas[cont];
    let visor = document.querySelector('input#visor');
    
    botao.onclick = function () {        
        
        if (botao.classList[1] == "operador" && botao.classList[2] == "On") {
            numero1 = "";
            operador = "";
            numero2 = "";
            flag = false;
            conta = ""
            resultado = 0;
            visor.value = conta;
        }

        else if(botao.classList[1] == "operador" && botao.classList[2] != "igual") {
            flag = true;
            operador = botao.classList[2];

            if (operador == "adicao") {
                conta += "+"
            }
            else if (operador == "subtracao") {
                conta += "-"
            }
            else if (operador == "divisao") {
                conta += "/"
            }
            else if (operador == "multiplicacao") {
                conta += "*"
            }
            visor.value = conta;

        }   

        if(botao.classList[1] == "operador" && botao.classList[2] == "igual") {
            numero1 = parseFloat(conta);
            numero2 = parseFloat(numero2);
            console.log("numero1", numero1);
            console.log("numero2", numero2);
            // descobrindo tipo de operação
            if (operador == "adicao") {
                resultado = numero1 + numero2;
            }
            else if (operador == "subtracao") {
                resultado = numero1-numero2;
            }
            else if (operador == "divisao") {
                resultado = numero1/numero2;
            }
            else if (operador == "multiplicacao") {
                resultado = numero1*numero2;
            }
            visor.value = resultado; //mostrar resultado na tela
            
            // zerando memoria da calculadora
            numero1 = "";
            operador = "";
            numero2 = "";
            flag = false;
            conta = ""
            resultado = 0;


        }
        
        else if (flag == true && botao.classList[1] != "operador") {
            numero2 = botao.classList[1];
            conta += numero2;
            visor.value = conta;
        }

        else if (flag == false && botao.classList[1] != "operador") {
            numero1 = botao.classList[1];
            conta += numero1;
            visor.value = conta;
        }


    }

}




