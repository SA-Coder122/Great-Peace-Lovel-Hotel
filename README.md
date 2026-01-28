# 🏨 Great Peace & Love Hotel – Official Website

A modern, responsive hotel website designed for **Great Peace & Love Hotel**, a boutique hotel located in **Ashalaja, Greater Accra Region, Ghana**.  
The site highlights the hotel’s rooms, amenities, gallery, and services, with **direct WhatsApp booking** for fast and easy reservations.

---

## 📖 Overview

The Great Peace & Love Hotel website is built with **pure HTML, CSS, and JavaScript** to ensure speed, simplicity, and ease of maintenance.  
It provides a smooth user experience across all devices while helping guests explore the hotel and book instantly via WhatsApp.

---

## 🗂 Project Structure

### Main Pages
1. **index.html** – Home page with hero section, features, room previews, and testimonials  
2. **about.html** – Hotel story, core values, and key statistics  
3. **rooms.html** – Room listings with detailed descriptions and booking modal  
4. **amenities.html** – Facilities and services offered by the hotel  
5. **gallery.html** – Filterable image gallery with lightbox view  
6. **contact.html** – Contact form, FAQs, and location details  

### Supporting Files
- **styles.css** – Global styles, layout, animations, and responsiveness  
- **script.js** – JavaScript for interactivity and WhatsApp booking  
- **sitemap.xml** – Sitemap for search engines  
- **robots.txt** – Web crawler instructions  

---

## ✨ Key Features

### 🎨 Design & User Experience
- Fully **responsive design** (mobile, tablet, desktop)
- Elegant color theme:  
  - Gold `#c89d5c`  
  - Dark Blue `#2c3e50`
- Smooth CSS animations and transitions
- Semantic HTML and ARIA labels for accessibility

### 📱 Interactive Functionality
- Mobile-friendly hamburger navigation
- WhatsApp booking with pre-filled messages
- Image gallery with lightbox and filters
- FAQ accordion section
- Animated counters for hotel statistics
- Scroll reveal animations
- Back-to-top floating button

### 📞 Booking System
- One-click **WhatsApp booking**
- Booking modal with room selection
- Contact form with validation
- 24/7 customer support via phone and WhatsApp

---

## 🛠 Technical Details

### Technologies Used
- **HTML5** – Semantic markup
- **CSS3** – Flexbox, Grid, animations, CSS variables
- **JavaScript (Vanilla)** – Interactivity and logic
- **Font Awesome** – Icons
- **Google Fonts** – Playfair Display & Poppins
- **Unsplash** – Placeholder images

### CSS Architecture
- CSS custom properties for consistent theming
- BEM-like class naming
- Mobile-first approach
- Well-commented and sectioned styles

### JavaScript Features
- WhatsApp booking functions:
  - `bookNow()`
  - `bookRoom()`
  - `bookEvent()`
  - `bookTour()`
- Form validation and message formatting
- Gallery filtering and lightbox logic
- Lazy loading and performance optimizations
- Cross-browser compatibility

---

## 🚀 Setup & Deployment

### Local Development
1. Clone or download the project
2. Open `index.html` in any modern browser
3. No dependencies or build tools required

### File Structure
great-peace-love-hotel/
│
├── 📄 index.html # Home page
├── 📄 about.html # About hotel page
├── 📄 rooms.html # Rooms & suites page
├── 📄 amenities.html # Facilities & services
├── 📄 gallery.html # Photo gallery
├── 📄 contact.html # Contact information
│
├── 🎨 styles.css # Main stylesheet
├── ⚡ script.js # Interactive functionality
│
├── 🗺️ sitemap.xml # XML sitemap for SEO
├── 🤖 robots.txt # Robots configuration
└── 📖 README.md # This documentation file

text

## 🚀 Setup & Installation

### Local Development
1. **Clone or download** the project files
2. **Open `index.html`** in any modern web browser
3. **No server required** - works as static files
4. **No dependencies** - all libraries via CDN

### File Customization
To customize for your hotel:

1. **Update Contact Information**
   - Replace `+233 534 078 670` throughout all HTML files
   - Update location in contact sections
   - Modify social media links in footer

2. **Replace Images**
   - Replace Unsplash URLs with actual hotel photos
   - Update image alt text for accessibility
   - Optimize images for web performance

3. **Modify Content**
   - Edit text content in HTML files
   - Update room descriptions and pricing
   - Modify amenities and services

4. **Styling Customization**
   - Edit CSS variables in `:root` section of `styles.css`
   - Modify color scheme in CSS variables
   - Adjust spacing and typography as needed

## 🔧 Customization Guide

### CSS Variables (Theme Colors)
```css
:root {
  --primary-color: #c89d5c;      /* Gold color */
  --primary-dark: #a67d3d;       /* Darker gold */
  --secondary-color: #2c3e50;    /* Dark blue */
  --secondary-dark: #1a252f;     /* Darker blue */
  --accent-color: #e74c3c;       /* Accent red */
  /* ... other variables */
}
JavaScript Configuration
javascript
// Phone number for bookings
const phoneNumber = "233534078670";

// WhatsApp base URL
const whatsappBaseURL = "https://wa.me/";
Adding New Pages
Create new HTML file following existing structure

Copy navigation from existing pages

Add to sitemap.xml

Update navigation links in all pages

📱 Responsive Breakpoints
| Device


Continue
