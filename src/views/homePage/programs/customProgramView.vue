<template>
  <div class="pos-re text-light my-2">
    <span class="pos-ab bi bi-arrow-left-circle icon-l" style="left: 8px; top:-6px"
    @click.prevent="$router.back(-1)" />
    <h2 class="w-100 text-center text-l">计画详情</h2>
  </div>
  <div class="text-dark mb-2">
    <div class="bg-pink-light border-radius-top-1 px-3 py-1 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <h5 class="mb-0 fw-bold text-m me-3">一分赛车 - 自订计画 1</h5>
        <span class="bi bi-pencil-square"></span>
      </div>
      <span class="bi bi-heart icon-m mb-1"></span>
    </div>
    <div class="bg-gray-opa70 border-radius-bottom-1 text-light">
      <div class="px-2 py-2">
        <ul class="">
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1">
            <h5 class="text-xs border-bottom border-light border-1">运行条件</h5>
            <p class="text-xs text-center mt-2">冠军连续 3 期开出单或双</p>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1">
            <h5 class="text-xs border-bottom border-light border-1">投注标的</h5>
            <p class="text-xs text-center mt-2">冠军跟投单或双</p>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1 d-flex flex-column">
            <h5 class="text-xs border-bottom border-light border-1">运行中止</h5>
            <p class="text-xs text-center mt-2">盈利或投注满 5 期</p>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1 d-flex flex-column">
            <h5 class="text-xs border-bottom border-light border-1">投注模式 / 预设基准</h5>
            <p class="text-xs text-center mt-2">倍投 / 1,000</p>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1 d-flex flex-column">
            <h5 class="text-xs border-bottom border-light border-1">运行时段</h5>
            <p class="text-xs text-center mt-2">手动开关</p>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1 d-flex flex-column">
            <h5 class="text-xs border-bottom border-light border-1">建议资金</h5>
            <p class="text-xs text-center mt-2">31,000</p>
          </li>
        </ul>
        <div class="d-flex justify-content-center py-3 gap-3">
          <button type="button" class="btn btn-primary bg-bright-purple border-0 text-light px-3 text-xs border-radius-2"
          @click.prevent="$router.push('/editProgram')">
            修改计画副本
          </button>
          <button type="button" class="btn btn-primary bg-bright-purple border-0 text-light px-3 text-xs border-radius-2">
            运行计画
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
