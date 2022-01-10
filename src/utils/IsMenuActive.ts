import { NextRouter } from 'next/router';

const IsMenuActive = (path: string, router: NextRouter): boolean => router.pathname === path;

export default IsMenuActive;
