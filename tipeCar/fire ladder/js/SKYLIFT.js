function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FL/FIRE LEDDER/SKYLIFT.png";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FL/FIRE LEDDER/SKYLIFT2.png";
  }
  imgChange.src = newImageSource;
}
