// ══════════════════════════════════════════════
//  DATA — All Odia Letters
// ══════════════════════════════════════════════
const odiaLetters = [
  // Vowels (Svaras)
  { "letter": "ଅ", "roman": "a", "type": "vowel", "example": "as in 'hot' or 'ball'" },
  { "letter": "ଆ", "roman": "ā", "type": "vowel", "example": "as in 'father'" },
  { "letter": "ଇ", "roman": "i", "type": "vowel", "example": "as in 'bit'" },
  { "letter": "ଈ", "roman": "ī", "type": "vowel", "example": "as in 'feet'" },
  { "letter": "ଉ", "roman": "u", "type": "vowel", "example": "as in 'put'" },
  { "letter": "ଊ", "roman": "ū", "type": "vowel", "example": "as in 'boot'" },
  { "letter": "ଋ", "roman": "ṛ", "type": "vowel", "example": "as in 'rhythm' (pronounced 'ru')" },
  { "letter": "ଏ", "roman": "e", "type": "vowel", "example": "as in 'bed'" },
  { "letter": "ଐ", "roman": "ai", "type": "vowel", "example": "as in 'oil'" },
  { "letter": "ଓ", "roman": "o", "type": "vowel", "example": "as in 'note'" },
  { "letter": "ଔ", "roman": "au", "type": "vowel", "example": "as in 'loud'" },

  // Consonants (Vyanjanas)
  { letter: "କ", roman: "ka", type: "consonant", example: "Velar stop" },
  { letter: "ଖ", roman: "kha", type: "consonant", example: "Aspirated velar" },
  { letter: "ଗ", roman: "ga", type: "consonant", example: "Voiced velar" },
  {
    letter: "ଘ",
    roman: "gha",
    type: "consonant",
    example: "Aspirated voiced velar",
  },
  { letter: "ଙ", roman: "ṅa", type: "consonant", example: "Velar nasal" },
  { letter: "ଚ", roman: "ca", type: "consonant", example: "Palatal stop" },
  {
    letter: "ଛ",
    roman: "cha",
    type: "consonant",
    example: "Aspirated palatal",
  },
  { letter: "ଜ", roman: "ja", type: "consonant", example: "Voiced palatal" },
  {
    letter: "ଝ",
    roman: "jha",
    type: "consonant",
    example: "Aspirated voiced palatal",
  },
  { letter: "ଞ", roman: "ña", type: "consonant", example: "Palatal nasal" },
  { letter: "ଟ", roman: "ṭa", type: "consonant", example: "Retroflex stop" },
  {
    letter: "ଠ",
    roman: "ṭha",
    type: "consonant",
    example: "Aspirated retroflex",
  },
  { letter: "ଡ", roman: "ḍa", type: "consonant", example: "Voiced retroflex" },
  {
    letter: "ଢ",
    roman: "ḍha",
    type: "consonant",
    example: "Aspirated voiced retroflex",
  },
  { letter: "ଣ", roman: "ṇa", type: "consonant", example: "Retroflex nasal" },
  { letter: "ତ", roman: "ta", type: "consonant", example: "Dental stop" },
  { letter: "ଥ", roman: "tha", type: "consonant", example: "Aspirated dental" },
  { letter: "ଦ", roman: "da", type: "consonant", example: "Voiced dental" },
  {
    letter: "ଧ",
    roman: "dha",
    type: "consonant",
    example: "Aspirated voiced dental",
  },
  { letter: "ନ", roman: "na", type: "consonant", example: "Dental nasal" },
  { letter: "ପ", roman: "pa", type: "consonant", example: "Bilabial stop" },
  {
    letter: "ଫ",
    roman: "pha",
    type: "consonant",
    example: "Aspirated bilabial",
  },
  { letter: "ବ", roman: "ba", type: "consonant", example: "Voiced bilabial" },
  {
    letter: "ଭ",
    roman: "bha",
    type: "consonant",
    example: "Aspirated voiced bilabial",
  },
  { letter: "ମ", roman: "ma", type: "consonant", example: "Bilabial nasal" },
  {
    letter: "ଯ",
    roman: "ya",
    type: "consonant",
    example: "Palatal approximant",
  },
  { letter: "ର", roman: "ra", type: "consonant", example: "Flap" },
  { letter: "ଳ", roman: "ḷa", type: "consonant", example: "Retroflex lateral" },
  {
    letter: "ଲ",
    roman: "la",
    type: "consonant",
    example: "Lateral approximant",
  },
  { letter: "ୱ", roman: "wa", type: "consonant", example: "Labiodental" },
  { letter: "ଶ", roman: "śa", type: "consonant", example: "Palatal sibilant" },
  {
    letter: "ଷ",
    roman: "ṣa",
    type: "consonant",
    example: "Retroflex sibilant",
  },
  { letter: "ସ", roman: "sa", type: "consonant", example: "Dental sibilant" },
  { letter: "ହ", roman: "ha", type: "consonant", example: "Glottal fricative" },

  // Special
  {
    letter: "ଂ",
    roman: "ṃ",
    type: "special",
    example: "Anusvara (nasalization)",
  },
  {
    letter: "ଃ",
    roman: "ḥ",
    type: "special",
    example: "Visarga (breath mark)",
  },
  { letter: "ଁ", roman: "~", type: "special", example: "Chandrabindu" },
];

