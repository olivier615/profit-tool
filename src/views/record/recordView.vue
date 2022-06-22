<template>
  <div class="pos-re text-light my-2">
    <span class="pos-ab bi bi-arrow-left-circle icon-l" style="left: 8px; top:-6px"
    @click.prevent="$router.back(-1)" />
    <h2 class="w-100 text-center text-l">运行纪录</h2>
  </div>
  <router-view />
</template>
