Instructions to generate Xola styleguide
=========================================

Getting Started
---------------

Before we start you need to install git and npm. See http://git-scm.com/ and https://docs.npmjs.com/ to get git and npm installed. You do not need to become a master of either one. We just need them to setup an example styleguide for you.

You first need to use git to copy all the required files to your computer.
```
git clone https://github.com/SC5/sc5-styleguide-tutorial.git
```

Once the files have downloaded you may change to the tutorial directory and get all dependencies.
```
cd sc5-styleguide-tutorial
npm install
```

If you have not used gulp before you should also install a global gulp to get the gulp command added to your environment.
```
npm install -g gulp
```

Next you need to build the example project. Just running gulp without any arguments will build both the project and the styleguide.
```
gulp
```

The generated project and styleguide should now exist in the build directory. You may examine the styleguide by serving to the browser with some web server software. Here we demonstrate making the files available to http://localhost:8000/ and http://localhost:8000/styleguide/ using the Python SimpleHTTPServer module. However, if you don't have that installed or all of this seems over the top, do not worry, just skip this step and you'll be alright.
```
(cd build; python -m SimpleHTTPServer)
```

To end the SimpleHTTPServer running from the previous step you need to end it first by pressing the c key while holding down the ctrl key. This will print some ugly error messages on the screen. Don't worry. It is to be expected.

Building the project will become tiresome when you are constantly developing styles and markup. Therefore the styleguide has a developer mode with a built-in server that will make the styleguide available at http://localhost:3000/ Try it!
```
gulp dev
```

In development mode styleguide will monitor your changes to the example styles that you can find under src/styles/ in your sc5-styleguide-tutorial directory. User your favourite text editor to modify the scss files. The styleguide should be automatically to match your changes. In case of an error you may find an error message in the console where you are running gulp. You may end the developer mode by pressing the c key while holding down the ctrl key.
