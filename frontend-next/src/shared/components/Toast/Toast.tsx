import "./Toast.css"

type ToastProps = {
  message: string;
  type?: string;
}

const Toast = ({message, type="success" }: ToastProps) => {
  return (
    <div className="toastContainer">
      <div className={`toast toast_${type} ${toastOut? "toastOut" : ""}`}>
        {message}
      </div>
    </div>
  )
}
export default Toast