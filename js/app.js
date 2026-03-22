// ════════════════════════════════════════════
//  HISAB — Core Application JS
// ════════════════════════════════════════════

'use strict';

// ── FLASH PREVENTION — add class instantly before any render ──
document.documentElement.classList.add('no-transition');

// ══════════════════════════════════════════
//  ✦ LOGO CONFIGURATION — CHANGE HERE ONCE
//  This updates the logo across every page automatically.
// ══════════════════════════════════════════
const LOGO = {
  // Set to image URL to use a real logo image, e.g. 'img/logo.png' or 'https://...'
  // Set to null to use the default text/icon mark instead.
  imageUrl: 'data:image/png;base64,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',

  // Fallback mark shown when no imageUrl is set (text inside the coloured square)
  markText: 'হ',

  // App name displayed next to the mark
  appName: 'Hisab',

  // Bengali subtitle shown below the name
  appSub: 'হিসাব',

  // Alt text for the image (used when imageUrl is set)
  altText: 'Hisab — হিসাব',

  // Mark background (used when imageUrl is null)
  markBg: 'linear-gradient(135deg,#1E88E5,#00897B)',
};

// ── LOGO RENDERER ─────────────────────────
// Injects the logo into every element that has [data-logo] attribute.
// data-logo="nav"      → small horizontal nav mark + text
// data-logo="auth"     → large centred auth panel icon
// data-logo="sidebar"  → sidebar brand block
// data-logo="footer"   → footer brand name text
function renderLogos() {
  document.querySelectorAll('[data-logo]').forEach(el => {
    const type = el.getAttribute('data-logo');

    if (LOGO.imageUrl) {
      // ── IMAGE LOGO ──────────────────────────
      if (type === 'nav') {
        el.innerHTML = `
          <img src="${LOGO.imageUrl}" alt="${LOGO.altText}"
            style="height:36px;width:auto;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.1);display:block;" />`;
      } else if (type === 'auth') {
        el.innerHTML = `
          <img src="${LOGO.imageUrl}" alt="${LOGO.altText}"
            style="height:72px;width:auto;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.1);display:block;margin:0 auto 16px;" />`;
      } else if (type === 'sidebar') {
        el.innerHTML = `
          <img src="${LOGO.imageUrl}" alt="${LOGO.altText}"
            style="height:40px;width:auto;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.1);display:block;margin-bottom:4px;" />
          <div style="font-size:11px;color:rgba(181,212,244,0.6);">${LOGO.appSub}</div>`;
      } else if (type === 'footer') {
        el.innerHTML = `
          <img src="${LOGO.imageUrl}" alt="${LOGO.altText}"
            style="height:44px;width:auto;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.1);display:block;margin-bottom:8px;" />`;
      }
    } else {
      // ── TEXT / ICON MARK (default) ──────────
      if (type === 'nav') {
        el.innerHTML = `
          <div style="width:40px;height:40px;background:${LOGO.markBg};border-radius:10px;
            display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;
            color:white;font-family:'Playfair Display',serif;
            box-shadow:0 4px 12px rgba(30,136,229,0.4);">${LOGO.markText}</div>
          <div>
            <strong style="font-size:19px;font-weight:700;color:#fff;display:block;line-height:1.2;">${LOGO.appName}</strong>
            <span style="font-size:11px;color:rgba(255,255,255,0.45);">${LOGO.appSub}</span>
          </div>`;
      } else if (type === 'auth') {
        el.innerHTML = `
          <div style="width:72px;height:72px;background:rgba(255,255,255,0.15);border-radius:20px;
            display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:700;
            color:white;font-family:'Playfair Display',serif;margin:0 auto 16px;
            border:1px solid rgba(255,255,255,0.2);">${LOGO.markText}</div>`;
      } else if (type === 'sidebar') {
        el.innerHTML = `
          <div style="font-size:22px;font-weight:700;color:white;">${LOGO.appName}</div>
          <div style="font-size:11px;color:rgba(181,212,244,0.6);margin-top:2px;">${LOGO.appSub} — For Future Savings</div>`;
      } else if (type === 'footer') {
        el.innerHTML = `${LOGO.appName} — ${LOGO.appSub}`;
      }
    }
  });
}

