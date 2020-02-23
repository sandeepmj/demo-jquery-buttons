// Add in external javascript file


// if the hightlight gandhi button is clicked, add highlight class
$("body").on("click", "#hi-gandhi", function (e) {
  e.preventDefault(); //disable the button's default behavior
  $('#gandhi').addClass('highlight'); /*Note no # or . for class being added*/
  $("#hi-gandhi").prop('disabled', true);
});

// if the hightlight angelou button is clicked, add highlight class

$("body").on("click", "#hi-angelou", function (e) {
  e.preventDefault(); //disable the button's default behavior
  $('#angelou').addClass('highlight');
  $("#hi-angelou").prop('disabled', true);
});

// if the style headline button is clicked, add headline class
$("body").on("click", '#style-hed', function (e) {
  e.preventDefault(); //disable the button's default behavior
  $("h3").addClass("headline");
  $('#style-hed').prop('disabled', true);
});

// if the multi style button is clicked, add  someStyling somePadding biggerText addBorder classes
$("body").on("click", '#style-multi', function (e) {
  e.preventDefault(); //disable the button's default behavior
  console.log("multi is clicked");
  $('#style-multi').prop('disabled', true);
  $('.authors').addClass("someStyling somePadding biggerText addBorder"); // note multiple IDs and classes
  $("#hi-gandhi, #hi-angelou").prop('disabled', true); // we disabled the highlight buttons highlight got activated
});


$("body").on("click", "#swap-div", function (e) {
  e.preventDefault(); //disable the button's default behavior
  $(".dog").addClass('newDiv');
  $("#swap-div").prop('disabled', true);
});

$("body").on("click", "#hide-border", function (e) {
  e.preventDefault(); //disable the button's default behavior
  $(".dog").addClass('noBorder');
  $("#hide-border").prop('disabled', true);
});

// reset all IDs and classes
$("body").on("click", "#reset-all", function (e) {
  e.preventDefault(); //disable the button's default behavior
  $("#gandhi, #angelou, h3, .authors, .container, .dog").removeClass("highlight headline someStyling somePadding biggerText addBorder newDiv noBorder  ");
  $("button").prop('disabled', false);

});