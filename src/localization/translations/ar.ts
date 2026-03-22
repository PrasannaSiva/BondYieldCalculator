export default {
  common: {
    cancel: 'إلغاء',
    delete: 'حذف',
    save: 'حفظ',
    reuse: 'إعادة استخدام',
    clearAll: 'مسح الكل',
  },
  navigation: {
    calculator: 'الحاسبة',
    history: 'السجل',
    settings: 'الإعدادات',
  },
  calculator: {
    title: 'حاسبة السندات',
    subtitle: 'تحليل العائد والتدفقات النقدية',
    button: 'احسب العائد',
    inputs: {
      title: 'معاملات السند',
      faceValue: 'القيمة الاسمية',
      couponRate: 'معدل الكوبون',
      marketPrice: 'سعر السوق',
      years: 'سنوات',
      frequency: 'تكرار الكوبون',
    },
    frequency: {
      annual: 'سنوي',
      semiannual: 'نصف سنوي',
    },
    topBonds: {
      title: 'أفضل السندات',
      subtitle: 'اضغط للملء التلقائي',
    },
    validation: {
      required: 'مطلوب',
      number: 'يجب أن يكون رقماً',
      positive: 'يجب أن يكون أكبر من صفر',
      rate: 'يجب أن يكون بين 0-100',
    },
  },
  results: {
    title: 'النتائج',
    currentYield: 'العائد الحالي',
    ytm: 'العائد حتى الاستحقاق',
    totalInterest: 'إجمالي الفائدة',
    status: 'حالة السند',
    bondStatus: {
      premium: 'يتداول بعلاوة',
      discount: 'يتداول بخصم',
      par: 'يتداول بالقيمة الاسمية',
    },
  },
  cashFlow: {
    tableTitle: 'جدول التدفقات النقدية',
    chartTitle: 'نمو الفائدة التراكمية',
    yLabel: 'الفائدة التراكمية ($)',
    columns: {
      period: 'الفترة',
      date: 'التاريخ',
      coupon: 'الكوبون',
      cumulative: 'تراكمي',
      principal: 'الأصل',
    },
  },
  history: {
    title: 'السجل',
    emptyTitle: 'لا توجد حسابات بعد',
    emptyBody: 'قم بأول تحليل للسندات\nوسيظهر هنا',
    card: {
      ytm: 'العائد',
      currYield: 'العائد الحالي',
      totalInt: 'إجمالي الفائدة',
    },
    dialog: {
      title: 'مسح السجل',
      message: 'حذف جميع الحسابات المحفوظة؟',
    },
  },
  settings: {
    title: 'الإعدادات',
    theme: {
      title: 'المظهر',
      dark: 'داكن',
      light: 'فاتح',
      system: 'افتراضي النظام',
    },
    language: {
      title: 'اللغة',
      english: 'English',
      arabic: 'العربية',
    },
    about: {
      title: 'حول التطبيق',
      app: 'حاسبة عائد السندات',
      version: '1.0.0',
      algorithm: 'نيوتن-رافسون',
      precision: 'ε = 1e-10',
    },
  },
};
