// ════════════════════════════════════════════
//  HISAB — Core Application JS
// ════════════════════════════════════════════

'use strict';

// ── SERVICE WORKER REGISTRATION ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg.scope))
      .catch(err => console.log('Service Worker registration failed:', err));
  });
}

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

// NOTE: The embedded base64 PNG logo may include a dark background.
// Use the default text/icon mark to avoid "black box" artifacts.
LOGO.imageUrl = null;

// ── LOGO RENDERER ─────────────────────────
// Injects the logo into every element that has [data-logo] attribute.
function renderLogos() {
  const logos = document.querySelectorAll('[data-logo]');
  if (logos.length === 0) return;

  const logoHTML = {};
  const types = ['nav', 'auth', 'sidebar', 'footer', 'hero'];

  types.forEach(type => {
    if (LOGO.imageUrl) {
      // Image logo HTML
      if (type === 'nav') {
        logoHTML[type] = `<img src="${LOGO.imageUrl}" alt="${LOGO.altText}" style="height:36px;width:auto;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.1);display:block;" />`;
      } else if (type === 'hero') {
        logoHTML[type] = `<img src="${LOGO.imageUrl}" alt="${LOGO.altText}" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 6px 24px rgba(30,136,229,0.45)) brightness(1.1);mix-blend-mode:screen;" />`;
      } else if (type === 'auth') {
        logoHTML[type] = `<img src="${LOGO.imageUrl}" alt="${LOGO.altText}" style="height:72px;width:auto;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.1);display:block;margin:0 auto 16px;" />`;
      } else if (type === 'sidebar') {
        logoHTML[type] = `<img src="${LOGO.imageUrl}" alt="${LOGO.altText}" style="height:40px;width:auto;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.1);display:block;margin-bottom:4px;" /><div style="font-size:11px;color:rgba(181,212,244,0.6);">${LOGO.appSub}</div>`;
      } else if (type === 'footer') {
        logoHTML[type] = `<img src="${LOGO.imageUrl}" alt="${LOGO.altText}" style="height:44px;width:auto;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.1);display:block;margin-bottom:8px;" />`;
      }
    } else {
      // Text/Icon logo HTML
      if (type === 'nav') {
        logoHTML[type] = `
          <div style="width:38px;height:38px;background:${LOGO.markBg};border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:white;font-family:'Playfair Display',serif;box-shadow:0 4px 12px rgba(30,136,229,0.4);flex-shrink:0;">${LOGO.markText}</div>
          <div style="line-height:1.2;">
            <div style="font-family:'Playfair Display',serif;font-size:20px;font-weight:800;line-height:1.1;">
              <span style="background:linear-gradient(135deg,#1E88E5,#00E5CC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Hisab</span>
              <span style="color:rgba(255,255,255,0.28);font-weight:300;font-size:0.55em;vertical-align:middle;">—</span>
              <span style="background:linear-gradient(135deg,#A855F7,#EC4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">হিসাব</span>
            </div>
            <div style="font-size:10px;margin-top:1px;white-space:nowrap;">
              <span style="font-style:italic;background:linear-gradient(90deg,#A855F7,#EC4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">আগামীর সঞ্চয়ের জন্য</span>
              <span style="color:rgba(255,255,255,0.22);margin:0 3px;">—</span>
              <span style="font-style:italic;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;font-size:0.85em;background:linear-gradient(90deg,#93C5FD,#6EE7B7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">For Future Savings</span>
            </div>
          </div>`;
      } else if (type === 'hero') {
        logoHTML[type] = `<div style="width:110px;height:110px;background:linear-gradient(135deg,#1E88E5,#00E5CC);border-radius:24px;display:flex;align-items:center;justify-content:center;font-size:60px;font-weight:700;color:white;font-family:'Playfair Display',serif;box-shadow:0 12px 36px rgba(30,136,229,0.5);">${LOGO.markText}</div>`;
      } else if (type === 'auth') {
        logoHTML[type] = `<div style="width:72px;height:72px;background:rgba(255,255,255,0.15);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:700;color:white;font-family:'Playfair Display',serif;margin:0 auto 16px;border:1px solid rgba(255,255,255,0.2);">${LOGO.markText}</div>`;
      } else if (type === 'sidebar') {
        logoHTML[type] = `<div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:${LOGO.markBg};border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:white;font-family:'Playfair Display',serif;">${LOGO.markText}</div><div><div style="font-size:18px;font-weight:700;color:white;">${LOGO.appName}</div><div style="font-size:10px;color:rgba(181,212,244,0.6);margin-top:1px;">${LOGO.appSub}</div></div></div>`;
      } else if (type === 'footer') {
        logoHTML[type] = `<div style="display:flex;align-items:center;gap:10px;"><div style="width:28px;height:28px;background:${LOGO.markBg};border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:white;font-family:'Playfair Display',serif;">${LOGO.markText}</div><div style="font-size:14px;color:rgba(255,255,255,0.8);">${LOGO.appName} — ${LOGO.appSub}</div></div>`;
      }
    }
  });

  logos.forEach(el => {
    const type = el.getAttribute('data-logo');
    if (logoHTML[type]) el.innerHTML = logoHTML[type];
  });
}

// ── INITIALIZE LOGOS ──
document.addEventListener('DOMContentLoaded', () => {
  renderLogos();
});

