/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 /*Coment : Membuat variable untuk setiap element view*/
/* @membuat Login-script */
/**
 * membuat variable loginFormElement untuk menampilkan form
 * @constant {HTMLElement}
 * */
const loginFormElement = document.querySelector("#loginForm");

/**
 * Membuat variable inputEmailElement untuk tampilan input email
 * @constant {HTMLElement}
 */
const inputEmailElement = document.querySelector("#inputEmail");
/**
 * membuat variable untuk input password
 * @constant {HTMLElement}
 */
const inputPasswordElement = document.querySelector("#inputPassword");

/**Comment : Membuat variable untuk  email
 * @constant {string}
 */
const expectedEmail = "admin@dicoding.com";

/**commenet : variabel expectedpassword untuk menyimpan informasi emauk sementara
 * @constant {string}
 */
const expectedPassword = "superpassword";

/** Comment : menambahkan aksi klik pada button */
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO 1 : Mendapatkan input email dan password pengguna dari form.
  /*Mendapatkan email dan password yang sesuai nilai yang inputkan */
  /** Membuat variable email untuk menyimpan nilai email yang didapatkan saat button di tekan
   * @constant {string}
   */
  const email = inputEmailElement.value;
  /**Membuat variable password untuk menyimpan nilai password yang didapatkan saat button di tekan
   * @constant {string}
   */
  const password = inputPasswordElement.value;

  /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
  /*Memastikan bahwa email dan password  */
  if (email == expectedEmail && password == expectedPassword) {
    /*Jika sesuai akan masuk ke halaman home */
    goToHome();
  } else {
    showPopUp();
  }
});
