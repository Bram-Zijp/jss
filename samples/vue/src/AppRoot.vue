<!--
-->
<template>
  <div id="root">
    <context-view :visible="contextViewVisible" />
    <!-- 'router-view' is a "global" component that is injected into the Vue component registry by vue-router. -->
    <router-view v-if="!languageIsChanging" />
    <div v-if="languageIsChanging" class="alert alert-info">Language is changing...</div>
  </div>
</template>

<script>
import ContextView from './ContextView';

export default {
  name: 'AppRoot',
  data() {
    return {
      languageIsChanging: false,
      contextViewVisible: false,
    };
  },
  methods: {
    changeAppLanguage(language) {
      // Changing languages is an async action, therefore the `languageIsChanging` property can be used
      // to show a loading/switching screen when language is being changed.
      const i18n = this.$i18n.i18next;
      if (i18n.language !== language) {
        this.languageIsChanging = true;

        i18n.changeLanguage(language, () => {
          this.languageIsChanging = false;
        });
      }
    },
    toggleContextView() {
      this.contextViewVisible = !this.contextViewVisible;
    },
  },
  provide() {
    // Use Vue's provide/inject capabilities to "provide" functions to
    // any descendant component that want to use/"inject" the functions.
    return {
      changeAppLanguage: this.changeAppLanguage,
      toggleContextView: this.toggleContextView,
    };
  },
  components: {
    ContextView,
  },
};
</script>
