export enum EStorageKeys {
  TOKEN = 'token'
}

export const getStorageData = (key: EStorageKeys | string): string | null => {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(key);
};

export const hasStorageData = (key: EStorageKeys): boolean => {
  if (typeof localStorage === 'undefined') return false;
  return !!localStorage.getItem(key);
};

export const setStorageData = async (key: EStorageKeys | string, value: string): Promise<void> => {
  if (typeof localStorage === 'undefined') return;
  await localStorage.setItem(key, value);
};

export const clearStorageData = async (): Promise<void> => {
  if(typeof localStorage === 'undefined') return;
  await localStorage.clear();
};
