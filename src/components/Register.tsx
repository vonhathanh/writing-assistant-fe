import { GoogleLoginButton, XLoginButton, FacebookLoginButton } from "react-social-login-buttons";

function handleGoogleSignUp() {
	const width = 500;
  const height = 600;

  const left = window.screenX + (window.innerWidth - width) / 2;
  const top = window.screenY + (window.innerHeight - height) / 2;

  window.open(
    import.meta.env.VITE_BACK_ENV_URL + "/auth/google",
    "Google Login",
    `width=${width},height=${height},left=${left},top=${top}`
  );
}

export default function Register() {
	return (
		<div style={{ maxWidth: 320, margin: "2rem auto", display: "flex", flexDirection: "column", gap: 16 }}>
			<h2>Sign Up</h2>
			<GoogleLoginButton onClick={() => handleGoogleSignUp()}>
				<span>Sign up with Google</span>
			</GoogleLoginButton>
			<XLoginButton onClick={() => alert("Sign up with X")}>
				<span>Sign up with X</span>
			</XLoginButton>
			<FacebookLoginButton onClick={() => alert("Sign up with Facebook")}>
				<span>Sign up with Facebook</span>
			</FacebookLoginButton>
		</div>
	);
}
