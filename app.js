/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
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
// function startScreenHtml()

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

// function renderScreen()

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
// function handleStartClick()
// function handleSubmitAnswer()
// function handleNextQuestion()
// function handleRestartQuiz()


/* function handleQuizApp() {
  renderScreen()
  function handleStartClick()
  function handleSubmitAnswer()
  function handleNextQuestion()
  function handleRestartQuiz()
} */

// $(handleQuizApp);