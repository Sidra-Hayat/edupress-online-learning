
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setMessage('Connect your Laravel backend to request a reset link.');
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Forgot Password?</h1>
        <p>
          Enter your email address to request a password reset link.
        </p>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />

        {message && <p role="status">{message}</p>}

        <button type="submit">Email Password Reset Link</button>

        <p><Link to="/login">Back to login</Link></p>
      </form>
    </section>
  );
}
