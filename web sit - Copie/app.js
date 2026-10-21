const lessons = [
  {
    title: "Your first Python line",
    subtitle: "Meet print() and make Python speak.",
    questions: [
      { prompt: "Which line prints Hello, world! to the screen?", hint: "Choose the Python code that displays the words.", code: "", options: ["print(\"Hello, world!\")", "echo(\"Hello, world!\")", "show \"Hello, world!\""], answer: 0, explain: "print() displays whatever you put inside its parentheses." },
      { prompt: "What will this code show?", hint: "Read the text inside the quotation marks.", code: "print(\"Hi, coder!\")", options: ["Hi, coder!", "print Hi, coder!", "Nothing"], answer: 0, explain: "Python prints the text inside the quotes, without the quotes." },
      { prompt: "Fill in the blank to display Python!", hint: "The function name goes before the parentheses.", code: "_____ (\"Python!\")", options: ["print", "say", "write"], answer: 0, explain: "You have it. print() is Python's simple way to show a message." }
    ]
  },
  {
    title: "Words and strings",
    subtitle: "Give text a home between quotes.",
    questions: [
      { prompt: "Which one is a string in Python?", hint: "A string is text wrapped in quotes.", code: "", options: ["\"blue sky\"", "blue sky", "42"], answer: 0, explain: "Quotes tell Python that blue sky is text, also called a string." },
      { prompt: "What does this print?", hint: "The quotation marks are not included in the output.", code: "print('good morning')", options: ["good morning", "'good morning'", "Error"], answer: 0, explain: "Single quotes work too. Python prints the words without their quotes." },
      { prompt: "Pick the valid Python string.", hint: "The opening and closing quotes should match.", code: "", options: ["'hello'", "'hello\"", "hello'"], answer: 0, explain: "Matching quotes wrap the text and make a valid string." }
    ]
  },
  {
    title: "Meet your variables",
    subtitle: "Save a value and use it again.",
    questions: [
      { prompt: "Which line saves 7 in a variable named score?", hint: "Python uses one simple symbol to assign a value.", code: "", options: ["score = 7", "7 = score", "score == 7"], answer: 0, explain: "The equals sign assigns the value on the right to the name on the left." },
      { prompt: "What will this code print?", hint: "First find the value stored in name.", code: "name = \"Mina\"\nprint(name)", options: ["Mina", "name", "\"Mina\""], answer: 0, explain: "Python looks up the value stored in name, then prints it." },
      { prompt: "Choose the best variable name for a user's age.", hint: "Pick a clear name that follows Python style.", code: "", options: ["user_age", "user-age", "age!"], answer: 0, explain: "user_age is clear, and underscores are a common way to join words in Python names." }
    ]
  },
  {
    title: "Numbers that add up",
    subtitle: "Use Python as your pocket calculator.",
    questions: [
      { prompt: "What does 8 + 5 evaluate to?", hint: "Python can do arithmetic directly.", code: "", options: ["13", "85", "3"], answer: 0, explain: "The plus sign adds numbers: 8 + 5 is 13." },
      { prompt: "What does this print?", hint: "Multiply before you read the result.", code: "print(3 * 4)", options: ["12", "34", "7"], answer: 0, explain: "In Python, * means multiplication, so 3 times 4 is 12." },
      { prompt: "Which symbol means division in Python?", hint: "Look for the forward slash.", code: "", options: ["/", "÷", "%"], answer: 0, explain: "Python uses / for division. Nice work finishing your first unit!" }
    ]
  },
  {
    title: "Leave a note",
    subtitle: "Use comments to explain your code.",
    questions: [
      { prompt: "Which symbol starts a Python comment?", hint: "Comments begin with a small mark before the note.", code: "", options: ["#", "//", "--"], answer: 0, explain: "Python ignores everything after # on that line. It's a note for people reading your code." },
      { prompt: "What does this code print?", hint: "Python skips the comment and runs print().", code: "# Say hello\nprint(\"Hi!\")", options: ["Hi!", "Say hello", "Nothing"], answer: 0, explain: "The comment is skipped, and print() displays Hi!." },
      { prompt: "Which is a useful comment?", hint: "A good comment explains why code is there.", code: "", options: ["# Keep the user's name for later", "# Set name to name", "# This is a line"], answer: 0, explain: "Useful comments explain intent or context that isn't obvious from the code." }
    ]
  },
  {
    title: "True or false",
    subtitle: "Meet Python's yes-or-no values.",
    questions: [
      { prompt: "Which value means yes in Python?", hint: "Python spells it with a capital first letter.", code: "", options: ["True", "true", "YES"], answer: 0, explain: "Python's Boolean values are True and False, both with capital first letters." },
      { prompt: "What is the result of 4 > 2?", hint: "The left number is larger than the right one.", code: "", options: ["True", "False", "4"], answer: 0, explain: "Four is greater than two, so the comparison evaluates to True." },
      { prompt: "Which value means no in Python?", hint: "It pairs with True as the other Boolean value.", code: "", options: ["False", "false", "None"], answer: 0, explain: "False is Python's Boolean value for no." }
    ]
  },
  {
    title: "Make a decision",
    subtitle: "Let if statements choose what happens.",
    questions: [
      { prompt: "What will this code print?", hint: "30 is greater than 25, so the condition is true.", code: "temperature = 30\nif temperature > 25:\n    print(\"Warm\")", options: ["Warm", "temperature", "Nothing"], answer: 0, explain: "The condition is true, so Python runs the indented print() line." },
      { prompt: "Which keyword adds an alternative branch?", hint: "Use this when the if condition is false.", code: "", options: ["else", "other", "then"], answer: 0, explain: "else runs when the if condition isn't true." },
      { prompt: "What does == check?", hint: "It compares two values without assigning one.", code: "", options: ["Whether two values are equal", "Whether a value is assigned", "Whether values are added"], answer: 0, explain: "== compares values. A single = assigns a value to a variable." }
    ]
  },
  {
    title: "Repeat with loops",
    subtitle: "Let Python repeat a task for you.",
    questions: [
      { prompt: "How many times does this loop run?", hint: "range(3) gives three numbers: 0, 1, and 2.", code: "for number in range(3):\n    print(number)", options: ["3 times", "2 times", "4 times"], answer: 0, explain: "range(3) produces three values, so the loop runs three times." },
      { prompt: "What does this loop print first?", hint: "A range starting at 0 begins with 0.", code: "for number in range(2):\n    print(number)", options: ["0", "1", "2"], answer: 0, explain: "By default range starts at 0, so the first value is 0." },
      { prompt: "Which keyword starts a for loop?", hint: "It appears at the start of the loop line.", code: "", options: ["for", "repeat", "each"], answer: 0, explain: "for starts a loop that runs once for each item or value." }
    ]
  },
  {
    title: "Keep a list",
    subtitle: "Store a collection of values together.",
    questions: [
      { prompt: "Which one is a Python list?", hint: "Lists use square brackets.", code: "", options: ["[4, 7, 9]", "(4, 7, 9)", "{4, 7, 9}"], answer: 0, explain: "Square brackets make a list in Python." },
      { prompt: "What is the first item in this list?", hint: "Python list positions start counting at zero.", code: "colors = [\"blue\", \"green\"]\nprint(colors[0])", options: ["blue", "green", "0"], answer: 0, explain: "Index 0 means the first item, which is blue." },
      { prompt: "Which method adds an item to the end of a list?", hint: "It reads like adding an item to the end.", code: "", options: ["append()", "add_end()", "insert_last()"], answer: 0, explain: "append() adds one item to the end of a list." }
    ]
  },
  {
    title: "Write a function",
    subtitle: "Bundle instructions you can reuse.",
    questions: [
      { prompt: "Which keyword defines a function?", hint: "It comes before the function's name.", code: "", options: ["def", "func", "make"], answer: 0, explain: "def introduces a function definition in Python." },
      { prompt: "What does this function print?", hint: "The function receives Sam as the name argument.", code: "def greet(name):\n    print(\"Hi\", name)\ngreet(\"Sam\")", options: ["Hi Sam", "name", "Hi name"], answer: 0, explain: "The call passes Sam into name, and the function prints Hi Sam." },
      { prompt: "What do parentheses hold when calling a function?", hint: "They can hold values the function needs.", code: "", options: ["Arguments", "Comments", "Indentation"], answer: 0, explain: "Arguments are the values passed into a function call." }
    ]
  },
  {
    title: "Label your data",
    subtitle: "Use dictionaries to pair names and values.",
    questions: [
      { prompt: "What does this code print?", hint: "Use the key name to look up its matching value.", code: "pet = {\"name\": \"Milo\", \"age\": 3}\nprint(pet[\"name\"])", options: ["Milo", "name", "3"], answer: 0, explain: "The name key maps to the value Milo." },
      { prompt: "What does a dictionary store?", hint: "Think of a label paired with its value.", code: "", options: ["Key-value pairs", "Only ordered numbers", "Python comments"], answer: 0, explain: "A dictionary stores values under keys, so you can look them up by name." },
      { prompt: "Which brackets are used to create a dictionary?", hint: "They look like curly braces.", code: "", options: ["{}", "[]", "()"], answer: 0, explain: "Curly braces create a dictionary literal in Python." }
    ]
  },
  {
    title: "Mini project: pet card",
    subtitle: "Bring your Python building blocks together.",
    questions: [
      { prompt: "What does this small program print?", hint: "Look up the name in the pet dictionary.", code: "pet = {\"name\": \"Milo\"}\nprint(\"Hello\", pet[\"name\"])", options: ["Hello Milo", "Hello name", "Milo Hello"], answer: 0, explain: "The dictionary provides Milo, and print() displays both values in order." },
      { prompt: "Which line adds a new trick to this list?", hint: "Use the list method that adds an item at the end.", code: "tricks = [\"sit\"]", options: ["tricks.append(\"stay\")", "tricks = append(\"stay\")", "tricks.add_end(\"stay\")"], answer: 0, explain: "append() adds stay to the end of the tricks list." },
      { prompt: "What is the best way to show a saved pet name?", hint: "Use the dictionary's name key inside print().", code: "pet = {\"name\": \"Milo\"}", options: ["print(pet[\"name\"])", "print(\"name\")", "show pet.name"], answer: 0, explain: "You combined dictionaries and print() to use a saved value. That's a real Python building block." }
    ]
  },
  {
    title: "Catch a mistake",
    subtitle: "Handle errors without stopping your program.",
    questions: [
      { prompt: "Which keyword handles an error in Python?", hint: "It follows a try block.", code: "", options: ["except", "catch", "error"], answer: 0, explain: "except runs when the matching error happens inside a try block." },
      { prompt: "What does this program print?", hint: "Dividing by zero raises an error handled below.", code: "try:\n    print(8 / 0)\nexcept ZeroDivisionError:\n    print(\"Try another number\")", options: ["Try another number", "0", "Nothing"], answer: 0, explain: "The division raises ZeroDivisionError, so Python runs the except block." },
      { prompt: "Where should code that might fail go?", hint: "Put it in the protected block.", code: "", options: ["Inside try", "Inside except", "After return"], answer: 0, explain: "The try block contains code that may raise an error." }
    ]
  },
  {
    title: "Read a file",
    subtitle: "Load text from a file with confidence.",
    questions: [
      { prompt: "What does this code do?", hint: "The with statement opens the file safely.", code: "with open(\"notes.txt\") as file:\n    notes = file.read()", options: ["Reads notes.txt into notes", "Deletes notes.txt", "Creates a Python function"], answer: 0, explain: "open() reads the file, and read() returns its contents as text." },
      { prompt: "Why use with open(...) when working with files?", hint: "Think about what should happen when you're finished.", code: "", options: ["It closes the file automatically", "It renames the file", "It makes the file a list"], answer: 0, explain: "The with statement closes the file automatically after its block finishes." },
      { prompt: "Which mode is used to write a new file?", hint: "The mode is a short string passed to open().", code: "", options: ["\"w\"", "\"r\"", "\"x\""], answer: 0, explain: "The w mode opens a file for writing, creating it if needed." }
    ]
  },
  {
    title: "Borrow a module",
    subtitle: "Use Python's built-in tools with import.",
    questions: [
      { prompt: "Which line imports Python's random module?", hint: "The keyword is the same word used for bringing code in.", code: "", options: ["import random", "include random", "use random"], answer: 0, explain: "import makes a module's tools available to your program." },
      { prompt: "What does random.choice(colors) do?", hint: "It picks one value from the collection.", code: "import random\ncolors = [\"red\", \"blue\"]", options: ["Picks one color at random", "Sorts the colors", "Counts the colors"], answer: 0, explain: "random.choice() returns one randomly selected item from a sequence." },
      { prompt: "How do you call the sqrt function from math?", hint: "Use the module name, a dot, and then the function name.", code: "import math", options: ["math.sqrt(25)", "sqrt.math(25)", "math->sqrt(25)"], answer: 0, explain: "Use the module name followed by a dot and the function name." }
    ]
  },
  {
    title: "Mini project: reading log",
    subtitle: "Save book notes and handle missing files.",
    questions: [
      { prompt: "Which line adds a book title to a list?", hint: "Use the method that adds to the end.", code: "books = [\"Python Basics\"]", options: ["books.append(\"Small Programs\")", "append.books(\"Small Programs\")", "books.add(\"Small Programs\")"], answer: 0, explain: "append() adds the new title to the end of the books list." },
      { prompt: "Which error should you handle if a file doesn't exist?", hint: "Python names this error for the missing file.", code: "", options: ["FileNotFoundError", "MissingFile", "NoFileError"], answer: 0, explain: "FileNotFoundError is raised when Python cannot find the requested file." },
      { prompt: "Which block handles a missing reading-log file?", hint: "Place recovery code after the try block.", code: "try:\n    file = open(\"reading.txt\")", options: ["except FileNotFoundError:", "else FileNotFoundError:", "catch FileNotFoundError:"], answer: 0, explain: "An except FileNotFoundError block can create an empty log or show a helpful message." }
    ]
  },
  {
    title: "Create a class",
    subtitle: "Describe your own kind of object.",
    questions: [
      { prompt: "Which keyword creates a class?", hint: "It starts a class definition line.", code: "", options: ["class", "object", "define"], answer: 0, explain: "class defines a new kind of object in Python." },
      { prompt: "What is a Dog in this example?", hint: "The class describes the kind; the instance is one particular dog.", code: "class Dog:\n    pass\npet = Dog()", options: ["An instance of Dog", "A function", "A module"], answer: 0, explain: "Calling Dog() creates an instance, here stored in pet." },
      { prompt: "What do classes help organize?", hint: "They group related data and behavior together.", code: "", options: ["Data and behavior", "Only comments", "Only imports"], answer: 0, explain: "Classes bundle related data and behavior into objects." }
    ]
  },
  {
    title: "Set up new objects",
    subtitle: "Give each object its starting values.",
    questions: [
      { prompt: "Which method initializes a new object?", hint: "Python calls this special method when you create an instance.", code: "", options: ["__init__", "__start__", "__newname__"], answer: 0, explain: "Python calls __init__ after an instance is created so it can be initialized." },
      { prompt: "What does self refer to?", hint: "It refers to the particular object using the method.", code: "class Pet:\n    def __init__(self, name):\n        self.name = name", options: ["The current instance", "The class file", "A Python keyword for loops"], answer: 0, explain: "self refers to the current instance, so its name can be stored on it." },
      { prompt: "What is stored in pet.name?", hint: "Follow the value passed when the object is created.", code: "pet = Pet(\"Milo\")", options: ["Milo", "Pet", "name"], answer: 0, explain: "The constructor receives Milo and stores it as this object's name." }
    ]
  },
  {
    title: "Add object methods",
    subtitle: "Give your objects actions they can perform.",
    questions: [
      { prompt: "Where is a class method defined?", hint: "It is indented beneath the class definition.", code: "", options: ["Inside the class", "Only at the end of a file", "Inside an import"], answer: 0, explain: "A method is a function defined inside a class." },
      { prompt: "What will this call print?", hint: "self.name refers to the name saved on the object.", code: "class Pet:\n    def speak(self):\n        print(\"Hi, I'm\", self.name)\n\npet.speak()", options: ["Hi, I'm Milo", "self.name", "speak"], answer: 0, explain: "The method uses the current pet's name when it prints." },
      { prompt: "How do you call a method on pet?", hint: "Start with the object name and use a dot.", code: "", options: ["pet.speak()", "speak.pet()", "Pet->speak()"], answer: 0, explain: "Use the instance name, a dot, and the method call." }
    ]
  },
  {
    title: "Mini project: quiz cards",
    subtitle: "Model quiz questions as reusable objects.",
    questions: [
      { prompt: "Which data belongs on a Question object?", hint: "Store the information needed to ask and check a question.", code: "", options: ["Prompt and answer", "Only the screen color", "The Python version"], answer: 0, explain: "A Question object can store its prompt and correct answer together." },
      { prompt: "What should check_answer compare?", hint: "Compare what the learner typed with the saved answer.", code: "", options: ["The learner's response and the correct answer", "Two question titles", "The class and its file"], answer: 0, explain: "A quiz checks whether the learner's response matches the saved correct answer." },
      { prompt: "Why make a Question class?", hint: "Think about creating many questions with the same structure.", code: "", options: ["Reuse one structure for many questions", "Make every question a different program", "Avoid storing answers"], answer: 0, explain: "A class lets you create many question objects that share one clear structure." }
    ]
  }
];

