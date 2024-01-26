abc = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
morse = [' / ','.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']


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

    user_input = user_input.toLowerCase(user_input);
    user_input = user_input.replace('ç','c')
    user_input = user_input.replace(',','')
    user_input = user_input.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    codigo_morse = '';

    for(m = 0;m < user_input.length;m++){
        indice = abc.indexOf(user_input[m]);
        letra_morse = morse[indice];

        if(indice == 0){
            codigo_morse += '/ ';
        }else{
            codigo_morse += letra_morse;
            codigo_morse += ' ';
        }
    }

    output.value = codigo_morse;
    no_input = document.querySelector("#no_input").hidden = true;
}

function Decodificar_Morse(){
    user_input = document.querySelector("#text_input").value;
    output = document.querySelector("#output");

    user_input = user_input.trim();

    user_input += ' '

    letra_decodificada = ''
    palavra_decodificada = '';
    letra = '';
    indice = 0;

    for(m = 0; m < user_input.length; m++){
        if(user_input[m] == ' '){
            if(user_input[(m + 1)] == '/'){
                m += 2
    
                indice = morse.indexOf(letra)
                letra_decodificada = abc[indice]
    
                palavra_decodificada += letra_decodificada
                palavra_decodificada += ' '
    
                letra = ''
            }else{
                indice = morse.indexOf(letra)
                letra_decodificada = abc[indice]
    
                palavra_decodificada += letra_decodificada
    
                letra = ''
            }
            
        }else{
            letra += user_input[m]
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
