<template>
  <div id="app">
    <b-container>
      <Navbar />
      <div class="mt-3">
        <router-view />
        <!-- 
           <router-view :key="$route.fullPath" />
           Urldeki değişikliklerde componentin render olması için kullanıyoruz...
          Reload components when the URL changes, including query parameters

          ** Storelardaki modullerin kullanılabilmesi için namespaced'ı trueya çekmek gerekiyor.
          ** Başka bir modüle ait mutation başka bir modülden çağrılmamalıdır...
          ** Mutationlar yalnızca kendi modülünde bulunan actionlar tarafından çağrılmalıdır... 

          /*
            ** Bir modül içinden başkat bir içinden başka bir modüle ait mutationı çalıştırmak için
            dispatch('moduleName'/actionToCall', payload, { root: true})
            // { root: true} Dispatch edilen action için root store'a bakar...
          */
        -->
      </div>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar
  }
};
</script>

<style></style>
