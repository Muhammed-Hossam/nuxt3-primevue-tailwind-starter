<template>
  <div class="home-page">
    <div class="container">
      <div class="flex flex-col gap-4 mt-4">
        <h1 class="text-4xl font-bold text-indigo-500">Home Page</h1>
        <h2>{{ authStore.device_id }}</h2>
        <InputOtp v-model="value" pt:root:class="w-12 h-12 border-4 border-indigo-500"  />
        <Button type="button" label="refresh" icon="pi pi-refresh" :loading="loading" @click="refresh" />
        <Button type="button" label="clear" icon="pi pi-refresh" :loading="loading" @click="clear" />
        <p class="text-4xl font-bold text-emerald-500" v-html="data.data"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
const authStore = useAuthStore();
const { fetchAPI } = useFetchAPI();

const value = ref('');


const { data, status, error, loading, refresh, clear } = await fetchAPI('/terms');
// const { data, status, error, refresh, clear } = useFetch('/todos/1');



console.log('data ==>', data);
console.log('status ==>', status);
console.log('error ==>', error);


// onBeforeMount(() => {
//   console.log('onBeforeMount');
//   refresh();
// });

// onMounted(() => {
//   refresh();
//   console.log('onMounted');
// });


</script>

<style>

</style>