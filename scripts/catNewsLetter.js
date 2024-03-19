document.addEventListener('DOMContentLoaded', () => {
  const setupEventListener = (btnId, modalId, maskId, className = 'hidden') => {
      const button = document.getElementById(btnId);
      const modal = document.getElementById(modalId);
      const mask = document.getElementById(maskId);

      if (button && modal && mask) {
          button.addEventListener('click', () => {
              modal.classList.toggle(className);
              mask.classList.toggle(className);
          });

          mask.addEventListener('click', () => {
              modal.classList.add(className);
              mask.classList.add(className);
          });
      }
  };

  // Setup for specific button-modal-mask combinations
  setupEventListener('btn1', 'modal', 'mask');
  setupEventListener('btn3', 'modal', 'mask');
  setupEventListener('btn4', 'modal4', 'mask4', 'hidden4');
  setupEventListener('btn5', 'modal5', 'mask5', 'hidden5');
  setupEventListener('btn6', 'modal6', 'mask6', 'hidden6');
  setupEventListener('btn7', 'modal7', 'mask7', 'hidden7');
  setupEventListener('btn8', 'modal8', 'mask8', 'hidden8');
  setupEventListener('btn9', 'modal9', 'mask9', 'hidden9');
  setupEventListener('btn10', 'modal10', 'mask10', 'hidden10');
  // Add additional setups as needed

});