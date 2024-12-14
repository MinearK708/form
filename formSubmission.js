fetch("https://script.google.com/macros/s/AKfycbyoVfV8-7j8m2Gg3N0QSRBIfUDgSIEIO-nuvXpnuQyuxZxzYefxLoZs3mYsXpB7QuCv/exec", {
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
