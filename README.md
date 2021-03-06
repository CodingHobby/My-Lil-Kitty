### My LIL' CAT [![Build Status](https://travis-ci.org/CodingHobby/My-Lil-Cat.svg?branch=master)](https://travis-ci.org/CodingHobby/My-Lil-Cat)

My LIL'CAT, which is short for **My Largly Intricated Library 'n' Cool Artificial Things**, is a JavaScript based Physics library, which is written using ES6 "class" Syntax, and it is then transpiled using webpack.

For now there are three main classes: 

- `Vector` 
- `Body` 
- `World`

Here they are listed in an ascending order of complexity: a vector is the core unit, on top of which you can make Bodies, which are, for nows, just rigid bodies.

The bodies have a lot of properties and methods which rely heavily on Vectors.

Then there is the `World` class, which contains all of its "children" `Bodies`, and it also has stuff like Gravity, which it then passes down to each one of its children.

Everything is being tested through Jest, although I started using it only recently, so up until now there has not been any TDD / Red Green Refractor type of thing going on, although I'll be doing it, from now on.

If you want to contribute I'd be grateful! Do not hesitate to fork this repo, if you want to help a poor noobie with his little side-project!

If you want to know the state of development, check out the TODO.todo file: it will list all the stuff I'm currently doing, or all the stuff I have done. If you want to open it using a pleasing graphic, you should use some extension like "To Do Tasks", which is available for most major text editors.

First of all, you'll want to install all of the required `npm modules`. To do so run the command `npm install`

To use this library, you'll need to build it (at least for now). To do so, run `npm run build:lib`.

After this you'll need to run the command `npm run build` and, at this point you'll have the compiled library in the `/lib` folder.

If you want to run the unit tests you can either use `npm run test`, which will run all tests once, or use `npm run dev:test`, which will enter watch mode for testing.

For now, if you want to use the library, you'll need to use something like Webpack (you can actually use this repo as an empty example), and write all your code in the `app.js` file. To build the app, run `npm run build:app`. The compiled, bundled file will be saved in the `/dist` folder, under the name of `bundle.js`. You can also use a live development server with hot module reloading by running `npm run serve`. Note that, if you use it, compiled files will be stored in memory, and won't actually be saved on your hard drive.

As a conclusion I'd like to thank Elisa (Cat O' Mine) Quagliaroli for being a great friend and giving me an idea for the name of the two libraries. She really is an amazing person, and I am grateful to her.