// ══════════════════════════════════════════════
//  DATA — Odia Words
// ══════════════════════════════════════════════
const odiaWords = [
  // Easy
  { word: "ଘର", roman: "ghara", meaning: "house", level: "easy" },
  { word: "ଜଳ", roman: "jaḷa", meaning: "water", level: "easy" },
  { word: "ମା", roman: "mā", meaning: "mother", level: "easy" },
  { word: "ବାପା", roman: "bāpā", meaning: "father", level: "easy" },
  { word: "ଆଖି", roman: "ākhi", meaning: "eye", level: "easy" },
  { word: "ହାତ", roman: "hāta", meaning: "hand", level: "easy" },
  { word: "ଗଛ", roman: "gacha", meaning: "tree", level: "easy" },
  { word: "ଫୁଲ", roman: "phula", meaning: "flower", level: "easy" },
  { word: "ଚନ୍ଦ୍ର", roman: "chandra", meaning: "moon", level: "easy" },
  { word: "ସୂର୍ଯ୍ୟ", roman: "sūrya", meaning: "sun", level: "easy" },
  // Medium
  { word: "ବିଦ୍ୟାଳୟ", roman: "bidyāḷaya", meaning: "school", level: "medium" },
  { word: "ପୁସ୍ତକ", roman: "pustaka", meaning: "book", level: "medium" },
  { word: "ଆକାଶ", roman: "ākāśa", meaning: "sky", level: "medium" },
  { word: "ସମୁଦ୍ର", roman: "samudra", meaning: "ocean", level: "medium" },
  { word: "ପ୍ରକୃତି", roman: "prakṛti", meaning: "nature", level: "medium" },
  { word: "ଭାଷା", roman: "bhāṣā", meaning: "language", level: "medium" },
  { word: "ସଂଗୀତ", roman: "saṃgīta", meaning: "music", level: "medium" },
  { word: "ଆନନ୍ଦ", roman: "ānanda", meaning: "joy", level: "medium" },
  { word: "ଶକ୍ତି", roman: "śakti", meaning: "power/energy", level: "medium" },
  { word: "ସ୍ୱାଧୀନତା", roman: "swādhīnatā", meaning: "freedom", level: "medium" },
  // Hard
  { word: "ସଂସ୍କୃତି", roman: "saṃskṛti", meaning: "culture", level: "hard" },
  { word: "ପ୍ରତିଷ୍ଠା", roman: "pratiṣṭhā", meaning: "prestige", level: "hard" },
  { word: "ଅଭିଜ୍ଞତା", roman: "abhijñatā", meaning: "experience", level: "hard" },
  { word: "ବିଶ୍ୱବ୍ରହ୍ମାଣ୍ଡ", roman: "biśwabrahmāṇḍa", meaning: "universe", level: "hard" },
  { word: "ପ୍ରତିଭା", roman: "pratibhā", meaning: "talent/genius", level: "hard" },
];

// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let practiceQueue = [];
let currentCardIdx = 0;
let isFlipped = false;
let sessionStats = { easy: 0, good: 0, hard: 0 };
let hardCards = [];
let activeFilter = "all";
let practiceMode = "letters"; // "letters" | "words"
let wordFilter = "all"; // "all" | "easy" | "medium" | "hard"

let quizQueue = [];
let quizIdx = 0;
let quizCorrect = 0;
let quizAnswered = false;

// Progress storage (simple localStorage)
let progress = JSON.parse(localStorage.getItem("odiaProgress") || "{}");
// progress[letter] = 'easy' | 'good' | 'hard'

