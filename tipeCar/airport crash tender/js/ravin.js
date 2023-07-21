function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/airport crash tender/ravin/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/airport crash tender/ravin/2.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/airport crash tender/ravin/3.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/airport crash tender/ravin/4.webp";
  }
  imgChange.src = newImageSource;
}
