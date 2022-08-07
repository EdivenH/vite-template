<script setup lang="ts">
import { ref } from "vue";
import { SvgIcon } from "./Icon/index";

const icons = import.meta.globEager("../assets/svg/*");

const iconUrls = Object.values(icons).map((mod: any) => {
  const fileName = mod.default.split("/").pop();
  const [svgName] = fileName.split(".");
  return svgName;
});

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <SvgIcon v-for="item in iconUrls" :key="item" :name="item" />

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: $theme-color;
  text-decoration: dashed;
}
</style>
