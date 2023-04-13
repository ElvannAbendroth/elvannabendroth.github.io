# GitHub Pages Template for React ♥️

Welcome to this template repository provided by Codespace and Github pages!  
This project template is hosted by Github Pages here: https://elvannabendroth.github.io/react-page-template/

If this tutorial isn't clear enough, you need more info or you want to do it yourself from scratch, check out react-gh-pages: https://github.com/gitname/react-gh-pages

## How Host Your React App Project with Github Page

1. Click "use this template" and choose create a new repository
2. Copy the new repository link and create a remote using `git clone {your-repo-link}`
3. Change the property of "homepage" in `package.json` to your github page link.  The project name can be anything you decide, but the root URL has to be your git username.
``` json
    "homepage": "https://{gitusername}.github.io/{project-name}"
```
4. Run `npm install`
5. Code an awesome react app
6. When you're ready to deploy, run `npm run deploy` in the terminal.
7. Setup your github page repository: Go in the repository settings, navigate to the Pages tab and choose `deploy from a branch` as the source, and ph-pages/(root) as the build branch.

Your react app will now be available a the link mentionned in the "homepage" property of your `package.json` file ( `https://{gitusername}.github.io/{project-name}`) .

### Using the Github User Page Instead

If you're using a github user page instead of a project page, you'll need to use this instead, where `main` can be replaced by the name of you main or master branch:

``` json
    "predeploy": "npm run build",
    "deploy": "gh-pages -b {main} -d build",
```
I haven't tested this, but this is what I found 🤷‍♀️.  I'm assuming the homepage link in `package.json` might need to look like this instead:

``` json
    "homepage": "https://{gitusername}.github.io"
```

## You're Done!  GLHF!
If this tutorial isn't clear enough, you need more info or you want to do it yourself from scratch, check out react-gh-pages: https://github.com/gitname/react-gh-pages
