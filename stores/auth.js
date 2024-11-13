export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    phoneNumber: null,
    countryCode: '00966',
    token: useCookie("token").value || null,
    device_id: '11111111111',
    user: null,
    lat: null,
    lng: null,
    // for change phone cycle
    changePhone: {
      oldOTP: null,
      newPhone: null
    }
  }),
  getters: {
    isAuth: (state) => !!state.token
  },
  actions: {
    
  },
  persist: {
    storage: piniaPluginPersistedstate.cookies({
      sameSite: 'strict'
    })
  }
});
