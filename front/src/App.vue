<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import ProfileLayout from '@/layouts/ProfileLayout'
import RegLayout from '@/layouts/RegLayout'
import AuthLayout from '@/layouts/AuthorizationLayout'

export default {
  computed:{
    layout() {
      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components:{
    MainLayout, ProfileLayout, RegLayout, AuthLayout
  }
}
</script>
