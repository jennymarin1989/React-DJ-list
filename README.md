# React-DJ-list

The main goal of this tech test is creating a simple application where the DJ can display a list of songs of a given year, making her life more easy during the session. Each song should be displayed with the Title, Artist, Album and year.


## User stories

```
As a DJ
So I can succesfully run my session
I want to be able to **use** the React-DJ-List app

As a DJ
So I can **view** a specific list of songs
I want to be able to display a list of songs of a given year

As a DJ
So I can have more information about the list I'm playing
I want to be able to get the Title, Artist, Album and Year

As a new User
So I can make an effective use of the app
I wan to be able to have all the instructions about the use of the app

```

## Approach

My first approach to this challenge was a brainstorm of ideas, creating user stories using the domain model as a guide to fulfil all the user requirements.

To have an idea about the structure of the application, I drew a diagram and an idea of an Minimum Viable Product with the client expectations.


Diagram:







MVP:


To complete this technical test I was free to choose the technologies. Initially my idea was to build a full stack app using the MERN(Mongo, Express, React and Node)stack applying TDD principles but it would take more than one day to finish it, therefore, I made the decision to use React and axios but unfortunately I had some issues with the installation of the axios npm package and I couldn't use it correctly, so I ended up using purely React and CC to achieve the requirements of the MVP. I given more time, I would spend more time researching about axios and practising REST Api calls to access local Json data.

Althought the app is very basic I followed TDD principles using the Jest testing frmaework, starting with basic tests to render a simple component and testing more complicated units of code later on.

screenshoot of the app:

<p>
<img src="https://user-images.githubusercontent.com/29259526/39561245-68990740-4e9c-11e8-9e8d-13de26dcf8d0.png" width="600px" text-align:"center" />
</p>

<p>
<img src="https://user-images.githubusercontent.com/29259526/39561466-b64b64aa-4e9d-11e8-8fb1-c0ef65c0ece8.png" width="600px" text-align="center">
</p>



## Getting started

The instructions will get you a copy of the project up on your local machine for development and testing purposes

### Installing 

Clone the projects to your local directory and install the dependencies

 - $git clone https://github.com/jennymarin1989/React-DJ-list.git
 - $cd React-DJ-list
 - $ npm install

## Testing

Run test:

- $npm run test

## Deployment

- $npm start

## Toughts

This project was developed in less than one day, If given more time I would improve the app by:

- Using MERN stack or Axios, to practise API calls and DB connection
- Creating more reusable components in React to keep the code DRY
- Improving app styling.

# Technologies

- React
- Enzyme
- CSS
- Jest

## Author

Jenny Arenas
