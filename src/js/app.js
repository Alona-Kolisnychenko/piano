import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const soundFiles = {
  a3: "@sound/Piano.ff.A3.mp3",
  a4: "@sound/Piano.ff.A4.mp3",
  ab3: "@sound/Piano.ff.Ab3.mp3",
  ab4: "@sound/Piano.ff.Ab4.mp3",
  b3: "@sound/Piano.ff.B3.mp3",
  b4: "@sound/Piano.ff.B4.mp3",
  bb3: "@sound/Piano.ff.Bb3.mp3",
  bb4: "@sound/Piano.ff.Bb4.mp3",
  c3: "@sound/Piano.ff.C3.mp3",
  c4: "@sound/Piano.ff.C4.mp3",
  c5: "@sound/Piano.ff.C5.mp3",
  d3: "@sound/Piano.ff.D3.mp3",
  d4: "@sound/Piano.ff.D4.mp3",
  db3: "@sound/Piano.ff.Db3.mp3",
  db4: "@sound/Piano.ff.Db4.mp3",
  e3: "@sound/Piano.ff.E3.mp3",
  e4: "@sound/Piano.ff.E4.mp3",
  eb3: "@sound/Piano.ff.Eb3.mp3",
  eb4: "@sound/Piano.ff.Eb4.mp3",
  f3: "@sound/Piano.ff.F3.mp3",
  f4: "@sound/Piano.ff.F4.mp3",
  g3: "@sound/Piano.ff.G3.mp3",
  gb3: "@sound/Piano.ff.Gb3.mp3",
  g4: "@sound/Piano.ff.G4.mp3",
  gb4: "@sound/Piano.ff.Gb4.mp3",
};

const chords = {
  cdur: ["c3", "e3", "g3"],
  ddur: ["d3", "gb3", "a3"],
  edur: ["e3", "ab3", "b3"],
  fdur: ["f3", "a3", "c4"],
  gdur: ["g3", "b3", "d4"],
  adur: ["a3", "db4", "e4"],
  bdur: ["b3", "eb4", "gb4"],
  cmoll: ["c3", "eb3", "g3"],
  dmoll: ["d3", "f3", "a3"],
  emoll: ["e3", "g3", "b3"],
  fmoll: ["f3", "ab3", "c4"],
  gmoll: ["g3", "bb3", "d4"],
  amoll: ["a3", "c4", "e4"],
  bmoll: ["b3", "d4", "gb4"],
};

let key = document.querySelectorAll(".key");

function playNote(soundFile) {
  const sound = new Audio(soundFile);
  sound.volume = 1;
  sound.currentTime = 1.5;
  sound.play();
  setTimeout(() => {
    sound.pause();
    sound.currentTime = 1.5;
  }, 2000);
}

key.forEach((element) => {
  element.addEventListener("mousedown", () => {
    element.classList.add("down");
    const id = element.id;
    playNote(soundFiles[id]);
  });
  element.addEventListener("mouseup", () => {
    element.classList.remove("down");
  });
  element.addEventListener("mouseout", () => {
    element.classList.remove("down");
  });
});

