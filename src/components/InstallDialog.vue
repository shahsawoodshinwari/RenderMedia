<template>
  <div class="modal fade" ref="installDialog" id="installPromptDialog" tabindex="-1" aria-labelledby="installPromptDialogLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="installPromptDialogLabel">Install App</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Install our app for a better user experience and real-time updates.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" @click="installApp">Install</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deferredPrompt: null,
    };
  },
  methods: {
    // Store the install event and show the modal
    setInstallPrompt(event) {
      this.deferredPrompt = event;
      const modal = new window.Modal(this.$refs.installDialog);
      modal.show();
    },
    // Handle install button click
    async installApp() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt(); // Show native install prompt

        const choiceResult = await this.deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }

        this.deferredPrompt = null; // Reset after prompt is handled
      }
    },
  },
};
</script>
