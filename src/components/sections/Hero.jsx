import { motion } from 'framer-motion';
import { Star, Eye, ChevronDown, ShoppingBag } from 'lucide-react';
import useCountUp from '../../hooks/useCountUp';
import Button from '../ui/Button';

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

export default function Hero() {
  const counter1 = useCountUp(1000, '+');
  const counter2 = useCountUp(100, '%');
  const counter3 = useCountUp(24, '/7');

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-brand-400 rounded-full blur-[80px] opacity-40 -top-[10%] -right-[8%] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-purple-400 rounded-full blur-[80px] opacity-40 bottom-[10%] -left-[5%] pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-emerald-400 rounded-full blur-[80px] opacity-20 top-[40%] left-[30%] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center lg:text-right"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-200/60 mb-8">
              <span className="text-sm font-semibold text-brand-700">الجيل الجديد من أنظمة إدارة المراكز التعليمية</span>
              <Star className="w-4 h-4 text-brand-500 fill-brand-500" />
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 mb-6">
              إدارتك لمركزك التعليمي
              <span className="block mt-2 bg-gradient-to-l from-brand-500 to-purple-500 bg-clip-text text-transparent">
                أسهل، أسرع، وبدون إنترنت!
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              CenterCRM — حل إداري شامل وموثوق يجمع بين إدارة الطلاب، المالية، والواتساب في مكان واحد.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gradient" href="#pricing" iconRight={ShoppingBag}>
               أشتر الأن
              </Button>
              <Button variant="outline" href="#features" iconRight={ChevronDown}>
                مشاهدة التفاصيل
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div ref={counter1.ref} className="text-center">
                <div className="text-3xl font-black text-slate-900 counter-value">{counter1.text}</div>
                <div className="text-sm text-slate-400 font-medium mt-1">طالب مدعوم</div>
              </div>
              <div className="w-px bg-slate-200" />
              <div ref={counter2.ref} className="text-center">
                <div className="text-3xl font-black text-slate-900 counter-value">{counter2.text}</div>
                <div className="text-sm text-slate-400 font-medium mt-1">أوفلاين</div>
              </div>
              <div className="w-px bg-slate-200" />
              <div ref={counter3.ref} className="text-center">
                <div className="text-3xl font-black text-slate-900 counter-value">{counter3.text}</div>
                <div className="text-sm text-slate-400 font-medium mt-1">دعم فني</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="float-mockup relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-purple-400/20 rounded-3xl blur-3xl scale-110" />
              <div className="relative glass-strong rounded-2xl p-2 shadow-2xl shadow-brand-500/10">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 text-center text-xs font-medium text-slate-400">center-crm.com/dashboard</div>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-white rounded-b-xl min-h-[300px] sm:min-h-[380px]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm font-bold text-slate-800">لوحة التحكم</div>
                      <div className="text-xs text-slate-400">مرحباً بك في CenterCRM</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-purple-400" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                      <div className="text-xs text-slate-400 mb-1">الطلاب</div>
                      <div className="text-lg font-bold text-brand-600">248</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                      <div className="text-xs text-slate-400 mb-1">الإيرادات</div>
                      <div className="text-lg font-bold text-emerald-600">45,200</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                      <div className="text-xs text-slate-400 mb-1">الحضور</div>
                      <div className="text-lg font-bold text-purple-600">92%</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="text-xs font-semibold text-slate-600 mb-3">الإيرادات الشهرية</div>
                    <div className="flex items-end gap-2 h-28">
                      {[45, 65, 55, 80, 70, 95, 60].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-t-md ${
                            i === 5
                              ? 'bg-gradient-to-t from-purple-400 to-purple-200'
                              : 'bg-gradient-to-t from-brand-400 to-brand-200'
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
