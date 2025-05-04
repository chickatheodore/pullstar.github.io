---
title: Custom Order/Deposit POS
#icon: lightbulb
---

# Deposit/Custom Point of Sales

## Memulai

![Point of Sales](/images/01-sales-pos/00-sales-menu-pos.png)

Prosesnya sama seperti [Standard POS](/retail/sales/POS.html).

Untuk memulai penjualan POS, anda dapat meng-klik menu `POS` di Sidebar sebelah kiri, atau pojok kanan atas `(Lihat yang ditandai kotak berwarna orange)`.

## Transaksi

Pertama kali anda disarankan untuk memilih Customer yang akan memesan Custom, atau membuat data Customer yang baru kalau belum ada datanya, sesuai panduan di [Preparation](/retail/sales/Preparation.html#customer-baru).

![Select Customer](/images/02-sales-custom-order/39-sales-pos-custom-select-customer.png)

Kemudian anda harus memberi centang pada checkbox `Custom Order/Deposit` yang terletak di sebelah kanan pilihan Customer.

![Custom Order/Deposit Option Checkbox](/images/02-sales-custom-order/40-sales-pos-custom-check-option.png)

Alur transaksinya pun sama seperti [Standard POS](/retail/sales/POS.html).

## Serial Number Dan Notes (Catatan)

Kemudian pada baris produk, anda akan menemukan satu buah tombol berwarna Ungu yang berisi gambar lingkaran `Gear`.

![Options Gear Button](/images/02-sales-custom-order/41-sales-pos-custom-transactions.png)

Fungsinya untuk memasukkan data mengenai Serial Number dari Board (Jika sudah dibuatkan), dan catatan lebih detail mengenai ukuran, spesifikasi, dll, yang diinginkan oleh yang memesan.

![Input Serial Number and Notes](/images/02-sales-custom-order/42-sales-pos-custom-serial-and-notes.png)

## Pembayaran Dimuka (Down Payment)

Tekan tombol `Pay Now` (warna biru) yang terletak di pojok kanan bawah.

Masukkan jumlah pembayaran Deposit atau Down Payment, beserta keterangan lengkap.

![Deposit Amount](/images/02-sales-custom-order/43-sales-pos-custom-payments-deposit-down-payment.png)

Setelah jumlah pembayaran sesuai, lanjutkan dengan membuat custom order.
Tekan tombol biru bertuliskan `Make Custom Order`

![Payment List](/images/02-sales-custom-order/44-sales-pos-custom-payments-deposit-down-payment-list.png)

Struk/Bukti Pembayaran:

![Print Receipt](/images/02-sales-custom-order/45-sales-pos-custom-deposit-down-payment-receipt.png)

## Pembayaran Penuh

Selain menaruh uang muka (down payment), customer juga dapat melakukan pembayaran penuh untuk pesanan Custom Order yang dibuat.

Masukkan jumlah pembayaran sesuai total pesanan, beserta keterangan lengkap.

![Deposit Amount](/images/02-sales-custom-order/46-sales-pos-custom-add-full-payment.png)

Setelah jumlah pembayaran sesuai, lanjutkan dengan membuat custom order.
Tekan tombol biru bertuliskan `Make Custom Order`

![Payment List](/images/02-sales-custom-order/47-sales-pos-custom-full-payment-list.png)

Struk/Bukti Pembayaran:

![Print Receipt](/images/02-sales-custom-order/48-sales-pos-custom-full-payment-receipt.png)


## Serah Terima Pesanan Custom Order

Saat customer datang untuk mengambil pesanan, anda dapat melakukan pencarian untuk yang sudah membayar down payment di [Daftar Penjualan (Belum Lunas)](/retail/sales/#daftar-penjualan-belum-lunas), atau di [Daftar Penjualan](/retail/sales/#daftar-penjualan-semua-data).


Anda dapat melakukan filter untuk Custom Order, dengan type `Custom`.
![Filter by Type](/images/02-sales-custom-order/49-sales-pos-custom-list-filter-type.png)

Atau jika sudah ada Down Payment yang belum dilunasi bisa dicek di:
![Custom Sales Order List (Unpaid or Partially Paid)](/images/02-sales-custom-order/49-sales-pos-custom-list-partially-paid.png)

Kemudian untuk mempercepat proses pelunasan dan penyerahan Custom Order, bisa dilakukan dengan fasilitas `Filter: Invoice Number` yang terletak di pojok kiri atas, sebelum daftar penjualan.
Pencarian dapat dilakukan secara `Ketik Manual`, atau bisa dengan `Scan Barcode` yang ada pada `Struk/Receipt` penjualan Custom Order.

![Search Receipt](/images/02-sales-custom-order/50-sales-pos-custom-search-invoice.png)

Setelah Nomor Invoice sesuai dengan bukti dari `Struk/Receipt`, klik tombol hijau di sebelah kiri yang bertuliskan `Payment`.

![Selected Invoice Ready](/images/02-sales-custom-order/51-sales-pos-custom-selected.png)

## Transaksi Serah Terima

Jika produk yang dipesan belum dimasukkan data `Serial Number` atau `Notes (Catatan)`, anda bisa click tombol dengan gambar lingkaran Gear berwarna Ungu,
Kemudian silahkan lengkapi datanya.

![Input Serial Number / Notes](/images/02-sales-custom-order/52-sales-pos-custom-edit-serial-and-notes.png)

## A. Penyerahan dan Pelunasan (Partially Paid)

Tekan tombol `Pay Now` (warna biru) yang terletak di pojok kanan bawah. Muncul data pembayaran sebelumnya berupa Deposit.

![Previous Deposits/Down Payments](/images/02-sales-custom-order/53-sales-pos-custom-payment-screen-for-partial-payment.png)

Untuk yang Pembayaran Deposit Dimuka baru setengahnya saja, silahkan tambahkan pembayaran sejumlah uang yang masih terhutang.

![Add Payments](/images/02-sales-custom-order/54-sales-pos-custom-payment-add-final-amount.png)

Setelah nilai pembayaran sesuai, silahkan lanjut dengan `Complete Order`.

![Finalizing Custom Order Transaction](/images/02-sales-custom-order/55-sales-pos-custom-payment-ready-to-finish.png)

Contoh Print-out Struk

![Print Receipt](/images/02-sales-custom-order/56-sales-pos-custom-receipt-with-down-payment.png)

## B. Penyerahan dan Pelunasan (Fully Paid)

Tekan tombol `Pay Now` (warna biru) yang terletak di pojok kanan bawah. Muncul data pembayaran sebelumnya berupa Deposit.

![Fully Paid Custom Order](/images/02-sales-custom-order/57-sales-pos-custom-payment-screen-for-fully-paid-deposit.png)

Karena sudah dibayarkan penuh/lunas sebelumnya, tinggal menyelesaikan transaksi dengan menekan tombol `Complete Order`.

Contoh Print-out Struk

![Print Receipt](/images/02-sales-custom-order/58-sales-pos-custom-receipt-for-fully-paid-deposit.png)
