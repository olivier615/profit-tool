<template>
  <section>
    <div class="pos-re mt-2">
      <div class="text-primary border border-info border-radius-2 border-start-0">
        <div class="d-flex align-items-center justify-content-between pe-3
        border-radius-2 bg-blue-light-blue">
          <div class="d-flex align-items-center">
            <h4 class="pos-ab mb-0 text-xs text-info bg-primary border border-primary
            border-2 p-2 border-radius-filler me-3">
              筛选条件
            </h4>
            <div class="d-flex align-items-center py-1" style="margin-left: 128px;">
              <p class="text-dark fw-bold">请选择筛选项目</p>
            </div>
          </div>
          <span class="bi bi-x-circle icon-xl text-primary" style="line-height: 1rem;"
          @click.prevent="$router.back(-1)" />
        </div>
      </div>
    </div>
    <div class="bg-gray-opa70 px-2 border-radius-2 mt-1 text-light">
      <div class="py-2">
        <h5 class="text-light border-bottom border-1 border-info text-s">彩票种类</h5>
          <ul class="d-flex flex-row border-0 gap-2 mt-2">
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
    </div>
    <div class="bg-gray-opa70 px-2 border-radius-2 mt-1 text-light">
      <div class="py-2">
        <h5 class="text-light border-bottom border-1 border-info text-s">收益率</h5>
          <ul class="d-flex flex-row border-0 gap-2 mt-2">
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
              <div class="form-check">
                <input checked class="form-check-input" type="radio" name="game-profit" id="24hr" value="24hr">
                <label class="form-check-label" for="24hr">
                  24 小时
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="game-profit" id="7days" value="7days">
                <label class="form-check-label" for="7days">
                  7 日
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="game-profit" id="30days" value="30days">
                <label class="form-check-label" for="30days">
                  30 日
                </label>
              </div>
            </li>
          </ul>
      </div>
    </div>
    <div class="bg-gray-opa70 px-2 border-radius-2 mt-1 text-light">
      <div class="py-2">
        <h5 class="text-light border-bottom border-1 border-info text-s">投注模式</h5>
          <ul class="d-flex flex-row border-0 gap-2 my-2">
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
              <div class="form-check">
                <input checked class="form-check-input" type="radio" name="program-mode" id="mode-1" value="mode-1">
                <label class="form-check-label" for="mode-1">
                  单双正投
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-2" value="mode-2">
                <label class="form-check-label" for="mode-2">
                  单双反投
                </label>
              </div>
            </li>
          </ul>
          <ul class="d-flex flex-row border-0 gap-2 mt-2">
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
              <div class="form-check">
                <input checked class="form-check-input" type="radio" name="program-mode" id="mode-3" value="mode-3">
                <label class="form-check-label" for="mode-3">
                  大小正投
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-4" value="mode-4">
                <label class="form-check-label" for="mode-4">
                  大小反投
                </label>
              </div>
            </li>
          </ul>
          <ul class="d-flex flex-row border-0 gap-2 mt-2">
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
              <div class="form-check">
                <input checked class="form-check-input" type="radio" name="program-mode" id="mode-5" value="mode-5">
                <label class="form-check-label" for="mode-5">
                  5 码正投
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-6" value="mode-6">
                <label class="form-check-label" for="mode-6">
                  5 码反投
                </label>
              </div>
            </li>
          </ul>
          <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap">
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
              <div class="form-check">
                <input checked class="form-check-input" type="radio" name="program-mode" id="mode-7" value="mode-7">
                <label class="form-check-label" for="mode-7">
                  冠军 9 码
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-8" value="mode-8">
                <label class="form-check-label" for="mode-8">
                  亚军 9 码
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-9" value="mode-9">
                <label class="form-check-label" for="mode-9">
                  季军 9 码
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-10" value="mode-10">
                <label class="form-check-label" for="mode-10">
                  第 4 名 9 码
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-11" value="mode-11">
                <label class="form-check-label" for="mode-11">
                  第 5 名 9 码
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-12" value="mode-12">
                <label class="form-check-label" for="mode-12">
                  第 6 名 9 码
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-13" value="mode-13">
                <label class="form-check-label" for="mode-13">
                  第 7 名 9 码
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-14" value="mode-14">
                <label class="form-check-label" for="mode-14">
                  第 8 名 9 码
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-15" value="mode-15">
                <label class="form-check-label" for="mode-15">
                  第 9 名 9 码
                </label>
              </div>
            </li>
            <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="program-mode" id="mode-16" value="mode-16">
                <label class="form-check-label" for="mode-16">
                  第 10 名 9 码
                </label>
              </div>
            </li>
          </ul>
      </div>
      <div class="d-flex justify-content-center pt-3 pb-5">
        <button type="button" class="btn btn-outline-light me-4 px-4"
        @click.prevent="$router.back(-1)">取消</button>
        <button type="button" class="btn btn-info px-4"
        @click.prevent="$router.push('/index/programs')">确定</button>
      </div>
    </div>
  </section>
</template>
