function hitungVolume(a,b)
{
  function hitungVolumeKubus1(a)
  {
    var hasilVolume1;
    return hasilVolume1 = a*a*a;
  }
  function hitungVolumeKubus2(b)
  {
    var hasilVolume2;
    return hasilVolume2 = b*b*b;
  }
  return hitungVolumeKubus1(a) + hitungVolumeKubus2(b)
}

var a = hitungVolume(8,5);
console.log(a);