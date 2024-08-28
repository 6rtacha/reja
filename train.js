// D-TASK: 

// Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
const moment = require("moment");
class Shop {
    non;
    lagmon;
    cola;

    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }
    qoldiq() {
        console.log(`Hozir ${moment().format('HH:mm:ss')}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
        
    }
    sotish(item, number) {
        // console.log(`Hozir ${moment().format('HH:mm:ss')}da`);
        if(item == 'non' && this.non > number){
            this.non -= number;
        }else if(item == 'lagmon' && this.lagmon > number){
            this.lagmon -= number;
        }else if(item == 'cola' && this.cola > number){
            this.cola -= number;
        } else{
            console.log("Yetarlicha mahsulot mavjud emas");
            
        }
        
    }
    qabul(item, number) {
        // console.log(`Hozir ${moment().format('HH:mm:ss')}da`);
        if(item == 'non'){
            this.non += number;
        }else if(item == 'lagmon'){
            this.lagmon += number;
        }else if (item == 'cola'){
            this.cola += number;
        }
    }
    
    
}
const shop = new Shop(4, 5, 2);
// shop.sotish('non', 3);
// shop.qabul('cola', 4);
shop.qoldiq();

// C-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(a, b) {
//     const a_sorted = a.toLowerCase().split("").sort().toString();
//     const b_sorted = b.toLowerCase().split("").sort().toString();
//     if(a_sorted == b_sorted){
//         console.log("true"); 
//     }else{
//         console.log("false");
        
//     }
// }
// checkContent("mitgroup", "gmtiprou");


// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

//Yechish:
// let result = 0;
// function countDigits(a) {
//     const string = a.split("");
//     for(i = 0; i <= string.length; i++){
//         if(string[i] >= 0){
//             result++;
//         };
//     };
//     console.log(result);
// }
// countDigits("ad2a54y79wet0sfgb9")




//A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

//masalani yechimi:
// let result = 0;
// function countLetter(letter, word) {
//     const array = word.split("");
//     for(i = 0; i <= array.length; i++){
//         if(letter == array[i]){
//         result++;
//         };
//     }
//     console.log(result);
// };
// countLetter("e", "engineer");






// console.log("Jack Ma maslahatlari");

// // nodejs single thread - bir xonali degani
// //synchronus function - immedietly ishga tushuvchi va javobni tezda talab qiliuvchi functionlar
// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "o'zingiz uchun ishlashni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "yoshlara investitsiya qiling", //50-60
//     "endi dam oling, foydasi yo'q" //60
// ];


// // callBack Function
// function maslahatBering (a, callBack) {
//     if(typeof a !== 'number')callBack("insert a number", null);// callBack funksiyada birinchi parametr error boladi, ikkinchisi biz qaytarmoqchi bolgan data boladi
//     else if(a <= 20) callBack(null, list[0]);
//     else if(a > 20 && a <= 30) setTimeout(function(){callBack(null, list[1])}, 5000);
//     else if(a > 30 && a <= 40) callBack(null, list[2]);
//     else if(a > 40 && a <= 50) callBack(null, list[3]);
//     else if(a > 50 && a <= 60) callBack(null, list[4]);
//     else{
//         setInterval(function(){
//             callBack(null, list[5]);
//         }, 3000)
        
//     }
    
// };
// console.log('passed here 0');

// maslahatBering(70, (err, data) => {  
//     if(err) console.log('ERROR:', err);
//     else{
//         console.log("javob:", data);
        
//     }
// });
// console.log('passed here 1');

// ASYNC Function (sync functionlar hammasi ishga tushgandan keyin nodejs async functionlar bilan ishalay boshlaydi, 
// shuning uchun single threadni umuman band qilmaydi, event loop orqali thread pool ga tashlayveradi)

// async function maslahatBering (a) {
//     if(typeof a !== 'number') throw new Error("insert a number", null);
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else{
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// };

// call via then/catch

// console.log('passed here 0');
// maslahatBering(35)
//     .then((data) => {
//         console.log("javob: ", data);
//     })
//     .catch((err) => {
//         console.log("ERROR: ", err);
//     })
// console.log('passed here 1');

// call via aysnc / await
// async function run() {
//     let javob = await maslahatBering(20); //brirnchisi tugallanmasdan ikkinchisiga otmaydi
//     console.log(javob);
//     javob = await maslahatBering(78);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

