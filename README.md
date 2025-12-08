# Weather-Application
A production-grade React application that delivers real-time weather data with a focus on resilient architecture, maintainable code, and dynamic user experience.
<br>
<br>​<b>About The Project</b><br>
​This isn't just a weather display—it is a demonstration of modern frontend architecture. Built with React.js and integrated with the Weatherstack API, this application moves beyond basic functionality to showcase custom hook engineering, scalable component design, and graceful error handling.
<br>
<b>Key Features</b><br>
<b>​Custom API Hooks:</b> Leverages a custom-engineered hook for asynchronous fetching, isolating data logic from UI components for better clarity and reusability.
<b>​Resilient Data Pipeline:</b>Implements advanced async/await flows with robust error handling to manage network failures or invalid location queries gracefully.
​Modular & Scalable Architecture: Built using a component-driven methodology, ensuring the codebase is easy to maintain and ready for future features like 5-day forecasts.
<b>​Dynamic UI:</b> The interface (icons and backgrounds) automatically adapts based on current weather conditions (e.g., sunny, rainy, cloudy) for an immersive user experience.
<br>
<b>The Custom Hook Approach</b><br>
​Instead of cluttering components with useEffect fetch calls, this project utilizes a custom hook (e.g., useWeather) to manage the lifecycle of data requests.
​Separation of Concerns: UI components only care about displaying data, not fetching it.
<b>​Reusability:</b>The fetching logic can be easily reused across different parts of the app.<br>
<b>​Error Handling Strategy</b><br>
​The application handles edge cases proactively:<br>
<b>​Network Errors:</b> Alerts the user if the API is unreachable.
<b>​Bad Requests: </b>Provides clear feedback if a user searches for a non-existent location.
<b>​Loading States: <\b>Displays skeletons or spinners to improve Perceived Performance.