# Getting Started with Create React App

## Install Cypress
    npm install cypress --save-dev

>Make sure that you have already run `npm init` or have a _node_module_ folder or _package.json_ file in the root of your project to ensure cypress is installed in the correct directory.

## Update `tsconfig.json` to avoid compile errors

    {
        "compilerOptions": {        
            "types": ["node", "cypress"],
             ...
            "include": ["src", "cypress"]
        }        
    }   

## Run Cypress
    npx cypress open

## Run Cypress headlessly
    npx cypress run
    npx cypress run --browser chrome
    npx cypress run --component

## Cypress Commands

### Parent Commands
Parent commands begin a new chain of Cypress commands

- `cy.visit('http://localhost:6006')`
- `cy.get('form')`
- `cy.request('http://localhost/list')`
- `cy.exec('npm run build')`
- `cy.route('/users/**')`

### Child Commands
Chained off a parent command, or another child command

- `cy.get('[data-testid=username]').click()`
- `cy.get('[data-testid=username]').type(username)`
- `cy.get('.article').find('footer')`
- `cy.contains('Login').should('be.visible')`

### Dual Commands
Can either start a chain or be chained off an existing one

- `cy.contains()`
- `cy.screenshot()`
- `cy.scrollTo()`
- `cy.wait()`

---

## What is Continuous Testing?
- Tests run in a Continuous Integration (CI) environment.
- Tests are triggered by source control events.
- Tests run against new code changes.
- Tests run against a production-like preview environment.

## Why Run Browser Tests Continuously?
- Increasing confidence in our code. By running tests in an automated fashion, we can test multiple devices and platforms at once.
- It helps catch issues before users run into them.
- We can test against pre-release versions.
- It scales better than manual testing.

---

## Pipeline Flow

---
## To run Cypress in a container and use e2e spec file from the React app depends on how you've set up your Docker environment. Here are two options:

### Option 1: Using docker-compose:
If you're using docker-compose to manage your Docker environment, you can run the following command to run Cypress tests and specify your e2e spec file:

    docker-compose run cypress run --spec "cypress/e2e/*.spec.*"

### Option 2: Running Cypress directly in a container:

---

## Basic Docker Commands

### Build the Docker image
    docker build -t react-testing-with-cypress:latest .

### Run the Docker container
    dodcker run -p 3000:3000 react-testing-with-cypress:latest

### Run the Docker containers
    docker-compose build up

