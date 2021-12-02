type TBuildFormData = (value: Record<string, string | File | undefined>) => FormData;

const buildFormData: TBuildFormData = values => {
  const formData = new FormData();
  for (const key of Object.keys(values)) {
    const value = values[key];
    if (value === undefined) continue;
    formData.append(key, value);
  }
  return formData;
};

export default buildFormData;