// ── LANGUAGE STRINGS ──────────────────────
const LANG = {
  en: {
    // Nav
    nav_home: 'Home', nav_features: 'Features', nav_pricing: 'Pricing', nav_contact: 'Contact',
    nav_login: 'Log In', nav_register: 'Get Started',
    // Hero
    hero_badge: 'Double-Entry Accounting System',
    hero_title: 'Hisab', hero_title_bn: 'হিসাব — আগামীর সঞ্চয়ের জন্য',
    hero_desc: 'Track every taka. Save smarter. Build your future. A professional accounting system designed for Bangladesh.',
    hero_cta1: 'Start Free', hero_cta2: 'See How It Works',
    // Features
    feat_tag: 'Features', feat_title: 'Everything you need to manage money',
    f1_title: 'Double-Entry Accounting', f1_desc: 'Every transaction requires both a debit and credit entry — proper accounting, not just notes.',
    f2_title: 'Smart Budget AI', f2_desc: 'Get AI-powered monthly budget suggestions based on your spending history.',
    f3_title: 'Multi-Wallet', f3_desc: 'Manage cash, bank, debit card, credit card, loans and more in one place.',
    f4_title: 'Bengali & English', f4_desc: 'Full support for both languages. Switch anytime. Bengali is the default.',
    f5_title: 'Detailed Reports', f5_desc: 'Daily, weekly, monthly, yearly reports with graphs and head-wise filtering.',
    f6_title: 'Offline & Sync', f6_desc: 'Works offline and syncs automatically when back online across all devices.',
    // Dashboard
    dash_welcome: 'Welcome back',
    dash_balance: 'Total Balance', dash_income: 'Monthly Income', dash_expense: 'Monthly Expense', dash_savings: 'Net Savings',
    dash_wallets: 'Wallets', dash_recent: 'Recent Transactions',
    dash_add_income: 'Add Income', dash_add_expense: 'Add Expense', dash_transfer: 'Fund Transfer',
    dash_budget_tip: 'Budget Suggestion',
    // Wallet
    w_cash: 'Cash', w_bank: 'Bank Account', w_debit: 'Debit Card', w_credit: 'Credit Card',
    w_loan_to: 'Loan to Others', w_loan_from: 'Loan from Others', w_others: 'Others',
    // Income
    i_salary: 'Salary', i_business: 'Business', i_loan: 'Loan from Others',
    i_gift: 'Gift', i_savings: 'Savings', i_others: 'Others',
    // Expense
    e_rent: 'House Rent', e_conv: 'Conveyance', e_food: 'Fooding', e_travel: 'Travelling',
    e_medicine: 'Medicine', e_entertainment: 'Entertainment', e_others: 'Others',
    // Transactions
    txn_title: 'Add Transaction', txn_income: 'Income', txn_expense: 'Expense', txn_transfer: 'Transfer',
    txn_amount: 'Amount (৳)', txn_debit: 'Debit Account (From)', txn_credit: 'Credit Account (To)',
    txn_category: 'Category', txn_date: 'Date', txn_note: 'Description / Note',
    txn_save: 'Save Transaction', txn_cancel: 'Cancel',
    dual_warn: '⚠️ Double-entry is mandatory. Both Debit and Credit accounts must be selected. Single entry is not allowed.',
    // Reports
    rpt_daily: 'Daily', rpt_weekly: 'Weekly', rpt_monthly: 'Monthly', rpt_yearly: 'Yearly',
    rpt_income: 'Total Income', rpt_expense: 'Total Expense', rpt_savings: 'Net Savings', rpt_budget: 'Budget Left',
    rpt_bycat: 'Expense by Category', rpt_compare: 'Last 3 Months Comparison',
    rpt_ai: 'AI Insight',
    // Settings
    set_language: 'Language', set_theme: 'Theme', set_notifications: 'Notifications',
    set_backup: 'Google Drive Backup', set_categories: 'Category Management',
    set_password: 'Change Password', set_contact: 'Contact Developer',
    set_credit: 'Credit Points',
    // Auth
    login_title: 'Welcome back', login_sub: 'Log in to your Hisab account',
    login_user: 'Username or Email', login_pass: 'Password',
    login_forgot: 'Forgot password?', login_btn: 'Log In', login_keep: 'Keep me logged in',
    login_no_acc: "Don't have an account?", login_register: 'Register',
    reg_title: 'Create your account', reg_sub: 'Start your savings journey today',
    reg_name: 'Full Name', reg_username: 'Username', reg_email: 'Email Address',
    reg_phone: 'Phone Number', reg_pass: 'Password', reg_confirm: 'Confirm Password',
    reg_btn: 'Create Account', reg_have_acc: 'Already have an account?', reg_login: 'Log In',
    reg_username_suggest: '💡 Suggested username: ',
    // Misc
    currency: '৳', save: 'Save', cancel: 'Cancel', edit: 'Edit', delete: 'Delete',
    confirm: 'Confirm', close: 'Close', loading: 'Loading...',
    savings_congrats: '🎉 Congratulations!',
    savings_msg: 'You saved this month!',
    savings_yearly: 'Yearly Summary',
  },
  bn: {
    nav_home: 'হোম', nav_features: 'বৈশিষ্ট্য', nav_pricing: 'মূল্য', nav_contact: 'যোগাযোগ',
    nav_login: 'লগ ইন', nav_register: 'শুরু করুন',
    hero_badge: 'দ্বৈত প্রবিষ্টি হিসাব ব্যবস্থা',
    hero_title: 'হিসাব', hero_title_bn: 'Hisab — For Future Savings',
    hero_desc: 'প্রতিটি টাকার হিসাব রাখুন। স্মার্টভাবে সঞ্চয় করুন। আগামীর জন্য গড়ুন। বাংলাদেশের জন্য তৈরি পেশাদার হিসাব ব্যবস্থা।',
    hero_cta1: 'বিনামূল্যে শুরু করুন', hero_cta2: 'কীভাবে কাজ করে',
    feat_tag: 'বৈশিষ্ট্য', feat_title: 'অর্থ ব্যবস্থাপনায় যা দরকার সব কিছু',
    f1_title: 'দ্বৈত প্রবিষ্টি হিসাব', f1_desc: 'প্রতিটি লেনদেনে ডেবিট ও ক্রেডিট উভয় প্রবিষ্টি আবশ্যক — শুধু নোট নয়, সঠিক হিসাব।',
    f2_title: 'স্মার্ট বাজেট AI', f2_desc: 'আপনার ব্যয়ের ইতিহাস বিশ্লেষণ করে AI মাসিক বাজেটের পরামর্শ দেবে।',
    f3_title: 'মাল্টি-ওয়ালেট', f3_desc: 'নগদ, ব্যাংক, ডেবিট কার্ড, ক্রেডিট কার্ড, ঋণ সব এক জায়গায়।',
    f4_title: 'বাংলা ও ইংরেজি', f4_desc: 'উভয় ভাষায় সম্পূর্ণ সহায়তা। যেকোনো সময় পরিবর্তন করুন। বাংলা ডিফল্ট।',
    f5_title: 'বিস্তারিত রিপোর্ট', f5_desc: 'দৈনিক, সাপ্তাহিক, মাসিক, বার্ষিক রিপোর্ট গ্রাফসহ এবং হেড-ওয়াইজ ফিল্টারিং।',
    f6_title: 'অফলাইন ও সিঙ্ক', f6_desc: 'অফলাইনে কাজ করে এবং অনলাইনে সব ডিভাইসে স্বয়ংক্রিয়ভাবে সিঙ্ক হয়।',
    dash_welcome: 'স্বাগতম',
    dash_balance: 'মোট ব্যালেন্স', dash_income: 'মাসিক আয়', dash_expense: 'মাসিক খরচ', dash_savings: 'নিট সঞ্চয়',
    dash_wallets: 'ওয়ালেট', dash_recent: 'সাম্প্রতিক লেনদেন',
    dash_add_income: 'আয় যোগ করুন', dash_add_expense: 'খরচ যোগ করুন', dash_transfer: 'ফান্ড ট্রান্সফার',
    dash_budget_tip: 'বাজেট পরামর্শ',
    w_cash: 'নগদ', w_bank: 'ব্যাংক অ্যাকাউন্ট', w_debit: 'ডেবিট কার্ড', w_credit: 'ক্রেডিট কার্ড',
    w_loan_to: 'অন্যকে ঋণ', w_loan_from: 'অন্যের কাছ থেকে ঋণ', w_others: 'অন্যান্য',
    i_salary: 'বেতন', i_business: 'ব্যবসা', i_loan: 'অন্যের কাছ থেকে ঋণ',
    i_gift: 'উপহার', i_savings: 'সঞ্চয়', i_others: 'অন্যান্য',
    e_rent: 'বাড়িভাড়া', e_conv: 'যাতায়াত', e_food: 'খাবার', e_travel: 'ভ্রমণ',
    e_medicine: 'ওষুধ', e_entertainment: 'বিনোদন', e_others: 'অন্যান্য',
    txn_title: 'লেনদেন যোগ করুন', txn_income: 'আয়', txn_expense: 'খরচ', txn_transfer: 'ট্রান্সফার',
    txn_amount: 'পরিমাণ (৳)', txn_debit: 'ডেবিট অ্যাকাউন্ট (যেখান থেকে)', txn_credit: 'ক্রেডিট অ্যাকাউন্ট (যেখানে)',
    txn_category: 'ক্যাটাগরি', txn_date: 'তারিখ', txn_note: 'বিবরণ / নোট',
    txn_save: 'সংরক্ষণ করুন', txn_cancel: 'বাতিল',
    dual_warn: '⚠️ দ্বৈত প্রবিষ্টি আবশ্যক। ডেবিট ও ক্রেডিট উভয় অ্যাকাউন্ট বেছে নিন। একক প্রবিষ্টি গ্রহণযোগ্য নয়।',
    rpt_daily: 'দৈনিক', rpt_weekly: 'সাপ্তাহিক', rpt_monthly: 'মাসিক', rpt_yearly: 'বার্ষিক',
    rpt_income: 'মোট আয়', rpt_expense: 'মোট খরচ', rpt_savings: 'নিট সঞ্চয়', rpt_budget: 'বাজেট অবশিষ্ট',
    rpt_bycat: 'খরচ হেড অনুযায়ী', rpt_compare: 'শেষ ৩ মাসের তুলনা',
    rpt_ai: 'AI পরামর্শ',
    set_language: 'ভাষা', set_theme: 'থিম', set_notifications: 'নোটিফিকেশন',
    set_backup: 'Google Drive ব্যাকআপ', set_categories: 'ক্যাটাগরি ব্যবস্থাপনা',
    set_password: 'পাসওয়ার্ড পরিবর্তন', set_contact: 'ডেভেলপারের সাথে যোগাযোগ',
    set_credit: 'ক্রেডিট পয়েন্ট',
    login_title: 'আবার স্বাগতম', login_sub: 'আপনার হিসাব অ্যাকাউন্টে লগ ইন করুন',
    login_user: 'ইউজারনেম বা ইমেইল', login_pass: 'পাসওয়ার্ড',
    login_forgot: 'পাসওয়ার্ড ভুলে গেছেন?', login_btn: 'লগ ইন', login_keep: 'লগইন রাখুন',
    login_no_acc: 'অ্যাকাউন্ট নেই?', login_register: 'নিবন্ধন করুন',
    reg_title: 'অ্যাকাউন্ট তৈরি করুন', reg_sub: 'আজই আপনার সঞ্চয়ের যাত্রা শুরু করুন',
    reg_name: 'পুরো নাম', reg_username: 'ইউজারনেম', reg_email: 'ইমেইল ঠিকানা',
    reg_phone: 'ফোন নম্বর', reg_pass: 'পাসওয়ার্ড', reg_confirm: 'পাসওয়ার্ড নিশ্চিত করুন',
    reg_btn: 'অ্যাকাউন্ট তৈরি করুন', reg_have_acc: 'ইতিমধ্যে অ্যাকাউন্ট আছে?', reg_login: 'লগ ইন',
    reg_username_suggest: '💡 প্রস্তাবিত ইউজারনেম: ',
    currency: '৳', save: 'সংরক্ষণ', cancel: 'বাতিল', edit: 'সম্পাদনা', delete: 'মুছুন',
    confirm: 'নিশ্চিত করুন', close: 'বন্ধ করুন', loading: 'লোড হচ্ছে...',
    savings_congrats: '🎉 অভিনন্দন!',
    savings_msg: 'এই মাসে আপনি সঞ্চয় করেছেন!',
    savings_yearly: 'বার্ষিক সারসংক্ষেপ',
  }
};

