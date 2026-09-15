import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import {
  tabData, attendanceData, financeSummary, transactions, students,
} from '../../data/siteData';

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

function MockupFrame({ title, children }) {
  return (
    <div className="glass-strong rounded-3xl p-3 shadow-2xl shadow-brand-500/10">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-100">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center text-xs font-medium text-slate-400">{title}</div>
      </div>
      <div className="bg-gradient-to-br from-slate-50 to-white rounded-b-2xl p-6 sm:p-10">
        {children}
      </div>
    </div>
  );
}

function DashboardPanel() {
  return (
    <MockupFrame title="CenterCRM — لوحة التحكم الرئيسية">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400 to-purple-400" />
        <div>
          <div className="text-lg font-bold text-slate-800">مرحباً، محمد</div>
          <div className="text-sm text-slate-400">آخر تسجيل دخول: اليوم، 09:15 ص</div>
        </div>
      </div>
      <div className="grid sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'إجمالي الطلاب', value: '248', color: 'text-brand-600', sub: '+12 هذا الشهر' },
          { label: 'الإيرادات', value: '45,200 ج.م', color: 'text-emerald-600', sub: '+8% من الشهر السابق' },
          { label: 'نسبة الحضور', value: '92%', color: 'text-purple-600', sub: 'ممتاز' },
          { label: 'الرسائل المرسلة', value: '1,456', color: 'text-electric-600', sub: 'عبر واتساب' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <div className="text-xs font-semibold text-slate-400 mb-2">{s.label}</div>
            <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-xs text-emerald-500 font-semibold mt-1">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="text-sm font-bold text-slate-700 mb-4">الحضور هذا الأسبوع</div>
        <div className="space-y-3">
          {attendanceData.map((a) => (
            <div key={a.day} className="flex items-center gap-3">
              <div className="w-24 text-xs text-slate-500 font-medium">{a.day}</div>
              <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-l ${a.color} rounded-full`} style={{ width: `${a.pct}%` }} />
              </div>
              <div className={`w-10 text-xs font-bold ${a.textColor} text-left`}>{a.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

function FinancePanel() {
  return (
    <MockupFrame title="CenterCRM — التقارير المالية">
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {financeSummary.map((f) => (
          <div key={f.label} className={`bg-gradient-to-br ${f.bg} rounded-2xl p-5 border ${f.border}`}>
            <div className={`text-xs font-semibold ${f.labelColor} mb-2`}>{f.label}</div>
            <div className={`text-2xl font-black ${f.textColor}`}>{f.value}</div>
            <div className={`text-xs ${f.labelColor} mt-2`}>{f.sub}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="text-sm font-bold text-slate-700 mb-4">ملخص المعاملات الأخيرة</div>
        <div className="space-y-3">
          {transactions.map((t, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.type === 'income' ? 'bg-emerald-100' : 'bg-red-100'}`}>
                  <TrendingUp className={`w-5 h-5 ${t.type === 'income' ? 'text-emerald-500' : 'text-red-500 rotate-180'}`} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.date}</div>
                </div>
              </div>
              <div className={`text-sm font-bold ${t.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>{t.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

function StudentsPanel() {
  return (
    <MockupFrame title="CenterCRM — إدارة الطلاب">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-lg font-bold text-slate-800">قائمة الطلاب</div>
          <div className="text-sm text-slate-400">إجمالي: 248 طالب</div>
        </div>
        <button className="px-4 py-2 rounded-xl bg-gradient-to-l from-brand-500 to-purple-500 text-white text-sm font-bold shadow-lg shadow-brand-500/20">
          + إضافة طالب
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-right px-5 py-3 font-bold text-slate-600">الاسم</th>
              <th className="text-right px-5 py-3 font-bold text-slate-600 hidden sm:table-cell">المجموعة</th>
              <th className="text-right px-5 py-3 font-bold text-slate-600">الحالة</th>
              <th className="text-right px-5 py-3 font-bold text-slate-600 hidden md:table-cell">الحضور</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {students.map((s) => (
              <tr key={s.name} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                      {s.initials}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">{s.name}</div>
                      <div className="text-xs text-slate-400 sm:hidden">{s.group}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-600 hidden sm:table-cell">{s.group}</td>
                <td className="px-5 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    s.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {s.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600 font-semibold hidden md:table-cell">{s.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MockupFrame>
  );
}

const panels = { dashboard: DashboardPanel, finance: FinancePanel, students: StudentsPanel };

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const ActivePanel = panels[activeTab];

  return (
    <section id="product" className="relative py-24 lg:py-32 bg-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-5">
            نظام{' '}
            <span className="bg-gradient-to-l from-brand-500 to-purple-500 bg-clip-text text-transparent">CenterCRM</span>{' '}
            أثناء العمل
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-500">اكتشف الشاشات الرئيسية للنظام</motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabData.map((tab) => (
            <motion.button
              key={tab.id}
              variants={fadeUp}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-l from-brand-500 to-purple-500 text-white shadow-lg shadow-brand-500/40'
                  : 'glass text-slate-600 hover:text-brand-600'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative max-w-5xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ActivePanel />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
