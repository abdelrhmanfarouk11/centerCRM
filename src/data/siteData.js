import {
  WifiOff, BarChart3, MessageCircle, Download, Zap,
  BookOpen, Settings, Search, Cloud, HeadphonesIcon, CheckCircle,
} from 'lucide-react';

export const contactData = {
  whatsappNumber: '+201009065792',
  whatsappMessage: 'السلام عليكم، حابب استفسر عن نظام CenterCRM',
  customCrmMessage: 'السلام عليكم، حابب أستفسر عن تصميم نظام CRM مخصص لنشاطي التجاري',
  phone: '+201009065792',
  email: 'abdelrhmanfaroukaa@gmail.com',
  socials: {
    facebook: 'https://facebook.com/AbdelrhmanFarouka',
    linkedin: 'https://www.linkedin.com/in/abdelrhman-farouk-98b708271/',
    instagram: 'https://www.instagram.com/abdelrhman_farouk207/',
  },
};

export const getWhatsappUrl = () =>
  `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappMessage)}`;

export const getCustomCrmWhatsappUrl = () =>
  `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.customCrmMessage)}`;

export const navLinks = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#features', label: 'المميزات' },
  { href: '#product', label: 'نظام CenterCRM' },
  { href: '#pricing', label: 'الأسعار' },
  { href: '#custom', label: 'حلول مخصصة' },
];

export const pricingPlans = [
  {
    id: 'single',
    name: 'باقة الجهاز الواحد',
    price: '3199',
    originalPrice: '3600',
    currency: 'ج.م',
    desc: 'ترخيص مدى الحياة لجهاز واحد.',
    features: [
      'ترخيص مدى الحياة — جهاز واحد',
      'كل التحديثات المستقبلية مجاناً',
      'دعم فني على مدار الساعة',
      'بيانات محفوظة 100% على جهازك',
    ],
    popular: false,
    whatsappMessage: 'السلام عليكم، حابب أشتري باقة الجهاز الواحد (3199 ج.م) من CenterCRM',
  },
  {
    id: 'dual',
    name: 'باقة الجهازين',
    price: '5999',
    originalPrice: '7200',
    currency: 'ج.م',
    desc: 'ترخيص مدى الحياة لجهازين.',
    features: [
      'ترخيص مدى الحياة — جهازين',
      'كل التحديثات المستقبلية مجاناً',
      'دعم فني على مدار الساعة',
      'بيانات محفوظة 100% على جهازك',
      'الأعلى توفيراً — وفّر 1200 ج.م',
    ],
    popular: true,
    badge: 'الأعلى توفيراً',
    whatsappMessage: 'السلام عليكم، حابب أشتري باقة الجهازين (5999 ج.م) من CenterCRM',
  },
  {
    id: 'pro',
    name: 'الباقة الإحترافية',
    price: '9799',
    originalPrice: '12500',
    currency: 'ج.م',
    desc: 'ترخيص مدى الحياة من 3 إلى 5 أجهزة.',
    features: [
      'ترخيص مدى الحياة — 3 إلى 5 أجهزة',
      'كل التحديثات المستقبلية مجاناً',
      'دعم فني على مدار الساعة',
      'بيانات محفوظة 100% على جهازك',
      'مثالية للمراكز الكبيرة',
    ],
    popular: false,
    whatsappMessage: 'السلام عليكم، حابب أشتري الباقة الإحترافية (9800 ج.م) من CenterCRM',
  },
];

export const getPlanWhatsappUrl = (plan) =>
  `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`;

export const features = [
  {
    icon: 'WifiOff',
    color: 'from-brand-500/10 to-purple-500/10',
    iconColor: 'text-brand-500',
    title: 'تعمل 100% بدون إنترنت',
    desc: 'بياناتك في أمان تام على جهازك الخاص. لا حاجة لاتصال مستمر — استمر في العمل حتى بدون شبكة.',
    wide: false,
  },
  {
    icon: 'BarChart3',
    color: 'from-emerald-500/10 to-emerald-400/5',
    iconColor: 'text-emerald-500',
    title: 'تقارير مالية دقيقة',
    desc: 'متابعة الإيرادات والمصروفات وصافي الأرباح بنقرة واحدة. تقارير جاهزة للتصدير والطباعة.',
    wide: false,
  },
  {
    icon: 'MessageCircle',
    color: 'from-electric-500/10 to-electric-400/5',
    iconColor: 'text-electric-500',
    title: 'ربط مباشر بالواتساب',
    desc: 'إرسال تنبيهات الحضور والغياب لأولياء الأمور تلقائياً عبر واتساب.',
    wide: false,
  },
  {
    icon: 'Download',
    color: 'from-purple-500/10 to-pink-500/5',
    iconColor: 'text-purple-500',
    title: 'تصدير بضغطة زر',
    desc: 'تصدير كافة التقارير والبيانات إلى ملفات Excel منسقة جاهزة للمشاركة والطباعة.',
    wide: false,
  },
  {
    icon: 'Zap',
    color: 'from-amber-500/10 to-orange-500/5',
    iconColor: 'text-amber-500',
    title: 'إجراءات سريعة بديهية',
    desc: 'تسجيل حضور، إضافة طالب، وتسجيل دفعات في ثوانٍ معدودة. واجهة بسيطة وسريعة تتطلب أقل قدر من التدريب.',
    wide: true,
  },
];