// ── STATE ─────────────────────────────────
const State = {
  lang: localStorage.getItem('hisab_lang') || 'en',
  theme: localStorage.getItem('hisab_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  user: JSON.parse(localStorage.getItem('hisab_user') || 'null'),
  credits: parseInt(localStorage.getItem('hisab_credits') || '150'),
  transactions: JSON.parse(localStorage.getItem('hisab_txns') || '[]'),
  wallets: JSON.parse(localStorage.getItem('hisab_wallets') || JSON.stringify([
    { id: 'cash',  name_en: 'Cash',         name_bn: 'নগদ',                  icon: '💵', balance: 0 },
    { id: 'bank',  name_en: 'Bank Account', name_bn: 'ব্যাংক অ্যাকাউন্ট',  icon: '🏦', balance: 0 },
    { id: 'debit', name_en: 'Debit Card',   name_bn: 'ডেবিট কার্ড',         icon: '💳', balance: 0 },
  ])),
  income_cats: JSON.parse(localStorage.getItem('hisab_income_cats') || JSON.stringify([
    { id: 'salary', en: 'Salary', bn: 'বেতন' },
    { id: 'business', en: 'Business', bn: 'ব্যবসা' },
    { id: 'loan_from', en: 'Loan from Others', bn: 'অন্যের কাছ থেকে ঋণ' },
    { id: 'gift', en: 'Gift', bn: 'উপহার' },
    { id: 'savings', en: 'Savings', bn: 'সঞ্চয়' },
    { id: 'others', en: 'Others', bn: 'অন্যান্য' },
  ])),
  expense_cats: JSON.parse(localStorage.getItem('hisab_expense_cats') || JSON.stringify([
    { id: 'rent', en: 'House Rent', bn: 'বাড়িভাড়া' },
    { id: 'conv', en: 'Conveyance', bn: 'যাতায়াত' },
    { id: 'food', en: 'Fooding', bn: 'খাবার' },
    { id: 'travel', en: 'Travelling', bn: 'ভ্রমণ' },
    { id: 'medicine', en: 'Medicine', bn: 'ওষুধ' },
    { id: 'entertainment', en: 'Entertainment', bn: 'বিনোদন' },
    { id: 'others', en: 'Others', bn: 'অন্যান্য' },
  ])),
  budgets: JSON.parse(localStorage.getItem('hisab_budgets') || '{}'),
  notifications: JSON.parse(localStorage.getItem('hisab_notifications') || '[]'),
};

// ── HELPERS ───────────────────────────────
const t = (key) => LANG[State.lang][key] || LANG['en'][key] || key;
const fmt = (n) => '৳ ' + Number(n).toLocaleString('en-BD');
const today = () => new Date().toISOString().split('T')[0];
const saveState = (key, val) => localStorage.setItem('hisab_' + key, JSON.stringify(val));

// ── COUNTRY DATA (shared across all pages) ─
const COUNTRIES = [
  { code:'+880', name:'Bangladesh',    flag:'🇧🇩', digits:10 },
  { code:'+91',  name:'India',         flag:'🇮🇳', digits:10 },
  { code:'+92',  name:'Pakistan',      flag:'🇵🇰', digits:10 },
  { code:'+94',  name:'Sri Lanka',     flag:'🇱🇰', digits:9  },
  { code:'+95',  name:'Myanmar',       flag:'🇲🇲', digits:9  },
  { code:'+977', name:'Nepal',         flag:'🇳🇵', digits:10 },
  { code:'+93',  name:'Afghanistan',   flag:'🇦🇫', digits:9  },
  { code:'+1',   name:'USA / Canada',  flag:'🇺🇸', digits:10 },
  { code:'+44',  name:'UK',            flag:'🇬🇧', digits:10 },
  { code:'+61',  name:'Australia',     flag:'🇦🇺', digits:9  },
  { code:'+64',  name:'New Zealand',   flag:'🇳🇿', digits:9  },
  { code:'+49',  name:'Germany',       flag:'🇩🇪', digits:11 },
  { code:'+33',  name:'France',        flag:'🇫🇷', digits:9  },
  { code:'+39',  name:'Italy',         flag:'🇮🇹', digits:10 },
  { code:'+34',  name:'Spain',         flag:'🇪🇸', digits:9  },
  { code:'+31',  name:'Netherlands',   flag:'🇳🇱', digits:9  },
  { code:'+46',  name:'Sweden',        flag:'🇸🇪', digits:9  },
  { code:'+47',  name:'Norway',        flag:'🇳🇴', digits:8  },
  { code:'+45',  name:'Denmark',       flag:'🇩🇰', digits:8  },
  { code:'+41',  name:'Switzerland',   flag:'🇨🇭', digits:9  },
  { code:'+81',  name:'Japan',         flag:'🇯🇵', digits:10 },
  { code:'+82',  name:'South Korea',   flag:'🇰🇷', digits:10 },
  { code:'+86',  name:'China',         flag:'🇨🇳', digits:11 },
  { code:'+65',  name:'Singapore',     flag:'🇸🇬', digits:8  },
  { code:'+60',  name:'Malaysia',      flag:'🇲🇾', digits:9  },
  { code:'+66',  name:'Thailand',      flag:'🇹🇭', digits:9  },
  { code:'+63',  name:'Philippines',   flag:'🇵🇭', digits:10 },
  { code:'+62',  name:'Indonesia',     flag:'🇮🇩', digits:11 },
  { code:'+84',  name:'Vietnam',       flag:'🇻🇳', digits:9  },
  { code:'+971', name:'UAE',           flag:'🇦🇪', digits:9  },
  { code:'+966', name:'Saudi Arabia',  flag:'🇸🇦', digits:9  },
  { code:'+974', name:'Qatar',         flag:'🇶🇦', digits:8  },
  { code:'+965', name:'Kuwait',        flag:'🇰🇼', digits:8  },
  { code:'+973', name:'Bahrain',       flag:'🇧🇭', digits:8  },
  { code:'+968', name:'Oman',          flag:'🇴🇲', digits:8  },
  { code:'+20',  name:'Egypt',         flag:'🇪🇬', digits:10 },
  { code:'+234', name:'Nigeria',       flag:'🇳🇬', digits:10 },
  { code:'+27',  name:'South Africa',  flag:'🇿🇦', digits:9  },
  { code:'+254', name:'Kenya',         flag:'🇰🇪', digits:9  },
  { code:'+55',  name:'Brazil',        flag:'🇧🇷', digits:11 },
  { code:'+52',  name:'Mexico',        flag:'🇲🇽', digits:10 },
  { code:'+54',  name:'Argentina',     flag:'🇦🇷', digits:10 },
  { code:'+7',   name:'Russia',        flag:'🇷🇺', digits:10 },
  { code:'+90',  name:'Turkey',        flag:'🇹🇷', digits:10 },
  { code:'+98',  name:'Iran',          flag:'🇮🇷', digits:10 },
];

// ── SHARED COUNTRY PICKER BUILDER ──────────
// Creates a fully working flag+code picker and phone input.
// containerId : id of the wrapper div to inject into
// opts.hiddenId   : id for hidden input storing full code  (default: containerId+'-code')
// opts.phoneId    : id for the number input               (default: containerId+'-phone')
// opts.hintId     : id for hint text div                  (default: containerId+'-hint')
// opts.errId      : id for error div                      (default: containerId+'-err')
// opts.defaultVal : pre-filled international number       (default: '')
function buildCountryPicker(containerId, opts) {
  opts = opts || {};
  const pid      = opts.hiddenId || (containerId + '-code');
  const phoneId  = opts.phoneId  || (containerId + '-phone');
  const hintId   = opts.hintId   || (containerId + '-hint');
  const errId    = opts.errId    || (containerId + '-err');
  const btnId    = containerId + '-btn';
  const ddId     = containerId + '-dd';
  const srchId   = containerId + '-search';
  const listId   = containerId + '-list';

  // Detect pre-filled country from stored number
  const stored   = opts.defaultVal || '';
  let   selected = COUNTRIES.find(c => stored.startsWith(c.code)) || COUNTRIES[0];
  let   numPart  = stored ? stored.slice(selected.code.length) : '';

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div style="display:flex;gap:8px;align-items:flex-start;position:relative;">
      <!-- Flag button -->
      <div style="position:relative;flex-shrink:0;">
        <button type="button" id="${btnId}"
          style="height:44px;min-width:100px;background:var(--input-bg);border:1.5px solid var(--border);border-radius:var(--radius-md);display:flex;align-items:center;gap:6px;padding:0 10px;cursor:pointer;white-space:nowrap;">
          <span id="${containerId}-flag" style="font-size:22px;line-height:1;">${selected.flag}</span>
          <span id="${containerId}-dialcode" style="font-size:13px;font-weight:700;color:var(--text-primary);">${selected.code}</span>
          <span style="font-size:10px;color:var(--text-muted);margin-left:2px;">▼</span>
        </button>
        <!-- Dropdown -->
        <div id="${ddId}" style="display:none;position:absolute;top:48px;left:0;width:290px;background:var(--bg-primary);border:1.5px solid var(--border);border-radius:var(--radius-md);box-shadow:0 8px 28px rgba(0,0,0,0.16);z-index:500;overflow:hidden;">
          <div style="padding:8px;">
            <input type="text" id="${srchId}" placeholder="🔍 Search country or code..."
              style="width:100%;padding:8px 10px;background:var(--input-bg);border:1px solid var(--border);border-radius:6px;font-size:13px;color:var(--text-primary);outline:none;"
              oninput="cpFilter('${containerId}',this.value)"
              onclick="event.stopPropagation()" />
          </div>
          <div id="${listId}" style="max-height:220px;overflow-y:auto;padding:4px 0;"></div>
        </div>
      </div>
      <!-- Number input -->
      <input type="tel" id="${phoneId}" value="${numPart}"
        placeholder="${'0'.repeat(selected.digits)}" maxlength="15"
        style="flex:1;"
        class="form-input"
        oninput="this.value=this.value.replace(/[^0-9]/g,''); cpValidate('${containerId}')" />
      <input type="hidden" id="${pid}" value="${selected.code}" data-digits="${selected.digits}" />
    </div>
    <div id="${hintId}" style="font-size:12px;color:var(--text-muted);margin-top:5px;">Enter ${selected.digits}-digit mobile number for ${selected.name}</div>
    <div id="${errId}" class="form-error">Invalid mobile number format for ${selected.name}.</div>`;

  // Store selected on the container element for access
  container._cpSelected = selected;

  // Toggle open/close
  document.getElementById(btnId).addEventListener('click', (e) => {
    e.stopPropagation();
    const dd = document.getElementById(ddId);
    if (dd.style.display !== 'none') { dd.style.display = 'none'; return; }
    cpBuildList(containerId, '');
    dd.style.display = 'block';
    setTimeout(() => document.getElementById(srchId).focus(), 40);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    const dd = document.getElementById(ddId);
    if (dd && !container.contains(e.target)) dd.style.display = 'none';
  });
}

// Build / filter dropdown list for a picker
function cpBuildList(containerId, filter) {
  const listId = containerId + '-list';
  const ddId   = containerId + '-dd';
  const list   = document.getElementById(listId);
  if (!list) return;
  const q = (filter || '').toLowerCase();
  const results = q
    ? COUNTRIES.filter(c => c.name.toLowerCase().includes(q) || c.code.includes(q))
    : COUNTRIES;
  list.innerHTML = results.map(c => `
    <div onclick="cpSelect('${containerId}','${c.code}')"
      style="display:flex;align-items:center;gap:10px;padding:9px 14px;cursor:pointer;transition:background 0.12s;"
      onmouseover="this.style.background='var(--bg-secondary)'"
      onmouseout="this.style.background=''">
      <span style="font-size:22px;line-height:1;width:28px;text-align:center;flex-shrink:0;">${c.flag}</span>
      <span style="flex:1;font-size:13px;color:var(--text-primary);">${c.name}</span>
      <span style="font-size:12px;font-weight:700;color:var(--text-muted);">${c.code}</span>
    </div>`).join('') || '<div style="padding:12px 14px;font-size:13px;color:var(--text-muted);">No results found</div>';
}

function cpFilter(containerId, val) {
  cpBuildList(containerId, val);
}

function cpSelect(containerId, code) {
  const c = COUNTRIES.find(x => x.code === code);
  if (!c) return;
  const container = document.getElementById(containerId);
  container._cpSelected = c;

  document.getElementById(containerId + '-flag').textContent    = c.flag;
  document.getElementById(containerId + '-dialcode').textContent = c.code;
  document.getElementById(containerId + '-code').value          = c.code;
  document.getElementById(containerId + '-code').dataset.digits = c.digits;

  const phoneEl = document.getElementById(containerId + '-phone');
  if (phoneEl) phoneEl.placeholder = '0'.repeat(c.digits);

  const hintEl = document.getElementById(containerId + '-hint');
  if (hintEl) hintEl.textContent = `Enter ${c.digits}-digit mobile number for ${c.name}`;

  const errEl = document.getElementById(containerId + '-err');
  if (errEl) { errEl.textContent = `Invalid mobile number format for ${c.name}.`; errEl.classList.remove('show'); }

  document.getElementById(containerId + '-dd').style.display = 'none';
  const srch = document.getElementById(containerId + '-search');
  if (srch) srch.value = '';
  cpValidate(containerId);
}

function cpValidate(containerId) {
  const container = document.getElementById(containerId);
  const c       = container._cpSelected || COUNTRIES[0];
  const phoneEl = document.getElementById(containerId + '-phone');
  const errEl   = document.getElementById(containerId + '-err');
  if (!phoneEl || !errEl) return true;
  const val = phoneEl.value.replace(/\D/g, '');
  if (val.length > 0 && val.length !== c.digits) {
    errEl.classList.add('show'); phoneEl.classList.add('error'); return false;
  }
  errEl.classList.remove('show'); phoneEl.classList.remove('error'); return true;
}

// Get full international number from a picker
function cpGetValue(containerId) {
  const code = document.getElementById(containerId + '-code')?.value || '+880';
  const num  = document.getElementById(containerId + '-phone')?.value.replace(/\D/g, '') || '';
  return num ? code + num : '';
}

// ── THEME ─────────────────────────────────
function applyTheme(theme) {
  State.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('hisab_theme', theme);
}

function toggleTheme() {
  applyTheme(State.theme === 'dark' ? 'light' : 'dark');
  document.querySelectorAll('.theme-toggle-icon').forEach(el => {
    el.textContent = State.theme === 'dark' ? '☀️' : '🌙';
  });
}

// ── LANGUAGE ──────────────────────────────
function setLanguage(lang) {
  State.lang = lang;
  localStorage.setItem('hisab_lang', lang);
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (LANG[lang][key]) el.textContent = LANG[lang][key];
  });
  document.querySelectorAll('.lang-btn-switch').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ── USERNAME GENERATOR ────────────────────
const bnToEn = {
  'অ':'a','আ':'a','ই':'i','ঈ':'i','উ':'u','ঊ':'u','ক':'k','খ':'kh','গ':'g','ঘ':'gh',
  'চ':'ch','ছ':'ch','জ':'j','ঝ':'jh','ট':'t','ড':'d','ণ':'n','ত':'t','থ':'th',
  'দ':'d','ধ':'dh','ন':'n','প':'p','ফ':'f','ব':'b','ভ':'bh','ম':'m','য':'y',
  'র':'r','ল':'l','শ':'sh','ষ':'sh','স':'s','হ':'h','ড়':'r','ঢ়':'r','য়':'y',
  'া':'a','ি':'i','ী':'i','ু':'u','ূ':'u','ে':'e','ৈ':'oi','ো':'o','ৌ':'ou',
  ' ':'_',
};

function generateUsername(name) {
  let result = '';
  for (const ch of name) {
    if (bnToEn[ch] !== undefined) result += bnToEn[ch];
    else if (/[a-zA-Z0-9]/.test(ch)) result += ch.toLowerCase();
    else if (ch === ' ') result += '_';
  }
  result = result.replace(/_{2,}/g, '_').replace(/^_|_$/g, '');
  return result || name.toLowerCase().replace(/\s+/g, '_');
}

// ── PHONE VALIDATION ──────────────────────
const COUNTRY_CODES = [
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩', digits: 10 },
  { code: '+91', country: 'India', flag: '🇮🇳', digits: 10 },
  { code: '+1', country: 'USA/Canada', flag: '🇺🇸', digits: 10 },
  { code: '+44', country: 'UK', flag: '🇬🇧', digits: 10 },
  { code: '+61', country: 'Australia', flag: '🇦🇺', digits: 9 },
  { code: '+971', country: 'UAE', flag: '🇦🇪', digits: 9 },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦', digits: 9 },
  { code: '+65', country: 'Singapore', flag: '🇸🇬', digits: 8 },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾', digits: 9 },
  { code: '+49', country: 'Germany', flag: '🇩🇪', digits: 11 },
];

// ── TOAST NOTIFICATIONS ───────────────────
function showToast(icon, title, msg, duration = 4000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-content"><h4>${title}</h4><p>${msg}</p></div>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

// ── MODAL HELPERS ─────────────────────────
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

// ── SAVINGS POPUP ─────────────────────────
function showSavingsPopup(amount) {
  const popup = document.getElementById('savings-popup');
  if (!popup) return;
  document.getElementById('savings-amount-display').textContent = fmt(amount);
  popup.classList.add('open');
  setTimeout(() => popup.classList.remove('open'), 6000);
}

// ── DOUBLE-ENTRY VALIDATOR ────────────────
function validateDoubleEntry(debit, credit, amount) {
  const errors = [];
  if (!amount || parseFloat(amount) <= 0) errors.push('Amount must be greater than 0');
  if (!debit) errors.push('Debit account is required');
  if (!credit) errors.push('Credit account is required');
  if (debit === credit) errors.push('Debit and Credit cannot be the same account');
  return errors;
}

// ── SHARED PASSWORD RULES ─────────────────
// Used on Register, Settings (Change Password), Forgot Password, Admin (edit user)
const PWD_RULES = [
  { id: 'chk-len',     test: p => p.length >= 8,                              label: 'Min 8 characters'           },
  { id: 'chk-upper',   test: p => /[A-Z]/.test(p),                            label: 'Uppercase letter (A-Z)'     },
  { id: 'chk-lower',   test: p => /[a-z]/.test(p),                            label: 'Lowercase letter (a-z)'     },
  { id: 'chk-num',     test: p => /[0-9]/.test(p),                            label: 'Number (0-9)'               },
  { id: 'chk-special', test: p => /[!@#$%^&*()\-_=+\[\]{};':",.<>/?`~\\|]/.test(p), label: 'Special character (!@#$%…)' },
];

