import { DimpleData } from '@/types/dimple';

export const fetchDimpleData = async (): Promise<DimpleData> => {
  const res = await fetch('/api/dimple-squad');
  if (!res.ok) {
    if (res.status === 404) throw new Error('Data not found');
    if (res.status === 500) throw new Error('Internal server error');
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
