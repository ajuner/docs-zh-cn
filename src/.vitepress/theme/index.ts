import { h, App } from 'vue'
import { VPTheme, VTBadge } from '@vue/theme'
import Banner from './components/Banner.vue'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
import './styles/badges.css'
import './styles/utilities.css'
import './styles/inline-demo.css'
import './styles/options-boxes.css'
// import './styles/scrollbar.css'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      banner: () => h(Banner),
      'sidebar-top': () => h(PreferenceSwitch)
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.component('Badge', VTBadge)
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
  }
})
