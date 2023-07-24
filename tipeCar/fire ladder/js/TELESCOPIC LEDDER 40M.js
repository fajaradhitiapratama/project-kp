function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource =
      "/asset/Mobil/FL/FIRE LEDDER/TELE 40M/TELESCOPIC 40  M.png";
  }
  imgChange.src = newImageSource;
}
