# [corsiuniversitari.info](https://www.corsiuniversitari.info/) website
## Why do I publish the source code of an online website?
Thanks to its optimization this website has gained first place in many google research queries, so it's an example of technical SEO. It's also an example of how is possible to avoid scaling problems without using server-side rendering. 
## List of optimizations
### CSS framework
I have chosen Bulma because is a CSS framework without any javascript dependencies. In addition to Bulma, I have used purge CSS that provides CSS optimization during the build. So my CSS is light like custom CSS but with the convenience of a library like Bootstrap. I think this is the most important of all the optimizations I have done for this project.
### Bundler
The bundler I have chosen is Vite because is faster and a lot more simple than Webpack.
#### Downside
Some Vue.js dependencies don't work out of the box with Vite but as we are able to see isn't an issue in this case since it's already planned to use less dependencies as possible.
### Build optimization
Normally you need to use something like Puppeteer to run the prerendering in the building phase, but there is a faster and lighter alternative to the prerendering. My solution is to provide for each Vue page one index.html file that is necessary to access the page, this allows us to don't use the Vue router and Vue meta and have a lighter code

In my repo there is also the older version of this website made with Vue-CLi, you can test each solution and see the difference in the build size and the build time.
#### Downside
Vite works in dev mode only with the main page, I don't know why I imagine there were be a solution but I didn't find it.
## Front-end framework
I use Vue.js because now Sveltekit isn't yet ready and is simpler to learn than react or angular. The heaviest page is made with vanilla js and uses one HTML element that came from the [API server](https://github.com/ludotosk/json-corsi-fastify) instead of creating this element in the client.
### Pros
I'm able to use dependencies of the Vue ecosystem without spending too much time to get a fully working table per example.
## Other tweaks
Since Google Analytics slows down the performance of my website I decided to put the analytics script at the bottom of the body, this change is necessary since this is a client side rendered website and every javascript optimization is welcome.