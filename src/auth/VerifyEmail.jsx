
export default function VerifyEmail() {
  function resendVerification() {
 
  }

  function logout() {
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Verify Your Email</h1>

        <p>
          Thanks for signing up! Please verify your email address using
          the link sent to your inbox.
        </p>

        <button onClick={resendVerification}>
          Resend Verification Email
        </button>

        <button className="secondary-button" onClick={logout}>
          Log Out
        </button>
      </div>
    </section>
  );
}
