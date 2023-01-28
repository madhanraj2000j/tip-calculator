'use strict';

// elements

const billInputEl = document.getElementById('bill');
const peopleEl = document.getElementById('people');
const tipInputEl = document.querySelectorAll('.tip-percent');
const customTipEl = document.getElementById('custom-tip');
const amountEl = document.getElementById('amount');
const totalEl = document.getElementById('total');
const resetEl = document.getElementById('btn-reset');
const errorEl = document.getElementById('error-msg');

// global varaibles
let bill,people,tipPercent;

function init(){
   bill = 0;
 people = 0;
 tipPercent = 0;

amountEl.innerText = '$0.00';
totalEl.innerText = '$0.00';

peopleEl.value = null;
  billInputEl.value = null;
  customTipEl.value = null;

  billInputEl.style.border='none';
    peopleEl.style.border='none';
    customTipEl.style.border ='none';
    errorEl.style.display='none';
}
// console.log(tipInputEl);

// function
function calcBill(tipPercent){
  
  bill= Number(billInputEl.value);
  people= Number(peopleEl.value); 
   
  // showing error msg
  if(people ===0 || people < 0){
    errorEl.style.display='block';
    peopleEl.style.border='2px solid orangered';
  }
  // else calculate the input
  else{

  // calculation
    const totalTip = bill * tipPercent;
    const totalBill = bill +totalTip ;
    const tipPerPeople = totalTip/people;
    const billPerPeople = totalBill/people;
  
    // showing output
    amountEl.innerText = '$' + tipPerPeople.toFixed(2);
    totalEl.innerText = '$' + billPerPeople.toFixed(2);

    peopleEl.value = null;
  billInputEl.value = null;
  }
}

// events

for(let i = 0; i< tipInputEl.length; i++){
  tipInputEl[i].addEventListener('click',function(){
    tipPercent= Number(this.value)/100;
    calcBill(tipPercent)
    
    peopleEl.value = null;
  billInputEl.value = null;

     });
  
    //  custom tip
    customTipEl.addEventListener('change',function(){
      tipPercent= Number(this.value)/100;
      calcBill(tipPercent)

    
      errorEl.style.display='none';
      peopleEl.style.border='none';
      customTipEl.style.border ='none';
      billInputEl.style.border='none';
      
      this.value= null;
    })
    // adding borders to all inputs
    customTipEl.addEventListener('click',function(){
      this.style.border='2px solid var(--clr-strong-cyan)';
    })
    billInputEl.addEventListener('click',function(){
      this.style.border='2px solid var(--clr-strong-cyan)';
     })
     peopleEl.addEventListener('click',function(){
      this.style.border='2px solid var(--clr-strong-cyan)';
     })

// btn reset
    resetEl.addEventListener('click',init);
    
    // initial settings
    init();
}
// 
