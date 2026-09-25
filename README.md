# Human Social Service Nepal (HSSN) - Website Documentation
**मानव सामाजिक सेवा नेपाल (HSSN)**  
*Government Registered Non-Profit Organization • Established 2014 A.D. (२०७० B.S.)*  
*Location: Chandragiri Municipality, Kathmandu, Nepal*

---

## 1. Project Overview

This website is a clean, modern, and fully responsive landing portal designed for **Human Social Service Nepal (HSSN)**. It has been built strictly with pure, lightweight web standards: **HTML5**, **Bootstrap 5.3 (via CDN)**, **CSS3**, and **vanilla JavaScript**. 

There are **no complex frameworks** (no React, no Vue, no Angular) and **no build/bundler dependencies** (no Vite, no Webpack).

---

## 2. Directory Structure

```text
├── index.html          # Main HTML structure, content, SEO metadata & Schema.org JSON-LD
├── style.css           # Custom styling, color variables, cards, responsive rules
├── script.js           # Vanilla JavaScript for form validation & Web3Forms integration
├── images/
│   └── logo.jpg        # Official circular emblem logo (52px navbar, 220px hero, 46px footer)
├── metadata.json       # AI Studio cloud environment configuration
├── package.json        # Container runtime scripts (npm run dev / npm run build)
├── server.js           # Lightweight static file server for AI Studio cloud preview
└── README.md           # This documentation
```

> **Note on Deployment & Export:**  
> If you are deploying to **cPanel, shared hosting, GitHub Pages, Netlify, or Vercel**, you **only need** these 4 items:
> 1. `index.html`
> 2. `style.css`
> 3. `script.js`
> 4. `images/logo.jpg`
>
> `package.json`, `server.js`, and `metadata.json` exist solely so that the Google AI Studio cloud development container can serve the live preview at port 3000.

---

## 3. Technology Stack & CDNs

| Component | Technology | Source |
|---|---|---|
| **Markup & Semantics** | HTML5 | Native browser standard |
| **Grid & Responsive UI** | Bootstrap 5.3.3 | CDN via `jsdelivr.net` |
| **Icons** | Bootstrap Icons 1.11.3 | CDN via `jsdelivr.net` |
| **Typography** | Plus Jakarta Sans & Mukta | Google Fonts CDN |
| **Styling** | Pure CSS3 (`style.css`) | Local file |
| **Client Logic** | Vanilla JavaScript (`script.js`) | Local file |
| **Inquiry Form Delivery** | Web3Forms API | `https://api.web3forms.com/submit` |

---

## 4. Key Sections in `index.html`

1. **Top Emergency & Information Bar**:
   - Location: Chandragiri, Kathmandu, Nepal
   - Phone: `+977-9860672108`
   - Email: `hssnnepal@gmail.com`
   - Year of establishment badge: *Est. 2014 A.D. (२०७० B.S.)*

2. **Navigation Header**:
   - Displays official logo emblem (`images/logo.jpg`)
   - Bilingual title: *Human Social Service Nepal* and *मानव सामाजिक सेवा नेपाल (HSSN)*
   - Quick navigation links with smooth scrolling to `#home`, `#about`, `#objectives`, `#achievements`, `#future`, `#glimpses`, and `#inquiry`
   - Auto-collapses on mobile screens upon clicking any link

3. **Hero Section**:
   - Mission statement highlighting empowerment for persons with disabilities (PWDs), orphans, Dalits, Madhesis, and marginalized communities
   - Action buttons: "Send an Inquiry" and "Learn About Us"
   - Quick statistical impact counter cards:
     - 10+ Years of Service
     - 15+ PWD Entrepreneurs Funded
     - 100% Community Driven Advocacy
   - Hero seal card showcasing the high-resolution logo

4. **Background & Profile (`#about`)**:
   - Detailed organization background and legal base in Chandragiri, Kathmandu
   - Dedicated mission & vision statement cards

5. **Strategic Objectives (`#objectives`)**:
   - Six core organizational objectives:
     1. Obstacle Recognition
     2. Free Health Camps
     3. Sustainable Income Generation
     4. Advocacy & Human Rights Lobbying
     5. Skill & Vocational Training
     6. Awareness & Sensitization

