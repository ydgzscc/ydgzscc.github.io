export default function Button({ children, className, ...props }) {
  return (
    <button className={`bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-6 ${className}`} {...props}>
      {children}
    </button>
  )
}