const levels = [
  { title: "First steps", start: 0, end: 4 },
  { title: "Python building blocks", start: 4, end: 8 },
  { title: "Write real programs", start: 8, end: 12 },
  { title: "Build with Python", start: 12, end: 16 },
  { title: "Design with objects", start: 16, end: 20 }
];

const defaultState = { completed: [], xp: 0, hearts: 5, streak: 0, lastStudyDate: "", lastHeartDate: "", skillLevel: null };
let currentUser = null;
let state = loadGuestState();
let currentLesson = 0;
let questionIndex = 0;
let selectedAnswer = null;
let answered = false;
let sessionCorrect = 0;

const pathElement = document.querySelector("#lesson-path");
const overlay = document.querySelector("#lesson-overlay");
const onboardingOverlay = document.querySelector("#onboarding-overlay");
const lessonContent = document.querySelector("#lesson-content");
const checkButton = document.querySelector("#check-answer");
const onboardingContinue = document.querySelector("#onboarding-continue");
const authOverlay = document.querySelector("#auth-overlay");
const authForm = document.querySelector("#auth-form");
const authMessage = document.querySelector("#auth-message");
let authMode = "sign-in";

function loadGuestState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem("pypath-progress") || "{}") };
  } catch {
    return { ...defaultState };
  }
}

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function daysBetween(firstDate, secondDate) {
  const toUtc = value => {
    const [year, month, day] = value.split("-").map(Number);
    return Date.UTC(year, month - 1, day);
  };
  return Math.round((toUtc(secondDate) - toUtc(firstDate)) / 86_400_000);
}

