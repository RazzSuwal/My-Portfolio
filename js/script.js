//show/hide btn ko lagi
function myFunction() {
    let x = document.getElementById("hide");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function myFun() {
  let a = document.getElementById("bar");
  let c = document.getElementById("profile");
  let b = document.getElementById("about");
  let d = document.getElementById("contact");
  let e = document.getElementById("project");
  let f = document.getElementById("skill");
    let y = document.getElementById("navigation");
    if (y.style.display === "none") {
      y.style.display = "block";
      a.style.left = "300px";
      b.style.marginLeft = "230px";
      c.style.marginLeft = "230px";
      d.style.marginLeft = "230px";
      e.style.marginLeft = "230px";
      f.style.marginLeft = "230px";
    } else {
      y.style.display = "none";
      a.style.left = "5px";
      b.style.marginLeft = "160px";
      c.style.marginLeft = "160px";
      d.style.marginLeft = "160px";
      e.style.marginLeft = "160px";
      f.style.marginLeft = "160px";
    }
  }






