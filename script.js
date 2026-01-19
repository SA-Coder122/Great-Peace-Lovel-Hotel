/* ============================================
   GREAT PEACE & LOVE HOTEL - JAVASCRIPT
   ============================================ */

// ============================================
// GLOBAL VARIABLES
// ============================================
const phoneNumber = "233534078670";
const whatsappBaseURL = "https://wa.me/";

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

if (mobileToggle) {
  mobileToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "auto";
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInside =
      navMenu.contains(event.target) || mobileToggle.contains(event.target);
    if (!isClickInside && navMenu.classList.contains("active")) {
      mobileToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

// ============================================
// WHATSAPP BOOKING FUNCTIONS
// ============================================

// General booking function
function bookNow() {
  const message = encodeURIComponent(
    `Hello Great Peace & Love Hotel,\n\n` +
      `I'm interested in booking a room. Could you please provide me with:\n` +
      `- Available dates\n` +
      `- Room options and rates\n` +
      `- Any special offers\n\n` +
      `Thank you!`
  );

  window.open(`${whatsappBaseURL}${phoneNumber}?text=${message}`, "_blank");
}

// Room-specific booking function
function bookRoom(roomType) {
  const message = encodeURIComponent(
    `Hello Great Peace & Love Hotel,\n\n` +
      `I'm interested in booking a ${roomType}.\n\n` +
      `Could you please provide:\n` +
      `- Availability for my dates\n` +
      `- Room rate and amenities\n` +
      `- Booking process\n\n` +
      `Thank you!`
  );

  window.open(`${whatsappBaseURL}${phoneNumber}?text=${message}`, "_blank");
}

// Event/Conference booking function
function bookEvent() {
  const message = encodeURIComponent(
    `Hello Great Peace & Love Hotel,\n\n` +
      `I'm interested in booking your conference/event space.\n\n` +
      `Could you please provide:\n` +
      `- Available dates\n` +
      `- Space capacity and setup options\n` +
      `- Catering services\n` +
      `- Rates and packages\n\n` +
      `Thank you!`
  );

  window.open(`${whatsappBaseURL}${phoneNumber}?text=${message}`, "_blank");
}

// Tour booking function
function bookTour() {
  const message = encodeURIComponent(
    `Hello Great Peace & Love Hotel,\n\n` +
      `I'm interested in your organized tours.\n\n` +
      `Could you please provide:\n` +
      `- Available tour destinations\n` +
      `- Tour schedules and duration\n` +
      `- Group size and rates\n` +
      `- Booking process\n\n` +
      `Thank you!`
  );

  window.open(`${whatsappBaseURL}${phoneNumber}?text=${message}`, "_blank");
}

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounter(element) {
  const target = parseFloat(element.getAttribute("data-target"));
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60 FPS
  let current = 0;

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    // Format the number
    if (target % 1 !== 0) {
      // Decimal number (like 9.3)
      element.textContent = current.toFixed(1);
    } else if (target >= 1000) {
      // Large number with comma
      element.textContent = Math.floor(current).toLocaleString();
    } else {
      // Regular number
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Initialize counter animation with Intersection Observer
function initCounters() {
  const statNumbers = document.querySelectorAll(".stat-number");

  if (statNumbers.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        entry.target.classList.add("animated");
        animateCounter(entry.target);
      }
    });
  }, observerOptions);

  statNumbers.forEach((stat) => observer.observe(stat));
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length === 0) return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 100);
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => observer.observe(element));
}

// ============================================
// GALLERY FUNCTIONS
// ============================================

// Gallery filter
function initGalleryFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (filterButtons.length === 0 || galleryItems.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (filter === "all") {
          item.classList.remove("hidden");
          setTimeout(() => {
            item.style.display = "block";
          }, 10);
        } else {
          const category = item.getAttribute("data-category");
          if (category === filter) {
            item.classList.remove("hidden");
            setTimeout(() => {
              item.style.display = "block";
            }, 10);
          } else {
            item.classList.add("hidden");
            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        }
      });
    });
  });
}

// Lightbox functionality
let currentImageIndex = 0;
let galleryImages = [];

