# Solanki Tours - Custom Travel Booking Website

A modern, responsive tour booking website built with HTML, CSS, and JavaScript. This website features a clean design, intuitive navigation, and comprehensive tour package listings.

## Features

### 🎨 Modern Design
- Clean, professional interface with custom branding
- Responsive design that works on all devices
- Smooth animations and transitions
- Beautiful gradient backgrounds and card layouts

### 📦 Package Management
- 15+ tour packages (domestic and international)
- Detailed package information pages
- Advanced filtering and sorting options
- Search functionality by destination and duration

### 🎯 User-Friendly Navigation
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Breadcrumb navigation
- Smooth scrolling

### 📱 Pages Included
1. **Homepage** (index.html)
   - Hero section with call-to-action
   - Featured packages
   - Popular destinations
   - Why choose us section
   - About section
   - Contact information

2. **Packages Page** (packages.html)
   - Complete package listings
   - Filter by category, destination, and duration
   - Sort by various criteria
   - Real-time results count

3. **Package Details** (package-detail.html)
   - Detailed package information
   - Inclusions list
   - Itinerary breakdown
   - Quick inquiry form
   - Related packages
   - Best time to visit information

4. **Booking Page** (booking.html)
   - Comprehensive booking form
   - Personal information section
   - Travel details
   - Budget and preferences
   - Form validation
   - Special requirements field

## File Structure

```
website/
├── index.html              # Homepage
├── packages.html           # All packages listing
├── package-detail.html     # Individual package details
├── booking.html            # Booking form
├── css/
│   └── styles.css         # Main stylesheet
└── js/
    ├── data.js            # Tour packages data
    ├── script.js          # Main JavaScript
    ├── packages.js        # Packages page logic
    ├── package-detail.js  # Package details logic
    └── booking.js         # Booking form logic
```

## Getting Started

### Option 1: Direct Opening
Simply open `index.html` in any modern web browser.

### Option 2: Local Server (Recommended)
For the best experience, use a local web server:

**Using Python:**
```bash
cd website
python -m http.server 8000
```
Then visit: http://localhost:8000

**Using Node.js (with http-server):**
```bash
npm install -g http-server
cd website
http-server
```

**Using VS Code Live Server:**
1. Install the "Live Server" extension
2. Right-click on index.html
3. Select "Open with Live Server"

## Customization

### Updating Tour Packages
Edit `js/data.js` to add, remove, or modify tour packages:

```javascript
{
    id: 1,
    title: "Package Name",
    duration: "3 NIGHTS/4 DAYS",
    destinations: "City1 - City2 - City3",
    price: "₹15,000",
    category: "domestic", // or "international"
    region: "himachal",
    inclusions: ["Inclusion 1", "Inclusion 2"],
    image: "image-url"
}
```

### Changing Colors
Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #f59e0b;  /* Accent color */
    --accent-color: #10b981;     /* Success/highlight color */
}
```

### Contact Information
Update contact details in the footer and contact sections of each HTML file.

## Converting CSV to JSON

If you have tour package data in CSV format, use the included Python script:

```bash
python convert_csv_to_json.py
```

This will generate a `packages.json` file from your CSV data.

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Features Breakdown

### Homepage Features
- Eye-catching hero section with statistics
- Search functionality for quick package lookup
- Featured packages carousel
- Destination grid with images
- Why choose us section with benefits
- About company section
- Contact form
- Footer with quick links

### Package Filtering
- Category: Domestic vs International
- Destination: Specific locations
- Duration: Trip length ranges
- Sorting: By name, duration

### Booking System
- Multi-step form with validation
- Package selection dropdown
- Date picker with minimum date validation
- Traveler count input
- Special interests checkboxes
- Budget range selection
- Terms and conditions acceptance

## Form Validation

The booking form includes comprehensive validation:
- Required fields checking
- Email format validation
- Phone number format validation
- Date validation (future dates only)
- Terms acceptance requirement

## Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## SEO Optimization

- Semantic HTML5 structure
- Descriptive meta tags
- Clean URL structure
- Fast loading times
- Mobile-friendly design

## Future Enhancements

Potential features to add:
- Backend integration for form submissions
- Payment gateway integration
- User authentication and profiles
- Real-time availability checking
- Review and rating system
- Multi-language support
- Currency converter
- Live chat support
- Social media integration
- Blog section for travel tips

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with Flexbox and Grid
- **JavaScript**: Vanilla JS (no frameworks)
- **Google Fonts**: Poppins font family
- **Unsplash**: High-quality images

## Credits

- Design and Development: Custom original design
- Images: Unsplash (placeholder images)
- Icons: Unicode emoji characters
- Fonts: Google Fonts (Poppins)

## License

This is a custom website template for tour booking businesses. Feel free to customize and use for your projects.

## Support

For questions or issues:
- Email: info@Solanki.com
- Phone: +91 98765 43210

## Version

Version 1.0.0 - February 2026

---

Built with ❤️ for Solanki Tours
