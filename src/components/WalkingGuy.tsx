import "./WalkingGuy.css";

export function WalkingGuy() {
  return (
    <div className="walker-stage retro-only" aria-hidden="true">
      <div className="walker">
        <div className="walker-head" />
        <div className="walker-torso" />
        <div className="walker-arm left" />
        <div className="walker-arm right" />
        <div className="walker-leg left" />
        <div className="walker-leg right" />
      </div>
    </div>
  );
}
