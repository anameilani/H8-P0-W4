function totalDigitRekursif(angka) {
  // you can only write your code here!
    
  if((Math.floor(angka%10) == 0)){
    return 0
  }else{
    var totalNumber=0

    totalNumber = angka%10 + totalDigitRekursif(Math.floor(angka/10))

    return totalNumber
  }
  
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5