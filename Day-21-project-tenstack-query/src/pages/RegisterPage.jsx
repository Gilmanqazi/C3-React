import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const { register, handleRegister, handleSubmit, errors } = useAuth()

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 text-slate-100 p-4 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card Container */}
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl shadow-2xl z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 mb-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Create an account
          </h1>
          <p className="text-xs text-slate-400 mt-1.5">
            Enter your details below to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          {/* Full Name Field */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Full Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="John Doe"
              className={`w-full px-4 py-2.5 bg-slate-950/60 border ${
                errors.name
                  ? 'border-red-500 focus:ring-red-500/20'
                  : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
              } rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-4 transition-all`}
            />
            {errors.name && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-2.5 bg-slate-950/60 border ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500/20'
                  : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
              } rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-4 transition-all`}
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters are required",
                },
              })}
              type="password"
              placeholder="••••••••"
              className={`w-full px-4 py-2.5 bg-slate-950/60 border ${
                errors.password
                  ? 'border-red-500 focus:ring-red-500/20'
                  : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
              } rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-4 transition-all`}
            />
            {errors.password && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center pt-1">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900"
            />
            <label htmlFor="terms" className="ml-2 block text-xs text-slate-400">
              I agree to the{' '}
              <a href="#terms" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#privacy" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 active:scale-[0.99] mt-2"
          >
            Create Account
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-400 mt-8">
          Already have an account?{' '}
          <Link
            to={"/"}
            className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage