import { createRoot } from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import "./index.css";
// import "./styles/index.less";


const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const element: HTMLElement | null = document.getElementById('root');

root.render(<App element={element}  />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
