const frase = [
  { number: 3, word: "love" },
  { number: 6, word: "computers" },
  { number: 2, word: "dogs" },
  { number: 4, word: "cats" },
  { number: 1, word: "I" },
  { number: 5, word: "you" },
];

let n = 0;
let j=0;
   
    for (let i = 0; i < frase.length; i++) {
        j = j+1
        n= n + j +1;
        
        if (n == frase[i].number) {
            console.log(frase[i].word);
            break;
        }
    }


// let n = 0;
// for (let j=0; j < 30; j++){
//     n= n + j +1;
//     for (let i = 0; i < frase.length; i++) {
//         if (n == frase[i].number) {
//             console.log(frase[i].word);
//             break;
//         }
//     }
// }
// let n = 0;
// function decodificacion(num){
//     for (let j=0; j < num; j++){
//             n= n + j +1;
//        for (let i = 0; i < frase.length; i++) {
//             if (n == frase[i].number) {
//                 console.log(frase[i].word);
            
//                 break;
//             }
//         }
//     }
//     return n
// }
// decodificacion(30)



// let n = 1;
// for (let i = 0; i < frase.length; i++) {
//     for (let j=1; j < 30; j++){
//     n= n + j +1;
//     let num = n
//         if (num == frase[i].number) {
//             console.log(frase[i].number);
//             console.log(frase[i].word);
//             break;
//         }
//     }
// }

// let n=1
// function numDecodificado(num){
//     for (let i=1; i < num; i++){
//     console.log (n+"")
//    n = n+i+1
//    }
//    return n
// }
// numDecodificado(4)

// for (let j=1; j < num; j++){
//     if(numDecodificado(j) == 1){
//         console.log(frase[frase.number].word)

//     }else if(numDecodificado(j) == 2){

//     }
// }

// // console.log(frase[decodificacion].word)

// if((frase[0].number )< (frase[1].number)){
//     console.log(frase[0].word)
//    }else{
//   console.log(frase[1].word)
//    }

// //
//     // let x= n+i
//     // console.log(frase[x]);
