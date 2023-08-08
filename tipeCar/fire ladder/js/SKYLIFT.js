function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FL/skylif/IMG-20210715-WA0027.jpg";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FL/skylif/IMG-20210715-WA0031.jpg";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FL/skylif/IMG-20210715-WA0026.jpg";
  }
  imgChange.src = newImageSource;
}
