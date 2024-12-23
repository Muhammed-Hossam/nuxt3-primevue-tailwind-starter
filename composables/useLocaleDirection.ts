export const useLocaleDirection = () => {
  const { locale } = useI18n();
  const dir = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')

  return { dir }
}