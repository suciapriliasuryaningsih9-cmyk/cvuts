index.php
<?php
$pesan_status = "";
if ($ ["REQUEST_METHOD"] == "POST" && isset($_POST['btn_kirim'])) {
    $nama = htmlspecialchars($_POST['txt_nama']);
    $email = htmlspecialchars($_POST['txt_email']);
    $pesan = htmlspecialchars($_POST['txt_pesan']);

    if (!empty($nama) && !empty($email) && !empty($pesan)) {
        $pesan_status = "<div class='alert-success'>Terima kasih
<strong>$nama</strong>, pesan Anda telah berhasil dikirim ke server SMKN
5 Batam!</div>";
    }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-
scale=1.0">
    <title>CV Suci Aprilia Suryaningsih - SMKN 5 Batam</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <header>
        <div class="profile-info">
            <div class="avatar">👤</div>
        </div>
            <h1 style="margin:0;">Suci Aprilia Suryaningsih</h1>
            <p style="margin:5px 0 0; color: gray;">Siswa Teknik
Komputer dan Jaringan SMKN 5 Batam</p>
        </div>
                </div>
        <nav>
            <a href="#profil">Home</a>
            <a href="#skills">Skills</a>
            <a href="#kontak">Contact</a>
            <button id="btn-theme" onclick="toggleTheme()">🌙 Dark
Mode</button>
        </nav>
    </header>

    <div class="main-content">

        <div class="left-column">
            <div class="card" id="profil">
                <h2>PROFIL</h2>
                <h3>👤 BIODATA</h3>
                <p>Pelajar aktif di sekolah SMK 5 Batam.</p>

                <h3>🎓 PENDIDIKAN</h3>
                <ul>
                    <li>SDN 006 Sagulung</li>
                    <li>SMPN 09 Batam</li>
                    <li>SMKN 5 Batam</li>
                </ul>

                <h3>💼 PENGALAMAN KERJA</h3>
                <ul>
                    <li>Rekayasa perangkat lunak (RPL)</li>
                    <li>Teknologi jaringan berbasis luas (TJBL)</li>
                    <li>Administrasi Sistem Jaringan (ASJ)</li>
                    <li>Administrasi Infrastruktur Jaringan (AIJ)</li>
                </ul>
            </div>
        </div>

        <div class="right-column">
            <div class="card" id="skills">
                <h2>NETWORK SKILLS</h2>

                <div class="skill-item">
                    <span class="skill-name">MikroTik RouterOS</span>
                    <div class="progress-bar"><div class="progress-fill"
style="width: 90%;"></div></div>
                </div>

                <div class="skill-item">
                    <span class="skill-name">Cisco Networking</span>
                    <div class="progress-bar"><div class="progress-fill"
style="width: 85%;"></div></div>
                                    </div>

                <div class="skill-item">
                    <span class="skill-name">Linux Server
(Debian/Ubuntu)</span>
                    <div class="progress-bar"><div class="progress-fill"
style="width: 80%;"></div></div>
                </div>

                <div class="skill-item">
                    <span class="skill-name">Network Security</span>
                    <div class="progress-bar"><div class="progress-fill"
style="width: 75%;"></div></div>
                </div>
            </div>

            <div class="card" id="kontak">
                <h2>FORM KONTAK</h2>

                <?php echo $pesan_status; ?>

                <form action="<?php echo $_SERVER['PHP_SELF']; ?>"
method="POST">

                    <div class="form-group">
                        <label for="nama">Nama Lengkap:</label>
                        <input type="text" id="nama" name="txt_nama"
placeholder="Masukkan nama..." required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="txt_email"
placeholder="Masukkan email..." required>
                    </div>

                    <div class="form-group">
                        <label for="pesan">Pesan:</label>
                        <textarea id="pesan" name="txt_pesan" rows="4"
placeholder="Tuliskan pesan..." required></textarea>
                    </div>

                    <button type="submit" name="btn_kirim" class="btn-
submit">KIRIM PESAN</button>
                </form>
            </div>
        </div>

    </div>
    </div>

<script src="script.js"></script>
</body>
</html>

:root {
    --bg-color: #f4f7f6;
    --card-bg: #ffffff;
    --text-color: #333333;
    --primary-color: #0056b3;
    --border-color: #cccccc;
    --progress-bg: #e0e0e0;
}

body.dark-mode {
    --bg-color: #1e1e2e;
    --card-bg: #2d2d3f;
    --text-color: #f1f1f1;
    --primary-color: #4da6ff;
    --border-color: #44445c;
    --progress-bg: #44445c;
}

body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 20px;
    transition:
        background-color 0.3s,
        color 0.3s;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

/* Header Profil */
header {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.profile-info {
    display: flex;
    align-items: center;
    gap: 20px;
}

.avatar {
    width: 70px;
    height: 70px;
    background-color: #bbb;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}

nav {
    display: flex;
    gap: 10px;
    align-items: center;
}

nav a {
    color: var(--text-color);
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
}

#btn-theme {
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 5px;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
}

/* Layout Utama (2 Kolom sesuai sketsa) */
.main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
}

.card h2 {
    margin-top: 0;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 5px;
}

/* Skill Progress Bar */
.skill-item {
    margin-bottom: 15px;
}

.skill-name {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.progress-bar {
    background-color: var(--progress-bg);
    border-radius: 10px;
    height: 12px;
    overflow: hidden;
}

.progress-fill {
    background-color: var(--primary-color);
    height: 100%;
}

/* Form Styling */
.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background-color: var(--bg-color);
    color: var(--text-color);
}

.btn-submit {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

.alert-success {
    background-color: #d4edda;
    color: #155724;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const btn = document.getElementById("btn-theme");
    if (body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light Mode";
    } else {
        btn.innerHTML = "🌙 Dark Mode";
    }
}
