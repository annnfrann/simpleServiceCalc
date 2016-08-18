trig.factory("CalculatorFactory", function(){

return {
  findHypot: function(s1,s2){
    return  Math.sqrt(Math.pow(s1, 2) + Math.pow(s2, 2))
  }
}

})
