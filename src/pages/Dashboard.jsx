import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  useEffect(() => {
    document.title = 'EduPress Dashboard Workspace';
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-icon">
        <i className="fas fa-user-shield"></i>
      </div>

      <h1>Welcome to EduPress, {user?.displayName || user?.email}!</h1>
      <p className="dashboard-text">
        Your account setup is currently pending verification. Please contact your
        administrator or update your profile role settings to access your student
        or instructor tools.
      </p>

      <div className="dashboard-actions">
        <Link to="/profile" className="btn btn-primary btn-lg btn-shadow">
          <i className="fas fa-user-cog"></i> Configure Profile Privilege
        </Link>
        <Link to="/" className="btn btn-outline btn-lg">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}