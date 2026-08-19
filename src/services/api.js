// ============================================================
// API service layer — all backend calls in one place
// ============================================================

import axios from 'axios'

const API_TIMEOUT = 5000

const apiClient = axios.create({ timeout: API_TIMEOUT })

/**
 * POST eligibility form data to the backend.
 * @param {object} formData
 * @returns {Promise<{eligible: boolean|'maybe', course: string, reasons: string[]}>}
 */
export async function checkEligibilityApi(formData) {
  const { data } = await apiClient.post('/api/eligibility', formData)
  return data
}

/**
 * POST BMI data to the backend.
 * @param {number} height
 * @param {number} weight
 * @param {'metric'|'imperial'} unit
 * @returns {Promise<{bmi: number, category: string, navyStatus: string}>}
 */
export async function calculateBmiApi(height, weight, unit) {
  const { data } = await apiClient.post('/api/bmi', { height, weight, unit })
  return data
}

/**
 * POST contact form data to the backend.
 * @param {object} formData
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitContactApi(formData) {
  const { data } = await apiClient.post('/api/contact', formData)
  return data
}
