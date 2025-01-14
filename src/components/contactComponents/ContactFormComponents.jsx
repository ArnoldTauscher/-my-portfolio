import PropTypes from "prop-types";

// Input-Komponente mit Prop-Validierung
export const Input = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
}) => (
  <div>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="input-base"
      aria-invalid={error ? "true" : "false"}
    />
    {error && (
      <p className="text-red-500 mt-1" id={`${id}-error`}>
        {error}
      </p>
    )}
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
};

// Textarea-Komponente mit Prop-Validierung
export const Textarea = ({ id, name, value, onChange, placeholder, error }) => (
  <div>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="input-base"
      aria-invalid={error ? "true" : "false"}
    />
    {error && (
      <p className="text-red-500 mt-1" id={`${id}-error`}>
        {error}
      </p>
    )}
  </div>
);

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
};

// Button-Komponente mit Prop-Validierung
export const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) => (
  <button
    className={`contact-form-btn-base ${
      variant === "primary"
        ? "bg-risd-blue text-white border-risd-blue"
        : "bg-white text-black border-risd-blue"
    }`}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
