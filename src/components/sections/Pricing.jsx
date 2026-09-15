import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans, getPlanWhatsappUrl } from '../../data/siteData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-5">
            اختر{' '}
            <span className="bg-gradient-to-l from-brand-500 to-purple-500 bg-clip-text text-transparent">الباقة المناسبة</span>{' '}
            لمركزك
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-500">
            جميع الباقات تشمل ترخيص مدى الحياة — لا اشتراكات شهرية، لا رسوم إضافية.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -10, boxShadow: '0 25px 60px -12px rgba(99, 102, 241, 0.3)' }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? 'glass-strong border-2 border-brand-400 shadow-2xl shadow-brand-500/20 scale-[1.03] z-10'
                  : 'glass-strong'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 rounded-full bg-gradient-to-l from-brand-500 to-purple-500 text-white text-xs font-bold shadow-lg shadow-brand-500/40">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-lg font-bold text-slate-500">{plan.currency}</span>
                </div>
                <div className="mt-1">
                  <span className="text-sm text-slate-400 line-through">{plan.originalPrice} {plan.currency}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular
                        ? 'bg-brand-100'
                        : 'bg-emerald-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-brand-600' : 'text-emerald-600'}`} />
                    </div>
                    <span className="text-sm text-slate-600">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getPlanWhatsappUrl(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-l from-brand-500 to-purple-500 text-white shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.03] btn-shine'
                    : 'border-2 border-slate-200 text-slate-700 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50/50'
                }`}
              >
                اطلب الآن عبر واتساب
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
