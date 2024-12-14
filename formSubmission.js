document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form untuk submit secara default
    
    // Ambil data dari form
    var formData = new FormData(this);
    var dataObject = {};
    formData.forEach(function(value, key) {
        dataObject[key] = value; // Mengubah data menjadi objek
    });

    // Menyusun data untuk dikirimkan dalam format URL-encoded
    var urlEncodedData = "";
    for (var key in dataObject) {
        if (dataObject.hasOwnProperty(key)) {
            if (urlEncodedData.length > 0) {
                urlEncodedData += "&";
            }
            urlEncodedData += encodeURIComponent(key) + "=" + encodeURIComponent(dataObject[key]);
        }
    }

    // Kirim data ke Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbx9T-Av8-vPZ4co9UrfCtsVOca04mtjhRSeX7o5vAQRNMhzKRcRdqrJjeUPwlDr43OR/exec", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',  // Format URL-encoded
        },
        body: urlEncodedData  // Mengirim data dalam format URL-encoded
    })
    .then(response => response.text())
    .then(response => {
        alert("Data berhasil dikirim: " + response);
        window.location.href = "join-grup.html";  // Redirect ke halaman selanjutnya
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Terjadi kesalahan saat mengirim data.");
    });
});
