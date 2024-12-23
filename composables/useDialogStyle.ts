export const useDialogStyle = (maxWidth?: string, minHeight?: string, borderRadius?: string) => {

  const dialogStyle = computed(() => {
    return {
      maxWidth: maxWidth || '590px',
      width: '100%',
      minHeight: minHeight || '484px',
      boxShadow: '0px 4px 40px 0px #00000014',
      borderRadius: borderRadius || '16px'
    }
  });

  return {
    dialogStyle
  }
}