# Bates Propulsion Labs

## Run locally
1. Install NodeJS/NPM
2. Install dependencies `npm install`
3. Copy and fill out the variables in `.env.default` file to `.env`
4. Run the app `npm start`

## Deploy to github pages
1. Install NodeJS/NPM
2. Set the homepage in `package.json` to your own github pages url
3. Set the GitHub instructions for [setting a custom domain](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)
4. Install dependencies `npm install`
5. Copy and fill out the variables in `.env.default` file to `.env`
6. Deploy to github pages `npm run deploy`

## Deploy new changes from the upstream
For first time setup, run the follow once:
1. Set the upstream git repo (https) `git remote add upstream https://github.com/Tryptophan/batespropulsionlabs.git`

Run the following steps every time you want to deploy new changes:
1. Grab upstream changes `git pull upstream master`
2. Push new changes to your own repo `git push`
3. Install any new dependencies `npm install`
4. Deploy new build `npm run deploy`
