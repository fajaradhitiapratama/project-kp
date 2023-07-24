function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 15.000 W 2,000 F/image0-0e0c0-2856_721-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 15.000 W 2,000 F/image1-b20bf-2856_722-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 15.000 W 2,000 F/image3-d9a18-2856_723-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 15.000 W 2,000 F/image5-7da00-2856_724-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
