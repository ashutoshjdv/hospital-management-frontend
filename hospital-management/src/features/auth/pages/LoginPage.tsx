import React from 'react';
import login from '../api/LoginAPI.ts';
import { motion } from 'framer-motion';
import loginBg from '../../../assets/images/login_portal.png';
import hospitalLogo from '../../../assets/images/hospital_logo.jpg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks/redux.ts';
import { setCredentials } from '../store/AuthSlice.ts';
import { saveAuth } from '../storage/AuthStorage.ts';
import { getFirstAccessibleRoute } from '../utils/getFirstAccessibleRoute.ts';
// import { useAppSelector } from '../../../app/hooks/redux.ts';

const LoginPage: React.FC = () => {
  // const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [formState, setFormState] = React.useState({ email: '', password: '' });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  // console.log('Auth State:', auth);

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
      dispatch(setCredentials(response));
      saveAuth(response);
      setSuccess('Login successful. Redirecting...');
      const route = getFirstAccessibleRoute(response.authorities);

      window.setTimeout(() => {
        // window.location.href = '/';
        navigate(route);
      }, 800);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`relative min-h-screen overflow-hidden text-slate-950 z-999999`}>
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url('${loginBg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transformOrigin: 'center',
            willChange: 'transform',
          }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 28, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
          <div
            className="
        w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl overflow-hidden rounded-4xl border border-white/20 bg-white/10 
        shadow-[0_45px_120px_rgba(5,41,64,0.35)] backdrop-blur-xl
        "
          >
            <div className="grid gap-8 md:p-8 lg:p-15 lg:py-12 xl:px-15 xl:py-15">
              <div className="rounded-[1.75rem] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-10">
                <div className="flex flex-col items-center text-center">
                  {
                    <img
                      src={hospitalLogo}
                      alt="Hospital Logo"
                      className="mb-4 h-50 w-50 rounded-full object-cover"
                    />
                  }
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
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-semibold text-slate-700"
                    >
                      Email ID
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
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                        👤
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center justify-between text-sm font-semibold text-slate-700">
                      <label htmlFor="password">Password</label>
                      <button
                        type="button"
                        className="text-cyan-600 transition hover:text-cyan-700"
                      >
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
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                        👁️
                      </span>
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

                <p className="mt-8 text-center text-sm text-slate-500">
                  Dont have an account?{' '}
                  <button
                    type="button"
                    className="font-semibold text-cyan-600 transition hover:text-cyan-700"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
