// client/src/components/MentorRoute.jsx
import { Navigate } from 'react-router-dom';
import { isMentorLoggedIn } from '../utils/auth';

const MentorRoute = ({ children }) => {
  return isMentorLoggedIn() ? children : <Navigate to="/login" />;
};

export default MentorRoute;
