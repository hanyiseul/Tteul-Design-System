import { createContext } from "react";

type ToastConextType = {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastConextType | null>(null)

export default ToastContext

