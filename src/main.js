/* =====================================================================
   ENTRY: styles, then every module in dependency order (several register
   global listeners or add handlers to the action table when they load), then boot.
   ===================================================================== */
import './styles/index.css';
import './core/utils.js';
import './core/icons.js';
import './core/constants.js';
import './data/seed.js';
import './core/store.js';
import './ui/helpers.js';
import './core/theme.js';
import './ui/toast.js';
import './ui/select.js';
import './shell/render.js';
import './shell/layout.js';
import './shell/skeletons.js';
import './shell/view-engine.js';
import './components/task-list.js';
import './pages/home.js';
import './pages/overview.js';
import './pages/my-tasks.js';
import './pages/tasks.js';
import './pages/inbox.js';
import './pages/notifications.js';
import './pages/favorites.js';
import './pages/projects.js';
import './pages/members.js';
import './pages/activity.js';
import './pages/search.js';
import './pages/errors.js';
import './pages/project.js';
import './views/project-overview.js';
import './views/board.js';
import './views/table.js';
import './views/calendar.js';
import './views/timeline.js';
import './views/files.js';
import './overlays/drawer.js';
import './overlays/modals.js';
import './overlays/popovers.js';
import './overlays/context-menu.js';
import './overlays/palette.js';
import './pages/settings.js';
import './pages/auth.js';
import './pages/landing.js';
import './pages/design-system.js';
import './actions/actions.js';
import './actions/events.js';
import './actions/keyboard.js';
import './actions/drag-drop.js';
import './features/teams.js';
import './features/subtasks.js';
import './features/archive.js';
import './actions/teams.js';
import './actions/subtasks.js';
import './actions/archive.js';
import { S, D } from './core/store.js';
import { A } from './actions/actions.js';
import { ROUTE_NAMES, render, go } from './shell/render.js';

export function syncRouteFromHash() {
  const raw = (location.hash || '').replace(/^#\/?/, '').trim();
  const authRoutes = ['login', 'signup', 'forgot', 'reset', 'verify', 'onboarding', 'find-workspace', 'tenant'];

  if (!raw || raw === 'landing') {
    // Root URL / or #/ -> Landing page
    S.ui.auth = null;
    S.ui.route = 'landing';
  } else if (raw === 'demo') {
    A.demoLogin();
    return;
  } else if (authRoutes.includes(raw)) {
    S.ui.auth = raw;
  } else if (raw.startsWith('dashboard')) {
    // /dashboard or /dashboard/{route} or /dashboard/project/{id}
    const parts = raw.split('/').filter(Boolean);
    const subRoute = parts[1] || S.prefs.home || 'home';
    const paramId = parts[2] || null;

    if (!S.session?.isAuthenticated) {
      S.ui.auth = 'find-workspace';
      location.hash = '#/find-workspace';
    } else {
      S.ui.auth = null;
      S.ui.route = ROUTE_NAMES[subRoute] ? subRoute : S.prefs.home || 'home';
      if (paramId) S.ui.params = { id: paramId };
    }
  } else if (ROUTE_NAMES[raw] && raw !== 'landing') {
    // Direct dashboard route access e.g. #projects or #home
    if (!S.session?.isAuthenticated) {
      S.ui.auth = 'find-workspace';
      location.hash = '#/find-workspace';
    } else {
      S.ui.auth = null;
      S.ui.route = raw;
    }
  } else {
    // Default fallback to landing page
    S.ui.auth = null;
    S.ui.route = 'landing';
  }
  render();
}

(function init() {
  document.documentElement.lang = 'en';
  if (!document.getElementById('sr-live')) {
    const l = document.createElement('div');
    l.id = 'sr-live';
    l.className = 'sr';
    l.setAttribute('aria-live', 'polite');
    document.body.appendChild(l);
  }
  syncRouteFromHash();
  window.addEventListener('hashchange', syncRouteFromHash);
})();

// Dev-only handle for debugging and screenshot tooling; stripped from production builds.
if (import.meta.env.DEV) window.__besomoy = { S, D, A, go, render };