// ── LANGUAGE STRINGS ──────────────────────
const LANG = {
  en: {
    // Nav
    nav_home: 'Home', nav_features: 'Features', nav_pricing: 'Pricing', nav_contact: 'Contact',
    nav_login: 'Log In', nav_register: 'Get Started',
    // Sidebar nav labels
    nav_main: 'Main', nav_analytics: 'Analytics', nav_account: 'Account',
    nav_dashboard: 'Dashboard', nav_wallets: 'Wallets', nav_income: 'Income',
    nav_expense: 'Expenses', nav_reports: 'Reports', nav_budget: 'Budget',
    nav_settings: 'Settings', nav_credits_p: 'Credits', nav_admin: 'Admin Panel',
    nav_logout: 'Log Out',
    nav_login_back: 'Back to Login',
    // Sidebar credits section
    sidebar_credits_label: 'Credit Points', sidebar_credits_pts: 'pts',
    sidebar_credits_sub: 'Watch ads to earn more',
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
    // Income page
    inc_this_month:'This Month', inc_this_year:'This Year', inc_top_source:'Top Source',
    inc_total_entries:'Total Entries', inc_by_source:'Income by Source',
    inc_monthly_trend:'Monthly Trend', inc_transactions:'Income Transactions',
    inc_add_btn:'+ Add Income', inc_save_btn:'Save Income',
    inc_wallet_label:'Wallet (money received in)', inc_source_label:'Income Source',
    // Expense page
    exp_top_cat:'Top Category', exp_by_cat:'Expense by Category',
    exp_monthly_trend:'Monthly Expense Trend', exp_transactions:'Expense Transactions',
    exp_add_btn:'+ Add Expense', exp_save_btn:'Save Expense',
    // Dashboard
    dash_overview:'This Month Overview',
    // Wallet
    wlt_transactions:'Wallet Transactions',
    // Budget
    bgt_total:'Total Budget', bgt_spent_so_far:'Spent So Far',
    bgt_remaining:'Remaining', bgt_used_pct:'Used %',
    bgt_vs_actual:'Budget vs Actual — This Month',
    bgt_vs_chart:'Budget vs Actual Chart', bgt_set_monthly:'✏️ Set Monthly Budget',
    // Reports
    rpt_page_title:'📊 Reports & Analytics', rpt_download_btn:'⬇ Download (5 pts)',
    rpt_all_cats: 'All Categories',
    // Budget AI
    bgt_accept_btn: '✅ Accept AI Suggestion', bgt_ai_loading: '🤖 AI is analysing...',
    bgt_ai_title: '🤖 AI Budget Suggestion', bgt_set_manual_btn: '✏️ Set Manually',
    // Settings extra
    set_cred_pts: 'Credit Points',
    rpt_spending_dist:'Spending Distribution', rpt_budget_actual:'Budget vs Actual',
    // Credits
    crd_earn_title:'💚 Earn Credits', crd_use_title:'❤️ Use Credits',
    crd_buy_title:'💳 Buy Credit Packs', crd_history_title:'📋 Credit Transaction History',
    // Settings sections
    set_profile_info:'Profile Information', set_lang_display:'Language & Display',
    set_notif_prefs:'Notification Preferences', set_cat_mgmt:'Category Management',
    set_credit_pts:'Credit Points', set_security_settings:'Security Settings',
    set_contact_dev:'Contact Developer',
    // Table headers
    tbl_date:'Date', tbl_source:'Source', tbl_wallet:'Wallet', tbl_note:'Note',
    tbl_amount:'Amount', tbl_action:'Action', tbl_category:'Category',
    tbl_desc:'Description', tbl_type:'Type', tbl_debit:'Debit', tbl_credit:'Credit',
    tbl_from:'From', tbl_to:'To', tbl_month:'Month', tbl_income:'Income',
    tbl_expense:'Expense', tbl_savings:'Savings', tbl_status:'Status', tbl_balance:'Balance',
    // Misc
    save_changes:'Save Changes', txn_wallet_from:'Wallet (paid from)',
    // Settings labels
    set_full_name:'Full Name', set_username_lbl:'Username', set_email_lbl:'Email Address',
    set_mobile_lbl:'Mobile Number', set_cur_pass_lbl:'Current Password',
    set_new_pass_lbl:'New Password', set_confirm_pass_lbl:'Confirm New Password',
    set_lang_theme:'Language & Theme', set_cats_nav:'Categories',
    set_cred_nav:'Credits', set_backup_nav:'Backup',
    set_security:'Security', set_contact_nav:'Contact Developer',
    set_notif:'Notifications', set_profile:'Profile',
    // Month short names for charts
    mshort_jan:'Jan', mshort_feb:'Feb', mshort_mar:'Mar', mshort_apr:'Apr',
    mshort_may:'May', mshort_jun:'Jun', mshort_jul:'Jul', mshort_aug:'Aug',
    mshort_sep:'Sep', mshort_oct:'Oct', mshort_nov:'Nov', mshort_dec:'Dec',
    // Reports AI
    rpt_no_savings:'No savings this month.', rpt_no_sav_desc:'Your expenses exceeded income by',
    rpt_tip:'Tip:', rpt_ai_no_data:'No transactions this period.',
    // Budget extra
    bgt_income_expected:'Total Income Budget (expected)', bgt_savings_target:'Savings Target',
    bgt_set_desc:'Set a spending limit for each category. AI suggestion is pre-filled.',
    bgt_save_manual:'💾 Save Budget',
    // Credits earn/use section
    crd_signup_bonus:'Sign-up Bonus', crd_signup_desc:'One time on account creation',
    crd_watch_ad:'Watch an Ad', crd_watch_desc:'Short 30-second video ad',
    crd_admin_gift:'Admin Gift (Occasions)', crd_admin_desc:'Eid, Puja, New Year etc.',
    crd_refer:'Refer a Friend', crd_refer_desc:'When they register and log in',
    crd_add_cat:'Add Custom Category', crd_add_cat_desc:'Income or Expense head',
    crd_add_wallet:'Add Custom Wallet', crd_add_wallet_desc:'New wallet type',
    crd_pdf:'Download PDF Report', crd_pdf_desc:'Any period report',
    crd_standard:'All Standard Features', crd_standard_desc:'Transactions, reports, charts',
    crd_your_balance:'Your Balance', crd_buy_btn:'💳 Buy Credits',
    crd_your_balance_title:'Your Credit Balance', crd_page_title:'💳 Credit Points',
    crd_watch_btn_sm:'Watch', crd_ad_modal_title:'Watch Ad to Earn 5 Credits',
    crd_pts_unit:'pts',
    crd_total_earned:'Total Earned', crd_total_used:'Total Used',
    crd_balance_lbl:'Balance', crd_loading_history:'Loading history...',
    pack_pts_100:'100 pts', pack_pts_500:'500 pts',
    pack_pts_1000:'1000 pts', pack_pts_5000:'5000 pts',
    pack_best_value:'৳ 99 — Best Value', pack_buy_btn:'Buy',
    // Dashboard
    dash_all_wallets:'All wallets combined', dash_this_month:'This month',
    dash_this_month_exp:'This month', dash_inc_minus_exp:'Income – Expense',
    dash_view_all:'View All', dash_no_txns:'No transactions yet. Add your first income or expense!',
    // Profile
    profile_change_photo:'📷 Change Photo', profile_photo_hint:'JPG, PNG or GIF · Max 2MB',
    crd_watch_btn:'📺 Watch Ad (+5 pts)', crd_history_label:'Credit History',
    crd_signup_label:'Sign-up Bonus', crd_signup_when:'Account created',
    crd_ad_watched:'Ad Watched', crd_ad_when:'Today',
    // Income/Expense section headings
    inc_sources_title:'Income Sources', exp_cats_title:'Expense Categories',
    // Settings backup buttons
    backup_now_btn2:'☁️ Backup Now', backup_restore_btn2:'⬇️ Restore from Drive',
    backup_scope_value:'All transactions, wallets & settings',
    // Settings Language/Theme/Currency rows
    lang_row_label:'Language / ভাষা', lang_row_desc:'Select your preferred language',
    theme_row_label:'Theme', theme_row_desc:'Light or dark mode (auto-detects system)',
    currency_row_label:'Currency Display', currency_row_desc:'Always shown in Bangladeshi Taka (৳)',
    // Wallets page
    wlt_across_all:'Across all wallets', wlt_all_movements:'All movements across wallets',
    wlt_no_txns:'No transactions yet.', wlt_add_btn:'+ Add Wallet',
    wlt_all_wallets:'All Wallets',
    wlt_fund_transfer:'⇄ Fund Transfer', wlt_fund_transfer_title:'⇄ Fund Transfer',
    wlt_double_entry_note:'Double-entry: Money moves out of one wallet and into another.',
    wlt_tr_amount:'Amount (৳)', wlt_tr_from:'From', wlt_tr_to:'To',
    wlt_after_transfer:'After Transfer:', wlt_tr_submit:'Transfer Fund',
    // Notification labels
    notif_daily_label:'Daily Reminder', notif_daily_desc:'Remind me to add daily expenses',
    notif_time_label:'Reminder Time', notif_time_desc:'Choose your preferred reminder time',
    notif_savings_label:'Monthly Savings Alert', notif_savings_desc:'Congratulate me on savings milestones',
    notif_budget_label:'Budget Warning', notif_budget_desc:'Alert when budget 80% consumed',
    notif_admin_label:'Admin Announcements', notif_admin_desc:'Receive news, wishes, and gifts from admin',
    notif_save_btn:'Save Preferences',
    // Backup labels
    backup_auto_label:'Auto Backup', backup_auto_desc:'Automatically back up your data daily',
    backup_time_label:'Backup Time', backup_time_desc:'Daily backup runs at this time',
    backup_scope_label:'Backup Scope', backup_scope_what:'What gets backed up',
    backup_last_label:'Last Backup', backup_never:'Never backed up yet',
    backup_history_title:'Backup History', backup_disconnect_btn:'Disconnect',
    // Categories labels
    cat_mgmt_desc:'Show, hide, or add custom categories. Adding custom categories costs 10 credits.',
    cat_income_title:'💰 Income Categories', cat_expense_title:'💸 Expense Categories',
    cat_wallet_title:'👛 Wallet Types', cat_add_custom_title:'+ Add Custom Category (10 credits)',
    cat_eng_name_lbl:'English Name', cat_type_income:'Income Category',
    cat_type_expense:'Expense Category', cat_type_wallet:'Wallet Type',
    cat_add_btn:'Add Category (–10 pts)',
    // Security labels
    sec_change_pass_btn:'Change Password', sec_forgot_title:'Forgot Password?',
    sec_forgot_desc:'Send a password reset OTP to your email or phone.',
    sec_send_email_btn:'📧 Send to Email', sec_send_phone_btn:'📱 Send to Phone',
    // Password strength hints
    pass_chk_len:'✗ Min 8 characters', pass_chk_upper:'✗ Uppercase letter (A-Z)',
    pass_chk_lower:'✗ Lowercase letter (a-z)', pass_chk_num:'✗ Number (0-9)',
    pass_chk_special:'✗ Special character (!@#$%^&*)',
    // Backup privacy
    backup_privacy_title:'🔒 Privacy & Security',
    // Contact Developer form
    contact_desc:'Have a question, bug report, or suggestion? Reach out to us.',
    contact_subject_lbl:'Subject', contact_msg_lbl:'Message',
    contact_opt_bug:'Bug Report', contact_opt_feature:'Feature Request',
    contact_opt_account:'Account Issue', contact_opt_other:'Other',
    contact_send_btn:'Send Message',
    // Topbar page titles
    topbar_dashboard:'Dashboard', topbar_wallets:'Wallets', topbar_income:'Income',
    topbar_expense:'Expenses', topbar_reports:'Reports', topbar_budget:'Budget',
    topbar_credits:'Credits', topbar_settings:'Settings', topbar_admin:'Admin Panel',
    // Expense/Income double-entry notes
    exp_double_entry_note:'Every expense entry records money paid out from a wallet to an expense category.',
    inc_double_entry_note:'Every income entry records money received into a wallet from a source.',
    exp_edit_title:'✏️ Edit Expense',
    inc_edit_title:'✏️ Edit Income',
    // Wallet modal
    wlt_add_wallet_title:'Add New Wallet',
    wlt_type_label:'Wallet Type',
    // Auth page feature panels - Login
    login_f1_title:'Double-Entry Accounting', login_f1_text:'Every transaction balanced — proper accounting, not just notes.',
    login_f2_title:'AI Budget Suggestions',   login_f2_text:'Smart monthly budget based on your spending history.',
    login_f3_title:'Rich Reports & Charts',   login_f3_text:'Daily, weekly, monthly and yearly visual reports.',
    login_f4_title:'Offline Sync',            login_f4_text:'Works offline. Auto-syncs & backs up to Google Drive.',
    // Register
    reg_f1_title:'100 Free Credits on Sign-up', reg_f1_text:'Start with 100 credits — no payment, no card required.',
    reg_f2_title:'Bengali & English',           reg_f2_text:'Full bilingual support — switch language anytime.',
    reg_f3_title:'Works on All Devices',        reg_f3_text:'Desktop, mobile, offline — access your data anywhere.',
    reg_f4_title:'Google Drive Backup',         reg_f4_text:'Auto-backup daily to your own Google Drive — free.',
    // Forgot password
    fp_f1_title:'Secure Password Recovery', fp_f1_text:'Industry-standard OTP verification to protect your account.',
    fp_f2_title:'OTP via Email',            fp_f2_text:'Verification code sent to your registered email address.',
    fp_f3_title:'OTP via SMS',              fp_f3_text:'Or verify using your registered mobile number.',
    fp_f4_title:'Your Data is Safe',        fp_f4_text:'All your transactions and wallets remain secure during recovery.',
    // Dashboard budget buttons
    bgt_set_manual_btn:'Set Custom',
    // Admin
    admin_title:'Admin Panel', admin_users:'Users', admin_sales:'Sales',
    admin_categories:'Categories', admin_announcements:'Announcements',
    admin_gift_credits:'Gift Credits', admin_all_users:'All Users',
    admin_active_users:'Active Users', admin_inactive_users:'Inactive (7+ days)',
    admin_total_txns:'Total Transactions',
    admin_last_login:'Last Login', admin_ban_user:'Ban User', admin_unban_user:'Unban User',
    admin_ban_lifetime:'Lifetime Ban', admin_ban_temp:'Temporary Ban',
    admin_ban_days:'Days', admin_ban_reason:'Reason', admin_ban_confirm:'Confirm Ban',
    admin_id_lifetime:'ID Stored for Lifetime',
    err_banned_lifetime:'Your account has been permanently banned. Contact admin.',
    err_banned_temp:'Your account is temporarily restricted until ',
    err_deleted:'This account has been deleted. Contact admin.',
    // App popup
    app_working_title: 'Mobile App',
    app_working_msg: 'We are currently working on our mobile application. It will be available soon on Play Store and App Store!',
    app_working_btn: 'Got it!',
  },
  bn: {
    nav_home: 'হোম', nav_features: 'বৈশিষ্ট্য', nav_pricing: 'মূল্য', nav_contact: 'যোগাযোগ',
    nav_login: 'লগ ইন', nav_register: 'শুরু করুন',
    // Sidebar nav labels
    nav_main: 'মূল মেনু', nav_analytics: 'বিশ্লেষণ', nav_account: 'অ্যাকাউন্ট',
    nav_dashboard: 'ড্যাশবোর্ড', nav_wallets: 'ওয়ালেট', nav_income: 'আয়',
    nav_expense: 'খরচ', nav_reports: 'রিপোর্ট', nav_budget: 'বাজেট',
    nav_settings: 'সেটিংস', nav_credits_p: 'ক্রেডিট', nav_admin: 'অ্যাডমিন প্যানেল',
    nav_logout: 'লগ আউট',
    nav_login_back: 'লগইনে ফিরুন',
    // Sidebar credits section
    sidebar_credits_label: 'ক্রেডিট পয়েন্ট', sidebar_credits_pts: 'পয়েন্ট',
    sidebar_credits_sub: 'বিজ্ঞাপন দেখে আরও অর্জন করুন',
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
    // Income page
    inc_this_month:'এই মাসে', inc_this_year:'এই বছরে', inc_top_source:'শীর্ষ উৎস',
    inc_total_entries:'মোট এন্ট্রি', inc_by_source:'উৎস অনুযায়ী আয়',
    inc_monthly_trend:'মাসিক ধারা', inc_transactions:'আয়ের লেনদেন',
    inc_add_btn:'+ আয় যোগ করুন', inc_save_btn:'আয় সংরক্ষণ করুন',
    inc_wallet_label:'ওয়ালেট (যেখানে টাকা জমা হবে)', inc_source_label:'আয়ের উৎস',
    // Expense page
    exp_top_cat:'শীর্ষ ক্যাটাগরি', exp_by_cat:'ক্যাটাগরি অনুযায়ী খরচ',
    exp_monthly_trend:'মাসিক খরচের ধারা', exp_transactions:'খরচের লেনদেন',
    exp_add_btn:'+ খরচ যোগ করুন', exp_save_btn:'খরচ সংরক্ষণ করুন',
    // Dashboard
    dash_overview:'এই মাসের সংক্ষেপ',
    // Wallet
    wlt_transactions:'ওয়ালেট লেনদেন',
    // Budget
    bgt_total:'মোট বাজেট', bgt_spent_so_far:'এখন পর্যন্ত খরচ',
    bgt_remaining:'বাকি আছে', bgt_used_pct:'ব্যবহৃত %',
    bgt_vs_actual:'বাজেট বনাম প্রকৃত — এই মাসে',
    bgt_vs_chart:'বাজেট বনাম প্রকৃত চার্ট', bgt_set_monthly:'✏️ মাসিক বাজেট নির্ধারণ করুন',
    // Reports
    rpt_page_title:'📊 রিপোর্ট ও বিশ্লেষণ', rpt_download_btn:'⬇ ডাউনলোড (৫ পয়েন্ট)',
    rpt_all_cats: 'সব ক্যাটাগরি',
    rpt_spending_dist:'খরচের বিবরণ', rpt_budget_actual:'বাজেট বনাম প্রকৃত',
    // Budget AI
    bgt_accept_btn: '✅ AI পরামর্শ গ্রহণ করুন', bgt_ai_loading: '🤖 AI বিশ্লেষণ করছে...',
    bgt_ai_title: '🤖 AI বাজেট পরামর্শ', bgt_set_manual_btn: '✏️ নিজে নির্ধারণ করুন',
    // Settings extra
    set_cred_pts: 'ক্রেডিট পয়েন্ট',
    rpt_spending_dist:'খরচের বিবরণ', rpt_budget_actual:'বাজেট বনাম প্রকৃত',
    // Credits
    crd_earn_title:'💚 ক্রেডিট অর্জন করুন', crd_use_title:'❤️ ক্রেডিট ব্যবহার করুন',
    crd_buy_title:'💳 ক্রেডিট প্যাক কিনুন', crd_history_title:'📋 ক্রেডিট লেনদেনের ইতিহাস',
    // Settings sections
    set_profile_info:'প্রোফাইল তথ্য', set_lang_display:'ভাষা ও প্রদর্শনী',
    set_notif_prefs:'নোটিফিকেশন পছন্দ', set_cat_mgmt:'ক্যাটাগরি ব্যবস্থাপনা',
    set_credit_pts:'ক্রেডিট পয়েন্ট', set_security_settings:'নিরাপত্তা সেটিংস',
    set_contact_dev:'ডেভেলপারের সাথে যোগাযোগ',
    // Table headers
    tbl_date:'তারিখ', tbl_source:'উৎস', tbl_wallet:'ওয়ালেট', tbl_note:'নোট',
    tbl_amount:'পরিমাণ', tbl_action:'কার্যক্রম', tbl_category:'ক্যাটাগরি',
    tbl_desc:'বিবরণ', tbl_type:'ধরন', tbl_debit:'ডেবিট', tbl_credit:'ক্রেডিট',
    tbl_from:'যেখান থেকে', tbl_to:'যেখানে', tbl_month:'মাস', tbl_income:'আয়',
    tbl_expense:'খরচ', tbl_savings:'সঞ্চয়', tbl_status:'অবস্থা', tbl_balance:'ব্যালেন্স',
    // Misc
    save_changes:'পরিবর্তন সংরক্ষণ করুন', txn_wallet_from:'ওয়ালেট (যেখান থেকে)',
    // Settings labels
    set_full_name:'পুরো নাম', set_username_lbl:'ইউজারনেম', set_email_lbl:'ইমেইল ঠিকানা',
    set_mobile_lbl:'মোবাইল নম্বর', set_cur_pass_lbl:'বর্তমান পাসওয়ার্ড',
    set_new_pass_lbl:'নতুন পাসওয়ার্ড', set_confirm_pass_lbl:'নতুন পাসওয়ার্ড নিশ্চিত করুন',
    set_lang_theme:'ভাষা ও থিম', set_cats_nav:'ক্যাটাগরি',
    set_cred_nav:'ক্রেডিট', set_backup_nav:'ব্যাকআপ',
    set_security:'নিরাপত্তা', set_contact_nav:'ডেভেলপারের সাথে যোগাযোগ',
    set_notif:'নোটিফিকেশন', set_profile:'প্রোফাইল',
    // Month short names for charts
    mshort_jan:'জান', mshort_feb:'ফেব', mshort_mar:'মার্চ', mshort_apr:'এপ্রিল',
    mshort_may:'মে', mshort_jun:'জুন', mshort_jul:'জুলাই', mshort_aug:'আগ',
    mshort_sep:'সেপ', mshort_oct:'অক্টো', mshort_nov:'নভে', mshort_dec:'ডিসে',
    // Reports AI
    rpt_no_savings:'এই মাসে কোনো সঞ্চয় নেই।', rpt_no_sav_desc:'আয়ের চেয়ে খরচ বেশি হয়েছে',
    rpt_tip:'পরামর্শ:', rpt_ai_no_data:'এই সময়ে কোনো লেনদেন নেই।',
    // Budget extra
    bgt_income_expected:'মোট আয়ের বাজেট (প্রত্যাশিত)', bgt_savings_target:'সঞ্চয়ের লক্ষ্য',
    bgt_set_desc:'প্রতিটি ক্যাটাগরির জন্য খরচের সীমা নির্ধারণ করুন। AI পরামর্শ আগে থেকেই দেওয়া আছে।',
    bgt_save_manual:'💾 বাজেট সংরক্ষণ করুন',
    // Credits earn/use section
    crd_signup_bonus:'সাইনআপ বোনাস', crd_signup_desc:'অ্যাকাউন্ট তৈরিতে এককালীন',
    crd_watch_ad:'বিজ্ঞাপন দেখুন', crd_watch_desc:'৩০ সেকেন্ডের ছোট ভিডিও বিজ্ঞাপন',
    crd_admin_gift:'অ্যাডমিন উপহার (উপলক্ষ)', crd_admin_desc:'ঈদ, পূজা, নববর্ষ ইত্যাদি',
    crd_refer:'বন্ধুকে রেফার করুন', crd_refer_desc:'তারা নিবন্ধন ও লগইন করলে',
    crd_add_cat:'কাস্টম ক্যাটাগরি যোগ করুন', crd_add_cat_desc:'আয় বা খরচের হেড',
    crd_add_wallet:'কাস্টম ওয়ালেট যোগ করুন', crd_add_wallet_desc:'নতুন ওয়ালেট টাইপ',
    crd_pdf:'PDF রিপোর্ট ডাউনলোড', crd_pdf_desc:'যেকোনো সময়ের রিপোর্ট',
    crd_standard:'সব স্ট্যান্ডার্ড ফিচার', crd_standard_desc:'লেনদেন, রিপোর্ট, চার্ট',
    crd_your_balance:'আপনার ব্যালেন্স', crd_buy_btn:'💳 ক্রেডিট কিনুন',
    crd_your_balance_title:'আপনার ক্রেডিট ব্যালেন্স', crd_page_title:'💳 ক্রেডিট পয়েন্ট',
    crd_watch_btn_sm:'দেখুন', crd_ad_modal_title:'বিজ্ঞাপন দেখে ৫ ক্রেডিট অর্জন করুন',
    crd_pts_unit:'পয়েন্ট',
    crd_total_earned:'মোট অর্জিত', crd_total_used:'মোট ব্যবহৃত',
    crd_balance_lbl:'ব্যালেন্স', crd_loading_history:'ইতিহাস লোড হচ্ছে...',
    pack_pts_100:'১০০ পয়েন্ট', pack_pts_500:'৫০০ পয়েন্ট',
    pack_pts_1000:'১০০০ পয়েন্ট', pack_pts_5000:'৫০০০ পয়েন্ট',
    pack_best_value:'৳ ৯৯ — সেরা মূল্য', pack_buy_btn:'কিনুন',
    // Dashboard
    dash_all_wallets:'সব ওয়ালেট মিলিয়ে', dash_this_month:'এই মাসে',
    dash_this_month_exp:'এই মাসে', dash_inc_minus_exp:'আয় – খরচ',
    dash_view_all:'সব দেখুন', dash_no_txns:'এখনো কোনো লেনদেন নেই। প্রথম আয় বা খরচ যোগ করুন!',
    // Profile
    profile_change_photo:'📷 ছবি পরিবর্তন করুন', profile_photo_hint:'JPG, PNG বা GIF · সর্বোচ্চ 2MB',
    crd_watch_btn:'📺 বিজ্ঞাপন দেখুন (+৫ পয়েন্ট)', crd_history_label:'ক্রেডিট ইতিহাস',
    crd_signup_label:'সাইনআপ বোনাস', crd_signup_when:'অ্যাকাউন্ট তৈরির সময়',
    crd_ad_watched:'বিজ্ঞাপন দেখা হয়েছে', crd_ad_when:'আজকে',
    // App popup
    app_working_title: 'মোবাইল অ্যাপ',
    app_working_msg: 'আমরা বর্তমানে আমাদের মোবাইল অ্যাপ্লিকেশনের কাজ করছি। এটি খুব শীঘ্রই প্লে স্টোর এবং অ্যাপ স্টোরে পাওয়া যাবে!',
    app_working_btn: 'ঠিক আছে',
  }
};
    // Income/Expense section headings
    inc_sources_title:'আয়ের উৎস', exp_cats_title:'খরচের ক্যাটাগরি',
    // Settings backup buttons
    backup_now_btn2:'☁️ এখনই ব্যাকআপ', backup_restore_btn2:'⬇️ ড্রাইভ থেকে পুনরুদ্ধার',
    backup_scope_value:'সব লেনদেন, ওয়ালেট ও সেটিংস',
    // Settings Language/Theme/Currency rows
    lang_row_label:'ভাষা / Language', lang_row_desc:'আপনার পছন্দের ভাষা বেছে নিন',
    theme_row_label:'থিম', theme_row_desc:'লাইট বা ডার্ক মোড (সিস্টেম অনুযায়ী স্বয়ংক্রিয়)',
    currency_row_label:'মুদ্রা প্রদর্শনী', currency_row_desc:'সবসময় বাংলাদেশি টাকায় (৳) দেখানো হবে',
    // Wallets page
    wlt_across_all:'সব ওয়ালেট মিলিয়ে', wlt_all_movements:'সব ওয়ালেটের লেনদেন',
    wlt_no_txns:'এখনো কোনো লেনদেন নেই।', wlt_add_btn:'+ ওয়ালেট যোগ করুন',
    wlt_all_wallets:'সব ওয়ালেট',
    // Notification labels
    notif_daily_label:'দৈনিক রিমাইন্ডার', notif_daily_desc:'প্রতিদিনের খরচ যোগ করার কথা মনে করিয়ে দেবে',
    notif_time_label:'রিমাইন্ডারের সময়', notif_time_desc:'আপনার পছন্দের রিমাইন্ডার সময় বেছে নিন',
    notif_savings_label:'মাসিক সঞ্চয় সতর্কতা', notif_savings_desc:'সঞ্চয়ের মাইলস্টোনে অভিনন্দন জানাবে',
    notif_budget_label:'বাজেট সতর্কতা', notif_budget_desc:'বাজেটের ৮০% ব্যবহার হলে সতর্ক করবে',
    notif_admin_label:'অ্যাডমিন বিজ্ঞপ্তি', notif_admin_desc:'অ্যাডমিনের খবর, শুভেচ্ছা ও উপহার পাবেন',
    notif_save_btn:'পছন্দ সংরক্ষণ করুন',
    // Backup labels
    backup_auto_label:'স্বয়ংক্রিয় ব্যাকআপ', backup_auto_desc:'প্রতিদিন স্বয়ংক্রিয়ভাবে আপনার ডেটা ব্যাকআপ হবে',
    backup_time_label:'ব্যাকআপের সময়', backup_time_desc:'প্রতিদিন এই সময়ে ব্যাকআপ হবে',
    backup_scope_label:'ব্যাকআপের পরিধি', backup_scope_what:'কী কী ব্যাকআপ হবে',
    backup_last_label:'সর্বশেষ ব্যাকআপ', backup_never:'এখনো কোনো ব্যাকআপ হয়নি',
    backup_history_title:'ব্যাকআপের ইতিহাস', backup_disconnect_btn:'সংযোগ বিচ্ছিন্ন করুন',
    // Categories labels
    cat_mgmt_desc:'ক্যাটাগরি দেখান, লুকান বা কাস্টম ক্যাটাগরি যোগ করুন। কাস্টম ক্যাটাগরি যোগ করতে ১০ ক্রেডিট লাগবে।',
    cat_income_title:'💰 আয়ের ক্যাটাগরি', cat_expense_title:'💸 খরচের ক্যাটাগরি',
    cat_wallet_title:'👛 ওয়ালেটের ধরন', cat_add_custom_title:'+ কাস্টম ক্যাটাগরি যোগ করুন (১০ ক্রেডিট)',
    cat_eng_name_lbl:'ইংরেজি নাম', cat_type_income:'আয়ের ক্যাটাগরি',
    cat_type_expense:'খরচের ক্যাটাগরি', cat_type_wallet:'ওয়ালেটের ধরন',
    cat_add_btn:'ক্যাটাগরি যোগ করুন (–১০ পয়েন্ট)',
    // Security labels
    sec_change_pass_btn:'পাসওয়ার্ড পরিবর্তন করুন', sec_forgot_title:'পাসওয়ার্ড ভুলে গেছেন?',
    sec_forgot_desc:'আপনার ইমেইল বা ফোনে পাসওয়ার্ড রিসেট OTP পাঠান।',
    sec_send_email_btn:'📧 ইমেইলে পাঠান', sec_send_phone_btn:'📱 ফোনে পাঠান',
    // Password strength hints
    pass_chk_len:'✗ কমপক্ষে ৮ অক্ষর', pass_chk_upper:'✗ বড় হাতের অক্ষর (A-Z)',
    pass_chk_lower:'✗ ছোট হাতের অক্ষর (a-z)', pass_chk_num:'✗ সংখ্যা (0-9)',
    pass_chk_special:'✗ বিশেষ চিহ্ন (!@#$%^&*)',
    // Backup privacy
    backup_privacy_title:'🔒 গোপনীয়তা ও নিরাপত্তা',
    // Contact Developer form
    contact_desc:'কোনো প্রশ্ন, বাগ রিপোর্ট বা পরামর্শ আছে? আমাদের জানান।',
    contact_subject_lbl:'বিষয়', contact_msg_lbl:'বার্তা',
    contact_opt_bug:'বাগ রিপোর্ট', contact_opt_feature:'নতুন ফিচারের অনুরোধ',
    contact_opt_account:'অ্যাকাউন্ট সমস্যা', contact_opt_other:'অন্যান্য',
    contact_send_btn:'বার্তা পাঠান',
    // Topbar page titles
    topbar_dashboard:'ড্যাশবোর্ড', topbar_wallets:'ওয়ালেট', topbar_income:'আয়',
    topbar_expense:'খরচ', topbar_reports:'রিপোর্ট', topbar_budget:'বাজেট',
    topbar_credits:'ক্রেডিট', topbar_settings:'সেটিংস', topbar_admin:'অ্যাডমিন প্যানেল',
    // Expense/Income double-entry notes
    exp_double_entry_note:'প্রতিটি খরচের এন্ট্রি ওয়ালেট থেকে খরচের ক্যাটাগরিতে টাকা বের হওয়া রেকর্ড করে।',
    inc_double_entry_note:'প্রতিটি আয়ের এন্ট্রি কোনো উৎস থেকে ওয়ালেটে টাকা আসা রেকর্ড করে।',
    exp_edit_title:'✏️ খরচ সম্পাদনা করুন',
    inc_edit_title:'✏️ আয় সম্পাদনা করুন',
    // Wallet modal
    wlt_add_wallet_title:'নতুন ওয়ালেট যোগ করুন',
    wlt_type_label:'ওয়ালেটের ধরন',
    // Auth page feature panels - Login
    login_f1_title:'ডাবল-এন্ট্রি অ্যাকাউন্টিং', login_f1_text:'প্রতিটি লেনদেন ব্যালেন্সড — শুধু নোট নয়, সঠিক অ্যাকাউন্টিং।',
    login_f2_title:'AI বাজেট পরামর্শ',           login_f2_text:'আপনার ব্যয়ের ইতিহাসের উপর ভিত্তি করে স্মার্ট মাসিক বাজেট।',
    login_f3_title:'বিস্তারিত রিপোর্ট ও চার্ট',  login_f3_text:'দৈনিক, সাপ্তাহিক, মাসিক ও বার্ষিক ভিজ্যুয়াল রিপোর্ট।',
    login_f4_title:'অফলাইন সিঙ্ক',               login_f4_text:'অফলাইনে কাজ করে। অটো-সিঙ্ক ও Google Drive ব্যাকআপ।',
    // Register
    reg_f1_title:'সাইন-আপে ১০০ বিনামূল্যে ক্রেডিট', reg_f1_text:'১০০ ক্রেডিট দিয়ে শুরু — কোনো পেমেন্ট বা কার্ড লাগবে না।',
    reg_f2_title:'বাংলা ও ইংরেজি',                   reg_f2_text:'সম্পূর্ণ দ্বিভাষিক সমর্থন — যেকোনো সময় ভাষা পরিবর্তন করুন।',
    reg_f3_title:'সব ডিভাইসে কাজ করে',               reg_f3_text:'ডেস্কটপ, মোবাইল, অফলাইন — যেকোনো জায়গা থেকে আপনার ডেটা।',
    reg_f4_title:'Google Drive ব্যাকআপ',              reg_f4_text:'প্রতিদিন আপনার Google Drive-এ অটো-ব্যাকআপ — বিনামূল্যে।',
    // Forgot password
    fp_f1_title:'নিরাপদ পাসওয়ার্ড পুনরুদ্ধার', fp_f1_text:'অ্যাকাউন্ট সুরক্ষায় ইন্ডাস্ট্রি-স্ট্যান্ডার্ড OTP যাচাইকরণ।',
    fp_f2_title:'ইমেইলে OTP',                   fp_f2_text:'আপনার নিবন্ধিত ইমেইলে ভেরিফিকেশন কোড পাঠানো হবে।',
    fp_f3_title:'SMS-এ OTP',                    fp_f3_text:'অথবা আপনার নিবন্ধিত মোবাইল নম্বর দিয়ে যাচাই করুন।',
    fp_f4_title:'আপনার ডেটা নিরাপদ',           fp_f4_text:'পুনরুদ্ধারের সময় আপনার সব লেনদেন ও ওয়ালেট সুরক্ষিত থাকবে।',
    // Dashboard budget buttons
    bgt_set_manual_btn:'নিজে নির্ধারণ করুন',
    // Admin
    admin_title:'অ্যাডমিন প্যানেল', admin_users:'ব্যবহারকারী', admin_sales:'বিক্রয়',
    admin_categories:'ক্যাটাগরি', admin_announcements:'বিজ্ঞপ্তি',
    admin_gift_credits:'ক্রেডিট উপহার', admin_all_users:'সব ব্যবহারকারী',
    admin_active_users:'সক্রিয় ব্যবহারকারী', admin_inactive_users:'নিষ্ক্রিয় (৭+ দিন)',
    admin_total_txns:'মোট লেনদেন',
    admin_last_login:'সর্বশেষ লগইন', admin_ban_user:'ব্যান করুন', admin_unban_user:'ব্যান তুলে নিন',
    admin_ban_lifetime:'আজীবন ব্যান', admin_ban_temp:'সাময়িক ব্যান',
    admin_ban_days:'দিন', admin_ban_reason:'কারণ', admin_ban_confirm:'ব্যান নিশ্চিত করুন',
    admin_id_lifetime:'আইডি আজীবনের জন্য সংরক্ষিত',
    err_banned_lifetime:'আপনার অ্যাকাউন্টটি স্থায়ীভাবে ব্যান করা হয়েছে। অ্যাডমিনের সাথে যোগাযোগ করুন।',
    err_banned_temp:'আপনার অ্যাকাউন্টটি সাময়িকভাবে স্থগিত করা হয়েছে। এটি শেষ হবে: ',
    err_deleted:'এই অ্যাকাউন্টটি মুছে ফেলা হয়েছে। অ্যাডমিনের সাথে যোগাযোগ করুন।',
  }
};

