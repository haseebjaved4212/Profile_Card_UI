# Profile Card UI

A simple, responsive profile card UI built with HTML & CSS (Montserrat font) & Javascript. The project includes a form to provide a profile picture URL, name, occupation and a short info text. When all fields are filled and the user clicks Submit, the profile card updates and appears. If any field is empty the card remains hidden.

## Features
- Clean, modern profile card design
- Responsive layout (desktop → mobile)
- Live update of card on form submission (optional JS)
- Minimal dependencies (Google Fonts only)

## Preview
Open `index.html` in your browser to see the UI. The card will be hidden until valid data is submitted.

## Files
- index.html — main HTML and CSS for layout & styling
- index.js — optional JavaScript to show/update card after Submit (see below)
- README.md — this file


## Customization
- Change colors by editing CSS variables or rules in the `<style>` block inside `index.html`.
- Swap the font by updating the Google Fonts link in the `<head>`.
- Adjust card size, border, and spacing in `.card` and `.card img` rules.

## Accessibility notes
- Inputs use placeholder text; consider adding explicit `<label>` elements for better accessibility.
- Validate image URLs and add alt text for the profile image.

## Optional JavaScript
If you want the card to appear/update only after clicking Submit, add the `index.js` file (example provided below). The HTML already loads `index.js` if present.


## Credits
- UI / styling by project author
- Montserrat font provided by Google Fonts
