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
            <h5 class="text-xs border-bottom border-light border-1">彩种</h5>
            <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap">
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
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1">
            <h5 class="text-xs border-bottom border-light border-1">运行条件</h5>
            <div class="p-2">
              <h6 class="text-xxs border-bottom border-light border-1">观察名次</h6>
              <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap mb-2">
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
                  <div class="form-check">
                    <input checked class="form-check-input" type="radio" name="watch-rank" id="watch-rank-1" value="watch-rank-1">
                    <label class="form-check-label" for="watch-rank-1">
                      冠军
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-rank" id="watch-rank-2" value="watch-rank-2">
                    <label class="form-check-label" for="watch-rank-2">
                      亚军
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-rank" id="watch-rank-3" value="watch-rank-3">
                    <label class="form-check-label" for="watch-rank-3">
                      季军
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-rank" id="watch-rank-4" value="watch-rank-4">
                    <label class="form-check-label" for="watch-rank-4">
                      第 4 名
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-rank" id="watch-rank-5" value="watch-rank-5">
                    <label class="form-check-label" for="watch-rank-5">
                      第 5 名
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-rank" id="watch-rank-6" value="watch-rank-6">
                    <label class="form-check-label" for="watch-rank-6">
                      第 6 名
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-rank" id="watch-rank-7" value="watch-rank-7">
                    <label class="form-check-label" for="watch-rank-7">
                      第 7 名
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-rank" id="watch-rank-8" value="watch-rank-8">
                    <label class="form-check-label" for="watch-rank-8watch-rank-8">
                      第 8 名
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-rank" id="watch-rank-9" value="watch-rank-9">
                    <label class="form-check-label" for="watch-rank-9">
                      第 9 名
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-rank" id="watch-rank-10" value="watch-rank-10">
                    <label class="form-check-label" for="watch-rank-10">
                      第 10 名
                    </label>
                  </div>
                </li>
              </ul>
              <h6 class="text-xxs border-bottom border-light border-1">观察结果</h6>
              <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap mb-2">
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
                  <div class="form-check">
                    <input checked class="form-check-input" type="radio" name="watch-result" id="watch-result-1" value="watch-result-1">
                    <label class="form-check-label" for="watch-result-1">
                      单或双
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-result" id="watch-result-2" value="watch-result-2">
                    <label class="form-check-label" for="watch-result-2">
                      大或小
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-result" id="watch-result-3" value="watch-result-3">
                    <label class="form-check-label" for="watch-result-3">
                      龙或虎
                    </label>
                  </div>
                </li>
              </ul>
              <h6 class="text-xxs border-bottom border-light border-1">连开期数</h6>
              <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap mb-2">
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
                  <div class="form-check">
                    <input checked class="form-check-input" type="radio" name="watch-repeat" id="watch-repeat-1" value="watch-repeat-1">
                    <label class="form-check-label" for="watch-repeat-1">
                      连续 2 期
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-repeat" id="watch-repeat-2" value="watch-repeat-2">
                    <label class="form-check-label" for="watch-repeat-2">
                      连续 3 期
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-repeat" id="watch-repeat-3" value="watch-repeat-3">
                    <label class="form-check-label" for="watch-repeat-3">
                      连续 4 期
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-repeat" id="watch-repeat-3" value="watch-repeat-3">
                    <label class="form-check-label" for="watch-repeat-3">
                      连续 5 期
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="watch-repeat" id="watch-repeat-4" value="watch-repeat-4">
                    <label class="form-check-label" for="watch-repeat-4">
                      连续 6 期
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1 d-flex flex-column">
            <h5 class="text-xs border-bottom border-light border-1">投注标的</h5>
            <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap">
              <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
                <div class="form-check">
                  <input checked class="form-check-input" type="radio" name="bet-target" id="bet-target-1" value="bet-target-1">
                  <label class="form-check-label" for="bet-target-1">
                    跟投
                  </label>
                </div>
              </li>
              <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="bet-target" id="bet-target-2" value="bet-target-2">
                  <label class="form-check-label" for="bet-target-2">
                    反投
                  </label>
                </div>
              </li>
            </ul>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1 d-flex flex-column">
            <h5 class="text-xs border-bottom border-light border-1">运行中止</h5>
            <div class="p-2">
              <h6 class="text-xxs border-bottom border-light border-1 mb-2">止盈</h6>
              <div class="d-flex align-items-center mb-2">
                <p class="text-s me-2">盈利达</p>
                <input type="text" class="form-control bg-gray-opa70 text-light text-center" placeholder="输入金额"
                style="width: 120px">
              </div>
              <h6 class="text-xxs border-bottom border-light border-1 mb-2">止损</h6>
              <div class="d-flex align-items-center">
                <p class="text-s me-2">亏损达</p>
                <input type="text" class="form-control bg-gray-opa70 text-light text-center" placeholder="输入金额"
                style="width: 120px">
              </div>
            </div>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1 d-flex flex-column">
            <h5 class="text-xs border-bottom border-light border-1">投注模式</h5>
            <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap">
              <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
                <div class="form-check">
                  <input checked class="form-check-input" type="radio" name="bet-mode" id="bet-mode-1" value="bet-mode-1">
                  <label class="form-check-label" for="bet-mode-1">
                    倍投模式
                  </label>
                </div>
              </li>
              <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="bet-mode" id="bet-mode-2" value="bet-mode-2">
                  <label class="form-check-label" for="bet-mode-2">
                    自订投注模式
                  </label>
                </div>
              </li>
            </ul>
            <div class="p-2">
              <h6 class="text-xxs border-bottom border-light border-1 mb-2">基准注额</h6>
              <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap">
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
                  <div class="form-check">
                    <input checked class="form-check-input" type="radio" name="bet-index" id="bet-index-1" value="bet-index-1">
                    <label class="form-check-label" for="bet-index-1">
                      100
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="bet-index" id="bet-index-2" value="bet-index-2">
                    <label class="form-check-label" for="bet-index-2">
                      500
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="bet-index" id="bet-index-3" value="bet-index-3">
                    <label class="form-check-label" for="bet-index-3">
                      1000
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="bet-index" id="bet-index-4" value="bet-index-4">
                    <label class="form-check-label" for="bet-index-4">
                      2000
                    </label>
                  </div>
                </li>
                <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="bet-index" id="bet-index-5" value="bet-index-5">
                    <label class="form-check-label" for="bet-index-5">
                      5000
                    </label>
                  </div>
                </li>
              </ul>
              <div class="d-flex mt-2 align-items-center">
                <p class="me-2 text-s">运行至中奖或投注</p>
                <input type="text" class="form-control bg-gray-opa70 text-light text-center me-2" placeholder="3 - 10 期"
                style="width: 120px">
                <p class="text-s">期</p>
              </div>
              <h6 class="text-xxs border-bottom border-light border-1 mb-2">倍投金额列表</h6>
              <p>100,200,400,800,1600,3200,6400</p>
            </div>
            <div class="p-2">
              <h6 class="text-xxs border-bottom border-light border-1 mb-2">自订投注模式</h6>
              <div class="mt-2">
                <input type="text" class="form-control bg-gray-opa70 text-light text-start me-2" placeholder="100,200,400,800..."
                style="width: 100%;">
                <p class="text-xxs text-light-grey mt-1">计画运行后将依照自订投注模式进行投注。</p>
                <p class="text-xxs text-light-grey">至少填入 3 组投注金额，最小为 0。例 : 0,100,200,500。</p>
                <p class="text-xxs text-light-grey">每组金额间以逗号或空白键区隔。</p>
              </div>
            </div>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1 d-flex flex-column">
            <h5 class="text-xs border-bottom border-light border-1">建议资金</h5>
            <p class="text-center mt-2">31,000</p>
          </li>
          <li class="bg-gray-opa70 p-2 mb-2 border-radius-1 d-flex flex-column">
            <h5 class="text-xs border-bottom border-light border-1">运行时段</h5>
            <ul class="d-flex flex-row border-0 gap-2 mt-2 flex-wrap">
              <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-info">
                <div class="form-check">
                  <input checked class="form-check-input" type="radio" name="bet-time" id="bet-time-1" value="bet-time-1">
                  <label class="form-check-label" for="bet-time-1">
                    手动开关
                  </label>
                </div>
              </li>
              <li class="py-1 px-2 border border-light border-1 border-radius-1 bg-gray-opa70">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="bet-time" id="bet-time-2" value="bet-time-2">
                  <label class="form-check-label" for="bet-time-2">
                    自订计画时间
                  </label>
                </div>
              </li>
            </ul>
            <div class="p-2">
              <h6 class="text-xxs border-bottom border-light border-1 mb-2">自订投注模式</h6>
              <div class="d-flex flex-row align-items-center">
                <input type="time" class="text-light">
                <span class="mx-2">至</span>
                <input type="time" class="text-light">
                <span class="bi bi-trash-fill ms-3 text-light-grey"></span>
              </div>
              <div class="d-flex justify-content-center py-3 gap-3">
                <button type="button" class="btn btn-outline-light px-3 text-xs border-radius-1">
                  新增时段
                </button>
                <div class="bg-gray-opa70 border border-1 border-radius-1 d-flex flex-column py-1 px-2">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                    <label class="form-check-label" for="flexCheckChecked">
                      开始运行时通知我
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-center py-3 gap-3">
          <button type="button" class="btn btn-outline-light px-3 text-xs border-radius-2"
          @click.prevent="$router.back(-1)">
            取消
          </button>
          <button type="button" class="btn btn-primary bg-bright-purple border-0 text-light px-3 text-xs border-radius-2"
          @click.prevent="$router.push('/customProgram')">
            储存计画副本
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
