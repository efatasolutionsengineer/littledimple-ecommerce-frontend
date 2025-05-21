import { HomeData } from '@/types/home';

export const fetchHomeData = async (): Promise<HomeData> => {
  const res = await fetch('/api/home');

  if (!res.ok) {
    if (res.status === 404) throw new Error('Data not found');
    if (res.status === 500) throw new Error('Internal server error');
    throw new Error('Failed to fetch home data');
  }

  return res.json();
};
