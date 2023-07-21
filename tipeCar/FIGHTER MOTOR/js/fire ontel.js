function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource =
      "/asset/motor pemadam/ontel/New folder (3)/Screenshot 2023-07-21 093229.png";
  }
  imgChange.src = newImageSource;
}
