function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/recondition/RECON 2/RC1.png";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/recondition/RECON 2/RC2.png";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/recondition/RECON 2/RC3.png";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/recondition/RECON 2/RC4.png";
  }
  imgChange.src = newImageSource;
}
