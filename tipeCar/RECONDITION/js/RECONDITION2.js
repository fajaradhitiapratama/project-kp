function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/recondition/RECON 1/1.webp";
  }
  imgChange.src = newImageSource;
}
