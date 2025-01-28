import type { UserConfig } from 'vite'
import {resolve} from 'path'
export default {
  css:{
    preprocessorOptions:{
        scss:{
            api:'modern-compiler',
            silenceDeprecations: ['import'],
            additionalData:`
            @import "@/assets/sass/abstract.scss";
            @import "@/assets/sass/base.scss";
            @import "@/assets/sass/layout.scss";
            @import "@/assets/sass/components.scss";
          
            
            `
        }
    },
    
  },
  resolve:{
    alias:{
        '@':resolve(__dirname, 'src')
    }
  }
} satisfies UserConfig