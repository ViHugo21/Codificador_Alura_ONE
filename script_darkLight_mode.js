isDark = false
isLight = true

function Dark_Light_Mode(){
    button = document.querySelector("#darkmode_toggle").checked
    if(button){
        isDark = false
        isLight = true
    }else{
        isLight = false
        isDark = true
    }
    if(isDark){
        console.log("Modo escuro")
        corpo = document.querySelector("body");
        logo = document.querySelector("#logo");
        section_aside = document.querySelector("#message_output");
        button_cod = document.querySelector("#cod");
        button_decod = document.querySelector("#decod");

        corpo.classList.remove("light_mode");
        corpo.classList.add("dark_mode");

        logo.src = "img/moon_logo.png";

        section_aside.classList.remove("light_mode_aside");
        section_aside.classList.add("dark_mode_aside");

        button_cod.classList.remove("light_mode_button_1");
        button_cod.classList.add("dark_mode_button_1");
        
        button_decod.classList.remove("light_mode_button_2");
        button_decod.classList.add("dark_mode_button_2");

    }else{
        console.log("Modo claro")
        console.log("Modo escuro")
        corpo = document.querySelector("body");
        logo = document.querySelector("#logo");
        section_aside = document.querySelector("#message_output");
        button_cod = document.querySelector("#cod");
        button_decod = document.querySelector("#decod");

        corpo.classList.remove("dark_mode");
        corpo.classList.add("light_mode");

        logo.src = "img/sun_logo.png";

        section_aside.classList.remove("dark_mode_aside");
        section_aside.classList.add("light_mode_aside");

        button_cod.classList.remove("dark_mode_button_1");
        button_cod.classList.add("light_mode_button_1");
        
        button_decod.classList.remove("dark_mode_button_2");
        button_decod.classList.add("light_mode_button_2");
    }
    console.log(button)
}