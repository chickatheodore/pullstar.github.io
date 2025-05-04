---
title: Standard POS
#icon: lightbulb
---

# Point of Sales

## Memulai

![Point of Sales](/images/01-sales-pos/00-sales-menu-pos.png)

Untuk memulai penjualan POS, anda dapat meng-klik menu `POS` di Sidebar sebelah kiri, atau pojok kanan atas `(Lihat yang ditandai kotak berwarna orange)`.

## Register / Shift

Jika belum membuat daftar Register/Shift Baru, maka akan diarahkan untuk membuat.

![New Register / Shift](/images/01-sales-pos/11-sales-pos-register-new.png)

## Sistem Siap

Tampilan awal untuk melakukan transaksi Penjualan

![POS Screen](/images/01-sales-pos/12-sales-pos-screen.png)

## Memilih Customer

Secara default, sistem menganggap semua yang bertransaksi adalah customer umum, dalam hal ini di sistem di-set sebagai `Walk In Customer`.
Anda bisa mendaftarkan Customer baru jika memang diminta di [Preparation](/retail/sales/Preparation.html#customer-baru), 
atau sebuah keharusan jika menggunakan transaksi [POS Custom Order](/retail/sales/CustomOrder.html).

## Barcode Scan

Untuk menambahkan suatu Produk kedalam daftar Penjualan, anda tinggal melakukan Scan terhadap Barcode yang tersedia di masing-masing Produk.

![Barcode Scan Mode Ready](/images/01-sales-pos/17-sales-pos-barcode-scan.png)

## Pencarian Produk

Anda dapat melakukan pencarian produk (Karena barcode hilang/tidak bisa terbaca, atau sebab yang lain). Tekan tombol `F2` di keyboard, atau klik tombol pencarian yang terletak di sebelah kanan.

![Product Search Mode Ready](/images/01-sales-pos/20-sales-pos-product-search.png)

Jika sudah dalam mode Pencarian, maka input akan berwarna Kuning. Anda bisa memasukkan kata kunci berupa bagian dari Nama Produk, SKU, ataupun Nama Brand.

![Product Search Result](/images/01-sales-pos/21-sales-pos-product-search-result.png)

Jika Produk yang anda cari ditemukan, maka anda tinggal memilih dari list sesuai dengan Produk yang akan dijual.

## Tambahan Produk

Jika ada kasus dimana mau tidak mau harus ada perbedaan perlakuan terhadap suatu produk. 

Misalnya Shopping Bag, diberikan cuma-cuma kepada Customer sebagai FOC (Free of Charge) sebagai wadah belanjaan, sedangkan Shopping Bag tersebut juga sebagai produk untuk dijual.

Maka anda hanya perlu menambahkan tanda `"+"` di depan, baik di input `Barcode Scan` ataupun di `Product Search`.

![Add Same Product (Barcode Scan)](/images/01-sales-pos/18-sales-pos-add-same-product-barcode.png)

![Add Same Product (Product Search)](/images/01-sales-pos/22-sales-pos-add-same-product-search.png)

Hasilnya akan ada dua baris Produk, dengan identitas yang sama, namun bisa dengan perlakuan yang berbeda.

![Same Product (Barcode Scan) Result](/images/01-sales-pos/19-sales-pos-same-products-list.png)

![Same Product (Product Search) Result](/images/01-sales-pos/23-sales-pos-same-products-list-many.png)

## Beralih mode antara Barcode atau Search

Untuk beralih dari Barcode ke Search atau sebaliknya dari Search ke Barcode, tekan tombol `F2` pada keyboard, atau atau klik tombol di sebelah kanan.

## Menghapus Baris Transaksi

Ada kalanya anda harus menghapus atau mengubah data pada Baris Produk.

Untuk menghapus Produk dari daftar, klik tombol `Tong Sampah` yang terletak paling kanan (ditandai kotak warna merah).

![Delete Button](/images/01-sales-pos/25-sales-pos-delete-button.png)

## Mengubah Data Transaksi

Anda memerlukan hak akses untuk melakukan perubahan, silahkan hubungi `Supervisor` atau `Administrator` untuk mendapatkan otoritas.

Untuk mengubah data dari daftar, entah nominal `Discount` (Rate atau Value), `PPN`, ataupun `Free of Charge`, klik tombol `Pensil` yang terletak di sebelah kiri tombol delete (ditandai kotak warna hijau).

![Edit Button](/images/01-sales-pos/24-sales-pos-edit-button.png)

Tekan tombol `Unlock` (warna merah) untuk mendapatkan persetujuan.

![Unlock Approval](/images/01-sales-pos/26-sales-pos-line-unlock.png)

`Supervisor` atau `Administrator` akan memasukkan PIN mereka:

![Supervisor/Admin Authorization](/images/01-sales-pos/27.sales-pos-line-pin-authorization.png)

Setelah mendapatkan persetujuan, anda bisa mengubah Price, Discount Rate, PPN, dan Free of Charge.

![Change Price](/images/01-sales-pos/29-sales-pos-line-change-price.png)

![Change Discount](/images/01-sales-pos/30-sales-pos-line-change-discount.png)

![Free Of Charge](/images/01-sales-pos/31-sales-pos-line-free-of-charge.png)

Note: Free Of Charge will be marked `FOC` on Transaction Line.

![FOC Mark](/images/01-sales-pos/32-sales-pos-transactions-with-foc.png)

## Pembayaran

Tekan tombol `Pay Now` (warna biru) yang terletak di pojok kanan bawah.

![Payment Screen](/images/01-sales-pos/33-sales-pos-payments-screen.png)

Kemudian Pilih Metode Pembayaran beserta jumlah uangnya.

![Add Payment Screen](/images/01-sales-pos/34-sales-pos-payment-add.png)

![Single Payment](/images/01-sales-pos/35-sales-pos-payments-added.png)

Sistem dapat melakukan Payment menggunakan lebih dari 1 (satu) jenis Metode Pembayaran.

![Add More Payments](/images/01-sales-pos/36-sales-pos-payment-add-more.png)

![Multiple Payments](/images/01-sales-pos/37-sales-pos-payment-multiple-mode.png)

## Struk/Bukti Pembayaran

![Print Receipt](/images/01-sales-pos/38-sales-pos-print-receipt.png)

## Menunda / Hold Transaksi

Pada saat sudah Scan produk di kasir, dan Customer ingin menunda sebentar karena ingin mencari produk yang akan ditambahkan dalam daftar belanja,
kasir dapat memasukkan ke Cart sementara dengan menekan tombol `Hold`, yang terdapat di pojok sebelah kanan bawah, sebelah kanan tombol Pay Now.

Ini akan memberikan kesempatan kepada Customer berikutnya yang hendak melakukan transaksi pembelian.

![Hold / Draft Button](/images/01-sales-pos/39.holding-transactions.png)

Akan muncul konfirmasi apakah akan menyimpan daftar yang sudah di scan kedalam draft/hold/cart.

![Confirmation](/images/01-sales-pos/40.hold-confirmation.png)

Setelah semuanya tersimpan, kasir dapat memanggil lagi Draft/Hold dengan menekan tombol `Resume` yang terletak di Pojok Kanan Atas, tombol paling kiri yang bertuliskan `Resume`.

![Resume Hold / Draft](/images/01-sales-pos/41.resume-select-hold-draft.png)

Silahkan melakukan pencarian di daftar Hold/Draft.

![Print Receipt](/images/01-sales-pos/42.selecting-hold-draft.png)

Ketika sudah ditemukan, kemudian tekan tombol `Select Invoice`.

![Print Receipt](/images/01-sales-pos/43.select-to-resume.png)

Kasir tinggal melanjutkan transaksi seperti POS biasanya.

![Print Receipt](/images/01-sales-pos/44.continue-transaction.png)
