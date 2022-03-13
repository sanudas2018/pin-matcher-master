/* generatePinbtn
showPin */
function pin(){
   const randomRoundPin = Math.round(Math.random() * 10000);
   const addString = randomRoundPin + "";
   // 4 digit ar kom hole ati kag korbe 
   if(addString.length == 4){
      return randomRoundPin;
   }else{
      return pin();
   }
   
}
// onclick Function
function generatePin(){
   const getPin = pin()
   document.getElementById('showPin').value = getPin;
}
// key-pad
// input-number
// This for event babble
document.getElementById('key-pad').addEventListener('click', function(even){
   // console.log();
   const clickToNumber = even.target.innerText;
   const inputNumberField = document.getElementById('input-number');
   
   if(isNaN(clickToNumber)){
      if(clickToNumber == 'C'){
         inputNumberField.value = '';
      }
   }else{
      const prevresentValue = inputNumberField.value;
      const presentValue = prevresentValue + clickToNumber;
      inputNumberField.value = presentValue;
   }

});
function matchValue(){
   const genrtaePinValue = document.getElementById('showPin').value;
   const inputNumberField = document.getElementById('input-number').value;
   if(genrtaePinValue == inputNumberField){
      let conform = document.getElementById('conform');
      conform.style.display='block';
      let errorMess = document.getElementById('error');
      errorMess.style.display='none';
   }else{
      let errorMess = document.getElementById('error');
      errorMess.style.display='block';
      let conform = document.getElementById('conform');
      conform.style.display='none';
   }
}






