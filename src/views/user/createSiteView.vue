<template>
  <div class="d-flex bg-primary border-radius-1 mt-2 mb-3">
    <a href="#" class="w-100 text-center bg-light-green
    text-primary border-radius-pill-right fw-bolder py-1">
      新增盘口
    </a>
    <a href="#" class="w-100 text-center text-light-grey fw-bolder py-1">编辑盘口</a>
  </div>
  <div class="bg-gray-opa70 p-2 border-radius-1 mb-2">
    <h5 class="text-s border-bottom border-light border-1 text-light text-center pb-1">新增盘口</h5>
    <ul class="px-2 mt-2 d-flex flex-column gap-2">
      <li>
        <h6 class="text-xs border-bottom border-light border-1 text-light mb-2">盘口名称</h6>
        <input type="text" class="form-control bg-gray-opa70 text-light text-start me-2"
        placeholder="请输入盘口名称">
      </li>
      <li>
        <h6 class="text-xs border-bottom border-light border-1 text-light mb-2">盘口 API 网址</h6>
        <input type="text" class="form-control bg-gray-opa70 text-light text-start me-2"
        placeholder="请输入盘口 API 网址">
      </li>
      <li>
        <h6 class="text-xs border-bottom border-light border-1 text-light mb-2">API 帐号</h6>
        <input type="text" class="form-control bg-gray-opa70 text-light text-start me-2"
        placeholder="请输入盘口 API 帐号">
      </li>
      <li>
        <h6 class="text-xs border-bottom border-light border-1 text-light mb-2">API 密钥</h6>
        <input type="password" class="form-control bg-gray-opa70 text-light text-start me-2"
        placeholder="请输入盘口 API 密钥">
      </li>
      <li>
        <h6 class="text-xs border-bottom border-light border-1 text-light mb-2">使用者帐号</h6>
        <input type="text" class="form-control bg-gray-opa70 text-light text-start me-2"
        placeholder="请输入使用者帐号">
      </li>
      <li>
        <h6 class="text-xs border-bottom border-light border-1 text-light mb-2">使用者密码</h6>
        <input type="password" class="form-control bg-gray-opa70 text-light text-start me-2"
        placeholder="使用者密码">
      </li>
      <li>
        <h6 class="text-xs border-bottom border-light border-1 text-light mb-2">选择盘口图像</h6>
        <div class="d-flex flex-wrap gap-2 w-100">
          <img class="image-l" src="https://images.unsplash.com/photo-1509112756314-34a0badb29d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJpY2glMjBndXl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
          <img class="image-l" src="https://images.unsplash.com/photo-1525707354884-c46a90dbc336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzaHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
          <img class="image-l" src="https://images.unsplash.com/photo-1639781360241-dadbe5c28dce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvaW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
          <img class="image-l" src="https://images.unsplash.com/photo-1621861705161-cbb0953ecba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvaW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
          <img class="image-l" src="https://images.unsplash.com/photo-1644035772777-b39f34a95f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNvaW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
          <img class="image-l" src="https://images.unsplash.com/photo-1651055678337-bbe6661e5d92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvaW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
          <img class="image-l" src="https://images.unsplash.com/photo-1651055705032-d4187855b004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">
          <img class="image-l" src="https://images.unsplash.com/photo-1622450366971-2810df2e7abe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="">
          <div class="image-l border border-light border-1 d-flex justify-content-center align-items-center">
            <span class="bi bi-plus fs-1 text-light"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="d-flex justify-content-center mt-3 mb-5">
    <button @click.prevent="$router.push('/user/site')"
    type="button" class="btn btn-primary text-xs px-3 border-radius-2 nav-bg-dark-blue">保存盘口</button>
  </div>
</template>
