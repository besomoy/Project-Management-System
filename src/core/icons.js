/* ---------- icons: inlined Lucide subset (src/00-icons.js), rendered to inline svg ---------- */
import { ICONS } from 'virtual:icons';
import { esc } from './utils.js';

export const _icCache = {};
export function ic(name, size = 16, cls = '') {
  const k = name + '|' + size + '|' + cls;
  if (_icCache[k]) return _icCache[k];
  const inner = ICONS[name] || '<rect x="5" y="5" width="14" height="14" rx="3"/>';
  return (_icCache[k] =
    `<svg class="i ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`);
}
/* Besomoy Studio brand: wordmark follows theme text colour; the app mark is the bold 'B' on a dark tile. */
export const LOGO = (h = 22) =>
  `<svg class="logo" height="${h}" width="${Math.round(h * 6.2)}" viewBox="0 0 162 26" role="img" aria-label="Besomoy Studio"><text x="0" y="20" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="21" font-weight="700" letter-spacing="-0.03em" fill="currentColor">Besomoy <tspan font-weight="400" fill="var(--text-2, #8e8d8a)">Studio</tspan></text></svg>`;
export const MARK = (px = 22) =>
  `<svg width="${px}" height="${px}" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="7" fill="#1D1C1A"/><text x="16" y="23" text-anchor="middle" font-family="Inter, -apple-system, BlinkMacSystemFont, sans-serif" font-size="19" font-weight="800" fill="#fff" letter-spacing="-1">B</text></svg>`;
export function wsLogo(w, px = 22) {
  return w && w.brand
    ? `<span class="ws-logo brand" style="width:${px}px;height:${px}px">${MARK(px)}</span>`
    : `<span class="ws-logo" style="--c:${w.c};width:${px}px;height:${px}px;font-size:${Math.max(9, Math.round(px * 0.46))}px">${esc(w.name[0])}</span>`;
}
