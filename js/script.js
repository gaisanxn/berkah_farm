document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle untuk responsif
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

    // Smooth Scrolling untuk anchor links (jika ada)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Validasi Form Kontak (Contoh sederhana, bisa diperluas dengan AJAX)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman

            // Simulasi pengiriman data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Dalam kasus nyata, di sini Anda akan mengirim data ke server (misal: menggunakan fetch API)
                // fetch('your_server_endpoint.php', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({ name, email, message }),
                // })
                // .then(response => response.json())
                // .then(data => {
                //     if (data.success) {
                //         formMessage.textContent = 'Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.';
                //         formMessage.classList.remove('error');
                //         formMessage.classList.add('success');
                //         contactForm.reset();
                //     } else {
                //         formMessage.textContent = 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.';
                //         formMessage.classList.remove('success');
                //         formMessage.classList.add('error');
                //     }
                // })
                // .catch(error => {
                //     console.error('Error:', error);
                //     formMessage.textContent = 'Terjadi kesalahan jaringan. Silakan coba lagi.';
                //     formMessage.classList.remove('success');
                //     formMessage.classList.add('error');
                // });

                // Untuk demo, langsung tampilkan pesan sukses
                formMessage.textContent = 'Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.';
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
                formMessage.style.display = 'block';
                contactForm.reset(); // Mengosongkan form
            } else {
                formMessage.textContent = 'Mohon lengkapi semua bidang yang wajib diisi.';
                formMessage.classList.remove('success');
                formMessage.classList.add('error');
                formMessage.style.display = 'block';
            }

            // Sembunyikan pesan setelah beberapa detik
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});