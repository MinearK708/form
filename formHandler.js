// Menangani pengiriman data form ke Google Apps Script
document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form untuk submit seperti biasa
    
    // Mengambil data dari form
    var formData = new FormData(this);
    var dataObject = {};
    formData.forEach(function(value, key) {
        dataObject[key] = value; // Konversi data form ke objek JSON
    });

    // Mengirim data ke Google Apps Script
    fetch("https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject) // Kirim data dalam format JSON
    })
    .then(response => response.text())
    .then(response => {
        alert(response);  // Tampilkan response dari GAS
    })
    .catch(error => console.error('Error:', error));
});
