export function classNames<T extends Record<string, unknown>>(classNameObject: T) {
  let result = '';
  for (const [className, condition] of Object.entries(classNameObject)) {
    if (condition) {
      result = result.concat(' ' + className);
    }
  }
  return result;
}