function refillHeartsForNewDay() {
  const today = dateKey();
  if (!state.lastHeartDate) {
    state.lastHeartDate = today;
    return true;
  }
  if (daysBetween(state.lastHeartDate, today) > 0) {
    state.hearts = 5;
    state.lastHeartDate = today;
    return true;
  }
  return false;
}

function saveState() {
  if (!currentUser) {
    localStorage.setItem("pypath-progress", JSON.stringify(state));
    return Promise.resolve();
  }
  return fetch("/api/progress", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state)
  }).then(response => {
    if (!response.ok) throw new Error("Could not save your account progress.");
  }).catch(error => {
    console.error(error);
    authMessage.textContent = "Your progress could not be saved. Check that the ByteSprig server is running.";
  });
}

function render() {
  document.querySelector("#learner-name").textContent = currentUser?.name || "Guest learner";
  document.querySelector("#profile-avatar").textContent = (currentUser?.name || "G").trim().charAt(0).toUpperCase();
  document.querySelector("#profile-level").textContent = state.skillLevel || "Choose your level";
  document.querySelector("#xp-count").textContent = state.xp;
  document.querySelector("#heart-count").textContent = state.hearts;
  document.querySelector("#streak-count").textContent = state.streak;
  document.querySelector("#level-number").textContent = String(Math.floor(state.xp / 100) + 1).padStart(2, "0");
  document.querySelector("#account-actions").classList.toggle("hidden", Boolean(currentUser));
  document.querySelector("#signed-in-actions").classList.toggle("hidden", !currentUser);
  document.querySelector("#signed-in-label").textContent = currentUser?.email || "";
  document.querySelector("#admin-nav").classList.toggle("hidden", currentUser?.role !== "admin");

  const nextIndex = Math.min(state.completed.length, lessons.length - 1);
  document.querySelector("#next-lesson-title").textContent = state.completed.length >= lessons.length ? "All caught up!" : lessons[nextIndex].title;
  document.querySelector("#next-lesson-description").textContent = state.completed.length >= lessons.length ? "You've completed this unit. Brilliant work." : lessons[nextIndex].subtitle;
  document.querySelector("#continue-button").disabled = state.completed.length >= lessons.length || state.hearts <= 0;

  pathElement.replaceChildren();
  levels.forEach((level, levelIndex) => {
    const unit = document.createElement("section");
    const locked = state.completed.length < level.start;
    const unitCompleted = state.completed.length >= level.end;
    const completedInUnit = state.completed.filter(index => index >= level.start && index < level.end).length;
    unit.className = `path-unit${locked ? " locked" : ""}`;
    unit.setAttribute("aria-label", `Level ${levelIndex + 1}: ${level.title}`);

    const heading = document.createElement("div");
    heading.className = "path-heading";
    const titleBlock = document.createElement("div");
    titleBlock.innerHTML = `<span class="unit-kicker">LEVEL ${String(levelIndex + 1).padStart(2, "0")}${locked ? " · LOCKED" : ""}</span><h2>${level.title}</h2>`;
    const progress = document.createElement("div");
    progress.className = "unit-progress";
    progress.innerHTML = `<span>${unitCompleted ? "Complete" : `${completedInUnit} of ${level.end - level.start} lessons`}</span><span class="progress-track"><span style="width: ${(completedInUnit / (level.end - level.start)) * 100}%"></span></span>`;
    heading.append(titleBlock, progress);

    const nodes = document.createElement("div");
    nodes.className = "unit-path-nodes";
    for (let index = level.start; index < level.end; index += 1) {
      if (index > level.start) {
        const connector = document.createElement("span");
        connector.className = "path-connector";
        connector.setAttribute("aria-hidden", "true");
        nodes.append(connector);
      }
      const lesson = lessons[index];
      const row = document.createElement("div");
      row.className = "path-node-row";
      const node = document.createElement("button");
      const completed = state.completed.includes(index);
      const onPath = completed || index === state.completed.length;
      const available = onPath && state.hearts > 0;
      node.className = `lesson-node${completed ? " completed" : ""}${available && !completed ? " available current" : ""}`;
      node.type = "button";
      node.disabled = !available;
      node.setAttribute("aria-label", `${lesson.title}${available ? " - start lesson" : " - locked"}`);
      node.innerHTML = completed ? "✓" : available ? "▶" : '<span class="node-lock">⌑</span>';
      if (available) node.addEventListener("click", () => startLesson(index));
      const label = document.createElement("div");
      label.className = "node-label";
      const lessonStatus = completed ? "Completed" : state.hearts <= 0 ? "Hearts refill tomorrow" : available ? "3 quick questions · 5 min" : "Complete the lesson before this one";
      label.innerHTML = `<strong>${lesson.title}</strong><span>${lessonStatus}</span>`;
      row.append(node, label);
      nodes.append(row);
    }
    unit.append(heading, nodes);
    pathElement.append(unit);
  });

  renderAchievements();
}

