## CHALLENGE CHAPTER 05

untuk menginstall depedencies silahkan ketik **npm i**,
untuk menjalankan server ketik **npm run start**,
untuk menjalankan server mode developer **npm run dev**

## TASK

1. menggabungkan chapter 3 & 4
   Chapter 3 : http://localhost:3000
   Chapter 4 : http://localhost:3000/game

2. membuat API login dengan method POST
   POST : http://localhost:3000/api/login

3. membuat API me dan memasukkan Headers Authorization terlebih dahulu
   GET : http://localhost:3000/api/me

4. membuat error handling ketika route tidak ada di server
   METHOD : http://localhost:3000/random-apasajabisa

   membuat internal server error
   METHOD : http://localhost:3000/internal-server-error

## Result

1. saat mengakses /api/login ;
   jika memasukkan username dan password yang benar akan muncul :
   {
   "status": "Success",
   "ACCESS_TOKEN": ACCESS_TOKEN
   }

   jika memasukkan username/password yang salah dan maka akan muncul :
   {
   "status": "Fail",
   "message": "Username/Password yang anda masukkan salah"
   }

2. saat mengakses /api/me :
   tanpa Authorization :
   {
   "status": "Fail",
   "message": "Masukkan Authorization terlebih dahulu!"
   }

   dengan Authorization dan token yang benar:
   {
   "id": 1,
   "username": "bagas",
   "password": "bagas",
   "iat": 1633862718
   }

   jika Authorization Salah :
   {
   "status": "Fail",
   "message": "Token yang anda masukkan salah!"
   }

3. jika mengakses /internal-server-error :
   {
   "status": "ERROR",
   "message": "500 Internal Server Error"
   }
