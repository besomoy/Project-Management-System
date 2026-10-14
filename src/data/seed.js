/* ---------- seed data ---------- */
import { dOff, minsAgo, uid } from '../core/utils.js';

export function seedBesomoyStudio() {
  const members = [
    {
      id: 'm1',
      name: 'Arman Hossain Somoy',
      email: 'hello@besomoystudio.com',
      role: 'Owner',
      team: 'product',
      title: 'Head of Product',
      c: '#5A67D8',
      status: 'active',
      last: 0,
      tz: 'San Francisco',
    },
    {
      id: 'm2',
      name: 'Sarah Chen',
      email: 'sarah@besomoystudio.com',
      role: 'Admin',
      team: 'design',
      title: 'Design Lead',
      c: '#C54B78',
      status: 'active',
      last: 4,
      tz: 'New York',
    },
    {
      id: 'm3',
      name: 'John Carter',
      email: 'john@besomoystudio.com',
      role: 'Member',
      team: 'eng',
      title: 'Frontend Engineer',
      c: '#3B82C4',
      status: 'active',
      last: 22,
      tz: 'London',
    },
    {
      id: 'm4',
      name: 'Emma Wilson',
      email: 'emma@besomoystudio.com',
      role: 'Member',
      team: 'design',
      title: 'Product Designer',
      c: '#23918A',
      status: 'active',
      last: 9,
      tz: 'Berlin',
    },
    {
      id: 'm5',
      name: 'Priya Patel',
      email: 'priya@besomoystudio.com',
      role: 'Member',
      team: 'mkt',
      title: 'Content Strategist',
      c: '#C48A1E',
      status: 'active',
      last: 95,
      tz: 'Toronto',
    },
    {
      id: 'm6',
      name: 'Marcus Lee',
      email: 'marcus@besomoystudio.com',
      role: 'Member',
      team: 'eng',
      title: 'Backend Engineer',
      c: '#8662C9',
      status: 'active',
      last: 240,
      tz: 'Singapore',
    },
    {
      id: 'm7',
      name: 'Lena Fischer',
      email: 'lena@besomoystudio.com',
      role: 'Admin',
      team: 'product',
      title: 'QA Lead',
      c: '#3D8E5F',
      status: 'active',
      last: 1500,
      tz: 'Munich',
    },
    {
      id: 'm8',
      name: 'Diego Alvarez',
      email: 'diego@freelance.io',
      role: 'Guest',
      team: 'mkt',
      title: 'Freelance Copywriter',
      c: '#C0612B',
      status: 'invited',
      last: null,
      tz: 'Madrid',
    },
  ];
  const projects = [
    {
      id: 'p1',
      key: 'WEB',
      name: 'Website Redesign',
      icon: 'globe',
      color: 'indigo',
      status: 'active',
      team: 'design',
      lead: 'm2',
      due: dOff(24),
      start: dOff(-30),
      fav: true,
      members: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7'],
      desc: 'Rebuild besomoystudio.com with a clearer information architecture, a responsive component library, and a faster CMS-driven blog.',
      milestones: [
        { name: 'Wireframes signed off', date: dOff(2) },
        { name: 'Dev handoff', date: dOff(14) },
        { name: 'Public launch', date: dOff(24) },
      ],
      last: 12,
    },
    {
      id: 'p2',
      key: 'MOB',
      name: 'Mobile App',
      icon: 'smartphone',
      color: 'blue',
      status: 'active',
      team: 'eng',
      lead: 'm3',
      due: dOff(52),
      start: dOff(-45),
      fav: true,
      members: ['m1', 'm3', 'm4', 'm6', 'm7'],
      desc: 'Native iOS and Android client for field teams with offline sync, push notifications, and biometric sign-in.',
      milestones: [
        { name: 'Beta build', date: dOff(9) },
        { name: 'App Store submission', date: dOff(45) },
      ],
      last: 48,
    },
    {
      id: 'p3',
      key: 'MKT',
      name: 'Marketing Campaign',
      icon: 'megaphone',
      color: 'rose',
      status: 'planning',
      team: 'mkt',
      lead: 'm5',
      due: dOff(40),
      start: dOff(-10),
      fav: false,
      members: ['m1', 'm4', 'm5', 'm7', 'm8'],
      desc: 'Q4 awareness campaign across paid social, email, and a launch webinar targeting operations leads.',
      milestones: [
        { name: 'Creative lock', date: dOff(12) },
        { name: 'Campaign live', date: dOff(21) },
      ],
      last: 130,
    },
    {
      id: 'p4',
      key: 'LCH',
      name: 'Product Launch',
      icon: 'rocket',
      color: 'amber',
      status: 'risk',
      team: 'product',
      lead: 'm1',
      due: dOff(12),
      start: dOff(-21),
      fav: false,
      members: ['m1', 'm2', 'm3', 'm5', 'm7'],
      desc: 'Coordinate the Workflows 2.0 launch: pricing, docs, press, and sales enablement across teams.',
      milestones: [
        { name: 'Go / no-go', date: dOff(11) },
        { name: 'Launch day', date: dOff(12) },
      ],
      last: 35,
    },
    {
      id: 'p5',
      key: 'DS',
      name: 'Design System',
      icon: 'component',
      color: 'violet',
      status: 'active',
      team: 'design',
      lead: 'm2',
      due: dOff(70),
      start: dOff(-60),
      fav: false,
      members: ['m2', 'm3', 'm4'],
      desc: 'Shared tokens, components, and documentation used by web and mobile teams.',
      milestones: [{ name: 'v2 tokens', date: dOff(3) }],
      last: 300,
    },
    {
      id: 'p6',
      key: 'CP',
      name: 'Customer Portal',
      icon: 'building-2',
      color: 'teal',
      status: 'hold',
      team: 'eng',
      lead: 'm6',
      due: dOff(90),
      start: dOff(-5),
      fav: false,
      members: ['m6', 'm7'],
      private: true,
      desc: 'Self-serve billing and support portal for enterprise customers. Restricted during contract review.',
      milestones: [],
      last: 2880,
    },
    {
      id: 'p7',
      key: 'MW',
      name: 'Marketing Website',
      icon: 'layout-grid',
      color: 'green',
      status: 'complete',
      team: 'mkt',
      lead: 'm5',
      due: dOff(-18),
      start: dOff(-80),
      fav: false,
      members: ['m1', 'm3', 'm5'],
      desc: 'Launch site for the spring release. Shipped and handed to the web team for maintenance.',
      milestones: [],
      last: 26000,
    },
  ];
  let n = 0;
  const T = [];
  const t = (p, title, status, a, prio, due, labels = [], x = {}) => {
    const proj = projects.find(q => q.id === p);
    const count = T.filter(q => q.project === p).length + 1;
    T.push(
      Object.assign(
        {
          id: 't' + ++n,
          key: proj.key + '-' + (100 + count * 3),
          project: p,
          title,
          status,
          assignee: a,
          priority: prio,
          due: due == null ? null : dOff(due),
          start: due == null ? null : dOff(due - (x.len || 4)),
          labels,
          subtasks: [],
          attachments: [],
          deps: [],
          desc: '',
          estimate: x.est || null,
          created: minsAgo(60 * 24 * (x.age || 12)),
          updated: minsAgo(60 * (x.upd || 30)),
          order: n,
          fav: false,
          recur: null,
        },
        x,
      ),
    );
  };
  // Website Redesign
  t('p1', 'Audit existing navigation', 'done', 'm2', 'high', -12, ['research'], { est: '2d', len: 5, age: 28 });
  t('p1', 'Summarize stakeholder interviews', 'done', 'm1', 'medium', -9, ['research'], { est: '1d', age: 26 });
  t('p1', 'Create homepage wireframes', 'review', 'm2', 'high', 1, ['design'], {
    est: '3d',
    len: 7,
    fav: true,
    desc: '<p>Low-fidelity wireframes for the new homepage covering <b>desktop, tablet, and mobile</b> breakpoints.</p><ul><li>Hero with product value proposition</li><li>Customer logos and proof points</li><li>Feature overview linking to product pages</li></ul><p>Reference the navigation audit for IA decisions.</p>',
    subtasks: [
      { id: 's1', title: 'Desktop layout', done: true },
      { id: 's2', title: 'Tablet layout', done: true },
      { id: 's3', title: 'Mobile layout', done: true },
      { id: 's4', title: 'Annotate interactions', done: false },
    ],
    attachments: [
      { id: 'a1', name: 'homepage-wireframes-v3.fig', type: 'fig', size: '4.2 MB', by: 'm2', at: minsAgo(300) },
      { id: 'a2', name: 'nav-audit-findings.pdf', type: 'pdf', size: '860 KB', by: 'm2', at: minsAgo(8000) },
    ],
  });
  t('p1', 'Finalize navigation', 'progress', 'm3', 'high', 0, ['design', 'frontend'], {
    est: '2d',
    len: 4,
    subtasks: [
      { id: 's5', title: 'Primary nav structure', done: true },
      { id: 's6', title: 'Mega-menu content', done: false },
      { id: 's7', title: 'Mobile drawer behavior', done: false },
    ],
  });
  t('p1', 'Design responsive navigation', 'progress', 'm4', 'medium', 3, ['design'], {
    est: '3d',
    len: 6,
    subtasks: [
      { id: 's8', title: 'Breakpoint rules', done: true },
      { id: 's9', title: 'Sticky header states', done: false },
    ],
  });
  t('p1', 'Prepare design system tokens', 'todo', 'm1', 'medium', 6, ['design'], { est: '2d', len: 4 });
  t('p1', 'Review responsive layouts', 'todo', 'm4', 'medium', 8, ['qa', 'design'], { est: '1d', len: 3 });
  t('p1', 'Prepare developer handoff', 'todo', 'm2', 'high', 14, ['frontend'], { est: '2d', len: 4, deps: ['t3', 't5'] });
  t('p1', 'Design mobile onboarding', 'progress', 'm4', 'urgent', -1, ['design'], {
    est: '3d',
    len: 6,
    subtasks: [
      { id: 's10', title: 'Welcome screens', done: true },
      { id: 's11', title: 'Permission prompts', done: false },
      { id: 's12', title: 'Empty states', done: false },
    ],
  });
  t('p1', 'Write homepage copy', 'backlog', 'm5', 'low', 18, ['content'], { est: '2d' });
  t('p1', 'Set up analytics events', 'backlog', 'm6', 'medium', 20, ['backend', 'growth'], { est: '1d' });
  t('p1', 'Accessibility audit of templates', 'backlog', 'm7', 'high', 22, ['qa'], { est: '2d' });
  t('p1', 'Build hero component', 'todo', 'm3', 'medium', 10, ['frontend'], { est: '2d', len: 3, deps: ['t3'] });
  t('p1', 'Image optimization pipeline', 'review', 'm6', 'low', 2, ['backend'], { est: '1d', len: 5 });
  t('p1', 'Weekly design sync notes', 'todo', 'm1', 'low', 2, ['content'], { recur: 'Weekly', est: '30m', len: 0 });
  t('p1', 'Migrate blog to new CMS', 'backlog', 'm3', 'medium', 28, ['backend'], { est: '5d', len: 8 });
  t('p1', 'Footer and legal pages', 'done', 'm5', 'low', -5, ['frontend'], { est: '1d' });
  t('p1', 'Fix broken anchor links on pricing', 'done', 'm3', 'medium', -3, ['bug'], { est: '2h', len: 1 });
  // Mobile App
  t('p2', 'Onboarding flow prototype', 'progress', 'm4', 'high', 4, ['design'], { est: '3d', len: 6 });
  t('p2', 'Push notification service', 'progress', 'm6', 'high', 6, ['backend'], { est: '5d', len: 9 });
  t('p2', 'Offline mode sync', 'todo', 'm3', 'urgent', 5, ['frontend', 'backend'], { est: '8d', len: 10, deps: ['t20'] });
  t('p2', 'App Store screenshots', 'backlog', 'm5', 'low', 40, ['content'], { est: '1d' });
  t('p2', 'Crash reporting setup', 'done', 'm6', 'medium', -8, ['backend'], { est: '1d' });
  t('p2', 'Biometric sign-in', 'review', 'm3', 'high', 2, ['frontend'], { est: '3d', len: 6 });
  t('p2', 'Settings screen redesign', 'todo', 'm4', 'medium', 9, ['design'], { est: '2d' });
  t('p2', 'Triage beta tester feedback', 'todo', 'm1', 'medium', 0, ['research'], { est: '4h', len: 1, recur: 'Weekly' });
  t('p2', 'Crash on Android 12 when rotating', 'todo', 'm3', 'urgent', 1, ['bug'], { est: '1d', len: 1 });
  // Marketing Campaign
  t('p3', 'Campaign brief', 'done', 'm5', 'medium', -6, ['content'], { est: '1d' });
  t('p3', 'Landing page copy', 'progress', 'm5', 'medium', 4, ['content'], { est: '2d' });
  t('p3', 'Paid social creatives', 'todo', 'm4', 'high', 7, ['design', 'growth'], { est: '3d', len: 5 });
  t('p3', 'Email nurture sequence', 'todo', 'm8', 'medium', 9, ['content'], { est: '2d' });
  t('p3', 'Influencer outreach list', 'backlog', 'm7', 'low', null, ['growth']);
  t('p3', 'Launch webinar deck', 'todo', 'm1', 'medium', 15, ['content'], { est: '2d' });
  t('p3', 'Budget approval', 'review', 'm1', 'urgent', -2, [], { est: '1h', len: 1 });
  // Product Launch
  t('p4', 'Launch readiness checklist', 'progress', 'm1', 'urgent', 3, ['qa'], {
    est: '1d',
    len: 10,
    subtasks: [
      { id: 's20', title: 'Docs published', done: true },
      { id: 's21', title: 'Pricing live', done: false },
      { id: 's22', title: 'Support trained', done: false },
      { id: 's23', title: 'Status page updated', done: true },
    ],
  });
  t('p4', 'Pricing page update', 'todo', 'm2', 'high', 6, ['design', 'frontend'], { est: '2d' });
  t('p4', 'Press release draft', 'review', 'm5', 'medium', 1, ['content'], { est: '1d' });
  t('p4', 'Sales enablement docs', 'todo', 'm7', 'medium', 8, ['content'], { est: '2d' });
  t('p4', 'Release notes', 'backlog', 'm3', 'low', 11, ['content'], { est: '4h' });
  t('p4', 'Go / no-go meeting', 'todo', 'm1', 'high', 11, [], { est: '1h', len: 0 });
  // Design System
  t('p5', 'Color tokens v2', 'done', 'm2', 'high', -4, ['design'], { est: '3d' });
  t('p5', 'Button component audit', 'progress', 'm2', 'medium', 5, ['design', 'frontend'], { est: '2d' });
  t('p5', 'Form field states', 'todo', 'm4', 'medium', 12, ['design'], { est: '3d' });
  t('p5', 'Icon library cleanup', 'backlog', 'm4', 'low', null, ['design']);
  t('p5', 'Documentation site', 'todo', 'm3', 'medium', 20, ['frontend'], { est: '5d', len: 8 });
  t('p5', 'Dark mode palette', 'review', 'm2', 'high', 2, ['design'], { est: '2d' });
  // Marketing Website (complete)
  t('p7', 'Launch site QA', 'done', 'm3', 'high', -20, ['qa']);
  t('p7', 'Spring release hero video', 'done', 'm5', 'medium', -24, ['content']);
  // Customer portal (restricted)
  t('p6', 'Billing API contract', 'todo', 'm6', 'high', 30, ['backend']);

  const tk = id => T.find(x => x.id === id);
  // completed metadata
  T.filter(x => x.status === 'done').forEach((x, i) => (x.completedAt = minsAgo(60 * (6 + i * 17))));
  const comments = [
    {
      id: 'c1',
      task: 't3',
      by: 'm4',
      at: minsAgo(260),
      text: 'Tablet layout feels crowded around the logo strip. Could we drop to four logos under 1024px?',
      re: { '👍': ['m2', 'm3'] },
    },
    { id: 'c2', task: 't3', by: 'm2', at: minsAgo(210), text: 'Good call. Updated in v3 — @Arman Hossain Somoy can you review before Thursday?', re: {} },
    {
      id: 'c3',
      task: 't3',
      by: 'm3',
      at: minsAgo(95),
      text: 'Hero spacing maps cleanly to our 8pt scale. No blockers from engineering.',
      re: { '🎉': ['m2'] },
    },
    { id: 'c4', task: 't4', by: 'm3', at: minsAgo(400), text: "Mega-menu content still pending from marketing. I'll stub it for now.", re: {} },
    { id: 'c5', task: 't4', by: 'm5', at: minsAgo(120), text: '@John Carter content is in the shared doc now — six columns max.', re: { '👍': ['m3'] } },
    { id: 'c6', task: 't9', by: 'm1', at: minsAgo(55), text: 'This slipped past yesterday — @Emma Wilson anything blocking the permission prompts?', re: {} },
    { id: 'c7', task: 't24', by: 'm7', at: minsAgo(700), text: 'Face ID fallback to passcode works on iOS 17; testing Android next.', re: {} },
    { id: 'c8', task: 't34', by: 'm2', at: minsAgo(1500), text: 'Finance needs the channel split before approving.', re: {} },
    {
      id: 'c9',
      task: 't35',
      by: 'm7',
      at: minsAgo(200),
      text: 'Support training moved to Monday. @Arman Hossain Somoy please confirm the status page copy.',
      re: {},
    },
  ];
  const A = (by, verb, task, project, m, extra = '') => ({ id: uid('a'), by, verb, task, project, at: minsAgo(m), extra });
  const activity = [
    A('m2', 'moved', 't3', 'p1', 38, 'to Review'),
    A('m3', 'completed', 't18', 'p1', 90),
    A('m4', 'commented on', 't19', 'p2', 140),
    A('m1', 'changed priority of', 't9', 'p1', 180, 'to Urgent'),
    A('m6', 'added a file to', 't14', 'p1', 260),
    A('m5', 'created', 't30', 'p3', 330),
    A('m2', 'assigned', 't8', 'p1', 420, 'to Sarah Chen'),
    A('m7', 'completed', 't23', 'p2', 1300),
    A('m3', 'moved', 't24', 'p2', 1500, 'to Review'),
    A('m1', 'created project', null, 'p4', 30000),
    A('m2', 'created project', null, 'p1', 43000),
    A('m4', 'completed', 't41', 'p5', 5600),
    A('m5', 'completed', 't17', 'p1', 7200),
  ];
  const notifs = [
    {
      id: 'n1',
      type: 'mention',
      by: 'm2',
      task: 't3',
      text: 'mentioned you in',
      snippet: 'Updated in v3 — @Arman Hossain Somoy can you review before Thursday?',
      at: minsAgo(210),
      read: false,
    },
    { id: 'n2', type: 'assign', by: 'm3', task: 't28', text: 'assigned you', snippet: 'Due today · Medium priority', at: minsAgo(300), read: false },
    {
      id: 'n3',
      type: 'comment',
      by: 'm4',
      task: 't9',
      text: 'commented on',
      snippet: 'Permission prompts need legal review — drafting now.',
      at: minsAgo(40),
      read: false,
    },
    {
      id: 'n4',
      type: 'mention',
      by: 'm7',
      task: 't35',
      text: 'mentioned you in',
      snippet: 'Support training moved to Monday. @Arman Hossain Somoy please confirm the status page copy.',
      at: minsAgo(200),
      read: false,
    },
    { id: 'n5', type: 'update', by: 'm2', task: 't3', text: 'moved to Review', snippet: 'To Do → Review', at: minsAgo(38), read: true },
    {
      id: 'n6',
      type: 'update',
      by: null,
      project: 'p4',
      text: 'Product Launch is at risk',
      snippet: '3 tasks due this week are not started',
      at: minsAgo(600),
      read: false,
    },
    {
      id: 'n7',
      type: 'comment',
      by: 'm2',
      task: 't34',
      text: 'commented on',
      snippet: 'Finance needs the channel split before approving.',
      at: minsAgo(1500),
      read: true,
    },
    { id: 'n8', type: 'assign', by: 'm2', task: 't6', text: 'assigned you', snippet: 'Due in 6 days', at: minsAgo(2900), read: true },
    { id: 'n9', type: 'update', by: 'm3', task: 't18', text: 'completed', snippet: 'Fix broken anchor links on pricing', at: minsAgo(90), read: true },
    { id: 'n10', type: 'update', by: null, task: 't28', text: 'is due today', snippet: 'Triage beta tester feedback', at: minsAgo(20), read: false },
  ];
  const files = [
    { id: 'f1', project: 'p1', name: 'homepage-wireframes-v3.fig', type: 'fig', size: '4.2 MB', by: 'm2', at: minsAgo(300), task: 't3' },
    { id: 'f2', project: 'p1', name: 'nav-audit-findings.pdf', type: 'pdf', size: '860 KB', by: 'm2', at: minsAgo(8000), task: 't3' },
    { id: 'f3', project: 'p1', name: 'brand-photography-set.zip', type: 'zip', size: '128 MB', by: 'm4', at: minsAgo(3000) },
    { id: 'f4', project: 'p1', name: 'hero-exploration.png', type: 'img', size: '2.1 MB', by: 'm4', at: minsAgo(1400) },
    { id: 'f5', project: 'p1', name: 'content-inventory.xlsx', type: 'sheet', size: '310 KB', by: 'm5', at: minsAgo(9000) },
    { id: 'f6', project: 'p1', name: 'sitemap-v2.pdf', type: 'pdf', size: '540 KB', by: 'm1', at: minsAgo(12000) },
    { id: 'f7', project: 'p1', name: 'interview-notes.docx', type: 'doc', size: '96 KB', by: 'm1', at: minsAgo(20000) },
    { id: 'f8', project: 'p1', name: 'analytics-events.json', type: 'code', size: '12 KB', by: 'm6', at: minsAgo(700) },
    { id: 'f9', project: 'p2', name: 'onboarding-flow.fig', type: 'fig', size: '6.8 MB', by: 'm4', at: minsAgo(500) },
    { id: 'f10', project: 'p2', name: 'beta-feedback.xlsx', type: 'sheet', size: '220 KB', by: 'm1', at: minsAgo(900) },
    { id: 'f11', project: 'p3', name: 'campaign-brief.pdf', type: 'pdf', size: '1.1 MB', by: 'm5', at: minsAgo(4000) },
    { id: 'f12', project: 'p4', name: 'launch-plan.docx', type: 'doc', size: '180 KB', by: 'm1', at: minsAgo(6000) },
  ];
  const events = [
    { id: 'e1', title: 'Design review', date: dOff(1), time: '10:00', project: 'p1' },
    { id: 'e2', title: 'Sprint planning', date: dOff(5), time: '09:30', project: 'p2' },
    { id: 'e3', title: 'Launch sync', date: dOff(0), time: '15:00', project: 'p4' },
    { id: 'e4', title: 'Stakeholder demo', date: dOff(9), time: '14:00', project: 'p1' },
    { id: 'e5', title: 'Campaign kickoff', date: dOff(-3), time: '11:00', project: 'p3' },
    { id: 'e6', title: 'Retro', date: dOff(12), time: '16:00', project: 'p2' },
  ];
  const tmp = tk('t3');
  tmp.updated = minsAgo(38);
  return {
    ws: { name: 'Besomoy Studio', url: 'besomoystudio', c: '#1D1C1A', brand: true },
    workspaces: [
      { id: 'w1', name: 'Besomoy Studio', c: '#1D1C1A', plan: 'Team', brand: true },
      { id: 'w2', name: 'Personal', c: '#3D8E5F', plan: 'Free' },
      { id: 'w3', name: 'Acme Labs', c: '#3B82C4', plan: 'Business' },
    ],
    me: 'm1',
    members,
    projects,
    tasks: T,
    comments,
    activity,
    notifs,
    files,
    events,
    projOrder: projects.map(p => p.id),
    savedViews: [{ id: 'v1', project: 'p1', name: 'High priority', type: 'list', filters: [{ f: 'priority', op: 'is', v: ['urgent', 'high'] }] }],
    recentSearches: ['homepage', 'Sarah', 'wireframes'],
    sessions: [
      { id: 'se1', dev: 'MacBook Pro · Chrome', loc: 'San Francisco, US', at: 'Active now', cur: true },
      { id: 'se2', dev: 'iPhone 15 · Besomoy app', loc: 'San Francisco, US', at: '2 hours ago' },
      { id: 'se3', dev: 'Windows · Edge', loc: 'Oakland, US', at: 'Sep 12' },
    ],
    invoices: [
      { id: 'INV-2026-009', date: dOff(-23), amt: '$96.00', st: 'Paid' },
      { id: 'INV-2026-008', date: dOff(-53), amt: '$96.00', st: 'Paid' },
      { id: 'INV-2026-007', date: dOff(-84), amt: '$80.00', st: 'Paid' },
      { id: 'INV-2026-006', date: dOff(-114), amt: '$80.00', st: 'Paid' },
    ],
    tfa: false,
    notifPrefs: {
      email_mention: true,
      email_assign: true,
      email_digest: true,
      email_comment: false,
      push_mention: true,
      push_assign: true,
      push_comment: true,
      push_due: true,
      mention_all: true,
      assign_self: true,
    },
  };
}

