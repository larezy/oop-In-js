'use strict';

function setDate(){
    const now=Date();
    const seconds =now.getseconds();
    const secondsDegrees= ((seconds/60)*360);
    console.log(seconds);
}

const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const seconds = document.querySelector('#seconds');

setInterval(setDate,1000);