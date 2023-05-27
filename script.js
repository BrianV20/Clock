const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");

function checkDigits(num){
    return num < 10 ? "0" + num : num;
}

function setDate() {
    const today = new Date();


    const seconds = today.getSeconds();
    const seconddeg = ((seconds / 60) * 360) + 360;
    secondEl.style.transform = `rotate(${seconddeg}deg)`;

    const minutes = today.getMinutes();
    const minuteDeg = ((minutes / 60) * 360);
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

    const hours = today.getHours();
    const hourDeg = ((hours / 12) * 360);
    hourEl.style.transform = `rotate(${hourDeg}deg)`;


    timeEl.innerHTML = `
        <span>
            <strong>${checkDigits(hours)}</strong>
            :
            ${checkDigits(minutes)}
            :
            <small>${checkDigits(seconds)}</small>
        </span>
    `
}

setDate();

//callback: funcion que llama a otra funcion
setInterval(setDate, 1000);

const fechaEl = document.querySelector(".fechaAMostrar");
const fechaHoy = new Date();

function queDiaEs(){
    let dia = fechaHoy.getDay();
    if(dia == 0){
        return "Domingo";
    }
    else if(dia == 1){
        return "Lunes";
    }
    else if(dia == 2){
        return "Martes";
    }
    else if(dia == 3){
        return "Miercoles";
    }
    else if(dia == 4){
        return "Jueves";
    }
    else if(dia == 5){
        return "Viernes";
    }
    else if(dia == 6){
        return "Sabado";
    }
}
function queMesEs(){
    let mes = fechaHoy.getMonth();
    if(mes == 0){
        return "Enero";
    }
    else if(mes == 1){
        return "Febrero";
    }
    else if(mes == 2){
        return "Marzo";
    }
    else if(mes == 3){
        return "Abril";
    }
    else if(mes == 4){
        return "Mayo";
    }
    else if(mes == 5){
        return "Junio";
    }
    else if(mes == 6){
        return "Julio";
    }
    else if(mes == 7){
        return "Agosto";
    }
    else if(mes == 8){
        return "Septiembre";
    }
    else if(mes == 9){
        return "Octubre";
    }
    else if(mes == 10){
        return "Noviembre";
    }
    else if(mes == 11){
        return "Diciembre";
    }
}

function setFechaMio(){
    fechaEl.innerHTML = `
    ${queDiaEs()}, ${fechaHoy.getDate()} de ${queMesEs()} del ${fechaHoy.getFullYear()}
    `;
}

const arrayDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
function setFechaProfe(){
    const dia = arrayDias[fechaHoy.getDay()];
    const mes = arrayMeses[fechaHoy.getMonth()];
    fechaEl.innerHTML = `
        ${dia}, ${fechaHoy.getDate()} de ${mes} de ${fechaHoy.getFullYear()}
    `;
}
//setFechaMio();
setFechaProfe();



//EVENTOS
// const divFecha = document.querySelector(".fechaAMostrar");
const divClock = document.querySelector(".clock");
const botonModo = document.querySelector(".btnToggleMode");
botonModo.addEventListener("click", cambiarModo);
function cambiarModo() {
    const html = document.querySelector("html");
    if(html.classList.contains("dark")){
        html.classList.remove("dark");
    }
    else{
        html.classList.add("dark");
    }
}