<script>
import OfficialLogoFile from '@/assets/Render-Media-Official-Logo.png'
import OfficialLogoFileMini from '@/assets/Render-Media-Official-Logo-Mini.png'
import OfficialLogoFileCropped from '@/assets/Render-Media-Official-Logo-Cropped.png'

export default {
  name: 'OfficialLogo',
  props: {
    width: {
      type: String,
      default: '200',
    },
    mini: {
      type: Boolean,
      default: false
    },
    cropped: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    logo() {
      if (this.mini) {
        return OfficialLogoFileMini;
      }
      if (this.cropped) {
        return OfficialLogoFileCropped;
      }
      return OfficialLogoFile;
    }
  },
};
</script>

<template>
  <RouterLink :to="{ name: 'home' }">
    <img :src="logo" class="img-fluid" :width="width" :height="width" alt="Render Media Official Logo">
  </RouterLink>
</template>
