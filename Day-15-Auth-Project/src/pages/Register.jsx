
import { useAuth } from '../hooks/useAuth';

export function Register() {

  const {register,handleSubmit,registerFromSubmit,errors,navigate} = useAuth()


  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Create an Account</h2>
        <p className="text-sm text-slate-500 mt-1">Sign up to get started today</p>
      </div>

      <form onSubmit={handleSubmit(registerFromSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">
            Full Name
          </label>
          <input
          {...register("name",{
            required:"Name Is Required"
          })}
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
            Email Address
          </label>
          <input
          {...register("email",{
            required:"Email Is Required"
          })}
            type="email"
            id="email"
            name="email"
            
            placeholder="you@example.com"
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
           {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
           {...register("password",{
            required:"Password Is Required",
            minLength:{
              value:6,
              message:"Password should be 6 character"
            }
          })}
            type="password"
            id="password"
            name="password"
            
            placeholder="••••••••"
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
           {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-sm shadow-md transition duration-200"
        >
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-600">
        <span>Already have an account? </span>
        <button
        onClick={()=>{navigate("/")}}
          className="text-indigo-600 hover:underline font-medium focus:outline-none"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Register