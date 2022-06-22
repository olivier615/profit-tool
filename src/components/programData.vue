<template>
<div class="mb-2 border-light border-1 border border-radius-1">
  <div class="bg-gray-opa70 border-radius-1">
    <a class="btn bg-gray-opa70  text-light text-s w-100 text-start px-0 py-2" data-bs-toggle="collapse" :href="`#collapseExample${sort}`" role="button"
    aria-expanded="false" :aria-controls="`#collapseExample${sort}`">
      <div class="d-flex justify-content-between px-2">
        <p>03:24</p>
        <p>253647195</p>
        <p>2</p>
        <p class="text-left">920</p>
        <span class="bi bi-caret-down-fill"></span>
      </div>
      <div class="collapse border-top border-light" :id="`collapseExample${sort}`">
        <div class="bg-gray-opa70 border-radius-bottom-1">
          <table class="table table-borderless text-light text-xs text-center mb-0">
            <thead>
              <tr>
                <th scope="col">排序</th>
                <th scope="col">期数</th>
                <th scope="col">注单</th>
                <th scope="col">结果</th>
                <th scope="col">获利</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>253647196</td>
                <td>1/双/1,000</td>
                <td>单</td>
                <td>-1,000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>253647197</td>
                <td>1/单/2,000</td>
                <td>双</td>
                <td>-3,000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>253647198</td>
                <td>1/双/4,000</td>
                <td>单</td>
                <td>-7,000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>253647199</td>
                <td>1/单/8,000</td>
                <td>双</td>
                <td>-15,000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>253647200</td>
                <td>1/双/16,000</td>
                <td>双</td>
                <td>360</td>
              </tr>
            </tbody>
            <tfoot class="border-top border-light">
              <tr>
                <td colspan="3">合计注额 31,000</td>
                <td colspan="2">合计获利 360</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </a>
  </div>
</div>

</template>

<script>
export default {
  props: ['sort']
}
</script>
