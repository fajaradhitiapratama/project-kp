function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/equipment/nozzle/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/equipment/nozzle/2.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/equipment/nozzle/3.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/equipment/nozzle/4.webp";
  }
  imgChange.src = newImageSource;
}
