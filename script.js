function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "togglePassword") {
      x.type = "text";
    } else {
      x.type = "togglePassword";
    }
  }