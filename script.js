let analise = {
    title: '',
    type: '',

    defTitle: function defName(inputTitle) {
        analise.title = inputTitle;
        calculatorMenu();
    },

    defType: function defType(inputType) {
        analise.type = inputType;
        calculatorMenu();
    }
}
/* Variáveis corpo da página */
let htmlList = document.querySelector('html').classList;
let bodyList = document.querySelector('body').classList;

let darkButton = document.getElementById('db').classList;

/* Variáveis para Cálculo */
let flux = document.querySelector('#flux');
let fluxValue = flux.value;

let injection = document.querySelector('#injection');
let injectionValue = injection.value;

let time = document.querySelector('#time');
let timeValue = time.value;

let mobileA = document.querySelector('#mobileA');
    let valueA;

let mobileB = document.querySelector('#mobileB');
    let valueB;

let mobileC = document.querySelector('#mobileC');
    let valueC;

let mobileD = document.querySelector('#mobileD');
    let valueD;

let totalVolume;
let aVolume = document.getElementById('valueA');
let bVolume;
let cVolume;
let dVolume;

/* FUNÇÃO CALCULAR!!!! */
function calculate() {
    fluxValue = flux.value;
    injectionValue = injection.value;
    timeValue = time.value;

    totalVolume = fluxValue * injectionValue * timeValue;

    valueA = mobileA.value;
    valueB = mobileB.value;
    valueC = mobileC.value;
    valueD = mobileD.value;
    
    aVolume = ((totalVolume * valueA)/100) + ' mL';
    bVolume = ((totalVolume * valueB)/100) + ' mL';
    cVolume = ((totalVolume * valueC)/100) + ' mL';
    dVolume = ((totalVolume * valueD)/100) + ' mL';

    document.getElementById('valueA').innerHTML = aVolume;
    document.getElementById('valueB').innerHTML = bVolume;
    document.getElementById('valueC').innerHTML = cVolume;
    document.getElementById('valueD').innerHTML = dVolume;

}

function darkMode() {
    if (htmlList.contains('whiteMode')) {
        htmlList.remove('whiteMode');
        htmlList.add('darkMode');
        darkButton.remove('buttonOn');
        darkButton.add('buttonOff');
        /*bodyList.remove('gradientLight');
        bodyList.add('gradientDark')*/
    }

    else {
        htmlList.remove('darkMode');
        htmlList.add('whiteMode');
        darkButton.remove('buttonOff');
        darkButton.add('buttonOn');
        /*bodyList.remove('gradientDark');
        bodyList.add('gradientLight')*/
    }
}


//*Função NEXT*//
function calculatorMenu() {
    document.querySelector('.openMenu').style.display = 'none';
    document.querySelector('.calculatorMenu').style.display = 'flex';
    document.getElementById('db').style.display = 'flex';
}