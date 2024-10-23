// Add Student

document.getElementById('scoreForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const score1 = parseFloat(document.getElementById('score1').value);
    const score2 = parseFloat(document.getElementById('score2').value);
    const score3 = parseFloat(document.getElementById('score3').value);

    const studentData = {
        name: name,
        scores: [score1, score2, score3]
    };

    // Generate a unique key using the name and current timestamp
    const uniqueKey = `${name}_${Date.now()}`;
    localStorage.setItem(uniqueKey, JSON.stringify(studentData));

    alert(`Student ${name} added successfully!`);

    document.getElementById('scoreForm').reset();
});



// Fetch Data



