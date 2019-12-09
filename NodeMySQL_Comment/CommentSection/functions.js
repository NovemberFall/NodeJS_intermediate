function loadComments() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText;
            var results = JSON.parse(result);
            console.log(results);

            results.forEach((comment) => {
                var node = document.createElement("div");
                var name = document.createElement("H5");
                var date = document.createElement("H6");
                var message = document.createElement("P");

                node.className = 'card-body';
                name.className = 'card-title';
                date.className = 'card-subtitle text-muted';

                var textName = document.createTextNode('Name: ' + comment.userName);
                var textDate = document.createTextNode('Date' + comment.date);
                var textMessage = document.createTextNode(comment.comment);

                name.appendChild(textName);
                date.appendChild(textDate);
                message.appendChild(textMessage);

                node.appendChild(name);
                node.appendChild(date);
                node.appendChild(message);

                document.getElementById('comments').appendChild(node);
            });
        }
    }

    xhttp.open("GET", "/home", true);
    xhttp.send();
}