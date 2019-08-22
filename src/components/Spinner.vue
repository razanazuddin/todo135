<template>
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.spinner {
  width: 40px;
  height: 40px;
}
.spinner div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 31px;
  height: 31px;
  margin: 4px;
  border: 4px solid #4A5568;
  border-radius: 50%;
  animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #4A5568 transparent transparent transparent;
}
.spinner div:nth-child(1) {
  animation-delay: -0.45s;
}
.spinner div:nth-child(2) {
  animation-delay: -0.3s;
}
.spinner div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>