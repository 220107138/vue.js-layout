<script>
  import vButton from './components/Button.vue'
  import vTextField from './components/TextField.vue'
  import vSelect from './components/Dropdown.vue'
  import vTag from './components/Tag.vue'
  import vIconButton from './components/IconButton.vue'
  import vCard from './components/Card.vue'
  import vSidebar from './components/Sidebar.vue'
  import vHeader from './components/Header.vue'
  import vDashboard from './components/views/Dashboard.vue'

  export default {
    components: {
      vButton,
      vTextField,
      vSelect,
      vTag,
      vIconButton,
      vCard,
      vSidebar,
      vHeader,
      vDashboard
    },

    data() {
      return {
        current: 'Dashboard'
      };
    }
  }
</script>

<template>
  <div id="body">
    <v-sidebar/>
    <main>
      <v-header current="Dashboard"/>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
  * {
    transition: 0.3s;
  }
  body {
    margin: 0;
    overflow-y: scroll;
  }
  #body {
    background-color: rgb(245, 245, 245);
    display: flex;
    flex-direction: row;

    position: fixed;
    width: calc(100vw - 16px);
    height: calc(100vh - 16px);
  }
  main {
    flex-grow: 1;
  }
</style>