export function seed() {
  return seedBesomoyStudio();
}

export const TENANTS_CATALOG = [
  {
    id: 'w1',
    name: 'Besomoy Studio',
    slug: 'besomoystudio',
    url: 'besomoystudio',
    tagline: 'Product & Design Agency',
    color: '#5A67D8',
    c: '#5A67D8',
    plan: 'Enterprise',
    brand: true,
    icon: 'sparkles',
    recommended: true,
    desc: 'Flagship demo workspace with 7 complete projects (board, gantt, table, calendar), 8 team members, and realistic activity logs.',
    membersCount: 8,
    projectsCount: 7,
    isDemo: true,
    defaultUser: { email: 'hello@besomoystudio.com', name: 'Arman Hossain Somoy', role: 'Owner' },
  },
  {
    id: 'w3',
    name: 'Acme Labs',
    slug: 'acmelabs',
    url: 'acmelabs',
    tagline: 'Engineering & Cloud Security',
    color: '#2563EB',
    c: '#2563EB',
    plan: 'Business',
    brand: false,
    icon: 'shield-check',
    recommended: false,
    desc: 'Engineering organization focusing on Core Infrastructure, Zero Trust Auth, and Developer API Platform.',
    membersCount: 4,
    projectsCount: 3,
    isDemo: false,
    defaultUser: { email: 'alex@acmelabs.io', name: 'Alex Rivera', role: 'Admin' },
  },
  {
    id: 'w2',
    name: 'Personal Workspace',
    slug: 'personal',
    url: 'personal',
    tagline: 'Solo Projects & Reading List',
    color: '#10B981',
    c: '#10B981',
    plan: 'Free',
    brand: false,
    icon: 'user',
    recommended: false,
    desc: 'Lightweight personal workspace for individual task planning and note keeping.',
    membersCount: 1,
    projectsCount: 1,
    isDemo: false,
    defaultUser: { email: 'arman@besomoy.me', name: 'Arman H.', role: 'Owner' },
  },
];

