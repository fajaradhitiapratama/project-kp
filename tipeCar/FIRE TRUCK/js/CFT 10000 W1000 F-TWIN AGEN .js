function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 10.000 W 1000 F-TWIN AGEN/img20200411153456-a0f69-2856_636-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 10.000 W 1000 F-TWIN AGEN/img20200411153514-c83f4-2856_637-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 10.000 W 1000 F-TWIN AGEN/img20200413084847-6727a-2856_638-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/FT/FT/CFT 10.000 W 1000 F-TWIN AGEN/img20200411153426-01521-2856_635-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
