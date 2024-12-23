import { ref } from 'vue';
import { useNuxtApp, useRuntimeConfig, useFetch } from '#app';

export function useAPI() {
  const baseURL = useRuntimeConfig().public.api_base_url;
  const loading = ref(false);
  const { $i18n } = useNuxtApp();

  // Function to create common options
  const createFetchOptions = (options: any = {}) => {
    const token = useCookie('token').value;

    return {
      baseURL,
      headers: {
        Accept: 'application/json',
        // add authorization header
        ...(token && { Authorization: `Bearer ${token}` }), // Add Authorization header only if the token exists
        lang: options.lang || $i18n.locale.value,
        ...options.headers,
      },
      responseType: 'json' as const,
      ...options,
    }
  }

  // Using `useFetch` utility
  const useFetchAPI = async <T>(url: string, options = {}) => {
    const { data, status, error, refresh, clear } = await useFetch<T>(url, createFetchOptions(options));

    loading.value = status.value === 'pending' ? true : false;

    return {
      data,
      loading,
      error,
      refresh,
      clear,
    };
  };

  // Using `$fetch` utility
  const $fetchAPI = async <T>(url: string, options: any = {}) => {
    try {
      loading.value = true;
      console.log('$fetch: onRequest');
      const data = await $fetch<T>(url, {
        ...createFetchOptions(options),
        method: options.method || 'POST',
        body: options.body,
        
      });
      console.log('$fetch: onResponse');
      
      return { data, error: null };
    } catch (error) {
      console.log('error ==> ', error);
      return { data: null, error };
    } finally {
      loading.value = false;
    }
  };

  return {
    useFetchAPI,
    $fetchAPI,
    loading,
  };
}
