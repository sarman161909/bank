// Input Function
function inputadd(inputad){
    const deposit=document.getElementById(inputad)
const depositfield=deposit.value;
const newdeposit=parseFloat(depositfield);
// Clere Diposit Field//
deposit.value="";
return newdeposit;
}

// Input Add Function//

function blanceadd(idInput,newdeposit){
    const depositText=document.getElementById(idInput)
const depositadd= depositText.innerText;
const totalDeposit=parseFloat(depositadd);
depositText.innerText=newdeposit + totalDeposit;

}
function getcurrentBlance(){
    const totalBlance=document.getElementById('balance-total')
const blanceText=totalBlance.innerText;
const totaladd= parseFloat(blanceText);
return totaladd;

}

// Input Function Total//
function totalBlance(newdeposit,isadd){
const totalBlance=document.getElementById('balance-total')
// const blanceText=totalBlance.innerText;
// const totaladd= parseFloat(blanceText);
const totaladd=getcurrentBlance();
if(isadd == true){
    totalBlance.innerText = newdeposit + totaladd;
}
else{
    totalBlance.innerText = totaladd - newdeposit;
}

}
document.getElementById('deposit-button').addEventListener('click',function(){
const newdeposit=inputadd('deposit-input')
blanceadd('deposit-total',newdeposit)
totalBlance(newdeposit, true)
})

document.getElementById('withdraw-button').addEventListener('click', function(){
   const newWithDrew= inputadd('withdraw-input')
   const currentBlance = getcurrentBlance()
    if(newWithDrew > 0 && newWithDrew < currentBlance){
    blanceadd('withdraw-total',newWithDrew)
    totalBlance(newWithDrew,false)
    }
})