# AI Keyword Extractor

AI Keyword Extractor is a web application that allows users to input text and extract keywords or bullet points from the given text. This project leverages React.js for the front end, Chakra UI for the user interface components, and Vite for the build tool. The backend utilizes GROQ API to make RESTful API calls and fetch data from the Llama model-3.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)


## Features

- **Text Input:** Users can write or paste text into an input box.
- **Keyword Extraction:** Extracts keywords or bullet points from the input text.
- **Comma-Separated Output:** Provides the extracted keywords or bullet points in a comma-separated format.
- **Responsive Design:** A user-friendly interface designed with Chakra UI.

## Technologies Used

- **React.js:** JavaScript library for building user interfaces.
- **Chakra UI:** Simple, modular, and accessible component library.
- **Vite:** Next-generation frontend tooling.
- **GROQ API:** Query language for fetching data from the Llama model-3.

In the context of the project, the GROQ API is used to fetch data from the Llama model-3. Here’s how it integrates:

- **Making RESTful API Calls:** The frontend application (built with React.js and Vite) uses the GROQ API to make RESTful calls.
- **Fetching Data:** The GROQ queries are used to retrieve the data processed by the Llama model-3, such as extracting keywords or bullet points from the input text.
- **Displaying Data:** The fetched data is then displayed in the user interface using Chakra UI components.

- [Live Link](https://sampatk20.github.io/AI_Keyword_Extractor/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/ai-keyword-extractor.git
    cd ai-keyword-extractor
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```


## Usage

1. Open the application in your web browser.
2. Enter or paste the text into the input box.
3. Click the "Extract Keywords" button.
4. The extracted keywords or bullet points will be displayed in a comma-separated format.




# React + Vite


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