// ══════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function toast(msg, anchorEl) {
  const $t = $("#toast");
  $t.text(msg).addClass("show");

  if (anchorEl) {
    const rect = anchorEl.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const tw = $t[0].offsetWidth;
    const th = $t[0].offsetHeight;

    let top, left;

    // Prefer below, fallback above
    if (rect.bottom + th + 12 < vh) {
      top = rect.bottom + window.scrollY + 10;
    } else {
      top = rect.top + window.scrollY - th - 10;
    }

    // Center on tile, clamp within viewport with padding
    left = rect.left + window.scrollX + rect.width / 2 - tw / 2;
    left = Math.max(12, Math.min(left, vw - tw - 12));

    $t.css({ position: "absolute", top: top + "px", left: left + "px", transform: "none", bottom: "auto" });
  } else {
    $t.css({ position: "fixed", top: "auto", left: "50%", bottom: "40px", transform: "translateX(-50%)" });
  }

  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => $t.removeClass("show"), 4000);
}

function getFiltered() {
  if (activeFilter === "all") return odiaLetters;
  return odiaLetters.filter((l) => l.type === activeFilter);
}

// ══════════════════════════════════════════════
//  BROWSE
// ══════════════════════════════════════════════
function renderGrid(filter) {
  const list =
    filter === "all"
      ? odiaLetters
      : odiaLetters.filter((l) => l.type === filter);
  const html = list
    .map((l) => {
      const prog = progress[l.letter] || "";
      return `
      <div class="letter-tile ${prog}" data-letter="${l.letter}" data-type="${l.type}">
        <div class="tile-tag"></div>
        <span class="tile-odia">${l.letter}</span>
        <div class="tile-roman">${l.roman}</div>
        <div class="tile-type">${l.type}</div>
      </div>`;
    })
    .join("");
  $("#lettersGrid").html(html);
}

$(document).on("click", ".letter-tile", function () {
  const letter = $(this).data("letter");
  const l = odiaLetters.find((x) => x.letter === letter);
  toast(`${l.letter}  ·  ${l.roman}  ·  ${l.example}`, this);
});

$(document).on("click", ".filter-btn", function () {
  $(".filter-btn").removeClass("active");
  $(this).addClass("active");
  renderGrid($(this).data("filter"));
});

// ══════════════════════════════════════════════
//  PRACTICE
// ══════════════════════════════════════════════
let practiceFilterActive = "all";

function startSession(cards) {
  practiceQueue = shuffle(cards);
  currentCardIdx = 0;
  sessionStats = { easy: 0, good: 0, hard: 0 };
  hardCards = [];
  isFlipped = false;

  $("#practiceIdle").hide();
  $("#sessionComplete").removeClass("visible");
  $("#progressWrap").show();
  $("#cardArena").show();
  $("#cardScene").removeClass("flipped");
  $("#ratingButtons").removeClass("visible");

  showCard();
}

function showCard() {
  if (currentCardIdx >= practiceQueue.length) {
    endSession();
    return;
  }
  const l = practiceQueue[currentCardIdx];
  const total = practiceQueue.length;
  const pct = Math.round((currentCardIdx / total) * 100);

  $("#frontLetter").text(l.letter || l.word);
  if (practiceMode === "words") {
    $("#backLetter").text(l.word);
    $("#backRoman").text(l.roman);
    $("#backType").text(l.level);
    $("#backExample").text(l.meaning);
  } else {
    $("#backLetter").text(l.letter);
    $("#backRoman").text(l.roman);
    $("#backType").text(l.type);
    $("#backExample").text(l.example);
  }
  $("#cardCounter").text(`${currentCardIdx + 1} / ${total}`);
  $("#progressText").text(`Card ${currentCardIdx + 1} of ${total}`);
  $("#progressPct").text(pct + "%");
  $("#progressFill").css("width", pct + "%");

  isFlipped = false;
  $("#cardScene").removeClass("flipped");
  $("#ratingButtons").removeClass("visible");
}

$("#cardScene").on("click", function () {
  if (isFlipped) return;
  isFlipped = true;
  $(this).addClass("flipped");
  $("#ratingButtons").addClass("visible");
});

