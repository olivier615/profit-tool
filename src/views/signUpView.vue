<template>
  <div class="px-4 d-flex flex-column justify-content-center align-items-center"
  style="height: 100vh; width: 100vw;">
    <div class="d-flex flex-column align-items-center mb-6">
      <img src="../assets/image/logo.png" alt="logo"
      style="width:165px;">
      <h1 class="fw-bolder mt-2 mb-0 text-light">精算盈利指标</h1>
    </div>
    <div class="mb-2 w-100">
      <h5 class="text-s border-bottom border-light border-1 text-light pb-1 mb-2">使用者帐号</h5>
      <input type="text" class="form-control bg-gray-opa70 text-light text-start" placeholder="请输入帐号">
    </div>
    <div class="mb-2 w-100">
      <h5 class="text-s border-bottom border-light border-1 text-light pb-1 mb-2">使用者密码</h5>
      <input type="password" class="form-control bg-gray-opa70 text-light text-start" placeholder="请输入密码">
    </div>
    <div class="mb-4 w-100">
      <h5 class="text-s border-bottom border-light border-1 text-light pb-1 mb-2">确认使用者密码</h5>
      <input type="password" class="form-control bg-gray-opa70 text-light text-start" placeholder="请输入密码">
    </div>
    <div class="w-100">
      <button @click.prevent="$router.push('/index/programs')" class="btn btn-info border-radius-1 fw-bolder w-100" type="button">註册</button>
    </div>
    <ul class="d-flex flex-column gap-4 align-items-center mt-6">
      <li>
        <router-link to="/signUp" class="text-info d-flex align-items-center flex-column">
          <div class="image-m d-flex justify-content-center align-items-center bg-light-green mb-2">
            <span class="bi bi-headset icon-l text-primary fs-5 lh-1"></span>
          </div>
          线上客服
        </router-link>
      </li>
      <li>
        <router-link to="/signIn" class="text-info">登入</router-link>
      </li>
    </ul>
  </div>
</template>
