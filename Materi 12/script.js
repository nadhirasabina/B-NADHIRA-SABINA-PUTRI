function fetchDummyAPI() {
    return new Promise((resolve, reject) => {
      const sukses = Math.random() > 0.3;
      setTimeout(() => {
        if (sukses) {
          resolve({
            pesan: "Data berhasil diambil!",
            data: { id: 1, nama: "Nadhira Sabina", umur: 21 }
          });
        } else {
          reject("Gagal mengambil data dari API");
        }
      }, 2000); // Simulasikan delay jaringan
    });
  }
  
  async function getData() {
    console.log("Mengambil data...");
  
    try {
      const response = await fetchDummyAPI();
      console.log("Respons API:", response);
      console.log("ID:", response.data.id);
      console.log("Nama:", response.data.nama);
      console.log("Umur:", response.data.umur);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  