const hintText = document.querySelector(".hint span");
const wordText = document.querySelector(".word");
const refresh = document.querySelector(".refresh");
const check = document.querySelector(".check");
const inputField = document.querySelector("input");
const timeText = document.querySelector(".time b");
const words = [
  { word: "Giraffe", hint: "Tallest land animal" },
  { word: "Piano", hint: "Musical instrument with black and white keys" },
  { word: "Soccer", hint: "Sport played with a round ball" },
  { word: "Coffee", hint: "Popular hot beverage" },
  { word: "Rainbow", hint: "Multicolored natural phenomenon" },
  { word: "Dolphin", hint: "Intelligent marine mammal" },
  { word: "Sunflower", hint: "Tall plant with bright yellow petals" },
  { word: "Chocolate", hint: "Sweet treat made from cacao beans" },
  { word: "Eiffel Tower", hint: "Iconic Parisian landmark" },
  { word: "Unicorn", hint: "Mythical creature with a horn on its forehead" },
  { word: "Laptop", hint: "Portable computer" },
  { word: "Elephant", hint: "Large land mammal with a trunk" },
  { word: "Pizza", hint: "Round food with various toppings" },
  { word: "Moon", hint: "Natural satellite of Earth" },
  { word: "Bicycle", hint: "Two-wheeled vehicle" },
  { word: "Guitar", hint: "Stringed musical instrument" },
  { word: "Butterfly", hint: "Colorful insect with delicate wings" },
  { word: "Beach", hint: "Sandy shoreline by the sea" },
  { word: "Camera", hint: "Device used to capture photos" },
  { word: "Diamond", hint: "Precious gemstone" },
  { word: "Tiger", hint: "Large carnivorous cat" },
  { word: "Library", hint: "Place with books and reading materials" },
  { word: "Dragon", hint: "Mythical creature with wings and scales" },
  { word: "Banana", hint: "Yellow fruit with a peel" },
  { word: "Telescope", hint: "Device for viewing distant objects" },
  { word: "Fireworks", hint: "Explosive displays of light and color" },
  { word: "Zebra", hint: "Black and white striped animal" },
  { word: "Bridge", hint: "Structure that connects two points" },
  { word: "Watermelon", hint: "Juicy fruit with a green rind" },
  { word: "Rain", hint: "Precipitation from the sky" },
  { word: "Castle", hint: "Fortified structure associated with royalty" },
  { word: "Eagle", hint: "Large bird of prey" },
  { word: "Chess", hint: "Board game with strategic moves" },
  { word: "Star", hint: "Luminous celestial body" },
  { word: "Ship", hint: "Large watercraft for transportation" },
  { word: "Apple", hint: "Fruit often associated with teachers" },
  { word: "Train", hint: "Vehicle that runs on tracks" },
  { word: "Desert", hint: "Arid and sandy biome" },
  { word: "Lion", hint: "King of the jungle" },
  { word: "School", hint: "Institution for learning" },
  { word: "Surreptitious", hint: "Secretive or stealthy" },
  { word: "Exacerbate", hint: "To make a situation worse" }, 
  { word: "Research", hint: "The systematic investigation and study of materials and sources to gain knowledge and understanding" },
  { word: "Analysis", hint: "The process of examining something in detail to understand its components and relationships" },
  { word: "Hypothesis", hint: "A proposed explanation or prediction based on limited evidence, serving as a starting point for further investigation" },
  { word: "Experiment", hint: "A carefully designed and controlled procedure carried out to test a hypothesis or gather data" },
  { word: "Data", hint: "Facts, statistics, or information collected and used for analysis or reference" },
  { word: "Conclusion", hint: "A judgment or decision reached based on evidence and reasoning" },
  { word: "Literature", hint: "Written works, such as books, articles, or journals, on a particular subject or of a specific genre" },
  { word: "Citation", hint: "A reference to a source of information or authority in an academic or scholarly work" },
  { word: "Plagiarism", hint: "The act of using someone else's work, ideas, or words without giving proper credit or acknowledgment" },
  { word: "Peer Review", hint: "The evaluation and assessment of scholarly work by experts in the same field" },
  { word: "Theory", hint: "A well-substantiated explanation or framework that explains phenomena based on empirical evidence" },
  { word: "Variable", hint: "A factor or element that can change or vary in an experiment or study" },
  { word: "Quantitative", hint: "Relating to or involving the measurement of quantity or amount" },
  { word: "Qualitative", hint: "Relating to or involving qualities, characteristics, or subjective observations" },
  { word: "Abstract", hint: "A brief summary or overview of a research paper or article" },
  { word: "Methodology", hint: "The systematic approach or set of methods used in a particular area of study" },
  { word: "Survey", hint: "A method of gathering information or data by asking questions to a group of people" },
  { word: "Analysis", hint: "The process of examining something in detail to understand its components and relationships" },
  { word: "Experiment", hint: "A carefully designed and controlled procedure carried out to test a hypothesis or gather data" },
  { word: "Correlation", hint: "A statistical measure that indicates the extent to which two or more variables are related or associated" },
  { word: "Bias", hint: "Prejudice or favoritism that influences the interpretation or presentation of information or data" },
  { word: "Sampling", hint: "The process of selecting a subset of individuals or items from a larger population for study or analysis" },
  { word: "Validity", hint: "The extent to which a measure or research study accurately captures or measures what it intends to" },
  { word: "Reliability", hint: "The consistency, stability, or repeatability of results or measurements in a research study" },
  { word: "Ethics", hint: "Moral principles and guidelines that govern appropriate conduct in research and academic work" },
  { word: "Statistical", hint: "Relating to the collection, analysis, interpretation, presentation, or organization of data" },
  { word: "Experiment", hint: "A carefully designed and controlled procedure carried out to test a hypothesis or gather data" },
  { word: "Literature", hint: "Written works, such as books, articles, or journals, on a particular subject or of a specific genre" },
  { word: "Citation", hint: "A reference to a source of information or authority in an academic or scholarly work" },
  { word: "Plagiarism", hint: "The act of using someone else's work, ideas, or words without giving proper credit or acknowledgment" },
  { word: "Peer Review", hint: "The evaluation and assessment of scholarly work by experts in the same field" },
  { word: "Theory", hint: "A well-substantiated explanation or framework that explains phenomena based on empirical evidence" },
  { word: "Variable", hint: "A factor or element that can change or vary in an experiment or study" },
  { word: "Quantitative", hint: "Relating to or involving the measurement of quantity or amount" },
  { word: "Qualitative", hint: "Relating to or involving qualities, characteristics, or subjective observations" },
  { word: "Abstract", hint: "A brief summary or overview of a research paper or article" },
  { word: "Methodology", hint: "The systematic approach or set of methods used in a particular area of study" },
  { word: "Survey", hint: "A method of gathering information or data by asking questions to a group of people" },
  { word: "Analysis", hint: "The process of examining something in detail to understand its components and relationships" },
  { word: "Experiment", hint: "A carefully designed and controlled procedure carried out to test a hypothesis or gather data" },
  { word: "Correlation", hint: "A statistical measure that indicates the extent to which two or more variables are related or associated" },
  { word: "Bias", hint: "Prejudice or favoritism that influences the interpretation or presentation of information or data" },
  { word: "Sampling", hint: "The process of selecting a subset of individuals or items from a larger population for study or analysis" },
  { word: "Validity", hint: "The extent to which a measure or research study accurately captures or measures what it intends to" },
  { word: "Reliability", hint: "The consistency, stability, or repeatability of results or measurements in a research study" },
  { word: "Ethics", hint: "Moral principles and guidelines that govern appropriate conduct in research and academic work" },
  { word: "Statistical", hint: "Relating to the collection, analysis, interpretation, presentation, or organization of data" },
  {
    word: "Quintessential",
    hint: "Representing the most typical example or quality",
  },
  { word: "hello", hint: "people's greeting" },
  { word: "biology", hint: "The study of living organisms" },
  { word: "evolution", hint: "Process of gradual change in species over time" },
  {
    word: "ecosystem",
    hint: "A community of living organisms and their environment",
  },
  { word: "genetics", hint: "The study of genes and heredity" },
  {
    word: "photosynthesis",
    hint: "Process by which plants convert sunlight into energy",
  },
  {
    word: "respiration",
    hint: "Process of inhaling oxygen and exhaling carbon dioxide",
  },
  {
    word: "biodiversity",
    hint: "Variety of different species in an ecosystem",
  },
  {
    word: "mitosis",
    hint: "Cell division resulting in two identical daughter cells",
  },
  { word: "mutation", hint: "A change in the DNA sequence of a gene" },
  {
    word: "adaptation",
    hint: "A trait that helps an organism survive and reproduce",
  },
  { word: "taxonomy", hint: "Science of classifying and naming organisms" },
  {
    word: "ecology",
    hint: "Study of interactions among organisms and their environment",
  },
  { word: "Ubiquitous", hint: "Being present or found everywhere" },
  {
    word: "Esoteric",
    hint: "Intended for or understood by only a small group",
  },
  { word: "Perfunctory", hint: "Done with minimal effort or thought" },
  { word: "Meticulous", hint: "Showing great attention to detail" },
  {
    word: "Sagacious",
    hint: "Having good judgment or keen mental discernment",
  },
  { word: "Ephemeral", hint: "Lasting for a very short time" },
  { word: "Copious", hint: "Abundant in quantity or number" },
  { word: "Panacea", hint: "A remedy that is supposed to cure all diseases" },
  {
    word: "Pernicious",
    hint: "Having a harmful effect, especially in a gradual or subtle way",
  },
  {
    word: "Reticent",
    hint: "Not revealing one's thoughts or feelings readily",
  },
  {
    word: "Fastidious",
    hint: "Very attentive to and concerned about accuracy and detail",
  },
  {
    word: "Capricious",
    hint: "Given to sudden and unaccountable changes of mood or behavior",
  },
  { word: "Vexatious", hint: "Causing annoyance, frustration, or worry" },
  {
    word: "Sycophant",
    hint: "A person who acts obsequiously toward someone important to gain advantage",
  },
  { word: "Parsimonious", hint: "Excessively frugal or stingy" },
  {
    word: "Ambivalent",
    hint: "Having mixed feelings or contradictory ideas about something or someone",
  },
  {
    word: "Taciturn",
    hint: "Reserved or uncommunicative in speech; saying little",
  },
  {
    word: "Quagmire",
    hint: "A difficult or precarious situation; a swampy or muddy area",
  },
  {
    word: "Serendipity",
    hint: "The occurrence of events by chance in a happy or beneficial way",
  },
  { word: "Indubitable", hint: "Impossible to doubt; unquestionable" },
  {
    word: "Quixotic",
    hint: "Exceedingly idealistic; unrealistic and impractical",
  },
  {
    word: "Ineffable",
    hint: "Too great or extreme to be expressed or described in words",
  },
  { word: "Nefarious", hint: "Wicked or criminal in nature; evil" },
  { word: "Ebullient", hint: "Cheerful and full of energy" },
  {
    word: "Malfeasance",
    hint: "Wrongdoing or misconduct, especially by a public official",
  },
  {
    word: "Idiosyncrasy",
    hint: "A distinctive or peculiar feature or characteristic of a person or thing",
  },
  { word: "Inexorable", hint: "Impossible to stop or prevent" },
  {
    word: "Superfluous",
    hint: "Exceeding what is necessary or required; extra",
  },
  { word: "Plethora", hint: "A large or excessive amount of something" },
  { word: "football", hint: "Popular sport played with a round ball" },
  { word: "basketball", hint: "Sport played with a hoop and a ball" },
  { word: "tennis", hint: "Racket sport played on a court" },
  { word: "volleyball", hint: "Game played with a ball and a net" },
  { word: "swimming", hint: "Activity of propelling oneself through water" },
  { word: "golf", hint: "Sport played on a course with clubs and a ball" },
  { word: "baseball", hint: "Bat-and-ball game played between two teams" },
  { word: "soccer", hint: "Sport played with a round ball" },
  {
    word: "hockey",
    hint: "Game played on ice or field with sticks and a puck",
  },
  { word: "cricket", hint: "Bat-and-ball game played with two teams" },
  { word: "rugby", hint: "Sport played with an oval ball" },
  { word: "badminton", hint: "Racket sport played with a shuttlecock" },
  { word: "cycling", hint: "Activity of riding a bicycle" },
  { word: "boxing", hint: "Combat sport involving punching and defense" },
  { word: "wrestling", hint: "Sport of grappling and throwing opponents" },
  { word: "athletics", hint: "Collection of sports events and competitions" },
  { word: "skiing", hint: "Activity of gliding on snow with skis" },
  { word: "gymnastics", hint: "Sport of exercises and performances" },
];
var correctWord, timer;