const PWD_STRENGTH_LABELS = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
const PWD_STRENGTH_COLORS = ['', '#E24B4A', '#BA7517', '#378ADD', '#1D9E75', '#0F6E56'];

// Renders the strength bar + checklist for a given password input.
// fillId     — id of the fill div inside the strength bar
// labelId    — id of the strength text label
// checkPrefix— prefix to find chk-len, chk-upper etc. (allows scoping per page)
function renderPasswordStrength(pass, fillId, labelId, checkPrefix) {
  const fill  = document.getElementById(fillId);
  const label = document.getElementById(labelId);
  const score = PWD_RULES.filter(r => r.test(pass)).length;

  if (fill) {
    fill.style.width      = (score * 20) + '%';
    fill.style.background = PWD_STRENGTH_COLORS[score] || '#E24B4A';
    fill.style.transition = 'width 0.35s, background 0.35s';
  }
  if (label) {
    label.textContent = pass.length ? (PWD_STRENGTH_LABELS[score] || '') : '';
    label.style.color = PWD_STRENGTH_COLORS[score] || '#E24B4A';
  }

  // Update individual check items if they exist on the page
  PWD_RULES.forEach(r => {
    const el = document.getElementById((checkPrefix || '') + r.id.replace('chk-', 'chk-'));
    if (!el) return;
    const ok = r.test(pass);
    el.classList.toggle('ok', ok);
    el.style.color = ok ? 'var(--teal-400)' : 'var(--text-muted)';
    el.textContent = (ok ? '✓ ' : '✗ ') + r.label;
  });
}

