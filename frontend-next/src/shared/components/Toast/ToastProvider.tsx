"use client"

import { ReactNode, useEffect, useState } from "react"
import ToastContext from "./ToastContext";
import Toast from "./Toast";

type ToastProviderProps = {
  children: ReactNode;
}

type ToastItem = {
  id: number;
  message: string;
}

const ToastProvider = ({children}: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastItem | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  const showToast = (message: string) => {
    setToast({
      id: Date.now(),
      message,
    });
    setIsExiting(false);
  }

  useEffect(() => {
    if(!toast) return;

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setToast(null);
      setIsExiting(false);
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={{showToast}}>
      {children}
      {toast && <Toast key={toast.id} message={toast.message} out={isExiting} />}
    </ToastContext.Provider>
  )
}
export default ToastProvider