export function seedAcmeLabs() {
  const members = [
    {
      id: 'm301',
      name: 'Marcus Lee',
      email: 'marcus@acmelabs.io',
      role: 'Owner',
      team: 'eng',
      title: 'VP Infrastructure',
      c: '#3B82C4',
      status: 'active',
      last: 0,
      tz: 'San Francisco',
    },
    {
      id: 'm302',
      name: 'Sarah Chen',
      email: 'sarah@acmelabs.io',
      role: 'Admin',
      team: 'eng',
      title: 'Principal Architect',
      c: '#C54B78',
      status: 'active',
      last: 12,
      tz: 'New York',
    },
    {
      id: 'm303',
      name: 'John Carter',
      email: 'john@acmelabs.io',
      role: 'Member',
      team: 'eng',
      title: 'Senior SRE',
      c: '#23918A',
      status: 'active',
      last: 45,
      tz: 'Austin',
    },
    {
      id: 'm304',
      name: 'Elena Rostova',
      email: 'elena@acmelabs.io',
      role: 'Member',
      team: 'product',
      title: 'Security & Compliance Lead',
      c: '#C48A1E',
      status: 'active',
      last: 180,
      tz: 'London',
    },
  ];

  const projects = [
    {
      id: 'p31',
      key: 'CORE',
      name: 'Core Platform 2.0',
      icon: 'server',
      color: 'blue',
      status: 'active',
      team: 'eng',
      lead: 'm301',
      due: dOff(30),
      start: dOff(-20),
      fav: true,
      members: ['m301', 'm302', 'm303'],
      desc: 'Multi-region Kubernetes migration with zero-downtime database failover and automated canary deployments.',
      milestones: [
        { name: 'Canary Cluster Live', date: dOff(5) },
        { name: 'Full Traffic Cutover', date: dOff(30) },
      ],
      last: 10,
    },
    {
      id: 'p32',
      key: 'SEC',
      name: 'SOC2 Type II Audit',
      icon: 'shield-check',
      color: 'amber',
      status: 'active',
      team: 'product',
      lead: 'm304',
      due: dOff(45),
      start: dOff(-10),
      fav: true,
      members: ['m301', 'm304'],
      desc: 'Enterprise security compliance audit, penetration testing, automated evidence collection, and vendor risk reviews.',
      milestones: [
        { name: 'Pen-test Report Signed', date: dOff(12) },
        { name: 'Auditor Sign-off', date: dOff(45) },
      ],
      last: 25,
    },
    {
      id: 'p33',
      key: 'API',
      name: 'Developer API Gateway',
      icon: 'cpu',
      color: 'teal',
      status: 'planning',
      team: 'eng',
      lead: 'm303',
      due: dOff(60),
      start: dOff(-5),
      fav: false,
      members: ['m302', 'm303'],
      desc: 'High-throughput Rust-based edge reverse proxy with global rate limiting, OAuth2 mTLS token validation, and analytics telemetry.',
      milestones: [
        { name: 'Architecture RFC Approval', date: dOff(15) },
        { name: 'Alpha SDK Release', date: dOff(60) },
      ],
      last: 80,
    },
  ];

  const tasks = [
    {
      id: 't301',
      title: 'Provision multi-region EKS clusters in us-east-1 and eu-central-1',
      project: 'p31',
      status: 'progress',
      priority: 'urgent',
      assignee: 'm301',
      due: dOff(3),
      created: dOff(-15),
      updated: minsAgo(30),
      desc: 'Set up Terraform modules with Crossplane providers.',
      labels: ['infra', 'devops'],
    },
    {
      id: 't302',
      title: 'Configure Aurora PostgreSQL global database replication',
      project: 'p31',
      status: 'todo',
      priority: 'high',
      assignee: 'm303',
      due: dOff(7),
      created: dOff(-10),
      updated: minsAgo(120),
      desc: 'Benchmark read replica latency under 15ms.',
      labels: ['backend', 'database'],
    },
    {
      id: 't303',
      title: 'Automated evidence collection for SOC2 CC6 controls',
      project: 'p32',
      status: 'progress',
      priority: 'high',
      assignee: 'm304',
      due: dOff(5),
      created: dOff(-8),
      updated: minsAgo(90),
      desc: 'Integrate Vanta API with AWS CloudTrail and Okta audit logs.',
      labels: ['security', 'compliance'],
    },
    {
      id: 't304',
      title: 'Third-party penetration test remediation checklist',
      project: 'p32',
      status: 'review',
      priority: 'urgent',
      assignee: 'm304',
      due: dOff(10),
      created: dOff(-12),
      updated: minsAgo(40),
      desc: 'Patch discovered TLS cipher vulnerabilities in ingress controllers.',
      labels: ['security'],
    },
    {
      id: 't305',
      title: 'Benchmarking Envoy vs Pingora proxy throughput',
      project: 'p33',
      status: 'todo',
      priority: 'medium',
      assignee: 'm303',
      due: dOff(14),
      created: dOff(-4),
      updated: minsAgo(240),
      desc: 'Run wrk2 load tests measuring p99 latency under 200k req/s.',
      labels: ['performance', 'api'],
    },
    {
      id: 't306',
      title: 'Draft OpenAPI 3.1 specification for v2 endpoints',
      project: 'p33',
      status: 'backlog',
      priority: 'low',
      assignee: 'm302',
      due: dOff(20),
      created: dOff(-3),
      updated: minsAgo(500),
      desc: 'Standardize error payloads using RFC 7807 problem details.',
      labels: ['api'],
    },
  ];

  const comments = [
    {
      id: 'c301',
      task: 't301',
      by: 'm302',
      at: minsAgo(60),
      text: 'Terraform modules look solid. Let’s make sure IAM roles use least-privilege policies.',
      re: { '👍': ['m301'] },
    },
    {
      id: 'c302',
      task: 't303',
      by: 'm301',
      at: minsAgo(180),
      text: 'AWS credentials scoped to read-only auditor role are ready in Secrets Manager.',
      re: {},
    },
  ];

  const activity = [
    { id: 'a301', by: 'm301', verb: 'moved', task: 't301', project: 'p31', at: minsAgo(30), extra: 'to In Progress' },
    { id: 'a302', by: 'm304', verb: 'commented on', task: 't303', project: 'p32', at: minsAgo(90), extra: '' },
    { id: 'a303', by: 'm303', verb: 'created', task: 't305', project: 'p33', at: minsAgo(240), extra: '' },
  ];

  const notifs = [
    {
      id: 'n301',
      type: 'mention',
      by: 'm302',
      task: 't301',
      text: 'mentioned you in',
      snippet: 'IAM roles use least-privilege policies',
      at: minsAgo(60),
      read: false,
    },
    {
      id: 'n302',
      type: 'assign',
      by: 'm301',
      task: 't303',
      text: 'assigned you',
      snippet: 'Automated evidence collection for SOC2',
      at: minsAgo(180),
      read: true,
    },
  ];

  const files = [
    { id: 'f301', project: 'p31', name: 'terraform-architecture.pdf', type: 'pdf', size: '2.4 MB', by: 'm301', at: minsAgo(4000) },
    { id: 'f302', project: 'p32', name: 'soc2-gap-analysis.xlsx', type: 'sheet', size: '1.2 MB', by: 'm304', at: minsAgo(8000) },
  ];

  const events = [
    { id: 'e301', title: 'Architecture Review', date: dOff(1), time: '14:00', project: 'p31' },
    { id: 'e302', title: 'SOC2 Auditor Sync', date: dOff(4), time: '10:30', project: 'p32' },
  ];

  return {
    ws: { id: 'w3', name: 'Acme Labs', slug: 'acme', url: 'acmelabs', c: '#3B82C4', plan: 'Business', brand: false },
    workspaces: [
      { id: 'w1', name: 'Besomoy Studio', c: '#1D1C1A', plan: 'Team', brand: true },
      { id: 'w2', name: 'Personal', c: '#3D8E5F', plan: 'Free' },
      { id: 'w3', name: 'Acme Labs', c: '#3B82C4', plan: 'Business' },
    ],
    me: 'm301',
    members,
    projects,
    tasks,
    comments,
    activity,
    notifs,
    files,
    events,
    projOrder: projects.map(p => p.id),
    savedViews: [
      {
        id: 'v31',
        project: 'p31',
        name: 'Critical infra',
        type: 'list',
        filters: [{ f: 'priority', op: 'is', v: ['urgent', 'high'] }],
      },
    ],
    recentSearches: ['kubernetes', 'soc2', 'database'],
    sessions: [{ id: 'se301', dev: 'ThinkPad X1 · Fedora Linux', loc: 'San Francisco, US', at: 'Active now', cur: true }],
    invoices: [
      { id: 'INV-ACME-01', date: dOff(-20), amt: '$280.00', st: 'Paid' },
      { id: 'INV-ACME-02', date: dOff(-50), amt: '$280.00', st: 'Paid' },
    ],
    tfa: true,
    notifPrefs: {
      email_mention: true,
      email_assign: true,
      email_digest: true,
      email_comment: true,
      push_mention: true,
      push_assign: true,
      push_comment: true,
      push_due: true,
      mention_all: true,
      assign_self: true,
    },
  };
}

