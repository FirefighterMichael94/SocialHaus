# SocialHaus

## Description

The Tech Blog is a CMS-style blog site where developers can publish articles, blog posts, and share their thoughts and opinions. The site allows users to register, log in, create posts, and comment on other users' posts. This application is built using the MVC paradigm and is deployed to Heroku.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts


## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd tech-blog
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up the environment variables:
    ```sh
    cp .env.example .env
    ```
    Fill in your MySQL database credentials and session secret in the `.env` file.

5. Initialize the database:
    ```sh
    npx sequelize db:migrate
    ```

6. Start the application:
    ```sh
    npm start
    ```

## Usage

1. Visit the deployed application URL or run the application locally by navigating to `http://localhost:3001`.
2. Register a new account or log in with existing credentials.
3. Create, view, update, and delete blog posts.
4. Comment on other users' posts.

## Deployment

The application is deployed on Heroku. You can visit it [here](<Heroku-deployed-URL>).

## Technologies Used

- Node.js
- Express.js
- MySQL2
- Sequelize
- Express-Handlebars
- dotenv
- bcrypt
- express-session
- connect-session-sequelize
- Heroku

## License

This project is licensed under the MIT License.

##Credits
This Project was done by Michael G and the help of studying and AI

## Questions

If you have any questions or issues, please open an issue in this repository or contact me directly.
