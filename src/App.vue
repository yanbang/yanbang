<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'
import store from 'store'

export default {
  data () {
    return {
    }
  },
  computed: {
    locale () {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      title && (setDocumentTitle(i18nRender(title)))
      return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
    }
  },
  mounted() {
   
    window.addEventListener('beforeunload',e =>{
      window.sessionStorage.removeItem('selectTime')
    })
  }

}
</script>