// ── STATE ─────────────────────────────────
// User-specific storage keys — keeps each user's data isolated
function _userKey(base) {
  const u = JSON.parse(localStorage.getItem('hisab_user') || 'null');
  if (!u || !u.username) return base;
  return base + '_' + u.username;
}

const State = {
  lang: localStorage.getItem('hisab_lang') || 'en',
  theme: localStorage.getItem('hisab_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  user: JSON.parse(localStorage.getItem('hisab_user') || 'null'),
  credits: parseInt(localStorage.getItem(_userKey('hisab_credits')) || '150'),
  transactions: JSON.parse(localStorage.getItem(_userKey('hisab_txns')) || '[]'),
  wallets: JSON.parse(localStorage.getItem(_userKey('hisab_wallets')) || JSON.stringify([
    { id: 'cash',  name_en: 'Cash',         name_bn: 'নগদ',                  icon: '💵', balance: 0 },
    { id: 'bank',  name_en: 'Bank Account', name_bn: 'ব্যাংক অ্যাকাউন্ট',  icon: '🏦', balance: 0 },
    { id: 'debit', name_en: 'Debit Card',   name_bn: 'ডেবিট কার্ড',         icon: '💳', balance: 0 },
  ])),
  income_cats: JSON.parse(localStorage.getItem(_userKey('hisab_income_cats')) || JSON.stringify([
    { id: 'salary', en: 'Salary', bn: 'বেতন' },
    { id: 'business', en: 'Business', bn: 'ব্যবসা' },
    { id: 'loan_from', en: 'Loan from Others', bn: 'অন্যের কাছ থেকে ঋণ' },
    { id: 'gift', en: 'Gift', bn: 'উপহার' },
    { id: 'savings', en: 'Savings', bn: 'সঞ্চয়' },
    { id: 'others', en: 'Others', bn: 'অন্যান্য' },
  ])),
  expense_cats: JSON.parse(localStorage.getItem(_userKey('hisab_expense_cats')) || JSON.stringify([
    { id: 'rent', en: 'House Rent', bn: 'বাড়িভাড়া' },
    { id: 'conv', en: 'Conveyance', bn: 'যাতায়াত' },
    { id: 'food', en: 'Fooding', bn: 'খাবার' },
    { id: 'travel', en: 'Travelling', bn: 'ভ্রমণ' },
    { id: 'medicine', en: 'Medicine', bn: 'ওষুধ' },
    { id: 'entertainment', en: 'Entertainment', bn: 'বিনোদন' },
    { id: 'others', en: 'Others', bn: 'অন্যান্য' },
  ])),
  budgets: JSON.parse(localStorage.getItem(_userKey('hisab_budgets')) || '{}'),
  notifications: JSON.parse(localStorage.getItem(_userKey('hisab_notifications')) || '[]'),
};

// ── HELPERS ───────────────────────────────
const t = (key) => LANG[State.lang][key] || LANG['en'][key] || key;
const fmt = (n) => '৳ ' + Number(n).toLocaleString('en-BD');
const today = () => new Date().toISOString().split('T')[0];
// User-specific saveState for txns, wallets, credits — other keys remain global
const _userSpecificKeys = ['txns', 'wallets', 'credits', 'budgets', 'income_cats', 'expense_cats', 'notifications'];
const saveState = (key, val) => {
  const storageKey = _userSpecificKeys.includes(key)
    ? _userKey('hisab_' + key)
    : 'hisab_' + key;
  localStorage.setItem(storageKey, JSON.stringify(val));
};

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
    <div id="${hintId}" style="font-size:12px;color:var(--text-muted);margin-top:5px;">${(typeof State!=='undefined'&&State.lang==='bn')?`${selected.name}-এর জন্য ${selected.digits}-সংখ্যার মোবাইল নম্বর দিন`:`Enter ${selected.digits}-digit mobile number for ${selected.name}`}</div>
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

  const _bn = (typeof State !== 'undefined' && State.lang === 'bn');
  const hintEl = document.getElementById(containerId + '-hint');
  if (hintEl) hintEl.textContent = _bn
    ? `${c.name}-এর জন্য ${c.digits}-সংখ্যার মোবাইল নম্বর দিন`
    : `Enter ${c.digits}-digit mobile number for ${c.name}`;

  const errEl = document.getElementById(containerId + '-err');
  if (errEl) { errEl.textContent = _bn ? `${c.name}-এর জন্য মোবাইল নম্বরের ফরম্যাট সঠিক নয়।` : `Invalid mobile number format for ${c.name}.`; errEl.classList.remove('show'); }

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
  const newTheme = State.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  
  // Smooth icon transition
  document.querySelectorAll('.theme-toggle-icon').forEach(el => {
    el.style.transform = 'rotate(360deg) scale(0)';
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = newTheme === 'dark' ? '☀️' : '🌙';
      el.style.transform = 'rotate(0deg) scale(1)';
      el.style.opacity = '1';
    }, 200);
  });
}

