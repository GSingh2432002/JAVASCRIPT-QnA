//Write a function to load an image asynchronously and handle the load event with a callback.

function loadImageAsync(url, callback)
{
    const img = new Image();

    //Set up event listener for when the image has loaded
    img.addEventListener('load', ()=>{
        callback(null, img);
    });

    //set up event listener for when theres an error loading the image
    img.addEventListener('error', () => {
        callback(new Error(`Failed to load image at ${url}`));
    });
    //start loading the image
    img.src = url;
}

//Example usage
loadImageAsync('https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg', (error,img) =>
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        //Add the loaded image to the page
        document.body.appendChild(img);
    }
});