function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/ambulance/1.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/ambulance/2.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/ambulance/3.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/ambulance/4.webp";
  }
  imgChange.src = newImageSource;
}
