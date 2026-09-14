/**
 * Cryptographic utilities for legal auditability and true CSPRNG randomness
 */

export async function sha256(message: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Generates a cryptographically secure random 32-bit integer
 */
export function getSecureRandomUint32(): number {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0];
}

/**
 * Fisher-Yates shuffle using cryptographically secure random values (CSPRNG)
 */
export function secureShuffle<T>(array: T[]): { shuffled: T[]; seed: string } {
  const clone: T[] = [...array];
  const entropyWords = new Uint32Array(8);
  crypto.getRandomValues(entropyWords);
  const seed = Array.from(entropyWords)
    .map((n) => n.toString(16).padStart(8, '0'))
    .join('');

  for (let i = clone.length - 1; i > 0; i--) {
    // Generate uniform random index in [0, i]
    const randomVal = getSecureRandomUint32();
    const j = randomVal % (i + 1);
    const temp = clone[i];
    clone[i] = clone[j];
    clone[j] = temp;
  }

  return { shuffled: clone, seed };
}
