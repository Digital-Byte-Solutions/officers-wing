// ============================================================
// BMI utilities
// ============================================================

import { BMI_CATEGORIES } from '../constants/bmi'

/**
 * Calculate BMI from height and weight.
 * @param {number} height - cm (metric) or inches (imperial)
 * @param {number} weight - kg (metric) or lbs (imperial)
 * @param {'metric'|'imperial'} unit
 * @returns {number} BMI rounded to 1 decimal place
 */
export function calculateBMI(height, weight, unit) {
  if (unit === 'imperial') {
    return Math.round(((703 * weight) / (height * height)) * 10) / 10
  }
  const heightM = height / 100
  return Math.round((weight / (heightM * heightM)) * 10) / 10
}

/**
 * Return the BMI category matching a given BMI value.
 * @param {number} bmi
 * @returns {object} Category object from BMI_CATEGORIES
 */
export function getBMICategory(bmi) {
  return (
    BMI_CATEGORIES.find((cat) => bmi >= cat.min && bmi < cat.max) ??
    BMI_CATEGORIES.at(-1)
  )
}

/**
 * Calculate ideal weight range (kg) for a given height in cm.
 * @param {number} heightCm
 * @returns {{ min: number, max: number }}
 */
export function getIdealWeightRange(heightCm) {
  const hm = heightCm / 100
  return {
    min: Math.round(18.5 * hm * hm),
    max: Math.round(24.9 * hm * hm),
  }
}