document.addEventListener("keydown", (event) => {
  const keyCod = event.code;
  let id;
  let chord;
  switch (keyCod) {
    case "Tab":
      event.preventDefault();
      id = "c3";
      break;
    case "KeyQ":
      id = "d3";
      break;
    case "KeyW":
      id = "e3";
      break;
    case "KeyE":
      id = "f3";
      break;
    case "KeyR":
      id = "g3";
      break;
    case "KeyT":
      id = "a3";
      break;
    case "KeyY":
      id = "b3";
      break;
    case "KeyU":
      id = "c4";
      break;
    case "KeyI":
      id = "d4";
      break;
    case "KeyO":
      id = "e4";
      break;
    case "KeyP":
      id = "f4";
      break;
    case "BracketLeft":
      id = "g4";
      break;
    case "BracketRight":
      id = "a4";
      break;
    case "Backslash":
      event.preventDefault();
      id = "b4";
      break;
    case "Enter":
      event.preventDefault();
      id = "c5";
      break;
    case "Digit1":
      id = "db3";
      break;
    case "Digit2":
      id = "eb3";
      break;
    case "Digit4":
      id = "gb3";
      break;
    case "Digit5":
      id = "ab3";
      break;
    case "Digit6":
      id = "bb3";
      break;
    case "Digit8":
      id = "db4";
      break;
    case "Digit9":
      id = "eb4";
      break;
    case "Minus":
      id = "gb4";
      break;
    case "Equal":
      id = "ab4";
      break;
    case "Backspace":
      id = "bb4";
      break;
    case "KeyA":
      chord = "cdur";
      break;
    case "KeyS":
      chord = "ddur";
      break;
    case "KeyD":
      chord = "edur";
      break;
    case "KeyF":
      chord = "fdur";
      break;
    case "KeyG":
      chord = "gdur";
      break;
    case "KeyH":
      chord = "adur";
      break;
    case "KeyJ":
      chord = "bdur";
      break;
    case "KeyZ":
      chord = "cmoll";
      break;
    case "KeyX":
      chord = "dmoll";
      break;
    case "KeyC":
      chord = "emoll";
      break;
    case "KeyV":
      chord = "fmoll";
      break;
    case "KeyB":
      chord = "gmoll";
      break;
    case "KeyN":
      chord = "amoll";
      break;
    case "KeyM":
      chord = "bmoll";
      break;
  }
  if (id) {
    document.getElementById(id).classList.add("down");
    playNote(soundFiles[id]);
  } else if (chord) {
    document.getElementById(chords[chord][0]).classList.add("down");
    document.getElementById(chords[chord][1]).classList.add("down");
    document.getElementById(chords[chord][2]).classList.add("down");
    playNote(soundFiles[chords[chord][0]]);
    playNote(soundFiles[chords[chord][1]]);
    playNote(soundFiles[chords[chord][2]]);
  }
});
document.addEventListener("keyup", (event) => {
  const keyCod = event.code;
  let id;
  let chord;
  switch (keyCod) {
    case "Tab":
      event.preventDefault();
      id = "c3";
      break;
    case "KeyQ":
      id = "d3";
      break;
    case "KeyW":
      id = "e3";
      break;
    case "KeyE":
      id = "f3";
      break;
    case "KeyR":
      id = "g3";
      break;
    case "KeyT":
      id = "a3";
      break;
    case "KeyY":
      id = "b3";
      break;
    case "KeyU":
      id = "c4";
      break;
    case "KeyI":
      id = "d4";
      break;
    case "KeyO":
      id = "e4";
      break;
    case "KeyP":
      id = "f4";
      break;
    case "BracketLeft":
      id = "g4";
      break;
    case "BracketRight":
      id = "a4";
      break;
    case "Backslash":
      event.preventDefault();
      id = "b4";
      break;
    case "Enter":
      event.preventDefault();
      id = "c5";
      break;
    case "Digit1":
      id = "db3";
      break;
    case "Digit2":
      id = "eb3";
      break;
    case "Digit4":
      id = "gb3";
      break;
    case "Digit5":
      id = "ab3";
      break;
    case "Digit6":
      id = "bb3";
      break;
    case "Digit8":
      id = "db4";
      break;
    case "Digit9":
      id = "eb4";
      break;
    case "Minus":
      id = "gb4";
      break;
    case "Equal":
      id = "ab4";
      break;
    case "Backspace":
      id = "bb4";
      break;
    case "KeyA":
      chord = "cdur";
      break;
    case "KeyS":
      chord = "ddur";
      break;
    case "KeyD":
      chord = "edur";
      break;
    case "KeyF":
      chord = "fdur";
      break;
    case "KeyG":
      chord = "gdur";
      break;
    case "KeyH":
      chord = "adur";
      break;
    case "KeyJ":
      chord = "bdur";
      break;
    case "KeyZ":
      chord = "cmoll";
      break;
    case "KeyX":
      chord = "dmoll";
      break;
    case "KeyC":
      chord = "emoll";
      break;
    case "KeyV":
      chord = "fmoll";
      break;
    case "KeyB":
      chord = "gmoll";
      break;
    case "KeyN":
      chord = "amoll";
      break;
    case "KeyM":
      chord = "bmoll";
      break;
  }
  if (id) {
    document.getElementById(id).classList.remove("down");
  } else if (chord) {
    document.getElementById(chords[chord][0]).classList.remove("down");
    document.getElementById(chords[chord][1]).classList.remove("down");
    document.getElementById(chords[chord][2]).classList.remove("down");
  }
});