function renderAchievements() {
  const badges = [
    { name: "First line", detail: "Complete your first lesson", icon: "⌘", earned: state.completed.length >= 1 },
    { name: "First steps", detail: "Complete Level 1", icon: "Aa", earned: state.completed.length >= 4 },
    { name: "Builder", detail: "Complete Level 2", icon: "＝", earned: state.completed.length >= 8 },
    { name: "Python explorer", detail: "Complete Level 3", icon: "✳", earned: state.completed.length >= 12 },
    { name: "Problem solver", detail: "Complete Level 4", icon: "⌁", earned: state.completed.length >= 16 },
    { name: "Object designer", detail: "Complete all 20 lessons", icon: "◇", earned: state.completed.length >= 20 }
  ];
  document.querySelector("#achievement-count").textContent = `${badges.filter(badge => badge.earned).length} of ${badges.length} badges earned`;
  document.querySelector("#achievement-xp").textContent = state.xp;
  const grid = document.querySelector("#badge-grid");
  grid.replaceChildren();
  badges.forEach(badge => {
    const item = document.createElement("article");
    item.className = `badge-item${badge.earned ? "" : " locked"}`;
    item.innerHTML = `<span class="badge-symbol">${badge.icon}</span><div><strong>${badge.name}</strong><p>${badge.earned ? "Badge earned" : badge.detail}</p></div>`;
    grid.append(item);
  });
}

