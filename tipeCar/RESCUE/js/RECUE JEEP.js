function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/RESCUE JEEP/rescue_jeep_single_cabin_10-85d3b-2563_710-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/RESCUE JEEP/rescue_jeep_single_cabin_23-8e8a2-2563_713-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/RESCUE JEEP/rescue_jeep_single_cabin_11-690be-2563_711-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/RESCUE JEEP/rescue_jeep_single_cabin_24-050db-2563_714-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
