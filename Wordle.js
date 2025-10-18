const words = ["APPLE", "MANGO", "TIRED", "AFTER", "HORSE", "NIGHT", "WATER", "FIGHT", "WORLD", "PAINT", "PUNCH", "PHONE", "FRONT", "WIDTH", "RIGHT", "BOARD", "HELLO", "GREAT", "START", "MONTH", "HOUSE", "ZEBRA", "MAYBE", "GLIDE", "LAYER", "SPELL", "EXTOR", "LOVER", "CHILD", "TITLE", "PASTE", "EATEN", "WATCH", "CLOCK", "TIMES", "RIDER", "TABLE", "CHESS", "CHEAT", "CRIED", "GUESS", "ENTER", "DRIVE", "BUILD", "BEING", "SHARE", "NEVER", "WAVES", "MARCH", "THREE", "SEVEN", "EIGHT", "DRESS", "EARTH", "BLANK", "EMPTY", "COLOR", "HOURS", "SLIDE", "SABER", "TENSE", "CLEAR", "COULD", "STUCK", "STARS", "STORE", "SCORE", "DRINK", "SMALL", "WRITE", "WROTE", "CYBER", "BROWN", "GREEN", "ARROW", "DANCE", "HAPPY", "BLACK", "WHITE", "SPOKE", "SPEAK", "WOMAN", "FALSE", "VIEWS", "FILES", "VIBES", "WHERE", "HANDS", "WORDS", "GAMES", "STAIR", "FLOOR", "GOALL", "STUDY", "VIDEO", "PHOTO", "FLAGS", "AWAKE", "GROUP", "SHIFT", "CARDS", "MOUSE", "BRAND", "LYRIC", "MOVIE", "GHOST", "FLARE", "SCENE", "LOGIN", "LOWLY", "WORKS", "SPACE", "CHAIR", "SORRY", "BLAST", "TOOTH", "ULTRA", "SONGS", "VENUS", "SLEEP", "FONTS", "MUSIC", "ERROR", "RANGE", "CLOUD", "SOUND", "WOULD", "SHAPE", "SHOPE", "FIRST", "LIGHT", "ABASH", "ABATE", "ABUSE", "ALLOT", "ALTER", "ALERT", "CHECK", "CLAIM", "BLOCK", "CLIMB", "DEFER", "ENJOY", "ERASE", "KNOCK", "LABEL", "LIMIT", "MIMIC", "MIXED", "OCCUR", "OFFER", "ORBIT", "PANIC", "PRINT", "QUAKE", "QUOTE", "REBEL", "REPLY", "SMOKE", "SPRAY", "TRAIN", "VISIT", "WASTE", "WORRY", "BREAK", "BLOWN", "BROKE", "BRING", "AWOKE", "BREED", "DREAM", "DRANK", "DRUNK", "BUILT", "BURST"];
const answer = words[Math.floor(Math.random() * words.length)];
const board = document.getElementById("board");
const input = document.getElementById("guess-input");
const button = document.getElementById("submit-btn");
const message = document.getElementById("message");

let attempts = 0;

function createBoard() {
  for (let i = 0; i < 30; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    board.appendChild(tile);
  }
}

createBoard();

button.addEventListener("click", () => {
  const guess = input.value.toUpperCase();
  if (guess.length !== 5) {
    message.textContent = "Harus 5 huruf!";
    return;
  }

  const start = attempts * 5;
  for (let i = 0; i < 5; i++) {
    const tile = board.children[start + i];
    tile.textContent = guess[i];

    if (guess[i] === answer[i]) {
      tile.classList.add("correct");
    } else if (answer.includes(guess[i])) {
      tile.classList.add("present");
    } else {
      tile.classList.add("absent");
    }
  }

  attempts++;
  input.value = "";

  if (guess === answer) {
    message.textContent = "Selamat! Kamu benar!";
    button.disabled = true;
    input.disabled = true;
  } else if (attempts === 6) {
    message.textContent = `Kalah! Jawabannya: ${answer}`;
    button.disabled = true;
    input.disabled = true;
  }
});