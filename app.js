/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How many paintings and artifacts does the Louvre have? around:',
      answers: [
        '38,000',
        '5,000',
        '70,000',
        '100,000'
      ],
      correctAnswer: '38,000'
    },
    {
      question: 'How many cheese varieties does France produce? around:',
      answers: [
        '1,600',
        '500',
        '3,000',
        '100'
      ],
      correctAnswer: '1,600'
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
      question: 'How many chateaus France has? Over:',
      answers: [
        '40,000',
        '20,000',
        '5,000',
        '50,000'
      ],
      correctAnswer: '40,000'
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
      <button>Go!</button>
    </form>
  </div>
  `
};

// generate the quiz:
// function questionNumberHtml()
// function questionHtml()
// function answerListHtml()
// function scoreHtml()
// function answerHtml()

// generate the end screen:
// function resultsScreenHtml()

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag 
//based on the state of the store

function renderScreen() {
  // if quiz hasn't started, display the starting screen
  $('main').html(startScreenHtml());
  /* if quiz has started, display:
  * question number
  * question
  * answer list
  * submit button
  * score
  */
};

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
// function handleStartClick()
// function handleSubmitAnswer()
// function handleNextQuestion()
// function handleRestartQuiz()


function handleQuizApp() {
  renderScreen()
  //function handleStartClick()
  //function handleSubmitAnswer()
  //function handleNextQuestion()
  //function handleRestartQuiz()
} 

$(handleQuizApp);