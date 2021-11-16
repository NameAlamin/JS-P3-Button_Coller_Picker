var redBtn = document.getElementById("red_btn");
      var greenBtn = document.getElementById("green_btn");
      var blueBtn = document.getElementById("blue_btn");
      var yellowBtn = document.getElementById("yellow_btn");
      var defaultBtn = document.getElementById("default_btn");

      redBtn.onclick = function () {
        document.getElementById("mainbox").style.background = "red";
      };
      greenBtn.onclick = function () {
        document.getElementById("mainbox").style.background = "green";
      };
      blueBtn.onclick = function () {
        document.getElementById("mainbox").style.background = "blue";
      };
      yellowBtn.onclick = function () {
        document.getElementById("mainbox").style.background = "yellow";
      };
      defaultBtn.onclick = function () {
        document.getElementById("mainbox").style.background = "";
      };