// Validates a password against all rules. Returns array of error messages (empty = valid).
function validatePasswordRules(pass) {
  const errors = [];
  if (!PWD_RULES[0].test(pass)) errors.push('Password must be at least 8 characters.');
  if (!PWD_RULES[1].test(pass)) errors.push('Password must contain at least one uppercase letter (A-Z).');
  if (!PWD_RULES[2].test(pass)) errors.push('Password must contain at least one lowercase letter (a-z).');
  if (!PWD_RULES[3].test(pass)) errors.push('Password must contain at least one number (0-9).');
  if (!PWD_RULES[4].test(pass)) errors.push('Password must contain at least one special character (e.g. @, #, $, !).');
  return errors;
}

// Builds the strength bar + checklist HTML string (injected after password inputs)
function passwordStrengthHTML(fillId, labelId) {
  return `
  <div style="margin-top:8px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
      <div style="flex:1;height:6px;border-radius:3px;background:var(--border);overflow:hidden;">
        <div id="${fillId}" style="height:100%;width:0;border-radius:3px;"></div>
      </div>
      <div style="font-size:12px;font-weight:700;width:80px;text-align:right;" id="${labelId}"></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 16px;margin-top:6px;">
      <div id="chk-len"     style="font-size:12px;color:var(--text-muted);">✗ Min 8 characters</div>
      <div id="chk-upper"   style="font-size:12px;color:var(--text-muted);">✗ Uppercase letter (A-Z)</div>
      <div id="chk-lower"   style="font-size:12px;color:var(--text-muted);">✗ Lowercase letter (a-z)</div>
      <div id="chk-num"     style="font-size:12px;color:var(--text-muted);">✗ Number (0-9)</div>
      <div id="chk-special" style="font-size:12px;color:var(--text-muted);grid-column:1/-1;">✗ Special character (!@#$%^&amp;*)</div>
    </div>
  </div>`;
}

