var exchangeForm=document.querySelector(".exchangeForm");
var result=document.querySelector(".result");
console.log(result);

exchangeForm.onsubmit=function(e){
    e.preventDefault();
    var items=e.target.elements;
    var amount=items[0].value;
    var amountType=items[1].value;
    
    if(amountType=="dollar"){
        amount/=3.5;
    }
    else if(amountType=="dinar"){
        amount/=5;
    }
    result.textContent=`the converted amount is: ${amount} in ${amountType}`;
}
