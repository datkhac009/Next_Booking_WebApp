function Spinner({ size = "lg", fullPage = false, label = "Loading..." }) {
  const spinnerSize =
    size === "sm" ? "h-5 w-5 border-2" : "h-12 w-12 border-4";

  return (
    <div
      className={`flex items-center justify-center ${
        fullPage ? "min-h-[50vh] w-full" : "w-full py-10"
      }`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div
        className={`${spinnerSize} animate-spin rounded-full border-primary-700 border-t-accent-500`}
      />
    </div>
  );
}

export default Spinner;
