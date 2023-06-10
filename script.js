let lastClicked=-1;
const numbers=document.querySelectorAll('.num');
numbers.forEach(function(number){
    number.addEventListener('click',function(e){
        const exp=document.querySelector('.exp');
        const result=document.querySelector('.result');
        if(lastClicked===-1 || lastClicked===0 || lastClicked===1 || lastClicked===2){
            if(lastClicked===-1){
                result.textContent='';
            }
            if(lastClicked===2){
                exp.textContent='';
            }
            result.textContent=result.textContent+e.target.textContent;
        }
        else{
            result.textContent=e.target.textContent;
        }
        lastClicked=0;
    });
});
const del=document.querySelector('#erase');
del.addEventListener('click',function(e){
    const result=document.querySelector('.result');
    let string=result.textContent;
    string=string.substring(0,string.length-1);
    result.textContent=(string.length==0 ? 0:string);
});
const clr=document.querySelector('.ac');
clr.addEventListener('click',function(e){
    const exp=document.querySelector('.exp');
    const result=document.querySelector('.result');
    exp.textContent='';
    result.textContent='0';
    lastClicked=-1;
});
const ops=document.querySelectorAll('.op');
ops.forEach(function(op){
    op.addEventListener('click',function(e){
        const exp=document.querySelector('.exp');
        const result=document.querySelector('.result');
        if(lastClicked===2){
            exp.textContent='';
        }
        
        if(exp.textContent.length===0){
            exp.textContent=result.textContent+e.target.textContent;
        }
        else if(lastClicked!==3){
            let ex=exp.textContent;
            let n=ex.length;
            let x=parseFloat(ex.substring(0,n-1));
            let y=parseFloat(result.textContent);
            if(ex[n-1]=='+'){
                exp.textContent=(Math.round((x+y) * 1000) / 1000)+e.target.textContent;
                result.textContent=Math.round((x+y) * 1000) / 1000;
            }
            else if(ex[n-1]=='-'){
                exp.textContent=(Math.round((x-y) * 1000) / 1000)+e.target.textContent;
                result.textContent=Math.round((x-y) * 1000) / 1000;
            }
            else if(ex[n-1]=='÷'){
                exp.textContent=(Math.round((x/y) * 1000) / 1000)+e.target.textContent;
                result.textContent=Math.round((x/y) * 1000) / 1000;
            }
            else if(ex[n-1]=='×'){
                exp.textContent=(Math.round((x*y) * 1000) / 1000)+e.target.textContent;
                result.textContent=Math.round((x*y) * 1000) / 1000;
            }
        }
        lastClicked=3;
    });
});
const eq=document.querySelector('#equal');
eq.addEventListener('click',function(e){
    const exp=document.querySelector('.exp');
    const result=document.querySelector('.result');
    if(exp.textContent.length>0 && result.textContent.length>0 && lastClicked===0){
        let ex=exp.textContent;
        let n=ex.length;
        let x=parseFloat(ex.substring(0,n-1));
        let y=parseFloat(result.textContent);
        if(ex[n-1]=='+'){
            exp.textContent=exp.textContent+result.textContent;
            result.textContent=Math.round((x+y) * 1000) / 1000;
        }
        else if(ex[n-1]=='-'){
            exp.textContent=exp.textContent+result.textContent;
            result.textContent=Math.round((x-y) * 1000) / 1000;
        }
        else if(ex[n-1]=='÷'){
            exp.textContent=exp.textContent+result.textContent;
            result.textContent=Math.round((x/y) * 1000) / 1000;
        }
        else if(ex[n-1]=='×'){
            exp.textContent=exp.textContent+result.textContent;
            result.textContent=Math.round((x*y) * 1000) / 1000;
        }
    }
    lastClicked=2;
});
const dot=document.querySelector('.dot');
dot.addEventListener('click',function(e){

});