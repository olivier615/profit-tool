<template>
  <section>
    <div class="d-flex">
      <img src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      alt="" style="width: 50%;" class="img-fluid me-2 border-radius-1 card-shadow">
      <div class="w-100 card-shadow" style="height: 100%;">
        <div class="d-flex bg-blue-pink px-2 py-1 justify-content-between border-radius-top-1">
          <div class="d-flex align-items-center">
            <div class="nav-bg-dark-blue trophy-icon-box me-2">
              <span class="bi bi-trophy icon-m text-light p-1"></span>
            </div>
            <h4 class="mb-0 text-s fw-bold text-dark">本月前三</h4>
          </div>
          <span class="bi bi-caret-right-fill text-dark"></span>
        </div>
        <ul class="text-xs nav-bg-dark-blue p-2 text-light border-radius-bottom-1">
          <li class="d-flex justify-content-between p-1 border-bottom">
            <span>冠军正投单双</span>
            <span>103.42%</span>
          </li>
          <li class="d-flex justify-content-between p-1 border-bottom">
            <span>冠军正投双面</span>
            <span>96.77%</span>
          </li>
          <li class="d-flex justify-content-between p-1 border-bottom">
            <span>冠军反投 5 码</span>
            <span>92.02%</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="d-flex mt-2 text-light align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <span class="bi bi-megaphone-fill me-2 text-info"></span>
        <p class="text-s mb-0">**anr** 计画 1m2n3k 盈利 13,970</p>
      </div>
      <span class="bi bi-card-list icon-xl"></span>
    </div>
  </section>
  <router-view />
</template>
