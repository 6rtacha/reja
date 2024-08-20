//A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

//masalani yechimi:
let result = 0;
function countLetter(letter, word) {
    const array = word.split("");
    for(i = 0; i <= array.length; i++){
        if(letter == array[i]){
        result++;
        };
    }
    console.log(result);
};
countLetter("e", "engineer");






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

