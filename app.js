/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How many paintings and artifacts does the Louvre have?',
      answers: [
        'Around: 38,000',
        'Around: 5,000',
        'Around: 70,000',
        'Around: 100,000'
      ],
      correctAnswer: 'Around: 38,000'
    },
    {
      question: 'How many cheese varieties does France produce?',
      answers: [
        'Around: 1,600',
        'Around: 500',
        'Around: 3,000',
        'Around: 100'
      ],
      correctAnswer: 'Around: 1,600'
    },
    {
      question: 'French local Jeanne Calment was the world\'s oldest person, how old was she?',
      answers: [
        '122 years old',
        '115 years old',
        '129 years old',
        '105 years old'
      ],
      correctAnswer: '122 years old'
    },
    {
      question: 'Paris is also called: ',
      answers: [
        'The City of Light',
        'The City of Freedom',
        'The City of Love',
        'The City of Cheese'
      ],
      correctAnswer: 'The City of Light'
    },
    {
      question: 'How many chateaus France has?',
      answers: [
        'Over: 40,000',
        'Over: 20,000',
        'Over: 5,000',
        'Over: 50,000'
      ],
      correctAnswer: 'Over: 40,000'
    },
    {
      question: 'What is the minimum weeks of vacation guaranteed in France?',
      answers: [
        '5 weeks',
        '2 weeks',
        '6 weeks',
        '10 weeks'
      ],
      correctAnswer: '5 weeks'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view 
 * each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, 
 * or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

// generate the start screen:
function startScreenHtml() {
  return `
    <div class="wrapper">
    <h2>Welcome and get ready.</h2>
    <form>
      <div class="buttons">
        <button class="start">Go!</button>
      </div>  
    </form>
  </div>
  `
}

// generate the html for the quiz:
function questionNumberHtml() {
  return `
  <h2>Question ${store.questionNumber + 1}/${store.questions.length}</h2>
  `
}

function answerListHtml() {
  // create new array to store answer list
  const currentAnswers = store.questions[store.questionNumber].answers;
  // create an empty string to store the list
  let answerList = '';
  // loop through new array 
  for (let i = 0; i < currentAnswers.length; i++) {
    answerList += `
      <input name="answer" type="radio" value="${currentAnswers[i]}">
      <label for="answer1">${currentAnswers[i]}</label><br>
   `
  };
  return answerList;
}

function questionHtml() {
  const currentQuestion = store.questions[store.questionNumber];
  return `
    <form class="wrapper">
      <fieldset class="fieldset">
        <div>
          <p>${currentQuestion.question}</p>
        </div>
        <div class="answer-list">
          ${answerListHtml()}
        </div> 
        <div class="answer-feedback"></div> 
      </fieldset>
      <div class="buttons">
        <button class="submit-btn">Submit</button>
        <button class="next-btn">Next</button>
      </div>
    </form>
  `
}

function scoreHtml() {
  return `
    <h2>Score: ${store.score}/${store.questions.length}</h2>
  `
}

function answerIsCorrect() {
  // get current question info
  const currentQuestion = store.questions[store.questionNumber];
  //get answer clicked and store it
  let selectedAnswer = $('input[name=answer]:checked').val();

  //check if value match correct answer in store
  if (selectedAnswer === currentQuestion.correctAnswer) {
    return true
  }
  else {
    return false
  }
}

function answerNeeded() {
  return `
    <p>Please select an answer!</p>
  `
}

function answerFeedback() {
  const currentQuestion = store.questions[store.questionNumber];
  if (answerIsCorrect()) {
    store.score++;
    console.log("correct answer")
    return `
      <p>Correct!</p>
    `
  }
  else {
    console.log("the answer is not correct")
    return `
      <p>Incorrect!</p>
      <p>The answer is ${currentQuestion.correctAnswer}</p> 
    ` 
  }
}

// generate the end screen with score and try again button:
function resultsScreenHtml() {
  return `
    <div class="wrapper">
    <h2>All done!</h2>
    <h2> Your score is: ${store.score}/${store.questions.length}</h2>
    <form>
      <div class="buttons">
        <button class="try-again-btn">Try again</button>
      </div>
    </form>
  </div>
  `
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag 
//based on the state of the store

function renderScreen() {
  let html = '';
  // if quiz hasn't started, display the starting screen
  if (store.quizStarted === false) {
    $('main').html(startScreenHtml());
    console.log("startScreenHtml");
    return;
  }
  // if quiz has started, display:
  else if (store.questionNumber >= 0 && store.questionNumber < store.questions.length) {
    // html of the question number
    html = questionNumberHtml();
    // html of the question form
    html += questionHtml();
    // html of the score
    html += scoreHtml();
    $('main').html(html);
  }
  // if quiz is done
  else {
    $('main').html(resultsScreenHtml());
    console.log("resultsScreenHtml");
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartClick() {
  // when click on go button start the quiz
  $('main').on('click', '.start', (event) => {
    store.quizStarted = true;
    
    console.log("handleStartClick");
    renderScreen();
  });
}

function handleSubmitAnswer() {
  // when click on submit button,
  $('main').on('click', '.submit-btn', (event) => {
    event.preventDefault();
    
    // look if an answer has been selected
    let selectedAnswer = $('input[name=answer]:checked');
    if (selectedAnswer.length === 0) {
      $('.answer-feedback').html(answerNeeded());
    }
    else {
      
      $('.answer-feedback').html(answerFeedback());
      // display next button
      $('.submit-btn').hide();
      $('.next-btn').show();
      //add +1 question
      store.questionNumber++;
    }
    console.log("handleSubmitAnswer");
  });

}

function handleNextQuestion() {
  $('main').on('click', '.next-btn', (event) => {
    console.log("handleNextQuestion");
    
    renderScreen();
  });
}
  
function handleRestartQuiz() {
  $('main').on('click', '.try-again-btn', (event) => {
    console.log("handleRestartQuiz");
    
    // reset quiz, counting question and score
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    // display start screen
    renderScreen();
  });  
}

function handleQuizApp() {
  renderScreen()
  handleStartClick()
  handleSubmitAnswer()
  handleNextQuestion()
  handleRestartQuiz()
} 

$(handleQuizApp);