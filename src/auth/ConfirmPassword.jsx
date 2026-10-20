
export default function ConfirmPassword() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Confirm Password</h1>
        <p>
          This is a secure area. Please confirm your password before
          continuing.
        </p>

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          required
        />

        <button type="submit">Confirm</button>
      </form>
    </section>
  );
}
