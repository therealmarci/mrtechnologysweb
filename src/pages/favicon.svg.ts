import { pixelIcon } from '../lib/pixelart';

export const GET = () => new Response(pixelIcon('grass'), { headers: { 'Content-Type': 'image/svg+xml' } });
