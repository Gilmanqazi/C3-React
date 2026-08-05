import { toast } from 'react-toastify';
import { CheckCircle2, AlertCircle } from 'lucide-react'; 

export const showStylishToast = {
  success: (msg: String) => {
    toast.success(msg, {
      icon: <CheckCircle2 size={18} color="#10B981" />,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  },
  
  error: (msg: String) => {
    toast.error(msg, {
      icon: <AlertCircle size={18} color="#EF4444" />,
      hideProgressBar: false,
    });
  }
};
