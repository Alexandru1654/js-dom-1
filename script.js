const lampOFF = document.getElementById('lamp-off');
const lampOn = document.getElementById('lamp-on');
const lampON = document.getElementById('turn-on');
const lampOff = document.getElementById('turn-off');

// Power button click event
lampOn.addEventListener('click', function () {
    lampON.style.display = 'block';
    lampOff.style.display = 'none';
});

// Power off button click event
lampOFF.addEventListener('click', function () {
    lampOff.style.display = 'block';
    lampON.style.display = 'none';
});

