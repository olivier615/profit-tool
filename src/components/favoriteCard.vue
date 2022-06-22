<template>
  <div class="text-dark mb-2">
    <div class="bg-blue-light-blue border-radius-top-1 px-3 py-1 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <h5 class="mb-0 fw-bold text-s">一分赛车 - 冠军正投单双 {{ test }}</h5>
        <span class="ms-2 px-3 text-warning text-xxs border border-warning border-1 border-radius-pill"
        style="line-height: 1; padding-top: 2px; padding-bottom: 2px;">
          运行中
        </span>
      </div>
      <span class="bi bi-heart icon-m lh-1"></span>
    </div>
    <div class="d-flex py-2 px-3 justify-content-between bg-light-blue border-radius-bottom-1">
      <ul class="d-flex text-dark gap-2">
        <li class="text-center p-1">
          <p class="text-xxs">停利</p>
          <p class="text-m fw-bolder">5,000</p>
        </li>
        <li class="text-center p-1">
          <p class="text-xxs text-dark">止损</p>
          <p class="text-m fw-bolder">5,000</p>
        </li>
        <li class="text-center p-1">
          <p class="text-xxs text-dark">盈利</p>
          <p class="text-m fw-bolder">3,894</p>
        </li>
      </ul>
      <div class="d-flex align-items-center gap-3">
        <button type="button" class="btn btn-primary text-xs px-3 border-radius-2 bg-bright-red">
          中止计画
        </button>
        <button type="button" class="btn btn-primary text-xs px-3 border-radius-2 nav-bg-dark-blue"
        @click.prevent="$router.push('/program')">
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