async function loadAdminUsers() {
  const count = document.querySelector("#admin-user-count");
  const activeCount = document.querySelector("#admin-active-count");
  const rows = document.querySelector("#admin-user-rows");
  const message = document.querySelector("#admin-message");
  count.textContent = "Loading learners";
  message.textContent = "";
  rows.replaceChildren();
  try {
    const response = await fetch("/api/admin/users");
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Could not load learner accounts.");
    count.textContent = result.totalUsers.toLocaleString();
    activeCount.textContent = result.recentSignIns.toLocaleString();
    result.users.forEach(user => {
      const row = document.createElement("tr");
      const learner = document.createElement("td");
      const learnerName = document.createElement("strong");
      learnerName.textContent = user.name;
      const email = document.createElement("span");
      email.textContent = user.email;
      learner.append(learnerName, email);
      const role = document.createElement("td");
      role.textContent = user.role === "admin" ? "Administrator" : "Learner";
      const lessonCount = document.createElement("td");
      lessonCount.textContent = `${user.completed} / ${lessons.length}`;
      const xp = document.createElement("td");
      xp.textContent = user.xp.toLocaleString();
      const lastLogin = document.createElement("td");
      lastLogin.textContent = user.lastLoginAt ? new Date(user.lastLoginAt * 1000).toLocaleString() : "Never";
      row.append(learner, role, lessonCount, xp, lastLogin);
      rows.append(row);
    });
  } catch (error) {
    count.textContent = "Learner list unavailable";
    activeCount.textContent = "—";
    message.textContent = error.message;
  }
}

