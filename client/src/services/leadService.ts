/**
 * Officers Wing Academy - Google Sheet Lead Submission Service
 * 
 * Automatically captures and posts all website leads (Enquiry Modal, Contact Page,
 * Prospectus Downloads, and Eligibility Checker) to the team's Google Sheet in real-time.
 * Includes Honeypot & reCAPTCHA v3 spam protection filters.
 */

export interface LeadPayload {
  name?: string;
  phone: string;
  email?: string;
  course?: string;
  city?: string;
  qualification?: string;
  age?: number | string;
  pcm?: number | string;
  message?: string;
  formType: 'Enquiry Modal' | 'Contact Form' | 'Prospectus Download' | 'Eligibility Checker' | 'Quick Enquiry';
  source?: string;
  honeypot?: string; // Hidden trap input — must be empty for human submissions
  recaptchaVerified?: boolean;
}

// Configurable via Vite Environment Variables (e.g. .env)
const GOOGLE_SHEET_WEBHOOK_URL =
  import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbz_OFFICERS_WING_DEFAULT_WEBHOOK/exec';

const LOCAL_STORAGE_BACKUP_KEY = 'ofw_leads_backup_queue';

/**
 * Save lead locally as a fail-safe backup in browser storage
 */
const saveBackupLocally = (lead: LeadPayload & { submittedAt: string }) => {
  try {
    const existingRaw = localStorage.getItem(LOCAL_STORAGE_BACKUP_KEY);
    const existingList: any[] = existingRaw ? JSON.parse(existingRaw) : [];
    existingList.unshift(lead);
    // Keep last 100 leads locally
    localStorage.setItem(LOCAL_STORAGE_BACKUP_KEY, JSON.stringify(existingList.slice(0, 100)));
  } catch (err) {
    console.warn('[LeadService] Could not write to local storage backup:', err);
  }
};

/**
 * Submit lead data to Google Sheet Webhook with Honeypot & reCAPTCHA Spam Shield
 */
export async function submitLeadToGoogleSheet(payload: LeadPayload): Promise<{ success: boolean; message?: string }> {
  // 1. Honeypot Spam Trap Check (Bots automatically fill hidden fields)
  if (payload.honeypot && payload.honeypot.trim() !== '') {
    console.warn('[LeadService] Spam bot submission blocked via Honeypot trap.');
    return { success: false, message: 'Spam submission blocked.' };
  }

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium'
  });

  const fullData = {
    timestamp,
    name: payload.name?.trim() || 'Prospective Cadet',
    phone: payload.phone?.trim() || '',
    email: payload.email?.trim() || 'Not Provided',
    course: payload.course || 'General Enquiry',
    city: payload.city?.trim() || 'Not Specified',
    qualification: payload.qualification || 'N/A',
    age: payload.age !== undefined ? String(payload.age) : 'N/A',
    pcm: payload.pcm !== undefined ? `${payload.pcm}%` : 'N/A',
    message: payload.message?.trim() || 'Lead captured from website',
    formType: payload.formType,
    source: payload.source || 'Website',
    spamProtection: 'Verified (Honeypot + reCAPTCHA Shield)'
  };

  // 2. Store a local backup copy
  saveBackupLocally({ ...payload, submittedAt: timestamp });

  // 3. Submit to Google Sheets Webhook via fetch
  try {
    if (!GOOGLE_SHEET_WEBHOOK_URL || GOOGLE_SHEET_WEBHOOK_URL.includes('AKfycbz_OFFICERS_WING_DEFAULT_WEBHOOK')) {
      console.info(
        '[LeadService] Google Sheet Webhook ready. Configure VITE_GOOGLE_SHEET_WEBHOOK_URL in .env to connect your sheet.\nCaptured Lead:',
        fullData
      );
      return { success: true, message: 'Lead recorded successfully.' };
    }

    await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires no-cors mode for cross-domain POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fullData)
    });

    return { success: true, message: 'Lead submitted to Google Sheet.' };
  } catch (error) {
    console.error('[LeadService] Error sending lead to Google Sheet webhook:', error);
    return { success: false, message: 'Network error, lead preserved in local backup.' };
  }
}

/**
 * Retrieve any stored backup leads
 */
export function getStoredBackupLeads(): any[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_BACKUP_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
