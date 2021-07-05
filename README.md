# PROJECT CATWALK FRONTEND - Hollinster

# Index
<ol>
    <li><a href="#Summary">Summary</a></li>
    <li><a href="#Prequisites">Prequisites</a></li>
    <li><a href="#Usage">Usage</a></li>
    <li><a href="#Module-Description">Module Description</a></li>
    <li><a href="#Tests">Tests</a></li>
    <li><a href="#Author">Author</a></li>
    <li><a href="#Acknowledgements">Acknowledgements</a></li>
</ol>

## Summary
Project Catwalk is a client-facing retail web application, which consists of Product Overview, Ratings & Reviews, Questions & Answers, Related Items & Comparison. This project was built out using React to achieve a modernized look from an originally outdated retail web-portal.

## Prequisites
```sh
Node v14.16.0
npm 7.16.0
```

## Usage
1. After forking the repo, open the CLI within the root directory of the project and run:
```sh
npm install
```
2. Acquire a github personal access token for access to the API and create a config.js file in the root directory with the following format:
```sh
module.exports = {
  token: '',
};
```
3. Compile your files by running:
```sh
npm run react:prod
```
4. Start Server:
```sh
npm start
```
5. The server runs on PORT 3002 on default. Navigate to http://localhost:3000.

## Module Description
The Overview module is the top-most module on the Product Details page. It's functionality can be divided in several pieces:
1. Image Gallery
   - Allows the user to expand and shrink the largest image
3. Product Information
4. Style Selector
5. Add to Cart

## Tests
To ensure server is running properly, run:
```sh
npm test
```
## Author
Product Overview - Claire Chen
Ratings & Reviews = Hollin Wakefield
Questions & Answers = John Yasis
Related Items & Comparison - Chris Pak

## Acknowledgements




