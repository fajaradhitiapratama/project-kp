function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/airport crash tender/type3/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/airport crash tender/type3/2.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/airport crash tender/type3/3.webp";
  }
  imgChange.src = newImageSource;
}
