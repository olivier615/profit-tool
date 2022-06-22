<template>
  <div class="text-dark mb-2">
    <div class="bg-blue-light-blue border-radius-top-1 px-2 py-1 d-flex justify-content-between align-items-center">
      <h5 class="mb-0 fw-bold text-s">一分赛车 - 冠军正投单双 {{ test }}</h5>
      <span class="bi bi-heart icon-m lh-1"></span>
    </div>
    <div class="d-flex py-2 px-2 justify-content-between bg-light-blue border-radius-bottom-1">
      <ul class="d-flex text-dark">
        <li class="text-center p-1">
          <p class="text-xxs">24h 收益%</p>
          <p class="text-s fw-bolder">97.91</p>
        </li>
        <li class="text-center p-1">
          <p class="text-xxs text-dark">触发次数</p>
          <p class="text-s fw-bolder">27</p>
        </li>
        <li class="text-center p-1">
          <p class="text-xxs text-dark">平均期数</p>
          <p class="text-s fw-bolder">2.66</p>
        </li>
      </ul>
      <div style="min-width:64px;">
        <img src="../assets/image/chart-s.png" alt="">
      </div>
      <div class="d-flex align-items-center">
        <button type="button" @click.prevent="$router.push('/program')"
        class="btn btn-primary text-xs px-3 border-radius-2 nav-bg-dark-blue">
          查看
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['test']
}
</script>
