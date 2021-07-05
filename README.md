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
}
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
   - Allows the user to expand and shrink the main image
   - Features right and left arrows to allow the user to click between images
   - Features thumbnail images that can be scrolled through if more than 7 images
   - On Click thumbanil feature that updates the main image to match the clicked thumbnail
   - Includes on Hover features for user interface
2.  Product Information
   - Features a star rating that displays product average rating
   - Displays a Read all reviews that when clicked scrolls the page to the Ratings & Reviews module
   - Displays product information obtained from API
   - Allows user to share on social media
3. Style Selector
   - Displays all product styles from API in rows of 4
   - Includes on Hover features for user interface
   - On Click feature to change style selected for Overview module
4. Add to Cart
   - Created dropdown bar for better user interface
   - Features Add to Cart button that adds product to Cart in API
6. Caching
   - Caches products in local storage to enable faster page rendering

## Tests
To ensure server is running properly, run:
```sh
npm test
```
## Author
- Product Overview - Claire Chen
- Ratings & Reviews = Hollin Wakefield
- Questions & Answers = John Yasis
- Related Items & Comparison - Chris Pak

## Acknowledgements