function formatUptime(totalSeconds) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (days) return `${days}d ${hours}h`;
  if (hours) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function formatBytes(bytes) {
  if (bytes === null) return "Provider-managed";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function loadAdminSystem() {
  const message = document.querySelector("#admin-message");
  try {
    const response = await fetch("/api/admin/system");
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Could not load hosting status.");
    document.querySelector("#hosting-deployment").textContent = result.deployment;
    document.querySelector("#hosting-runtime").textContent = result.runtime;
    document.querySelector("#hosting-database").textContent = result.database;
    const databaseStatus = document.querySelector("#hosting-database-status");
    databaseStatus.textContent = result.databaseStatus;
    databaseStatus.classList.toggle("status-error", result.databaseStatus !== "Connected");
    document.querySelector("#hosting-uptime").textContent = formatUptime(result.uptimeSeconds);
    document.querySelector("#hosting-storage").textContent = formatBytes(result.storageBytes);
  } catch (error) {
    for (const id of ["hosting-deployment", "hosting-runtime", "hosting-database", "hosting-database-status", "hosting-uptime", "hosting-storage"]) {
      document.querySelector(`#${id}`).textContent = "Unavailable";
    }
    message.textContent = error.message;
  }
}

function refreshAdmin() {
  return Promise.all([loadAdminUsers(), loadAdminSystem()]);
}

function startLesson(index) {
  currentLesson = index;
  questionIndex = 0;
  selectedAnswer = null;
  answered = false;
  sessionCorrect = 0;
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  if (state.hearts <= 0) {
    showOutOfHearts();
    return;
  }
  renderQuestion();
  document.querySelector("#close-lesson").focus();
}

function showOutOfHearts() {
  render();
  lessonContent.className = "lesson-content result-content no-hearts";
  lessonContent.innerHTML = '<div class="result-icon">♥</div><h2 id="lesson-dialog-title">Out of hearts</h2><p>Your hearts refill to five tomorrow. Your lesson progress is saved, so you can pick up where you left off.</p>';
  document.querySelector("#answer-footer").classList.remove("hidden");
  checkButton.disabled = false;
  checkButton.innerHTML = 'Back to path <span>↗</span>';
  checkButton.onclick = closeLesson;
}

function openOnboarding() {
  document.querySelectorAll(".experience-choice").forEach(option => {
    const selected = option.dataset.level === state.skillLevel;
    option.setAttribute("aria-pressed", String(selected));
  });
  onboardingContinue.disabled = !state.skillLevel;
  onboardingOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  const selectedOption = onboardingOverlay.querySelector('[aria-pressed="true"]');
  (selectedOption || onboardingOverlay.querySelector(".experience-choice")).focus();
}

function saveExperienceLevel() {
  const selected = onboardingOverlay.querySelector('.experience-choice[aria-pressed="true"]');
  if (!selected) return;
  state.skillLevel = selected.dataset.level;
  saveState();
  onboardingOverlay.classList.add("hidden");
  document.body.style.overflow = "";
  render();
}

function showAuth(mode) {
  setAuthMode(mode);
  authOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.querySelector("#auth-email").focus();
}

function setAuthMode(mode) {
  authMode = mode;
  const creating = mode === "create";
  document.querySelector("#tab-sign-in").classList.toggle("active", !creating);
  document.querySelector("#tab-sign-in").setAttribute("aria-selected", String(!creating));
  document.querySelector("#tab-create").classList.toggle("active", creating);
  document.querySelector("#tab-create").setAttribute("aria-selected", String(creating));
  document.querySelector("#auth-title").textContent = creating ? "Create your account" : "Welcome back";
  document.querySelector("#auth-copy").textContent = creating ? "Create an account and keep your learning progress in the ByteSprig database." : "Sign in to continue your saved learning path.";
  document.querySelector("#name-field").classList.toggle("hidden", !creating);
  document.querySelector("#auth-name").required = creating;
  document.querySelector("#auth-name").autocomplete = creating ? "name" : "off";
  document.querySelector("#auth-password").autocomplete = creating ? "new-password" : "current-password";
  document.querySelector("#auth-submit").innerHTML = `${creating ? "Create account" : "Sign in"} <span>↗</span>`;
  authMessage.textContent = "";
  authMessage.classList.remove("success");
}

function closeAuth() {
  authOverlay.classList.add("hidden");
  document.body.style.overflow = "";
  authForm.reset();
  authMessage.textContent = "";
}

async function submitAuth(event) {
  event.preventDefault();
  const email = document.querySelector("#auth-email").value.trim().toLowerCase();
  const password = document.querySelector("#auth-password").value;
  const submitButton = document.querySelector("#auth-submit");
  submitButton.disabled = true;
  authMessage.textContent = "";
  try {
    const endpoint = authMode === "create" ? "/api/register" : "/api/login";
    const payload = { email, password };
    if (authMode === "create") payload.name = document.querySelector("#auth-name").value.trim();
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) {
      authMessage.textContent = result.error || "We couldn't sign you in. Please try again.";
      return;
    }
    currentUser = result.user;
    if (authMode === "create") {
      state = { ...defaultState, ...result.progress };
    } else {
      const progressResponse = await fetch("/api/progress");
      if (!progressResponse.ok) throw new Error("Signed in, but couldn't load your saved progress.");
      const savedProgress = await progressResponse.json();
      state = { ...defaultState, ...savedProgress.progress };
    }
    closeAuth();
    render();
    if (!state.skillLevel) openOnboarding();
  } catch (error) {
    authMessage.textContent = error.message || "We couldn't complete that request. Please try again.";
  } finally {
    submitButton.disabled = false;
  }
}

