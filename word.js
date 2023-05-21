const hintText = document.querySelector(".hint span");
const wordText = document.querySelector(".word");
const refresh = document.querySelector(".refresh");
const check = document.querySelector(".check");
const inputField = document.querySelector("input");
const timeText = document.querySelector(".time b");
const words = [
  {
    word: "Chelsea",
    hint: "English football club with a strong presence in both domestic and European competitions",
  },
  {
    word: "Arsenal",
    hint: "English football club based in London known for its attractive style of play",
  },
  {
    word: "AC Milan",
    hint: "Italian football club with a successful history and iconic red and black stripes",
  },
  {
    word: "Inter Milan",
    hint: "Italian football club that shares a stadium with AC Milan",
  },
  {
    word: "Tottenham Hotspur",
    hint: "English football club known for its attacking style and rivalry with Arsenal",
  },
  {
    word: "Borussia Dortmund",
    hint: "German football club with a passionate fan base known as the Yellow Wall",
  },
  {
    word: "Atletico Madrid",
    hint: "Spanish football club that has been a strong competitor in La Liga",
  },
  {
    word: "Sevilla",
    hint: "Spanish football club with a successful history in domestic and European competitions",
  },
  {
    word: "Ajax",
    hint: "Dutch football club with a renowned youth academy and a history of success",
  },
  {
    word: "Benfica",
    hint: "Portuguese football club with a large fan base and a rich history",
  },
  {
    word: "Porto",
    hint: "Portuguese football club known for its success in European competitions",
  },
  {
    word: "Marseille",
    hint: "French football club with a passionate fan base and a history of success",
  },
  { word: "Roma", hint: "Italian football club based in Rome" },
  {
    word: "Napoli",
    hint: "Italian football club based in Naples known for its passionate fan base",
  },
  {
    word: "Boca Juniors",
    hint: "Argentinian football club with a strong rivalry with River Plate",
  },
  {
    word: "Love",
    hint: "A deep affection and emotional attachment towards someone or something",
  },
  {
    word: "Romance",
    hint: "A feeling of excitement and attraction in a relationship",
  },
  {
    word: "Passion",
    hint: "Intense enthusiasm and desire for someone or something",
  },
  { word: "Affection", hint: "Fondness and tenderness towards someone" },
  {
    word: "Devotion",
    hint: "Dedication and loyalty towards someone or something",
  },
  { word: "Adoration", hint: "Deep love and admiration for someone" },
  {
    word: "Desire",
    hint: "A strong longing or craving for someone or something",
  },
  {
    word: "Attraction",
    hint: "A feeling of being drawn towards someone or something",
  },
  {
    word: "Intimacy",
    hint: "Close and personal connection or familiarity in a relationship",
  },
  {
    word: "Caring",
    hint: "Showing concern, kindness, and consideration towards someone",
  },
  {
    word: "Companion",
    hint: "A person who provides support, friendship, and company",
  },
  {
    word: "Soulmate",
    hint: "A person ideally suited for another in terms of compatibility and deep connection",
  },
  { word: "Happiness", hint: "A state of joy, contentment, and satisfaction" },
  { word: "Joy", hint: "A feeling of great happiness and delight" },
  { word: "Bliss", hint: "Extreme happiness and spiritual joy" },
  {
    word: "Commitment",
    hint: "A dedicated and lasting promise or obligation in a relationship",
  },
  {
    word: "Trust",
    hint: "Confidence and reliance on someone's integrity, honesty, and reliability",
  },
  {
    word: "Support",
    hint: "Assistance, encouragement, and backing in a relationship",
  },
  {
    word: "Understanding",
    hint: "Empathy, comprehension, and acceptance in a relationship",
  },
  {
    word: "Communication",
    hint: "The exchange of thoughts, feelings, and information between individuals",
  },
  {
    word: "Connection",
    hint: "A deep emotional or intellectual bond with someone",
  },
  { word: "Romantic", hint: "Expressing or involving love and affection" },
  {
    word: "Infatuation",
    hint: "Intense but short-lived passion or admiration for someone",
  },
  {
    word: "Longing",
    hint: "A strong desire or yearning for someone or something",
  },
  {
    word: "Crush",
    hint: "A brief but intense infatuation or attraction towards someone",
  },
  {
    word: "Fondness",
    hint: "A warm and affectionate liking for someone or something",
  },
  {
    word: "Kiss",
    hint: "A physical expression of love and affection through lip contact",
  },
  {
    word: "Hug",
    hint: "A tight embrace or cuddle expressing affection and comfort",
  },
  {
    word: "Romanticize",
    hint: "To idealize or make something appear more romantic or desirable",
  },
  { word: "Tender", hint: "Showing gentleness, kindness, and affection" },
  {
    word: "Cell",
    hint: "The basic structural and functional unit of all living organisms",
  },
  {
    word: "DNA",
    hint: "Deoxyribonucleic acid, a molecule that carries genetic information in cells",
  },
  {
    word: "Gene",
    hint: "A segment of DNA that contains the instructions for building a specific protein",
  },
  {
    word: "Chromosome",
    hint: "A thread-like structure made of DNA and proteins, carrying genetic information",
  },
  {
    word: "Mitochondria",
    hint: "Organelles responsible for generating energy in eukaryotic cells",
  },
  {
    word: "Nucleus",
    hint: "The central organelle of a cell, containing the genetic material",
  },
  {
    word: "Protein",
    hint: "A large biomolecule made up of amino acids, essential for the structure and function of cells",
  },
  {
    word: "Enzyme",
    hint: "A protein that speeds up chemical reactions in cells",
  },
  {
    word: "ATP",
    hint: "Adenosine triphosphate, a molecule used as the primary energy source in cells",
  },
  {
    word: "Photosynthesis",
    hint: "The process by which plants convert sunlight into chemical energy",
  },
  {
    word: "Respiration",
    hint: "The process by which cells break down glucose to release energy",
  },
  {
    word: "Evolution",
    hint: "The process of gradual change in species over time",
  },
  {
    word: "Mutation",
    hint: "A change in the DNA sequence of a gene, resulting in genetic variation",
  },
  {
    word: "Heredity",
    hint: "The passing of traits from parents to offspring through genetic information",
  },
  {
    word: "Adaptation",
    hint: "A characteristic or behavior that helps an organism survive and reproduce in its environment",
  },
  {
    word: "Ecology",
    hint: "The study of the interactions between organisms and their environment",
  },
  {
    word: "Food chain",
    hint: "A sequence of organisms where each is a source of energy for the next",
  },
  {
    word: "Ecosystem",
    hint: "A community of organisms and their physical environment, interacting as a system",
  },
  {
    word: "Hormone",
    hint: "A chemical messenger produced by glands that regulates various bodily functions",
  },
  {
    word: "Immunity",
    hint: "The ability of an organism to resist infection and disease",
  },
  {
    word: "Antibody",
    hint: "A protein produced by the immune system to recognize and neutralize foreign substances",
  },
  {
    word: "Virus",
    hint: "A microscopic infectious agent that replicates inside living cells",
  },
  {
    word: "Bacteria",
    hint: "Microscopic single-celled organisms, some of which can cause diseases",
  },
  {
    word: "Fungi",
    hint: "A kingdom of organisms that includes mushrooms, yeasts, and molds",
  },
  {
    word: "Protist",
    hint: "A diverse group of eukaryotic microorganisms, including amoebas and algae",
  },
  {
    word: "Reproduction",
    hint: "The process by which organisms produce offspring",
  },
  {
    word: "Sexual reproduction",
    hint: "Reproduction involving the fusion of gametes from two parents",
  },
  {
    word: "Asexual reproduction",
    hint: "Reproduction without the involvement of gametes or the union of parents",
  },
  {
    word: "Meiosis",
    hint: "Cell division that produces gametes with half the number of chromosomes",
  },

  {
    word: "Lion",
    hint: "The king of the jungle known for its majestic appearance and loud roar",
  },
  {
    word: "Elephant",
    hint: "A large mammal with a long trunk and tusks, known for its intelligence and memory",
  },
  {
    word: "Tiger",
    hint: "A large carnivorous feline with distinctive stripes",
  },
  {
    word: "Giraffe",
    hint: "A tall African mammal with a long neck and spotted coat",
  },
  {
    word: "Monkey",
    hint: "An intelligent and agile primate known for its ability to climb trees",
  },
  {
    word: "Kangaroo",
    hint: "A marsupial from Australia known for its powerful hind legs and pouch",
  },
  {
    word: "Penguin",
    hint: "A flightless bird that lives in cold regions and has a distinctive black and white plumage",
  },
  {
    word: "Dolphin",
    hint: "A highly intelligent marine mammal known for its playful behavior and echolocation abilities",
  },
  {
    word: "Ostrich",
    hint: "A large flightless bird with long legs and a long neck",
  },
  {
    word: "Crocodile",
    hint: "A large reptile with a long snout, sharp teeth, and a tough armored skin",
  },
  {
    word: "Gorilla",
    hint: "The largest species of primate known for its strength and living in family groups",
  },
  {
    word: "Koala",
    hint: "A small arboreal marsupial native to Australia, known for its cuddly appearance",
  },
  {
    word: "Horse",
    hint: "A large mammal with hooves, often domesticated and used for riding or pulling carts",
  },
  {
    word: "Dog",
    hint: "A domesticated carnivorous mammal, known for its loyalty and companionship to humans",
  },
  {
    word: "Cat",
    hint: "A small carnivorous mammal, often kept as a pet, known for its independence and agility",
  },
  {
    word: "Wolf",
    hint: "A carnivorous mammal that lives and hunts in packs, known for its social structure and howling",
  },
  {
    word: "Bear",
    hint: "A large mammal with a heavy build and shaggy fur, found in various habitats around the world",
  },
  {
    word: "Fox",
    hint: "A small carnivorous mammal with a bushy tail and a clever reputation",
  },
  {
    word: "Squirrel",
    hint: "A small arboreal rodent known for its bushy tail and hoarding behavior",
  },
  {
    word: "Rabbit",
    hint: "A small herbivorous mammal with long ears and a fluffy tail",
  },
  {
    word: "Deer",
    hint: "A graceful and agile herbivorous mammal, often with antlers on the males",
  },
  {
    word: "Eagle",
    hint: "A large bird of prey known for its keen eyesight and powerful flight",
  },
  {
    word: "Owl",
    hint: "A nocturnal bird of prey known for its silent flight and hooting sound",
  },
  {
    word: "Shark",
    hint: "A large predatory fish with a streamlined body and sharp teeth",
  },
  {
    word: "Turtle",
    hint: "A reptile with a bony or leathery shell, typically found in water",
  },
  {
    word: "Snake",
    hint: "A long, legless reptile that moves by slithering on the ground",
  },
  {
    word: "Butterfly",
    hint: "An insect with colorful wings and a slender body, known for its fluttering flight",
  },
  {
    word: "Bee",
    hint: "A flying insect known for its role in pollination and producing honey",
  },
  {
    word: "Ant",
    hint: "A small social insect that lives in colonies and is known for its teamwork",
  },

  {
    word: "Goal",
    hint: "When the ball crosses the goal line between the goalposts and beneath the crossbar",
  },
  {
    word: "Corner Kick",
    hint: "A set-piece taken from the corner of the field by the attacking team",
  },
  {
    word: "Penalty Kick",
    hint: "A free kick taken from the penalty spot, awarded for a foul committed inside the penalty area",
  },
  {
    word: "Offside",
    hint: "A player is in an offside position if they are nearer to the opponent's goal line than both the ball and the second-to-last defender when the ball is played to them",
  },
  {
    word: "Yellow Card",
    hint: "A cautionary card shown by the referee to a player as a warning for a minor offense",
  },
  {
    word: "Red Card",
    hint: "An expulsion card shown by the referee to a player for a serious offense, resulting in the player being sent off the field",
  },
  {
    word: "Free Kick",
    hint: "A direct or indirect kick awarded to a team due to a foul committed by the opposing team",
  },
  {
    word: "Throw-in",
    hint: "A method of restarting play when the ball goes out of bounds over the sidelines",
  },
  {
    word: "Dribble",
    hint: "Moving the ball along the ground while maintaining control with short taps or touches",
  },
  {
    word: "Pass",
    hint: "A deliberate transfer of the ball from one player to another",
  },
  { word: "Header", hint: "Using the head to strike the ball" },
  {
    word: "Tackle",
    hint: "A defensive move to dispossess an opponent of the ball",
  },
  {
    word: "Foul",
    hint: "A violation of the rules committed by a player, resulting in a free kick or penalty",
  },
  { word: "Cross", hint: "A pass played into the penalty area from out wide" },
  {
    word: "Save",
    hint: "A goalkeeper's act of preventing the ball from entering the goal",
  },
  {
    word: "Penalty Shootout",
    hint: "A tiebreaker method used to determine the winner of a match that ends in a draw after regulation time and extra time",
  },
  {
    word: "Goalkeeper",
    hint: "The player positioned in front of the goal to prevent the opposing team from scoring",
  },
  {
    word: "Midfielder",
    hint: "A player positioned in the middle of the field who primarily focuses on distributing the ball and transitioning between defense and attack",
  },
  {
    word: "Striker",
    hint: "An offensive player whose primary role is to score goals",
  },
  {
    word: "Defender",
    hint: "A player positioned primarily to prevent the opposing team from scoring",
  },
  {
    word: "Captain",
    hint: "The designated leader of a team, often responsible for communication with the referee and making decisions on the field",
  },
  {
    word: "Substitution",
    hint: "The act of replacing a player on the field with a substitute player",
  },
  {
    word: "Injury Time",
    hint: "Additional time added to the end of each half to compensate for time lost due to injuries and other stoppages",
  },
  {
    word: "Half-time",
    hint: "The break between the first and second halves of a match",
  },
  {
    word: "Extra Time",
    hint: "Additional playing time added to a match if the score is tied at the end of regulation time",
  },
  {
    word: "Referee",
    hint: "The official who enforces the rules of the game and makes decisions on fouls, cards, and other infractions",
  },
  {
    word: "Assistant Referee",
    hint: "The official positioned along the sidelines to assist the referee in making decisions, particularly in relation to offside",
  },
  {
    word: "Goal Line",
    hint: "The boundary line between the goalposts, extending vertically above the ground",
  },
  {
    word: "Crossbar",
    hint: "The horizontal bar that connects the goalposts at the top",
  },
  {
    word: "Stadium",
    hint: "The venue where football matches are played, typically equipped with seating for spectators",
  },
  {
    word: "League",
    hint: "A competition in which a number of teams play against each other over a specified period to determine a champion",
  },
  {
    word: "Cup",
    hint: "A knockout competition played among multiple teams, typically resulting in a champion",
  },
  {
    word: "Final",
    hint: "The last match of a competition, determining the ultimate winner",
  },
  {
    word: "Manager",
    hint: "The person in charge of overseeing a team's training, tactics, and player selection",
  },
  {
    word: "FIFA",
    hint: "Fédération Internationale de Football Association, the governing body of international football",
  },
  {
    word: "Referee's Whistle",
    hint: "The whistle blown by the referee to signal the start, stop, or restart of play",
  },
  {
    word: "Wall",
    hint: "A group of defending players who stand close together, forming a barrier to block a free kick or penalty kick",
  },
  {
    word: "Curl",
    hint: "A technique used to make the ball deviate from a straight path by imparting spin",
  },
  {
    word: "Injury",
    hint: "Physical harm or damage that prevents a player from participating in a match",
  },
  {
    word: "Passing Accuracy",
    hint: "The percentage of successful passes a player makes",
  },
  {
    word: "Counterattack",
    hint: "A quick offensive move by a team to take advantage of an opponent's vulnerable defensive position",
  },
  {
    word: "Penalty Area",
    hint: "The rectangular area in front of the goal where certain fouls committed by the defending team result in a penalty kick",
  },
  {
    word: "Cautions",
    hint: "Yellow cards shown to players as a warning for unsporting behavior or other offenses",
  },
  {
    word: "Injury Prevention",
    hint: "Measures taken to minimize the risk of player injuries during a match or training",
  },
  {
    word: "Nutmeg",
    hint: "A skill move in which the ball is played through the legs of an opponent",
  },
  {
    word: "Pitch",
    hint: "The playing surface where football matches are held, typically made of grass or artificial turf",
  },
  {
    word: "Shirt Number",
    hint: "The number worn on a player's jersey, typically used for identification",
  },
  {
    word: "Yellow-Red Card",
    hint: "A card shown to a player who has already received a yellow card, resulting in their expulsion from the match",
  },
  {
    word: "Defensive Line",
    hint: "The line formed by the defenders to protect their goal",
  },
  {
    word: "Attacking",
    hint: "The act of mounting an offensive play in order to score a goal",
  },
  {
    word: "Clearance",
    hint: "A defensive move to kick or head the ball away from the vicinity of the goal",
  },
  {
    word: "Barcelona",
    hint: "Spanish football club known for its tiki-taka style",
  },
  {
    word: "Real Madrid",
    hint: "Spanish football club with a rich history and numerous Champions League titles",
  },
  {
    word: "Manchester United",
    hint: "English football club with a strong fan base and successful history",
  },
  {
    word: "Bayern Munich",
    hint: "German football club that dominates the Bundesliga",
  },
  {
    word: "Liverpool",
    hint: "English football club known for its passionate fan base and successful European campaigns",
  },
  {
    word: "Juventus",
    hint: "Italian football club with a string of Serie A titles",
  },
  {
    word: "Paris Saint-Germain",
    hint: "French football club backed by Qatari ownership and known for its star-studded squad",
  },
  {
    word: "Manchester City",
    hint: "English football club that has risen to prominence in recent years",
  },

  {
    word: "River Plate",
    hint: "Argentinian football club with a strong rivalry with Boca Juniors",
  },
  { word: "Flamengo", hint: "Brazilian football club with a large fan base" },
  {
    word: "Santos",
    hint: "Brazilian football club known for producing legendary player Pelé",
  },
  { word: "Celtic", hint: "Scottish football club with a passionate fan base" },
  {
    word: "Rangers",
    hint: "Scottish football club with a strong rivalry with Celtic",
  },
  {
    word: "Galatasaray",
    hint: "Turkish football club with a passionate fan base",
  },
  {
    word: "Fenerbahce",
    hint: "Turkish football club based in Istanbul with a strong following",
  },
  {
    word: "Lionel Messi",
    hint: "Argentine forward who spent most of his career at Barcelona",
  },
  {
    word: "Cristiano Ronaldo",
    hint: "Portuguese forward known for his incredible goal-scoring record",
  },
  {
    word: "Neymar Jr.",
    hint: "Brazilian forward who played for Barcelona and now represents Paris Saint-Germain",
  },
  {
    word: "Robert Lewandowski",
    hint: "Polish striker who plays for Bayern Munich and holds numerous goal-scoring records",
  },
  {
    word: "Mohamed Salah",
    hint: "Egyptian forward who plays for Liverpool and has been instrumental in their recent success",
  },
  {
    word: "Kylian Mbappé",
    hint: "French forward who plays for Paris Saint-Germain and is known for his speed and skill",
  },
  {
    word: "Kevin De Bruyne",
    hint: "Belgian midfielder who plays for Manchester City and is known for his passing ability",
  },
  {
    word: "N'Golo Kanté",
    hint: "French midfielder who has been a key player for both Chelsea and the French national team",
  },
  {
    word: "Virgil van Dijk",
    hint: "Dutch defender who plays for Liverpool and is considered one of the best center-backs in the world",
  },
  {
    word: "Manuel Neuer",
    hint: "German goalkeeper who has been a stalwart for Bayern Munich and the German national team",
  },

  {
    word: "Sergio Ramos",
    hint: "Spanish defender who was the long-time captain of Real Madrid",
  },
  {
    word: "Harry Kane",
    hint: "English striker who plays for Tottenham Hotspur and the England national team",
  },
  {
    word: "Antoine Griezmann",
    hint: "French forward known for his technical skills and playing for Barcelona",
  },
  {
    word: "Eden Hazard",
    hint: "Belgian winger who currently plays for Real Madrid",
  },
  {
    word: "Sadio Mané",
    hint: "Senegalese forward who plays for Liverpool and is known for his pace and goal-scoring ability",
  },
  {
    word: "Paul Pogba",
    hint: "French midfielder who plays for Manchester United and the French national team",
  },
  {
    word: "Gareth Bale",
    hint: "Welsh winger who has played for Real Madrid and Tottenham Hotspur",
  },
  {
    word: "Erling Haaland",
    hint: "Norwegian striker who currently plays for Borussia Dortmund",
  },
  {
    word: "Romelu Lukaku",
    hint: "Belgian forward who plays for Chelsea and the Belgian national team",
  },
  {
    word: "Son Heung-min",
    hint: "South Korean forward who plays for Tottenham Hotspur",
  },
];
var correctWord, timer;

const showTimeUpNotification = () => {
  Toastify({
    text: `Time's up! The correct word is ${correctWord.toUpperCase()}.`,
    duration: 5000,
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

