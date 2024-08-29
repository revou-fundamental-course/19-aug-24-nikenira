// validasi Login Form

const form = document.getElementById('form-container');
const fullname = document.getElementById('fullname');
const password = document.getElementById('password');
const email = document.getElementById('email');
const repeatpassword = document.getElementById('repeatpassword');
const notelp = document.getElementById('notelp');
const alamat = document.getElementById('alamat');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.add('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.add('error');
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const fullnameValue = fullname.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
  const repeatpasswordValue = repeatpassword.value.trim();
  const notelpValue = notelp.value.trim();
  const alamatValue = alamat.value.trim();

  if (fullnameValue === '') {
    setError(fullname, 'Fullname is required');
  } else {
    setSuccess(fullname);
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 character.');
  } else {
    setSuccess(password);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (repeatpasswordValue === '') {
    setError(repeatpassword, 'Please confirm your password');
  } else if (repeatpasswordValue !== repeatpasswordValue) {
    setError(repeatpassword, "Passwords doesn't match");
  } else {
    setSuccess(repeatpassword);
  }

  if (notelpValue === '') {
    setError(notelp, 'Nomor Telepone is required');
  } else if (notelpValue.length < 13) {
    setError(notelp, 'Notelepon Harus 12 karakter.');
  } else {
    setSuccess(notelp);
  }

  if (alamatValue === '') {
    setError(alamat, 'Alamat is required');
  } else {
    setSuccess(alamat);
  }
};

// Validasi Inquiry Form
function submitInquiryForm(event) {
  // Menghentikan pengiriman form default
  event.preventDefault();

  // Get form fields
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const message = document.getElementById('message').value.trim();

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('DOB:', dob);
  console.log('Gender:', gender);
  console.log('Message:', message);

  // Name validation
  if (name === '') {
    alert('Name must be filled out');
    return false;
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  // Phone number validation
  const phonePattern = /^[0-9]{10,13}$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid phone number (10-13 digits)');
    return false;
  }

  // Tanggal Lahir validation
  if (dob === '') {
    alert('Tanggal Lahir must be selected');
    return false;
  }

  // Gender validation
  if (gender === '') {
    alert('Please select your gender');
    return false;
  }

  // Message validation
  if (message === '') {
    alert('Message must be filled out');
    return false;
  }

  // Menampilkan informasi di layar home
  const displayInformation = document.getElementById('displayInformation');
  displayInformation.innerHTML = `
       <strong>Nama:</strong> ${name}<br>
       <strong>Email:</strong> ${email}<br>
       <strong>Nomor Telepon:</strong> ${phone}<br>
       <strong>Tanggal Lahir:</strong> ${dob}<br>
       <strong>Jenis Kelamin:</strong> ${gender}<br>
       <strong>Pesan/Kesan:</strong> ${message}
   `;

  // Mengosongkan form setelah submit
  document.getElementById('inquiryForm').reset();

  return false; // Mencegah form untuk benar-benar dikirimkan
}
