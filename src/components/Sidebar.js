import React from 'react'

const Sidebar = () => {
  return (
    <div id="hexa-icon-menu">
    <button id="hexa-btn-image" type="button" class="hexa-icon-menu-btn" data-target="#hexa-image">

      <img src="assets/custom/background.png" alt="background icon" class="hexa-custom-img hexa-normal-state-img" />
      <img src="assets/custom/background-hover.png" alt="background icon" class="hexa-custom-img hexa-hover-img" />
      <span class="hexa-icon-menu-title">Background</span>
    </button>
    <button id="hexa-btn-text" type="button" class="hexa-icon-menu-btn" data-target="#hexa-text">
      <img src="assets/custom/text.png" alt="background icon" class="hexa-custom-img hexa-normal-state-img" />
      <img src="assets/custom/text-hover.png" alt="background icon" class="hexa-custom-img hexa-hover-img" />
      <span class="hexa-icon-menu-title">Text</span>
    </button>
    <button id="hexa-btn-shapes" type="button" class="hexa-icon-menu-btn" data-target="#hexa-shapes">
      <img src="assets/custom/elements.png" alt="background icon" class="hexa-custom-img hexa-normal-state-img" />
      <img src="assets/custom/elements-hover.png" alt="background icon" class="hexa-custom-img hexa-hover-img" />
      <span class="hexa-icon-menu-title">Elements</span>
    </button>
    <button id="hexa-btn-elements" type="button" class="hexa-icon-menu-btn" data-target="#hexa-elements">
      <img src="assets/custom/icons.png" alt="background icon" class="hexa-custom-img hexa-normal-state-img" />
      <img src="assets/custom/icons-hover.png" alt="background icon" class="hexa-custom-img hexa-hover-img" />
      <span class="hexa-icon-menu-title">Icons</span>
    </button>
  </div>
  )
}

export default Sidebar