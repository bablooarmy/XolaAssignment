About the Styleguide Generator
------------------------------

The SC5 Styleguide reads your projects [LESS](http://lesscss.org/), [SASS / SCSS](http://sass-lang.com/) or [CSS](http://www.w3.org/Style/CSS/) files and generates documentation for your styles based on some metadata that you need to provide. The metadata needs to be provided in a specific KSS based format. The format is a mixture of the original [KSS](https://github.com/kneath/kss) and the [node-kss](https://github.com/kss-node/kss-node) with some SC5 Styleguide specific [additions](https://github.com/SC5/sc5-styleguide#user-content-documenting-syntax).

Your styleguide will only be as good as the metadata you provide but using a styleguide generator may be a good way of motivating you to write that metadata. The metadata should describe where certain styles are appropriate, what kind of HTML markup should be used to refer the styles and how the different markup can be combined to achieve more complex parts of the user interface.

Adding all new user interface parts to the style guide first encourages thinking through the user interface and the markup before writing the code. It also makes it possible to review the user interface before the related functionalties are implemented. Finally the provided example markup works as test cases for the styles and their cross platform compatibility can easily be verified by viewing the style guide itself on different devices and screen sizes.

HTML5 doctype
-------------
Bootstrap makes use of certain HTML elements and CSS properties that require the use of the HTML5 doctype. Include it at the beginning of all your projects.

&lt;!DOCTYPE html&gt;&lt;html lang="en"&gt;  ...&lt;/html&gt;

Mobile first
------------

With Bootstrap 2, we added optional mobile friendly styles for key aspects of the framework. With Bootstrap 3, we've rewritten the project to be mobile friendly from the start. Instead of adding on optional mobile styles, they're baked right into the core. In fact, Bootstrap is mobile first. Mobile first styles can be found throughout the entire library instead of in separate files.

To ensure proper rendering and touch zooming, add the viewport meta tag to your <head>.

<pre><code class="language-html" data-lang="html"><meta name="viewport" content="width=device-width, initial-scale=1"></code></pre>
