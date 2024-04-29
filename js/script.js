document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get user input
    var age = parseInt(document.getElementById('age').value);
    var dayOfWeek = document.getElementById('dayOfWeek').value;

    // Check museum entry conditions
    var result = "";
    if (age < 5 || age > 95) {
        result = "You get in for FREE!";
    } else if ((age >= 12 && age <= 21) || dayOfWeek === "Tuesday" || dayOfWeek === "Thursday") {
        result = "You get a DISCOUNT (student price).";
    } else {
        result = "You have to pay REGULAR price.";
    }

    // Display result
    document.getElementById('result').textContent = result;
});
