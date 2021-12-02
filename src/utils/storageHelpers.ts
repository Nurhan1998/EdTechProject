export enum EStorageKeys {
  TOKEN = 'token'
}

export function getStorageData<T> (key: EStorageKeys | string): T | undefined {
  try {
    if (localStorage.getItem(key) !== null) {
      return JSON.parse(localStorage.getItem(key) || '{}') as T;
    }
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
}

export function setStorageData (key: EStorageKeys | string, value: string): void {
  localStorage.setItem(key, value);
}
