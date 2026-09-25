# Human Social Service Nepal (HSSN) - Website Documentation
**मानव सामाजिक सेवा नेपाल (HSSN)**  
*Government Registered Non-Profit Organization • Established 2014 A.D. (२०७० B.S.)*  
*Location: Chandragiri Municipality, Kathmandu, Nepal*

---

## 1. Project Overview

This website is a clean, modern, and responsive official web portal built for **Human Social Service Nepal (HSSN)**. It has been crafted using clean, industry-standard web technologies: **HTML5**, **Bootstrap 5.3 (via CDN)**, **CSS3**, and **vanilla JavaScript**.

The application is completely self-contained, light, and optimized for instant loading on both mobile and desktop devices. It requires no complex build pipelines or server frameworks.

---

## 2. Directory Structure

```text
├── index.html          # Main HTML structure, content, SEO tags & Schema.org JSON-LD
├── style.css           # Custom styling, color palette, cards, and responsive rules
├── script.js           # Client-side JavaScript for form validation & Web3Forms integration
├── images/
│   └── logo.jpg        # Official circular emblem logo (navbar, hero, and footer)
└── README.md           # Technical documentation
```

### Production Hosting & Deployment
When deploying to **cPanel, Shared Hosting, Apache, Nginx, GitHub Pages, Netlify, or Vercel**, you simply upload these files:
1. `index.html`
2. `style.css`
3. `script.js`
4. `images/logo.jpg` (inside an `images` folder)

No server installation, Node.js runtime, or compilation steps are needed on your production server.

---

## 3. Technology Stack

| Layer | Technology | Delivery / Provider |
|---|---|---|
| **Structure & Semantic Markup** | HTML5 | Native Browser Standard |
| **Grid System & Components** | Bootstrap 5.3.3 | CDN (`jsdelivr.net`) |
| **Icons** | Bootstrap Icons 1.11.3 | CDN (`jsdelivr.net`) |
| **Typography** | Plus Jakarta Sans & Mukta | Google Fonts CDN |
| **Styling & Theme** | Custom CSS3 (`style.css`) | Local Stylesheet |
| **Client-side Interactivity** | Vanilla JavaScript (`script.js`) | Local Script |
| **Contact Form Gateway** | Web3Forms API | Secure HTTPS Client-side Endpoint |

---

## 4. Website Sections & Architecture

1. **Top Header Bar**:
   - Organization contact numbers: `+977-9860672108`
   - Official emails: `hssnnepal@gmail.com`
   - Establishment badge: *Est. 2014 A.D. (२०७० B.S.)*
   - Municipality location: Chandragiri, Kathmandu, Nepal

2. **Main Navigation (`navbar`)**:
   - Features the high-resolution HSSN circular emblem logo (`images/logo.jpg`)
   - Bilingual organization branding (*Human Social Service Nepal* / *मानव सामाजिक सेवा नेपाल*)
   - Smooth navigation menu links with auto-collapse functionality on mobile devices

3. **Hero Section**:
   - Core value proposition and mission statement for empowering persons with disabilities, orphans, Dalits, Madhesis, and marginalized groups
   - Immediate Call-to-Action (CTA) buttons: "Send an Inquiry" and "Learn About Us"
   - Key impact metrics (10+ Years of Dedication, 15+ Entrepreneurs Seed-Funded, 100% Community Driven)
   - Prominently framed seal emblem card

4. **Organizational Profile (`#about`)**:
   - Comprehensive background covering the organization's registration and social commitment in Chandragiri, Kathmandu
   - Defined Mission & Vision statements

5. **Strategic Objectives (`#objectives`)**:
   - Six structured program pillars:
     1. Obstacle Recognition
     2. Free Community Health Camps
     3. Sustainable Income Generation
     4. Policy Advocacy & Human Rights Lobbying
     5. Skill & Vocational Training
     6. Awareness & Sensitization

6. **Key Achievements & Milestones (`#achievements`)**:
   - Vocational training programs (incense production, sewing, weaving)
   - CBR seed capital grants awarded to 15 entrepreneurs with disabilities
   - Stakeholder and municipal advocacy programs
   - Health screening camps across Chandragiri Ward 10 and Tokha

7. **Future Roadmap (`#future`)**:
   - 7-Point development program including transit shelter facilities, sustained entrepreneurship mentorship, and disability-inclusive local policies

8. **Institutional Partners**:
   - Recognizes collaboration with Chandragiri Municipality, Ministry of Social Development (Bagmati Province), NLAWA, and NFDN

9. **Program & Field Glimpses (`#glimpses`)**:
   - Visual summary cards highlighting medical camps, workshops, seed capital distribution, and policy discussions

10. **Inquiry & Contact System (`#inquiry`)**:
    - **Leadership Contact Card**:
      - President: **Ravi Yasmali**
      - Direct Phone: `+977-9860672108`
      - Primary Emails: `rv.thapa24@gmail.com`, `hssnnepal@gmail.com`
    - **Quick Template Chips**:
      - One-click buttons to autofill inquiry topics for vocational training, health camps, volunteer opportunities, seed capital, or CSR partnerships
    - **Interactive Submission Form**:
      - Real-time client-side validation
      - Spam prevention honeypot
      - Instant feedback dialogs on submission

11. **Footer**:
    - Complete sitemap, program summary, direct contact details, legal copyright, and floating scroll-to-top button

---

## 5. Contact Form Configuration

The contact form is connected to Web3Forms to deliver inquiries directly to the organization's email inbox without requiring any server-side scripts or database maintenance.

### Submission Workflow in `script.js`:
```javascript
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", "d73fcdc5-6657-4312-a451-089d34a13470");

    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
            alert("Success! Your message has been sent to Human Social Service Nepal.");
            form.reset();
        } else {
            alert("Error: " + (data.message || "Failed to submit. Please try again."));
        }
    } catch (error) {
        alert("Something went wrong. Please check your connection and try again.");
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});
```

### Form Fields & Validation:
| Field | Type | Validation Rule |
|---|---|---|
| `access_key` | Hidden | Web3Forms Authentication Key |
| `name` | Text | Required (min. 2 characters) |
| `email` | Email | Required (valid email format) |
| `phone` | Tel | Required (7 to 15 digits) |
| `subject` | Dropdown | Required selection |
| `message` | Textarea | Required (min. 10 characters) |
| `botcheck` | Hidden Checkbox | Honeypot anti-spam protection |

---

## 6. Color Scheme & Brand Identity

The website follows HSSN's official color palette:

- **HSSN Primary Red (`--hssn-red`)**: `#c5221f`
- **HSSN Deep Crimson (`--hssn-dark-red`)**: `#9e1412`
- **HSSN Light Red Tint (`--hssn-light-red`)**: `#fff1f0`
- **Accent Gold (`--hssn-gold`)**: `#d97706`
- **Slate Text & Backgrounds**: `#0f172a`, `#1e293b`, `#334155`

---

## 7. Site Maintenance & Updates

- **Contact Info Updates**:
  Search for `+977-9860672108` or `hssnnepal@gmail.com` in `index.html` to update phone numbers, emails, or office addresses.
- **Logo Replacement**:
  Place any updated circular emblem at `images/logo.jpg`.
- **Form Recipient Change**:
  To route submissions to a different email address, generate a new key on Web3Forms and update the `access_key` in `script.js`.
- **Domain & Hosting (.com.np)**:
  Configure your `.com.np` DNS records to point to your hosting nameservers, upload `index.html`, `style.css`, `script.js`, and `images/` to the `public_html` folder, and enable an SSL certificate.
