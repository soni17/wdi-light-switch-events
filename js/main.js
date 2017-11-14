document.addEventListener('DOMContentLoaded',function () {

  const status = document.querySelector(".status");
  const switchButton = document.querySelector("button");
  const body = document.querySelector("body");

  switchButton.addEventListener('click',function () {

    if (this.className === "switch on"){
      body.className = "dark";
      switchButton.className = "switch off";
      status.innerText = "Hey, who turned off the lights?";
    }else if (this.className === "switch off"){
      body.className = "light";
      switchButton.className = "switch on";
      status.innerText = "It's so bright in here!";
    }

  });

});
