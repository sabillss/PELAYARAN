function prediksiKeamanan() {
    const angin = parseFloat(document.getElementById('angin').value);
    const gelombang = parseFloat(document.getElementById('gelombang').value);
    const jenisKapal = document.getElementById('jenisKapal').value;

    if (isNaN(angin) || isNaN(gelombang)) {
        document.getElementById('hasil').innerHTML = 'Harap masukkan nilai yang valid.';
        return;
    }

    let anginSangatRendah = 0, anginRendah = 0, anginSedang = 0, anginTinggi = 0;
    let gelombangSangatRendah = 0, gelombangRendah = 0, gelombangSedang = 0, gelombangTinggi = 0;

    // Fungsi keanggotaan untuk kapal nelayan
    if (jenisKapal === 'nelayan') {
        if (angin < 7) {
            anginSangatRendah = 1; // Sangat Rendah
            anginRendah = 0;
            anginSedang = 0;
            anginTinggi = 0;
        } else if (angin >= 7 && angin <= 8) {
            anginSangatRendah = (8 - angin) / (8 - 7);
            anginRendah = (angin-7)/(8-7);
            anginSedang = 0;
            anginTinggi = 0;
        } else if (angin >= 8 && angin <= 9) {
            anginSangatRendah = 0;
            anginRendah = 1; // Rendah
            anginSedang = 0;
            anginTinggi = 0;
        } else if (angin >= 9 && angin <= 11) {
            anginSangatRendah = 0;
            anginRendah = (11 - angin) / (11 - 9);
            anginSedang = (angin - 9) / (11 - 9);
            anginTinggi = 0;
        } else if (angin >= 11 && angin <= 14) {
            anginSangatRendah = 0;
            anginRendah = 0;
            anginSedang = 1; // Sedang
            anginTinggi = 0;
        } else if (angin >= 14 && angin <= 15) {
            anginSangatRendah = 0;
            anginRendah = 0;
            anginSedang = (15 - angin) / (15 - 14);
            anginTinggi = (angin-14)/(15-14);
        } else {
            anginSangatRendah = 0;
            anginRendah = 0;
            anginSedang = 0;
            anginTinggi = 1; // Tinggi
        }

       // Fungsi keanggotaan untuk gelombang
        if (gelombang >= 0 && gelombang <= 0.5) {
            gelombangSangatRendah = 1; // Sangat Rendah
            gelombangRendah = 0;
            gelombangSedang = 0;
            gelombangTinggi = 0;
        } else if (gelombang >= 0.5 && gelombang <= 0.6) {
            gelombangSangatRendah = (0.6 - gelombang) / (0.6 - 0.5);
            gelombangRendah = (gelombang-0.5)/(0.6-0.5);
            gelombangSedang = 0;
            gelombangTinggi = 0;
        } else if (gelombang >= 0.6 && gelombang <= 0.9) {
            gelombangSangatRendah = 0;
            gelombangRendah = 1;
            gelombangSedang = 0;
            gelombangTinggi = 0;
        } else if (gelombang >= 0.9 && gelombang <= 1.1) {
            gelombangSangatRendah = 0;
            gelombangRendah = (1.1 - gelombang) / (1.1 - 0.9);
            gelombangSedang = (gelombang - 0.9) / (1.1 - 0.9);
            gelombangTinggi = 0;
        } else if (gelombang >= 1.1 && gelombang <= 1.15) {
            gelombangSangatRendah = 0;
            gelombangRendah = 0;
            gelombangSedang = 1; // Sedang
            gelombangTinggi = 0;
        } else if (gelombang >= 1.15 && gelombang <= 1.25) {
            gelombangSangatRendah = 0;
            gelombangRendah = 0;
            gelombangSedang = (1.25 - gelombang) / (1.25 - 1.15);
            gelombangTinggi = (gelombang - 1.15) / (1.25 - 1.15);
        } else {
            gelombangSangatRendah = 0;
            gelombangRendah = 0;
            gelombangSedang = 0;
            gelombangTinggi = 1; // Tinggi
        }
    } else if (jenisKapal === 'ferry') {
        // Logika untuk kapal ferry
        if (angin <= 0) {
            anginSangatRendah = 1; // Sangat Rendah
            anginRendah = 0;
            anginSedang = 0;
            anginTinggi = 0;
        } else if (angin >= 11 && angin <= 12) {
            anginSangatRendah = (12 - angin) / (12 - 11);
            anginRendah = (angin - 11) / (12 - 11);
            anginSedang = 0;
            anginTinggi = 0;
        } else if (angin >= 12 && angin <= 14) {
            anginSangatRendah = 0;
            anginRendah = 1; // Rendah
            anginSedang = 0;
            anginTinggi = 0;
        } else if (angin >= 14 && angin <= 16) {
            anginSangatRendah = 0;
            anginRendah = (16 - angin) / (16 - 14);
            anginSedang = (angin - 14) / (16 - 14);
            anginTinggi = 0;
        } else if (angin >= 16 && angin <= 20) {
            anginSangatRendah = 0;
            anginRendah = 0;
            anginSedang = 1; // Sedang
            anginTinggi = 0;
        } else if (angin >= 20 && angin <= 21) {
            anginSangatRendah = 0;
            anginRendah = 0;
            anginSedang = (21 - angin) / (21 - 20);
            anginTinggi = (angin - 20) / (21 - 20);
        } else {
            anginSangatRendah = 0;
            anginRendah = 0;
            anginSedang = 0;
            anginTinggi = 1; // Tinggi
        }

        if (gelombang >= 0 && gelombang <= 1.25) {
            gelombangSangatRendah = 1; // Sangat Rendah
            gelombangRendah = 0;
            gelombangSedang = 0;
            gelombangTinggi = 0;
        } else if (gelombang >= 1.25 && gelombang <= 1.3) {
            gelombangSangatRendah = (1.3 - gelombang) / (1.3 - 1.25);
            gelombangRendah = (gelombang-1.25)/(1.3-1.25);
            gelombangSedang = 0;
            gelombangTinggi = 0;
        } else if (gelombang >= 1.3 && gelombang <= 1.95) {
            gelombangSangatRendah = 0;
            gelombangRendah = 1;
            gelombangSedang = 0;
            gelombangTinggi = 0;
        } else if (gelombang >= 1.95 && gelombang <= 2.05) {
            gelombangSangatRendah = 0;
            gelombangRendah = (2.05 - gelombang) / (2.05 - 1.95);
            gelombangSedang = (gelombang - 1.95) / (2.05 - 1.95);
            gelombangTinggi = 0;
        } else if (gelombang >= 2.05 && gelombang <= 2.2) {
            gelombangSangatRendah = 0;
            gelombangRendah = 0;
            gelombangSedang = 1; // Sedang
            gelombangTinggi = 0;
        } else if (gelombang >= 2.2 && gelombang <= 2.25) {
            gelombangSangatRendah = 0;
            gelombangRendah = 0;
            gelombangSedang = (2.25 - gelombang) / (2.25 - 2.2);
            gelombangTinggi = (gelombang - 2.2) / (2.25 - 2.2);
        } else {
            gelombangSangatRendah = 0;
            gelombangRendah = 0;
            gelombangSedang = 0;
            gelombangTinggi = 1; // Tinggi
        }

    // Menghitung α predikat untuk setiap aturan
    const alphaPredikat1 = Math.min(anginSangatRendah, gelombangSangatRendah);
    const alphaPredikat2 = Math.min(anginSangatRendah, gelombangSedang);
    const alphaPredikat3 = Math.min(anginRendah, gelombangSangatRendah);
    const alphaPredikat4 = Math.min(anginRendah, gelombangRendah);
    const alphaPredikat5 = Math.min(anginSedang, gelombangSangatRendah);
    const alphaPredikat6 = Math.min(anginSedang, gelombangRendah);
    const alphaPredikat7 = Math.min(anginTinggi, gelombangSangatRendah);
    const alphaPredikat8 = Math.min(anginSedang, gelombangSedang);
    const alphaPredikat9 = Math.min(anginTinggi, gelombangRendah);
    const alphaPredikat10 = Math.min(anginTinggi, gelombangSedang);
    const alphaPredikat11 = Math.min(anginSedang, gelombangTinggi);
    const alphaPredikat12 = Math.min(anginTinggi, gelombangTinggi);

    // Menghitung keanggotaan untuk aman, waspada, dan berbahaya
    const aman = Math.max(alphaPredikat1, alphaPredikat2, alphaPredikat3, alphaPredikat4, alphaPredikat5);
    const waspada = Math.max(alphaPredikat6, alphaPredikat7, alphaPredikat8, alphaPredikat9);
    const berbahaya = Math.max(alphaPredikat10, alphaPredikat11, alphaPredikat12);

    // Defuzzifikasi menggunakan rumus Z
    const zAman = 45; // Output untuk Aman
    const zWaspada = 70; // Output untuk Waspada
    const zBerbahaya = 100; // Output untuk Berbahaya

    // Menghitung hasil defuzzifikasi
    const totalAlpha = aman + waspada + berbahaya;
    const hasil = (aman * zAman + waspada * zWaspada + berbahaya * zBerbahaya) / (totalAlpha || 1); // Menghindari pembagian dengan nol

    let prediksi = '';
    if (hasil < 45) {
        prediksi = 'Aman untuk Berlayar';
    } else if (hasil < 70) {
        prediksi = 'Waspada saat Berlayar';
    } else {
        prediksi = 'Berbahaya untuk Berlayar';
    }

    document.getElementById('hasil').innerHTML = `Hasil Prediksi: <strong>${prediksi}</strong>`;
}
}