function openLightbox(button) {
  const lightbox = document.getElementById("lightbox");
  const galleryItem = button.closest(".gallery-item");
  const img = galleryItem.querySelector("img");
  const title = galleryItem.querySelector("h3").textContent;

  // Get all visible gallery items
  const visibleItems = Array.from(
    document.querySelectorAll(".gallery-item:not(.hidden)")
  );
  galleryImages = visibleItems.map((item) => ({
    src: item.querySelector("img").src,
    alt: item.querySelector("img").alt,
    title: item.querySelector("h3").textContent,
  }));

  currentImageIndex = visibleItems.indexOf(galleryItem);

  showLightboxImage(currentImageIndex);
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

function navigateLightbox(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  } else if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }

  showLightboxImage(currentImageIndex);
}

function showLightboxImage(index) {
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");

  if (galleryImages[index]) {
    lightboxImage.src = galleryImages[index].src;
    lightboxImage.alt = galleryImages[index].alt;
    lightboxCaption.textContent = galleryImages[index].title;
  }
}

// Lightbox keyboard navigation
document.addEventListener("keydown", function (e) {
  const lightbox = document.getElementById("lightbox");
  if (lightbox && lightbox.classList.contains("active")) {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      navigateLightbox(-1);
    } else if (e.key === "ArrowRight") {
      navigateLightbox(1);
    }
  }
});

// Close lightbox when clicking outside image
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  lightbox.addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox();
    }
  });
}

// ============================================
// FAQ ACCORDION
// ============================================

function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length === 0) return;

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

