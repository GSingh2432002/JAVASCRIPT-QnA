//Write a function to download a file asynchronously and handle the progress and completion events with callbacks.

function downloadFile(url, progressCallback, completionCallback)
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.responseType = "bolb";

    xhr.addEventListener("progress", (event) =>
    {
        //Calculate the progress percentage and invoke the progress callback
        const progress = Math.round((event.loaded / event.total) * 100);
        progressCallback(progress);
    });

    xhr.addEventListener("load",() =>
    {
        //Invoke the completion callback with the download bolb object
        completionCallback(xhr.response);
    });
    xhr.send();
}

//test case
const url = "https://dot-batch-project-assets.vercel.app/devdetective-images.zip";
downloadFile(url,(progress)=>console.log(`Download Progress: ${progress}%`),
(blob)=> console.log(`File Downloaded. Blob size: ${blob.size} bytes`)
);