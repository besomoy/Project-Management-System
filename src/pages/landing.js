/* ============================================================
   LANDING PAGE (ROOT URL /)
   Multi-tenant SaaS Architecture Presentation & Entry
   ============================================================ */
import { esc } from '../core/utils.js';
import { LOGO, ic } from '../core/icons.js';
import { S } from '../core/store.js';
import { TENANTS_CATALOG } from '../data/seed.js';
import { effectiveDark } from '../core/theme.js';

export function renderLanding() {
  const isDark = effectiveDark();
  const currentTab = S.ui.landingTab || 'board';

  return `
  <div class="landing">
    <!-- Ambient Background Lighting -->
    <div class="landing-ambient" aria-hidden="true">
      <div class="landing-glow-1"></div>
      <div class="landing-glow-2"></div>
    </div>

    <!-- Navigation Bar -->
    <header class="landing-nav" role="banner">
      <a href="#/" class="landing-brand" aria-label="Besomoy Studio Home" data-a="goLanding">
        ${LOGO(24)}
        <span class="landing-brand-text">Besomoy Studio</span>
        <span class="landing-badge">SaaS</span>
      </a>

      <nav class="landing-links" aria-label="Primary navigation">
        <button type="button" class="landing-link" data-a="scrollSection" data-v="workspaces">Workspaces</button>
        <button type="button" class="landing-link" data-a="scrollSection" data-v="features">Features</button>
        <button type="button" class="landing-link" data-a="scrollSection" data-v="architecture">Architecture</button>
      </nav>

      <div class="landing-actions">
        <button class="ibtn" data-a="toggleDark" data-tip="Toggle theme" aria-label="Toggle theme">
          ${ic(isDark ? 'sun' : 'moon', 16)}
        </button>
        <button class="btn btn-ghost btn-sm" data-a="auth" data-v="find-workspace" id="nav-find-ws-btn">
          ${ic('building-2', 14)}Find Workspace
        </button>
        <button class="btn btn-secondary btn-sm" data-a="auth" data-v="login" id="nav-login-btn">
          Sign In
        </button>
        <button class="btn btn-primary btn-sm" data-a="demoLogin" id="nav-demo-btn">
          ${ic('sparkles', 14)}Try Demo
        </button>
      </div>
    </header>

    <main id="main-content" role="main">
      <!-- Hero Section -->
      <section class="landing-hero" aria-labelledby="hero-title">
        <div class="hero-pill">
          <span class="hero-pill-dot" aria-hidden="true"></span>
          <span>Multi-Tenant Architecture · Real-time Workspace Isolation</span>
        </div>

        <h1 class="hero-title" id="hero-title">
          Modern project management for <span class="hero-title-accent">high-velocity teams</span>
        </h1>

        <p class="hero-sub">
          Coordinate roadmaps, sprints, tasks, and teams with strict organization isolation,
          instant tenant discovery, and role-based permissions.
        </p>

        <div class="hero-ctas">
          <button class="btn-hero-primary" data-a="demoLogin" id="hero-try-demo-btn">
            ${ic('sparkles', 17)}Try Live Demo
            ${ic('arrow-right', 16)}
          </button>
          <button class="btn-hero-secondary" data-a="auth" data-v="find-workspace" id="hero-find-ws-btn">
            ${ic('search', 16)}Find Your Workspace
          </button>
          <button class="btn-hero-secondary" data-a="auth" data-v="signup" id="hero-create-acc-btn">
            ${ic('plus', 16)}Create Account
          </button>
        </div>

        <div class="hero-perks">
          <div class="hero-perk-item">
            ${ic('check', 14)}
            <span>Zero installation or setup</span>
          </div>
          <div class="hero-perk-item">
            ${ic('shield-check', 14)}
            <span>Isolated tenant data</span>
          </div>
          <div class="hero-perk-item">
            ${ic('sparkles', 14)}
            <span>3 pre-configured demo organizations</span>
          </div>
        </div>
      </section>

      <!-- Live Interactive Showcase Frame -->
      <section class="landing-preview-section" aria-label="Interactive application preview">
        <div class="preview-frame">
          <div class="preview-bar">
            <div class="preview-dots" aria-hidden="true">
              <span class="preview-dot preview-dot-red"></span>
              <span class="preview-dot preview-dot-yellow"></span>
              <span class="preview-dot preview-dot-green"></span>
            </div>

            <div class="preview-url-badge">
              ${ic('lock', 12)}
              <span>besomoystudio.com/dashboard</span>
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
            <div class="preview-img-wrap">
              <img src="docs/preview.png" alt="Besomoy Studio Project Management Dashboard Preview" loading="lazy" />
              <button class="preview-overlay-cta" data-a="demoLogin">
                <span>Open Live Interactive Dashboard</span>
                ${ic('arrow-right', 14)}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Tenant Showcase Section -->
      <section class="landing-tenants-section" id="workspaces" aria-labelledby="tenants-title">
        <div class="section-head">
          <span class="section-label">Multi-Tenant Architecture</span>
          <h2 class="section-title" id="tenants-title">Explore Pre-Configured Organizations</h2>
          <p class="section-sub">
            Each tenant operates within an isolated sandbox. Switch between enterprise, engineering,
            and personal workspaces with one click.
          </p>
        </div>

        <div class="tenants-grid">
          ${TENANTS_CATALOG.map(t => renderTenantCard(t)).join('')}
        </div>
      </section>

      <!-- Architecture & Security Bento Grid -->
      <section class="landing-bento-section" id="features" aria-labelledby="features-title">
        <div class="section-head">
          <span class="section-label">Enterprise-Grade Foundations</span>
          <h2 class="section-title" id="features-title">Designed for Modern Multi-Tenancy</h2>
          <p class="section-sub">
            Built from the ground up for strict data isolation, seamless tenant discovery,
            and role-governed workspace boundaries.
          </p>
        </div>

        <div class="bento-grid">
          <div class="bento-card bento-span-2">
            <div class="bento-icon-pill">
              ${ic('shield-check', 20)}
            </div>
            <h3>Strict Multi-Tenant Isolation</h3>
            <p>
              Data stores, projects, tasks, custom views, and activity trails are strictly partitioned by organization ID.
              Cross-tenant queries are blocked at the architectural store boundary.
            </p>
            <div class="bento-preview-snippet">
              // Tenant Store Partitioning<br>
              const tenant = S.tenants[session.tenantId];<br>
              assert(tenant.projects.every(p => p.workspaceId === session.tenantId));
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-icon-pill">
              ${ic('users', 20)}
            </div>
            <h3>Role-Based Access</h3>
            <p>
              Automatic redirection and view scoping based on user roles: Owner, Admin, Member, or Guest with tailored permission boundaries.
            </p>
          </div>

          <div class="bento-card">
            <div class="bento-icon-pill">
              ${ic('building-2', 20)}
            </div>
            <h3>Organization Directory</h3>
            <p>
              Frictionless tenant discovery: search by workspace name, slug, or domain before entering organization-branded sign-in portals.
            </p>
          </div>

          <div class="bento-card bento-span-2">
            <div class="bento-icon-pill">
              ${ic('sparkles', 20)}
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
          <h2>Ready to scale your project execution?</h2>
          <p>
            Try the live interactive demo now, or register a new organization workspace for your team in seconds.
          </p>
          <div class="hero-ctas" style="margin-bottom:0">
            <button class="btn-hero-primary" data-a="demoLogin" id="cta-demo-btn">
              ${ic('sparkles', 16)}Launch Live Demo
              ${ic('arrow-right', 15)}
            </button>
            <button class="btn-hero-secondary" data-a="auth" data-v="signup" id="cta-signup-btn">
              ${ic('plus', 15)}Create Organization
            </button>
            <button class="btn-hero-secondary" data-a="auth" data-v="find-workspace" id="cta-find-btn">
              ${ic('building-2', 15)}Find Existing Workspace
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

function renderTenantCard(t) {
  const isRecommended = t.recommended;
  return `
  <div class="tenant-card ${isRecommended ? 'is-recommended' : ''}" data-tenant="${esc(t.id)}">
    <div class="tenant-card-top">
      <div class="tenant-avatar-box" style="background:${t.color}">
        ${ic(t.icon, 22)}
      </div>
      <div style="display:flex;align-items:center;gap:6px">
        ${isRecommended ? `<span class="landing-badge" style="font-size:10px">Flagship Demo</span>` : ''}
        <span class="tenant-plan-tag">${esc(t.plan)}</span>
      </div>
    </div>

    <div class="tenant-info">
      <h3>
        ${esc(t.name)}
      </h3>
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
      <button class="btn btn-primary btn-sm" data-a="tenantDemo" data-v="${esc(t.id)}" id="demo-${esc(t.id)}">
        ${ic('sparkles', 13)}Try Demo
      </button>
      <button class="btn btn-secondary btn-sm" data-a="selectTenant" data-v="${esc(t.id)}" id="signin-${esc(t.id)}">
        Sign In
      </button>
    </div>
  </div>
  `;
}
