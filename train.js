console.log("Jack Ma maslahatlari");

const list = [
    "yaxshi talaba bo'ling", //0-20
    "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
    "o'zingiz uchun ishlashni boshlang", //30-40
    "siz kuchli bo'lgan narsalarni qiling", //40-50
    "yoshlara investitsiya qiling", //50-60
    "endi dam oling, foydasi yo'q" //60
];

function maslahatBering (a, callBack) {
    if(typeof a !== 'number')callBack("insert a number", null);// callBack funksiyada birinchi parametr error boladi, ikkinchisi biz qaytarmoqchi bolgan data
    else if(a <= 20) callBack(null, list[0]);
    else if(a > 20 && a <= 30) setTimeout(function(){callBack(null, list[1])}, 5000);
    else if(a > 30 && a <= 40) callBack(null, list[2]);
    else if(a > 40 && a <= 50) callBack(null, list[3]);
    else if(a > 50 && a <= 60) callBack(null, list[4]);
    else{
        setTimeout(function(){
            callBack(null, list[5]);
        }, 5000)
        
    }
    
};
console.log('passed here 0');

maslahatBering(25, (err, data) => {  //parametr sifatida function ishlayapti
    if(err) console.log('ERROR:', err);
    else{
        console.log("javob:", data);
        
    }
});
console.log('passed here 1');