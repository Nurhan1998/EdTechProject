
export const parseJSON = <T = Record<string, unknown>>(value: string): T | null => {
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    console.error(error);
    return null;
  }
};
