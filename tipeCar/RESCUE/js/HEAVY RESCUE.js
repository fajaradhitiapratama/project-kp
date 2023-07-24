function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/HEAVY RESCUE/heavy_rescue_8-12c27-2563_566-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/HEAVY RESCUE/img_4620-acad1-2563_567-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource =
      "/asset/Mobil/rescue/RESCUE/HEAVY RESCUE/heavy_rescue_1-1a353-2563_565-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
