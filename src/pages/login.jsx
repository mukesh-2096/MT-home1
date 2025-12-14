import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f5f7fb] py-16">
      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative hidden overflow-hidden rounded-t-3xl bg-linear-to-br from-blue-700 via-indigo-600 to-blue-500 p-10 text-white lg:flex lg:rounded-l-3xl lg:rounded-tr-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff22,transparent_60%)]" aria-hidden="true"></div>
            <div className="relative flex flex-col justify-between">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-lg font-semibold">D</div>
                <h2 className="mt-8 text-3xl font-semibold leading-tight">Welcome back to Diksuchi</h2>
                <p className="mt-4 text-sm text-white/80">Access personalized learning plans, track your progress, and stay ahead with curated recommendations.</p>
              </div>
              <div className="mt-16 space-y-4 text-sm text-white/80">
                <div className="rounded-xl bg-white/10 p-4">
                  <div className="text-lg font-semibold">50K+ learners</div>
                  <p className="text-white/70">Join a global community and collaborate with peers.</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-lg font-semibold">Guided certifications</div>
                  <p className="text-white/70">Earn credentials recognised by top employers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-b-3xl bg-white px-8 py-12 lg:rounded-r-3xl lg:rounded-bl-none lg:px-12">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Sign in</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900">Welcome back</h3>
              <p className="mt-2 text-sm text-slate-500">Enter your details to continue building your learning journey.</p>
            </div>

            <form className="space-y-5" aria-label="Login form">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="you@example.com"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
                  <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-700">Forgot password?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="••••••••"
                    aria-required="true"
                  />
                </div>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-600">
              <span>Don't have an account? </span>
              <button onClick={() => navigate('/signup')} className="font-semibold text-blue-600 hover:text-blue-700">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
