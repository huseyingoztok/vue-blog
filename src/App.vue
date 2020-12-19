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
          ** Başka bir modüle ait mut ation başka bir modülden çağrılmamalıdır...
          ** Mutationlar yalnızca kendi modülünde bulunan actionlar tarafından çağrılmalıdır... 

          /*
            ** Bir modül içinden başkat bir içinden başka bir modüle ait mutationı çalıştırmak için
            dispatch('moduleName'/actionToCall', payload, { root: true})
            // { root: true} Dispatch edilen action için root store'a bakar...
          */


          /*
            * By default Vue gives us many component lifecycle methods
              * beforeCreated();
              * created();
              * beforeMount();
              * mounted();
              * beforeUpdate();
              * updated();
              * beforeDestroy();
              * destroyed();

              >> In Component Route Guards
              * When using Vue Router, we get three more hooks called Route navigation Guards

                * beforeRouteEnter(routeTo, routeFrom, next);
                  - Called before component is created.
                  - Doesn't have access to "this"
                * beforeRouteUpdate(routeTo, routeFrom, next);
                  - Called when the route changes, but still using the same component. Has access to this.
                * beforeRouteLeave(routeTo, routeFrom, next);
                  - Called when this component is navigated away from. Has access to "this"
                  routeTo: The route being navigated to
                  routeFrom: The current Route
                  next: The function that must be called to resolve the hook


                All must call next()
                next() Confirm the navigation
                next(false) Cancel navigation
                next(/) Redirect to this path
                next({ name: 'event-list' }) Redirect to this named path

                >> Global Routing Guards
                  Allow us to add hooks that run whenever navigation is triggered

                  * Guards are called on the router object
                  const router = new Router({...})

                  router.beforeEach((routeTo, routeFrom, next) => {
                    next();
                  });
                    - Runs before navigating to a component. Must call next()
 
                  
                  router.afterEach((routeTo, routeFrom) => {...})
                  Runs right before component is created. Doesn't have next()

                  Vue Router Guards Calling Order 
                    * router.beforeEach
                    * beforeEnter (Per route guard)
                    * beforeRouteEnter
                    * router.afterEach
                    * Vue lifecycle methods...
                  
          */
        -->
      </div>
      <NotificationContainer />
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NotificationContainer from './components/NotificationContainer.vue';
export default {
  components: {
    Navbar,
    NotificationContainer
  }
};
</script>

<style></style>
