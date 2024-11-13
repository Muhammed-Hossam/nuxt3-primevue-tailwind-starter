export function useFetchAPI() {


  // const baseURL = useRuntimeConfig().public.api_base_url;
  const baseURL = 'https://backend.ctva.org.sa/api'
  const loading = ref(true)

  const fetchAPI  = async<T>(url: string, options = {}) => {
    const { data, status, error, refresh, clear } = await useFetch<T>(url, {
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + useCookie('token').value,
        ...options.headers
      },
      responseType: 'json',
      ...options,
      onRequest() {
        loading.value = true
        console.log('onRequest')
      },
      onResponse() {
        loading.value = false
        console.log('onResponse')
      },
      onRequestError() {
        loading.value = false
        console.log('onRequestError')
      }
    })

    watchEffect(() => {
      loading.value = !data.value && !error.value;
    })

    return {
      data,
      status,
      error,
      loading,
      refresh,
      clear
    }
  }


  return {
    fetchAPI,
  }

}