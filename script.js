document.getElementById("check-btn").addEventListener("click", function() {
    var text = document.getElementById("text-input").value;
    if (!text) {
        alert("Please input a value");
        return;
    }

    var cleanedText = text.toLowerCase().replace(/[\W_]/g, '');
    var reversedText = cleanedText.split('').reverse().join('');

    var result = cleanedText === reversedText
        ? `"${text}" is a palindrome`
        : `"${text}" is not a palindrome`;

    document.getElementById("result").innerText = result;
});
