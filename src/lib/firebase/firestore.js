// Firebase Firestore operations for registrations
import { db } from './config';
import {
  collection,
  addDoc,
  getDoc,
  doc,
  serverTimestamp,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore';

const REGISTRATIONS_COLLECTION = 'registrations';

/**
 * Generate a sequential registration ID like ROT-2025-0042
 */
async function generateRegistrationId() {
  const q = query(
    collection(db, REGISTRATIONS_COLLECTION),
    orderBy('createdAt', 'desc'),
    limit(1)
  );

  try {
    const snapshot = await getDocs(q);
    let nextNum = 1;

    if (!snapshot.empty) {
      const lastDoc = snapshot.docs[0].data();
      if (lastDoc.registrationId) {
        const parts = lastDoc.registrationId.split('-');
        const lastNum = parseInt(parts[parts.length - 1], 10);
        if (!isNaN(lastNum)) {
          nextNum = lastNum + 1;
        }
      }
    }

    return `ROT-2025-${String(nextNum).padStart(4, '0')}`;
  } catch {
    // Fallback: use timestamp-based ID
    const ts = Date.now().toString(36).toUpperCase();
    return `ROT-2025-${ts}`;
  }
}

/**
 * Save a registration to Firestore
 * @param {Object} data - Registration form data
 * @param {string} uid - Anonymous auth UID
 * @returns {Object} - { docId, registrationId }
 */
export async function saveRegistration(data, uid) {
  const registrationId = await generateRegistrationId();

  const registrationDoc = {
    registrationId,

    // Step 1 — Participant Details
    participantCategory: data.participantCategory || '',
    fullName: data.fullName || '',
    email: data.email || '',
    mobile: data.mobile || '',
    institution: data.institution || '',
    city: data.city || '',
    ieeeMembershipNumber: data.ieeeMembershipNumber || null,
    trackPreference: data.trackPreference || '',

    // Step 2 — Research Snapshot
    researchArea: data.researchArea || null,
    participationType: data.participationType || 'Individual',
    teamMembers: data.teamMembers || [],
    dietaryPreference: data.dietaryPreference || 'Vegetarian',
    needsAccommodation: data.needsAccommodation || false,

    // Step 3 — Payment
    paymentStatus: data.transactionId ? 'uploaded' : 'pending',
    transactionId: data.transactionId || null,
    agreedToTerms: data.agreedToTerms || false,

    // Metadata
    uid: uid || null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(
    collection(db, REGISTRATIONS_COLLECTION),
    registrationDoc
  );

  return {
    docId: docRef.id,
    registrationId,
  };
}

/**
 * Retrieve a registration by Firestore document ID
 */
export async function getRegistration(docId) {
  const docRef = doc(db, REGISTRATIONS_COLLECTION, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }

  return null;
}

/**
 * Check if an email is already registered
 */
export async function isEmailRegistered(email) {
  const q = query(
    collection(db, REGISTRATIONS_COLLECTION),
    where('email', '==', email.toLowerCase().trim()),
    limit(1)
  );

  const snapshot = await getDocs(q);
  return !snapshot.empty;
}
