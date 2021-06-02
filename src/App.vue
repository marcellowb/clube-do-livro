<template>
    <router-view></router-view>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Clube do Livro",
  setup() {
    const router = useRouter();
    const back = () => router.replace("/");

    return { back };
  },
};
</script>

<style lang="scss" >


*,
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}


#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  width: 100%;
  height: 100vh;
  // background-color: #5f4b8bff;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}



</style>
