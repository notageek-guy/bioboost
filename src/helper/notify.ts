
import toast from "react-hot-toast";

export const notifier = {
    loading : (messsage:string) => toast.loading(messsage),
    success : (messsage:string) => toast.success(messsage),
    error : (messsage:string) => toast.error(messsage),
} 

