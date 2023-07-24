function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/recondition/RECON 3/RR2.png";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/recondition/RECON 3/RR3.png";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/recondition/RECON 3/RR1.png";
  }
  imgChange.src = newImageSource;
}
