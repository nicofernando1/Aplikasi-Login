/**  @modulw Login-script */
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

  /** Membuat variable email untuk menyimpan nilai email yang didapatkan saat button di tekan
   * @constant {string}
   */
  const email = inputEmailElement.value;
  /**Membuat variable password untuk menyimpan nilai password yang didapatkan saat button di tekan
   * @constant {string}
   */
  const password = inputPasswordElement.value;

  /*Memastikan bahwa email dan password  */
  if (email == expectedEmail && password == expectedPassword) {
    /*Jika sesuai akan masuk ke halaman home */
    goToHome();
  } else {
    showPopUp();
  }
});
