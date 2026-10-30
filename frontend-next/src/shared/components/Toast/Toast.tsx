import "./Toast.css"

type ToastProps = {
  message: string;
  type?: string;
  out: boolean;
}

const Toast = ({message, type="success", out=false }: ToastProps) => {
  return (
    <>  
      <div className="toastContainer">
        <div 
          className={`toast toast_${type} ${out ? "toastOut" : ""}`}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {message}
        </div>
      </div>
    </>
  )  
}
export default Toast