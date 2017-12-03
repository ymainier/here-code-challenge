Please find the SPA written in React that uses the 2 endpoints suggested in the code challenge.

# Usage

Install the dependencies, compile the js files, compile the SASS style, run a webserver and open index.html in a web browser.

```sh
$ npm install
$ npm start
```

# Test

Lint the js files with eslint recommanded rules, react recommanded rules and prettier formatting rules, and run the unit tests.

```sh
$ npm test
```

# TODO

I have kept this app simple and there is a lot of things that could be done. For example :
- Rename "names" and "name" to the more specific "repositories"/"repository";
- Extract similarities in fetch actions;
- Add a router like react-router;
- Add test code coverage, with nyc for example;
- Optimize production code with uglify;
- Add npm watch scripts for development : watch js/css and recompile;
- Add sourcemap for development;
- Improve the visualization of language distribution;
