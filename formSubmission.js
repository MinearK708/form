fetch("https://script.google.com/macros/s/AKfycbyaNSxjgZQrKTZlsR9FS93OnF4qgwE2PFQwhGai7WOL39V8z5UAzCDNVuse87aCXd-a/exec", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObject)
})
.then(response => response.text())
.then(response => {
    alert("Data telah berhasil dikirim: " + response);
    window.location.href = "join-grup.html";
})
.catch(error => {
    console.error('Error:', error);
    alert("Terjadi kesalahan saat mengirim data.");
});
