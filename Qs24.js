//Write a function to toggle the display of a div element on click event.

function toggleDivDisplayOnClick(divId)
{
    const div = document.getElementById(divId);
    if(div.style.display === "none")
    {
        div.style.display = "block";
    }
    else
    {
        div.style.display = "none";
    }
}

//test case
//HTML :
// <button onclick = "toggle"
// <button onclick = "toggleivDisplayOnClick('myDiv')">Toggle Div Display</button>
// <div id = "myDiv" style = "display:none;">This is the content of the div</div>