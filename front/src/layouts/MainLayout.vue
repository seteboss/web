<template>
  <div>
    <Navbar/>
    <main role="main" class="col-auto px-md-4 max-width">
      <router-view/>
    </main>
  </div>

</template>
<script>
import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'
import Navbar from "@/components/Navbar";

export default {
  name: 'main-layout',
  components: {
    Navbar
  },
  bootstrap,
  styles
}
</script>
