// ---------Task 01: DOM Manipulation-------
// write a JavaScript function called getWidth(id) that returns the width of the element specified with the parameter id. The result should be in pixels (for example, the function could return: “50 px”).



function getWidth(id) {
  // Return the width of the element specified in the parameter "id"
  // * don't put document.getElementById('id') here, bc that would search for an ID named 'id'
  const elementWidth = document.getElementById(id);
  // * offsetWidth grabs the numerical viewable width of an element that includes the padding, border, and scrollbar. Not the margin.
  // * clientWidth grabs the numerical viewable width of an element that includes padding. Not the border, scrollbar, or margin.
  return elementWidth.offsetWidth + "px";
}

// No need to change below this point.
// Note how we're using DOM elements here to display the result of the getWidth() function inside the "areaWidth" element
window.onload = () => {
  document.getElementById('areaWidth').innerHTML = getWidth('mainDiv');
};

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { getWidth };
}
