//Write a function to add a CSS class to an element on the mouseover event.

function addClassOnMouseOver(elementID, className)
{
    //Get the element by ID
    const element = document.getElementById(elementID);

    //Add an event listener to the element for the "mouseover" event
    element.addEventListener("mouseover", () => {
        //Add the class name to the element
        element.classList.add(className);
    });
}

//test case
//Add the "active" class to the "button" element on mouseover
addClassOnMouseOver('button', 'active');