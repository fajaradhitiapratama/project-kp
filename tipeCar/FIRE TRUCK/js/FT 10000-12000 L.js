function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT10000/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT10000/2.webp";
  }
  imgChange.src = newImageSource;
}
