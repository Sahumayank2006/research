// Firebase Anonymous Auth for registration flow
import { auth } from './config';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';

/**
 * Sign in anonymously (used to attach UID to registration docs)
 * Returns the user object
 */
export async function ensureAnonymousAuth() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        signInAnonymously(auth)
          .then((credential) => resolve(credential.user))
          .catch(reject);
      }
    });
  });
}

/**
 * Get the current user's UID, or null
 */
export function getCurrentUid() {
  return auth.currentUser?.uid || null;
}