// ── LANGUAGE ──────────────────────────────
function setLanguage(lang) {
  // Always update global State and localStorage
  State.lang = lang;
  localStorage.setItem('hisab_lang', lang);

  // Set html lang attribute
  document.documentElement.setAttribute('lang', lang === 'bn' ? 'bn' : 'en');

  // Add a temporary class to body for smooth transition if needed
  document.body.classList.add('lang-changing');

  // 1. Update data-t elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const translation = (LANG[lang] && LANG[lang][key]) || (LANG['en'] && LANG['en'][key]);
    if (translation) {
      el.textContent = translation;
    }
  });

  // 2. Update data-t-ph placeholder elements
  document.querySelectorAll('[data-t-ph]').forEach(el => {
    const key = el.getAttribute('data-t-ph');
    const translation = (LANG[lang] && LANG[lang][key]) || (LANG['en'] && LANG['en'][key]);
    if (translation) {
      el.placeholder = translation;
    }
  });

  // 3. Update data-t-title title elements
  document.querySelectorAll('[data-t-title]').forEach(el => {
    const key = el.getAttribute('data-t-title');
    const translation = (LANG[lang] && LANG[lang][key]) || (LANG['en'] && LANG['en'][key]);
    if (translation) {
      el.title = translation;
    }
  });

  // 4. Active button highlight
  document.querySelectorAll('.lang-btn-switch').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // 3b. Update sidebar credits sub-label if not privileged
  if (!isPrivilegedUser()) {
    document.querySelectorAll('.sidebar-credits-sub').forEach(el => {
      if (!el.hasAttribute('data-t')) {
        const subText = lang === 'bn' ? 'বিজ্ঞাপন দেখে আরও অর্জন করুন' : 'Watch ads to earn more';
        el.textContent = subText;
      }
    });
  }

  // 4. Re-render all dynamic components that use State.lang
  const renderFunctions = [
    'renderWallets','renderTxnTable','renderStats','renderCatCards',
    'renderIncomeBars','renderIncomeTrend','renderIncomeTable',
    'renderExpStats','renderExpCatCards','renderExpBars','renderExpTrend','renderExpenseTable',
    'renderWalletTypeList','renderWalletTxns',
    'renderBudgetProgress','renderBudgetChart',
    'renderAll','renderYearlySummary',
    'renderCreditHistory','renderAllTxns','renderUsersTable',
    'renderSalesHistory','renderAdminCategories',
  ];

  // Optimization: Debounce multiple re-renders
  if (window._langTimer) clearTimeout(window._langTimer);
  window._langTimer = setTimeout(() => {
    renderFunctions.forEach(fn => { 
      if (typeof window[fn] === 'function') {
        try { window[fn](); } catch(e) { console.warn(`Failed to re-render ${fn}:`, e); }
      } 
    });
    // 5. Call page-specific applyLang
    if (typeof window.applyLang === 'function') window.applyLang(lang);
    
    document.body.classList.remove('lang-changing');
  }, 10);
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
  // ── Tag every transaction with the logged-in user ──
  if (State.user && !txn.username) {
    txn.username = State.user.username;
  }
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
  // ── Credit log ──
  // Detect type from reason string for better icon
  const _txnType = reason.toLowerCase().includes('ai') ? 'ai'
    : reason.toLowerCase().includes('report') ? 'report'
    : reason.toLowerCase().includes('budget') ? 'budget'
    : reason.toLowerCase().includes('category') ? 'budget'
    : reason.toLowerCase().includes('wallet') ? 'budget'
    : 'transaction';
  _writeCreditLog({ type: _txnType, amount: -amount, label: reason, note: reason });
  return true;
}

