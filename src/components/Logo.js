import ReactLogo from "./../images/react-img.svg";

export default function Logo() {
  return (
    <main className="logo-wrapper">
      <img src={ReactLogo} className="logo-img" />
      <h3 className="logo-text">ReactFacts</h3>
    </main>
  );
}
