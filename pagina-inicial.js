
var cuentaMali = {
    nombre: "Mali",
    userName: "gali@hotmail.com",
    password: "gali123",
    saldo: 200}
var cuentaGera= {
    nombre: "Gera",
    userName: "gera@hotmail.com",
    password: "Gera123",
    saldo: 290}
var cuentaMaui= {
    nombre: "Maui",
    userName: "maui@hotmail.com",
    password: "Maui123",
    saldo: 67}

// Función para login

function login(form){

    if (form.user.value==cuentaMaui.nombre){
        if(form.contraseña.value==cuentaMaui.password){
            location="Saldos Maui.html"
        }else{
            alert("Password incorrecto")
        }
    } else if(form.user.value==cuentaGera.nombre){
        if(form.contraseña.value==cuentaGera.password){
            location="Saldos Gera.html"

        }else{
            alert("Password incorrecto")
        }
    } else if(form.user.value==cuentaMali.nombre){
        if(form.contraseña.value==cuentaMali.password){
            location="Saldos Mali.html"

        }else{
            alert("Password incorrecto")
        }
    } else {
        alert("Usuario Incorrecto")
    }

}

// punto de control para ctrl+z
// Funciones para Maui

function abonoMaui(){
    var saldoMaui = cuentaMaui.saldo;
    var montoAbono = prompt("ingresa el monto")
    var resultado = (saldoMaui + parseInt(montoAbono));

    if (resultado>990) {
        
        alert("No tener un saldo mayor a 990 pesitos en tu cuenta")

    } else {
        document.getElementById("resultado").innerHTML=resultado
    }     
}

function retiroMaui(){
    var saldoMaui = cuentaMaui.saldo;
    var montoAbono = prompt("ingresa el monto")
    var resultado = (saldoMaui - parseInt(montoAbono));

    if (resultado<10) {
        
        alert("No puedes tener un saldo menor a 10 pesitos")

    } else {
        document.getElementById("resultado").innerHTML=resultado

    }     
}

function saldoMaui(){
    var saldoMaui = cuentaMaui.saldo;

    document.getElementById("resultado").innerHTML=saldoMaui
}

// Funciones para Gera

function abonoGera(){
    let saldoGera = cuentaGera.saldo;
    var montoAbono = prompt("ingresa el monto")
    var resultado = (saldoGera + parseInt(montoAbono));

    if (resultado>990) {
        
        alert("No tener un saldo mayor a 990 pesitos en tu cuenta")

    } else {
        document.getElementById("resultado").innerHTML=resultado
    }     
}

function retiroGera(){
    var saldoGera = cuentaGera.saldo;
    var montoAbono = prompt("ingresa el monto")
    var resultado = (saldoGera - parseInt(montoAbono));

    if (resultado<10) {
        
        alert("No puedes tener un saldo menor a 10 pesitos")

    } else {
        document.getElementById("resultado").innerHTML=resultado

    }     
}

function saldoGera(){
    var saldoGera = cuentaGera.saldo;

    document.getElementById("resultado").innerHTML=saldoGera
}

// Funciones para Mali

function abonoMali(){
    var saldoMali = cuentaMali.saldo;
    var montoAbono = prompt("ingresa el monto")
    var resultado = (saldoMali + parseInt(montoAbono));

    if (resultado>990) {
        
        alert("No tener un saldo mayor a 990 pesitos en tu cuenta")

    } else {
        document.getElementById("resultado").innerHTML=resultado
    }     
}

function retiroMali(){
    var saldoMali = cuentaMali.saldo;
    var montoAbono = prompt("ingresa el monto")
    var resultado = (saldoMali - parseInt(montoAbono));

    if (resultado<10) {
        
        alert("No puedes tener un saldo menor a 10 pesitos")

    } else {
        document.getElementById("resultado").innerHTML=resultado

    }     
}

function saldoMali(){
    var saldoMali = cuentaMali.saldo;

    document.getElementById("resultado").innerHTML=saldoMali
}