function _writeCreditLog(entry) {
  if (!State.user || isPrivilegedUser()) return;
  const key = 'hisab_credit_log_' + State.user.username;
  const log = JSON.parse(localStorage.getItem(key) || '[]');
  log.unshift({ id: Date.now(), timestamp: new Date().toISOString(), ...entry });
  if (log.length > 500) log.splice(500);
  localStorage.setItem(key, JSON.stringify(log));
}

function addCredits(amount, reason) {
  if (isPrivilegedUser()) return;
  State.credits += amount;
  saveState('credits', State.credits);
  showToast('🎉', 'Credits Earned!', `+${amount} credits: ${reason}`);
  updateCreditDisplay();
  // ── Credit log ──
  const _addType = reason.toLowerCase().includes('gift') ? 'gift'
    : reason.toLowerCase().includes('ad') ? 'ad'
    : reason.toLowerCase().includes('bonus') ? 'signup'
    : reason.toLowerCase().includes('refund') ? 'refund'
    : 'other_add';
  _writeCreditLog({ type: _addType, amount: +amount, label: reason, note: reason });
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
  if (user.deleted === true) return { error: t('err_deleted') };
  
  // ── BAN CHECK ──
  if (user.banned === true) {
    if (user.banType === 'lifetime') {
      return { error: t('err_banned_lifetime') };
    } else if (user.banType === 'temporary' && user.banExpiry) {
      const expiry = new Date(user.banExpiry);
      if (new Date() < expiry) {
        return { error: t('err_banned_temp') + expiry.toLocaleString() };
      } else {
        // Temporary ban expired — auto unban
        user.banned = false;
        user.banType = null;
        user.banExpiry = null;
        localStorage.setItem('hisab_users', JSON.stringify(users));
      }
    } else {
      // Legacy ban (no type specified) — treat as lifetime
      return { error: t('err_banned_lifetime') };
    }
  }

  if (user.password !== btoa(password)) return { error: 'Wrong password' };
  State.user = user;
  saveState('user', user);
  const now = Date.now();
  const nowISO = new Date().toISOString();
  localStorage.setItem('hisab_last_login', now);
  localStorage.setItem('hisab_last_login_' + user.username, now);
  // ── Merge global categories from Firestore on login ──
  _mergeGlobalCatsFromFirestore(user.username);
  // Update lastSeen and lastLogin on user record
  const allUsers = JSON.parse(localStorage.getItem('hisab_users') || '[]');
  const uIdx = allUsers.findIndex(u => u.username === user.username);
  if (uIdx >= 0) { 
    allUsers[uIdx].lastSeen = nowISO; 
    allUsers[uIdx].lastLogin = nowISO;
    localStorage.setItem('hisab_users', JSON.stringify(allUsers)); 
  }
  logActivity(user.username, 'login', 'Logged in');

  // ── Background: Firestore এ lastSeen & lastLogin update করো ──
  (async () => {
    try {
      const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
      const { getFirestore, doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const app = getApps().length ? getApps()[0] : initializeApp({
        apiKey: "AIzaSyDerOMIIPh660Wej7OYy8i7oUXbKC44wW4",
        authDomain: "hisab-4-u.firebaseapp.com",
        projectId: "hisab-4-u",
        storageBucket: "hisab-4-u.firebasestorage.app",
        messagingSenderId: "957694095044",
        appId: "1:957694095044:web:1649995ac9734d4d062391"
      });
      const db = getFirestore(app);
      await updateDoc(doc(db, 'users', String(user.username)), {
        lastSeen: nowISO,
        lastLogin: nowISO
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
    if (foundUser.deleted === true) return { error: t('err_deleted') };
    
    // ── BAN CHECK ──
    if (foundUser.banned === true) {
      if (foundUser.banType === 'lifetime') {
        return { error: t('err_banned_lifetime') };
      } else if (foundUser.banType === 'temporary' && foundUser.banExpiry) {
        const expiry = new Date(foundUser.banExpiry);
        if (new Date() < expiry) {
          return { error: t('err_banned_temp') + expiry.toLocaleString() };
        }
        // If expired, we don't auto-unban here since we are just restoring, 
        // the actual unban will happen in loginUser if they proceed.
      } else {
        return { error: t('err_banned_lifetime') };
      }
    }

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
    banned: false,
    deleted: false,
    lastLogin: null,
  };
  users.push(user);
  localStorage.setItem('hisab_users', JSON.stringify(users));
  State.user = user;
  saveState('user', user);
  State.credits = 100;
  saveState('credits', 100); // saves to user-specific key via saveState
  logActivity(user.username, 'register', 'Account created — 100 credits granted');
  // Credit log — sign-up bonus
  const _regKey = 'hisab_credit_log_' + user.username;
  localStorage.setItem(_regKey, JSON.stringify([{ id: Date.now(), timestamp: new Date().toISOString(), type:'signup', amount:100, label:'Sign-up Bonus', note:'Welcome gift — 100 free credits' }]));

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
  window.location.href = '/';
}

// ── APP WORKING POPUP ─────────────────────
function showAppWorkingPopup() {
  const modalId = 'app-working-modal';
  if (document.getElementById(modalId)) {
    openModal(modalId);
    return;
  }

  const modal = document.createElement('div');
  modal.id = modalId;
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal" style="text-align:center;max-width:400px;padding:40px 30px;">
      <div style="font-size:60px;margin-bottom:20px;animation:appBounce 2s ease-in-out infinite;">📱</div>
      <h2 style="margin-bottom:12px;color:var(--text-primary);" data-t="app_working_title">${t('app_working_title')}</h2>
      <p style="color:var(--text-muted);line-height:1.6;margin-bottom:24px;" data-t="app_working_msg">${t('app_working_msg')}</p>
      <button class="btn btn-primary btn-full" onclick="closeModal('${modalId}')" data-t="app_working_btn">${t('app_working_btn')}</button>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Inject animation if not exists
  if (!document.getElementById('app-anim-style')) {
    const style = document.createElement('style');
    style.id = 'app-anim-style';
    style.textContent = `
      @keyframes appBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
    `;
    document.head.appendChild(style);
  }

  openModal(modalId);
}

function isLoggedIn() {
  return State.user !== null;
}

function requireLogin() {
  if (!isLoggedIn()) {
    window.location.href = '/login';
    return false;
  }
  // Check session expiry — 30 days if "keep me logged in", else 7 days
  const lastLogin  = parseInt(localStorage.getItem('hisab_last_login') || '0');
  const keepLogin  = localStorage.getItem('hisab_keep_login') === '1';
  
  // ── UPDATED SESSION LOGIC ──
  // If keepLogin is true: 30 days (30 * 24 * 60 * 60 * 1000)
  // If keepLogin is false: 7 days (7 * 24 * 60 * 60 * 1000)
  const expiry = keepLogin ? 2592000000 : 6048000000 / 10; // wait, 7 days = 604800000
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  const sessionDuration = keepLogin ? thirtyDays : sevenDays;

  if (lastLogin > 0 && Date.now() - lastLogin > sessionDuration) {
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

  // Re-apply language after DOM is fully ready (for pages that build components in DOMContentLoaded)
  document.addEventListener('DOMContentLoaded', () => {
    // Force re-render on load to ensure dynamic parts are translated
    State.lang = localStorage.getItem('hisab_lang') || 'en';
    setLanguage(State.lang);
  });

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
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        // For mobile, we want to close the menu first, then navigate.
        // The small delay gives the menu time to animate out.
        e.preventDefault();
        closeMobileMenu();
        setTimeout(() => { window.location.href = link.href; }, 200);
      }
      // On desktop, the link will just work normally.
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
  const path = window.location.pathname.replace(/\/$/, '').split('/').pop().replace('.html', '');
  if (protectedPages.includes(path)) {
    // DOM ready হওয়ার পরে check করো
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => requireLogin());
    } else {
      requireLogin();
    }
  }
})();

// ── Merge global categories/wallets from Firestore ──
// Called after every login to ensure user has admin-added items
/**
 * ── SYNC GLOBAL OPTIONS FROM FIRESTORE ──
 * This ensures that admin-added categories/wallets appear for all users.
 * It also updates metadata (names/icons) if the admin edited them.
 */
async function _mergeGlobalCatsFromFirestore(username) {
  try {
    const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const app = getApps().length ? getApps()[0] : initializeApp({
      apiKey:"AIzaSyDerOMIIPh660Wej7OYy8i7oUXbKC44wW4", authDomain:"hisab-4-u.firebaseapp.com",
      projectId:"hisab-4-u", storageBucket:"hisab-4-u.firebasestorage.app",
      messagingSenderId:"957694095044", appId:"1:957694095044:web:1649995ac9734d4d062391"
    });
    const db = getFirestore(app);
    
    // 1. Fetch Global Categories
    const catSnap = await getDoc(doc(db, 'global_config', 'categories'));
    if (catSnap.exists()) {
      const global = catSnap.data();
      ['income', 'expense'].forEach(type => {
        const localKey = `hisab_${type}_cats_${username}`;
        const localCats = JSON.parse(localStorage.getItem(localKey) || '[]');
        const globalCats = global[`${type}_cats`] || [];
        
        globalCats.forEach(gCat => {
          const lIdx = localCats.findIndex(c => c.id === gCat.id);
          if (lIdx >= 0) {
            // Update metadata but keep user custom fields if any
            localCats[lIdx] = { ...localCats[lIdx], ...gCat };
          } else {
            // Add new global category
            localCats.push(gCat);
          }
        });
        localStorage.setItem(localKey, JSON.stringify(localCats));
        if (State.user?.username === username) {
          if (type === 'income') State.income_cats = localCats;
          else State.expense_cats = localCats;
        }
      });
    }

    // 2. Fetch Global Wallets
    const walletSnap = await getDoc(doc(db, 'global_config', 'wallets'));
    if (walletSnap.exists()) {
      const global = walletSnap.data();
      const localKey = `hisab_wallets_${username}`;
      const localWallets = JSON.parse(localStorage.getItem(localKey) || '[]');
      const globalWallets = global.default_wallets || [];

      globalWallets.forEach(gW => {
        const lIdx = localWallets.findIndex(w => w.id === gW.id);
        if (lIdx >= 0) {
          // Update metadata (name, icon) but KEEP balance and user settings
          const { balance, ...metadata } = gW; 
          localWallets[lIdx] = { ...localWallets[lIdx], ...metadata };
        } else {
          // Add new global wallet with 0 balance
          localWallets.push({ ...gW, balance: 0 });
        }
      });
      localStorage.setItem(localKey, JSON.stringify(localWallets));
      if (State.user?.username === username) State.wallets = localWallets;
    }
    console.log('✅ Global options synced for:', username);
  } catch(e) { console.warn('Global sync failed:', e); }
}
