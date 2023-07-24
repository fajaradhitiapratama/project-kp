function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/water supply/CWT4500/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/water supply/CWT4500/2.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/water supply/CWT4500/3.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/water supply/CWT4500/4.webp";
  }
  imgChange.src = newImageSource;
}