export const iconMap = { WifiOff, BarChart3, MessageCircle, Download, Zap, BookOpen, Settings, Search, Cloud, HeadphonesIcon, CheckCircle };

export const customCrmHighlights = [
  { icon: 'Search', title: 'تحليل متطلبات عملك', desc: 'تفصيل النظام من الصفر بناءً على احتياجاتك الفريدة.' },
  { icon: 'Cloud', title: 'أوفلاين أو سحابي', desc: 'إمكانية العمل على الشبكة المحلية (Local Network) أو سحابياً (Cloud).' },
  { icon: 'MessageCircle', title: 'ربط متقدم بالواتساب', desc: 'خدمات واتساب والتقارير المالية المخصصة لنشاطك.' },
  { icon: 'HeadphonesIcon', title: 'دعم فني وتدريب', desc: 'تدريب كامل لفريقك ودعم فني مستمر.' },
];

export const tabData = [
  { id: 'dashboard', label: 'لوحة التحكم' },
  { id: 'finance', label: 'التقارير المالية' },
  { id: 'students', label: 'إدارة الطلاب' },
];

export const attendanceData = [
  { day: 'السبت', pct: 94, color: 'from-emerald-400 to-emerald-500', textColor: 'text-emerald-600' },
  { day: 'الأحد', pct: 89, color: 'from-emerald-400 to-emerald-500', textColor: 'text-emerald-600' },
  { day: 'الاثنين', pct: 91, color: 'from-brand-400 to-brand-500', textColor: 'text-brand-600' },
  { day: 'الثلاثاء', pct: 96, color: 'from-emerald-400 to-emerald-500', textColor: 'text-emerald-600' },
];

export const financeSummary = [
  { label: 'إجمالي الإيرادات', value: '128,500 ج.م', sub: 'الأشهر الثلاثة الأخيرة', bg: 'from-emerald-50 to-emerald-100/50', border: 'border-emerald-200/50', textColor: 'text-emerald-700', labelColor: 'text-emerald-600' },
  { label: 'المصروفات', value: '34,200 ج.م', sub: 'الأشهر الثلاثة الأخيرة', bg: 'from-red-50 to-red-100/50', border: 'border-red-200/50', textColor: 'text-red-700', labelColor: 'text-red-600' },
  { label: 'صافي الأرباح', value: '94,300 ج.م', sub: 'هامش الربح: 73%', bg: 'from-brand-50 to-purple-100/50', border: 'border-brand-200/50', textColor: 'text-brand-700', labelColor: 'text-brand-600' },
];

export const transactions = [
  { type: 'income', name: 'دفع رسوم — أحمد محمد', date: '14 سبتمبر 2026', amount: '+1,200 ج.م' },
  { type: 'expense', name: 'رواتب الموظفين', date: '12 سبتمبر 2026', amount: '-8,500 ج.م' },
  { type: 'income', name: 'دفع رسوم — فاطمة علي', date: '11 سبتمبر 2026', amount: '+950 ج.م' },
];

export const students = [
  { name: 'أحمد محمد', initials: 'أم', group: 'الصف السادس', status: 'نشط', attendance: '95%', gradient: 'from-brand-400 to-purple-400' },
  { name: 'فاطمة علي', initials: 'فع', group: 'الصف الخامس', status: 'نشط', attendance: '88%', gradient: 'from-emerald-400 to-teal-400' },
  { name: 'حسين خالد', initials: 'حس', group: 'الصف السابع', status: 'متأخر', attendance: '72%', gradient: 'from-amber-400 to-orange-400' },
];

export const footerLinks = [
  {
    title: 'روابط سريعة',
    items: [
      { label: 'الرئيسية', href: '#hero' },
      { label: 'المميزات', href: '#features' },
      { label: 'النظام', href: '#product' },
      { label: 'الأسعار', href: '#pricing' },
    ],
  },
  {
    title: 'الحلول',
    items: [
      { label: 'CenterCRM', href: '#product' },
      { label: 'حلول مخصصة', href: '#custom', bold: true },
    ],
  },
];
