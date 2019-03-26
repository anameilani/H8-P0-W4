function kaliTerusRekursif(angka) {
  // you can only write your code here!
    var input= angka.toString()

    if(input.length == 1){
        return input
    }else{
        var digit =1;
        for(var i=0; i<input.length; i++){
            digit= digit* Number(input[i])
        }
    }

    return kaliTerusRekursif(digit)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6