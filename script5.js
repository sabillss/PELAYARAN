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
        // Keanggotaan angin
        if (angin < 7) {
            anginSangatRendah = 1;
        } else if (angin >= 7 && angin <= 8) {
            anginSangatRendah = (8 - angin) / (8 - 7);
            anginRendah = (angin - 7) / (8 - 7);
        } else if (angin >= 8 && angin <= 9) {
            anginRendah = 1;
        } else if (angin >= 9 && angin <= 11) {
            anginRendah = (11 - angin) / (11 - 9);
            anginSedang = (angin - 9) / (11 - 9);
        } else if (angin >= 11 && angin <= 14) {
            anginSedang = 1;
        } else if (angin >= 14 && angin <= 15) {
            anginSedang = (15 - angin) / (15 - 14);
            anginTinggi = (angin - 14) / (15 - 14);
        } else {
            anginTinggi = 1;
        }

        // Keanggotaan gelombang
        if (gelombang >= 0 && gelombang <= 0.5) {
            gelombangSangatRendah = 1;
        } else if (gelombang > 0.5 && gelombang <= 1) {
            gelombangSangatRendah = (1 - gelombang) / (1 - 0.5);
            gelombangRendah = (gelombang - 0.5) / (1 - 0.5);
        } else if (gelombang > 1 && gelombang <= 1.25) {
            gelombangRendah = (1.25 - gelombang) / (1.25 - 1);
            gelombangSedang = (gelombang - 1) / (1.25 - 1);
        } else if (gelombang > 1.25 && gelombang <= 1.5) {
            gelombangSedang = 1;
        } else {
            gelombangTinggi = 1;
        }
    } 
    
    // Logika untuk kapal ferry
    else if (jenisKapal === 'ferry') {
        // Keanggotaan angin
        if (angin <= 0) {
            anginSangatRendah = 1;
        } else if (angin >= 11 && angin <= 12) {
            anginSangatRendah = (12 - angin) / (12 - 11);
            anginRendah = (angin - 11) / (12 - 11);
        } else if (angin >= 12 && angin <= 14) {
            anginRendah = 1;
        } else if (angin >= 14 && angin <= 16) {
            anginRendah = (16 - angin) / (16 - 14);
            anginSedang = (angin - 14) / (16 - 14);
        } else if (angin >= 16 && angin <= 20) {
            anginSedang = 1;
        } else if (angin >= 20 && angin <= 21) {
            anginSedang = (21 - angin) / (21 - 20);
            anginTinggi = (angin - 20) / (21 - 20);
        } else {
            anginTinggi = 1;
        }

        // Keanggotaan gelombang
        if (gelombang >= 0 && gelombang <= 1.25) {
            gelombangSangatRendah = 1;
        } else if (gelombang >= 1.25 && gelombang <= 1.3) {
            gelombangSangatRendah = (1.3 - gelombang) / (1.3 - 1.25);
            gelombangRendah = (gelombang - 1.25) / (1.3 - 1.25);
        } else if (gelombang >= 1.3 && gelombang <= 1.95) {
            gelombangRendah = 1;
        } else if (gelombang >= 1.95 && gelombang <= 2.05) {
            gelombangRendah = (2.05 - gelombang) / (2.05 - 1.95);
            gelombangSedang = (gelombang - 1.95) / (2.05 - 1.95);
        } else if (gelombang >= 2.05 && gelombang <= 2.2) {
            gelombangSedang = 1;
        } else if (gelombang >= 2.2 && gelombang <= 2.25) {
            gelombangSedang = (2.25 - gelombang) / (2.25 - 2.2);
            gelombangTinggi = (gelombang - 2.2) / (2.25 - 2.2);
        } else {
            gelombangTinggi = 1;
        }
    }

    // Logika untuk menghitung α (alpha) berdasarkan aturan
    let a1 = Math.min(anginSangatRendah, gelombangSangatRendah);
    let z1 = 0;
    if (a1 == 1) {
        z1 = 45;
    } else if (a1 >= 0 && a1 < 1) {
        z1 = 70 - (a1 * 25);
    } else if (a1 == 0) {
        z1 = 70;
    }

    let a2 = Math.min(anginSangatRendah, gelombangRendah);
    let z2 = 0;
    if (a2 == 1) {
        z2 = 45;
    } else if (a2 >= 0 && a2 < 1) {
        z2 = 70 - (a2 * 25);
    } else if (a2 == 0) {
        z2 = 70;
    }

    let a3 = Math.min(anginRendah, gelombangSangatRendah);
    let z3 = 0;
    if (a3 == 1) {
        z3 = 45;
    } else if (a3 >= 0 && a3 < 1) {
        z3 = 70 - (a3 * 25);
    } else if (a3 == 0) {
        z3 = 70;
    }

    let a4 = Math.min(anginRendah, gelombangSedang);
    let z4 = 0;
    if (a4 == 1) {
        z4 = 45;
    } else if (a4 >= 0 && a4 < 1) {
        z4 = 70 - (a4 * 25);
    } else if (a4 == 0) {
        z4 = 70;
    }

    let a5 = Math.min(anginSedang, gelombangSangatRendah);
    let z5 = 0;
    if (a5 == 1) {
        z5 = 45;
    } else if (a5 >= 0 && a5 < 1) {
        z5 = 70 - (a5 * 25);
    } else if (a5 == 0) {
        z5 = 70;
    }

    let a6 = Math.min(anginSedang, gelombangRendah);
    let z6 = 0;
    if (a6 == 0) {
        z6 = 100;
    } else if (a6 > 0 && a6 <= 1) {
        z6 = 100 - (a6 * 30);
    }

    let a7 = Math.min(anginTinggi, gelombangSangatRendah);
    let z7 = 0;
    if (a7 == 0) {
        z7 = 100;
    } else if (a7 > 0 && a7 <= 1) {
        z7 = 100 - (a7 * 30);
    }

    let a8 = Math.min(anginSedang, gelombangSedang);
    let z8 = 0;
    if (a8 == 0) {
        z8 = 100;
    } else if (a8 > 0 && a8 <= 1) {
        z8 = 100 - (a8 * 30);
    }

    let a9 = Math.min(anginTinggi, gelombangRendah);
    let z9 = 0;
    if (a9 == 0) {
        z9 = 100;
    } else if (a9 > 0 && a9 <= 1) {
        z9 = 100 - (a9 * 30);
    }

    let a10 = Math.min(anginTinggi, gelombangSedang);
    let z10 = 0;
    if (a10 == 1) {
        z10 = 100;
    } else if (a10 >= 0 && a10 < 1) {
        z10 = (a10 * 30) + 70;
    } else if (a10 == 0) {
        z10 = 70;
    }

    let a11 = Math.min(anginSedang, gelombangTinggi);
    let z11 = 0;
    if (a11 == 1) {
        z11 = 100;
    } else if (a11 >= 0 && a11 < 1) {
        z11 = (a11 * 30) + 70;
    } else if (a11 == 0) {
        z11 = 70;
    }

    let a12 = Math.min(anginTinggi, gelombangTinggi);
    let z12 = 0;
    if (a12 == 1) {
        z12 = 100;
    } else if (a12 >= 0 && a12 < 1) {
        z12 = (a12 * 30) + 70;
    } else if (a12 == 0) {
        z12 = 70;
    }

    let a13 = Math.min(anginRendah, gelombangSedang);
    let z13 = 0;
    if (a13 == 1) {
        z13 = 45;
    } else if (a13 >= 0 && a13 < 1) {
        z13 = 70 - (a13 * 25);
    } else if (a13 == 0) {
        z13 = 70;
    }

    let a14 = Math.min(anginRendah, gelombangTinggi);
    let z14 = 0;
    if (a14 == 1) {
        z14 = 100;
    } else if (a14 >= 0 && a14 < 1) {
        z14 = (a14 * 30) + 70;
    } else if (a14 == 0) {
        z14 = 70;
    }

    let a15 = Math.min(anginSangatRendah, gelombangTinggi);
    let z15 = 0;
    if (a15 == 0) {
        z15 = 100;
    } else if (a15 > 0 && a15 <= 1) {
        z15 = 100 - (a15 * 30);
    }

    let a16 = Math.min(anginSangatRendah, gelombangTinggi);
    let z16 = 0;
    if (a16 == 0) {
        z16 = 100;
    } else if (a16 > 0 && a16 <= 1) {
        z16 = 100 - (a16 * 30);
    }
    let a17 = Math.min(anginSangatRendah, gelombangSedang);
    let z17 = 0;
    if (a17 == 0) {
        z17 = 100;
    } else if (a17 > 0 && a17 <= 1) {
        z17 = 100 - (a17 * 30);
    }

    let totalAlpha = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17 ;
    let hasil = 0;

    // Pastikan totalAlpha tidak nol sebelum melakukan pembagian
    if (totalAlpha > 0) {
    hasil = (a1 * z1 + a2 * z2 + a3 * z3 + a4 * z4 + a5 * z5 + 
             a6 * z6 + a7 * z7 + a8 * z8 + a9 * z9 + a10 * z10 + 
             a11 * z11 + a12 * z12 + a13 * z13 + a14 * z14 + a15 * z15 + a16 * z16  + a17 * z17) / totalAlpha;
    } else {
    hasil = 70; // Nilai default jika tidak ada aturan yang aktif
    }  

    // Menambahkan perhitungan hasil panen berdasarkan hasil fuzzy sebelumnya
    let prediksi_aman = 0, prediksi_waspada = 0, prediksi_berbahaya = 0;
    if (hasil == 0){
        prediksi_aman = 1;
        prediksi_waspada = 0;
        prediksi_berbahaya = 0;
    }
    if (hasil > 0 && hasil <= 45) {
        prediksi_aman = 1;
        prediksi_waspada = 0;
        prediksi_berbahaya = 0;
    } else if (hasil >= 35 && hasil <= 70) {
        prediksi_aman = (70 - hasil) / 25;
        prediksi_waspada = (hasil - 45) / 25;
        prediksi_berbahaya = 0;
    } else if (hasil >= 70 && hasil <= 100) {
        prediksi_aman = 0;
        prediksi_waspada = (100 - hasil) / 30;
        prediksi_berbahaya = (hasil - 70) / 30;
    } else if (hasil >= 100) {
        prediksi_berbahaya = 1;
    }

    let kesimpulan = '';
    if (prediksi_aman > prediksi_waspada && prediksi_aman > prediksi_berbahaya) {
        kesimpulan = 'Aman Untuk Berlayar';
    } else if (prediksi_waspada > prediksi_aman && prediksi_waspada > prediksi_berbahaya) {
        kesimpulan = 'Waspada Untuk Berlayar';
    } else if (prediksi_berbahaya > prediksi_aman && prediksi_berbahaya > prediksi_waspada) {
        kesimpulan = 'Berbahaya Untuk Berlayar';
    } else if (prediksi_berbahaya >= prediksi_waspada) {
        kesimpulan = 'Berbahaya Untuk Berlayar';
    } else if (prediksi_waspada >= prediksi_aman) {
        kesimpulan = 'Waspada Untuk Berlayar';
    } else {
        kesimpulan = 'Aman Untuk Berlayar';
    }

    // Menampilkan hasil prediksi dan kesimpulan
    document.getElementById('hasil').innerHTML = `Prediksi: ${kesimpulan}, Hasil: ${hasil}`;
    console.log(`Angin: ${angin}, Gelombang: ${gelombang}, Hasil: ${hasil}, Kesimpulan: ${kesimpulan}`);
}

function resetForm() {
    document.getElementById('angin').value = '';
    document.getElementById('gelombang').value = '';
    document.getElementById('jenisKapal').value = 'nelayan'; // Atur ke nilai default
    document.getElementById('hasil').innerHTML = ''; // Kosongkan hasil
}

function hitungKeanggotaan(x, batasBawah, batasAtas) {
    if (x <= batasBawah) return 1;
    if (x >= batasAtas) return 0;
    return (batasAtas - x) / (batasAtas - batasBawah);
}

