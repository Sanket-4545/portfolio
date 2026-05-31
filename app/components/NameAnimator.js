'use client';

export default function NameAnimator({ children, className = "" }) {
  const words = children.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, idx) => (
        <span key={idx} className="animate-word">
          {word}
        </span>
      ))}
    </span>
  );
}
