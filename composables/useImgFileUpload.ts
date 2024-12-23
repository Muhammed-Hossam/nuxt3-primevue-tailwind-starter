export const useImgFileUpload = (multiple = false) => {
  const globalStore = useGlobalStore();
  const { t } = useI18n();

  const imgFile: any = ref(multiple ? [] : null);
  const imgUrl: any = ref(multiple ? [] : '');

  const onFileChange = (event: any) => {

    const files = Array.from(event.target.files);

    if (multiple) {
      imgFile.value = [];
      imgUrl.value = [];

      files.forEach((file: any) => {
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = () => {
            imgFile.value.push(file);
            imgUrl.value.push(URL.createObjectURL(file));
          };
          reader.readAsDataURL(file);
        }else {
          globalStore.showToast('error', t('global.error'), t('validation.please_select_valid_image_file'), 5000);
        }
      })

    }else {
      const file: any = files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          imgFile.value = file;
          imgUrl.value = URL.createObjectURL(file);
        };
        reader.readAsDataURL(file);
      } else {
        globalStore.showToast('error', t('global.error'), t('validation.please_select_valid_image_file'), 5000);
      }
    }
  }

  return {
    imgFile,
    imgUrl,
    onFileChange
  }

}