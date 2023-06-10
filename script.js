document.getElementById('convert-btn').addEventListener('click', function() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];

    var reader = new FileReader();
    reader.onload = function(e) {
        var content = e.target.result;
        var convertedContent = content.toUpperCase();

        document.getElementById('output').textContent = convertedContent;
        document.getElementById('output-container').style.display = 'block';
    };
    
    reader.readAsText(file);
});