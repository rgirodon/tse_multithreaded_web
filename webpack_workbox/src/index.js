import './styles/style.css';
import './images/unicorn.jpg';

if ("serviceWorker" in navigator)   {
    
    window.addEventListener("load", () => {
    
        navigator.serviceWorker.register("/sw.js");
    });
}