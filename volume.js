function hitungVolume(a,b) {
  var volume1, volume2, hasil;

  volume1 = a*a*a;
  volume2 = b*b*b;

  hasil = volume1 + volume2;

  return hasil;
}

var hitung = hitungVolume(8,5);
console.log(hitung);