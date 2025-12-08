# Weather-Application
A production-grade React application that delivers real-time weather data with a focus on resilient architecture, maintainable code, and dynamic user experience.
<br>
​About The Project
​This isn't just a weather display—it is a demonstration of modern frontend architecture. Built with React.js and integrated with the Weatherstack API, this application moves beyond basic functionality to showcase custom hook engineering, scalable component design, and graceful error handling.
<br>
Key Features
​Custom API Hooks: Leverages a custom-engineered hook for asynchronous fetching, isolating data logic from UI components for better clarity and reusability.
​Resilient Data Pipeline: Implements advanced async/await flows with robust error handling to manage network failures or invalid location queries gracefully.
​Modular & Scalable Architecture: Built using a component-driven methodology, ensuring the codebase is easy to maintain and ready for future features like 5-day forecasts.
​Dynamic UI: The interface (icons and backgrounds) automatically adapts based on current weather conditions (e.g., sunny, rainy, cloudy) for an immersive user experience.
<br>
The Custom Hook Approach
​Instead of cluttering components with useEffect fetch calls, this project utilizes a custom hook (e.g., useWeather) to manage the lifecycle of data requests.
​Separation of Concerns: UI components only care about displaying data, not fetching it.
​Reusability: The fetching logic can be easily reused across different parts of the app.
​Error Handling Strategy
​The application handles edge cases proactively:
​Network Errors: Alerts the user if the API is unreachable.
​Bad Requests: Provides clear feedback if a user searches for a non-existent location.
​Loading States: Displays skeletons or spinners to improve Perceived Performance.