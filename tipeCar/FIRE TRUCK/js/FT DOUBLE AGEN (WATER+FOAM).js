function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FTDOUBLEAGEN/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FTDOUBLEAGEN/2.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FTDOUBLEAGEN/3.webp";
  }
  imgChange.src = newImageSource;
}
