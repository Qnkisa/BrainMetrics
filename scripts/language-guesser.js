const quiz = [{
    question:"Здравейте",options:["Bulgarian","Russian","Belgium","English"],answer:"Bulgarian"
},{
    question: "Hola",
    options: ["Spanish", "Portuguese", "Italian", "French"],
    answer: "Spanish"
  },
  {
    question: "こんにちは",
    options: ["Mandarin", "Japanese", "Korean", "Thai"],
    answer: "Japanese"
  },
  {
    question: "안녕하세요",
    options: ["Korean", "Japanese", "Mandarin", "Cantonese"],
    answer: "Korean"
  },
  {
    question: "Hallo",
    options: ["German", "Swedish", "Dutch", "Norwegian"],
    answer: "German"
  },
  {
    question: "Hej",
    options: ["Norwegian", "Swedish", "Finnish", "Danish"],
    answer: "Swedish"
  },
  {
    question: "Bonjour",
    options: ["French", "Spanish", "Italian", "Portuguese"],
    answer: "French"
  },
  {
    question: "Ciao",
    options: ["Italian", "Spanish", "French", "Portuguese"],
    answer: "Italian"
  },
  {
    question: "Merhaba",
    options: ["Arabic", "Turkish", "Farsi", "Urdu"],
    answer: "Turkish"
  },
  {
    question: "你好",
    options: ["Cantonese", "Mandarin", "Japanese", "Korean"],
    answer: "Mandarin"
  },
  {
    question: "مرحبا",
    options: ["Arabic", "Farsi", "Turkish", "Urdu"],
    answer: "Arabic"
  },
  {
    question: "Բարև",
    options: ["Russian", "Armenian", "Georgian", "Kazakh"],
    answer: "Armenian"
  },
  {
    question: "Привет",
    options: ["Ukrainian", "Russian", "Polish", "Serbian"],
    answer: "Russian"
  },
  {
    question: "Salam",
    options: ["Turkish", "Farsi", "Arabic", "Urdu"],
    answer: "Farsi"
  },
  {
    question: "Szia",
    options: ["Hungarian", "Slovak", "Polish", "Czech"],
    answer: "Hungarian"
  },
  {
    question: "こんにちは",
    options: ["Mandarin", "Japanese", "Korean", "Thai"],
    answer: "Japanese"
  },
  {
    question: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    options: ["Punjabi", "Hindi", "Urdu", "Bengali"],
    answer: "Punjabi"
  },
  {
    question: "Halo",
    options: ["Indonesian", "Filipino", "Thai", "Vietnamese"],
    answer: "Indonesian"
  },
  {
    question: "Xin chào",
    options: ["Korean", "Japanese", "Mandarin", "Vietnamese"],
    answer: "Vietnamese"
  },
  {
    question: "Здравствуйте",
    options: ["Russian", "Bulgarian", "Macedonian", "Ukrainian"],
    answer: "Russian"
  },{
    question: "Sawubona",
    options: ["Zulu", "Swahili", "Amharic", "Xhosa"],
    answer: "Zulu"
  },
  {
    question: "Góðan daginn",
    options: ["Norwegian", "Swedish", "Icelandic", "Finnish"],
    answer: "Icelandic"
  },
  {
    question: "કેમ છો",
    options: ["Nepali", "Gujarati", "Marathi", "Bengali"],
    answer: "Gujarati"
  },
  {
    question: "مساء الخير",
    options: ["Arabic", "Farsi", "Turkish", "Urdu"],
    answer: "Arabic"
  },
  {
    question: "Nǐ hǎo",
    options: ["Mandarin", "Cantonese", "Taiwanese", "Korean"],
    answer: "Mandarin"
  },
  {
    question: "Dia duit",
    options: ["Irish", "Welsh", "Scottish Gaelic", "Breton"],
    answer: "Irish"
  },
  {
    question: "Talofa",
    options: ["Samoan", "Hawaiian", "Tongan", "Maori"],
    answer: "Samoan"
  },
  {
    question: "Salamat",
    options: ["Filipino", "Indonesian", "Thai", "Vietnamese"],
    answer: "Filipino"
  },
  {
    question: "Salamati",
    options: ["Pashto", "Dari", "Tajik", "Uzbek"],
    answer: "Tajik"
  },
  {
    question: "Witaj",
    options: ["Polish", "Czech", "Slovak", "Hungarian"],
    answer: "Polish"
  },{
    question: "Konnichiwa",
    options: ["Japanese", "Korean", "Mandarin", "Thai"],
    answer: "Japanese"
  },
  {
    question: "Olá",
    options: ["Portuguese", "Spanish", "Italian", "French"],
    answer: "Portuguese"
  },
  {
    question: "Sveiki",
    options: ["Latvian", "Lithuanian", "Estonian", "Finnish"],
    answer: "Latvian"
  },
  {
    question: "Kumusta",
    options: ["Tagalog", "Indonesian", "Malay", "Vietnamese"],
    answer: "Tagalog"
  },
  {
    question: "Sawatdee",
    options: ["Thai", "Laotian", "Khmer", "Burmese"],
    answer: "Thai"
  },
  {
    question: "Namaste",
    options: ["Hindi", "Bengali", "Punjabi", "Gujarati"],
    answer: "Hindi"
  },
  {
    question: "Selamat siang",
    options: ["Indonesian", "Malay", "Tagalog", "Thai"],
    answer: "Indonesian"
  },
  {
    question: "Jambo",
    options: ["Swahili", "Amharic", "Zulu", "Xhosa"],
    answer: "Swahili"
  },
  {
    question: "Szia",
    options: ["Hungarian", "Romanian", "Slovak", "Czech"],
    answer: "Hungarian"
  },
  {
    question: "Dobrý deň",
    options: ["Slovak", "Czech", "Polish", "Slovenian"],
    answer: "Slovak"
  }];


