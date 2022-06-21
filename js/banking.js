function getdeposit(){

    const depositinput=document.getElementById('deposit-input')
    const newdeposit=depositinput.value;
    const depositadd = parseFloat(newdeposit);
       // clere Diposit //
   depositinput.value=''
    return depositadd;

}



/// Handel deposit//
document.getElementById('deposit-button').addEventListener('click', function(){
//    const depositinput=document.getElementById('deposit-input')
//    const newdeposit=depositinput.value;
//    const depositadd = parseFloat(newdeposit);
    const depositadd=getdeposit()
   const depositBlance=document.getElementById('deposit-total')
   const newdepositBlance= depositBlance.innerText;
   const totaldeposit= parseFloat(newdepositBlance);
   const totaldepositBlance=depositadd + totaldeposit;
   depositBlance.innerText=totaldepositBlance;

   // total Blance handel//

   const blance=document.getElementById('balance-total');
   const totalblance =blance.innerText;
   const newblance = parseFloat(totalblance);
   const finalBlance = newblance +depositadd;
   blance.innerText=finalBlance;
//    // clere Diposit //
//    depositinput.value=''
})

/// Handel Withdrew//
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdraw=document.getElementById('withdraw-input')
    const newwithdraw=withdraw.value;
    const withdrewadd= parseFloat(newwithdraw);
    const witdrawbllance=document.getElementById('withdraw-total')
    const withdrawtotal = witdrawbllance.innerText;
    const newWithdrw=parseFloat(withdrawtotal);
    const totalwithdrew=withdrewadd + newWithdrw;
    witdrawbllance.innerText=totalwithdrew;
    const blance=document.getElementById('balance-total');
    const totalblance =blance.innerText;
    const newblance = parseFloat(totalblance);
    const finalBlance = newblance - totalwithdrew;
    blance.innerText=finalBlance;
    // clere withdrew//
    withdraw.value=''
})