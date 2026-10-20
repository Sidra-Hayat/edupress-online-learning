import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    try {
      login(email, password);

      // Go back to the page the user was trying to open, otherwise /home
      const destination = location.state?.from?.pathname || '/home';
      navigate(destination, { replace: true });
    } catch (err) {
      setError(err.message || 'Unable to log in.');
    }
  }

  return (
    <main className="auth-page">
      <Link to="/home" className="auth-brand">
        <img src="/images/icon project.jpeg" alt="" className="auth-brand-icon" />
        <span>EduPress</span>
      </Link>

      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Log in</h1>

        <p className="auth-subtitle">
          Welcome back! Please enter your details.
        </p>

        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="auth-options">
          <label className="checkbox-label">
            <input type="checkbox" name="remember" />
            <span>Remember me</span>
          </label>

          <Link to="/forgot-password">Forgot your password?</Link>
        </div>

        {error && <p className="auth-error" role="alert">{error}</p>}

        <button type="submit" className="auth-submit">
          Log in
        </button>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </main>
  );
}