export function seedPersonal() {
  const members = [
    {
      id: 'm201',
      name: 'Arman Hossain Somoy',
      email: 'arman@personal.me',
      role: 'Owner',
      team: 'product',
      title: 'Maker & Developer',
      c: '#3D8E5F',
      status: 'active',
      last: 0,
      tz: 'San Francisco',
    },
  ];

  const projects = [
    {
      id: 'p21',
      key: 'LIFE',
      name: 'Personal Goals 2026',
      icon: 'compass',
      color: 'green',
      status: 'active',
      team: 'product',
      lead: 'm201',
      due: dOff(120),
      start: dOff(-40),
      fav: true,
      members: ['m201'],
      desc: 'Health, reading, travel, and personal finance milestones for 2026.',
      milestones: [{ name: 'Half Marathon Training Complete', date: dOff(30) }],
      last: 5,
    },
    {
      id: 'p22',
      key: 'LABS',
      name: 'Open Source Utilities',
      icon: 'code',
      color: 'indigo',
      status: 'active',
      team: 'product',
      lead: 'm201',
      due: dOff(90),
      start: dOff(-15),
      fav: false,
      members: ['m201'],
      desc: 'Lightweight developer tools and productivity browser extensions.',
      milestones: [{ name: 'v1.0 GitHub Release', date: dOff(25) }],
      last: 40,
    },
  ];

  const tasks = [
    {
      id: 't201',
      title: 'Complete 10k weekend preparation run',
      project: 'p21',
      status: 'progress',
      priority: 'high',
      assignee: 'm201',
      due: dOff(2),
      created: dOff(-10),
      updated: minsAgo(15),
      desc: 'Target pace under 5:15 min/km.',
      labels: ['health'],
    },
    {
      id: 't202',
      title: 'Publish lightweight canvas charting library on npm',
      project: 'p22',
      status: 'todo',
      priority: 'medium',
      assignee: 'm201',
      due: dOff(14),
      created: dOff(-5),
      updated: minsAgo(120),
      desc: 'Zero dependencies, under 4KB gzipped.',
      labels: ['oss', 'frontend'],
    },
  ];

  return {
    ws: { id: 'w2', name: 'Personal Workspace', slug: 'personal', url: 'personal', c: '#3D8E5F', plan: 'Free', brand: false },
    workspaces: [
      { id: 'w1', name: 'Besomoy Studio', c: '#1D1C1A', plan: 'Team', brand: true },
      { id: 'w2', name: 'Personal', c: '#3D8E5F', plan: 'Free' },
      { id: 'w3', name: 'Acme Labs', c: '#3B82C4', plan: 'Business' },
    ],
    me: 'm201',
    members,
    projects,
    tasks,
    comments: [],
    activity: [{ id: 'a201', by: 'm201', verb: 'created', task: 't201', project: 'p21', at: minsAgo(15), extra: '' }],
    notifs: [],
    files: [],
    events: [{ id: 'e201', title: 'Monthly Habit Review', date: dOff(3), time: '18:00', project: 'p21' }],
    projOrder: projects.map(p => p.id),
    savedViews: [],
    recentSearches: ['health', 'npm', 'running'],
    sessions: [{ id: 'se201', dev: 'MacBook Air · Safari', loc: 'San Francisco, US', at: 'Active now', cur: true }],
    invoices: [],
    tfa: false,
    notifPrefs: {
      email_mention: true,
      email_assign: true,
      email_digest: true,
      email_comment: false,
      push_mention: true,
      push_assign: true,
      push_comment: true,
      push_due: true,
      mention_all: true,
      assign_self: true,
    },
  };
}

