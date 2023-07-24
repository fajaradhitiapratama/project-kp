function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/RESCUE JEEP TOLL/whatsapp_image_2022_07_11_at_8_37_40_pm-3ba12-2856_711-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/RESCUE JEEP TOLL/whatsapp_image_2022_07_11_at_8_37_41_pm-d98df-2856_714-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/RESCUE JEEP TOLL/whatsapp_image_2022_07_11_at_8_37_41_pm_2-fda3d-2856_713-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/RESCUE JEEP TOLL/whatsapp_image_2022_07_11_at_8_37_41_pm_1-e5099-2856_712-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
