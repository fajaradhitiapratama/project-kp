function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/motor pemadam/ontel/New folder (3)/3roda2.png";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/motor pemadam/ontel/New folder (3)/3roda3.png";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/motor pemadam/ontel/New folder (3)/3roda1.png";
  }
  imgChange.src = newImageSource;
}
