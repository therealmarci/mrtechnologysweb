import type { Lang } from '../config';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Interne URL mit Base-Pfad, z.B. href('de', 'docs/mrsleep') -> /mrtechnologysweb/de/docs/mrsleep/ */
export function href(lang: Lang, path = '') {
  const clean = path.replace(/^\/|\/$/g, '');
  return `${base}/${lang}/${clean ? `${clean}/` : ''}`;
}

export const asset = (path: string) => `${base}/${path.replace(/^\//, '')}`;
