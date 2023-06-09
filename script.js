// let expression='';
// let dotAppeared=0;
// let last;
// function isOperator(tc){
//     if(tc==='+' || tc==='-' || tc==='÷' || tc==='×' || tc==='%') return true;
//     return false;
// }
// const btns=document.querySelectorAll('.btn');
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         let tc=e.target.textContent;
//         if(tc==='AC'){
//             const exp=document.querySelector('.exp');
//             const result=document.querySelector('.result');
//             exp.textContent='';
//             result.textContent='';
//         }
//         else if(tc==='C'){
//             const exp=document.querySelector('.exp');
//             let string=exp.textContent;
//             string=string.substring(0,string.length-1);
//             exp.textContent=string;
//         }
//         else if(tc==='='){
//             const exp=document.querySelector('.exp');
//             const result=document.querySelector('.result');
//             exp.textContent=result.textContent;
//             result.textContent='';
//         }
//         else if(isOperator(tc)){
//             const exp=document.querySelector('.exp');
//             const result=document.querySelector('.result');
//             let x=exp.textContent;
//             if(x.length>0 && isOperator(x.substring(x.length-1))){
//                 let expr=exp.textContent;
//                 expr=expr.substring(0,expr.length-1)+''+tc;
//                 exp.textContent=expr;
//                 result.textContent=result.textContent;
//             }
//             else if(result.text.length===0){
//                 exp.textContent='';
//             }
//             else{

//             }
//         }
//     });
// });