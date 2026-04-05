export default function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "left", alignItems: "center", gap: "10px" }}>
        <img src="./src/assets/book-open.svg" alt="Logo" className="logo" width="24" height="24" />
        <h3 className="logo-text">Writing Assistant</h3>
      </div>
      <div style={{ display: "flex", alignItems: "right", gap: "10px" }}>
        <img
          onClick={() => {}}
          src="./src/assets/light-mode.svg"
          alt="Logo"
          className="toogle-dark-mode"
          width="24"
          height="24"
        />
        <button className="sign-in">Sign In</button>
      </div>
    </div>
  );
}
