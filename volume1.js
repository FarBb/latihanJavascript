function hitungVolume(a,b)
{
  return hitungVolumeKubus1(a) + hitungVolumeKubus2(b);
}

function hitungVolumeKubus1(a)
{
  return a*a*a;
}

function hitungVolumeKubus2(b)
{
  return b*b*b;
}

console.log(hitungVolume(8,5));