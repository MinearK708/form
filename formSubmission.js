document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form untuk submit secara default
    
    // Ambil data dari form
    var formData = new FormData(this);
    var dataObject = {};
    formData.forEach(function(value, key) {
        dataObject[key] = value; // Mengubah data menjadi objek JSON
    });

    // Kirim data ke Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbypRx_2ZnfvmmUZqlw2W81t0vM7mA4PshcOVSgHH3uCzUqv8SZfI7OBwMex1Alp1JfD/exec", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject) // Mengirim data dalam format JSON
    })
    .then(response => response.text())
    .then(response => {
        alert("Data telah berhasil dikirim: " + response);  // Menampilkan hasil dari server
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Terjadi kesalahan saat mengirim data.");
    });
});
