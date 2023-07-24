function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/TRIPLEAGEN/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/TRIPLEAGEN/2.webp";
  }
  imgChange.src = newImageSource;
}
