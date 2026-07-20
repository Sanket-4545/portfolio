'use client';

export default function NameAnimator({ children, className = "" }) {
  return (
    <span className={className}>
      {children}
    </span>
  );
}