async function signOut() {
  await saveState();
  await fetch("/api/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}"
  });
  currentUser = null;
  state = loadGuestState();
  render();
}

function renderQuestion() {
  const lesson = lessons[currentLesson];
  const question = lesson.questions[questionIndex];
  const progress = (questionIndex / lesson.questions.length) * 100;
  document.querySelector("#lesson-progress-fill").style.width = `${progress}%`;
  document.querySelector("#lesson-heart-count").textContent = state.hearts;
  lessonContent.className = "lesson-content";
  lessonContent.innerHTML = `<p class="question-count">LESSON ${String(currentLesson + 1).padStart(2, "0")} · QUESTION ${questionIndex + 1} OF ${lesson.questions.length}</p><h2 id="lesson-dialog-title">${question.prompt}</h2><p class="question-hint">${question.hint}</p>${question.code ? `<pre class="code-sample"><code>${escapeHtml(question.code)}</code></pre>` : ""}<div class="answer-options" role="group" aria-label="Choose an answer">${question.options.map((option, index) => `<button class="answer-option" type="button" data-answer="${index}"><span class="option-key">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></button>`).join("")}</div><div id="feedback-slot" aria-live="polite"></div>`;
  checkButton.disabled = true;
  checkButton.innerHTML = 'Check answer <span>↗</span>';
  document.querySelector("#answer-footer").classList.remove("hidden");
  lessonContent.querySelectorAll(".answer-option").forEach(option => {
    option.addEventListener("click", () => {
      if (answered) return;
      selectedAnswer = Number(option.dataset.answer);
      lessonContent.querySelectorAll(".answer-option").forEach(item => item.classList.toggle("selected", item === option));
      checkButton.disabled = false;
    });
  });
}

