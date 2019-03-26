function meleeRangedGrouping (str) {
  //your code here

  var result = []

  if(str.length ==0){
        return result
  }else{
  var input = str.split(',')
  var inputSplit =[]
  var meleType= []
  var obj={}

  for(var i =0; i<input.length; i++){
        inputSplit.push(input[i].split("-"))
    }

  for(var j=0; j<inputSplit.length; j++){
      var found= false
      if(obj[inputSplit[j][1]] == undefined){
          obj[inputSplit[j][1]]=[]
      }

      obj[inputSplit[j][1]].push(inputSplit[j][0])
      
  }  
  }
  for(var key in obj){
      result.push(obj[key])
  }

  return input
  

}

// TEST CASE

//console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []