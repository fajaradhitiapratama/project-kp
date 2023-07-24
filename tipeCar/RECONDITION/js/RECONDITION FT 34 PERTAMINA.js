function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/recondition/RECON PERTAMINA 34/4.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/recondition/RECON PERTAMINA 34/1.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/recondition/RECON PERTAMINA 34/2.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/recondition/RECON PERTAMINA 34/3.webp";
  }
  imgChange.src = newImageSource;
}
