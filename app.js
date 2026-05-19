const flashcards = [
  { deck: "Chain of Command", ref: "Unit Chain of Command", important: true, front: "Recite your chain of command.", back: "Sgt Natwora, SSG Butcher, SFC Kilar, CPT Smith, LTC Barlett, Colonel Pickler, General Carpenter, General Donahue, General Laneve, Honorable Daniel Driscoll, Honorable Pete Hegseth, President Donald Trump." },
  { deck: "NCO Support Channel", ref: "Unit NCO Support Channel", important: true, front: "Recite your NCO support channel.", back: "1SG Cole, CSM Hespe, CSM Bell, CSM Webster, CSM Mulinax, SMA Weimer." },
  { deck: "NCO Guide", ref: "TC 7-22.7 - The Noncommissioned Officer Guide", important: true, front: "What is an NCO?", back: "A leader responsible for training, leading, and developing Soldiers." },
  { deck: "NCO Guide", ref: "TC 7-22.7 - The Noncommissioned Officer Guide", important: true, front: "What are the six NCO common core competencies?", back: "Readiness, leadership, training management, communication, operations, and program management." },
  { deck: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", important: true, front: "What are three types of weapon malfunctions?", back: "Failure to feed, failure to fire, and failure to eject." },
  { deck: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", important: true, front: "What is the cycle of function?", back: "Feeding, chambering, locking, firing, unlocking, extracting, ejecting, and cocking." },
  { deck: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", important: true, front: "Describe the M4.", back: "The M4 is a gas-operated, air-cooled, magazine-fed, shoulder-fired weapon." },
  { deck: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", important: true, front: "What are the four principles of weapon safety?", back: "Treat every weapon like it is loaded, keep your finger off the trigger, do not point it until ready to shoot, and maintain positive target ID." },
  { deck: "Rifle & Carbine", ref: "TC 3-22.9 - Rifle and Carbine", important: true, front: "What are the marksmanship fundamentals in your doc?", back: "Breathing, sight picture, trigger squeeze, and steady position." },
  { deck: "Suicide Prevention", ref: "AR 600-63 - Army Health Promotion", important: true, front: "What does ACE-SI stand for?", back: "Ask, Care, Escort, Suicide Intervention." },
  { deck: "Suicide Prevention", ref: "AR 600-63 - Army Health Promotion", important: true, front: "What is the suicide hotline?", back: "988." },
  { deck: "ASAP", ref: "AR 600-85 - Army Substance Abuse Program", important: true, front: "What does SUDCC stand for?", back: "Substance Use Disorder Clinical Care." },
  { deck: "Operations Process", ref: "ADP 5-0 - The Operations Process", important: false, front: "What is MDMP?", back: "The Military Decision-Making Process." },
  { deck: "Operations Process", ref: "ADP 5-0 - The Operations Process", important: false, front: "What are the three levels of warfare?", back: "Strategic, operational, and tactical." },
  { deck: "Army Retention", ref: "AR 601-280 - Army Retention Program", important: false, front: "What can make a Soldier ineligible for reenlistment?", back: "A bar to reenlistment, being flagged, or enrollment in SUDCC." },
  { deck: "Army Retention", ref: "AR 601-280 - Army Retention Program", important: false, front: "What does QTIP stand for?", back: "Quality Tiered Incentive Program." },
  { deck: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", important: true, front: "What does black represent on a map?", back: "Man-made features." },
  { deck: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", important: true, front: "What does blue represent on a map?", back: "Water." },
  { deck: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", important: true, front: "What does brown represent on a map?", back: "Contour lines and elevation." },
  { deck: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", important: true, front: "What are the three norths on a map?", back: "True north, magnetic north, and grid north." },
  { deck: "Map Reading & Land Navigation", ref: "TC 3-25.26 - Map Reading and Land Navigation", important: true, front: "What are the five major terrain features?", back: "Hill, valley, ridge, saddle, and depression." },
  { deck: "Wear and Appearance", ref: "AR 670-1 - Wear and Appearance of Army Uniforms and Insignia", important: false, front: "What are the male hair standards?", back: "Male hair must be neatly groomed, not excessive in length or bulk, neat and conservative, tapered, not fall over the ears or eyebrows, and not touch the collar." },
  { deck: "Holistic Health and Fitness", ref: "FM 7-22 - Holistic Health and Fitness", important: false, front: "What are the five H2F domains?", back: "Physical, nutritional, mental, spiritual, and sleep." },
  { deck: "Holistic Health and Fitness", ref: "FM 7-22 - Holistic Health and Fitness", important: false, front: "What are the phases of PRT?", back: "Initial conditioning, toughening, and sustaining." },
  { deck: "SHARP", ref: "AR 600-52 - Army SHARP Program", important: true, front: "What does SHARP stand for?", back: "Sexual Harassment/Assault Response and Prevention." },
  { deck: "SHARP", ref: "AR 600-52 - Army SHARP Program", important: true, front: "What are the SHARP reporting options?", back: "Restricted, unrestricted, and anonymous." },
  { deck: "SHARP", ref: "AR 600-52 - Army SHARP Program", important: true, front: "What are types of sexual harassment?", back: "Verbal, non-verbal, and quid pro quo." },
  { deck: "EO", ref: "AR 600-20 - Army Command Policy", important: true, front: "What is protected by EO?", back: "Race, color, sex, national origin, religion, and sexual orientation." },
  { deck: "EO", ref: "AR 600-20 - Army Command Policy", important: true, front: "What types of EO complaints can be filed?", back: "Anonymous, formal, and informal." },
  { deck: "EO", ref: "AR 600-20 - Army Command Policy", important: true, front: "What is the EO complaint time limit?", back: "60 days." },
  { deck: "The Army", ref: "ADP 1 - The Army", important: false, front: "What are the three components of the Army?", back: "Active Army, Army Reserve, and Army National Guard." },
  { deck: "The Army", ref: "ADP 1 - The Army", important: false, front: "What are the domains listed in your doc?", back: "Land, air, sea, space, and cyberspace." },
  { deck: "First Aid", ref: "TC 4-02.1 - First Aid", important: true, front: "What are the pulse locations in your doc?", back: "Carotid, radial, tibial, and femoral." },
  { deck: "First Aid", ref: "TC 4-02.1 - First Aid", important: true, front: "What temperature is hypothermia?", back: "95 degrees Fahrenheit and below." },
  { deck: "First Aid", ref: "TC 4-02.1 - First Aid", important: true, front: "How do you apply a tourniquet?", back: "High and tight on limbs or 2 to 3 inches above the wound." },
  { deck: "First Aid", ref: "TC 4-02.1 - First Aid", important: true, front: "What are the stages of heat injury?", back: "Heat cramps, heat exhaustion, and heat stroke." },
  { deck: "First Aid", ref: "TC 4-02.1 - First Aid", important: true, front: "What are cold weather injuries?", back: "Frostbite, hypothermia, chilblain, and immersion foot or trench foot." },
  { deck: "First Aid", ref: "TC 4-02.1 - First Aid", important: true, front: "What are the burn types?", back: "Thermal, electrical, chemical, and laser." },
  { deck: "Training", ref: "ADP 7-0 - Training", important: false, front: "What does METL stand for?", back: "Mission Essential Task List." },
  { deck: "Counseling", ref: "ATP 6-22.1 - The Counseling Process", important: true, front: "Who is responsible for counseling?", back: "Leaders at all levels." },
  { deck: "Counseling", ref: "ATP 6-22.1 - The Counseling Process", important: true, front: "What are the three types of developmental counseling?", back: "Event-oriented, performance, and professional growth." },
  { deck: "Counseling", ref: "ATP 6-22.1 - The Counseling Process", important: true, front: "What are the four steps of the counseling process?", back: "Identify, prepare, conduct, and follow up." },
  { deck: "Fire Support", ref: "FM 3-09 - Fire Support and Field Artillery Operations", important: false, front: "What is field artillery's primary mission?", back: "To provide fire support to maneuver forces to destroy, neutralize, or suppress the enemy." },
  { deck: "Army Leadership", ref: "ADP 6-22 - Army Leadership and the Profession", important: true, front: "What is the Leadership Requirements Model?", back: "Attributes: character, presence, intellect. Competencies: leads, develops, achieves." }
];

const policies = [
  ["NCO Guide", "TC 7-22.7", "The Noncommissioned Officer Guide"],
  ["Rifle and Carbine", "TC 3-22.9", "Rifle and Carbine"],
  ["Suicide Prevention / Army Health Promotion", "AR 600-63", "Army Health Promotion"],
  ["ASAP / Army Substance Abuse Program", "AR 600-85", "Army Substance Abuse Program"],
  ["Operations Process / MDMP", "ADP 5-0", "The Operations Process"],
  ["Army Retention Program", "AR 601-280", "Army Retention Program"],
  ["Map Reading and Land Navigation", "TC 3-25.26", "Map Reading and Land Navigation"],
  ["Wear and Appearance", "AR 670-1", "Wear and Appearance of Army Uniforms and Insignia"],
  ["Holistic Health and Fitness", "FM 7-22", "Holistic Health and Fitness"],
  ["SHARP", "AR 600-52", "Army SHARP Program"],
  ["Drill and Ceremony", "TC 3-21.5", "Drill and Ceremonies"],
  ["EO / Army Command Policy", "AR 600-20", "Army Command Policy"],
  ["The Army", "ADP 1", "The Army"],
  ["First Aid", "TC 4-02.1", "First Aid"],
  ["Training", "ADP 7-0", "Training"],
  ["Counseling", "ATP 6-22.1", "The Counseling Process"],
  ["UCMJ / Military Justice", "AR 27-10", "Military Justice"],
  ["Salutes, Honors, and Courtesy", "AR 600-25", "Salutes, Honors, and Visits of Courtesy"],
  ["Fire Support and Field Artillery Operations", "FM 3-09", "Fire Support and Field Artillery Operations"],
  ["Army Leadership", "ADP 6-22", "Army Leadership and the Profession"]
].map(([topic, number, name]) => ({
  deck: "Policy Numbers",
  ref: `${number} - ${name}`,
  policy: true,
  front: topic,
  back: number
}));

const els = {
  deck: document.querySelector("#deckSelect"),
  mode: document.querySelector("#modeSelect"),
  shuffle: document.querySelector("#shuffleButton"),
  reset: document.querySelector("#resetButton"),
  card: document.querySelector("#flashcard"),
  topic: document.querySelector("#categoryText"),
  ref: document.querySelector("#referenceText"),
  side: document.querySelector("#cardSide"),
  text: document.querySelector("#cardText"),
  hint: document.querySelector("#hintText"),
  progress: document.querySelector("#progressText"),
  star: document.querySelector("#starButton"),
  missed: document.querySelector("#againButton"),
  known: document.querySelector("#knownButton"),
  back: document.querySelector("#backButton"),
  flip: document.querySelector("#flipButton"),
  saveLine: document.querySelector("#saveLineRef")
};

let active = [];
let cursor = 0;
let flipped = false;
let reviewingMissed = false;
let known = new Set();
let missed = new Set();
let starred = loadSet("boardCards2Starred");

function loadSet(key) {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  } catch {
    return new Set();
  }
}

function saveSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify([...value]));
  } catch {
    // Storage may be unavailable in some local file contexts.
  }
}

function keyFor(card) {
  return `${card.deck}|${card.front}|${card.back}`;
}

function allCardsForMode() {
  if (els.mode.value === "policies") return policies;
  if (els.mode.value === "starred") return [...flashcards, ...policies].filter((card) => starred.has(keyFor(card)));
  const selectedDeck = els.deck.value;
  return flashcards.filter((card) => selectedDeck === "All Decks" || card.deck === selectedDeck);
}

function buildDecks() {
  const decks = ["All Decks", ...new Set(flashcards.map((card) => card.deck))].sort((a, b) => {
    if (a === "All Decks") return -1;
    if (b === "All Decks") return 1;
    return a.localeCompare(b);
  });

  for (const deck of decks) {
    const option = document.createElement("option");
    option.value = deck;
    option.textContent = deck;
    els.deck.appendChild(option);
  }
}

function refresh(resetCursor = true) {
  active = allCardsForMode();
  if (resetCursor) cursor = 0;
  if (cursor >= active.length) cursor = 0;
  reviewingMissed = false;
  flipped = false;
  render();
}

function render() {
  if (!active.length) {
    els.topic.textContent = "No Cards";
    els.ref.textContent = "";
    els.side.textContent = "Empty";
    els.text.textContent = "No cards match this mode.";
    els.hint.textContent = "Star cards or switch modes.";
    els.progress.textContent = "0 / 0";
    els.star.textContent = "☆";
    els.star.setAttribute("aria-pressed", "false");
    els.saveLine.textContent = "the correct publication";
    return;
  }

  const card = active[cursor];
  const cardKey = keyFor(card);
  const isStarred = starred.has(cardKey);

  els.topic.textContent = card.deck;
  els.ref.textContent = card.policy ? "Policy drill" : card.ref.split(" - ")[0];
  els.side.textContent = flipped ? "Back" : "Front";
  els.text.textContent = flipped ? card.back : card.front;
  els.hint.textContent = reviewingMissed
    ? "Missed-card review."
    : flipped
      ? "Mark it known or missed."
      : "Answer out loud, then flip.";
  els.progress.textContent = `${cursor + 1} / ${active.length}`;
  els.star.textContent = isStarred ? "★" : "☆";
  els.star.setAttribute("aria-pressed", String(isStarred));
  els.star.setAttribute("aria-label", isStarred ? "Unstar this card" : "Star this card");
  els.saveLine.textContent = card.ref;
}

function nextCard() {
  if (!active.length) return;
  cursor = (cursor + 1) % active.length;
  flipped = false;
  render();
}

function previousCard() {
  if (!active.length) return;
  cursor = (cursor - 1 + active.length) % active.length;
  flipped = false;
  render();
}

function advanceAfterAnswer() {
  if (!active.length) return;
  const lastCard = cursor === active.length - 1;

  if (!lastCard) {
    nextCard();
    return;
  }

  const missedCards = active.filter((card) => missed.has(keyFor(card)));
  if (missedCards.length) {
    active = missedCards;
    cursor = 0;
    reviewingMissed = true;
  } else {
    active = allCardsForMode();
    cursor = 0;
    reviewingMissed = false;
  }

  flipped = false;
  render();
}

function shuffleActive() {
  for (let i = active.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [active[i], active[j]] = [active[j], active[i]];
  }
  cursor = 0;
  flipped = false;
  render();
}

els.card.addEventListener("click", () => {
  flipped = !flipped;
  render();
});

els.star.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!active.length) return;
  const cardKey = keyFor(active[cursor]);
  if (starred.has(cardKey)) {
    starred.delete(cardKey);
  } else {
    starred.add(cardKey);
  }
  saveSet("boardCards2Starred", starred);
  if (els.mode.value === "starred" && !starred.has(cardKey)) {
    active = allCardsForMode();
    if (cursor >= active.length) cursor = 0;
  }
  render();
});

els.flip.addEventListener("click", () => {
  flipped = !flipped;
  render();
});

els.back.addEventListener("click", previousCard);

els.known.addEventListener("click", () => {
  if (!active.length) return;
  const cardKey = keyFor(active[cursor]);
  known.add(cardKey);
  missed.delete(cardKey);
  advanceAfterAnswer();
});

els.missed.addEventListener("click", () => {
  if (!active.length) return;
  missed.add(keyFor(active[cursor]));
  advanceAfterAnswer();
});

els.shuffle.addEventListener("click", shuffleActive);

els.reset.addEventListener("click", () => {
  known = new Set();
  missed = new Set();
  refresh();
});

els.deck.addEventListener("change", () => refresh());
els.mode.addEventListener("change", () => refresh());

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    els.flip.click();
  }
  if (event.key === "ArrowRight") nextCard();
  if (event.key === "ArrowLeft") previousCard();
  if (event.key.toLowerCase() === "k") els.known.click();
  if (event.key.toLowerCase() === "m") els.missed.click();
  if (event.key.toLowerCase() === "s") els.star.click();
});

buildDecks();
refresh();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
