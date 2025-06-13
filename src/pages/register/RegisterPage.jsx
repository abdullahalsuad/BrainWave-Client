import { use, useState } from "react";
import RegisterForm from "../../components/authentication/RegisterForm";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { createUser, setUser, updateUser, signInWithGoogle } =
    use(AuthContext);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Get form values
    const formValue = e.target;
    const name = formValue.name.value;
    const email = formValue.email.value;
    const photoURL = formValue.photoURL.value;
    const password = formValue.password.value;

    // Input validation
    if (!name || !email || !password || !photoURL) {
      toast.warning("Please fill all fields and accept terms.");
      setError("Please fill all fields and accept terms.");
      setIsLoading(false);
      return;
    }

    // Email and password format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning("Please enter a valid email address.");
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Password regex checks
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);

    // Validate password
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      toast.warning("Password must be at least 6 characters.");
      setIsLoading(false);
      return;
    }

    if (!hasLower) {
      setError("Password must contain at least one lowercase letter.");
      toast.warning("Password must contain at least one lowercase letter.");
      setIsLoading(false);
      return;
    }

    if (!hasUpper) {
      setError("Password must contain at least one uppercase letter.");
      toast.warning("Password must contain at least one uppercase letter.");
      setIsLoading(false);
      return;
    }

    // Sign Up
    try {
      const result = await createUser(email, password);
      e.target.reset();

      await updateUser({
        displayName: name,
        photoURL: photoURL,
      });

      setUser({ ...result.user, displayName: name, photoURL: photoURL });
      toast.success("Account Create successful");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      // Firebase Auth error codes for sign up
      const errorMessages = {
        "auth/email-already-in-use": "This email is already in use.",
        "auth/invalid-email": "The email address is invalid.",
        "auth/operation-not-allowed":
          "Email/password accounts are not enabled.",
        "auth/weak-password":
          "Password is too weak. Use at least 6 characters.",
        "auth/missing-password": "Please enter a password.",
        "auth/missing-email": "Please enter an email address.",
        default: "An unexpected error occurred. Please try again.",
      };

      const message = errorMessages[error.code] || errorMessages.default;
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  // Sign in with Google
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Login successful. Welcome back!");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      // Map Firebase error codes to friendly messages
      const errorMessages = {
        "auth/popup-closed-by-user": "Popup closed. Please try again.",
        "auth/cancelled-popup-request":
          "Another popup was opened. Please try again.",
        "auth/invalid-credential": "Failed to authenticate with Google.",
        "auth/internal-error": "An internal error occurred. Try again later.",
        default: "Something went wrong. Please try again.",
      };

      const errorMessage = errorMessages[error.code] || errorMessages.default;
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <RegisterForm
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleRegistration={handleRegistration}
        error={error}
        isLoading={isLoading}
        handleGoogleSignIn={handleGoogleSignIn}
      />
    </>
  );
};

export default RegisterPage;
