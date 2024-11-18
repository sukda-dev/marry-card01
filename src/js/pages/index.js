$(function () {
  let elemArray = [
    $(".card__front .text-desc").eq(0),
    $(".card__front .text-desc").eq(1),
    $(".card__front .text-name"),
    $(".card__front .text-desc").eq(2),
    $(".card__front .text-desc").eq(3),
    $(".card__front .group-date"),
    $(".card__front .card-vactor"),
  ];

  setTimeout(() => {
    eachFadeInByOpacity(elemArray, function () {});
  }, 2000);

  $(".card").on("click", function () {
    $(this).find(".card__front, .card__back").toggleClass("rotation");
  });
});

import gsap from "gsap";

function clearAnim(elem) {
  $(elem).removeClass("animate");
  gsap.killTweensOf($(elem));

  gsap.set($(elem), {
    clearProps: "all",
  });
}

function fadeInByOpacity(elem) {
  gsap.to($(elem), {
    opacity: 1,
    ease: "Power0.easeNone",
    duration: 0.5,
    delay: 0.1,
  });
}

function fadeOutByOpacity(elem) {
  gsap.to($(elem), {
    opacity: 0,
    ease: "Power0.easeNone",
    duration: anim_time,
    duration: 0.5,
    delay: 0.1,
  });
}

function eachFadeInByOpacity(elemArray, callback) {
  let timeouts = [];

  for (let i = 0; i < elemArray.length; i++) {
    const element = elemArray[i];

    timeouts.push(
      setTimeout(() => {
        fadeInByOpacity(element);

        // Check if this is the last element
        if (i === elemArray.length - 1) {
          // Call the callback function
          callback();
        }
      }, 500 * i)
    );
  }
}
