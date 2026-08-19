// Form validation helpers — Research-O-Thon 2025

/**
 * Validate email format
 */
export function validateEmail(email) {
  if (!email || !email.trim()) return 'Email is required';
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email.trim())) return 'Please enter a valid email address';
  return null;
}

/**
 * Validate Indian mobile number (10 digits, starts with 6-9)
 */
export function validateMobile(mobile) {
  if (!mobile || !mobile.trim()) return 'Mobile number is required';
  const cleaned = mobile.replace(/[\s\-\+]/g, '');
  const stripped = cleaned.startsWith('91') && cleaned.length === 12
    ? cleaned.slice(2)
    : cleaned;
  if (!/^[6-9]\d{9}$/.test(stripped)) return 'Please enter a valid 10-digit mobile number';
  return null;
}

/**
 * Validate required field
 */
export function validateRequired(value, fieldName) {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return `${fieldName} is required`;
  }
  return null;
}

/**
 * Validate IEEE membership number (8-digit numeric)
 */
export function validateIEEEMembership(number) {
  if (!number || !number.trim()) return 'IEEE Membership Number is required';
  if (!/^\d{8}$/.test(number.trim())) return 'Please enter a valid 8-digit IEEE membership number';
  return null;
}

/**
 * Validate Step 1 fields
 */
export function validateStep1(data) {
  const errors = {};

  const catErr = validateRequired(data.participantCategory, 'Participant category');
  if (catErr) errors.participantCategory = catErr;

  const nameErr = validateRequired(data.fullName, 'Full name');
  if (nameErr) errors.fullName = nameErr;

  const emailErr = validateEmail(data.email);
  if (emailErr) errors.email = emailErr;

  const mobileErr = validateMobile(data.mobile);
  if (mobileErr) errors.mobile = mobileErr;

  const instErr = validateRequired(data.institution, 'Institution/Organization');
  if (instErr) errors.institution = instErr;

  const cityErr = validateRequired(data.city, 'City');
  if (cityErr) errors.city = cityErr;

  const trackErr = validateRequired(data.trackPreference, 'Track preference');
  if (trackErr) errors.trackPreference = trackErr;

  // IEEE membership number required if IEEE category selected
  const isIEEE = data.participantCategory?.includes('IEEE');
  if (isIEEE) {
    const ieeeErr = validateIEEEMembership(data.ieeeMembershipNumber);
    if (ieeeErr) errors.ieeeMembershipNumber = ieeeErr;
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

/**
 * Validate Step 2 fields (mostly optional, so minimal validation)
 */
export function validateStep2(data) {
  const errors = {};

  if (data.participationType === 'Team') {
    if (!data.teamMembers || data.teamMembers.length === 0) {
      errors.teamMembers = 'Please add at least one team member';
    } else {
      data.teamMembers.forEach((member, i) => {
        if (!member.name?.trim()) {
          errors[`teamMember${i}Name`] = `Team member ${i + 1} name is required`;
        }
        if (member.email && validateEmail(member.email)) {
          errors[`teamMember${i}Email`] = `Team member ${i + 1} has an invalid email`;
        }
      });
    }
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

/**
 * Validate Step 3 fields
 */
export function validateStep3(data) {
  const errors = {};

  if (!data.agreedToTerms) {
    errors.agreedToTerms = 'You must agree to the event terms & IEEE code of conduct';
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
