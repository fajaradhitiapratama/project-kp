function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/LIGHT RESCUE/light_rescue_2-ccf47-2563_568-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/LIGHT RESCUE/light_rescue_3-d30b9-2563_697-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
