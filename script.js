 function add(a,b) {
    return a+b;
  };
  
  const subtract = function(a,b) {
      return a-b;
  };
  const multiply = function(a) {
    let x=1;
      for(let i=0;i<a.length;i++){
      x*=a[i];
    }
    return x;
  };
  
  const power = function(a,b) {
    return a**b;
      
  };
  
  const factorial = function(a) {
    let x=1;
    if(a===0){
      return 1;
    }
      else{
      for(let i=1;i<=a;i++){
        x*=i;
      }
      return x;
    }}