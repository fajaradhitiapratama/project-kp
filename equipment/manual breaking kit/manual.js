function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/equipment/manual breakingkit/1.webp";
  }
  imgChange.src = newImageSource;
}
