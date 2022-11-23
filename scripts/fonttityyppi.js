function fonttiTyyppi() {
  const element = document.getElementById("myList");
  const currentFont = document.getElementById("display");
  const fontF = window.getComputedStyle(element, null).getPropertyValue("font-family");

  if (fontF === 'monospace')
  {
    element.style.fontFamily = 'Roboto';
    currentFont.innerHTML = 'Fontti on nyt: "Roboto"';
  }
  else if (fontF === 'Roboto')
  {
    element.style.fontFamily = 'Mansalva';
    currentFont.innerHTML = 'Fontti on nyt: "Mansalva"';
  }
  else if (fontF === 'Mansalva')
  {
    element.style.fontFamily = 'Grenze';
    currentFont.innerHTML = 'Fontti on nyt: "Grenze"';
  }
  else if (fontF === 'Grenze')
  {
    element.style.fontFamily = 'Ubuntu';
    currentFont.innerHTML = 'Fontti on nyt: "Ubuntu"';
  }
  else if (fontF === 'Ubuntu')
  {
    element.style.fontFamily = 'monospace';
    currentFont.innerHTML = 'Fontti on nyt: "Courier New"';
  }
  else
  {
    // do nothing
  }
}
