<template>
  <div>
    <navbarPrimary/>
    <nuxt/>
    <registerModal/>
  </div>
</template>

<script>
import navbarPrimary from "@/components/layout/navbar";
import registerModal from "@/components/modals/register/index";
export default {
  components: {
    navbarPrimary,
    registerModal
  }
};
</script>
