function balikKata(kata){
  var word = "";
  for(var i = kata.length - 1; i >= 0; i--) {
    word += kata[i];
  }
  return word;
}

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
