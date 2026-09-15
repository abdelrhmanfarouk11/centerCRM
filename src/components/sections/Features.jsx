import { motion } from 'framer-motion';
import { features, iconMap } from '../../data/siteData';
import Card from '../ui/Card';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-5">
            لماذا يختار أصحاب المراكز
            <span className="bg-gradient-to-l from-brand-500 to-purple-500 bg-clip-text text-transparent"> CenterCRM</span>؟
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-500">مميزات صُممت خصيصاً لتلبية احتياجات المراكز التعليمية</motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => {
            const IconComp = iconMap[f.icon];
            return (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                custom={i * 0.1}
                whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 60px -12px rgba(99, 102, 241, 0.25)' }}
                transition={{ duration: 0.3 }}
                className={`group glass-strong rounded-3xl p-8 cursor-default ${f.wide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                {f.wide ? (
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className={`w-7 h-7 ${f.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className={`w-7 h-7 ${f.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
