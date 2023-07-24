function changeImage(imageNumber) {
  var imgChange = document.getElementById("img-change");

  var newImageSource = "";
  if (imageNumber === 1) {
    newImageSource = "/asset/Mobil/FT/FT/FT 3.000 - 4.000 L/15873069_1414664005224920_4290956102622553032_n-9cdc7-2563_627-t598_26.webp";
  } else if (imageNumber === 2) {
    newImageSource = "/asset/Mobil/FT/FT/FT 3.000 - 4.000 L/15894867_1414921111865876_4221627108137276673_n-224fa-2563_628-t598_26.webp";
  } else if (imageNumber === 3) {
    newImageSource = "/asset/Mobil/FT/FT/FT 3.000 - 4.000 L/1929723_562064327277155_1441572939939943910_n-66202-2563_625-t598_26.webp";
  } else if (imageNumber === 4) {
    newImageSource = "/asset/Mobil/FT/FT/FT 3.000 - 4.000 L/15871587_1414662755225045_6256511082307191168_n-85ad6-2563_626-t598_26.webp";
  }
  imgChange.src = newImageSource;
}
