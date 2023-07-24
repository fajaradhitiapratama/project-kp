function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/FT 2.700 1.000 F DOUBLE CABIN/whatsapp_image_2022_08_15_at_9_31_20_am_1-7a40d-2856_703-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/FT 2.700 1.000 F DOUBLE CABIN/whatsapp_image_2022_08_15_at_9_31_20_am_2-33506-2856_704-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FT/FT 2.700 1.000 F DOUBLE CABIN/whatsapp_image_2022_08_15_at_9_31_21_am-d843b-2856_706-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/FT/FT/FT 2.700 1.000 F DOUBLE CABIN/whatsapp_image_2022_08_15_at_9_31_20_am-4b5e5-2856_705-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
