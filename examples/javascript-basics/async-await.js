/**
 * JavaScript Async/Await - Best Practices Example
 * 
 * This example demonstrates modern asynchronous programming in JavaScript
 * using async/await syntax.
 */

/**
 * Simulates fetching user data from an API
 * @param {number} userId - The ID of the user to fetch
 * @returns {Promise<Object>} User data object
 */
async function fetchUser(userId) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`
  };
}

/**
 * Fetches multiple users in parallel
 * @param {number[]} userIds - Array of user IDs to fetch
 * @returns {Promise<Object[]>} Array of user data objects
 */
async function fetchMultipleUsers(userIds) {
  // Use Promise.all for parallel execution
  const promises = userIds.map(id => fetchUser(id));
  return await Promise.all(promises);
}

/**
 * Example with error handling
 * @param {number} userId - The ID of the user to fetch
 * @returns {Promise<Object|null>} User data or null if error occurs
 */
async function fetchUserSafely(userId) {
  try {
    const user = await fetchUser(userId);
    return user;
  } catch (error) {
    console.error(`Failed to fetch user ${userId}:`, error);
    return null;
  }
}

/**
 * Main function to demonstrate the examples
 */
async function main() {
  console.log('Fetching single user...');
  const user = await fetchUser(1);
  console.log('User:', user);
  
  console.log('\nFetching multiple users in parallel...');
  const users = await fetchMultipleUsers([1, 2, 3]);
  console.log('Users:', users);
  
  console.log('\nFetching with error handling...');
  const safeUser = await fetchUserSafely(4);
  console.log('Safe user:', safeUser);
}

// Run the examples
main().catch(console.error);
