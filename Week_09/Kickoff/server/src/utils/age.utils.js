export function getThirtyYearBirthday() {
  const today = new Date();

  return new Date(today.getFullYear() - 30, today.getMonth(), today.getDate());
}