export function createTenantData({ id, name, slug, plan = 'Team', c = '#5A67D8', adminName, adminEmail }) {
  const adminId = 'm_' + uid('u');
  const projId = 'p_' + uid('p');
  const wsSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '');

  const members = [
    {
      id: adminId,
      name: adminName || 'Admin User',
      email: adminEmail || `admin@${wsSlug}.com`,
      role: 'Owner',
      team: 'product',
      title: 'Workspace Owner',
      c: c,
      status: 'active',
      last: 0,
      tz: 'UTC',
    },
  ];

  const projects = [
    {
      id: projId,
      key: name.slice(0, 3).toUpperCase() || 'PRJ',
      name: 'Workspace Roadmap',
      icon: 'rocket',
      color: 'indigo',
      status: 'active',
      team: 'product',
      lead: adminId,
      due: dOff(30),
      start: dOff(0),
      fav: true,
      members: [adminId],
      desc: `Starter project for ${name}. Track milestones, sprints, and deliverable handoffs.`,
      milestones: [
        { name: 'Team Onboarded', date: dOff(7) },
        { name: 'First Milestone Launch', date: dOff(30) },
      ],
      last: 1,
    },
  ];

  const tasks = [
    {
      id: 't_' + uid('t'),
      title: 'Invite your core team members',
      project: projId,
      status: 'progress',
      priority: 'urgent',
      assignee: adminId,
      due: dOff(2),
      created: dOff(0),
      updated: minsAgo(5),
      desc: 'Send email invites from Settings → Members.',
      labels: ['onboarding'],
    },
    {
      id: 't_' + uid('t'),
      title: 'Define your first project roadmap',
      project: projId,
      status: 'todo',
      priority: 'high',
      assignee: adminId,
      due: dOff(7),
      created: dOff(0),
      updated: minsAgo(10),
      desc: 'Set up boards, lists, and milestones.',
      labels: ['planning'],
    },
    {
      id: 't_' + uid('t'),
      title: 'Explore Timeline (Gantt) & Calendar views',
      project: projId,
      status: 'todo',
      priority: 'medium',
      assignee: adminId,
      due: dOff(14),
      created: dOff(0),
      updated: minsAgo(15),
      desc: 'Visualise task dependencies and schedule over time.',
      labels: ['feature'],
    },
  ];

  return {
    ws: { id, name, slug: wsSlug, url: wsSlug, c, plan, brand: false },
    workspaces: [{ id, name, c, plan, brand: false }],
    me: adminId,
    members,
    projects,
    tasks,
    comments: [],
    activity: [{ id: 'a_' + uid('a'), by: adminId, verb: 'created workspace', task: null, project: projId, at: minsAgo(1), extra: name }],
    notifs: [],
    files: [],
    events: [],
    projOrder: [projId],
    savedViews: [],
    recentSearches: [],
    sessions: [{ id: 'se_' + uid('s'), dev: 'Current Browser Session', loc: 'Local Workspace', at: 'Active now', cur: true }],
    invoices: [],
    tfa: false,
    notifPrefs: {
      email_mention: true,
      email_assign: true,
      email_digest: true,
      email_comment: true,
      push_mention: true,
      push_assign: true,
      push_comment: true,
      push_due: true,
      mention_all: true,
      assign_self: true,
    },
  };
}

export function seedTenants() {
  return {
    w1: seedBesomoyStudio(),
    w3: seedAcmeLabs(),
    w2: seedPersonal(),
  };
}
