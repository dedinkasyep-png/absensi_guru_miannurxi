async function kirimAutoKeGrupWA(nama, waktu) {
    const targetGrupID = "1enrdn.api.infobip.com"; // Ganti dengan ID Grup
    const tokenAPI = "745b777d13422951a414a37e182529de-9c82706e-1633-43dc-b3c9-25091b7bfbf4"; // Ganti dengan Token Gateway

    const pesan = `*NOTIFIKASI ABSENSI QR*\n\n` +
                  `👤 *Nama:* ${nama}\n` +
                  `⏰ *Waktu:* ${waktu}\n` +
                  `✅ *Status:* Hadir`;

    try {
        await fetch('https://api.fonnte.com/send', {
            method: 'POST',
            headers: {
                'Authorization': tokenAPI,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                target: targetGrupID,
                message: pesan
            })
        });
        console.log("Pesan berhasil dikirim langsung ke grup!");
    } catch (error) {
        console.error("Gagal mengirim pesan ke grup:", error);
    }
}
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { width: 300, height: 250 }, false
);