// ── WALLET ASSET GUARD ────────────────────
// Wallets are assets — their balance can NEVER go below zero.
// Returns { ok: true } on success, or { ok: false, error, walletName, available, requested }
function checkWalletAssetGuard(walletId, amount) {
  const w = State.wallets.find(w => w.id === walletId);
  if (!w) return { ok: true }; // not a wallet (e.g. income/expense category) — skip
  const current = w.balance || 0;
  const amountNum = parseFloat(amount);
  if (current - amountNum < 0) {
    const lang = State.lang || 'en';
    const walletName = lang === 'bn' ? (w.name_bn || w.name_en) : w.name_en;
    return {
      ok: false,
      walletName,
      available: current,
      requested: amountNum,
      shortfall: amountNum - current,
    };
  }
  return { ok: true };
}

// ── TRANSACTION SAVE ──────────────────────
// Returns { ok: true } on success, or { ok: false, ...guardResult } if asset guard blocks it.
function saveTransaction(txn) {
  const amount = parseFloat(txn.amount);

  // ── Asset guard: expense reduces the source wallet ──
  if (txn.type === 'expense') {
    const guard = checkWalletAssetGuard(txn.debit, amount);
    if (!guard.ok) return guard;
  }

  // ── Asset guard: transfer reduces the source wallet ──
  if (txn.type === 'transfer') {
    const guard = checkWalletAssetGuard(txn.debit, amount);
    if (!guard.ok) return guard;
  }

  txn.id = Date.now();
  txn.date = txn.date || today();
  State.transactions.unshift(txn);
  saveState('txns', State.transactions);
  // Log activity
  if (State.user) {
    const typeLabel = txn.type === 'income' ? '💰 Income' : txn.type === 'expense' ? '💸 Expense' : '🔄 Transfer';
    logActivity(State.user.username, txn.type, `${typeLabel}: ${fmt(txn.amount)} — ${txn.note || txn.category || ''}`);
  }

  // Update wallet balances (safe — guard already passed)
  if (txn.type === 'income') {
    const w = State.wallets.find(w => w.id === txn.debit);
    if (w) w.balance = Math.max(0, (w.balance || 0) + amount);
  } else if (txn.type === 'expense') {
    const w = State.wallets.find(w => w.id === txn.debit);
    if (w) w.balance = Math.max(0, (w.balance || 0) - amount);
  } else if (txn.type === 'transfer') {
    const from = State.wallets.find(w => w.id === txn.debit);
    const to   = State.wallets.find(w => w.id === txn.credit);
    if (from) from.balance = Math.max(0, (from.balance || 0) - amount);
    if (to)   to.balance   = (to.balance || 0) + amount;
  }
  saveState('wallets', State.wallets);
  return { ok: true };
}

