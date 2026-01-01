const Button = ({
  children,
  variant = "primary", // primary | secondary | outline
  size = "md",         // xs | sm | md | lg | xl
  loading = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ease-out focus:outline-none select-none transform";

  const sizes = {
    xs: "px-4 py-2 text-xs",
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
    xl: "px-14 py-5 text-xl",
  };

  const variants = {
    // Warning
    warning:
      "bg-[#F17228] text-white " +
      "shadow-[0_12px_30px_-14px_rgba(249,115,22,0.55)] " +
      "hover:bg-orange-600 hover:scale-[0.97] " +
      "active:bg-orange-700 active:scale-[0.95]",

    //Primary
    primary:
      "bg-[#FFB30E] text-white " +
      "shadow-[0_14px_35px_-14px_rgba(255,191,36,0.65)] " +
      "hover:scale-[0.97] hover:bg-amber-500 " +
      "active:scale-[0.95]",

    // Secondary
    secondary:
       "bg-[#2780ED] text-white " +
      "shadow-[0_14px_35px_-14px_rgba(255,191,36,0.65)] " +
      "hover:scale-[0.97] hover:bg-[#2760ED] " +
      "active:scale-[0.95]",

    // Outline
    outline:
      "bg-white text-orange-500 " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.12)] " +
      "hover:shadow-[0_8px_22px_rgba(250,204,21,0.45)] hover:scale-[0.97] " +
      "active:bg-orange-50 active:scale-[0.95]",
  };

  const disabledStyles =
    "bg-gray-200 text-gray-400 shadow-none cursor-not-allowed transform-none";

  return (
    <button
      disabled={disabled || loading}
      className={`
        ${base}
        ${sizes[size]}
        ${disabled || loading ? disabledStyles : variants[variant]}
        ${className}
      `}
      {...props}
    >
        {children}
    </button>
  );
};

export default Button;
