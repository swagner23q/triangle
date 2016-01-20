$(document).ready(function() {
  $("button#buttonSubmit").click(function(event) {
      var side1 = $("select#side1").val();
      var side2 = $("select#side2").val();
      var side3 = $("select#side3").val();

      if (side1 === side2 && side2 === side3) {
        $('#equilateral').toggle();
      } else if (side1 === side2 && side1 !== side3) {
        $('#isosceles').toggle();
      } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        $('#scalene').toggle();
      } else {
        alert("Grats, you didn't make a triangle")
        $('#notTriangle').toggle();
        }
  // var triangle = function(side1, side2, side3) {
  //   if (side1 === side2 && side2 === side3) {
  //   return true;
  //   } else if (side1 === side2 && side1 !== side3) {
  //     return true;
  //   } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
  //     return true;
  //   } else if ((side1 + side2) < side3) {
  //     return false;
  //   } else {
  //     return false;
  //   }
    event.preventDefault();
  });
});
