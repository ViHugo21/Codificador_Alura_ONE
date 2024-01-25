abc = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
morse = [' / ','.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']

frankstein = '';
palavra_decodificada = '';

palavra_codificada = '- . ... - .- -. -.. --- / -.. . -.-. --- -.. .. ..-. .. -.-. .- -.-. .- --- / -.. --- / .--. .-. --- --. .-. .- -- .- / .--. .- .-. .- / -.-. --- -.. .. --. --- / -- --- .-. ... . / . -- / - . -..- - --- / .--. .- -.. .-. .- --- '

letra = '';

for(m = 0; m < palavra_codificada.length; m++){
    if(palavra_codificada[m] === ' '){
        
        indice = morse.indexOf(letra)

        palavra_decodificada += abc[indice]

        letra = ''
    }else if(palavra_codificada[m] === '/'){
        m++;
        palavra_decodificada += ' '
        letra = ''
    }
    else{
        letra += palavra_codificada[m]
    }
    
}

console.log(teste)
console.log(palavra_decodificada)


/*for(m = 0; m < teste.length;m++){
    indice = abc.indexOf(teste[m])
    letra_morse = morse[indice]

    palavra_morse.push(letra_morse)
}
for(m = 0;m < palavra_morse.length;m++){
    palavra_codificada += '  ';
    palavra_codificada += palavra_morse[m]
}
for(m = 0;m < palavra_morse.length;m++){
    indice = morse.indexOf(palavra_morse[m])
    letra = abc[indice]

    palavra_decodificada += letra;
}
console.log(palavra_morse)
console.log(palavra_codificada)
console.log(palavra_decodificada)*/

function Codificar(){
    escolha = document.querySelector("#cifra_cesar").checked;
    if(escolha){
        Codificar_Cesar();
    }else{
        Codificar_Morse();
    }
    
}

function Decodificar(){
    escolha = document.querySelector("#cifra_cesar").checked;
    if(escolha){
        Decodificar_Cesar();
    }else{
        Decodificar_Morse();
    }
}


function Codificar_Morse(){
    user_input = document.querySelector("#text_input").value;
    output = document.querySelector("#output");

    codigo_morse = '';
    palavra_morse = [];

    for(m = 0;m < user_input.length;m++){
        indice = abc.indexOf(user_input[m]);
        letra_morse = morse[indice];
    
        palavra_morse.push(letra_morse);

        codigo_morse += ' ';
        codigo_morse += letra_morse;
    }

    output.value = codigo_morse;
    no_input = document.querySelector("#no_input").hidden = true;
}

function Decodificar_Morse(){
    user_input = document.querySelector("#text_input").value;
    output = document.querySelector("#output");

    user_input = user_input.trim();

    user_input += ' '

    palavra_decodificada = '';
    letra = '';
    indice = 0;

    for(m = 0; m < user_input.length; m++){
        if(user_input[m] === ' '){
            
            indice = morse.indexOf(letra)
    
            palavra_decodificada += abc[indice]
    
            letra = ''
        }else if(user_input[m] === '/'){
            m++;
            palavra_decodificada += ' '
            letra = ''
        }
        else{
            letra += palavra_codificada[m]
        }
        
    }

    output.value = palavra_decodificada;
    no_input = document.querySelector("#no_input").hidden = true;
}

function Codificar_Cesar(){
    user_input = document.querySelector("#text_input").value;
    output = document.getElementById("output");

    frankstein = ''

    for(i = 0; i < user_input.length; i++){
        indice = abc.indexOf(user_input[i])
        indice_incrementado = indice + 3
    
        if(indice_incrementado == 27){
            indice_incrementado = 1
        }else if(indice_incrementado == 28){
            indice_incrementado = 2
        }else if(indice_incrementado == 29){
            indice_incrementado = 3
        }
    
        if(indice != 0){
            frankstein += abc[(indice_incrementado)]
        }else if(indice == 0){
            frankstein += ' '
        }
        
    }

    output.value = frankstein;
    no_input = document.querySelector("#no_input").hidden = true;
}

function Decodificar_Cesar(){
    user_input = document.querySelector("#text_input").value;
    output = document.getElementById("output");

    palavra_decodificada = ''

    for(a = 0; a < user_input.length; a++){
        indice = abc.indexOf(user_input[a])
        indice_corrigido = indice - 3
    
        if(indice == 3){
            indice_corrigido = 26
        }else if(indice == 2){
            indice_corrigido = 25
        }else if(indice == 1){
            indice_corrigido = 24
        }
    
        if(indice != 0){
            palavra_decodificada += abc[indice_corrigido]
        }else if(indice == 0){
            palavra_decodificada += ' '
        }
    }

    output.value = palavra_decodificada;
    no_input = document.querySelector("#no_input").hidden = true;
}