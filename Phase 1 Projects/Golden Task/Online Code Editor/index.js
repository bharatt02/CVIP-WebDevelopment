function run() {
    try {
        // Get user input
        let html = document.getElementById("html-id").value;
        let css = document.getElementById("css-id").value;
        let js = document.getElementById("js-id").value;
        let output = document.getElementById("output");

        // Update HTML and CSS in the output iframe
        output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";

        // Create a script element for JavaScript and append it to the iframe
        let scriptElement = output.contentDocument.createElement("script");
        scriptElement.text = js;

        // Execute JavaScript code in a try-catch block for error handling
        output.contentWindow.onerror = function (error) {
            console.error("JavaScript error:", error.message);
        };

        output.contentDocument.body.appendChild(scriptElement);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}
