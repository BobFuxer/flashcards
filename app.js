const cards = [
  { category: "Chain of Command", ref: "Unit Chain of Command", priority: true, q: "Recite your chain of command.", a: "Sgt Natwora, SSG Butcher, SFC Kilar, CPT Smith, LTC Barlett, Colonel Pickler, General Carpenter, General Donahue, General Laneve, Honorable Daniel Driscoll, Honorable Pete Hegseth, President Donald Trump." },
  { category: "NCO Support Channel", ref: "Unit NCO Support Channel", priority: true, q: "Recite your NCO support channel.", a: "1SG Cole, CSM Hespe, CSM Bell, CSM Webster, CSM Mulinax, SMA Weimer." },
  { category: "NCO Guide", ref: "TC 7-22.7 - The Noncommissioned Officer Guide", priority: true, q: "What is an NCO?", a: "A leader responsible for training, leading, and developing Soldiers." },
  { category: "NCO Guide", ref: "TC 7-22.7 - The Noncommissioned Officer Guide", priority: true, q: "What are the six NCO common core competencies?", a: "Readiness, leadership, training management, communication, operations, and program management." },
  { category: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", priority: true, q: "What publication covers Rifle and Carbine?", a: "TC 3-22.9, Rifle and Carbine." },
  { category: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", priority: true, q: "What are three types of weapon malfunctions?", a: "Failure to feed, failure to fire, and failure to eject." },
  { category: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", priority: true, q: "What is the cycle of function?", a: "Feeding, chambering, locking, firing, unlocking, extracting, ejecting, and cocking." },
  { category: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", priority: true, q: "Describe the M4.", a: "The M4 is a gas-operated, air-cooled, magazine-fed, shoulder-fired weapon." },
  { category: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", priority: true, q: "What are the four principles of weapon safety?", a: "Treat every weapon like it is loaded, keep your finger off the trigger, do not point it until ready to shoot, and maintain positive target ID." },
  { category: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", priority: true, q: "What are the marksmanship fundamentals in your doc?", a: "Breathing, sight picture, trigger squeeze, and steady position." },
  { category: "Suicide Prevention", ref: "AR 600-63 - Army Health Promotion", priority: true, q: "What does ACE-SI stand for?", a: "Ask, Care, Escort, Suicide Intervention." },
  { category: "Suicide Prevention", ref: "AR 600-63 - Army Health Promotion", priority: true, q: "What is the suicide hotline?", a: "988." },
  { category: "ASAP", ref: "AR 600-85 - Army Substance Abuse Program", priority: true, q: "What does SUDCC stand for?", a: "Substance Use Disorder Clinical Care." },
  { category: "Operations Process", ref: "ADP 5-0 - The Operations Process", priority: false, q: "What is MDMP?", a: "The Military Decision-Making Process." },
  { category: "Operations Process", ref: "ADP 5-0 - The Operations Process", priority: false, q: "What are the three levels of warfare?", a: "Strategic, operational, and tactical." },
  { category: "Army Retention", ref: "AR 601-280 - Army Retention Program", priority: false, q: "What can make a Soldier ineligible for reenlistment?", a: "A bar to reenlistment, being flagged, or enrollment in SUDCC." },
  { category: "Army Retention", ref: "AR 601-280 - Army Retention Program", priority: false, q: "What does QTIP stand for?", a: "Quality Tiered Incentive Program." },
  { category: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", priority: true, q: "What does black represent on a map?", a: "Man-made features." },
  { category: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", priority: true, q: "What does blue represent on a map?", a: "Water." },
  { category: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", priority: true, q: "What does brown represent on a map?", a: "Contour lines and elevation." },
  { category: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", priority: true, q: "What are the three norths on a map?", a: "True north, magnetic north, and grid north." },
  { category: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", priority: true, q: "What are the five major terrain features?", a: "Hill, valley, ridge, saddle, and depression." },
  { category: "Wear and Appearance", ref: "AR 670-1 - Wear and Appearance of Army Uniforms and Insignia", priority: false, q: "What regulation covers wear and appearance?", a: "AR 670-1, Wear and Appearance of Army Uniforms and Insignia." },
  { category: "Wear and Appearance", ref: "AR 670-1 - Wear and Appearance of Army Uniforms and Insignia", priority: false, q: "What are the male hair standards?", a: "Male hair must be neatly groomed, not excessive in length or bulk, neat and conservative, tapered, not fall over the ears or eyebrows, and not touch the collar." },
  { category: "Holistic Health and Fitness", ref: "FM 7-22 - Holistic Health and Fitness", priority: false, q: "What are the five H2F domains?", a: "Physical, nutritional, mental, spiritual, and sleep." },
  { category: "Holistic Health and Fitness", ref: "FM 7-22 - Holistic Health and Fitness", priority: false, q: "What are the phases of PRT?", a: "Initial conditioning, toughening, and sustaining." },
  { category: "SHARP", ref: "AR 600-52 - Army SHARP Program", priority: true, q: "What does SHARP stand for?", a: "Sexual Harassment/Assault Response and Prevention." },
  { category: "SHARP", ref: "AR 600-52 - Army SHARP Program", priority: true, q: "What are the SHARP reporting options in your doc?", a: "Restricted, unrestricted, and anonymous." },
  { category: "SHARP", ref: "AR 600-52 - Army SHARP Program", priority: true, q: "What are types of sexual harassment?", a: "Verbal, non-verbal, and quid pro quo." },
  { category: "Drill and Ceremony", ref: "TC 3-21.5 - Drill and Ceremonies", priority: false, q: "What publication covers Drill and Ceremony?", a: "TC 3-21.5, Drill and Ceremonies." },
  { category: "EO", ref: "AR 600-20 - Army Command Policy", priority: true, q: "What regulation covers EO?", a: "AR 600-20, Army Command Policy." },
  { category: "EO", ref: "AR 600-20 - Army Command Policy", priority: true, q: "What is protected by EO in your doc?", a: "Race, color, sex, national origin, religion, and sexual orientation." },
  { category: "EO", ref: "AR 600-20 - Army Command Policy", priority: true, q: "What types of EO complaints can be filed?", a: "Anonymous, formal, and informal." },
  { category: "EO", ref: "AR 600-20 - Army Command Policy", priority: true, q: "What is the EO complaint time limit?", a: "60 days." },
  { category: "The Army", ref: "ADP 1 - The Army", priority: false, q: "What are the three components of the Army?", a: "Active Army, Army Reserve, and Army National Guard." },
  { category: "The Army", ref: "ADP 1 - The Army", priority: false, q: "What are the domains listed in your doc?", a: "Land, air, sea, space, and cyberspace." },
  { category: "First Aid", ref: "TC 4-02.1 - First Aid", priority: true, q: "What are the pulse locations in your doc?", a: "Carotid, radial, tibial, and femoral." },
  { category: "First Aid", ref: "TC 4-02.1 - First Aid", priority: true, q: "What temperature is hypothermia?", a: "95 degrees Fahrenheit and below." },
  { category: "First Aid", ref: "TC 4-02.1 - First Aid", priority: true, q: "How do you apply a tourniquet?", a: "High and tight on limbs or 2 to 3 inches above the wound." },
  { category: "First Aid", ref: "TC 4-02.1 - First Aid", priority: true, q: "What are the stages of heat injury?", a: "Heat cramps, heat exhaustion, and heat stroke." },
  { category: "First Aid", ref: "TC 4-02.1 - First Aid", priority: true, q: "What are cold weather injuries?", a: "Frostbite, hypothermia, chilblain, and immersion foot or trench foot." },
  { category: "First Aid", ref: "TC 4-02.1 - First Aid", priority: true, q: "What are the burn types?", a: "Thermal, electrical, chemical, and laser." },
  { category: "Training", ref: "ADP 7-0 - Training", priority: false, q: "What does METL stand for?", a: "Mission Essential Task List." },
  { category: "Counseling", ref: "ATP 6-22.1 - The Counseling Process", priority: true, q: "Who is responsible for counseling?", a: "Leaders at all levels." },
  { category: "Counseling", ref: "ATP 6-22.1 - The Counseling Process", priority: true, q: "What are the three types of developmental counseling?", a: "Event-oriented, performance, and professional growth." },
  { category: "Counseling", ref: "ATP 6-22.1 - The Counseling Process", priority: true, q: "What are the four steps of the counseling process?", a: "Identify, prepare, conduct, and follow up." },
  { category: "UCMJ", ref: "AR 27-10 - Military Justice", priority: false, q: "What regulation covers military justice?", a: "AR 27-10, Military Justice." },
  { category: "Salutes, Honors, and Courtesy", ref: "AR 600-25 - Salutes, Honors, and Visits of Courtesy", priority: false, q: "What regulation covers salutes, honors, and courtesy?", a: "AR 600-25, Salutes, Honors, and Visits of Courtesy." },
  { category: "Fire Support", ref: "FM 3-09 - Fire Support and Field Artillery Operations", priority: false, q: "What is field artillery's primary mission?", a: "To provide fire support to maneuver forces to destroy, neutralize, or suppress the enemy." },
  { category: "Army Leadership", ref: "ADP 6-22 - Army Leadership and the Profession", priority: true, q: "What is the Leadership Requirements Model?", a: "Attributes: character, presence, intellect. Competencies: leads, develops, achieves." },
  { category: "Regs", ref: "TC 7-22.7 - The Noncommissioned Officer Guide", priority: true, regs: true, q: "What is TC 7-22.7?", a: "The Noncommissioned Officer Guide." },
  { category: "Regs", ref: "TC 3-22.9 - Rifle and Carbine", priority: true, regs: true, q: "What is TC 3-22.9?", a: "Rifle and Carbine." },
  { category: "Regs", ref: "AR 600-63 - Army Health Promotion", priority: true, regs: true, q: "What is AR 600-63?", a: "Army Health Promotion." },
  { category: "Regs", ref: "AR 600-85 - Army Substance Abuse Program", priority: true, regs: true, q: "What is AR 600-85?", a: "Army Substance Abuse Program." },
  { category: "Regs", ref: "ADP 5-0 - The Operations Process", priority: false, regs: true, q: "What is ADP 5-0?", a: "The Operations Process." },
  { category: "Regs", ref: "AR 601-280 - Army Retention Program", priority: false, regs: true, q: "What is AR 601-280?", a: "Army Retention Program." },
  { category: "Regs", ref: "TC 3-25.26 - Map Reading and Land Navigation", priority: true, regs: true, q: "What is TC 3-25.26?", a: "Map Reading and Land Navigation." },
  { category: "Regs", ref: "AR 670-1 - Wear and Appearance of Army Uniforms and Insignia", priority: false, regs: true, q: "What is AR 670-1?", a: "Wear and Appearance of Army Uniforms and Insignia." },
  { category: "Regs", ref: "FM 7-22 - Holistic Health and Fitness", priority: false, regs: true, q: "What is FM 7-22?", a: "Holistic Health and Fitness." },
  { category: "Regs", ref: "AR 600-52 - Army SHARP Program", priority: true, regs: true, q: "What is AR 600-52?", a: "Army SHARP Program." },
  { category: "Regs", ref: "TC 3-21.5 - Drill and Ceremonies", priority: false, regs: true, q: "What is TC 3-21.5?", a: "Drill and Ceremonies." },
  { category: "Regs", ref: "AR 600-20 - Army Command Policy", priority: true, regs: true, q: "What is AR 600-20?", a: "Army Command Policy." },
  { category: "Regs", ref: "ADP 1 - The Army", priority: false, regs: true, q: "What is ADP 1?", a: "The Army." },
  { category: "Regs", ref: "TC 4-02.1 - First Aid", priority: true, regs: true, q: "What is TC 4-02.1?", a: "First Aid." },
  { category: "Regs", ref: "ADP 7-0 - Training", priority: false, regs: true, q: "What is ADP 7-0?", a: "Training." },
  { category: "Regs", ref: "ATP 6-22.1 - The Counseling Process", priority: true, regs: true, q: "What is ATP 6-22.1?", a: "The Counseling Process." },
  { category: "Regs", ref: "AR 27-10 - Military Justice", priority: false, regs: true, q: "What is AR 27-10?", a: "Military Justice." },
  { category: "Regs", ref: "AR 600-25 - Salutes, Honors, and Visits of Courtesy", priority: false, regs: true, q: "What is AR 600-25?", a: "Salutes, Honors, and Visits of Courtesy." },
  { category: "Regs", ref: "FM 3-09 - Fire Support and Field Artillery Operations", priority: false, regs: true, q: "What is FM 3-09?", a: "Fire Support and Field Artillery Operations." },
  { category: "Regs", ref: "ADP 6-22 - Army Leadership and the Profession", priority: true, regs: true, q: "What is ADP 6-22?", a: "Army Leadership and the Profession." }
];

const policyCards = [
  { category: "Policy Numbers", ref: "TC 7-22.7 - The Noncommissioned Officer Guide", q: "NCO Guide", a: "TC 7-22.7" },
  { category: "Policy Numbers", ref: "TC 3-22.9 - Rifle and Carbine", q: "Rifle and Carbine", a: "TC 3-22.9" },
  { category: "Policy Numbers", ref: "AR 600-63 - Army Health Promotion", q: "Suicide Prevention / Army Health Promotion", a: "AR 600-63" },
  { category: "Policy Numbers", ref: "AR 600-85 - Army Substance Abuse Program", q: "ASAP / Army Substance Abuse Program", a: "AR 600-85" },
  { category: "Policy Numbers", ref: "ADP 5-0 - The Operations Process", q: "Operations Process / MDMP", a: "ADP 5-0" },
  { category: "Policy Numbers", ref: "AR 601-280 - Army Retention Program", q: "Army Retention Program", a: "AR 601-280" },
  { category: "Policy Numbers", ref: "TC 3-25.26 - Map Reading and Land Navigation", q: "Map Reading and Land Navigation", a: "TC 3-25.26" },
  { category: "Policy Numbers", ref: "AR 670-1 - Wear and Appearance of Army Uniforms and Insignia", q: "Wear and Appearance", a: "AR 670-1" },
  { category: "Policy Numbers", ref: "FM 7-22 - Holistic Health and Fitness", q: "Holistic Health and Fitness", a: "FM 7-22" },
  { category: "Policy Numbers", ref: "AR 600-52 - Army SHARP Program", q: "SHARP", a: "AR 600-52" },
  { category: "Policy Numbers", ref: "TC 3-21.5 - Drill and Ceremonies", q: "Drill and Ceremony", a: "TC 3-21.5" },
  { category: "Policy Numbers", ref: "AR 600-20 - Army Command Policy", q: "EO / Army Command Policy", a: "AR 600-20" },
  { category: "Policy Numbers", ref: "ADP 1 - The Army", q: "The Army", a: "ADP 1" },
  { category: "Policy Numbers", ref: "TC 4-02.1 - First Aid", q: "First Aid", a: "TC 4-02.1" },
  { category: "Policy Numbers", ref: "ADP 7-0 - Training", q: "Training", a: "ADP 7-0" },
  { category: "Policy Numbers", ref: "ATP 6-22.1 - The Counseling Process", q: "Counseling", a: "ATP 6-22.1" },
  { category: "Policy Numbers", ref: "AR 27-10 - Military Justice", q: "UCMJ / Military Justice", a: "AR 27-10" },
  { category: "Policy Numbers", ref: "AR 600-25 - Salutes, Honors, and Visits of Courtesy", q: "Salutes, Honors, and Courtesy", a: "AR 600-25" },
  { category: "Policy Numbers", ref: "FM 3-09 - Fire Support and Field Artillery Operations", q: "Fire Support and Field Artillery Operations", a: "FM 3-09" },
  { category: "Policy Numbers", ref: "ADP 6-22 - Army Leadership and the Profession", q: "Army Leadership", a: "ADP 6-22" }
];

const deckSelect = document.querySelector("#deckSelect");
const modeSelect = document.querySelector("#modeSelect");
const shuffleButton = document.querySelector("#shuffleButton");
const resetButton = document.querySelector("#resetButton");
const flashcard = document.querySelector("#flashcard");
const categoryText = document.querySelector("#categoryText");
const referenceText = document.querySelector("#referenceText");
const cardSide = document.querySelector("#cardSide");
const cardText = document.querySelector("#cardText");
const hintText = document.querySelector("#hintText");
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#scoreText");
const saveLineRef = document.querySelector("#saveLineRef");
const backButton = document.querySelector("#backButton");
const starButton = document.querySelector("#starButton");
const againButton = document.querySelector("#againButton");
const flipButton = document.querySelector("#flipButton");
const knownButton = document.querySelector("#knownButton");

let activeCards = [];
let index = 0;
let flipped = false;
let known = new Set();
let missed = new Set();
let reviewingMissed = false;
let starred = loadStarredCards();

function loadStarredCards() {
  try {
    return new Set(JSON.parse(localStorage.getItem("armyBoardStarredCards") || "[]"));
  } catch {
    return new Set();
  }
}

const studyCards = cards.filter((card) => {
  const asksForReference =
    card.q.toLowerCase().includes("publication covers") ||
    card.q.toLowerCase().includes("regulation covers");
  return !card.regs && !asksForReference;
});
const allDecks = ["All Decks", ...Array.from(new Set(studyCards.map((card) => card.category))).sort()];

for (const deck of allDecks) {
  const option = document.createElement("option");
  option.value = deck;
  option.textContent = deck;
  deckSelect.appendChild(option);
}

function getFilteredCards() {
  const deck = deckSelect.value;
  const mode = modeSelect.value;
  const sourceCards = mode === "policies" ? policyCards : [...studyCards, ...policyCards];
  return sourceCards.filter((card) => {
    const deckMatch = deck === "All Decks" || card.category === deck;
    if (mode === "policies") return true;
    if (mode === "starred") return starred.has(cardKey(card));
    return deckMatch;
  });
}

function cardKey(card) {
  return `${card.category}:${card.q}:${card.a}`;
}

function saveStarredCards() {
  try {
    localStorage.setItem("armyBoardStarredCards", JSON.stringify([...starred]));
  } catch {
    // Some file:// browser contexts block storage. Stars still work for this session.
  }
}

function refreshDeck(resetPosition = true) {
  activeCards = getFilteredCards();
  if (resetPosition) index = 0;
  if (index >= activeCards.length) index = 0;
  reviewingMissed = false;
  flipped = false;
  render();
}

function render() {
  if (!activeCards.length) {
    categoryText.textContent = "No cards";
    referenceText.textContent = "";
    cardSide.textContent = "Empty";
    cardText.textContent = "No cards match this filter yet.";
    hintText.textContent = "Switch decks or reset missed cards.";
    progressText.textContent = "0 / 0";
    scoreText.textContent = `${known.size} known`;
    starButton.textContent = "☆";
    starButton.setAttribute("aria-pressed", "false");
    starButton.setAttribute("aria-label", "Star this flashcard");
    starButton.classList.remove("is-starred");
    saveLineRef.textContent = "the correct publication";
    return;
  }

  const card = activeCards[index];
  const isStarred = starred.has(cardKey(card));
  categoryText.textContent = card.category;
  referenceText.textContent = modeSelect.value === "policies" ? "Policy number drill" : card.ref.split(" - ")[0];
  cardSide.textContent = flipped ? "Back" : "Front";
  cardText.textContent = flipped ? card.a : card.q;
  hintText.textContent = reviewingMissed
    ? "Missed-card review. Clear it with Know It or keep it with Missed."
    : flipped
      ? "Mark it known or missed."
      : "Answer out loud, then flip.";
  progressText.textContent = `${index + 1} / ${activeCards.length}`;
  scoreText.textContent = `${known.size} known`;
  starButton.textContent = isStarred ? "★" : "☆";
  starButton.setAttribute("aria-pressed", String(isStarred));
  starButton.setAttribute("aria-label", isStarred ? "Unstar this flashcard" : "Star this flashcard");
  starButton.classList.toggle("is-starred", isStarred);
  saveLineRef.textContent = card.ref;
}

function flip() {
  flipped = !flipped;
  render();
}

function nextCard() {
  if (!activeCards.length) return;
  index = (index + 1) % activeCards.length;
  flipped = false;
  render();
}

function advanceAfterAnswer() {
  if (!activeCards.length) return;
  const wasLastCard = index === activeCards.length - 1;

  if (!wasLastCard) {
    nextCard();
    return;
  }

  const missedCards = activeCards.filter((card) => missed.has(cardKey(card)));
  if (missedCards.length > 0) {
    activeCards = missedCards;
    reviewingMissed = true;
    index = 0;
  } else {
    activeCards = getFilteredCards();
    reviewingMissed = false;
    index = 0;
  }

  flipped = false;
  render();
}

function previousCard() {
  if (!activeCards.length) return;
  index = (index - 1 + activeCards.length) % activeCards.length;
  flipped = false;
  render();
}

function shuffleActiveCards() {
  for (let i = activeCards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [activeCards[i], activeCards[j]] = [activeCards[j], activeCards[i]];
  }
  index = 0;
  flipped = false;
  render();
}

flashcard.addEventListener("click", flip);
flipButton.addEventListener("click", flip);
backButton.addEventListener("click", previousCard);
starButton.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!activeCards.length) return;
  const key = cardKey(activeCards[index]);
  if (starred.has(key)) {
    starred.delete(key);
  } else {
    starred.add(key);
  }
  saveStarredCards();
  if (modeSelect.value === "starred" && !starred.has(key)) {
    activeCards = getFilteredCards();
    if (index >= activeCards.length) index = 0;
  }
  render();
});
knownButton.addEventListener("click", () => {
  if (!activeCards.length) return;
  const key = cardKey(activeCards[index]);
  known.add(key);
  missed.delete(key);
  advanceAfterAnswer();
});
againButton.addEventListener("click", () => {
  if (!activeCards.length) return;
  missed.add(cardKey(activeCards[index]));
  advanceAfterAnswer();
});
shuffleButton.addEventListener("click", shuffleActiveCards);
resetButton.addEventListener("click", () => {
  known = new Set();
  missed = new Set();
  refreshDeck();
});
deckSelect.addEventListener("change", () => refreshDeck());
modeSelect.addEventListener("change", () => refreshDeck());

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    flip();
  }
  if (event.key === "ArrowRight") nextCard();
  if (event.key === "ArrowLeft") previousCard();
  if (event.key.toLowerCase() === "k") knownButton.click();
  if (event.key.toLowerCase() === "m") againButton.click();
  if (event.key.toLowerCase() === "s") starButton.click();
});

refreshDeck();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {
    // The app still works if the browser blocks service workers on local networks.
  });
}
