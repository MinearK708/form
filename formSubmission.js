document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form untuk submit secara default
    
    // Ambil data dari form
    var formData = new FormData(this);
    var dataObject = {};
    formData.forEach(function(value, key) {
        dataObject[key] = value; // Mengubah data menjadi objek JSON
    });

    // Kirim data ke Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbyaNSxjgZQrKTZlsR9FS93OnF4qgwE2PFQwhGai7WOL39V8z5UAzCDNVuse87aCXd-a/exec", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Pastikan header ini ada
        },
        body: JSON.stringify(dataObject)  // Mengirim data dalam format JSON
    })
    .then(response => response.text())  // Mengambil response dalam format text
    .then(response => {
        alert("Data telah berhasil dikirim: " + response);  // Menampilkan hasil dari server
        window.location.href = "join-grup.html";  // Redirect ke halaman selanjutnya
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Terjadi kesalahan saat mengirim data.");
    });
});
