function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource =
      "/asset/Mobil/recondition/RECON PERTAMINA FT 29/RECON 1.png";
  } else if (imageNumber === 2) {
    newImageSource =
      "/asset/Mobil/recondition/RECON PERTAMINA FT 29/RECON 2.png";
  } else if (imageNumber === 3) {
    newImageSource =
      "/asset/Mobil/recondition/RECON PERTAMINA FT 29/RECON 6.png";
  } else if (imageNumber === 4) {
    newImageSource =
      "/asset/Mobil/recondition/RECON PERTAMINA FT 29/RECON 4.png";
  }
  imgChange.src = newImageSource;
}
