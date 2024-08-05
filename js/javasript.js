
document.addEventListener("DOMContentLoaded", function () {
    Inicio();

    function Inicio(){
        MostrarInicio();
        document.querySelector("#aInicio").addEventListener('click', MostrarInicio);
        document.querySelector("#aSobreMi").addEventListener('click', MostrarSobreMi);
        document.querySelector("#aCurriculum").addEventListener('click', MostrarCurriculum);
        document.querySelector("#aPortafolio").addEventListener('click', MostrarPortafolio);
        document.querySelector("#aContacto").addEventListener('click', MostrarContacto);
    }
    
    function OcultarTodo(){
        document.querySelector("#Inicio").style.display = "none";
        document.querySelector("#SobreMi").style.display = "none";
        document.querySelector("#Curriculum").style.display = "none";
        document.querySelector("#Portafolio").style.display = "none";
        document.querySelector("#Contacto").style.display = "none";
    }
    
    function MostrarInicio(){
        OcultarTodo();
        document.querySelector("#Inicio").style.display = "block";
        CambioColoresBotones();
        if(document.querySelector("#Inicio").style.display = "block"){
            document.querySelector("#aInicio").style.color = "skyblue";
        }
    }
    
    function MostrarSobreMi(){
        OcultarTodo();
        document.querySelector("#SobreMi").style.display = "block";
        CambioColoresBotones();
        if(document.querySelector("#SobreMi").style.display = "block"){
            document.querySelector("#aSobreMi").style.color = "skyblue";
        }
    }
    
    function MostrarCurriculum(){
        OcultarTodo();
        document.querySelector("#Curriculum").style.display = "block";
        CambioColoresBotones();
        if(document.querySelector("#Curriculum").style.display = "block"){
            document.querySelector("#aCurriculum").style.color = "skyblue";
        }
    }
    
    function MostrarPortafolio(){
        OcultarTodo();
        document.querySelector("#Portafolio").style.display = "block";
        CambioColoresBotones();
        if(document.querySelector("#Portafolio").style.display = "block"){
            document.querySelector("#aPortafolio").style.color = "skyblue";
        }
    }
    
    function MostrarContacto(){
        OcultarTodo();
        document.querySelector("#Contacto").style.display = "block";
        CambioColoresBotones();
        if(document.querySelector("#Contacto").style.display = "block"){
            document.querySelector("#aContacto").style.color = "skyblue";
        }
    }
    
    function CambioColoresBotones(){
        document.querySelector("#aInicio").style.color = "white";
            document.querySelector("#aSobreMi").style.color = "white";
            document.querySelector("#aCurriculum").style.color = "white";
            document.querySelector("#aPortafolio").style.color = "white";
            document.querySelector("#aContacto").style.color = "white";
    }
});

