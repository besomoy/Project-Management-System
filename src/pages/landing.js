/* ============================================================
   LANDING PAGE (ROOT URL /)
   Multi-tenant SaaS Architecture Presentation & Entry
   Monochrome / Black & White Design Language
   ============================================================ */
import { esc } from '../core/utils.js';
import { LOGO, MARK, ic } from '../core/icons.js';
import { S } from '../core/store.js';
import { TENANTS_CATALOG } from '../data/seed.js';
import { effectiveDark } from '../core/theme.js';

export function renderLanding() {
  const isDark = effectiveDark();
  const currentTab = S.ui.landingTab || 'board';

  return `
  <div class="landing">
    <!-- Navigation Bar -->
    <header class="landing-nav" role="banner">
      <a href="#/" class="landing-brand" aria-label="Besomoy Studio Home" data-a="goLanding">
        ${MARK(24)}
        ${LOGO(21)}
        <span class="landing-badge">Multi-Tenant</span>
      </a>

      <nav class="landing-links" aria-label="Primary navigation">
        <button type="button" class="landing-link" data-a="scrollSection" data-v="workspaces">Workspaces</button>
        <button type="button" class="landing-link" data-a="scrollSection" data-v="features">Architecture</button>
        <button type="button" class="landing-link" data-a="scrollSection" data-v="preview">Interactive Views</button>
      </nav>

      <div class="landing-actions">
        <button class="ibtn" data-a="toggleDark" data-tip="Toggle theme" aria-label="Toggle theme">
          ${ic(isDark ? 'sun' : 'moon', 16)}
        </button>
        <button class="btn btn-ghost btn-sm" data-a="auth" data-v="find-workspace" id="nav-find-ws-btn">
          ${ic('building-2', 13)}Find Workspace
        </button>
        <button class="btn btn-secondary btn-sm" data-a="auth" data-v="login" id="nav-login-btn">
          Sign In
        </button>
        <button class="btn-mono-primary" data-a="demoLogin" id="nav-demo-btn" style="padding:5px 12px;font-size:12.5px">
          Try Demo
        </button>
      </div>
    </header>

    <main id="main-content" role="main">
      <!-- Hero Section -->
      <section class="landing-hero" aria-labelledby="hero-title">
        <div class="hero-pill">
          <span class="hero-pill-badge">SaaS</span>
          <span>Multi-Tenant Architecture · Organization Isolation</span>
        </div>

        <h1 class="hero-title" id="hero-title">
          Modern project management for high-velocity teams.
        </h1>

        <p class="hero-sub">
          Coordinate roadmaps, sprints, tasks, and teams with strict organization isolation,
          instant tenant discovery, and role-based permissions.
        </p>

        <div class="hero-ctas">
          <button class="btn-mono-primary" data-a="demoLogin" id="hero-try-demo-btn" style="padding:10px 22px;font-size:14.5px">
            Try Live Demo
            ${ic('arrow-right', 15)}
          </button>
          <button class="btn-mono-secondary" data-a="auth" data-v="find-workspace" id="hero-find-ws-btn" style="padding:10px 18px;font-size:14.5px">
            ${ic('search', 15)}Find Your Workspace
          </button>
          <button class="btn-mono-secondary" data-a="auth" data-v="signup" id="hero-create-acc-btn" style="padding:10px 18px;font-size:14.5px">
            ${ic('plus', 15)}Create Organization
          </button>
        </div>

        <div class="hero-perks">
          <div class="hero-perk-item">
            ${ic('shield', 13)}
            <span>Strict Tenant Isolation</span>
          </div>
          <div class="hero-perk-item">
            ${ic('users', 13)}
            <span>Role-Governed Dashboards</span>
          </div>
          <div class="hero-perk-item">
            ${ic('folder-kanban', 13)}
            <span>3 Pre-Configured Organizations</span>
          </div>
          <div class="hero-perk-item">
            ${ic('zap', 13)}
            <span>Zero-Friction Demo Access</span>
          </div>
        </div>
      </section>

      <!-- Live Interactive Showcase Frame -->
      <section class="landing-preview-section" id="preview" aria-label="Interactive application preview">
        <div class="preview-frame">
          <div class="preview-bar">
            <div class="preview-dots" aria-hidden="true">
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
              <span class="preview-dot"></span>
            </div>

            <div class="preview-url-badge">
              ${ic('lock', 12)}
              <span>besomoystudio.com/dashboard/${currentTab}</span>
            </div>

            <div class="preview-tabs" role="tablist" aria-label="Preview views">
              <button class="preview-tab-btn ${currentTab === 'board' ? 'active' : ''}" data-a="setLandingTab" data-v="board" role="tab" aria-selected="${currentTab === 'board'}">
                ${ic('square-kanban', 13)}Kanban Board
              </button>
              <button class="preview-tab-btn ${currentTab === 'timeline' ? 'active' : ''}" data-a="setLandingTab" data-v="timeline" role="tab" aria-selected="${currentTab === 'timeline'}">
                ${ic('chart-gantt', 13)}Timeline
              </button>
              <button class="preview-tab-btn ${currentTab === 'table' ? 'active' : ''}" data-a="setLandingTab" data-v="table" role="tab" aria-selected="${currentTab === 'table'}">
                ${ic('table-2', 13)}Table
              </button>
              <button class="preview-tab-btn ${currentTab === 'overview' ? 'active' : ''}" data-a="setLandingTab" data-v="overview" role="tab" aria-selected="${currentTab === 'overview'}">
                ${ic('layout-dashboard', 13)}Overview
              </button>
            </div>
          </div>

          <div class="preview-content">
            ${renderMockView(currentTab)}
          </div>

          <div class="preview-bottom-cta">
            <div style="display:flex;align-items:center;gap:8px">
              ${ic('sparkles', 14)}
              <span>Showing <b>${currentTab.toUpperCase()}</b> view from Besomoy Studio flagship workspace.</span>
            </div>
            <button class="btn-mono-primary" data-a="demoLogin" style="padding:5px 12px;font-size:12px">
              Open Live Interactive Dashboard ${ic('arrow-right', 13)}
            </button>
          </div>
        </div>
      </section>

      <!-- Tenant Showcase Section -->
      <section class="landing-tenants-section" id="workspaces" aria-labelledby="tenants-title">
        <div class="section-head">
          <span class="section-label">Multi-Tenant Architecture</span>
          <h2 class="section-title" id="tenants-title">Explore Pre-Configured Organizations</h2>
          <p class="section-sub">
            Each tenant operates in complete data isolation. Switch between organizations or create a custom tenant.
          </p>
        </div>

        <div class="tenants-grid">
          ${TENANTS_CATALOG.map(t => renderTenantCard(t)).join('')}
        </div>
      </section>

      <!-- Architecture & Security Bento Grid -->
      <section class="landing-bento-section" id="features" aria-labelledby="features-title">
        <div class="section-head">
          <span class="section-label">Architecture & Foundations</span>
          <h2 class="section-title" id="features-title">Designed for Scalable Multi-Tenancy</h2>
          <p class="section-sub">
            Engineered for strict tenant isolation, seamless workspace identification,
            and role-governed data protection.
          </p>
        </div>

        <div class="bento-grid">
          <div class="bento-card bento-span-2">
            <div class="bento-icon-pill">
              ${ic('shield', 18)}
            </div>
            <h3>Strict Store Isolation</h3>
            <p>
              Data stores, projects, tasks, custom views, and activity trails are partitioned by organization ID.
              Cross-tenant queries are blocked at the architectural store boundary.
            </p>
            <div class="bento-preview-snippet">
              // Tenant Store Isolation Pattern<br>
              const tenant = S.tenants[session.tenantId];<br>
              assert(tenant.projects.every(p => p.workspaceId === session.tenantId));
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-icon-pill">
              ${ic('users', 18)}
            </div>
            <h3>Role-Based Dashboards</h3>
            <p>
              Automatic redirection and view scoping based on user roles: Owner, Admin, Member, or Guest with tailored permission boundaries.
            </p>
          </div>

          <div class="bento-card">
            <div class="bento-icon-pill">
              ${ic('building-2', 18)}
            </div>
            <h3>Organization Directory</h3>
            <p>
              Frictionless tenant discovery: search by workspace name, slug, or domain before entering organization-branded sign-in portals.
            </p>
          </div>

          <div class="bento-card bento-span-2">
            <div class="bento-icon-pill">
              ${ic('sparkles', 18)}
            </div>
            <h3>Zero-Friction Demo Experience</h3>
            <p>
              Instant sandbox exploration allows visitors to test all 5 project views, drag-and-drop kanban boards,
              and Gantt scheduling without mandatory account creation.
            </p>
            <div class="bento-preview-snippet">
              // 1-Click Interactive Demo Access<br>
              A.demoLogin() ➔ Authenticated session initialized with full sample projects & tasks
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA Banner -->
      <section class="landing-cta-section" aria-label="Get started call to action">
        <div class="cta-banner">
          <h2>Ready to experience high-velocity execution?</h2>
          <p>
            Try the live interactive demo now, or register a new organization workspace for your team in seconds.
          </p>
          <div class="hero-ctas" style="margin-bottom:0">
            <button class="btn-mono-primary" data-a="demoLogin" id="cta-demo-btn" style="padding:10px 20px;font-size:14px">
              Launch Live Demo
              ${ic('arrow-right', 14)}
            </button>
            <button class="btn-mono-secondary" data-a="auth" data-v="signup" id="cta-signup-btn" style="padding:10px 18px;font-size:14px">
              ${ic('plus', 14)}Create Organization
            </button>
            <button class="btn-mono-secondary" data-a="auth" data-v="find-workspace" id="cta-find-btn" style="padding:10px 18px;font-size:14px">
              ${ic('building-2', 14)}Find Existing Workspace
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="landing-footer" role="contentinfo">
      <div class="landing-footer-inner">
        <div class="footer-copy">
          © 2026 Besomoy Studio. Multi-Tenant Project Management SaaS Architecture.
        </div>
        <div class="footer-links">
          <button type="button" class="footer-link" data-a="auth" data-v="find-workspace">Find Workspace</button>
          <button type="button" class="footer-link" data-a="auth" data-v="login">Sign In</button>
          <button type="button" class="footer-link" data-a="auth" data-v="signup">Create Account</button>
          <button type="button" class="footer-link" data-a="demoLogin">Live Demo</button>
        </div>
      </div>
    </footer>
  </div>
  `;
}

