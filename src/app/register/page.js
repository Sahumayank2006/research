'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { EVENT_CONFIG } from '@/lib/config';
import { validateStep1, validateStep2, validateStep3 } from '@/lib/validation';
import { ensureAnonymousAuth } from '@/lib/firebase/auth';
import { saveRegistration } from '@/lib/firebase/firestore';
import './register.css';

const INITIAL_DATA = {
  participantCategory: '',
  fullName: '',
  email: '',
  mobile: '',
  institution: '',
  city: '',
  ieeeMembershipNumber: '',
  trackPreference: '',
  researchArea: '',
  participationType: 'Individual',
  teamMembers: [],
  dietaryPreference: 'Vegetarian',
  needsAccommodation: false,
  transactionId: '',
  agreedToTerms: false,
};

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null); // { docId, registrationId }

  const update = useCallback((field, value) => {
    setData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const isIEEECategory = data.participantCategory?.includes('IEEE');

  // --- Step navigation ---
  function goNext() {
    let stepErrors = null;
    if (step === 1) stepErrors = validateStep1(data);
    if (step === 2) stepErrors = validateStep2(data);
    if (step === 3) stepErrors = validateStep3(data);

    if (stepErrors) {
      setErrors(stepErrors);
      return;
    }

    setErrors({});
    if (step < 4) setStep(step + 1);
  }

  function goBack() {
    if (step > 1) setStep(step - 1);
  }

  function goToStep(s) {
    if (s < step) setStep(s);
  }

  // --- Submit registration ---
  async function handleSubmit() {
    const stepErrors = validateStep3(data);
    if (stepErrors) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await ensureAnonymousAuth();
      const res = await saveRegistration(data, user.uid);
      
      // Trigger confirmation email
      try {
        await fetch('/api/send-registration-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.email,
            fullName: data.fullName,
            registrationId: res.registrationId,
            participantCategory: data.participantCategory,
            trackPreference: data.trackPreference,
            participationType: data.participationType
          })
        });
      } catch (emailError) {
        console.error('Failed to send confirmation email:', emailError);
        // We don't fail the registration if the email fails
      }

      setResult(res);
      setStep(4);
    } catch (err) {
      console.error('Registration failed:', err);
      setErrors({ submit: 'Registration failed. Please try again or contact the organizers.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  // --- Render helpers ---
  function renderField(label, field, type = 'text', opts = {}) {
    return (
      <div className="form-group">
        <label className="form-label" htmlFor={`field-${field}`}>
          {label} {opts.required !== false && <span style={{ color: 'var(--error)' }}>*</span>}
        </label>
        {type === 'textarea' ? (
          <textarea
            id={`field-${field}`}
            className={`form-textarea ${errors[field] ? 'error' : ''}`}
            value={data[field] || ''}
            onChange={e => update(field, e.target.value)}
            placeholder={opts.placeholder || ''}
            rows={opts.rows || 3}
          />
        ) : type === 'select' ? (
          <select
            id={`field-${field}`}
            className={`form-select ${errors[field] ? 'error' : ''}`}
            value={data[field] || ''}
            onChange={e => update(field, e.target.value)}
          >
            <option value="">— Select —</option>
            {(opts.options || []).map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input
            id={`field-${field}`}
            type={type}
            className={`form-input ${errors[field] ? 'error' : ''}`}
            value={data[field] || ''}
            onChange={e => update(field, e.target.value)}
            placeholder={opts.placeholder || ''}
          />
        )}
        {errors[field] && <p className="form-error visible">{errors[field]}</p>}
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="register-page">
        <div className="container container--narrow">
          <div className="register-page__header">
            <span className="eyebrow">Official Registration</span>
            <h1>Register for Research-O-Thon 2025</h1>
            <p className="register-page__subtitle">
              Complete the form below to secure your place. Registration fee: <strong className="mono">₹300</strong> (all-inclusive).
            </p>
          </div>

          {/* Stepper */}
          <div className="stepper" role="navigation" aria-label="Registration progress">
            {[
              { num: 1, label: 'Details' },
              { num: 2, label: 'Research' },
              { num: 3, label: 'Review & Pay' },
              { num: 4, label: 'Confirmed' },
            ].map((s) => (
              <button
                key={s.num}
                className={`stepper__step ${step === s.num ? 'stepper__step--active' : ''} ${step > s.num ? 'stepper__step--done' : ''}`}
                onClick={() => goToStep(s.num)}
                disabled={s.num >= step}
                aria-current={step === s.num ? 'step' : undefined}
              >
                <span className="stepper__number mono">
                  {step > s.num ? '✓' : String(s.num).padStart(2, '0')}
                </span>
                <span className="stepper__label">{s.label}</span>
              </button>
            ))}
            <div className="stepper__progress" style={{ width: `${((step - 1) / 3) * 100}%` }} />
          </div>

          {/* Step content */}
          <div className="register-form">
            {/* ===== STEP 1 ===== */}
            {step === 1 && (
              <div className="register-step" key="step1">
                <h2 className="register-step__title">
                  <span className="clause-number">01 —</span> Participant Category &amp; Details
                </h2>

                <div className="form-group">
                  <label className="form-label">Participant Category <span style={{ color: 'var(--error)' }}>*</span></label>
                  <div className="category-selector">
                    {EVENT_CONFIG.participantCategories.map(cat => (
                      <label key={cat} className={`category-option ${data.participantCategory === cat ? 'category-option--active' : ''}`}>
                        <input
                          type="radio"
                          name="participantCategory"
                          value={cat}
                          checked={data.participantCategory === cat}
                          onChange={e => update('participantCategory', e.target.value)}
                          className="sr-only"
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                  {errors.participantCategory && <p className="form-error visible">{errors.participantCategory}</p>}
                </div>

                {renderField('Full Name', 'fullName', 'text', { placeholder: 'Your full name' })}
                
                <div className="form-row">
                  {renderField('Email Address', 'email', 'email', { placeholder: 'you@example.com' })}
                  {renderField('Mobile Number', 'mobile', 'tel', { placeholder: '9876543210' })}
                </div>

                <div className="form-row">
                  {renderField('Institution / Organization', 'institution', 'text', { placeholder: 'University or company name' })}
                  {renderField('City', 'city', 'text', { placeholder: 'City' })}
                </div>

                {isIEEECategory && renderField('IEEE Membership Number', 'ieeeMembershipNumber', 'text', { placeholder: '12345678' })}

                {renderField('Track Preference', 'trackPreference', 'select', {
                  options: EVENT_CONFIG.tracks.map(t => `Track ${t.number} — ${t.name}`),
                })}

                <div className="register-step__actions">
                  <button className="btn btn--primary btn--lg" onClick={goNext}>
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* ===== STEP 2 ===== */}
            {step === 2 && (
              <div className="register-step" key="step2">
                <h2 className="register-step__title">
                  <span className="clause-number">02 —</span> Research Interest Snapshot
                </h2>

                {renderField('Working Idea / Research Area', 'researchArea', 'textarea', {
                  required: false,
                  placeholder: 'Briefly describe your research idea or area of interest (2-3 lines). This helps us assign the right mentor track.',
                  rows: 4,
                })}

                <div className="form-group">
                  <label className="form-label">Participation Type</label>
                  <div className="toggle-group">
                    {['Individual', 'Team'].map(type => (
                      <button
                        key={type}
                        className={`toggle-option ${data.participationType === type ? 'toggle-option--active' : ''}`}
                        onClick={() => update('participationType', type)}
                        type="button"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {data.participationType === 'Team' && (
                  <div className="team-section">
                    <label className="form-label">Team Members (up to 4)</label>
                    {(data.teamMembers || []).map((member, i) => (
                      <div key={i} className="team-member-row">
                        <input
                          type="text"
                          className="form-input"
                          placeholder={`Member ${i + 1} name`}
                          value={member.name || ''}
                          onChange={e => {
                            const updated = [...data.teamMembers];
                            updated[i] = { ...updated[i], name: e.target.value };
                            update('teamMembers', updated);
                          }}
                        />
                        <input
                          type="email"
                          className="form-input"
                          placeholder={`Member ${i + 1} email`}
                          value={member.email || ''}
                          onChange={e => {
                            const updated = [...data.teamMembers];
                            updated[i] = { ...updated[i], email: e.target.value };
                            update('teamMembers', updated);
                          }}
                        />
                        <button
                          className="team-member-remove"
                          onClick={() => {
                            const updated = data.teamMembers.filter((_, idx) => idx !== i);
                            update('teamMembers', updated);
                          }}
                          type="button"
                          aria-label={`Remove team member ${i + 1}`}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    {(data.teamMembers?.length || 0) < 4 && (
                      <button
                        className="btn btn--secondary btn--sm"
                        onClick={() => update('teamMembers', [...(data.teamMembers || []), { name: '', email: '' }])}
                        type="button"
                      >
                        + Add Team Member
                      </button>
                    )}
                    {errors.teamMembers && <p className="form-error visible">{errors.teamMembers}</p>}
                  </div>
                )}

                {renderField('Dietary Preference', 'dietaryPreference', 'select', {
                  required: false,
                  options: EVENT_CONFIG.dietaryOptions,
                })}

                <div className="form-group">
                  <label className="form-check">
                    <input
                      type="checkbox"
                      checked={data.needsAccommodation}
                      onChange={e => update('needsAccommodation', e.target.checked)}
                    />
                    <span>I am interested in accommodation (guest house / hostel, if available)</span>
                  </label>
                </div>

                <div className="register-step__actions">
                  <button className="btn btn--secondary" onClick={goBack} type="button">
                    Back
                  </button>
                  <button className="btn btn--primary btn--lg" onClick={goNext} type="button">
                    Continue to Review &amp; Payment
                  </button>
                </div>
              </div>
            )}

            {/* ===== STEP 3 ===== */}
            {step === 3 && (
              <div className="register-step" key="step3">
                <h2 className="register-step__title">
                  <span className="clause-number">03 —</span> Review &amp; Payment
                </h2>

                {/* Review summary */}
                <div className="review-card certificate-card">
                  <div className="review-card__header">
                    <h3>Official Registration Summary</h3>
                    <span className="eyebrow eyebrow--navy">Review Before Submission</span>
                  </div>

                  <div className="review-card__section">
                    <div className="review-card__section-header">
                      <h4>Participant Details</h4>
                      <button className="review-card__edit" onClick={() => goToStep(1)} type="button">Edit</button>
                    </div>
                    <div className="review-card__grid">
                      <div><span className="review-card__label">Category</span><span>{data.participantCategory}</span></div>
                      <div><span className="review-card__label">Name</span><span>{data.fullName}</span></div>
                      <div><span className="review-card__label">Email</span><span>{data.email}</span></div>
                      <div><span className="review-card__label">Mobile</span><span>{data.mobile}</span></div>
                      <div><span className="review-card__label">Institution</span><span>{data.institution}</span></div>
                      <div><span className="review-card__label">City</span><span>{data.city}</span></div>
                      {isIEEECategory && <div><span className="review-card__label">IEEE No.</span><span className="mono">{data.ieeeMembershipNumber}</span></div>}
                      <div><span className="review-card__label">Track</span><span>{data.trackPreference}</span></div>
                    </div>
                  </div>

                  <hr className="gold-rule" />

                  <div className="review-card__section">
                    <div className="review-card__section-header">
                      <h4>Research & Preferences</h4>
                      <button className="review-card__edit" onClick={() => goToStep(2)} type="button">Edit</button>
                    </div>
                    <div className="review-card__grid">
                      <div><span className="review-card__label">Research Area</span><span>{data.researchArea || 'Not specified'}</span></div>
                      <div><span className="review-card__label">Participation</span><span>{data.participationType}</span></div>
                      {data.participationType === 'Team' && (
                        <div><span className="review-card__label">Team Members</span><span>{data.teamMembers.map(m => m.name).join(', ')}</span></div>
                      )}
                      <div><span className="review-card__label">Dietary</span><span>{data.dietaryPreference}</span></div>
                      <div><span className="review-card__label">Accommodation</span><span>{data.needsAccommodation ? 'Interested' : 'Not needed'}</span></div>
                    </div>
                  </div>
                </div>

                {/* Fee breakdown */}
                <div className="fee-block">
                  <div className="fee-block__row">
                    <span>Registration Fee</span>
                    <span className="mono fee-block__amount">₹300</span>
                  </div>
                  <p className="fee-block__note">All-inclusive: kit, meals, mentorship, certificate eligibility</p>
                </div>

                {/* QR Payment */}
                <div className="qr-payment certificate-card">
                  <div className="qr-payment__header">
                    <h3>Pay ₹300 via UPI</h3>
                    <p>Scan the QR code below using any UPI app (Google Pay, PhonePe, Paytm, etc.)</p>
                  </div>

                  <div className="qr-payment__code">
                    {/* Placeholder QR — replace with actual QR image */}
                    <div className="qr-payment__placeholder">
                      <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                        <rect x="2" y="2" width="176" height="176" rx="8" stroke="#0A1F44" strokeWidth="2" fill="white" />
                        {/* QR-like pattern */}
                        <rect x="20" y="20" width="40" height="40" rx="2" stroke="#0A1F44" strokeWidth="3" fill="none" />
                        <rect x="28" y="28" width="24" height="24" fill="#0A1F44" />
                        <rect x="120" y="20" width="40" height="40" rx="2" stroke="#0A1F44" strokeWidth="3" fill="none" />
                        <rect x="128" y="28" width="24" height="24" fill="#0A1F44" />
                        <rect x="20" y="120" width="40" height="40" rx="2" stroke="#0A1F44" strokeWidth="3" fill="none" />
                        <rect x="28" y="128" width="24" height="24" fill="#0A1F44" />
                        {/* Center pattern */}
                        <rect x="72" y="72" width="36" height="36" fill="#0A1F44" opacity="0.2" />
                        <text x="90" y="94" textAnchor="middle" fontSize="10" fill="#0A1F44" fontFamily="Inter, sans-serif" fontWeight="700">QR</text>
                        {/* Scattered blocks */}
                        <rect x="70" y="20" width="8" height="8" fill="#0A1F44" />
                        <rect x="82" y="20" width="8" height="8" fill="#0A1F44" />
                        <rect x="70" y="32" width="8" height="8" fill="#0A1F44" />
                        <rect x="94" y="32" width="8" height="8" fill="#0A1F44" />
                        <rect x="70" y="44" width="8" height="8" fill="#0A1F44" />
                        <rect x="82" y="44" width="8" height="8" fill="#0A1F44" />
                        <rect x="20" y="70" width="8" height="8" fill="#0A1F44" />
                        <rect x="32" y="82" width="8" height="8" fill="#0A1F44" />
                        <rect x="44" y="70" width="8" height="8" fill="#0A1F44" />
                        <rect x="120" y="70" width="8" height="8" fill="#0A1F44" />
                        <rect x="132" y="82" width="8" height="8" fill="#0A1F44" />
                        <rect x="144" y="70" width="8" height="8" fill="#0A1F44" />
                        <rect x="120" y="120" width="8" height="8" fill="#0A1F44" />
                        <rect x="132" y="132" width="8" height="8" fill="#0A1F44" />
                        <rect x="144" y="120" width="8" height="8" fill="#0A1F44" />
                        <rect x="70" y="120" width="8" height="8" fill="#0A1F44" />
                        <rect x="82" y="132" width="8" height="8" fill="#0A1F44" />
                        <rect x="94" y="144" width="8" height="8" fill="#0A1F44" />
                      </svg>
                    </div>
                    <p className="qr-payment__upi-id">
                      UPI ID: <strong className="mono">{EVENT_CONFIG.upiId}</strong>
                    </p>
                  </div>

                  <div className="qr-payment__fields">
                    <div className="form-group">
                      <label className="form-label" htmlFor="transactionId">
                        Transaction ID / UTR Number <span style={{ color: 'var(--ink-muted)', fontWeight: 400 }}>(Optional)</span>
                      </label>
                      <input
                        id="transactionId"
                        type="text"
                        className="form-input"
                        value={data.transactionId}
                        onChange={e => update('transactionId', e.target.value)}
                        placeholder="Enter UTR or transaction reference number"
                      />
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-muted)', marginTop: 'var(--space-2)' }}>
                        Your registration will be confirmed once payment is verified by the organizing team.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="form-group" style={{ marginTop: 'var(--space-6)' }}>
                  <label className="form-check">
                    <input
                      type="checkbox"
                      checked={data.agreedToTerms}
                      onChange={e => update('agreedToTerms', e.target.checked)}
                    />
                    <span>
                      I agree to the <a href="#" style={{ textDecoration: 'underline' }}>event terms &amp; conditions</a> and the <a href="#" style={{ textDecoration: 'underline' }}>IEEE code of conduct</a>.
                    </span>
                  </label>
                  {errors.agreedToTerms && <p className="form-error visible">{errors.agreedToTerms}</p>}
                </div>

                {errors.submit && (
                  <div style={{ padding: 'var(--space-4)', background: 'var(--error-light)', border: '1px solid var(--error)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--error)' }}>
                    {errors.submit}
                  </div>
                )}

                <div className="register-step__actions">
                  <button className="btn btn--secondary" onClick={goBack} type="button" disabled={isSubmitting}>
                    Back
                  </button>
                  <button
                    className="btn btn--gold btn--lg"
                    onClick={handleSubmit}
                    type="button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '4px' }}>
                          <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          <path d="M6 6H10M6 9H10" stroke="currentColor" strokeWidth="1" />
                          <circle cx="8" cy="12" r="1" fill="currentColor" />
                        </svg>
                        Submit Registration
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* ===== STEP 4 — CONFIRMATION ===== */}
            {step === 4 && result && (
              <div className="register-step confirmation" key="step4">
                {/* Seal stamp */}
                <div className="confirmation__seal">
                  <svg width="100" height="100" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="56" stroke="#1F7A4D" strokeWidth="2" />
                    <circle cx="60" cy="60" r="52" stroke="#1F7A4D" strokeWidth="0.5" strokeDasharray="3 3" />
                    <path d="M40 60 L54 74 L82 46" stroke="#1F7A4D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path id="confirmTextTop" d="M18 60 A42 42 0 0 1 102 60" fill="none" />
                    <text fontSize="6" fill="#1F7A4D" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="2">
                      <textPath href="#confirmTextTop" startOffset="50%" textAnchor="middle">REGISTRATION SUBMITTED</textPath>
                    </text>
                  </svg>
                </div>

                <h2 className="confirmation__title">Registration Submitted Successfully</h2>

                {/* Digital Entry Pass */}
                <div className="entry-pass">
                  <div className="entry-pass__main">
                    <div className="entry-pass__header">
                      <span className="eyebrow" style={{ color: 'var(--gold-light)', marginBottom: 'var(--space-2)' }}>Official Entry Pass</span>
                      <h3 style={{ color: 'var(--parchment)', marginBottom: 'var(--space-1)' }}>Research-O-Thon 2025</h3>
                      <p style={{ color: 'rgba(247,245,239,0.6)', fontSize: 'var(--text-xs)', marginBottom: 0 }}>17–18 September 2025 · ASET, Amity University MP, Gwalior</p>
                    </div>

                    <div className="entry-pass__body">
                      <div className="entry-pass__id">
                        <span className="entry-pass__id-label">Registration ID</span>
                        <span className="entry-pass__id-value mono">{result.registrationId}</span>
                      </div>

                      <div className="entry-pass__details">
                        <div><span className="entry-pass__field-label">Name</span><span>{data.fullName}</span></div>
                        <div><span className="entry-pass__field-label">Category</span><span>{data.participantCategory}</span></div>
                        <div><span className="entry-pass__field-label">Track</span><span>{data.trackPreference}</span></div>
                        <div>
                          <span className="entry-pass__field-label">Payment</span>
                          <span className={`badge ${data.transactionId ? 'badge--warning' : 'badge--warning'}`}>
                            {data.transactionId ? 'Verification Pending' : 'Awaiting Payment'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Perforation */}
                  <div className="entry-pass__perforation" aria-hidden="true"></div>

                  {/* Stub */}
                  <div className="entry-pass__stub">
                    <div className="entry-pass__stub-content">
                      <span className="mono" style={{ fontSize: 'var(--text-xs)' }}>{result.registrationId}</span>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-muted)' }}>Present this pass at the registration desk</span>
                    </div>
                  </div>
                </div>

                <div className="confirmation__actions">
                  <button className="btn btn--primary" onClick={() => window.print()}>
                    Print Pass
                  </button>
                  <Link href="/" className="btn btn--secondary">
                    Back to Home
                  </Link>
                </div>

                <div className="confirmation__next-steps">
                  <h4>Next Steps</h4>
                  <ul>
                    <li>A confirmation will be sent to <strong>{data.email}</strong> once payment is verified.</li>
                    <li>Join the participant WhatsApp group for updates and coordination.</li>
                    <li>Bring your laptop, charger, and a valid ID on Day 1.</li>
                    <li>All meals and refreshments are included — just come ready to research!</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
