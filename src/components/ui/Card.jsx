import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  glass = 'strong',
  hover = true,
  as = 'div',
  ...props
}) {
  const glassClass = {
    light: 'glass',
    strong: 'glass-strong',
    dark: 'glass-dark',
  }[glass];

  const Component = hover ? motion.div : as;

  const hoverProps = hover
    ? {
        whileHover: {
          y: -8,
          scale: 1.02,
          boxShadow: '0 20px 60px -12px rgba(99, 102, 241, 0.25)',
        },
        transition: { duration: 0.3 },
      }
    : {};

  return (
    <Component
      className={`${glassClass} rounded-3xl p-8 cursor-default group ${className}`}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  );
}
