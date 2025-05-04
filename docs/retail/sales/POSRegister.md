---
title: POS Register
#icon: lightbulb
---

## Daftar Register/Shift

Anda dapat melihat daftar POS Register / Shift di menu `Sales - POS Registers`.

![Register List](/images/04-end-of-day/03-sales-pos-registers-list.png)

Dari Daftar POS Register, pilih salah satu yang mau dilihat. Klik tombol gambar `Mata` yang terletak paling kanan di kolom `Action`.

Di sebelah kanan layar akan muncul keterangan sesuai Register/Shift yang dipilih.

![Register Details](/images/04-end-of-day/04-sales-pos-registers-view.png)

## Print-out Register / Shift

Untuk print-out, tekan tombol warna biru `Print` yang terletak dibawah.

![Register Print-out](/images/04-end-of-day/05-sales-pos-register-cashier-print-receipt.png)

## Sekilas Jurnal EOD Akuntansi

Anda dapat melihat hasil dari proses End Of Day, di menu `Accounting -> Ledger`.

![EOD Transaction List](/images/04-end-of-day/06-sales-pos-eod-ledger-list.png)

Untuk melihat sekilas dari Items, dapat click tanda `+` di kiri, di sebelah Invoice Number.

![EOD Transaction List : Master Details](/images/04-end-of-day/07-sales-pos-eod-ledger-expand.png)

Untuk melihat lebih detail, tekan link yang terdapat di `Invoice Number`.

Untuk Transaksi Sales POS

![Sales Details](/images/04-end-of-day/08-sales-pos-eod-ledger-sales-details.png)

![Payment-In Details](/images/04-end-of-day/09-sales-pos-eod-ledger-payment-in-details.png)

Untuk Transaksi Sales Return / Credit Note / Void

![Credit Note Details](/images/04-end-of-day/10-sales-pos-eod-ledger-credit-note-void-details.png)

![Payment-Out Details](/images/04-end-of-day/11-sales-pos-eod-ledger-credit-note-void-payment-out-details.png)

## Membatalkan End of Day

Anda dapat membatalkan End Of Day jika anda adalah System Administrator atau mempunyai hak untuk membatalkannya. Klik tombol merah `Cancel EOD` untuk melakukannya.

![Confirmation Popup](/images/04-end-of-day/12-sales-pos-registers-cancel-eod.png)

Setelah berhasil, akan muncul notifikasi, dan status Register akan menjadi `Open`.

![POS Register Open](/images/04-end-of-day/13-sales-pos-registers-cancel-eod-success.png)

Dan di General Ledger sudah terhapus data hasil posting End Of Day.

![Empty General Ledger](/images/04-end-of-day/14-sales-pos-registers-cancel-eod-ledgers-cleared.png)
