var utils = {
    getBoxHTML: function (it) {
        var box = "<div class='box'><div class='content'>";
        box += "<h3>" + it.title + "</h3>";
        box += "<img src='" + it.imgUrl + "' alt='" + it.imgDescription +"' />";
        box += "<p class='img-description'>" + it.imgDescription + "</p>";
        box += "<p class='main-text'>" + it.text + "</p>";
        box += "</div></div>";
        return (box);
    },
    getBoxes: function (jsonItems, container) {
        var generatedHTML = ''
        for (index in jsonItems)
            generatedHTML += utils.getBoxHTML(jsonItems[index]);

        generatedHTML += "<div aria-hidden='true' class='hidden-hack'></div>";
        generatedHTML += "<div aria-hidden='true' class='hidden-hack'></div>";
        generatedHTML += "<div aria-hidden='true' class='hidden-hack'></div>";
        document.getElementById(container).innerHTML = generatedHTML;
    },
    getDataFromStaticAsync: function (dataUri, callback, container) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', dataUri, true);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200)
                callback(JSON.parse(this.responseText), container)
        }
        xhr.send();
    },
    fillBoxContainer: function (container, dataUri) {
        utils.getDataFromStaticAsync(dataUri, utils.getBoxes, container);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Handler when the DOM is fully loaded
    utils.fillBoxContainer('box-container', '/static/items.json');
});