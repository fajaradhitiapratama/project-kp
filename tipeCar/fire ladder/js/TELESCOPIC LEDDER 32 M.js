function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource =
      "/asset/Mobil/FL/FIRE LEDDER/TELE 32M/TELESCOPIC 32  M.png";
  } else if (imageNumber === 2) {
    newImageSource =
      "/asset/Mobil/FL/FIRE LEDDER/TELE 32M/TELESCOPIC 32  M3.png";
  } else if (imageNumber === 3) {
    newImageSource =
      "/asset/Mobil/FL/FIRE LEDDER/TELE 32M/TELESCOPIC 32  M4.png";
  } else if (imageNumber === 4) {
    newImageSource =
      "/asset/Mobil/FL/FIRE LEDDER/TELE 32M/TELESCOPIC 32  M5.png";
  }
  imgChange.src = newImageSource;
}
