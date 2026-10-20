
import { useParams, useSearchParams, Link } from 'react-router-dom';

export default function ResetPassword() {
  const { token } = useParams();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || '';

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Reset Password</h1>

        <input type="hidden" name="token" value={token || ''} />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={email}
          required
        />

        <label htmlFor="password">New Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />

        <label htmlFor="password_confirmation">Confirm Password</label>
        <input
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          autoComplete="new-password"
          required
        />

        <button type="submit">Reset Password</button>
        <p><Link to="/login">Back to login</Link></p>
      </form>
    </section>
  );
}
