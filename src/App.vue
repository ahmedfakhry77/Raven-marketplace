<template>
  <div>
    <!-- APP BAR -->
    <app-bar />

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";

export default {
  name: "App",
  components: { AppBar },
  data() {
    return {};
  },

  mounted() {},
};
</script>
<style lang="css">
body {
  background-color: #f7f7f7;
}
@import "./assets/style.css";
.btn-link {
  width: 60px;
}
.app-flag {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.headetr {
  padding: 10px;
  background-color: #f9f9f9;
}
.aside {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  padding-top: 15px;
}
.lang-btn {
  padding: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.app-switcher {
  margin: 15px;
  margin-top: 10px;
}
.notification {
  margin: 8px;
  margin-top: 7px;
}
.slide-icon {
  margin-bottom: 10px;
  padding: 10px;
}
.ac {
  background-color: black;
  padding: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter {
  transform: translateY(-70px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-activ {
  transition: all 0.8s ease;
}
.fade-leave {
  transform: translateY(70px);
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-activ {
  transition: all 0.8s ease;
}
.slide-fade-leave {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-fade-move {
  transition: transform 0.5 ease-in;
}
</style>
