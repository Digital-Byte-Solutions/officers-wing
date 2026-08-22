# 📊 Officers Wing Academy - Google Sheet Integration Setup Guide

Follow these quick 2-minute steps to connect your website forms (Enquiry Modal, Contact Page, Prospectus Downloads, and Eligibility Checker) to your team's Google Sheet in real-time.

---

### Step 1: Create a New Google Sheet
1. Open [Google Sheets](https://sheets.new) in your browser.
2. Name your sheet: `Officers Wing - Website Leads 2026-27`.
3. (Optional) Set up the following headers in Row 1 of Sheet 1:
   - **A1**: `Timestamp`
   - **B1**: `Student Name`
   - **C1**: `Phone Number`
   - **D1**: `Email Address`
   - **E1**: `Target Course`
   - **F1**: `City`
   - **G1**: `Qualification`
   - **H1**: `Age`
   - **I1**: `PCM %`
   - **J1**: `Message / Notes`
   - **K1**: `Form Type`
   - **L1**: `Page URL`

---

### Step 2: Add Google Apps Script
1. In your Google Sheet, click on **Extensions** > **Apps Script** in the top menu.
2. Delete any existing code in `Code.gs` and paste the following code:

```javascript
/**
 * Officers Wing Academy - Lead Capture Webhook
 * Appends website leads to this Google Sheet automatically.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Student Name',
        'Phone Number',
        'Email Address',
        'Target Course',
        'City',
        'Qualification',
        'Age',
        'PCM %',
        'Message / Notes',
        'Form Type',
        'Page URL'
      ]);
      sheet.getRange(1, 1, 1, 12).setFontWeight('bold').setBackground('#0A1E3F').setFontColor('#FFFFFF');
      sheet.setFrozenRows(1);
    }

    var rawData = e.postData ? e.postData.contents : null;
    var data = {};

    if (rawData) {
      try {
        data = JSON.parse(rawData);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var row = [
      data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name || 'Prospective Cadet',
      data.phone || '',
      data.email || 'Not Provided',
      data.course || 'General Enquiry',
      data.city || 'Not Specified',
      data.qualification || 'N/A',
      data.age || 'N/A',
      data.pcm || 'N/A',
      data.message || 'Captured from website',
      data.formType || 'Website Form',
      data.pageUrl || ''
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Officers Wing Leads Webhook is active and running!");
}
```

---

### Step 3: Deploy as Web App
1. In Apps Script, click the blue **Deploy** button (top right) > **New deployment**.
2. Select type: **Web app** (gear icon > Web app).
3. Fill in settings:
   - **Description**: `Officers Wing Leads Webhook`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial: allows the website form to submit leads)*
4. Click **Deploy**.
5. Copy the generated **Web app URL** (starts with `https://script.google.com/macros/s/.../exec`).

---

### Step 4: Add URL to Website
Open `officers-wing/client/.env` and update:
```env
VITE_GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ACTUAL_DEPLOYED_ID/exec
```

Any form filled on the website will now appear directly in your Google Sheet in real time!