// ── REPORT CALCULATIONS ───────────────────
function getMonthTotals(year, month) {
  const txns = State.transactions.filter(t => {
    const d = new Date(t.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });
  const income = txns.filter(t => t.type === 'income').reduce((s, t) => s + parseFloat(t.amount), 0);
  const expense = txns.filter(t => t.type === 'expense').reduce((s, t) => s + parseFloat(t.amount), 0);
  return { income, expense, savings: income - expense };
}

function getExpenseByCategory(year, month) {
  const txns = State.transactions.filter(t => {
    if (t.type !== 'expense') return false;
    const d = new Date(t.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });
  const cats = {};
  txns.forEach(t => {
    cats[t.category] = (cats[t.category] || 0) + parseFloat(t.amount);
  });
  return cats;
}

// ── AI BUDGET SUGGESTION ──────────────────
function generateBudgetSuggestion() {
  const now = new Date();
  const last3 = [];
  for (let i = 1; i <= 3; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    last3.push(getMonthTotals(d.getFullYear(), d.getMonth()));
  }
  const avgIncome = last3.reduce((s, m) => s + m.income, 0) / 3 || 0;
  const avgExpense = last3.reduce((s, m) => s + m.expense, 0) / 3 || 0;
  return {
    income: Math.round(avgIncome * 1.05),
    expense: Math.round(avgExpense * 0.95),
    savings: Math.round(avgIncome * 1.05 - avgExpense * 0.95),
  };
}

// ── CREDIT SYSTEM ─────────────────────────
// Returns true if the current user has unlimited credits (admin or editor)
function isPrivilegedUser() {
  return State.user && (State.user.role === 'admin' || State.user.role === 'editor');
}

function useCredits(amount, reason) {
  // Admin and editor have unlimited credits — never deducted
  if (isPrivilegedUser()) {
    showToast('∞', 'Unlimited Credits', `Action free for ${State.user.role}: ${reason}`);
    return true;
  }
  if (State.credits < amount) {
    showToast('❌', 'Insufficient Credits', `You need ${amount} credits for this action.`);
    return false;
  }
  State.credits -= amount;
  saveState('credits', State.credits);
  showToast('💳', 'Credits Used', `-${amount} credits for: ${reason}`);
  updateCreditDisplay();
  return true;
}

function addCredits(amount, reason) {
  // Admin/editor credits stay at ∞ — no need to increment
  if (isPrivilegedUser()) return;
  State.credits += amount;
  saveState('credits', State.credits);
  showToast('🎉', 'Credits Earned!', `+${amount} credits: ${reason}`);
  updateCreditDisplay();
}

function updateCreditDisplay() {
  const isPriv = isPrivilegedUser();
  document.querySelectorAll('.credit-display').forEach(el => {
    el.textContent = isPriv ? '∞' : State.credits;
    if (isPriv) {
      el.style.background = 'linear-gradient(135deg,#1E88E5,#00E5CC)';
      el.style.webkitBackgroundClip = 'text';
      el.style.webkitTextFillColor = 'transparent';
      el.style.backgroundClip = 'text';
      el.style.fontWeight = '800';
    }
  });
}

// ── AUTH ──────────────────────────────────
// ── ACTIVITY LOGGER ───────────────────────
function logActivity(username, type, detail) {
  const key = 'hisab_activity_' + username;
  const log = JSON.parse(localStorage.getItem(key) || '[]');
  log.unshift({
    ts: Date.now(),
    date: new Date().toISOString(),
    type,   // 'login' | 'logout' | 'register' | 'income' | 'expense' | 'transfer' | 'wallet' | 'settings' | 'budget' | 'credits'
    detail  // human-readable description
  });
  // Keep last 200 events per user
  if (log.length > 200) log.splice(200);
  localStorage.setItem(key, JSON.stringify(log));
  // Also maintain a global activity index for admin
  const idx = JSON.parse(localStorage.getItem('hisab_activity_index') || '[]');
  if (!idx.includes(username)) { idx.push(username); localStorage.setItem('hisab_activity_index', JSON.stringify(idx)); }
}

function loginUser(username, password) {
  const users = JSON.parse(localStorage.getItem('hisab_users') || '[]');
  const user = users.find(u => (u.username === username || u.email === username));
  if (!user) return { error: 'User not found' };
  if (user.deleted === true) return { error: 'This account has been deleted. Contact admin.' };
  if (user.banned  === true) return { error: 'Your account has been banned. Contact admin.' };
  if (user.password !== btoa(password)) return { error: 'Wrong password' };
  State.user = user;
  saveState('user', user);
  localStorage.setItem('hisab_last_login', Date.now());
  // Update lastSeen on user record
  const allUsers = JSON.parse(localStorage.getItem('hisab_users') || '[]');
  const uIdx = allUsers.findIndex(u => u.username === user.username);
  if (uIdx >= 0) { allUsers[uIdx].lastSeen = new Date().toISOString(); localStorage.setItem('hisab_users', JSON.stringify(allUsers)); }
  logActivity(user.username, 'login', 'Logged in');

  // ── Background: Firestore এ lastSeen update করো ──
  (async () => {
    try {
      const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
      const { getFirestore, doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const firebaseConfig = {
        apiKey: "AIzaSyDerOMIIPh660Wej7OYy8i7oUXbKC44wW4",
        authDomain: "hisab-4-u.firebaseapp.com",
        projectId: "hisab-4-u",
        storageBucket: "hisab-4-u.firebasestorage.app",
        messagingSenderId: "957694095044",
        appId: "1:957694095044:web:1649995ac9734d4d062391"
      };
      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
      const db = getFirestore(app);
      await updateDoc(doc(db, 'users', String(user.username)), {
        lastSeen: new Date().toISOString()
      });
    } catch(e) { /* silent */ }
  })();

  return { success: true, user };
}

// ── FIRESTORE USER RESTORE ─────────────────
// localStorage হারিয়ে গেলে Firestore থেকে user restore করো
async function restoreUserFromFirestore(username, password) {
  try {
    const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, collection, getDocs, query, where } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const firebaseConfig = {
      apiKey: "AIzaSyDerOMIIPh660Wej7OYy8i7oUXbKC44wW4",
      authDomain: "hisab-4-u.firebaseapp.com",
      projectId: "hisab-4-u",
      storageBucket: "hisab-4-u.firebasestorage.app",
      messagingSenderId: "957694095044",
      appId: "1:957694095044:web:1649995ac9734d4d062391"
    };
    const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // username বা email দিয়ে খোঁজো
    const usersRef = collection(db, 'users');
    let foundUser = null;

    const q1 = query(usersRef, where('username', '==', username));
    const snap1 = await getDocs(q1);
    if (!snap1.empty) foundUser = snap1.docs[0].data();

    if (!foundUser) {
      const q2 = query(usersRef, where('email', '==', username));
      const snap2 = await getDocs(q2);
      if (!snap2.empty) foundUser = snap2.docs[0].data();
    }

    if (!foundUser) return { error: 'User not found' };

    // Ban / delete check
    if (foundUser.deleted === true) return { error: 'This account has been deleted. Contact admin.' };
    if (foundUser.banned  === true) return { error: 'Your account has been banned. Contact admin.' };
    // Password verify করো
    if (foundUser.password !== btoa(password)) return { error: 'Wrong password' };

    // localStorage এ restore করো
    const existingUsers = JSON.parse(localStorage.getItem('hisab_users') || '[]');
    const alreadyExists = existingUsers.findIndex(u => u.username === foundUser.username);
    if (alreadyExists >= 0) {
      existingUsers[alreadyExists] = foundUser; // update
    } else {
      existingUsers.push(foundUser); // নতুন করে add
    }
    localStorage.setItem('hisab_users', JSON.stringify(existingUsers));

    // Login করো
    State.user = foundUser;
    saveState('user', foundUser);
    localStorage.setItem('hisab_last_login', Date.now());
    logActivity(foundUser.username, 'login', 'Logged in (restored from cloud)');
    return { success: true, user: foundUser, restored: true };
  } catch(e) {
    return { error: 'Network error. Please try again.' };
  }
}

function registerUser(data) {
  const users = JSON.parse(localStorage.getItem('hisab_users') || '[]');
  if (users.find(u => u.username === data.username)) return { error: 'Username already taken' };
  if (users.find(u => u.email === data.email)) return { error: 'Email already registered' };
  const user = {
    id: Date.now(),
    name: data.name,
    username: data.username,
    email: data.email,
    phone: data.phone,
    password: btoa(data.password),
    created: today(),
    role: 'user',
    credits: 100,
    active: true,
  };
  users.push(user);
  localStorage.setItem('hisab_users', JSON.stringify(users));
  State.user = user;
  saveState('user', user);
  State.credits = 100;
  saveState('credits', 100);
  logActivity(user.username, 'register', 'Account created — 100 credits granted');

  // ── Firestore এ save করো ──
  (async () => {
    try {
      const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
      const { getFirestore, doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const firebaseConfig = {
        apiKey: "AIzaSyDerOMIIPh660Wej7OYy8i7oUXbKC44wW4",
        authDomain: "hisab-4-u.firebaseapp.com",
        projectId: "hisab-4-u",
        storageBucket: "hisab-4-u.firebasestorage.app",
        messagingSenderId: "957694095044",
        appId: "1:957694095044:web:1649995ac9734d4d062391"
      };
      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const firestoreUser = { ...user };
      await setDoc(doc(db, 'users', String(user.username)), firestoreUser);
    } catch(e) { console.warn('Firestore save failed:', e); }
  })();

  return { success: true, user };
}

function logoutUser() {
  if (State.user) logActivity(State.user.username, 'logout', 'Logged out');
  State.user = null;
  localStorage.removeItem('hisab_user');
  window.location.href = 'index.html';
}

function isLoggedIn() {
  return State.user !== null;
}

function requireLogin() {
  if (!isLoggedIn()) {
    window.location.href = 'login.html';
    return false;
  }
  // Check session expiry — 30 days if "keep me logged in", else 7 days
  const lastLogin  = parseInt(localStorage.getItem('hisab_last_login') || '0');
  const keepLogin  = localStorage.getItem('hisab_keep_login') === '1';
  const expiry     = keepLogin ? 30 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000;
  if (lastLogin > 0 && Date.now() - lastLogin > expiry) {
    localStorage.removeItem('hisab_keep_login');
    logoutUser();
    return false;
  }
  // Set timestamp if not yet recorded
  if (lastLogin === 0) {
    localStorage.setItem('hisab_last_login', Date.now());
  }
  return true;
}

// ── ADMIN CHECK ───────────────────────────
const ADMIN_CREDENTIALS = { username: 'admin', password: btoa('Hisab@Admin2026!') };

function isAdmin() {
  return State.user && State.user.role === 'admin';
}
function isEditor() {
  return State.user && (State.user.role === 'editor' || State.user.role === 'admin');
}

// ── DAILY REMINDER ────────────────────────
function checkDailyReminder() {
  const lastReminder = localStorage.getItem('hisab_last_reminder');
  const today_str = today();
  if (lastReminder !== today_str && isLoggedIn()) {
    const hour = new Date().getHours();
    if (hour >= 20) { // 8 PM
      setTimeout(() => {
        showToast('📝', State.lang === 'bn' ? 'আজকের হিসাব!' : 'Daily Reminder',
          State.lang === 'bn' ? 'আজকের আয় ও খরচ যোগ করুন।' : 'Don\'t forget to add today\'s income & expenses.');
        localStorage.setItem('hisab_last_reminder', today_str);
      }, 3000);
    }
  }
}

// ── OFFLINE SYNC INDICATOR ────────────────
function updateOnlineStatus() {
  const indicator = document.getElementById('online-indicator');
  if (!indicator) return;
  if (navigator.onLine) {
    indicator.textContent = '🟢';
    indicator.title = 'Online — Synced';
  } else {
    indicator.textContent = '🟡';
    indicator.title = 'Offline — Changes saved locally';
  }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// ── INIT ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // ── Auto Daily Migration: localStorage → Firestore ──
  (async () => {
    try {
      const lastMigration = localStorage.getItem('hisab_last_migration');
      const today = new Date().toDateString();
      if (lastMigration === today) return; // আজকে already migrate হয়েছে

      const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
      const { getFirestore, doc, setDoc, collection, writeBatch } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

      const firebaseConfig = {
        apiKey: "AIzaSyDerOMIIPh660Wej7OYy8i7oUXbKC44wW4",
        authDomain: "hisab-4-u.firebaseapp.com",
        projectId: "hisab-4-u",
        storageBucket: "hisab-4-u.firebasestorage.app",
        messagingSenderId: "957694095044",
        appId: "1:957694095044:web:1649995ac9734d4d062391"
      };

      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
      const db = getFirestore(app);

      // Users migrate করো
      const users = JSON.parse(localStorage.getItem('hisab_users') || '[]');
      if (users.length > 0) {
        const batch = writeBatch(db);
        users.forEach(u => {
          if (u.email || u.username) {
            const id = (u.email || u.username).replace(/[^a-zA-Z0-9]/g, '_');
            batch.set(doc(db, 'users', id), {
              ...u,
              migratedAt: new Date().toISOString(),
              source: 'localStorage'
            }, { merge: true });
          }
        });
        await batch.commit();
      }

      // Transactions migrate করো
      const transactions = JSON.parse(localStorage.getItem('hisab_transactions') || '[]');
      if (transactions.length > 0) {
        const batch2 = writeBatch(db);
        transactions.forEach(t => {
          if (t.id) {
            batch2.set(doc(db, 'transactions', String(t.id)), {
              ...t,
              migratedAt: new Date().toISOString()
            }, { merge: true });
          }
        });
        await batch2.commit();
      }

      // Migration date সেভ করো
      localStorage.setItem('hisab_last_migration', today);
      console.log('✅ Auto migration complete:', today);

    } catch(e) {
      console.log('Migration skipped:', e.message);
    }
  })();

  // ── Cache Version Check (Force Refresh) ──
  (async () => {
    try {
      const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
      const { getFirestore, doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const firebaseConfig = {
        apiKey: "AIzaSyDerOMIIPh660Wej7OYy8i7oUXbKC44wW4",
        authDomain: "hisab-4-u.firebaseapp.com",
        projectId: "hisab-4-u",
        storageBucket: "hisab-4-u.firebasestorage.app",
        messagingSenderId: "957694095044",
        appId: "1:957694095044:web:1649995ac9734d4d062391"
      };
      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const snap = await getDoc(doc(db, 'app_config', 'cache'));
      if (snap.exists()) {
        const serverVersion = snap.data().version;
        const localVersion = localStorage.getItem('hisab_cache_version');
        if (localVersion && localVersion !== serverVersion) {
          localStorage.setItem('hisab_cache_version', serverVersion);
          window.location.reload(true);
        } else if (!localVersion) {
          localStorage.setItem('hisab_cache_version', serverVersion);
        }
      }
    } catch(e) { /* silent fail */ }
  })();

  // Apply theme & language first
  applyTheme(State.theme);
  setLanguage(State.lang);

  // ── Remove no-transition after theme is applied ──
  // Small delay ensures the browser has painted with correct theme
  // before enabling transitions — prevents hover/theme flash on load
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('no-transition');
    });
  });
  updateOnlineStatus();
  checkDailyReminder();
  updateCreditDisplay();
  // Update sidebar credits sub-label for admin/editor
  if (isPrivilegedUser()) {
    document.querySelectorAll('.sidebar-credits-sub').forEach(el => {
      el.textContent = '∞ Unlimited — Admin privilege';
      el.style.color = '#00E5CC';
      el.style.fontWeight = '600';
    });
  }
  renderLogos();  // ← renders logo on every page from LOGO config above

  // Theme toggle buttons
  document.querySelectorAll('.theme-toggle-icon').forEach(el => {
    el.textContent = State.theme === 'dark' ? '☀️' : '🌙';
  });

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });
  });
});

