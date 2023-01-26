<template>
  <div>
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/grid-system">GridSystem</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
