<template>
  <div class="container-fluid px-0 d-flex flex-column svh-100 align-items-center">
    <main class="flex-grow-1 container px-3">
      <RouterView />
    </main>
  </div>
</template>

<style>
.bg-theme {
  background-color: #001f3f;
}

body {
  background-color: #001f3f;
  background-image: url('../assets/background-icons.svg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
