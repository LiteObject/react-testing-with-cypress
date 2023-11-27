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
