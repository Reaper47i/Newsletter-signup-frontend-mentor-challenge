window.addEventListener("changeImg", function () {
  let view = window.screen.availWidth;
  if (view >= 1023) {
    document.getElementById("sign_up_img").src =
      "/assets/images/illustration-sign-up-desktop.svg";
  }
});

// window.addEventListener("change", function () {
//   console.log(this.window.screen.availWidth);
//     if (this.window.screen.availWidth >= 1023) {
//       this.document.getElementById("sign_up_img").src =
//         "/assets/images/illustration-sign-up-desktop.svg";
//     }
// });

//
