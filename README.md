# Flashcards
A React-Native project developed for [Udacity React Nanodegree](https://br.udacity.com/course/react-nanodegree--nd019) by [rlisboars](https://github.com/rlisboars/)
Tested on iPhone and Android.

## Setup

- Install dependencies
```sh
$ yarn install
```

- Start app
```sh
$ yarn start
```

## Project Requirements
### App configuration:
* Easy setup: 
    * App requires only `yarn install` and `yarn start` to install and start the app.
* README: 
    * A README was added to the project. It shows the instructions to install and start the project.


### App Features:
* Decks List:
    * Primary view is the Decks List showing the decks created with their name and cards quantities.
    * Clicking on a Deck must redirect user to a deiled deck view.
    * An option to create a new Deck must be available.
* Deck Detail:
    * Deck Detail must show the Deck title, cards quantities, options to start the quiz or add a new Card.
* Add Card:
    * Shows a form with input texts for the Question, Answer and a button to submit. Submiting the form successfully adds the new Card to the Deck.
* Quiz:
    * View start with a Card from the selected Deck.
    * The question is shown with a button to the Answer.
    * Clicking on the "Show Answer" button will show the Answer.
    * Buttons must be added to allow Students to mark if they answered the Card correctly or not.
    * View must show the remaining cards.
    * When the last question is answered, a score must be displayed. It can show a percentage of correct answers or just the number of correct answered questions.
* Push notifications: 
    * Push Notifications must be created daily if user did not answer a Deck. 
    
