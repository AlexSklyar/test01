//metrs santimetrs inches foots

const DEFOULT_VALUE = 0; //sm
const SM = 100;
const M = 1;
const INCH = 39.37;
const FT = 3.28;

const METRS = document.getElementById("input__metrs");
const SANTIMETRS = document.getElementById('input__santimetrs');
const INCHES = document.getElementById('input__inches');
const FOOTS = document.getElementById('input__foots');

const defValueMetrs = METRS.addEventListener('input', (e) => {
    const metrs = e.target.value;
    const m = metrs*1;
    SANTIMETRS.value = metrs * SM;
    INCHES.value = metrs * INCH;
    FOOTS.value = metrs * FT;

    const metrsObj = {
        unit: 'Metr',
        value: m.toFixed(2),
        convertTo: {
            santimetrs:{ unit: 'santimetr', value: (metrs * SM).toFixed(2)},
            inches:{ unit: 'inch', value: (metrs * INCH).toFixed(2)},
            foots:{ unit: 'foot', value: (metrs * FT).toFixed(2)}
        }
    };

    console.log(metrsObj)
})

const defValueSantimetrs = SANTIMETRS.addEventListener('input', (e) => {
    const santimetrs = e.target.value;
    const sm = santimetrs*1;
    METRS.value = santimetrs/SM;
    INCHES.value = santimetrs / 2.54;
    FOOTS.value = santimetrs / 30.48;
    
      const santimetrsObj = {
        unit: 'Santimetr',
        value: sm.toFixed(2),
        convertTo: {
            metrs:{ unit: 'metr', value: (santimetrs/SM).toFixed(2) },
            inches:{ unit: 'inch', value: (santimetrs / 2.54).toFixed(2) },
            foots:{ unit: 'foot', value: (santimetrs / 30.48).toFixed(2)}
        }
    };

console.log(santimetrsObj)
})

const defValueInches = INCHES.addEventListener('input', (e) => {
    const inches = e.target.value;
    const inch = inches*1;
    METRS.value = inches/INCH;
    SANTIMETRS.value = inches*2.54;
    FOOTS.value = inches / 12;
    
    const inchesObj = {
        unit: 'inch',
        value: inch.toFixed(2),
        convertTo: {
            santimetrs:{ unit: 'santimetr', value: (inches*2.54).toFixed(2) },
            
            metrs:{ unit: 'metr', value: (inches/INCH).toFixed(2)},
            foots:{ unit: 'foot', value: (inches/12).toFixed(2) }
        }
    };

console.log(inchesObj)
})

const defValueFoots = FOOTS.addEventListener('input', (e) => {
    const ft = e.target.value;
    const foots = ft*1;
    METRS.value = ft/FT;
    SANTIMETRS.value = ft*30.48;
    INCHES.value = ft*12;
    
    const footsObj = {
        unit: 'Foot',
        value: foots.toFixed(2),
        convertTo: {
            santimetrs:{ unit: 'santimetr', value: (ft*30.48).toFixed(2) },
            inches:{ unit: 'inch', value: (ft*12).toFixed(2) },
            metrs:{ unit: 'metr', value: (ft/FT).toFixed(2)}
        }
    };

console.log(footsObj)
})

