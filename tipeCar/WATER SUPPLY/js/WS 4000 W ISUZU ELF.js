function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/water supply/ISUZU/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/water supply/ISUZU/2.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/water supply/ISUZU/3.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/water supply/ISUZU/4.webp";
  }
  imgChange.src = newImageSource;
}
