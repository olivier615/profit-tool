<template>
  <div class="bg-gray-opa70 px-2 py-3 d-flex justify-content-between mb-3 border-radius-1">
    <router-link to="/user/site">
      <div class="text-light d-flex align-items-center">
        <img src="https://images.unsplash.com/photo-1638913658211-c999de7fe786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bW9uZXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="" class="image-l me-3">
        <div class="">
          <div class="d-flex w-100 justify-content-center align-items-center text-xs mb-1">
            <p style="width: 64px;">当前盘口</p>
            <span class="bi bi-caret-right-fill text-xxs lh-1 mx-1"></span>
            <p style="width: 112px;" class="text-xs">超级娱乐城</p>
          </div>
          <div class="d-flex w-100 justify-content-center align-items-center">
            <p style="width: 64px;" class="text-xs">点数</p>
            <span class="bi bi-caret-right-fill text-xxs lh-1 mx-1"></span>
            <p style="width: 112px;" class="text-xs">4,688</p>
          </div>
        </div>
      </div>
    </router-link>
    <div class="d-flex justify-content-center align-items-center">
      <span class="badge rounded-pill bg-info text-dark">运行中</span>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <i class="bi bi-caret-right-fill text-light text-l"></i>
    </div>
  </div>
  <ul class="d-flex flex-column gap-2">
    <li class="bg-gray-opa70 border-radius-1">
      <router-link to="/user/createSite" class="text-s text-light d-flex justify-content-between align-items-center px-3 py-2">
        <span>盘口设置</span>
        <span class="bi bi-caret-right-fill text-xxs lh-1 mx-1"></span>
      </router-link>
    </li>
    <li class="bg-gray-opa70 border-radius-1">
      <router-link to="/user/system" class="text-s text-light d-flex justify-content-between align-items-center px-3 py-2">
        <span>系统设置</span>
        <span class="bi bi-caret-right-fill text-xxs lh-1 mx-1"></span>
      </router-link>
    </li>
    <li class="bg-gray-opa70 border-radius-1">
      <router-link to="/user/setting" class="text-s text-light d-flex justify-content-between align-items-center px-3 py-2">
        <span>语言</span>
        <span class="bi bi-caret-right-fill text-xxs lh-1 mx-1"></span>
      </router-link>
    </li>
    <li class="bg-gray-opa70 border-radius-1">
      <router-link to="/user/setting" class="text-s text-light d-flex justify-content-between align-items-center px-3 py-2">
        <span>帮助</span>
        <span class="bi bi-caret-right-fill text-xxs lh-1 mx-1"></span>
      </router-link>
    </li>
    <li class="bg-gray-opa70 border-radius-1">
      <router-link to="/user/setting" class="text-s text-light d-flex justify-content-between align-items-center px-3 py-2">
        <span>线上客服</span>
        <span class="bi bi-caret-right-fill text-xxs lh-1 mx-1"></span>
      </router-link>
    </li>
    <li class="bg-gray-opa70 border-radius-1">
      <router-link to="/user/setting" class="text-s text-light d-flex justify-content-between align-items-center px-3 py-2">
        <span>分享 APP</span>
        <span class="bi bi-caret-right-fill text-xxs lh-1 mx-1"></span>
      </router-link>
    </li>
  </ul>
</template>
