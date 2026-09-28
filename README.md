# Human Social Service Nepal (HSSN) - Website Documentation
**मानव सामाजिक सेवा नेपाल (HSSN)**  
*Government Registered Non-Profit Organization • Established 2014 A.D. (२०७० B.S.)*  
*Location: Chandragiri Municipality, Kathmandu, Nepal*  
*Official Web Portal: [https://humansocialservicenepal.org.np/](https://humansocialservicenepal.org.np/)*

---

## 1. Project Overview

This website is the official web portal built for **Human Social Service Nepal (HSSN)**. It has been hand-crafted using clean, industry-standard web technologies: **HTML5**, **Bootstrap 5.3 (via CDN)**, **CSS3**, and **vanilla JavaScript**.

The application is lightweight, responsive, accessible, and optimized for search engine indexing on Google. It requires no complex build pipelines, bundlers, or server runtimes.

---

## 2. Directory Structure

```text
├── index.html          # Main HTML structure, donation section, SEO meta tags & Schema.org JSON-LD
├── style.css           # Custom styling, color palette, cards, and responsive rules
├── script.js           # Client-side JavaScript for form validation, Web3Forms & clipboard copy
├── sitemap.xml         # XML Sitemap configured for Google Search Console
├── robots.txt          # Search engine crawler permissions & sitemap pointer
├── images/
│   └── logo.jpg        # Official circular emblem logo (navbar, hero, footer & Google favicon)
└── README.md           # Technical documentation
```

### Production Hosting & Deployment
When deploying to **cPanel, Shared Hosting, Apache, Nginx, GitHub Pages, Netlify, or Vercel**, upload these files into your `public_html` root:
1. `index.html`
2. `style.css`
3. `script.js`
4. `sitemap.xml`
5. `robots.txt`
6. `images/logo.jpg` (inside an `images` folder)

No server installation or Node.js runtime is needed on your production server.

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
| **Search Engine Discovery** | XML Sitemap & Robots.txt | Standard Crawler Protocols |

---

## 4. Website Sections & Architecture

1. **Top Header Bar**:
   - Organization contact numbers: `+977-9860672108`
   - Official emails: `hssnnepal@gmail.com`
   - Establishment badge: *Est. 2014 A.D. (२०७० B.S.)*
   - Location: Chandragiri, Kathmandu, Nepal

2. **Main Navigation (`navbar`)**:
   - High-resolution HSSN circular emblem logo (`images/logo.jpg`)
   - Bilingual organization branding (*Human Social Service Nepal* / *मानव सामाजिक सेवा नेपाल*)
   - Direct navigation menu links with auto-collapse functionality on mobile devices
   - Highlighted **Donate** and **Inquire** action buttons

3. **Hero Section**:
   - Core value proposition and mission statement for empowering persons with disabilities, orphans, and marginalized groups
   - Immediate Call-to-Action (CTA) buttons: "Send an Inquiry" and "Learn About Us"
   - Key impact metrics (10+ Years of Dedication, 15+ Entrepreneurs Seed-Funded, 100% Community Driven)
   - Prominently framed seal emblem card

4. **Organizational Profile (`#about`)**:
   - Background covering registration and social commitment in Chandragiri, Kathmandu
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
   - Collaborations with Chandragiri Municipality, Ministry of Social Development (Bagmati Province), NLAWA, and NFDN

9. **Program & Field Glimpses (`#glimpses`)**:
   - Visual summary cards highlighting medical camps, workshops, seed capital distribution, and policy discussions

10. **Donation & Bank Account Details (`#donate`)**:
    - **Bank Name**: Everest Bank Limited
    - **Branch**: Satungal Branch, Kathmandu
    - **Account Holder Name**: MANAV SAMAJIK SEWA NEPAL (मानव सामाजिक सेवा नेपाल)
    - **Account Number**: `00300105200761`
    - **SWIFT Code**: `EVBLNPKA`
    - **Interactive Clipboard Copy**: One-click buttons to copy account number, holder name, and SWIFT code
    - **Transparency & Verification Notice**: Instructions for submitting deposit vouchers or screenshots for official receipts

11. **Inquiry & Contact System (`#inquiry`)**:
    - **Leadership Contact Card**:
      - President: **Ravi Yasmali**
      - Direct Phone: `+977-9860672108`
      - Primary Emails: `rv.thapa24@gmail.com`, `hssnnepal@gmail.com`
    - **Quick Template Chips**:
      - One-click buttons to autofill inquiry topics for vocational training, health camps, volunteer opportunities, seed capital, or donation/bank transfer notifications
    - **Interactive Submission Form**:
      - Real-time client-side validation
      - Spam prevention honeypot
      - Instant feedback dialogs on submission

12. **Footer**:
    - Complete sitemap, program summary, direct contact details, bank donation links, legal copyright, and floating scroll-to-top button

---

## 5. Bank Account & Donation Details

| Detail | Information |
|---|---|
| **Bank Name** | Everest Bank Limited |
| **Branch** | Satungal Branch, Kathmandu |
| **Account Name** | MANAV SAMAJIK SEWA NEPAL |
| **Account Number** | `00300105200761` |
| **SWIFT Code** | `EVBLNPKA` |
| **Voucher Submission** | Email to `hssnnepal@gmail.com` or call `+977-9860672108` |

---

## 6. Google Search Optimization & Logo Display

Your logo has been verified by Google's Favicon CDN server (`t2.gstatic.com/faviconV2`):
- **Logo Asset**: `images/logo.jpg` (official emblem).
- **Google Favicon Status**: **Verified and active on Google's CDN cache**.
- **Favicon Links**: In `index.html`, configured with `rel="icon"`, `rel="shortcut icon"`, and `rel="apple-touch-icon"` pointing to `images/logo.jpg`.
- **Crawler Permissions**: `robots.txt` explicitly allows `Googlebot-Image` and regular crawlers to index `/images/` and `/images/logo.jpg`.
- **Schema.org Structured Data**: Configured with `ImageObject` defining the official NGO logo for Google Search rich snippets.
- **Sitemap**: Submitted via Google Search Console at `https://humansocialservicenepal.org.np/sitemap.xml`.

---

## 7. Contact Form Configuration

The contact form is connected to Web3Forms to deliver inquiries directly to the organization's email inbox without requiring any server-side scripts or database maintenance.

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

## 8. Color Scheme & Brand Identity

The website follows HSSN's official color palette:

- **HSSN Primary Red (`--hssn-red`)**: `#c5221f`
- **HSSN Deep Crimson (`--hssn-dark-red`)**: `#9e1412`
- **HSSN Light Red Tint (`--hssn-light-red`)**: `#fff1f0`
- **Accent Gold (`--hssn-gold`)**: `#d97706`
- **Slate Text & Backgrounds**: `#0f172a`, `#1e293b`, `#334155`

---

## 9. Site Maintenance & Updates

- **Contact Info Updates**:
  Search for `+977-9860672108` or `hssnnepal@gmail.com` in `index.html` to update phone numbers, emails, or office addresses.
- **Bank Account Updates**:
  Search for `#donate` or `00300105200761` in `index.html` and `script.js` to modify account details.
- **Logo Replacement**:
  Place any updated circular emblem at `images/logo.jpg`.
- **Form Recipient Change**:
  To route submissions to a different email address, generate a new key on Web3Forms and update the `access_key` in `script.js`.
- **Google Search Console**:
  Add `https://humansocialservicenepal.org.np` in Google Search Console, submit `sitemap.xml`, and request indexing via URL inspection.
