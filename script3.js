function prediksiKeamanan() {
    const angin = parseFloat(document.getElementById('angin').value);
    const gelombang = parseFloat(document.getElementById('gelombang').value);
    const jenisKapal = document.getElementById('jenisKapal').value;

    if (isNaN(angin) || isNaN(gelombang)) {
        document.getElementById('hasil').innerHTML = 'Harap masukkan nilai yang valid.';
        return;
    }

    let hasil = calculateFuzzyLogic(jenisKapal, angin, gelombang);

    document.getElementById('hasil').innerHTML = `Prediksi untuk ${jenisKapal === 'nelayan' ? 'Kapal Nelayan' : 'Kapal Ferry'}: ${hasil}`;
}

function calculateFuzzyLogic(jenisKapal, angin, gelombang) {
    let anginRendah = 0, anginSedang = 0, anginTinggi = 0;
    let gelombangRendah = 0, gelombangSedang = 0, gelombangTinggi = 0;


    // Membership functions for each type of vessel (logic remains the same as before)
    if (jenisKapal === 'nelayan') {
        // Membership functions for angin (nelayan)
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

        // Membership functions for gelombang (nelayan)
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
    } else if (jenisKapal === 'ferry') {
        // Membership functions for angin (ferry)
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

        // Membership functions for gelombang (ferry)
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

    // Calculate α predicates for each rule
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

    // Defuzzification calculations
    let hasil = 0;
    let totalAlpha = 0;

    // Defuzzification for Safe
    const zAman = 35; // z for safe
    const alphaAman = Math.max(alphaPredikat1, alphaPredikat2, alphaPredikat3, alphaPredikat5, alphaPredikat8);
    hasil += alphaAman * zAman;

    // Defuzzification for Caution
    const zWaspada = 60; // z for caution
    const alphaWaspada = Math.max(alphaPredikat4, alphaPredikat6, alphaPredikat9, alphaPredikat10);
    hasil += alphaWaspada * zWaspada;

    // Defuzzification for Dangerous
    const zBerbahaya = 70; // z for dangerous
    const alphaBerbahaya = Math.max(alphaPredikat7, alphaPredikat11, alphaPredikat12);
    hasil += alphaBerbahaya * zBerbahaya;

    // Calculate total α
    totalAlpha = alphaAman + alphaWaspada + alphaBerbahaya;

    // Normalize the defuzzified result
    if (totalAlpha > 0) {
        hasil /= totalAlpha; // Normalize result
    } else {
        hasil = 0; // If no contribution, result is 0
    }

    // Determine prediction
    let prediksi = '';
    if (hasil <= 40) {
        prediksi = 'Aman untuk Berlayar';
    } else if (hasil > 40 && hasil <= 70) {
        prediksi = 'Waspada saat Berlayar';
    } else {
        prediksi = 'Berbahaya untuk Berlayar';
    }

    return prediksi; // Return the prediction for the specific vessel type
}