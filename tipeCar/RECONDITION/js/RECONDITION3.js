function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/recondition/RECON 1/R2.png";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/recondition/RECON 1/R1.png";
  }
  imgChange.src = newImageSource;
}
