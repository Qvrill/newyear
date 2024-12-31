let isMessageShown = false;

// Inisialisasi Efek Kembang Api
const container = document.getElementById('fireworks');
const fireworks = new Fireworks.default(container, {
    speed: 2,
    acceleration: 1.05,
    friction: 0.95,
    gravity: 1.5,
    particles: 100,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    brightness: { min: 50, max: 80 },
    decay: { min: 0.015, max: 0.03 },
    mouse: { click: true, move: false, max: 1 }
});
fireworks.start();

// Fungsi Menampilkan Pesan Interaktif
function startMessage() {
    if (!isMessageShown) {
        const messageElement = document.getElementById('message');
        const message = `
Happy new year afaa! 🎆
Acil akan tetap sama seperti tahun-tahun lalu 😋
Memang sudah beda, but I still by ur side.

Next tahun 2025 semoga semua yang berantakan di tahun 2024 bisa diperbaiki.
Afaa harus menepati janji, tidak boleh mengulangi kesalahan.
Semoga afaa bijak mengelola keuangan dan jadi pribadi yang lebih kuat.
Jangan terlalu terpengaruh omongan orang lain ya.

Dan semoga afaa cepat jawab pertanyaan Acil 😋❤️
        `;
        typeMessage(messageElement, message);
        isMessageShown = true;
    }
}

// Efek Ketik Otomatis
function typeMessage(element, text) {
    let i = 0;
    const speed = 50; // Kecepatan mengetik dalam ms

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
