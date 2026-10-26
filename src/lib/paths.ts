import { LANGS } from '../config';

export const langPaths = () => LANGS.map((lang) => ({ params: { lang } }));
