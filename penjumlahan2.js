function tambah(){
  var hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i]
  }
  return hasil;
}

var a = tambah(1,2,7);
console.log(a);