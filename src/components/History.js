import React from 'react'

const History = () => {
  return (
    <div id="modal-history" class="hexa-modal">
    <div class="hexa-modal-close" data-target="#modal-history">
      <span class="material-icons">close</span>
    </div>
    <div class="hexa-modal-wrap">
      <div class="hexa-modal-inner">
        <div class="hexa-modal-bg">
          <h3 class="hexa-history-title">
            History<button id="hexa-clear-history" type="button" class="hexa-btn danger">
              <span class="material-icons">clear</span>Clear History
            </button>
          </h3>
          <ul id="hexa-history-list" class="hexa-template-list" data-max="50"></ul>
          <p class="hexa-history-count">
            Showing your last
            <span id="hexa-history-count"></span> actions.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default History