function checkAnswer() {
  if (selectedAnswer === null) return;
  const question = lessons[currentLesson].questions[questionIndex];
  const isCorrect = selectedAnswer === question.answer;
  answered = true;
  if (isCorrect) sessionCorrect += 1;
  else {
    state.hearts = Math.max(0, state.hearts - 1);
    state.lastHeartDate = dateKey();
  }
  saveState();
  document.querySelector("#lesson-heart-count").textContent = state.hearts;
  if (state.hearts <= 0 && !isCorrect) {
    showOutOfHearts();
    return;
  }
  lessonContent.querySelectorAll(".answer-option").forEach((option, index) => {
    option.disabled = true;
    if (index === question.answer) option.classList.add("selected");
  });
  const feedback = document.createElement("div");
  feedback.className = `answer-feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.textContent = `${isCorrect ? "Exactly right! " : "Not quite. "}${question.explain}`;
  document.querySelector("#feedback-slot").append(feedback);
  checkButton.disabled = false;
  checkButton.innerHTML = questionIndex === lessons[currentLesson].questions.length - 1 ? 'Finish lesson <span>↗</span>' : 'Continue <span>↗</span>';
  checkButton.onclick = advanceQuestion;
}

function advanceQuestion() {
  if (!answered) return checkAnswer();
  if (questionIndex < lessons[currentLesson].questions.length - 1) {
    questionIndex += 1;
    selectedAnswer = null;
    answered = false;
    checkButton.onclick = null;
    renderQuestion();
    return;
  }
  finishLesson();
}

function finishLesson() {
  const isNewCompletion = !state.completed.includes(currentLesson);
  if (isNewCompletion) {
    state.completed.push(currentLesson);
    state.xp += sessionCorrect * 10;
    const today = dateKey();
    const studyGap = state.lastStudyDate ? daysBetween(state.lastStudyDate, today) : null;
    if (studyGap === null || studyGap > 1 || studyGap < 0) state.streak = 1;
    else if (studyGap === 1) state.streak += 1;
    state.lastStudyDate = today;
  }
  saveState();
  render();
  const allDone = state.completed.length === lessons.length;
  document.querySelector("#lesson-progress-fill").style.width = "100%";
  lessonContent.className = "lesson-content result-content";
  lessonContent.innerHTML = `<div class="result-icon">${allDone ? "✳" : "✓"}</div><h2 id="lesson-dialog-title">${allDone ? "Unit complete!" : "Lovely work!"}</h2><p>${allDone ? "You've finished your first Python unit. That's a real start." : `You finished ${lessons[currentLesson].title}. Keep that momentum going.`}</p><span class="result-xp">✦ +${isNewCompletion ? sessionCorrect * 10 : 0} XP</span>`;
  document.querySelector("#answer-footer").classList.remove("hidden");
  checkButton.disabled = false;
  checkButton.innerHTML = 'Back to path <span>↗</span>';
  checkButton.onclick = closeLesson;
}

function closeLesson() {
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
  checkButton.onclick = null;
  render();
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

document.querySelector("#continue-button").addEventListener("click", () => {
  if (state.completed.length < lessons.length) startLesson(state.completed.length);
});
checkButton.addEventListener("click", advanceQuestion);
document.querySelector("#close-lesson").addEventListener("click", closeLesson);
overlay.addEventListener("click", event => { if (event.target === overlay) closeLesson(); });
document.querySelector("#profile-button").addEventListener("click", openOnboarding);
document.querySelectorAll(".experience-choice").forEach(option => option.addEventListener("click", () => {
  document.querySelectorAll(".experience-choice").forEach(item => item.setAttribute("aria-pressed", String(item === option)));
  onboardingContinue.disabled = false;
}));
onboardingContinue.addEventListener("click", saveExperienceLevel);
document.querySelector("#sign-in-button").addEventListener("click", () => showAuth("sign-in"));
document.querySelector("#create-account-button").addEventListener("click", () => showAuth("create"));
document.querySelector("#tab-sign-in").addEventListener("click", () => setAuthMode("sign-in"));
document.querySelector("#tab-create").addEventListener("click", () => setAuthMode("create"));
document.querySelector("#auth-close").addEventListener("click", closeAuth);
document.querySelector("#sign-out-button").addEventListener("click", signOut);
document.querySelector("#admin-refresh").addEventListener("click", refreshAdmin);
authForm.addEventListener("submit", submitAuth);
authOverlay.addEventListener("click", event => { if (event.target === authOverlay) closeAuth(); });
document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => {
  const view = button.dataset.view;
  document.querySelector("#path-view").classList.toggle("hidden", view !== "path");
  document.querySelector("#achievements-view").classList.toggle("hidden", view !== "achievements");
  document.querySelector("#admin-view").classList.toggle("hidden", view !== "admin");
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === view));
  if (view === "admin") refreshAdmin();
}));

async function bootstrap() {
  try {
    const response = await fetch("/api/me");
    if (response.ok) {
      const result = await response.json();
      currentUser = result.user;
      if (currentUser) {
        const progressResponse = await fetch("/api/progress");
        if (progressResponse.ok) {
          const savedProgress = await progressResponse.json();
          state = { ...defaultState, ...savedProgress.progress };
        }
      }
    }
  } catch (error) {
    console.error("ByteSprig server unavailable:", error);
  }
  if (refillHeartsForNewDay()) await saveState();
  render();
  if (!state.skillLevel) openOnboarding();
}

bootstrap();