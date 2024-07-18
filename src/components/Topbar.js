import React from 'react'

const Topbar = () => {
  return (
    <div id="hexa-top-bar">
    <div className="hexa-logo">
      <a href="index.html">
        <img className="logo-desktop" src="assets/custom/logo.png" />
        <img className="logo-mobile" src="assets/custom/logo.png" />
      </a>
    </div>

    <div className="hexa-save-new-button-container">
      <div className="hexa-save">
        <button id="hexa-save" type="button" className="hexa-btn primary hexa-modal-open" autocomplete="off"
          data-target="#modal-save" disabled><span className="material-icons">save</span><span className="hexa-btn-text">Save
          </span></button>
      </div>
      <div className="hexa-new">
        <button id="hexa-new" type="button" className="hexa-btn primary hexa-modal-open" autocomplete="off"
          data-target="#modal-add-new"><span className="material-icons">add_circle</span><span
            className="hexa-btn-text">Library</span></button>
      </div>
    </div>
  </div>
  )
}

export default Topbar