// Assuming you have a button in div1 with an id of 'button1'
document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('div1').style.display = 'none'; // Hide div1
    document.getElementById('div2').style.display = 'block'; // Show div2
});
document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('div2').style.display = 'none'; // Hide div2
    document.getElementById('div1').style.display = 'block';
});

