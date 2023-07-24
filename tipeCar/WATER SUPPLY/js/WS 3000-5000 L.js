function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/water supply/WS3000/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/water supply/WS3000/2.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/water supply/WS3000/3.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/water supply/WS3000/4.webp";
  }
  imgChange.src = newImageSource;
}
