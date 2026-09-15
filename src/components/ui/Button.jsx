import { motion } from 'framer-motion';

const variants = {
  gradient:
    'bg-gradient-to-l from-brand-500 to-purple-500 text-white font-bold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.03] transition-all duration-300 btn-shine',
  outline:
    'border-2 border-slate-200 text-slate-700 font-bold hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50/50 transition-all duration-300',
  whatsapp:
    'bg-[#25D366] text-white font-bold shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-[1.03] transition-all duration-300 whatsapp-pulse',
  darkOutline:
    'border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all duration-300',
};

export default function Button({
  variant = 'gradient',
  href,
  children,
  className = '',
  icon: Icon,
  iconRight: IconRight,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-lg ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
        {IconRight && <IconRight className="w-5 h-5" />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
      {IconRight && <IconRight className="w-5 h-5" />}
    </button>
  );
}
