<template>
  <div class="pos-re text-light my-2">
    <span class="pos-ab bi bi-arrow-left-circle icon-l" style="left: 8px; top:-6px"
    @click.prevent="$router.back(-1)" />
    <h2 class="w-100 text-center text-l">计画详情</h2>
  </div>
  <div class="text-dark mb-2 ">
    <div class="bg-pink-light border-radius-top-1 px-3 py-1 d-flex justify-content-between align-items-center">
      <h5 class="mb-0 fw-bold text-m">一分赛车 - 冠军正投单双</h5>
      <span class="bi bi-heart icon-m mb-1" />
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
          <button type="button" @click.prevent="$router.push('/editProgram')"
          class="btn btn-primary bg-bright-purple border-0 text-light px-3 text-xs border-radius-2">
            修改计画副本
          </button>
          <button type="button" class="btn btn-primary bg-bright-purple border-0 text-light px-3 text-xs border-radius-2">
            运行计画
          </button>
        </div>
      </div>
      <div class="px-2">
        <h3 class="text-s text-center border-bottom border-1 fw-bolder">过往运行统计</h3>
        <div class="d-flex justify-content-center py-2 gap-2">
          <button type="button" class="btn btn-primary bg-light-green border-0 text-dark px-3 text-s">
            24 小时
          </button>
          <button type="button" class="btn btn-outline-light px-3 text-s">
            7 日
          </button>
          <button type="button" class="btn btn-outline-light px-3 text-s">
            30 日
          </button>
        </div>
        <div class="">
          <p>chart</p>
        </div>
        <ul class="d-flex text-light justify-content-center">
          <li class="text-center p-1">
            <p class="text-xxs">24h 收益%</p>
            <p class="text-s fw-bolder">97.91</p>
          </li>
          <li class="text-center p-1">
            <p class="text-xxs">触发次数</p>
            <p class="text-s fw-bolder">27</p>
          </li>
          <li class="text-center p-1">
            <p class="text-xxs">平均投注期数</p>
            <p class="text-s fw-bolder">2.66</p>
          </li>
        </ul>
      </div>
      <div class="px-2 mt-2">
        <h3 class="text-s text-center border-bottom border-1 fw-bolder">近 5 次触发纪录</h3>
        <div class="mt-1 pb-2">
          <ul class="d-flex text-xxs justify-content-between mb-1">
            <li>
              <span>触发时间</span>
            </li>
            <li>
              <span>起始期号</span>
            </li>
            <li>
              <span>投注期数</span>
            </li>
            <li>
              <span>运行结果</span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
          <programData v-for="data in list" :key="data" :sort="list[data - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import programData from '@/components/programData.vue'

export default {
  components: {
    programData
  },
  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>
