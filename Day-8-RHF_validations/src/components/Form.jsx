
import { useEffect } from "react"
import {useForm} from "react-hook-form"


const Form = ({setUsers,setToggle,activeUser,setActiveUser,users}) => {

  const {register,handleSubmit,reset,formState:{errors}} = useForm(
    {
      mode:"onChange",
      defaultValues:{
       name:"",
       email:"",
       mobile:"",
       url:""
      }
    }
  )

  useEffect(()=>{
if(activeUser){
  reset(activeUser)
}else {
  reset({ name: "", email: "", number: "", image: "" }); 
}
  },[activeUser])


  const formSubmit = (data) =>{

    let updatedUsers;
    
    if (activeUser && activeUser.id !== undefined) {
 updatedUsers.map((user, idx) => (idx === activeUser.id ? data : user))
        setUsers(updatedUsers)
    } else {
      updatedUsers = [...users, data];
       
      setUsers(updatedUsers)


      localStorage.setItem("users", JSON.stringify(updatedUsers))
    }
  setActiveUser(null)
    reset()
    setToggle((prev)=> !prev)
  }



  return (
    <div className="flex flex-col items-center gap-3">
    <h1 className="text-xl font-bold">Create user</h1>
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="w-90 flex flex-col bg-black gap-3 p-4 rounded border-2 border-white "
    >
      <input
        {...register("name", {
          required: "Name is required",
          pattern: {
            value: /^\S.*$/,
            message: "Blank spaces is not allowed",
          },
        })}
        className="p-2 rounded outline-0 border border-white"
        type="text"
        placeholder="Name"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter valid email",
          },
        })}
        className="p-2 rounded outline-0 border border-white"
        type="email"
        placeholder="Email"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        {...register("mobile", {
          required: "Mobile is required",
          minLength: {
            value: 10,
            message: "Minimum 10 digits are required",
          },
          maxLength: {
            value: 10,
            message: "Maximum 10 digits are required",
          },
        })}
        className="p-2 rounded outline-0 border border-white"
        type="number"
        placeholder="Mobile"
      />
      {errors.mobile && (
        <p className="text-red-500">{errors.mobile.message}</p>
      )}
      <input
        {...register("image", {
          required: "Image is required",
        })}
        className="p-2 rounded outline-0 border border-white"
        type="url"
        placeholder="Image"
      />
      {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      <button type="submit" className="bg-green-600 p-2 rounded mt-2">
        {activeUser ? "Save Changes" : "Submit"}
      </button>
    </form>
  </div>
  )
}

export default Form
