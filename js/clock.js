// IIFE
(() => {

    function updateClock() {
        const clockContainer = document.querySelector('.clock');
        clockContainer.innerText = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000);

})();

