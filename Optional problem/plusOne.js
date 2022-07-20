var plusOne = function(digits) {
  let carry=0;
  let sum=0
  let i=digits.length-1
  while(i>=0){
      if(i===digits.length-1){
      sum=digits[i]+1
      }else{
          sum=digits[i]+carry
      }
      carry=parseInt(sum/10)
      digits[i]=sum%10
      i--
    
  }
  if(carry!=0){
      digits.unshift(carry)
  }
  return digits
};