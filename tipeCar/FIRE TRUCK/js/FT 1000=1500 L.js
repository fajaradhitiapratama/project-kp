function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/FT 1.000-1.500 L/15697484_743273935822859_4445413141346970893_n-66df0-2563_621-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/FT 1.000-1.500 L/custom_pumper_1000__1500_l_single_cabin_2-b9dbb-2563_623-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FT/FT 1.000-1.500 L/custom_pumper_1000__1500_l_single_cabin_3-389f2-2563_624-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/FT/FT/FT 1.000-1.500 L/custom_pumper_1000__1500_l_single_cabin_1-1662d-2563_622-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
