function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/motor pemadam/IMG_1991.jpg";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/motor pemadam/IMG_1995.jpg";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/motor pemadam/IMG_2009.jpg";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/motor pemadam/IMG_2011.jpg";
  }
  imgChange.src = newImageSource;
}