// ── MOBILE HAMBURGER MENU ──────────────────────────────────────────
function initMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  // Overlay তৈরি করো
  let overlay = document.getElementById('sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';
    overlay.className = 'sidebar-overlay';
    overlay.onclick = closeMobileMenu;
    document.body.appendChild(overlay);
  }

  // Hamburger button ঠিক করো
  const toggle = document.getElementById('sidebar-toggle');
  if (toggle) {
    toggle.style.display = '';
    toggle.className = 'hamburger-btn';
    toggle.innerHTML = '<span></span><span></span><span></span>';
    toggle.onclick = toggleMobileMenu;
  }
}

function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggle = document.getElementById('sidebar-toggle');
  if (!sidebar) return;
  const isOpen = sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('show', isOpen);
  if (toggle) toggle.classList.toggle('open', isOpen);
}

function closeMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggle = document.getElementById('sidebar-toggle');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
  if (toggle) toggle.classList.remove('open');
}

// Sidebar link click এ mobile menu close করো
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeMobileMenu();
    });
  });
});
// ── AUTO SESSION CHECK ────────────────────
// Protected pages এ automatically session check করো
(function autoSessionCheck() {
  const protectedPages = [
    'dashboard', 'budget', 'expense', 'income',
    'reports', 'settings', 'wallets', 'credits', 'admin'
  ];
  const path = window.location.pathname.split('/').pop().replace('.html', '');
  if (protectedPages.includes(path)) {
    // DOM ready হওয়ার পরে check করো
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => requireLogin());
    } else {
      requireLogin();
    }
  }
})();
