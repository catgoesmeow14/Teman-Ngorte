<!-- # Kelompok 2 - Teman Ngorte. -->
<a id="frontend"></a>
<h1 align="center" width="100%">
    <b>Kelompok 2 - Teman Ngorte. <br>
    ※※※
</h1>

# **Anggota**
- ### Vidya Chandradev - 1905551067 ([catgoesmeow14](https://github.com/catgoesmeow14))
- ### Anak Agung Istri Prabhaisvari Sadhaka - 1905551044 ([prbisv](https://github.com/prbisv))
- ### I Putu Bayu Adhya Wiratama - 1905551059 ([TamaWira](https://github.com/TamaWira))
- ### I Gusti Made Diva Widia Wiartha - 1905551081 ([divawidia](https://github.com/divawidia))
- ### Ni Luh Gede Midya Frangginie - 1905551110 ([Midyafn](https://github.com/Midyafn)) 
  
---
# **Teman Ngorte.**

<p align="center" width="100%">
    <img width="20%" src="https://i.ibb.co/FstxsVK/teman-ngorte-logo-01.png"> 
</p>

[Teman Ngorte](https://chatbot-app-three.vercel.app/) adalah aplikasi berbasis website sebagai media untuk mengekspresikan perasaan penggunanya agar dapat menghilangkan stres melalui fitur chatbot.

---

## **Website Teman Ngorte** ➡️ **[Teman Ngorte](https://chatbot-app-three.vercel.app/)**

## **Login**
> ### Username : `pencurhat`  
> ### Password : `curhatdong`

---

# **Fitur Front-End✨**

1. Tampilan sudah responsif untuk smartphone dan desktop📱💻
2. Icon title merupakan logo Teman Ngorte dan title  sudah menyesuaikan page, seperti : `Login | Teman Ngorte` 
3. Jika membuka rute manapun, misal '/chat' atau '/' di kondisi `belum login`, akan selalu kembali ke '/login'
4. Jika membuka rute '/login'  di kondisi `sudah login`, misal di halaman dashboard atau chat, akan selalu back ke '/'.
5. Halaman Login : 
   1. logo Teman Ngorte. di sebelah kiri form login
   2. Button See Password beserta Tooltip
   3. Button login tidak dapat di-klik jika belum ada input-an dan saat proses loading ketika login, dengan tujuan mengurangi spam klik.
   4. Button `login guest` hilang jika `login with username`
   5. Button `login with username` hilang jika `login guest`
   6. Ada `alert` yang didapat dari response API kalo username dan password ada yang keliru
6. Halaman Dashboard : 
   1. Ada component Appbar yang berisi nama page dan button logout
   2. Ada tooltip di button logout
   3. Menampilkan username yang jika dihover bisa membesar dan ukuran parentnya menyesuaikan
   4. Jika login guest, dashboard menampilkan Guest sebagai username, di mana Guest ini merupakan `username alias` yang digunakan untuk menimpa username guest yang asli yang didapat dari fetching API
   5. Button menuju chat memiliki animasi saat dihover
7. Ada proses loading yang lamanya tergantung pada seberapa lama React me-render isi chat yang di-fetching dari API
8. Halaman Chatroom : 
   1. Chat akan auto scroll ke chat terbaru
   2. Tanggal juga muncul jika chat sudah beumur lebih dari satu hari
   3. Ada button back ke dashboar yang berisi tooltip jika dihover
   4. Ada foto profil untuk bot dan pengguna
   5. Warna bubble chat antara bot dan pengguna berbeda
   6. Inputan chat sudah support multi-line, dan akan muncul scroll kalo lebih dari 5 line
   7. Lebar dari input juga auto menyesuaikan dengan isi chat, dengan batas 5 baris.
   8. Button send berisi tooltip jika dihover.
   9. Chat auto scroll ke bawah jika chat terkirim dan saat mendapat respon dari bot

9. Logout :
   1. Klik button back ke dashboard yang isi tooltip jika dihover
   2. Ada tooltip di button logout yang ada di bagian kanan atas dashboard
   3. Ada alert dari Frontend jika klik button logout
   4. Tidak ada yang terjadi jika klik `cancel` pada alert
   5. Klik button logout lagi. Klik `OK` pada alert, dan halaman akan kembali ke login

---

<h2 align="center" width="100%">
    ※※※ <br>
    <a href="#frontend">☝🏻 <b>Kembali ke Atas</a> <br>
    ※※※
</h2>

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.