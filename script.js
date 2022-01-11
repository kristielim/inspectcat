let index = 0;

function isCatSmall() {
  const heightInPixels = $("#big-cat").css("height");
  const height = parseInt(heightInPixels.slice(0, -2));
  if (height < 300) {
    return true;
  }
  return false;
}

function isTextPink() {
  const color = $("#blog-text-cute").css("color");
  console.log(color);
  if (color === "rgb(255, 192, 203)") {
    return true;
  }
  return false;
}

function isTextCorrect() {
  const text = $("#blog-text-pizza").text();
  console.log(text);
  if (text === "Eating some pizza") {
    return true;
  }
  return false;
}

function isTextItalics() {
  const property = $(".blog-text").css("font-style");
  console.log(property);
  if (property === "italic") {
    return true;
  }
  return false;
}

function areCatsNotDizzy() {
  const animation = $("#box-cat").css("animation");
  if (animation.includes("jump") && !animation.includes("dizzy")) {
    return true;
  }
  return false;
}

function areCatsReunited() {
  const property = $(".fam-cat").css("margin");
  console.log(property);
  if (property === "0px") {
    return true;
  }
  return false;
}

const steps = [
  {
    instruction: "Whoa! A giant cat appeared! Make its height smaller.",
    isCompleted: isCatSmall,
    failMessage: "Cat is still too big.",
  },
  {
    instruction:
      "The cat is starting a blog, but the black text is not cute enough. Change it to pink!",
    isCompleted: isTextPink,
    failMessage: "Text is not pink.",
  },
  {
    instruction: "Oh no! Fix the typo!",
    isCompleted: isTextCorrect,
    failMessage: "Still misspelled :(",
  },
  {
    instruction:
      "The cat is leaning over...whoosh. Make the text match by changing the font-style to italic!",
    isCompleted: isTextItalics,
    failMessage: "Text is not italics.",
  },
  {
    instruction: `These small cats are so dizzy. 
						Change their animation to jump!
						Hyper cats can jump every 0.5s.`,
    isCompleted: areCatsNotDizzy,
    failMessage: `Oops they're still dizzy.`,
  },
  {
    instruction: "Reunite the family of cats by making the margin 0 pixels.",
    isCompleted: areCatsReunited,
    failMessage: "Still far apart, so sad.",
  },
];

function nextStep() {
  // hide current step
  $(`#step-${index}`).hide();

  index++;
  if (index >= steps.length) {
    $("#popup").hide();
    $("#last-step").css("display", "flex");
    return;
  }

  // show next step
  $(`#step-${index}`).css("display", "flex");

  // update instructions
  $("#instructions").text(steps[index].instruction);
}

$(window).on("load", function () {
  // update instructions
  $("#instructions").text(steps[index].instruction);

  // show first step
  $(`#step-${index}`).css("display", "flex");

  // move to next step when next button is clicked
  $("#next").click(function () {
    let currStep = steps[index];
    if (currStep.isCompleted()) {
      nextStep();
    } else {
      alert(currStep.failMessage);
    }
  });
});
