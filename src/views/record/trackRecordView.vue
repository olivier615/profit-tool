<template>
  <div class="d-flex bg-primary border-radius-1 mt-2 mb-3">
    <router-link to="/record/operationalProgram" class="w-100 text-center text-light-grey fw-bolder py-1">
      运行中
    </router-link>
    <router-link to="/record/trackRecord" class="w-100 text-center bg-light-green
    text-primary border-radius-pill-left fw-bolder py-1">
      历史纪录
    </router-link>
  </div>
  <div class="bg-gray-opa70 p-2 border-radius-1 mb-2">
    <h5 class="text-s border-bottom border-light border-1 text-light text-center">彩种</h5>
    <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap text-light">
      <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
        <div class="form-check">
          <input checked class="form-check-input" type="radio" name="game-type" id="1mpk10" value="1mpk10">
          <label class="form-check-label" for="1mpk10">
            一分赛车
          </label>
        </div>
      </li>
      <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="game-type" id="3mpk10" value="3mpk10">
          <label class="form-check-label" for="3mpk10">
            三分赛车
          </label>
        </div>
      </li>
      <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="game-type" id="5mpk10" value="5mpk10">
          <label class="form-check-label" for="5mpk10">
            五分赛车
          </label>
        </div>
      </li>
    </ul>
  </div>
  <div class="bg-gray-opa70 p-2 border-radius-1 mb-2">
    <h5 class="text-s border-bottom border-light border-1 text-light text-center">依时间查找</h5>
    <div class="d-flex flex-row align-items-center mt-2 justify-content-center">
      <input type="text" style="width:96px" class="text-light form-control">
      <span class="mx-2 text-light">至</span>
      <input type="text" style="width:96px" class="text-light form-control">
      <button type="button" class="ms-3 btn btn-primary text-xs px-3 border-radius-2 nav-bg-dark-blue">查看</button>
    </div>
  </div>
  <ul class="d-flex gap-1 ms-2">
    <li class="p-1 border border-1 border-bottom-0 border-radius-top-1">
      <router-link to="/record/trackRecord" class="text-light text-s">
        依开始时间
        <span class="bi bi-sort-down"></span>
      </router-link>
    </li>
    <li class="p-1 border border-1 border-bottom-0 border-radius-top-1">
      <router-link to="/record/trackRecord" class="text-light text-s">
        已运行时间
        <span class="bi bi-sort-down"></span>
      </router-link>
    </li>
    <li class="p-1 border border-1 border-bottom-0 border-radius-top-1">
      <router-link to="/record/trackRecord" class="text-light text-s">
        依盈利
        <span class="bi bi-sort-down"></span>
      </router-link>
    </li>
  </ul>
  <operationalCard v-for="card in list" :key="card" :test="list[card - 1]" />
</template>

<script>
import operationalCard from '@/components/operationalCard.vue'
export default {
  components: {
    operationalCard
  },
  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>
