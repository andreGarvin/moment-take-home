- [Prerequisites](#Prerequisites)
- [Getting Started](#getting-started)

## Prerequisites

Before running the project you will need to install `nvm`, [Here is the documentation to install nvm](https://github.com/nvm-sh/nvm#installing-and-updating). The `.nvmrc` file is used to install the correct node version for this project, install it by running this command in your terminal
```bash
  nvm use
```

## Getting Started

1. Install dependencies using `npm install` for this project
1. Create a `.env.local` file for all your secrets needed for the application, just copy and paste whats in the `.env` file by running this command in your terminal
```bash
cat .env > .env.local
```
1. Then run `npm run dev` to get get the project running on [localhost:3000](localhost:3000). Alternatively `npm run build` to get a build output of the project

## NPM Scripts
* `"dev"`: Running NextJS application in development mode
* `"build"`: Build the NextJS application
* `"start"`: Run the NextJS application
* `"typecheck"`: Just runs a `tsc` to unsure the project build works, only used for deployment
