"use client"

import { ReactNode, useEffect, useState } from "react"
import ToastContext from "./ToastContext";
import Toast from "./Toast";

type ToastProviderProps = {
  children: ReactNode;
}

const ToastProvider = ({children}: ToastProviderProps) => {
  const [toast, setToast] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  const showToast = (message: string) => {
    setToast(message);
    setIsExiting(false);
  }

  useEffect(() => {
    if(!toast) return;

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setToast("");
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
      {toast && <Toast message={toast} out={isExiting} />}
    </ToastContext.Provider>
  )
}
export default ToastProvider