function renderMockView(tab) {
  if (tab === 'timeline') {
    return `
    <div class="mock-timeline">
      <div class="mock-tl-header">
        <span style="text-align:left">Project & Milestone</span>
        <span>Week 1</span>
        <span>Week 2</span>
        <span>Week 3</span>
        <span>Week 4</span>
        <span>Week 5</span>
        <span>Week 6</span>
      </div>

      <div class="mock-tl-row">
        <div>
          <b>Design System Tokens</b>
          <div style="font-size:11px;color:var(--text-3)">Core Foundation · Arman H.</div>
        </div>
        <div style="display:flex;align-items:center;padding-left:10px">
          <div class="mock-tl-bar" style="width:58%">Completed (100%)</div>
        </div>
      </div>

      <div class="mock-tl-row">
        <div>
          <b>Multi-Tenant Auth Flow</b>
          <div style="font-size:11px;color:var(--text-3)">Architecture Sprint · Sarah C.</div>
        </div>
        <div style="display:flex;align-items:center;padding-left:35%">
          <div class="mock-tl-bar" style="width:50%">In Review (90%)</div>
        </div>
      </div>

      <div class="mock-tl-row">
        <div>
          <b>Mobile App Navigation</b>
          <div style="font-size:11px;color:var(--text-3)">Sprint 14 · John C.</div>
        </div>
        <div style="display:flex;align-items:center;padding-left:20%">
          <div class="mock-tl-bar secondary" style="width:45%">In Progress (45%)</div>
        </div>
      </div>

      <div class="mock-tl-row">
        <div>
          <b>Client Portal Handoff</b>
          <div style="font-size:11px;color:var(--text-3)">Q4 Deliverable · Emma W.</div>
        </div>
        <div style="display:flex;align-items:center;padding-left:60%">
          <div class="mock-tl-bar secondary" style="width:35%">Scheduled (0%)</div>
        </div>
      </div>
    </div>
    `;
  }

  if (tab === 'table') {
    return `
    <table class="mock-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task Title</th>
          <th>Project</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Assignee</th>
          <th>Due</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-family:var(--mono);color:var(--text-3)">BES-101</td>
          <td><b>Refactor auth layer to multi-tenant store</b></td>
          <td>Besomoy Studio</td>
          <td><span class="mock-tag">Done</span></td>
          <td><b>Urgent</b></td>
          <td>Arman Hossain Somoy</td>
          <td>Today</td>
        </tr>
        <tr>
          <td style="font-family:var(--mono);color:var(--text-3)">BES-102</td>
          <td><b>Organization workspace finder screen</b></td>
          <td>Besomoy Studio</td>
          <td><span class="mock-tag">Done</span></td>
          <td>High</td>
          <td>Sarah Chen</td>
          <td>Oct 16</td>
        </tr>
        <tr>
          <td style="font-family:var(--mono);color:var(--text-3)">BES-103</td>
          <td><b>Gantt timeline view dependencies engine</b></td>
          <td>Client Portal</td>
          <td><span class="mock-tag">In Progress</span></td>
          <td>Medium</td>
          <td>John Carter</td>
          <td>Oct 20</td>
        </tr>
        <tr>
          <td style="font-family:var(--mono);color:var(--text-3)">BES-104</td>
          <td><b>Role permission matrix audit</b></td>
          <td>Core Architecture</td>
          <td><span class="mock-tag">Review</span></td>
          <td>High</td>
          <td>Emma Wilson</td>
          <td>Oct 22</td>
        </tr>
        <tr>
          <td style="font-family:var(--mono);color:var(--text-3)">BES-105</td>
          <td><b>Cross-tenant isolation test suite</b></td>
          <td>Infrastructure</td>
          <td><span class="mock-tag">Todo</span></td>
          <td>Urgent</td>
          <td>Marcus Lee</td>
          <td>Oct 25</td>
        </tr>
      </tbody>
    </table>
    `;
  }

  if (tab === 'overview') {
    return `
    <div class="mock-overview">
      <div class="mock-stats-row">
        <div class="mock-stat-box">
          <div class="mock-stat-lbl">Active Projects</div>
          <div class="mock-stat-val">7</div>
          <div style="font-size:11px;color:var(--text-3)">All projects healthy</div>
        </div>
        <div class="mock-stat-box">
          <div class="mock-stat-lbl">Open Tasks</div>
          <div class="mock-stat-val">28</div>
          <div style="font-size:11px;color:var(--text-3)">12 in current sprint</div>
        </div>
        <div class="mock-stat-box">
          <div class="mock-stat-lbl">Completed (This Month)</div>
          <div class="mock-stat-val">19</div>
          <div style="font-size:11px;color:var(--text-3)">+32% velocity</div>
        </div>
        <div class="mock-stat-box">
          <div class="mock-stat-lbl">Team Members</div>
          <div class="mock-stat-val">8</div>
          <div style="font-size:11px;color:var(--text-3)">Full roster active</div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:2fr 1fr;gap:14px">
        <div class="mock-card" style="padding:14px">
          <div style="font-weight:600;font-size:13px;margin-bottom:8px">Sprint Execution Velocity</div>
          <div style="display:flex;align-items:flex-end;gap:12px;height:120px;padding-top:10px">
            <div style="flex:1;background:var(--surface-3);height:40%;border-radius:3px 3px 0 0;text-align:center;font-size:10px;padding-top:4px">W1</div>
            <div style="flex:1;background:var(--surface-3);height:60%;border-radius:3px 3px 0 0;text-align:center;font-size:10px;padding-top:4px">W2</div>
            <div style="flex:1;background:var(--surface-3);height:75%;border-radius:3px 3px 0 0;text-align:center;font-size:10px;padding-top:4px">W3</div>
            <div style="flex:1;background:var(--text);height:92%;border-radius:3px 3px 0 0;text-align:center;font-size:10px;color:var(--text-inv);padding-top:4px">W4</div>
          </div>
        </div>

        <div class="mock-card" style="padding:14px">
          <div style="font-weight:600;font-size:13px;margin-bottom:8px">Upcoming Deadlines</div>
          <div style="display:flex;flex-direction:column;gap:8px;font-size:12px">
            <div style="display:flex;justify-content:space-between"><span>Design handoff</span><b>Today</b></div>
            <div style="display:flex;justify-content:space-between"><span>Beta feedback</span><b>Tomorrow</b></div>
            <div style="display:flex;justify-content:space-between"><span>Sprint review</span><b>Friday</b></div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  // Default: Kanban Board
  return `
  <div class="mock-board">
    <!-- Backlog Column -->
    <div class="mock-col">
      <div class="mock-col-head">
        <span>Backlog</span>
        <span class="mock-badge-count">2</span>
      </div>

      <div class="mock-card">
        <span class="mock-card-title">Explore Webhooks & API rate limiting</span>
        <div class="mock-card-foot">
          <span class="mock-tag">Backend</span>
          <span>Marcus L.</span>
        </div>
      </div>

      <div class="mock-card">
        <span class="mock-card-title">Dark mode contrast audit for OLED screens</span>
        <div class="mock-card-foot">
          <span class="mock-tag">Design</span>
          <span>Sarah C.</span>
        </div>
      </div>
    </div>

    <!-- Todo Column -->
    <div class="mock-col">
      <div class="mock-col-head">
        <span>To Do</span>
        <span class="mock-badge-count">2</span>
      </div>

      <div class="mock-card">
        <span class="mock-card-title">Define milestone dependencies in Gantt</span>
        <div class="mock-card-foot">
          <span class="mock-tag">Planning</span>
          <span>Arman H.</span>
        </div>
      </div>

      <div class="mock-card">
        <span class="mock-card-title">Add custom field filters to table engine</span>
        <div class="mock-card-foot">
          <span class="mock-tag">Features</span>
          <span>John C.</span>
        </div>
      </div>
    </div>

    <!-- In Progress Column -->
    <div class="mock-col">
      <div class="mock-col-head">
        <span>In Progress</span>
        <span class="mock-badge-count">2</span>
      </div>

      <div class="mock-card">
        <span class="mock-card-title">Multi-tenant session persistence & routing</span>
        <div class="mock-card-foot">
          <span class="mock-tag">Architecture</span>
          <span>Arman H.</span>
        </div>
      </div>

      <div class="mock-card">
        <span class="mock-card-title">Refactor tenant organization finder search</span>
        <div class="mock-card-foot">
          <span class="mock-tag">UI/UX</span>
          <span>Emma W.</span>
        </div>
      </div>
    </div>

    <!-- Done Column -->
    <div class="mock-col">
      <div class="mock-col-head">
        <span>Done</span>
        <span class="mock-badge-count">3</span>
      </div>

      <div class="mock-card">
        <span class="mock-card-title">Design system typography tokens setup</span>
        <div class="mock-card-foot">
          <span class="mock-tag">Completed</span>
          <span>Arman H.</span>
        </div>
      </div>

      <div class="mock-card">
        <span class="mock-card-title">1-Click demo sandbox access engine</span>
        <div class="mock-card-foot">
          <span class="mock-tag">Completed</span>
          <span>Sarah C.</span>
        </div>
      </div>
    </div>
  </div>
  `;
}

function renderTenantCard(t) {
  const isRecommended = t.recommended;
  return `
  <div class="tenant-card ${isRecommended ? 'is-flagship' : ''}" data-tenant="${esc(t.id)}">
    <div class="tenant-card-top">
      <div class="tenant-avatar-box">
        ${ic(t.icon, 18)}
      </div>
      <div style="display:flex;align-items:center;gap:6px">
        ${isRecommended ? `<span class="landing-badge" style="font-size:9.5px">Flagship Demo</span>` : ''}
        <span class="tenant-plan-tag">${esc(t.plan)}</span>
      </div>
    </div>

    <div class="tenant-info">
      <h3>${esc(t.name)}</h3>
      <div class="tenant-subdomain">besomoystudio.com/ws/${esc(t.slug)}</div>
    </div>

    <p class="tenant-desc">${esc(t.desc)}</p>

    <div class="tenant-metrics">
      <div class="tenant-metric-item">
        ${ic('folder-kanban', 13)}
        <span><b>${t.projectsCount}</b> Projects</span>
      </div>
      <div class="tenant-metric-item">
        ${ic('users', 13)}
        <span><b>${t.membersCount}</b> Members</span>
      </div>
    </div>

    <div class="tenant-actions">
      <button class="btn-mono-primary" data-a="tenantDemo" data-v="${esc(t.id)}" id="demo-${esc(t.id)}" style="font-size:12.5px;padding:6px 10px">
        Try Demo
      </button>
      <button class="btn-mono-secondary" data-a="selectTenant" data-v="${esc(t.id)}" id="signin-${esc(t.id)}" style="font-size:12.5px;padding:6px 10px">
        Sign In
      </button>
    </div>
  </div>
  `;
}
