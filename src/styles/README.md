About the Styleguide Generator
------------------------------

The SC5 Styleguide reads your projects [LESS](http://lesscss.org/), [SASS / SCSS](http://sass-lang.com/) or [CSS](http://www.w3.org/Style/CSS/) files and generates documentation for your styles based on some metadata that you need to provide. The metadata needs to be provided in a specific KSS based format. The format is a mixture of the original [KSS](https://github.com/kneath/kss) and the [node-kss](https://github.com/kss-node/kss-node) with some SC5 Styleguide specific [additions](https://github.com/SC5/sc5-styleguide#user-content-documenting-syntax).

Your styleguide will only be as good as the metadata you provide but using a styleguide generator may be a good way of motivating you to write that metadata. The metadata should describe where certain styles are appropriate, what kind of HTML markup should be used to refer the styles and how the different markup can be combined to achieve more complex parts of the user interface.

Adding all new user interface parts to the style guide first encourages thinking through the user interface and the markup before writing the code. It also makes it possible to review the user interface before the related functionalties are implemented. Finally the provided example markup works as test cases for the styles and their cross platform compatibility can easily be verified by viewing the style guide itself on different devices and screen sizes.