var generateQuizButton = document.getElementById("generate-language-test");
var languageGuesserContainerHide = document.getElementById("language-guesser-container-hide");
var languageGuesserHeading = document.getElementById("language-guesser-heading");
var languageGuesserContainerShow = document.getElementById("language-guesser-container-show");
var languageGuesserQuiz = document.getElementById("language-guesser-quiz");
var submitLanguageQuiz = document.getElementById("submit-language-quiz");
var retakeLanguageTest = document.getElementById("retake-language-test");
var retakeLanguageQuiz = document.getElementById("retake-language-quiz");

retakeLanguageTest.addEventListener("click",function(){
    location.reload();
});


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createLanguageQuiz(){

  const quizQuestions = shuffle(quiz).slice(0, 10);

  languageGuesserContainerHide.style.display = "none";

  let quizHTML = "";
  quizQuestions.forEach(function(q, i) {
  quizHTML += "<div class='quiz-container'><p>" + (i + 1) + ". " + q.question + "</p>";   
  quizHTML += '<input type="hidden" value="'+ q.answer + '" name="q' + i + 'correct">';
  q.options.forEach(function(opt) {
      quizHTML += '<label class="radio-button-container">' + opt + '';
      quizHTML += '<input type="radio" name="q' + i + '" value="' + opt + '">';
      quizHTML += '<span class="checkmark"></span>';
      quizHTML += "</label>";
  });
  quizHTML += "</div>";
});

languageGuesserContainerShow.style.display = "block";
languageGuesserQuiz.innerHTML = quizHTML;
}

submitLanguageQuiz.addEventListener("click", function() {
  // Calculate the user's score
  let score = 0;
  const quizQuestionsOne = languageGuesserQuiz.querySelectorAll("div");
  let allQuestionsAnswered = true;

  for(let i =0;i<quizQuestionsOne.length;i++){
      const radios = quizQuestionsOne[i].querySelectorAll("input[type=radio]");
      let anyRadioChecked = false;

      for(let j=0; j<radios.length;j++){
          if(radios[j].checked){
              anyRadioChecked = true;
              break;
          }
      }

      if(!anyRadioChecked){
          allQuestionsAnswered = false;
          break;
      }
  }

  if(!allQuestionsAnswered){
      alert("Please answer all questions before submitting!");
  }


  quizQuestionsOne.forEach(function(q, i) {
    const selected = q.querySelector("input:checked");

    const correctAnswer = q.querySelector("input[type=hidden][name=q"+ i + "correct]");
    const correctAnswerValue = correctAnswer.value;
    console.log(correctAnswerValue);
    if (selected.value == correctAnswer.value) {
      score++;
    }
  });

  languageGuesserContainerShow.style.display = "none";


  let resultPageHTML = "";
  resultPageHTML = "You guessed " + score + " languages right";

  retakeLanguageQuiz.style.display = "block";
  languageGuesserHeading.innerHTML = resultPageHTML;
});