6. **Completed Activities & Achievements (`#achievements`)**:
   - Vocational training programs (incense making, sewing, weaving)
   - CBR seed capital grants for 15 entrepreneurs with disabilities
   - Stakeholder interaction programs in Chandragiri municipality
   - Periodic public awareness campaigns
   - Free 1-Day Health Camps across Chandragiri Ward 10 and Tokha

7. **Future Plan (`#future`)**:
   - Public awareness and disability sensitization
   - Operation of an **Emergency Transit Facility & Temporary Shelter**
   - Disability-inclusive policies and accessibility advocacy
   - Sustainable income generation and entrepreneurship training
   - Peer counseling and mentorship programs
   - Emergency relief and logistical support

8. **Institutional Partners**:
   - Local Government: Chandragiri Municipality
   - Provincial Government: Ministry of Social Development
   - NLAWA (Nepal Lawyers' Association of Women Activists)
   - NFDN (National Federation of the Disabled Nepal)

9. **Field Glimpses (`#glimpses`)**:
   - Visual summary cards representing medical camps, vocational workshops, seed capital distribution, and policy advocacy

10. **Inquiry & Contact Section (`#inquiry`)**:
    - **President's Contact Card**:
      - Name: **Ravi Yasmali** (President)
      - Location: Chandragiri, Kathmandu, Nepal
      - Phone: `+977-9860672108`
      - President's Email: `rv.thapa24@gmail.com`
      - Organization Email: `hssnnepal@gmail.com`
    - **Quick Inquiry Template Buttons**:
      - Clickable chips that autofill the subject and message for Vocational Training, Health Camps, Seed Capital, Volunteering, or CSR Partnerships.
    - **Contact Form (`id="form"`)**:
      - Fields: Full Name, Email Address, Phone Number, Inquiry Purpose, Message Details.
      - Hidden honeypot anti-spam field (`name="botcheck"`).

11. **Footer**:
    - Complete sitemap, program list, contact details, copyright, and back-to-top floating button.

---

## 5. Web3Forms Contact Form Integration

The contact form is wired directly to **Web3Forms** using client-side JavaScript. No backend server code, PHP mailer, or SMTP configuration is required.

### Form Configuration in `script.js`:
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

### Form Fields Included in Submissions:
| Field Name | Type | Validation Rules |
|---|---|---|
| `access_key` | Hidden append | `d73fcdc5-6657-4312-a451-089d34a13470` |
| `name` | Text | Required, minimum 2 characters |
| `email` | Email | Required, standard email regex format |
| `phone` | Tel | Required, 7–15 digits |
| `subject` | Dropdown Select | Required selection |
| `message` | Textarea | Required, minimum 10 characters |
| `botcheck` | Hidden checkbox | Anti-spam honeypot (must remain unchecked) |

---

## 6. Styling & Color Palette (`style.css`)

The color system is derived from HSSN's brand identity:

- **HSSN Primary Red (`--hssn-red`)**: `#c5221f`
- **HSSN Dark Red (`--hssn-dark-red`)**: `#9e1412`
- **HSSN Soft Tint (`--hssn-light-red`)**: `#fff1f0`
- **HSSN Amber/Gold (`--hssn-gold`)**: `#d97706`
- **Dark Slate Background**: `#0f172a` / `#1e293b`
- **Body Text**: `#334155`

---

## 7. How to Update or Maintain the Website

1. **Changing Phone or Email**:
   - Search `index.html` for `+977-9860672108`, `rv.thapa24@gmail.com`, or `hssnnepal@gmail.com` and replace with new contact details.
2. **Replacing the Logo**:
   - Place any new image in `images/logo.jpg` with the same name.
3. **Updating the Web3Forms Access Key**:
   - Open `script.js` and update the key string in:
     `formData.append("access_key", "YOUR-NEW-KEY-HERE");`
4. **Hosting on Any Server**:
   - Upload `index.html`, `style.css`, `script.js`, and the `images/` directory to the `public_html` directory of any web host.
