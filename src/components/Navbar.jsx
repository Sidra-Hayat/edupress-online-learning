import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/courses', label: 'Courses' },
  { to: '/blog', label: 'Blog' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/dashboard', label: 'Dashboard' },
];

export default function Navbar() {
  const { user, role, logout } = useAuth();
  const displayName = user?.displayName || user?.email;

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/images/icon project.jpeg" alt="EduPress" />
        <span>EduPress</span>
      </div>

      <nav className="navbar-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar-right">
        {user ? (
          <div className="navbar-user">
            <span>
              {displayName}
              {role && <span className="role-badge">{role}</span>}
            </span>

            <Link to="/profile">Profile</Link>

            <Link to="/issues/create">
              <i className="fas fa-flag"></i> Report Issue
            </Link>

            <button type="button" className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="navbar-login">
            Login / Register
          </Link>
        )}
      </div>
    </header>
  );
}