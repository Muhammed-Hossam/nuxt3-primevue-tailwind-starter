<template>
  <div class="header-wrapper fixed z-50 h-[76px] bg-gray2-light dark:bg-[#000000]">
    <header class=" h-[76px] bg-white dark:bg-dark rounded-t-[34px] flex items-center">
      
    </header>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav-links {
  .nav-link {
    &.router-link-active {
      &::before {
        background-color: #F4CE7C;
      }
    }
  }
}
</style>