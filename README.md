# code-4-designers

hey! I'm a designer and I've learned how to code, I'm pretty sure you can too! 

the hardest part of learning software development is knowing where to start, but I've struggled through figuring that out for you. below is a step by step guide to getting started with html/css/javascript. we will go through a basic example project where you can explore building a basic page for yourself. 

before we start we need to setup our machine and learn some fundamentals. this is probably the most tedious part, but if you can make it through this it starts to get very fun. 

lets go!


## installation

the first thing we'll need to do is open your terminal(macOS), we will need this to run some commands in step 2. 

1. download and install [visual studio code](https://code.visualstudio.com/) or another code editor of your choice. you can use the package installer for your respective operating system. 


2. download and install [node and npm](https://nodejs.org/en/download/). the installation commands for the 22.18.0 LTS (Long-Term Support) version are found below, however please note more up to date versions may be available at the install link. 

    copy the commands line by line into your terminal, any line starting with a `#` can be omitted as this is just a comment which describes the command below it. begin with the `curl` command to install nvm, a version manager used to install node. when you are finished installing, running `node -v` and `npm -v` will confirm if node and npm are installed. 



    ```
    # Download and install nvm:
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

    # in lieu of restarting the shell
    \. "$HOME/.nvm/nvm.sh"

    # Download and install Node.js:
    nvm install 22

    # Verify the Node.js version:
    node -v # Should print "v22.18.0".
    nvm current # Should print "v22.18.0".

    # Verify npm version:
    npm -v # Should print "10.9.3".
    ```

    **why-we-do-this**

    npm is a package manager built on top of node for installing many popular javascript software tools and libraries. we need this to install `live-server` in step 4. you can learn more about npm and explore available packages [here](https://www.npmjs.com/).

3. download and install [git](https://git-scm.com/downloads/mac). you may need to install [homebrew](https://brew.sh/) to do this, a macOS package manager. this is similar to `npm` but for mac tools.

    learning to use `git` and `Github` is the best way for your to impress your technical friends while learning software development.

    long story short, git is a software used to manage versions of your project as you make changes. github gives you a happy little cloud site to store this version information. 
    
    **why-we-do-this**

    if you're a designer you are familiar with how everyone you work with has a different file naming conventions (scupltv1, sculptv1-01, sculpt1-01-NEW-version, etc). git along with github basically eliminates that nonsense, allowing you to create "branches" (versions) of your code to work on and sync these versions together in a main project repository where you can compare and merge changes together as needed. this allows awesome things like: sharing your projects easily, never losing files on an old hard drive, and easy collaboration with other developers. 

    **key-info**
    
    something thats often glossed over is [git](https://git-scm.com/) and [Github](https://github.com/) are two different things. `git` is the actual version management tool while `Github` is just a place to store this information online. `git` can work with other cloud services like [GitLab](https://about.gitlab.com/) or [BitBucket](https://bitbucket.org/product/), but `Github` is the most commonly used.

4. finally, download and install [live-server](https://www.npmjs.com/package/live-server). this is the easiest step now that you have `node` and `npm` installed. simply run the command: 

    ```
    npm i live-server
    ```

    **why-we-do-this**

    `live-server` creates a quick webserver when your run it in a projects main directory. this allows you to preview changes live in your browser at a locally hosted url. if you want, you can use this as a learning experience and check out the npm page for the package to see how easy it is to install javascript packages now with node. 

**recap**

if you made it this far congratulations! this is 90% of the battle, with these tools and setup you can get started making fun silly websites using basic html/css/javascript. 

take a break and get ready to start learning about project structure. 

## web-project-structure

now that you have `git` installed, you can stop following this tutorial from the `Github` page. 

first lets go back to our terminal and learn a few commands. so far we've been installing things globally on your machine, but to download the example project code we want to put this in a specific place. 

on the top right of the github repo page there will be a green button labeled `Code`. click this and copy the HTTPS url displayed there. 

then run the command `git clone <repo-https-url>` replacing the `<repo-https-url>` with the link you copied. 