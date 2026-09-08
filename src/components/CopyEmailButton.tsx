import { useState, type ReactNode } from "react";

type Props = {
  email: string;
  className?: string;
  children: (copied: boolean) => ReactNode;
};

export function CopyEmailButton({ email, className, children }: Props) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
      return;
    } catch {
      // Clipboard API unavailable or blocked — try the legacy fallback below.
    }

    const textarea = document.createElement("textarea");
    textarea.value = email;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    let legacyCopySucceeded = false;
    try {
      legacyCopySucceeded = document.execCommand("copy");
    } catch {
      legacyCopySucceeded = false;
    }
    document.body.removeChild(textarea);

    if (legacyCopySucceeded) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children(copied)}
    </button>
  );
}
