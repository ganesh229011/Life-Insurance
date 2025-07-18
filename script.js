// Toggle Dark Mode
function toggleDarkMode() {
  const htmlEl = document.documentElement;
  htmlEl.classList.toggle("dark");
  localStorage.setItem("theme", htmlEl.classList.contains("dark") ? "dark" : "light");
}

// Load saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
});

// Handle Form Submission (Buy Page)
function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("otpModal").classList.remove("hidden");
}

// OTP Verification
function verifyOTP() {
  const enteredOTP = document.getElementById("otpInput").value.trim();
  const correctOTP = "1234"; // Replace with backend integration

  if (enteredOTP === correctOTP) {
    document.getElementById("otpModal").classList.add("hidden");
    document.getElementById("thanksMessage").classList.remove("hidden");
  } else {
    document.getElementById("otpError").classList.remove("hidden");
  }
}

// Close OTP Modal
function closeOTP() {
  document.getElementById("otpModal").classList.add("hidden");
  document.getElementById("otpError").classList.add("hidden");
}
