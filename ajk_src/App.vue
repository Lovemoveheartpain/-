<template>
  <div id="app">
    <!-- <router-view /> -->
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
    <!-- <transition name="slide-fade">
      <router-view></router-view>
    </transition> -->
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      //页面的进出通过路由上的时间戳参数来决定
      const prevStamps = from.query.stamps || 0;
      const nextStamps = to.query.stamps || 0;
      this.transitionName =
        prevStamps > nextStamps ? "slide-right" : "slide-left";
    }
  }
};
</script>
<style>
/* .child-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition-property: transform, opacity;
  transition-duration: 0.6s;
  transition-timing-function: ease-out;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}
.slide-left-enter {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-enter-active {
  z-index: 10;
}
.slide-left-leave-active {
  z-index: 0;
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
  z-index: 11;
} */

/* .slide-fade-enter-active {
  transition: all 1s ease;
  -webkit-transition: all 5s ease;
  -moz-transition: all 5s ease;
  -ms-transition: all 5s ease;
  -o-transition: all 5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
}
.slide-fade-enter {
  transform: translateX(20px);
  -webkit-transform: translateX(20px);
  -moz-transform: translateX(20px);
  -ms-transform: translateX(20px);
  -o-transform: translateX(20px);
  opacity: 0;
}
.slide-fade-leave-active {
  opacity: 0;
} */


.child-view {
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -moz-box-sizing: border-box;
    box-sizing: border-box;
 transition: all .6s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
 opacity: 0;
 -webkit-transform: translate(-80px, 0);
 transform: translate(-80px, 0);
}
.slide-left-leave-active, .slide-right-enter {
 opacity: 0;
 -webkit-transform: translate(100%, 0);
 transform: translate(100%, 0);
 transform: rotateY(360deg)
}
</style>
