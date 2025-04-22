// Wait for the DOM to fully load before executing
document.addEventListener('DOMContentLoaded', function() {

    // Change text content when the button is clicked
    const changeTextBtn = document.getElementById('changeTextBtn');
    const textParagraph = document.getElementById('textParagraph');
    
    changeTextBtn.addEventListener('click', function() {
        textParagraph.textContent = "The text has been changed dynamically!";
    });

    // Modify CSS styles when the button is clicked
    const changeStyleBtn = document.getElementById('changeStyleBtn');
    const styledDiv = document.getElementById('styledDiv');
    
    changeStyleBtn.addEventListener('click', function() {
        styledDiv.style.backgroundColor = 'lightblue';
        styledDiv.style.fontSize = '20px';
        styledDiv.style.padding = '10px';
    });

    // Add a new element when the button is clicked
    const addElementBtn = document.getElementById('addElementBtn');
    const elementContainer = document.getElementById('elementContainer');
    
    addElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is a new dynamically added element!';
        elementContainer.appendChild(newElement);
    });

    // Remove the last added element when the button is clicked
    const removeElementBtn = document.getElementById('removeElementBtn');
    
    removeElementBtn.addEventListener('click', function() {
        const lastElement = elementContainer.lastElementChild;
        if (lastElement) {
            elementContainer.removeChild(lastElement);
        }
    });

});
