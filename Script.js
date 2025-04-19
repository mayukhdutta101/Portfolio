// Initialize EmailJS
(function () {
    emailjs.init("rZvg_8Op8IauQk29m"); // Replace with your real EmailJS Public Key
  })();
  
  // Handle contact form submission
  const form = document.getElementById("contact-form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm('service_o9kvlok', 'template_jblwox9', this)
      .then(() => {
        // SUCCESS popup
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: '✅ I will contact you soon.',
          confirmButtonColor: '#3085d6',
        });
  
        form.classList.add("fade-out");
  
        setTimeout(() => {
          form.reset();
          form.classList.remove("fade-out");
        }, 600); 
  
      }, (error) => {
        // ERROR popup
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '❌ Something went wrong. Please try again later!',
          confirmButtonColor: '#d33',
        });
  
        form.classList.add("shake");
  
        setTimeout(() => {
          form.classList.remove("shake");
        }, 600); 
        console.error("EmailJS Error:", error);
      });
  });
  
// Theme toggle logic
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
});

  