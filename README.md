📖 Random Quran Ayah Generator
This is a simple web application that displays a random Ayah (verse) from the Holy Quran every time you click the button. The project uses the Al Quran Cloud API to fetch the full Quran in Arabic and displays the Ayah text along with its Surah name and verse number.

🌐 Live Demo :https://moazahmed3.github.io/random-quran-ayah/
👉 View the Live Website

🚀 Features
Fetches a random Ayah from the Quran.

Displays:

The text of the Ayah in Arabic.

The name of the Surah in Arabic.

The verse number within the Surah.

Responsive and clean layout using Bootstrap.

📦 Tech Stack
HTML for structure

CSS + Bootstrap for styling and responsiveness

JavaScript (ES6) for logic

Al Quran Cloud API for Quranic data

📜 How It Works
On page load or button click, the app checks if all Ayat are already fetched.

If not, it fetches the full Quran data using this endpoint:
https://api.alquran.cloud/v1/quran/quran-simple

It stores all Ayat in a list, and then selects a random one.

It updates the DOM with:

Ayah text

Surah name

Verse number in the Surah

🧠 Learning Outcomes
Using external APIs in a real project

Parsing JSON and working with nested data

Handling async/await and fetch

DOM manipulation in JavaScript

Writing clean, reusable functions

Responsive layout using Bootstrap classe


<img width="1099" height="574" alt="image" src="https://github.com/user-attachments/assets/be101499-9b98-4264-9113-67d45dfaf516" />
