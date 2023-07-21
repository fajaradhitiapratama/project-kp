function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource =
      "/asset/Mobil/FL/FIRE LEDDER/Screenshot 2023-07-21 132511.png";
  } else if (imageNumber === 2) {
    newImageSource =
      "/asset/Mobil/FL/FIRE LEDDER/Screenshot 2023-07-21 132547.png";
  } else if (imageNumber === 3) {
    newImageSource =
      "/asset/Mobil/FL/FIRE LEDDER/Screenshot 2023-07-21 132650.png";
  }
  imgChange.src = newImageSource;
}
