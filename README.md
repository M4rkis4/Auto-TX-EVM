# EVM Auto Transfer

Konfigurasi dan Otomatisasi transaksi EVM dengan mudah menggunakan bot ini untuk transfer yang efisien.

## Fitur

- 📡 URL RPC dinamis, chain ID, dan integrasi penjelajah dari file JSON.
- 🔄 Transaksi otomatis untuk beberapa alamat.
- 🎯 Transfer yang ditargetkan ke alamat tertentu dari `addresses.json`.
- 🚀 Konfigurasi mudah untuk berbagai jaringan (testnet dan mainnet).
- 🔒 Aman untuk kunci pribadi.

## Panduan

### Prasyarat

Pastikan telah menginstal:

- [Node.js](https://nodejs.org/) (v14 atau Lebih Tinggi)
- npm (Node Package Manager)

### Instalisasi

1. Clone repository:

   ```bash
   git clone https://github.com/M4rkis4/Auto-TX-EVM.git
   cd Auto-TX-EVM
   ```

2. Menginstal Paket:

   ```bash
   npm install
   ```

### Konfigurasi

1. **Menentukan Jaringan**:

   - Anda perlu menentukan detail jaringan dalam file JSON terletak di direktori `/chains`. Buat file JSON: `testnet.json` dan `mainnet.json`.
   - Setiap file harus berisi array objek dengan struktur berikut:

     ```json
     [
         {
             "name": "Nama Jaringan",
             "rpcUrl": "https://rpc-url",
             "chainId": "1234",
             "symbol": "TOKEN",
             "explorer": "https://explorer-url"
         }
     ]
     ```

   - Untuk contoh `testnet.json`:

     ```json
     [
         {
             "name": "Plume Testnet",
             "rpcUrl": "https://plume-testnet-rpc.example.com",
             "chainId": "8888",
             "symbol": "PLUME",
             "explorer": "https://plume-testnet-explorer.example.com"
         }
     ]
     ```

2. **Menentukan Kunci Pribadi**:

   - Simpan kunci pribadi Kamu di dalam file `privateKeys.json` di direktori root:

     ```json
     [
         "0xKUNCI_PRIBADI_KAMU_1",
         "0xKUNCI_PRIBADI_KAMU_2"
     ]
     ```

     **⚠️ Penting**: Jaga keamanan file ini dan hindari mengekspos kunci pribadi Kamu!

3. **Buat File Alamat Target**:

   - Buat file `addresses.json` di direktori root. File ini harus berisi serangkaian alamat target yang ingin Kamu gunakan untuk mentransfer dana.:

     ```json
     [
         "0xALAMAT_TARGET_1",
         "0xALAMAT_TARGET_2"
     ]
     ```

### Cara Penggunaan

1. Jalankan skrip untuk pembuatan alamat acak untuk transaksi:

   ```bash
   npm start
   ```

2. Untuk menggunakan fitur alamat yang ditargetkan, jalankan:

   ```bash
   npm run target
   ```

   - Kamu akan diminta untuk memilih lingkungan jaringan Anda (Testnet/Mainnet) dan memilih jaringan dari daftar yang disediakan.
   - Tentukan jumlah transaksi yang ingin Kamu proses!

## Donasi

Jika Kamu ingin memberikan Donasi:

- **Solana**: `9shcbqb4ag1mwPoMnPi365f6qQhR52JUgovuTFK9iUfv`
- **EVM**: `0x5ddA3d0d29ebC82a0f8baFe4091BCdA2b417C974`
- **BTC**: `bc1q6r5qkrmtn2es37cxw02ywfnr2u5ws22u9y0m0297ah5u8d2vgexsaevtn3`

### Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat berkas `LICENSE` untuk detailnya.
