// client/src/utils/auth.js
export const isMentorLoggedIn = () => {
  const token = sessionStorage.getItem('token');
  const role = sessionStorage.getItem('role');
  return token && role === 'mentor_admin';
};
