<template>
  <div class="text-dark mb-2">
    <div class="bg-blue-light-blue border-radius-top-1 px-3 py-1 d-flex justify-content-between align-items-center">
      <h5 class="mb-0 fw-bold text-s">一分赛车 - 冠军正投单双 {{ test }}</h5>
    </div>
    <div class="py-2 px-3 bg-gray-opa70 border-radius-bottom-1">
      <div class="">
        <div class="d-flex text-xs justify-content-between">
          <div class="">
            <div class="text-light d-flex flex-column gap-1">
              <div class="d-flex bg-gray-opa70 border-radius-1">
                <p style="width: 64px; padding-top: 2px; padding-bottom: 2px;"
                class="text-center border-end border-light-grey">开始运行</p>
                <p style="width: 96px; padding-top: 2px; padding-bottom: 2px;"
                class="text-center">06/07 15:00:45</p>
              </div>
              <div class="d-flex bg-gray-opa70 border-radius-1">
                <p style="width: 64px; padding-top: 2px; padding-bottom: 2px;"
                class="text-center border-end border-light-grey">已运行</p>
                <p style="width: 96px; padding-top: 2px; padding-bottom: 2px;"
                class="text-center">07:19:56</p>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column bg-gray-opa70 border-radius-1 text-light align-items-center"
          style="min-width: 80px;">
            <div class="d-flex align-items-center px-2"
            style="height:100%;">
              <p class="text-center">盈利</p>
            </div>
            <div class="d-flex align-items-center px-2"
            style="height:100%;">
              <p class="text-center text-s fw-bolder">3,760</p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <button type="button" class="btn btn-primary text-xs px-3 border-radius-2 bg-bright-red">
              中止计画
            </button>
          </div>
        </div>
      </div>
      <div class="mt-2 text-center">
        <a data-bs-toggle="collapse" :href="`#operationalCardData${test}`" role="button" aria-expanded="false" aria-controls="collapseExample">
          <span class="lh-1 bi bi-caret-down-fill text-info"></span>
        </a>
        <div class="collapse" :id="`operationalCardData${test}`">
          <div class="bg-gray-opa70">
            <programData v-for="card in list" :key="card" :sort="list[card - 1]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import programData from '@/components/programData.vue'

export default {
  props: ['test'],
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
