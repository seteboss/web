<template>
  <div>
   <Navbar></Navbar>
    <main role="main" class="col-auto px-md-4 max-width border-main">
      <router-view/>
    </main>
  </div>

</template>
<script>
import Navbar from "@/components/Navbar";
import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'
export default {
  components: {Navbar},
  bootstrap,
  styles
}


</script>