$(document).on("click", ".rate-btn", function () {
  const rating = $(this).data("rating");
  const l = practiceQueue[currentCardIdx];

  sessionStats[rating]++;
  if (practiceMode === "letters") {
    progress[l.letter] = rating;
    localStorage.setItem("odiaProgress", JSON.stringify(progress));
    if (rating === "hard") hardCards.push(l);
  } else {
    if (rating === "hard") hardCards.push(l);
  }

  currentCardIdx++;
  showCard();
  if (practiceMode === "letters") renderGrid($(".filter-btn.active").data("filter"));
});

function endSession() {
  $("#cardArena").hide();
  $("#progressWrap").hide();
  $("#statEasy").text(sessionStats.easy);
  $("#statGood").text(sessionStats.good);
  $("#statHard").text(sessionStats.hard);
  $("#sessionComplete").addClass("visible");
}

$("#startBtn2").on("click", function () {
  if (practiceMode === "words") {
    startSession(getFilteredWords());
  } else {
    startSession(getFiltered());
  }
});

$("#shuffleBtn").on("click", function () {
  if (practiceQueue.length) {
    practiceQueue = shuffle(practiceQueue);
    currentCardIdx = 0;
    showCard();
    toast("Cards shuffled!");
  }
});

$("#filterPracticeBtn").on("click", function () {
  const filters = ["all", "vowel", "consonant", "special"];
  const labels = ["All Letters", "Vowels only", "Consonants", "Special"];
  const idx = filters.indexOf(practiceFilterActive);
  practiceFilterActive = filters[(idx + 1) % filters.length];
  $(this).text(labels[(idx + 1) % filters.length]);
  activeFilter = practiceFilterActive;
});

$("#reviewHardBtn").on("click", function () {
  if (hardCards.length === 0) {
    toast("No hard cards!");
    return;
  }
  startSession(hardCards);
});

$("#restartBtn").on("click", function () {
  if (practiceMode === "words") {
    startSession(getFilteredWords());
  } else {
    startSession(getFiltered());
  }
});

// ── Mode toggle ──
function getFilteredWords() {
  if (wordFilter === "all") return odiaWords;
  return odiaWords.filter(w => w.level === wordFilter);
}

function switchPracticeMode(mode) {
  practiceMode = mode;
  $(".mode-btn").removeClass("active");
  if (mode === "letters") {
    $("#modeBtnLetters").addClass("active");
    $("#letterControls").show();
    $("#wordControls").hide();
    $("#practiceTitle").text("Flashcard Practice");
    $("#practiceDesc").text("Tap the card to reveal — then rate yourself");
    $("#idleGlyph").text("ଓ");
    $("#idleTitle").text("Ready to practice?");
    $("#idleDesc").html("Go through all 48 Odia letters<br>and rate how well you know each one.");
  } else {
    $("#modeBtnWords").addClass("active");
    $("#letterControls").hide();
    $("#wordControls").show();
    $("#practiceTitle").text("Word Practice");
    $("#practiceDesc").text("Read the Odia word — tap to see transliteration & meaning");
    $("#idleGlyph").text("ଶବ୍ଦ");
    $("#idleTitle").text("Practice Odia Words");
    $("#idleDesc").html("From simple everyday words<br>to more complex vocabulary.");
  }
  // reset to idle
  $("#cardArena").hide();
  $("#progressWrap").hide();
  $("#sessionComplete").removeClass("visible");
  $("#practiceIdle").show();
}

$("#modeBtnLetters").on("click", () => switchPracticeMode("letters"));
$("#modeBtnWords").on("click", () => switchPracticeMode("words"));

$("#shuffleWordsBtn").on("click", function () {
  if (practiceQueue.length) {
    practiceQueue = shuffle(practiceQueue);
    currentCardIdx = 0;
    showCard();
    toast("Cards shuffled!");
  }
});

const wordLevels = ["all", "easy", "medium", "hard"];
const wordLabels = ["All words", "Easy only", "Medium only", "Hard only"];
$("#filterWordsBtn").on("click", function () {
  const idx = wordLevels.indexOf(wordFilter);
  wordFilter = wordLevels[(idx + 1) % wordLevels.length];
  $(this).text(wordLabels[(idx + 1) % wordLevels.length]);
});

// ══════════════════════════════════════════════
//  QUIZ
// ══════════════════════════════════════════════
const QUIZ_LENGTH = 10;

