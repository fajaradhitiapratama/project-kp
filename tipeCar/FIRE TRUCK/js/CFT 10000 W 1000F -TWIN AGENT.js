function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 10.000 W 1000 F-TWIN AGENT/img20200701170315-26240-2856_634-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 10.000 W 1000 F-TWIN AGENT/img_20200706_wa0030-88350-2856_626-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 10.000 W 1000 F-TWIN AGENT/img_20200706_wa0031__copy-e9ecf-2856_627-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 10.000 W 1000 F-TWIN AGENT/img_20200703_wa0004-66030-2856_625-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
