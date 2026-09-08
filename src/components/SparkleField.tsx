const SPARKLES = [
  { top: "12%", left: "8%", delay: "0s", size: "18px" },
  { top: "22%", left: "88%", delay: "0.6s", size: "14px" },
  { top: "48%", left: "4%", delay: "1.2s", size: "22px" },
  { top: "68%", left: "92%", delay: "0.3s", size: "16px" },
  { top: "85%", left: "12%", delay: "0.9s", size: "20px" },
  { top: "8%", left: "55%", delay: "1.5s", size: "16px" },
  { top: "92%", left: "70%", delay: "0.2s", size: "18px" },
];

export function SparkleField() {
  return (
    <div className="sparkle-field" aria-hidden="true">
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="sparkle"
          style={{ top: s.top, left: s.left, animationDelay: s.delay, fontSize: s.size }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