function handleContactSubmit(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Create WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:*\n${formData.message}`
  );

  // Open WhatsApp
  window.open(
    `${whatsappBaseURL}${phoneNumber}?text=${whatsappMessage}`,
    "_blank"
  );

  // Show success message
  alert(
    "Thank you for your message! We will redirect you to WhatsApp to complete your inquiry."
  );

  // Reset form
  event.target.reset();
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");

  if (!backToTopBtn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if href is just "#" or empty
      if (href === "#" || href === "") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src;
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// ============================================
// PRELOADER (Optional)
// ============================================

function hidePreloader() {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 300);
    }, 500);
  }
}

// ============================================
// FORM VALIDATION
// ============================================

function initFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const inputs = form.querySelectorAll(
      "input[required], textarea[required], select[required]"
    );

    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this);
      });

      input.addEventListener("input", function () {
        if (this.classList.contains("error")) {
          validateField(this);
        }
      });
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;

  // Remove previous error
  removeFieldError(field);

  // Check if empty
  if (field.hasAttribute("required") && value === "") {
    showFieldError(field, "This field is required");
    isValid = false;
  }

  // Validate email
  if (field.type === "email" && value !== "") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, "Please enter a valid email address");
      isValid = false;
    }
  }

  // Validate phone
  if (field.type === "tel" && value !== "") {
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(value) || value.length < 10) {
      showFieldError(field, "Please enter a valid phone number");
      isValid = false;
    }
  }

  return isValid;
}

function showFieldError(field, message) {
  field.classList.add("error");
  field.style.borderColor = "#e74c3c";

  const errorDiv = document.createElement("div");
  errorDiv.className = "field-error";
  errorDiv.style.color = "#e74c3c";
  errorDiv.style.fontSize = "0.85rem";
  errorDiv.style.marginTop = "5px";
  errorDiv.textContent = message;

  field.parentNode.appendChild(errorDiv);
}

function removeFieldError(field) {
  field.classList.remove("error");
  field.style.borderColor = "";

  const errorDiv = field.parentNode.querySelector(".field-error");
  if (errorDiv) {
    errorDiv.remove();
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Optimize scroll events
const optimizedScroll = throttle(() => {
  // Add any scroll-related functions here
}, 100);

window.addEventListener("scroll", optimizedScroll);

// ============================================
// PAGE-SPECIFIC INITIALIZATIONS
// ============================================

function initHomePage() {
  // Home page specific functionality
  initCounters();
}

function initRoomsPage() {
  // Rooms page specific functionality
}

function initGalleryPage() {
  // Gallery page specific functionality
  initGalleryFilter();
}

function initContactPage() {
  // Contact page specific functionality
  initFAQ();
}

function initAboutPage() {
  // About page specific functionality
  initCounters();
}

function initAmenitiesPage() {
  // Amenities page specific functionality
}

// ============================================
// INITIALIZATION ON DOM CONTENT LOADED
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("Great Peace & Love Hotel - Website Loaded Successfully");

  // Initialize common features
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
  initLazyLoading();
  initFormValidation();
  hidePreloader();

  // Initialize page-specific features based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  if (currentPage === "index.html" || currentPage === "") {
    initHomePage();
  } else if (currentPage === "rooms.html") {
    initRoomsPage();
  } else if (currentPage === "gallery.html") {
    initGalleryPage();
  } else if (currentPage === "contact.html") {
    initContactPage();
  } else if (currentPage === "about.html") {
    initAboutPage();
  } else if (currentPage === "amenities.html") {
    initAmenitiesPage();
  }

  // Initialize counters on all pages that have them
  if (document.querySelectorAll(".stat-number").length > 0) {
    initCounters();
  }

  // Initialize FAQ on pages that have it
  if (document.querySelectorAll(".faq-item").length > 0) {
    initFAQ();
  }
});

// ============================================
// WINDOW LOAD EVENT
// ============================================

window.addEventListener("load", function () {
  // Add any functionality that needs to wait for all resources to load
  document.body.classList.add("loaded");
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener("error", function (e) {
  console.error("An error occurred:", e.error);
  // You can add error reporting here
});

// ============================================
// OFFLINE DETECTION
// ============================================

window.addEventListener("online", function () {
  console.log("Connection restored");
  // You can show a notification here
});

window.addEventListener("offline", function () {
  console.log("Connection lost");
  // You can show a notification here
});

// ============================================
// BOOKING MODAL FUNCTIONS
// ============================================

let selectedRoomType = "";

// Open booking modal
function openBookingModal(roomType) {
  selectedRoomType = roomType;
  const modal = document.getElementById("bookingModal");
  const roomTypeDisplay = document.getElementById("selectedRoomType");

  if (modal && roomTypeDisplay) {
    roomTypeDisplay.textContent = roomType;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Set minimum date to today
    const today = new Date().toISOString().split("T")[0];
    const checkInInput = document.getElementById("checkIn");
    const checkOutInput = document.getElementById("checkOut");

    if (checkInInput) {
      checkInInput.setAttribute("min", today);
      checkInInput.value = "";
    }

    if (checkOutInput) {
      checkOutInput.setAttribute("min", today);
      checkOutInput.value = "";
    }

    // Add event listener to update checkout min date
    if (checkInInput && checkOutInput) {
      checkInInput.addEventListener("change", function () {
        checkOutInput.setAttribute("min", this.value);
        if (checkOutInput.value && checkOutInput.value < this.value) {
          checkOutInput.value = "";
        }
      });
    }
  }
}

// Close booking modal
function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";

    // Reset form
    const form = document.getElementById("bookingForm");
    if (form) {
      form.reset();
    }
  }
}

// Handle booking form submission
function handleBookingSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Extract form data
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const guests = formData.get("guests");
  const checkIn = formData.get("checkIn");
  const checkOut = formData.get("checkOut");
  const requests = formData.get("requests") || "None";

  // Format dates
  const checkInDate = new Date(checkIn).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const checkOutDate = new Date(checkOut).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Calculate number of nights
  const nights = Math.ceil(
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
  );

  // Create WhatsApp message
  const message = `Hello Great Peace & Love Hotel,

I would like to make a booking with the following details:

*GUEST INFORMATION*
Name: ${name}
Email: ${email}
Phone: ${phone}

*BOOKING DETAILS*
Room Type: ${selectedRoomType}
Number of Guests: ${guests}
Check-in: ${checkInDate}
Check-out: ${checkOutDate}
Number of Nights: ${nights}

*SPECIAL REQUESTS*
${requests}

Please confirm availability and provide pricing information.

Thank you!`;

  // Send via WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");

  // Close modal and show success message
  closeBookingModal();

  // Optional: Show a success message
  alert(
    "Your booking request has been sent via WhatsApp. We'll confirm your reservation shortly!"
  );
}

// Handle contact form submission
function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Extract form data
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Get subject label
  const subjectSelect = form.querySelector("#subject");
  const subjectText = subjectSelect.options[subjectSelect.selectedIndex].text;

  // Create WhatsApp message
  const whatsappMessage = `Hello Great Peace & Love Hotel,

*CONTACT REQUEST*

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subjectText}

Message:
${message}

Thank you!`;

  // Send via WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.open(whatsappUrl, "_blank");

  // Reset form
  form.reset();

  // Show success message
  alert("Your message has been sent via WhatsApp. We'll respond shortly!");
}

// Close modal when pressing Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeBookingModal();
  }
});

// ============================================
// EXPORT FUNCTIONS (for testing or external use)
// ============================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    bookNow,
    bookRoom,
    bookEvent,
    bookTour,
    openBookingModal,
    closeBookingModal,
    handleBookingSubmit,
    handleContactSubmit,
    openLightbox,
    closeLightbox,
    navigateLightbox,
  };
}
