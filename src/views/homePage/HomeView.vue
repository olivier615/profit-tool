<template>
  <header>
    <div class="nav-bg-dark-blue d-flex align-items-center justify-content-between px-3 py-2 mb-2">
      <div class="d-flex align-items-center">
        <span class="bi bi-person-circle icon-xxl text-light"></span>
        <h1 class="fw-bolder mb-0 ms-3 text-light">精算盈利指标</h1>
      </div>
      <ul class="d-flex">
        <li class="ms-3">
          <router-link to="/index/programs">
            <span class="bi bi-headset icon-l text-light"></span>
          </router-link>
        </li>
        <li class="ms-3">
          <router-link to="/index/programs">
            <span class="bi bi-lightbulb icon-l text-light"></span>
          </router-link>
        </li>
        <li class="ms-3">
          <router-link to="/index/programs">
            <span class="bi bi-bell icon-l text-light"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
  <div class="px-1" style="padding-bottom: 58px;">
    <router-view />
  </div>
  <nav>
    <ul class="d-flex fixed-bottom justify-content-between px-5 py-2 nav-bg-dark-blue">
      <li>
        <router-link to="/index/programs" class="text-light">
          <div class="lh-1 d-flex flex-column align-items-center justify-content-center">
            <span class="bi bi-house-door-fill icon-xl mb-1"></span>
            <small>首页</small>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/favorite/overview" class="text-light">
          <div class="lh-1 d-flex flex-column align-items-center justify-content-center">
            <span class="bi bi-heart-fill icon-xl mb-1"></span>
            <small>我的最爱</small>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/record/operationalProgram" class="text-light">
          <div class="lh-1 d-flex flex-column align-items-center justify-content-center">
            <span class="bi bi-clipboard-minus-fill icon-xl mb-1"></span>
            <small>运行纪录</small>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/user/setting" class="text-light">
          <div class="lh-1 d-flex flex-column align-items-center justify-content-center">
            <span class="bi bi-person-lines-fill icon-xl mb-1"></span>
            <small>我</small>
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
