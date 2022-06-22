<template>
  <div class="bg-gray-opa70 p-2 border-radius-1 mb-2">
    <h5 class="text-s border-bottom border-light border-1 text-light text-center pb-1">系统设置</h5>
    <ul class="pt-2 d-flex flex-column gap-2 text-light px-2">
      <li>
        <h6 class="text-xxs border-bottom border-light border-1 mb-2">通知音效</h6>
        <div class="d-flex align-items-center">
          <label for="customRange1" class="form-label mb-0 me-2">
            <span class="bi bi-volume-down-fill fs-3"></span>
          </label>
          <input type="range" class="form-range pe-2" id="customRange1">
        </div>
        <div class="form-check ms-1 my-2">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
          <label class="form-check-label" for="flexCheckChecked">
            关闭音效
          </label>
        </div>
      </li>
      <li>
        <h6 class="text-xxs border-bottom border-light border-1 mb-2">计画起讫通知</h6>
        <div class="d-flex gap-3">
          <div class="form-check form-switch">
            <label class="form-check-label" for="startProgram">开始运行</label>
            <input class="form-check-input input-switch" type="checkbox" role="switch" id="startProgram" checked>
          </div>
          <div class="form-check form-switch">
            <label class="form-check-label" for="endProgram">运行结束</label>
            <input class="form-check-input input-switch" type="checkbox" role="switch" id="endProgram" checked>
          </div>
          <div class="form-check form-switch">
            <label class="form-check-label" for="programError">异常中止</label>
            <input class="form-check-input input-switch" type="checkbox" role="switch" id="programError" checked>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
