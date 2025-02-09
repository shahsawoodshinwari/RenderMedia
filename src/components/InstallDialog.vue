<script>
export default {
  data() {
    return {
      deferredPrompt: null,
      modal: null,
    }
  },
  methods: {
    // Store the install event and show the modal
    setInstallPrompt(event) {
      this.deferredPrompt = event
      this.modal = new window.Modal(this.$refs.installDialog)
      this.modal.show()
    },
    // Handle install button click
    async installApp() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt() // Show native install prompt

        const choiceResult = await this.deferredPrompt.userChoice
        if (choiceResult.outcome === 'accepted') {
          this.modal.hide()
        } else {
          window.location.reload()
        }

        this.deferredPrompt = null // Reset after prompt is handled
      }
    },
  },
}
</script>

<template>
  <div
    class="modal fade"
    ref="installDialog"
    id="installPromptDialog"
    tabindex="-1"
    aria-labelledby="installPromptDialogLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 flex-grow-1" id="installPromptDialogLabel">
            {{ __('install_dialog.title') }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ __('install_dialog.description') }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn w-25 btn-secondary" data-bs-dismiss="modal">
            {{ __('buttons.cancel') }}
          </button>
          <button type="button" class="btn w-25 btn-primary" @click="installApp">
            {{ __('buttons.install') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal .btn-close {
  filter: invert(1);
}
</style>
