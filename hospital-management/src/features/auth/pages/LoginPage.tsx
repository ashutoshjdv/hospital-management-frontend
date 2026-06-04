import React from 'react';
import login from '../api/LoginAPI.ts';
import loginBg from '../../../assets/images/login_portal.png';

const LoginPage: React.FC = () => {
  const [formState, setFormState] = React.useState({ email: '', password: '' });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await login({
        email: formState.email,
        password: formState.password,
      });

      localStorage.setItem('authToken', response.token);
      localStorage.setItem('userEmail', response.email);
      setSuccess('Login successful. Redirecting...');

      window.setTimeout(() => {
        window.location.href = '/';
      }, 800);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative min-h-screen overflow-hidden text-slate-950 z-999999`}
    style={{
      backgroundImage: `url('${loginBg}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="
        w-full md:max-w-xl lg:max-w-2xl xl:max-w-4xl overflow-hidden rounded-4xl border border-white/20 bg-white/10 
        shadow-[0_45px_120px_rgba(5,41,64,0.35)] backdrop-blur-xl
        ">
          <div className="grid gap-8 md:p-8 lg:p-12 xl:p-20">
            <div className="rounded-[1.75rem] bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-10">
              <div className="mb-8 flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-50 text-cyan-700 shadow-lg shadow-cyan-500/10">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
                    <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h1 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Welcome Back!</h1>
                <p className="mt-3 text-sm text-slate-500">Email or No. Handphone</p>
              </div>

              {error && (
                <div className="mb-4 rounded-3xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-4 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  {success}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="mb-3 block text-sm font-semibold text-slate-700">
                    Email or No. Handphone
                  </label>
                  <div className="relative rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-inner shadow-slate-950/5 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-100">
                    <input
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="svarda@gmail.co.id"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      type="text"
                      autoComplete="username"
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">👤</span>
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold text-slate-700">
                    <label htmlFor="password">Password</label>
                    <button type="button" className="text-cyan-600 transition hover:text-cyan-700">
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-inner shadow-slate-950/5 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-100">
                    <input
                      id="password"
                      name="password"
                      value={formState.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      type="password"
                      autoComplete="current-password"
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">👁️</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-3xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Signing in…' : 'SIGN IN'}
                </button>
              </form>

              <div className="my-8 flex items-center gap-3 text-sm text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                <span>OR</span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                <span className="text-xl">G</span>
                Continue with Google
              </button>

              <p className="mt-8 text-center text-sm text-slate-500">
                Dont have an account?{' '}
                <button type="button" className="font-semibold text-cyan-600 transition hover:text-cyan-700">
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;