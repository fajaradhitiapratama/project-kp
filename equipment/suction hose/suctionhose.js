function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/equipment/suction hose/1.webp";
  }
  imgChange.src = newImageSource;
}
