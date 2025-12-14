import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f7fb] py-16">
      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative hidden overflow-hidden rounded-t-3xl bg-linear-to-br from-blue-600 via-indigo-500 to-blue-500 p-10 text-white lg:flex lg:rounded-l-3xl lg:rounded-tr-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ffffff22,transparent_60%)]" aria-hidden="true"></div>
            <div className="relative flex flex-col justify-between">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-lg font-semibold">D</div>
                <h2 className="mt-8 text-3xl font-semibold leading-tight">Create your Diksuchi account</h2>
                <p className="mt-4 text-sm text-white/80">Unlock tailored learning recommendations, track your growth, and earn industry-recognised certificates.</p>
              </div>
              <div className="mt-16 space-y-4 text-sm text-white/80">
                <div className="rounded-xl bg-white/10 p-4">
                  <div className="text-lg font-semibold">Personalized journeys</div>
                  <p className="text-white/70">Set your goals and receive curated course roadmaps.</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-lg font-semibold">AI learning tools</div>
                  <p className="text-white/70">Practice with smart assessments and instant feedback.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-b-3xl bg-white px-8 py-12 lg:rounded-r-3xl lg:rounded-bl-none lg:px-12">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Sign up</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900">Create your account</h3>
              <p className="mt-2 text-sm text-slate-500">Start exploring premium courses, certificates, and tools.</p>
            </div>

            <form className="space-y-5" aria-label="Signup form">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="John Doe"
                    aria-required="true"
                  />
                </div>
              </div>

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
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="Create a strong password"
                    aria-required="true"
                  />
                </div>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Create account
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-600">
              <span>Already have an account? </span>
              <button onClick={() => navigate('/login')} className="font-semibold text-blue-600 hover:text-blue-700">Login</button>
            </div>

            <div className="mt-6 text-center text-xs text-slate-500">
              By signing up, you agree to our
              <a className="ml-1 font-medium text-blue-600 hover:text-blue-700" href="/terms">Terms</a>
              <span className="mx-1">&</span>
              <a className="font-medium text-blue-600 hover:text-blue-700" href="/privacy">Privacy</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
