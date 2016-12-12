/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(function()
  {
      var f=function()
      {
          $(this).next().text($(this).is(':checked') ? ':checked' : ':not(:checked)');
      };
      $('input').change(f).trigger('change');
  });

