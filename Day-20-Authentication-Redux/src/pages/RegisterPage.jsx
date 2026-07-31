import React from 'react'
import { useAuth } from '../hooks/useAuth'

const RegisterPage = () => {

  const {register,handleRegister,handleSubmit,errors} = useAuth()


  return (
    <div>
     
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Full Name
            </label>
            <input
            {...register("name",{
              required:"Name is Required",

            })}
              type="text"
              placeholder="John Doe"
            
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
             {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
            {...register("email",{
              required:"Email Is Required",

            })}
              type="email"
              placeholder="you@example.com"
              
             
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
             {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Password
            </label>
            <input
            {...register("password",{
              required:"Password Is Required",
              minLength:{
                value:6,
                message: "Minimum 6 characters are required"

              }
            })}
              type="password"
              
              placeholder="••••••••"
             
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
             {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>

          <button
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-lg shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98] mt-2"
          >
            Create Account
          </button>
        </form>
    </div>
  )}

export default RegisterPage