function startQuiz() {
  quizQueue = shuffle(odiaLetters).slice(0, QUIZ_LENGTH);
  quizIdx = 0;
  quizCorrect = 0;
  quizAnswered = false;

  $("#quizScore").text(0);
  $("#quizTotal").text(0);
  $("#quizFeedback").text("").removeClass("correct wrong");
  $("#nextQuizBtn").hide();
  $("#quizComplete").removeClass("visible");

  showQuizQ();
}

function showQuizQ() {
  if (quizIdx >= QUIZ_LENGTH) {
    endQuiz();
    return;
  }
  quizAnswered = false;
  const q = quizQueue[quizIdx];
  const pct = Math.round((quizIdx / QUIZ_LENGTH) * 100);

  $("#quizLetter").text(q.letter);
  $("#quizProgressText").text(`Question ${quizIdx + 1} of ${QUIZ_LENGTH}`);
  $("#quizPct").text(pct + "%");
  $("#quizFill").css("width", pct + "%");
  $("#quizFeedback").text("").removeClass("correct wrong");
  $("#nextQuizBtn").hide();

  // Build 4 options (1 correct + 3 random)
  const distractors = shuffle(
    odiaLetters.filter((l) => l.letter !== q.letter),
  ).slice(0, 3);
  const options = shuffle([q, ...distractors]);

  const html = options
    .map(
      (l) => `
    <div class="quiz-option" data-roman="${l.roman}" data-correct="${l.letter === q.letter}">
      ${l.roman}
      <span class="opt-sub">${l.type}</span>
    </div>`,
    )
    .join("");
  $("#quizOptions").html(html);
}

$(document).on("click", ".quiz-option", function () {
  if (quizAnswered) return;
  quizAnswered = true;

  const isCorrect =
    $(this).data("correct") === true || $(this).data("correct") === "true";
  const q = quizQueue[quizIdx];

  if (isCorrect) {
    $(this).addClass("correct");
    quizCorrect++;
    $("#quizFeedback")
      .text("✓ Correct!")
      .addClass("correct")
      .removeClass("wrong");
  } else {
    $(this).addClass("wrong");
    // reveal correct
    $(".quiz-option").each(function () {
      if (
        $(this).data("correct") === true ||
        $(this).data("correct") === "true"
      ) {
        $(this).addClass("reveal");
      }
    });
    $("#quizFeedback")
      .text(`✗ It was "${q.roman}" (${q.letter})`)
      .addClass("wrong")
      .removeClass("correct");
  }

  $(".quiz-option").addClass("answered");
  $("#quizScore").text(quizCorrect);
  $("#quizTotal").text(quizIdx + 1);
  quizIdx++;
  $("#nextQuizBtn").show();
});

$("#nextQuizBtn").on("click", showQuizQ);

function endQuiz() {
  const pct = Math.round((quizCorrect / QUIZ_LENGTH) * 100);
  $("#quizFill").css("width", "100%");
  $("#quizFinalScore").text(quizCorrect);
  $("#quizFinalTotal").text(QUIZ_LENGTH);
  $("#quizPctFinal").text(pct + "%");

  let title = "Keep Practising!";
  let sub = "Every session gets you closer.";
  if (pct >= 90) {
    title = "Outstanding! 🌟";
    sub = "You have an excellent grasp of the script!";
  } else if (pct >= 70) {
    title = "Well Done!";
    sub = "You're making great progress.";
  } else if (pct >= 50) {
    title = "Good Effort!";
    sub = "Review the harder letters and try again.";
  }

  $("#quizCompleteTitle").text(title);
  $("#quizCompleteSub").text(sub);
  $("#quizComplete").addClass("visible");
}

$("#newQuizBtn").on("click", startQuiz);

// ══════════════════════════════════════════════
//  NAV
// ══════════════════════════════════════════════
//  NAV
// ══════════════════════════════════════════════
function switchView(view) {
  if (!view || !document.getElementById(view)) view = "browse";
  $(".nav-tab").removeClass("active");
  $(`.nav-tab[data-view="${view}"]`).addClass("active");
  $(".view").removeClass("active");
  $("#" + view).addClass("active");
  if (view === "quiz") startQuiz();
}

$(".nav-tab").on("click", function () {
  const view = $(this).data("view");
  history.pushState({ view }, "", "#" + view);
  switchView(view);
});

window.addEventListener("popstate", (e) => {
  switchView(e.state?.view || location.hash.slice(1));
});

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
renderGrid("all");
switchView(location.hash.slice(1) || "browse");
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/scriptEd/sw.js");
}
