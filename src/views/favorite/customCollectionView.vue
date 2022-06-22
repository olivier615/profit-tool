<template>
  <div class="d-flex bg-primary border-radius-1 mt-2 mb-3">
    <router-link to="/favorite/overview" class="w-100 text-center text-light-grey fw-bolder py-1">
      总览
    </router-link>
    <router-link to="/favorite/customCollection" class="w-100 text-center bg-light-green
    text-primary border-radius-pill-left fw-bolder py-1">
      自订计画
    </router-link>
  </div>
  <ul class="d-flex gap-1 justify-content-center">
    <li class="p-1 border border-1 border-bottom-0 border-radius-top-1">
      <router-link to="/favorite/customCollection" class="text-light text-s">
        运行中
        <span class="bi bi-sort-down"></span>
      </router-link>
    </li>
    <li class="p-1 border border-1 border-bottom-0 border-radius-top-1">
      <router-link to="/favorite/customCollection" class="text-light text-s">
        已达停利
        <span class="bi bi-sort-down"></span>
      </router-link>
    </li>
    <li class="p-1 border border-1 border-bottom-0 border-radius-top-1">
      <router-link to="/favorite/customCollection" class="text-light text-s">
        已达止损
        <span class="bi bi-sort-down"></span>
      </router-link>
    </li>
    <li class="p-1 border border-1 border-bottom-0 border-radius-top-1">
      <router-link to="/favorite/customCollection" class="text-light text-s">
        计画中断
        <span class="bi bi-sort-down"></span>
      </router-link>
    </li>
  </ul>
  <div class="d-flex flex-column gap-1">
    <favoriteCard v-for="card in list" :key="card" :test="list[card - 1]" />
  </div>
</template>

<script>
import favoriteCard from '@/components/favoriteCard.vue'
export default {
  components: {
    favoriteCard
  },
  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>