const showTimeUpNotification = () => {
  Toastify({
    text: `Time's up! The correct word is ${correctWord.toUpperCase()}.`,
    duration: 2000,
    close: true,
    gravity: "top",
    backgroundColor: "purple",
    className: "custom-toast",
    icon: "fas fa-clock" 
  }).showToast();
};

const initTimer = (maxTime) => {
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      timeText.innerText = maxTime;
    } else {
      clearInterval(timer);
      showTimeUpNotification(); 
      startGame();
    }
  }, 1000);
};

const startGame = () => {
  clearInterval(timer);
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
};

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) {
    Toastify({
      text: "Please enter a word to check.",
      duration: 3000,
      close: true,
      gravity: "top",
      backgroundColor: "orange",
      className: "custom-toast",
      icon: "fas fa-exclamation-circle" 
    }).showToast();
    return;
  }
  if (userWord === correctWord) {
    Toastify({
      text: `Congratulations! ${userWord.toUpperCase()} is the correct word!`,
      duration: 3000,
      close: true,
      gravity: "top",
      backgroundColor: "green",
      className: "custom-toast",
      icon: "fas fa-check-circle" 
    }).showToast();
  } else {
    Toastify({
      text: `Oops! ${userWord.toUpperCase()} is not the correct word.`,
      duration: 3000,
      close: true,
      gravity: "top",
      backgroundColor: "red",
      className: "custom-toast",
      icon: "fas fa-exclamation-triangle" 
    }).showToast();
    return;
  }
  startGame();
};
startGame();
check.addEventListener("click", checkWord);
refresh.addEventListener("click", startGame);

