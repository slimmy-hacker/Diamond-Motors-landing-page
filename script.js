// Interactive Feature 1: Quote Button with Random Luxury Quote
const quotes = [
  "Luxury is in each detail. – Hubert de Givenchy",
  "The cars we drive say a lot about us. – Alexandra Paul",
  "A diamond on wheels is true freedom. – Diamond Motors"
];

document.getElementById("quoteBtn").addEventListener("click", () => {
  alert(quotes[Math.floor(Math.random() * quotes.length)]);
});

// Interactive Feature 2: Car Gallery Info
const carCards = document.querySelectorAll(".car-card");
const carInfo = document.getElementById("carInfo");

carCards.forEach(card => {
  card.addEventListener("click", () => {
    const carName = card.getAttribute("data-name");
    carInfo.textContent = `You selected the ${carName}. Book a test drive today!`;
  });
});

// Form Validation (Custom)
document.getElementById("testDriveForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const car = document.getElementById("car").value;
  const formMessage = document.getElementById("formMessage");

  // Validation rules
  if (name.length < 3) {
    formMessage.textContent = "Name must be at least 3 characters.";
    formMessage.style.color = "red";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMessage.textContent = "Enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }
  if (car === "") {
    formMessage.textContent = "Please select a car.";
    formMessage.style.color = "red";
    return;
  }

  // Success
  formMessage.textContent = `Thank you ${name}, your test drive for the ${car} is booked!`;
  formMessage.style.color = "limegreen";

  // Reset form
  document.getElementById("testDriveForm").reset();
});
