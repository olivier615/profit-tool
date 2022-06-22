<template>
    <section>
    <div class="pos-re mt-2">
      <div class="text-primary border border-info border-radius-2 border-start-0">
        <div class="d-flex align-items-center justify-content-between pe-3">
          <div class="d-flex align-items-center">
            <h4 class="pos-ab mb-0 text-xs text-info bg-primary border border-primary border-2 p-2 border-radius-filler me-3">筛选条件</h4>
            <ul class="d-flex align-items-center py-1" style="margin-left: 82px;">
              <li class="d-flex align-items-center bg-light-green px-2 border-radius-pill me-2">
                <p class="mb-0 text-s me-2">一分赛车</p>
                <span class="bi bi-x-circle-fill"></span>
              </li>
              <li class="d-flex align-items-center bg-light-green px-2 border-radius-pill me-2">
                <p class="mb-0 text-s me-2">单双正投</p>
                <span class="bi bi-x-circle-fill"></span>
              </li>
            </ul>
          </div>
          <router-link to="/index/searchProgram">
            <span class="bi bi-plus-circle icon-xl text-info" style="line-height: 1rem;"></span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section>
    <ul class="text-light d-flex text-s mt-2 justify-content-center">
      <li class="border-radius-top-1 me-1 px-2 py-2 d-flex nav-bg-dark-blue text-info">
        <span class="me-2">24h% 收益</span>
        <span class="bi bi-sort-down"></span>
      </li>
      <li class="border-radius-top-1 me-1 px-2 py-2 d-flex border border-1 border-light border-bottom-0">
        <span class="me-2">1 週 % 收益</span>
        <span class="bi bi-sort-down"></span>
      </li>
      <li class="border-radius-top-1 me-1 px-2 py-2 d-flex border border-1 border-light border-bottom-0">
        <span class="me-1">30 日 % 收益</span>
        <span class="bi bi-sort-down"></span>
      </li>
    </ul>
    <div class="d-flex flex-column">
      <programCard v-for="card in list" :key="card" :test="list[card - 1]" />
    </div>
  </section>
</template>

<script>
import programCard from '@/components/programCard.vue'
export default {
  components: {
    programCard
  },
  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>
