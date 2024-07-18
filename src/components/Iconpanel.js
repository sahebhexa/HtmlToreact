import React from 'react'

const Iconpanel = () => {
  return (
    <div id="hexa-icon-panel">
    <div id="hexa-icon-panel-inner">
      <div id="hexa-adjust" className="hexa-icon-panel-content">
        <ul className="hexa-accordion">
          <li className="accordion-crop hide-on-canvas-mode">
            <a href="#">
              <span className="material-icons accordion-icon">crop</span>Crop
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div className="hexa-control-wrap label-block">
                <div className="hexa-control">
                  <select
                    id="hexa-crop-style"
                    className="hexa-select hexa-select2"
                    autoComplete="off"
                  >
                    <option value="">Please select</option>
                    <option value="freeform" data-icon="crop_free">
                      Freeform
                    </option>
                    <option value="custom" data-icon="crop">
                      Custom
                    </option>
                    <option value="square" data-icon="crop_square">
                      Square
                    </option>
                    <option value="original" data-icon="crop_original">
                      Original Ratio
                    </option>
                  </select>
                </div>
              </div>
              <div className="hexa-control-wrap hexa-resize-wrap crop-custom">
                <input
                  id="hexa-crop-width"
                  className="hexa-form-field"
                  type="number"
                  defaultValue=""
                  data-max=""
                  autoComplete="off"
                />
                <span className="material-icons">clear</span>
                <input
                  id="hexa-crop-height"
                  className="hexa-form-field"
                  type="number"
                  defaultValue=""
                  data-max=""
                  autoComplete="off"
                />
                <button
                  id="hexa-crop-lock"
                  type="button"
                  className="hexa-btn hexa-lock-unlock hide-on-canvas-mode active"
                >
                  <span className="material-icons">lock</span>
                </button>
              </div>
              <div
                id="hexa-crop-btns"
                className="hexa-control-wrap hexa-submit-btns disabled"
              >
                <button
                  id="hexa-crop-apply"
                  type="button"
                  className="hexa-btn primary"
                >
                  Apply
                </button>
                <button id="hexa-crop-cancel" type="button" className="hexa-btn">
                  Cancel
                </button>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <span className="material-icons accordion-icon">refresh</span>Rotate
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div className="hexa-control-wrap label-block">
                <div className="hexa-control">
                  <div className="hexa-btn-group icon-group">
                    <button
                      id="hexa-rotate-right"
                      type="button"
                      className="hexa-btn tooltip"
                      data-title="Rotate Right"
                    >
                      <span className="material-icons">rotate_right</span>
                    </button>
                    <button
                      id="hexa-rotate-left"
                      type="button"
                      className="hexa-btn tooltip"
                      data-title="Rotate Left"
                    >
                      <span className="material-icons">rotate_left</span>
                    </button>
                    <button
                      id="hexa-flip-horizontal"
                      type="button"
                      className="hexa-btn tooltip"
                      data-title="Flip X"
                    >
                      <span className="material-icons">flip</span>
                    </button>
                    <button
                      id="hexa-flip-vertical"
                      type="button"
                      className="hexa-btn tooltip"
                      data-title="Flip Y"
                    >
                      <span className="material-icons">flip</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <span className="material-icons accordion-icon">aspect_ratio</span>
              Resize
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div className="hexa-resize-wrap">
                <input
                  id="hexa-resize-width"
                  className="hexa-form-field"
                  type="number"
                  defaultValue=""
                  data-size=""
                  autoComplete="off"
                />
                <span className="material-icons">clear</span>
                <input
                  id="hexa-resize-height"
                  className="hexa-form-field"
                  type="number"
                  defaultValue=""
                  data-size=""
                  autoComplete="off"
                />
                <button
                  id="hexa-resize-lock"
                  type="button"
                  className="hexa-btn hexa-lock-unlock active"
                >
                  <span className="material-icons">lock</span>
                </button>
              </div>
              <button
                id="hexa-resize-apply"
                type="button"
                className="hexa-btn btn-full primary"
              >
                Apply
              </button>
            </div>
          </li>
        </ul>
        <hr className="hide-on-canvas-mode" />
        <ul className="hexa-accordion hide-on-canvas-mode">
          <li>
            <a href="#">
              <span className="material-icons accordion-icon">auto_fix_high</span>
              Quick Filters
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div id="hexa-filters" className="hexa-grid two-column">
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="grayscale"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="grayscale">
                    <img
                      className="lazy"
                      data-src="assets/filters/grayscale.png"
                    />
                    <span>Grayscale</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="sepia"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="sepia">
                    <img className="lazy" data-src="assets/filters/sepia.png" />
                    <span>Sepia</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="blackwhite"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="blackwhite">
                    <img
                      className="lazy"
                      data-src="assets/filters/blackwhite.png"
                    />
                    <span>Black/White</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="brownie"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="brownie">
                    <img className="lazy" data-src="assets/filters/brownie.png" />
                    <span>Brownie</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="vintage"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="vintage">
                    <img className="lazy" data-src="assets/filters/vintage.png" />
                    <span>Vintage</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="kodachrome"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="kodachrome">
                    <img
                      className="lazy"
                      data-src="assets/filters/kodachrome.png"
                    />
                    <span>Kodachrome</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="technicolor"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="technicolor">
                    <img
                      className="lazy"
                      data-src="assets/filters/technicolor.png"
                    />
                    <span>Technicolor</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="polaroid"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="polaroid">
                    <img
                      className="lazy"
                      data-src="assets/filters/polaroid.png"
                    />
                    <span>Polaroid</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="shift"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="shift">
                    <img className="lazy" data-src="assets/filters/shift.png" />
                    <span>Shift</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="invert"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="invert">
                    <img className="lazy" data-src="assets/filters/invert.png" />
                    <span>Invert</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="sharpen"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="sharpen">
                    <img className="lazy" data-src="assets/filters/sharpen.png" />
                    <span>Sharpen</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="emboss"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="emboss">
                    <img className="lazy" data-src="assets/filters/emboss.png" />
                    <span>Emboss</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="sobelX"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="sobelX">
                    <img className="lazy" data-src="assets/filters/sobelX.png" />
                    <span>SobelX</span>
                  </label>
                </div>
                <div
                  className="grid-item"
                  data-keyword="Blog Banner - 2240x1260px"
                  data-category="blog-banners"
                >
                  <input
                    type="checkbox"
                    name="hexa-filter"
                    id="sobelY"
                    autoComplete="off"
                    className="input-hidden"
                  />
                  <label htmlFor="sobelY">
                    <img className="lazy" data-src="assets/filters/sobelY.png" />
                    <span>SobelY</span>
                  </label>
                </div>
                setting
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <span className="material-icons accordion-icon">tune</span>Basic
              Adjust
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Adjust Brightness</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-brightness"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-brightness-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-brightness-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Brightness<span>0</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="brightness"
                      type="range"
                      min={-1}
                      max={1}
                      defaultValue={0}
                      step="0.01"
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Adjust Contrast</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-contrast"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-contrast-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-contrast-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Contrast<span>0</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="contrast"
                      type="range"
                      min={-1}
                      max={1}
                      defaultValue={0}
                      step="0.01"
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Adjust Saturation</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-saturation"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-saturation-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-saturation-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Saturation<span>0</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="saturation"
                      type="range"
                      min={-1}
                      max={1}
                      defaultValue={0}
                      step="0.01"
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Adjust Hue</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-hue"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-hue-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div id="hexa-hue-settings" className="d-none conditional-settings">
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Hue<span>0</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="hue"
                      type="range"
                      min={-2}
                      max={2}
                      defaultValue={0}
                      step="0.02"
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <span className="material-icons accordion-icon">wb_sunny</span>Gamma
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Adjust Gamma</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-gamma"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-gamma-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-gamma-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Red<span>1</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="gamma-red"
                      type="range"
                      min="0.2"
                      max="2.2"
                      defaultValue={1}
                      step="0.01"
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Green<span>1</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="gamma-green"
                      type="range"
                      min="0.2"
                      max="2.2"
                      defaultValue={1}
                      step="0.01"
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Blue<span>1</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="gamma-blue"
                      type="range"
                      min="0.2"
                      max="2.2"
                      defaultValue={1}
                      step="0.01"
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <span className="material-icons accordion-icon">palette</span>Blend
              Color
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Blend Color</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-blend-color"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-blend-color-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-blend-color-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap">
                  <label className="hexa-control-label">Mode</label>
                  <div className="hexa-control">
                    <select
                      id="blend-color-mode"
                      className="hexa-select"
                      autoComplete="off"
                    >
                      <option selected="" value="add">
                        Add
                      </option>
                      <option value="diff">Diff</option>
                      <option value="subtract">Subtract</option>
                      <option value="multiply">Multiply</option>
                      <option value="screen">Screen</option>
                      <option value="lighten">Lighten</option>
                      <option value="darken">Darken</option>
                      <option value="overlay">Overlay</option>
                      <option value="exclusion">Exclusion</option>
                      <option value="tint">Tint</option>
                    </select>
                  </div>
                </div>
                <div className="hexa-control-wrap">
                  <label className="hexa-control-label">Color</label>
                  <div className="hexa-control">
                    <input
                      id="blend-color-color"
                      type="text"
                      className="hexa-colorpicker disallow-empty"
                      autoComplete="off"
                      defaultValue="#ffffff"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Alpha<span>0.5</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="blend-color-alpha"
                      type="range"
                      min={0}
                      max={1}
                      defaultValue="0.5"
                      step="0.01"
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <span className="material-icons accordion-icon">swap_horiz</span>
              Duotone Effect
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Adjust Duotone</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-duotone-color"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-duotone-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-duotone-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap">
                  <label className="hexa-control-label">Light Color</label>
                  <div className="hexa-control">
                    <input
                      id="duotone-light-color"
                      type="text"
                      className="hexa-colorpicker disallow-empty"
                      autoComplete="off"
                      defaultValue="green"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap">
                  <label className="hexa-control-label">Dark Color</label>
                  <div className="hexa-control">
                    <input
                      id="duotone-dark-color"
                      type="text"
                      className="hexa-colorpicker disallow-empty"
                      autoComplete="off"
                      defaultValue="blue"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <span className="material-icons accordion-icon">swap_horiz</span>
              Swap Colors
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Swap Colors</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-swap-colors"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-swap-colors-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-swap-colors-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap control-text-color">
                  <label className="hexa-control-label">Source</label>
                  <div className="hexa-control">
                    <input
                      id="color-source"
                      type="text"
                      className="hexa-colorpicker disallow-empty"
                      autoComplete="off"
                      defaultValue="#ffffff"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap control-text-color">
                  <label className="hexa-control-label">Destination</label>
                  <div className="hexa-control">
                    <input
                      id="color-destination"
                      type="text"
                      className="hexa-colorpicker disallow-empty"
                      autoComplete="off"
                      defaultValue="#000000"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap label-block">
                  <div className="hexa-control">
                    <div className="hexa-btn-set">
                      <button
                        id="hexa-swap-apply"
                        type="button"
                        className="hexa-btn primary"
                      >
                        Apply
                      </button>
                      <button
                        id="hexa-swap-remove"
                        type="button"
                        className="hexa-btn"
                        autoComplete="off"
                        disabled=""
                      >
                        <span className="material-icons">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              <span className="material-icons accordion-icon">tune</span>Advanced
              Edits
              <span className="material-icons arrow">keyboard_arrow_down</span>
            </a>
            <div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Adjust Blur</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-blur"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-blur-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-blur-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Blur<span>0</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="blur"
                      type="range"
                      min={0}
                      max={1}
                      defaultValue={0}
                      step="0.01"
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Adjust Noise</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-noise"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-noise-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-noise-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Noise<span>0</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="noise"
                      type="range"
                      min={0}
                      max={1000}
                      defaultValue={0}
                      step={1}
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Adjust Pixelate</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-pixelate"
                      className="hexa-toggle-checkbox"
                      data-conditional="#hexa-pixelate-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="hexa-pixelate-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap label-block">
                  <label className="hexa-control-label slider-label">
                    Pixelate<span>1</span>
                  </label>
                  <div className="hexa-control">
                    <input
                      id="pixelate"
                      type="range"
                      min={1}
                      max={20}
                      defaultValue={1}
                      step={1}
                      className="hexa-slider"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="hexa-text" className="hexa-icon-panel-content panel-hide">
        <button
          id="hexa-add-text"
          type="button"
          className="hexa-btn primary hexa-lg-btn btn-full"
        >
          <span className="material-icons">add_circle</span>Add Text
        </button>
        <div id="hexa-text-settings" className="hexa-sub-settings">
          <div className="hexa-text-wrap">
            <div className="hexa-control-wrap label-block">
              <div className="hexa-control">
                <div
                  id="hexa-text-format-btns"
                  className="hexa-btn-group icon-group"
                >
                  <button
                    id="format-uppercase"
                    type="button"
                    className="hexa-btn"
                  >
                    <span className="material-icons">text_fields</span>
                  </button>
                  <button id="format-bold" type="button" className="hexa-btn">
                    <span className="material-icons">format_bold</span>
                  </button>
                  <button id="format-italic" type="button" className="hexa-btn">
                    <span className="material-icons">format_italic</span>
                  </button>
                  <button
                    id="format-underlined"
                    type="button"
                    className="hexa-btn"
                  >
                    <span className="material-icons">format_underlined</span>
                  </button>
                  <button
                    id="format-align-left"
                    type="button"
                    className="hexa-btn format-align"
                  >
                    <span className="material-icons">format_align_left</span>
                  </button>
                  <button
                    id="format-align-center"
                    type="button"
                    className="hexa-btn format-align"
                  >
                    <span className="material-icons">format_align_center</span>
                  </button>
                  <button
                    id="format-align-right"
                    type="button"
                    className="hexa-btn format-align"
                  >
                    <span className="material-icons">format_align_right</span>
                  </button>
                  <button
                    id="format-align-justify"
                    type="button"
                    className="hexa-btn format-align"
                  >
                    <span className="material-icons">format_align_justify</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hexa-control-wrap label-block">
              <div className="hexa-control">
                <textarea
                  id="hexa-text-input"
                  className="hexa-form-field"
                  rows={2}
                  autoComplete="off"
                  defaultValue={"Enter Your Text Here"}
                />
              </div>
            </div>
            <hr />
            <div className="hexa-control-wrap label-block">
              <label className="hexa-control-label">Font Family</label>
              <div className="hexa-control">
                <select
                  id="hexa-font-family"
                  className="hexa-select hexa-select2"
                  autoComplete="off"
                  data-loadfont="yes"
                >
                  <optgroup id="websafe-fonts" label="Default Fonts" />
                  <optgroup id="google-fonts" label="Google Fonts" />
                </select>
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Font Size</label>
              <div className="hexa-control">
                <input
                  id="hexa-font-size"
                  className="hexa-form-field"
                  type="number"
                  defaultValue={60}
                  data-min={1}
                  data-max={1000}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Line Height</label>
              <div className="hexa-control">
                <input
                  id="hexa-line-height"
                  className="hexa-form-field"
                  type="number"
                  defaultValue="1.2"
                  data-min="0.1"
                  data-max={10}
                  step="0.1"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Letter Spacing</label>
              <div className="hexa-control">
                <input
                  id="hexa-letter-spacing"
                  className="hexa-form-field"
                  type="number"
                  defaultValue={0}
                  data-max={1000}
                  step={100}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Fill Style</label>
              <div className="hexa-control">
                <select
                  id="hexa-text-gradient"
                  className="hexa-select"
                  autoComplete="off"
                >
                  <option value="none" selected="">
                    Solid Color
                  </option>
                  <option value="vertical">Vertical Gradient</option>
                  <option value="horizontal">Horizontal Gradient</option>
                </select>
              </div>
            </div>
            <div id="text-gradient-settings">
              <div className="hexa-control-wrap control-text-color">
                <label className="hexa-control-label">Color 1</label>
                <div className="hexa-control">
                  <input
                    id="text-gradient-color-1"
                    type="text"
                    className="hexa-colorpicker disallow-empty"
                    autoComplete="off"
                    defaultValue="#9C27B0"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap control-text-color">
                <label className="hexa-control-label">Color 2</label>
                <div className="hexa-control">
                  <input
                    id="text-gradient-color-2"
                    type="text"
                    className="hexa-colorpicker disallow-empty"
                    autoComplete="off"
                    defaultValue="#000000"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap control-text-color">
                <label className="hexa-control-label">Color 3</label>
                <div className="hexa-control">
                  <input
                    id="text-gradient-color-3"
                    type="text"
                    className="hexa-colorpicker allow-empty"
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="hexa-control-wrap control-text-color">
                <label className="hexa-control-label">Color 4</label>
                <div className="hexa-control">
                  <input
                    id="text-gradient-color-4"
                    type="text"
                    className="hexa-colorpicker allow-empty"
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>
            <div id="text-fill-color" className="hexa-control-wrap">
              <label className="hexa-control-label">Color</label>
              <div className="hexa-control">
                <input
                  id="hexa-text-color"
                  type="text"
                  className="hexa-colorpicker disallow-empty"
                  autoComplete="off"
                  defaultValue="#000"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Outline Size</label>
              <div className="hexa-control">
                <input
                  id="hexa-outline-size"
                  className="hexa-form-field"
                  type="number"
                  defaultValue={0}
                  data-min={0}
                  data-max={100}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Outline Color</label>
              <div className="hexa-control">
                <input
                  id="hexa-outline-color"
                  type="text"
                  className="hexa-colorpicker disallow-empty"
                  autoComplete="off"
                  defaultValue="#fff"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Background</label>
              <div className="hexa-control">
                <input
                  id="hexa-text-background"
                  type="text"
                  className="hexa-colorpicker allow-empty"
                  autoComplete="off"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="hexa-control-wrap conditional">
              <label className="hexa-control-label">Text Shadow</label>
              <div className="hexa-control hexa-toggle-control">
                <label className="hexa-toggle">
                  <input
                    id="hexa-text-shadow"
                    className="hexa-toggle-checkbox"
                    data-conditional="#text-shadow-settings"
                    type="checkbox"
                    autoComplete="off"
                  />
                  <div className="hexa-toggle-switch" />
                </label>
              </div>
            </div>
            <div
              id="text-shadow-settings"
              className="d-none conditional-settings"
            >
              <div className="hexa-control-wrap">
                <label className="hexa-control-label">Shadow Color</label>
                <div className="hexa-control">
                  <input
                    id="text-shadow-color"
                    type="text"
                    className="hexa-colorpicker disallow-empty"
                    autoComplete="off"
                    defaultValue="#000"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap">
                <label className="hexa-control-label">Shadow Blur</label>
                <div className="hexa-control">
                  <input
                    id="text-shadow-blur"
                    className="hexa-form-field"
                    type="number"
                    defaultValue={5}
                    data-min={0}
                    data-max={1000}
                    step={1}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap">
                <label className="hexa-control-label">Offset X</label>
                <div className="hexa-control">
                  <input
                    id="text-shadow-offset-x"
                    className="hexa-form-field"
                    type="number"
                    defaultValue={5}
                    data-min={0}
                    data-max={1000}
                    step={1}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap">
                <label className="hexa-control-label">Offset Y</label>
                <div className="hexa-control">
                  <input
                    id="text-shadow-offset-y"
                    className="hexa-form-field"
                    type="number"
                    defaultValue={5}
                    data-min={0}
                    data-max={1000}
                    step={1}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="hexa-control-wrap label-block">
              <div className="hexa-control">
                <div
                  id="hexa-text-flip-btns"
                  className="hexa-btn-group icon-group"
                >
                  <button
                    id="text-flip-x"
                    type="button"
                    className="hexa-btn tooltip tooltip-top"
                    data-title="Flip X"
                  >
                    <span className="material-icons">flip</span>
                  </button>
                  <button
                    id="text-flip-y"
                    type="button"
                    className="hexa-btn tooltip tooltip-top"
                    data-title="Flip Y"
                  >
                    <span className="material-icons">flip</span>
                  </button>
                  <button
                    type="button"
                    className="hexa-horizontal-center hexa-btn tooltip tooltip-top"
                    data-title="H-Align Center"
                  >
                    <span className="material-icons">
                      align_horizontal_center
                    </span>
                  </button>
                  <button
                    type="button"
                    className="hexa-vertical-center hexa-btn tooltip tooltip-top"
                    data-title="V-Align Center"
                  >
                    <span className="material-icons">vertical_align_center</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hexa-control-wrap label-block">
              <label className="hexa-control-label slider-label">
                Opacity<span>1</span>
              </label>
              <div className="hexa-control">
                <input
                  id="text-opacity"
                  type="range"
                  min={0}
                  max={1}
                  defaultValue={1}
                  step="0.1"
                  className="hexa-slider"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap label-block">
              <label className="hexa-control-label slider-label">
                Skew X<span>0</span>
              </label>
              <div className="hexa-control">
                <input
                  id="text-skew-x"
                  type="range"
                  min={0}
                  max={180}
                  defaultValue={0}
                  step={1}
                  className="hexa-slider"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap label-block">
              <label className="hexa-control-label slider-label">
                Skew Y<span>0</span>
              </label>
              <div className="hexa-control">
                <input
                  id="text-skew-y"
                  type="range"
                  min={0}
                  max={180}
                  defaultValue={0}
                  step={1}
                  className="hexa-slider"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap label-block">
              <label className="hexa-control-label slider-label">
                Rotate<span>0</span>
              </label>
              <div className="hexa-control">
                <input
                  id="text-rotate"
                  type="range"
                  min={0}
                  max={360}
                  defaultValue={0}
                  step={1}
                  className="hexa-slider"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="hexa-image" className="hexa-icon-panel-content panel-hide">
        <div className="hexa-tabs">
          <div id="hexa-image-mode" className="hexa-tab active">
            <div className="hexa-control hexa-bg-color-control">
              <div className="input-color-swatch">
                <input
                  id="hexa-bg-color"
                  type="text"
                  className="hexa-colorpicker allow-empty"
                  autoComplete="off"
                  defaultValue=""
                />
                <label className="color-overlay-swatch">
                  <span className="material-symbols-outlined"> add </span>
                </label>
              </div>
              <div className="color-swatch-list">
                <div className="color-contianer">
                  <div
                    className="color-container-inner color-container-line"
                    id="color-remover"
                    style={{ backgroundColor: "transparent !important" }}
                  />
                </div>
                <div className="color-contianer">
                  <div
                    className="color-container-inner color-container-1"
                    id="color-box"
                    style={{ backgroundColor: "#990000" }}
                  ></div>
                </div>
                <div className="color-contianer">
                  <div
                    className="color-container-inner color-container-5"
                    id="color-box"
                    style={{ backgroundColor: "#b45f06" }}
                  ></div>
                </div>
                <div className="color-contianer">
                  <div
                    className="color-container-inner color-container-2"
                    id="color-box"
                    style={{ backgroundColor: "#38761d" }}
                  ></div>
                </div>
                <div className="color-contianer">
                  <div
                    className="color-container-inner color-container-3"
                    id="color-box"
                    style={{ backgroundColor: "#351c75" }}
                  ></div>
                </div>
                <div className="color-contianer">
                  <div
                    className="color-container-inner color-container-6"
                    id="color-box"
                    style={{ backgroundColor: "#ea9999" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="color-swatch-list color-swatch-list-two">
              <div className="color-contianer">
                <div
                  className="color-container-inner color-container-7"
                  id="color-box"
                  style={{ backgroundColor: "#00276d" }}
                ></div>
              </div>
              <div className="color-contianer">
                <div
                  className="color-container-inner color-container-8"
                  id="color-box"
                  style={{ backgroundColor: "#ff4911" }}
                ></div>
              </div>
              <div className="color-contianer">
                <div
                  className="color-container-inner color-container-9"
                  id="color-box"
                  style={{ backgroundColor: "#f7cd04" }}
                ></div>
              </div>
              <div className="color-contianer">
                <div
                  className="color-container-inner color-container-10"
                  id="color-box"
                  style={{ backgroundColor: "#b9bbbd" }}
                ></div>
              </div>
              <div className="color-contianer">
                <div
                  className="color-container-inner color-container-11"
                  id="color-box"
                  style={{ backgroundColor: "#06a280" }}
                ></div>
              </div>
              <div className="color-contianer">
                <div
                  className="color-container-inner color-container-12"
                  id="color-box"
                  style={{ backgroundColor: "#df4a73" }}
                ></div>
              </div>
              <div className="color-contianer">
                <div
                  className="color-container-inner color-container-13"
                  id="color-box"
                  style={{ backgroundColor: "#215da0" }}
                ></div>
              </div>
            </div>
            <div className="hexa-file-field">
              <input
                type="file"
                name="hexa-file"
                id="hexa-img-upload"
                className="hexa-hidden-file"
                accept="image/png, image/jpeg, image/webp"
              />
              <label
                htmlFor="hexa-img-upload"
                className="hexa-btn primary hexa-lg-btn btn-full"
              >
                <span className="material-icons">upload</span>
                <span>Upload from computer</span>
              </label>
            </div>
            <div id="hexa-image-settings" className="hexa-sub-settings">
              <div
                id="hexa-border-tools-wrap"
                className="hexa-border-tools-parents"
              >
                <div
                  className="hexa-accordion-mask"
                  id="hexa-border-tools"
                  style={{ cursor: "pointer" }}
                >
                  <label className="hexa-control-label"> Border Tools </label>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </div>
                <div
                  id="hexa-border-tools-toggle"
                  style={{ display: "none", margin: 8 }}
                >
                  <div className="hexa-control-wrap">
                    <label className="hexa-control-label">Border Width</label>
                    <div className="hexa-control">
                      <input
                        id="img-border-width"
                        className="hexa-form-field"
                        type="number"
                        defaultValue={0}
                        data-min={0}
                        data-max={1000}
                        step={1}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="hexa-control-wrap">
                    <label className="hexa-control-label">Border Color</label>
                    <div className="hexa-control">
                      <input
                        id="img-border-color"
                        type="text"
                        className="hexa-colorpicker disallow-empty"
                        autoComplete="off"
                        defaultValue="#ffffff"
                      />
                    </div>
                  </div>
                  <div className="hexa-control-wrap label-block">
                    <label className="hexa-control-label slider-label">
                      Rounded Corners<span>0</span>
                    </label>
                    <div className="hexa-control">
                      <input
                        id="img-border-radius"
                        type="range"
                        min={0}
                        max={1000}
                        defaultValue={0}
                        step={1}
                        className="hexa-slider"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="hexa-control-wrap conditional">
                    <label className="hexa-control-label">Shadow</label>
                    <div className="hexa-control hexa-toggle-control">
                      <label className="hexa-toggle">
                        <input
                          id="hexa-image-shadow"
                          className="hexa-toggle-checkbox"
                          data-conditional="#image-shadow-settings"
                          type="checkbox"
                          autoComplete="off"
                        />
                        <div className="hexa-toggle-switch" />
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  id="image-shadow-settings"
                  className="d-none conditional-settings"
                  style={{ margin: 8 }}
                >
                  <div className="hexa-control-wrap">
                    <label className="hexa-control-label">Shadow Color</label>
                    <div className="hexa-control">
                      <input
                        id="image-shadow-color"
                        type="text"
                        className="hexa-colorpicker disallow-empty"
                        autoComplete="off"
                        defaultValue="#000"
                      />
                    </div>
                  </div>
                  <div className="hexa-control-wrap">
                    <label className="hexa-control-label">Shadow Blur</label>
                    <div className="hexa-control">
                      <input
                        id="image-shadow-blur"
                        className="hexa-form-field"
                        type="number"
                        defaultValue={5}
                        step={1}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="hexa-control-wrap">
                    <label className="hexa-control-label">Offset X</label>
                    <div className="hexa-control">
                      <input
                        id="image-shadow-offset-x"
                        className="hexa-form-field"
                        type="number"
                        defaultValue={5}
                        step={1}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="hexa-control-wrap">
                    <label className="hexa-control-label">Offset Y</label>
                    <div className="hexa-control">
                      <input
                        id="image-shadow-offset-y"
                        className="hexa-form-field"
                        type="number"
                        defaultValue={5}
                        step={1}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-filter-container" id="img-filter-container-id">
                <div className="hexa-accordion-mask" id="hexa-image-filter-name">
                  <label className="hexa-control-label"> Image Filter </label>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </div>
                <div className="hexa-image-filter hexa-control-wrap">
                  <div className="grid-container" id="image-filter">
                    <div className="grid-items" value="none">
                      <p className="grid-items-filter-name">Original</p>
                      <img
                        id="image1"
                        className="hexa-filtered-image"
                        src="assets/filters/none.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="polaroid">
                      <p className="grid-items-filter-name">Polaroid</p>
                      <img
                        className="hexa-filtered-image"
                        id="image0"
                        src="assets/filters/Polaroid.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="greyscale">
                      <p className="grid-items-filter-name">Greyscale</p>
                      <img
                        id="image1"
                        className="hexa-filtered-image"
                        src="assets/filters/Grayscale.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="sepia">
                      <p className="grid-items-filter-name">Sepia</p>
                      <img
                        className="hexa-filtered-image"
                        id="image2"
                        src="assets/filters/Sepia.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="blackwhite">
                      <p className="grid-items-filter-name">B &amp; W</p>
                      <img
                        id="image3"
                        className="hexa-filtered-image"
                        src="assets/filters/BlackAndWhite.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="brownie">
                      <p className="grid-items-filter-name">Brownie</p>
                      <img
                        id="image4"
                        className="hexa-filtered-image"
                        src="assets/filters/Brownie.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="vintage">
                      <p className="grid-items-filter-name">Vintage</p>
                      <img
                        id="image5"
                        className="hexa-filtered-image"
                        src="assets/filters/Vintage.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="kodachrome">
                      <p className="grid-items-filter-name">Kodachrome</p>
                      <img
                        id="image6"
                        className="hexa-filtered-image"
                        src="assets/filters/Kodachroma.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="technicolor">
                      <p className="grid-items-filter-name">Technicolor</p>
                      <img
                        className="hexa-filtered-image"
                        id="image7"
                        src="assets/filters/Technicolor.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="shift">
                      <p className="grid-items-filter-name">Shift</p>
                      <img
                        id="image8"
                        className="hexa-filtered-image"
                        src="assets/filters/Shift.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="invert">
                      <p className="grid-items-filter-name">Invert</p>
                      <img
                        id="image9"
                        className="hexa-filtered-image"
                        src="assets/filters/Invert.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="contrast">
                      <p className="grid-items-filter-name">Contrast</p>
                      <img
                        id="image10"
                        className="hexa-filtered-image"
                        src="assets/filters/Contrast.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="brightness">
                      <p className="grid-items-filter-name">Brightness</p>
                      <img
                        id="image11"
                        className="hexa-filtered-image"
                        src="assets/filters/Brightness.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="pixelate">
                      <p className="grid-items-filter-name">Pixelate</p>
                      <img
                        id="image12"
                        className="hexa-filtered-image"
                        src="assets/filters/Blur.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="blur">
                      <p className="grid-items-filter-name">Blur</p>
                      <img
                        id="image13"
                        className="hexa-filtered-image"
                        src="assets/filters/Blur.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="radialBlur">
                      <p className="grid-items-filter-name">Radial Blur</p>
                      <img
                        id="image14"
                        className="hexa-filtered-image"
                        src="assets/filters/radial-blur.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="sharpen">
                      <p className="grid-items-filter-name">Sharpen</p>
                      <img
                        id="image15"
                        className="hexa-filtered-image"
                        src="assets/filters/Sharpen.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="emboss">
                      <p className="grid-items-filter-name">Emboss</p>
                      <img
                        id="image16"
                        className="hexa-filtered-image"
                        src="assets/filters/Emboss.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="removeColor">
                      <p className="grid-items-filter-name">RemoveColor</p>
                      <img
                        id="image17"
                        className="hexa-filtered-image"
                        src="assets/filters/remove-color.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="vibrance">
                      <p className="grid-items-filter-name">Vibrance</p>
                      <img
                        id="image18"
                        className="hexa-filtered-image"
                        src="assets/filters/vibrance.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="blendColor">
                      <p className="grid-items-filter-name">BlendColor</p>
                      <img
                        id="image19"
                        className="hexa-filtered-image"
                        src="assets/filters/Blend Color.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="blendImage">
                      <p className="grid-items-filter-name">BlendImage</p>
                      <img
                        id="image20"
                        className="hexa-filtered-image"
                        src="assets/filters/Blend Image.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="hueRotate">
                      <p className="grid-items-filter-name">HueRotate</p>
                      <img
                        id="image21"
                        className="hexa-filtered-image"
                        src="assets/filters/Hue Rotate.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="resize">
                      <p className="grid-items-filter-name">PxlContrast</p>
                      <img
                        id="image22"
                        className="hexa-filtered-image"
                        src="assets/filters/PixelateWithContrast.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="saturation">
                      <p className="grid-items-filter-name">Saturation</p>
                      <img
                        id="image23"
                        className="hexa-filtered-image"
                        src="assets/filters/Saturation.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="gamma">
                      <p className="grid-items-filter-name">Gamma</p>
                      <img
                        id="image24"
                        className="hexa-filtered-image"
                        src="assets/filters/Gamma.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="sobelX">
                      <p className="grid-items-filter-name">sobelX</p>
                      <img
                        id="image25"
                        className="hexa-filtered-image"
                        src="assets/filters/Sobel–X.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="sobelY">
                      <p className="grid-items-filter-name">sobelY</p>
                      <img
                        id="image26"
                        className="hexa-filtered-image"
                        src="assets/filters/Sobel – Y.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="noise">
                      <p className="grid-items-filter-name">Noise</p>
                      <img
                        id="image27"
                        className="hexa-filtered-image"
                        src="assets/filters/Noise.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="oilPainting">
                      <p className="grid-items-filter-name">Oil Painting</p>
                      <img
                        id="image28"
                        className="hexa-filtered-image"
                        src="assets/filters/oil-painting.jpg"
                        alt="polaroid"
                      />
                    </div>
                    <div className="grid-items" value="colorMatrix">
                      <p className="grid-items-filter-name">ColorMatrix</p>
                      <img
                        id="image29"
                        className="hexa-filtered-image"
                        src="assets/filters/color-matrix.jpg"
                        alt="polaroid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hexa-control-wrap conditiona hexa-control-wrap-mask hexa-accordion-mask-list-items">
                <div className="hexa-toggleDiv" id="hexa-mydiv">
                  <div
                    className="hexa-accordion-mask"
                    id="hexa-accordion-maskbutton"
                  >
                    <label className="hexa-control-label"> Mask </label>
                    <span className="material-icons arrow">
                      keyboard_arrow_down
                    </span>
                  </div>
                  <div className="hexa-control hexa-mask-icon-select-option">
                    <ul
                      id="hexa-elements-wrap"
                      className="hexa-accordion hexa-elements-accor-shapes-container"
                    >
                      <div className="hexa-control" style={{ marginTop: 10 }}>
                        <button
                          className="hexa-btn hexa-lg-btn btn-full"
                          id="hexa-maskbutton"
                        >
                          Apply Mask
                        </button>
                      </div>
                      <li data-keyword="alphabet">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              version="1.1"
                              id="Layer_1_copy"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              style={{ enableBackground: "new 0 0 512 512" }}
                              xmlSpace="preserve"
                            >
                              {/* <style type="text/css">
                            .st0 {
                              display: none;
                            }
  
                            .st1 {
                              font-family: "Arial-Black";
                            }
  
                            .st2 {
                              font-size: 556.3365px;
                            }
                          </style> */}
                              <g>
                                <path
                                  d="M315.8,382.2H176.1l-19.4,65.7H31.1L180.7,49.7H315l149.6,398.2H335.7L315.8,382.2z M290.3,296.1l-44-143.2l-43.5,143.2
                          H290.3z"
                                />
                              </g>
                              <text
                                transform="matrix(1 0 0 1 30.2354 447.9053)"
                                className="st0 st1 st2"
                              >
                                B
                              </text>
                              <text
                                transform="matrix(1 0 0 1 30.2354 447.9053)"
                                className="st0 st1 st2"
                              >
                                C
                              </text>
                              <text
                                transform="matrix(1 0 0 1 30.2354 447.9053)"
                                className="st0 st1 st2"
                              >
                                D
                              </text>
                            </svg>
                            Alphabets
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/a.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/b.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/c.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/d.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/e.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/f.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/g.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/h.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/i.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/j.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/k.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/l.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/m.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/n.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/o.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/p.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/q.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/r.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/s.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/t.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/u.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/v.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/w.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/x.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/y.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/alphabets/z.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="numbers">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg viewBox="0 0 512 512">
                              <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    '\n                                .st0 {\n                                  display: none;\n                                }\n\n                                .st1 {\n                                  font-family: "Arial-Black";\n                                }\n\n                                .st2 {\n                                  font-size: 556.3365px;\n                                }\n\n                                .st3 {\n                                  display: inline;\n                                }\n                              '
                                }}
                              />
                              <text
                                transform="matrix(1 0 0 1 30.2354 447.9053)"
                                className="st0 st1 st2"
                              >
                                E
                              </text>
                              <g>
                                <path
                                  d="M93.3,254.4c0-75.7,13.6-128.7,40.9-158.9c27.3-30.2,68.8-45.4,124.6-45.4c26.8,0,48.8,3.3,66,9.9
                        c17.2,6.6,31.2,15.2,42.1,25.8c10.9,10.6,19.4,21.7,25.7,33.4c6.2,11.7,11.3,25.3,15.1,40.9c7.4,29.7,11.1,60.7,11.1,92.9
                        c0,72.3-12.2,125.1-36.7,158.6c-24.4,33.5-66.6,50.3-126.3,50.3c-33.5,0-60.6-5.3-81.2-16c-20.6-10.7-37.6-26.3-50.8-47
                        c-9.6-14.7-17.1-34.7-22.4-60.2C96,313.3,93.3,285.2,93.3,254.4z M203,254.6c0,50.7,4.5,85.3,13.4,103.9c9,18.6,22,27.8,39,27.8
                        c11.2,0,21-3.9,29.2-11.8c8.2-7.9,14.3-20.3,18.2-37.4c3.9-17,5.8-43.6,5.8-79.6c0-52.9-4.5-88.4-13.4-106.6
                        c-9-18.2-22.4-27.3-40.3-27.3c-18.3,0-31.5,9.3-39.7,27.8C207.1,170.1,203,204.5,203,254.6z"
                                />
                              </g>
                              <g className="st0">
                                <path
                                  className="st3"
                                  d="M370.1,53.5v405H258.2V193.1c-18.1,13.8-35.6,24.9-52.6,33.4c-16.9,8.5-38.2,16.7-63.7,24.4v-90.7
                        c37.7-12.1,66.9-26.7,87.7-43.7c20.8-17,37.1-38,48.9-63H370.1z"
                                />
                              </g>
                              <g className="st0">
                                <path
                                  className="st3"
                                  d="M422,458.5H90c3.8-32.8,15.3-63.6,34.6-92.5c19.3-28.9,55.5-63,108.5-102.3c32.4-24.1,53.1-42.4,62.2-54.9
                        c9.1-12.5,13.6-24.4,13.6-35.6c0-12.1-4.5-22.5-13.4-31.1c-9-8.6-20.2-12.9-33.8-12.9c-14.1,0-25.7,4.4-34.6,13.3
                        c-9,8.9-15,24.5-18.1,47l-110.8-9c4.3-31.1,12.3-55.5,23.9-72.9c11.6-17.5,27.9-30.9,49-40.2c21.1-9.3,50.3-14,87.6-14
                        c38.9,0,69.2,4.4,90.9,13.3c21.6,8.9,38.7,22.5,51.1,40.9c12.4,18.4,18.6,39,18.6,61.8c0,24.3-7.1,47.4-21.3,69.5
                        c-14.2,22.1-40.1,46.4-77.6,72.8c-22.3,15.4-37.2,26.2-44.7,32.3c-7.5,6.2-16.3,14.2-26.5,24.2H422V458.5z"
                                />
                              </g>
                              <g className="st0">
                                <path
                                  className="st3"
                                  d="M202.1,172.1L97.5,153.3c8.7-33.3,25.4-58.9,50.1-76.6c24.7-17.7,59.7-26.6,105-26.6c52,0,89.6,9.7,112.7,29.1
                        c23.2,19.4,34.8,43.7,34.8,73.1c0,17.2-4.7,32.8-14.1,46.7c-9.4,13.9-23.6,26.2-42.6,36.7c15.4,3.8,27.2,8.2,35.3,13.3
                        c13.2,8.1,23.5,18.9,30.8,32.2c7.3,13.3,11,29.2,11,47.7c0,23.2-6.1,45.4-18.2,66.7c-12.1,21.3-29.6,37.7-52.4,49.2
                        c-22.8,11.5-52.8,17.2-89.9,17.2c-36.2,0-64.8-4.3-85.7-12.8c-20.9-8.5-38.1-21-51.6-37.4c-13.5-16.4-23.9-37-31.1-61.8l110.6-14.7
                        c4.3,22.3,11.1,37.7,20.2,46.3c9.1,8.6,20.8,12.9,34.9,12.9c14.8,0,27.2-5.4,37.1-16.3c9.9-10.9,14.8-25.4,14.8-43.5
                        c0-18.5-4.8-32.8-14.3-42.9c-9.5-10.1-22.4-15.2-38.7-15.2c-8.7,0-20.6,2.2-35.9,6.5l5.7-79c6.2,0.9,11,1.4,14.4,1.4
                        c14.5,0,26.6-4.6,36.3-13.9c9.7-9.2,14.5-20.2,14.5-32.9c0-12.1-3.6-21.8-10.9-29.1c-7.2-7.2-17.2-10.9-29.9-10.9
                        c-13,0-23.6,3.9-31.8,11.8S205,152.3,202.1,172.1z"
                                />
                              </g>
                              <g className="st0">
                                <path
                                  className="st3"
                                  d="M283.6,384.1H82v-91L283.6,53.5H380v244.8h50v85.8h-50v74.4h-96.4V384.1z M283.6,298.2V172.9L177.1,298.2
                        H283.6z"
                                />
                              </g>
                              <g className="st0">
                                <path
                                  className="st3"
                                  d="M139.9,53.5h262.7v88.3H224.6l-9.5,59.8c12.3-5.8,24.5-10.1,36.5-13c12-2.9,23.9-4.3,35.7-4.3
                        c39.8,0,72.2,12,97,36.1c24.8,24.1,37.2,54.4,37.2,91c0,25.7-6.4,50.4-19.2,74.2c-12.8,23.7-30.9,41.8-54.3,54.3
                        c-23.5,12.5-53.5,18.7-90.1,18.7c-26.3,0-48.8-2.5-67.5-7.5c-18.7-5-34.7-12.4-47.8-22.3c-13.1-9.9-23.8-21.1-31.9-33.5
                        s-14.9-28.1-20.4-46.7l111.9-12.2c2.7,17.9,9.1,31.6,19,40.9c10,9.3,21.8,14,35.6,14c15.4,0,28.1-5.8,38.2-17.5
                        c10.1-11.7,15.1-29.1,15.1-52.3c0-23.7-5.1-41.1-15.2-52.2c-10.1-11-23.6-16.6-40.5-16.6c-10.7,0-21,2.6-31,7.9
                        c-7.4,3.8-15.6,10.7-24.4,20.6l-94.3-13.6L139.9,53.5z"
                                />
                              </g>
                              <g className="st0">
                                <path
                                  className="st3"
                                  d="M411.7,146.5l-110,13.6c-2.9-15.4-7.7-26.3-14.5-32.6c-6.8-6.3-15.2-9.5-25.1-9.5c-17.9,0-31.9,9.1-41.8,27.2
                        c-7.2,13-12.6,40.9-16,83.7c13.2-13.4,26.8-23.3,40.7-29.7c13.9-6.4,30.1-9.6,48.4-9.6c35.5,0,65.5,12.7,90.1,38
                        c24.5,25.4,36.8,57.5,36.8,96.4c0,26.3-6.2,50.3-18.6,72c-12.4,21.7-29.6,38.2-51.6,49.3c-22,11.1-49.6,16.7-82.7,16.7
                        c-39.8,0-71.8-6.8-95.9-20.4c-24.1-13.6-43.3-35.3-57.7-65.1c-14.4-29.8-21.6-69.2-21.6-118.3c0-71.9,15.1-124.6,45.4-158
                        c30.2-33.4,72.2-50.1,125.8-50.1c31.7,0,56.7,3.7,75.1,11c18.4,7.3,33.6,18.1,45.8,32.2C396.1,107.4,405.3,125.2,411.7,146.5z
                        M207.9,323.9c0,21.6,5.4,38.4,16.3,50.7c10.9,12.2,24.2,18.3,39.9,18.3c14.5,0,26.6-5.5,36.4-16.6c9.8-11,14.7-27.5,14.7-49.4
                        c0-22.5-5.1-39.6-15.2-51.3c-10.1-11.8-22.7-17.7-37.8-17.7c-15.4,0-28.3,5.7-38.7,17.1C213.1,286.4,207.9,302.7,207.9,323.9z"
                                />
                              </g>
                              <g className="st0">
                                <path
                                  className="st3"
                                  d="M94.5,56.9h323v74.7c-28.1,25.4-51.5,52.8-70.4,82.3c-22.8,35.9-40.8,75.8-54.1,119.8
                        c-10.5,34.2-17.6,74.7-21.2,121.4H161.6c8.7-65,22.4-119.5,41-163.5c18.7-44,48.2-91.1,88.6-141.3H94.5V56.9z"
                                />
                              </g>
                              <g className="st0">
                                <path
                                  className="st3"
                                  d="M159.8,241.1c-17.4-9.2-30.1-19.6-38-31c-10.9-15.6-16.3-33.5-16.3-53.8c0-33.3,15.7-60.6,47-81.8
                        c24.4-16.3,56.8-24.4,97-24.4c53.2,0,92.6,10.1,118,30.4c25.4,20.3,38.2,45.8,38.2,76.6c0,17.9-5.1,34.7-15.2,50.3
                        c-7.6,11.6-19.6,22.8-35.9,33.7c21.5,10.3,37.6,24,48.2,41c10.6,17,15.9,35.9,15.9,56.5c0,19.9-4.6,38.5-13.7,55.8
                        c-9.1,17.3-20.4,30.7-33.7,40.1c-13.3,9.4-29.9,16.3-49.7,20.8c-19.8,4.4-41,6.7-63.4,6.7c-42.2,0-74.4-5-96.7-14.9
                        c-22.3-10-39.2-24.6-50.8-44c-11.6-19.4-17.4-41-17.4-64.9c0-23.4,5.4-43.1,16.3-59.4C120.4,262.5,137.2,249.9,159.8,241.1z
                        M203.6,334.2c0,17.6,5.3,31.9,16,43.1c10.7,11.1,22.9,16.7,36.7,16.7c13.2,0,25.1-5.7,35.6-17c10.5-11.3,15.8-25.7,15.8-43.1
                        c0-17.6-5.3-32-15.9-43.2c-10.6-11.2-22.9-16.8-36.8-16.8c-13.8,0-25.8,5.4-36,16.3C208.7,301.1,203.6,315.8,203.6,334.2z
                        M209.5,162.8c0,13.8,4.3,24.9,12.9,33.3c8.6,8.4,20.1,12.6,34.4,12.6c12.7,0,23.1-4.2,31.2-12.5c8.1-8.3,12.2-19.1,12.2-32.3
                        c0-13.8-4.3-24.9-12.8-33.5c-8.5-8.6-19.4-12.9-32.6-12.9c-13.4,0-24.3,4.2-32.7,12.6C213.8,138.5,209.5,149.4,209.5,162.8z"
                                />
                              </g>
                              <g className="st0">
                                <path
                                  className="st3"
                                  d="M100.3,365.7l110-13.9c2.9,15.4,7.8,26.3,14.7,32.6c6.9,6.3,15.3,9.5,25.3,9.5c17.7,0,31.6-9,41.6-26.9
                        c7.2-13.2,12.7-41.2,16.3-83.9c-13.2,13.6-26.8,23.5-40.7,29.9c-13.9,6.3-30.1,9.5-48.4,9.5c-35.7,0-65.8-12.7-90.3-38
                        c-24.5-25.4-36.8-57.4-36.8-96.2c0-26.4,6.2-50.5,18.7-72.3c12.5-21.7,29.7-38.2,51.6-49.3c21.9-11.1,49.4-16.7,82.6-16.7
                        c39.8,0,71.8,6.8,95.9,20.5c24.1,13.7,43.3,35.4,57.7,65.2c14.4,29.8,21.6,69.1,21.6,118c0,71.9-15.1,124.6-45.4,158
                        c-30.2,33.4-72.2,50.1-125.8,50.1c-31.7,0-56.7-3.7-75-11c-18.3-7.3-33.5-18.1-45.6-32.2C116.2,404.6,106.9,386.9,100.3,365.7z
                        M304.1,188.1c0-21.5-5.4-38.4-16.3-50.7c-10.9-12.2-24.1-18.3-39.7-18.3c-14.7,0-26.9,5.5-36.5,16.6c-9.7,11-14.5,27.6-14.5,49.7
                        c0,22.3,5,39.3,15.1,51.1c10.1,11.8,22.6,17.7,37.6,17.7c15.6,0,28.5-5.7,38.8-17.1C298.9,225.6,304.1,209.3,304.1,188.1z"
                                />
                              </g>
                            </svg>
                            Numbers
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/0.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/2.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/3.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/4.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/Numbers/9.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="abstract-shapes">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ isolation: "isolate" }}
                              viewBox="419.789 45.083 164.11 137.865"
                              width="164.11pt"
                              height="137.865pt"
                            >
                              <path
                                d=" M 419.822 107.519 C 419.928 104.604 420.291 101.647 420.934 98.655 C 432.947 42.8 510.456 34.285 552.962 56.297 C 561.183 60.555 568.877 66.102 574.56 73.41 C 590.095 93.385 582.275 117.316 579.111 140.139 C 578.121 147.277 577.077 154.586 573.689 160.947 C 568.468 170.749 558.206 177.071 547.5 180.021 C 536.793 182.97 525.528 182.967 514.423 182.944 C 503.727 182.922 492.828 182.869 482.648 179.584 C 452.608 169.892 418.58 141.68 419.822 107.519 Z "
                                fill="#FFFFFF"
                              />
                            </svg>
                            Abstract Shapes
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/2.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/3.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/4.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/9.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/10.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/abstract-shapes/11.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="geometric-shapes">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M 4.9960938,2.0039062 C 3.9802089,1.9505853 2.9614454,2.2897237 2.2109375,3.0410156 0.70954307,4.544026 0.86729496,7.0683685 2.4726562,8.6757812 l 0.5136719,0.5136719 4.6621094,4.6660159 c 0.1950388,0.193887 0.5100393,0.193887 0.7050781,0 L 13.013672,9.1894531 13.527344,8.6757812 C 15.132778,7.0683685 15.2885,4.544026 13.787109,3.0410156 12.285787,1.5381119 9.76725,1.697808 8.1621094,3.3046875 L 8,3.4667969 7.8378906,3.3046875 C 7.0354005,2.5012477 6.0125131,2.057867 4.9960938,2.0039062 Z"
                                color="#fff"
                                fontFamily="sans-serif"
                                fontWeight={400}
                                overflow="visible"
                                style={{
                                  lineHeight: "normal",
                                  textIndent: 0,
                                  textAlign: "start",
                                  textDecorationLine: "none",
                                  textDecorationStyle: "solid",
                                  textDecorationColor: "#fff",
                                  textTransform: "none",
                                  blockProgression: "tb",
                                  isolation: "auto",
                                  mixBlendMode: "normal"
                                }}
                              />
                            </svg>
                            Geometric Shapes
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/circle.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/square.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/triangle.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/11.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/13.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/14.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/geometric-shapes/7.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="ink-brush-strokes">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ isolation: "isolate" }}
                              viewBox="269.152 201.718 173.152 45.409"
                              width="173.152pt"
                              height="45.409pt"
                            >
                              <path
                                d=" M 409.288 221.471 C 411.739 222.925 414.273 222.397 416.717 222.515 C 414.326 222.01 411.93 221.539 409.288 221.471 Z  M 421.721 220.222 C 421.715 221.279 423.098 220.821 423.177 221.394 C 423.512 222.22 422.651 222.381 422.9 223.162 C 429.214 223.815 435.645 224.433 441.937 226.101 C 440.798 226.631 439.6 227.27 438.465 226.886 C 436.569 226.245 434.604 226.161 432.69 226.001 C 428.663 225.664 424.71 224.615 420.637 224.763 C 420.336 224.775 420.034 224.765 419.171 224.765 C 420.422 225.228 421.442 225.093 421.875 226.368 C 418.46 226.685 415.221 225.792 411.819 225.558 C 411.716 225.971 411.606 226.415 411.485 226.902 C 421.572 227.409 431.607 228.075 441.958 230.304 C 439.965 231.46 438.332 231.06 436.808 230.897 C 433.612 230.554 430.442 229.971 427.255 229.523 C 426.805 229.459 426.127 229.42 425.895 229.676 C 424.851 230.839 423.858 230.134 422.592 229.955 C 423.274 229.253 423.769 230.312 424.415 229.4 C 421.813 228.646 419.334 229.808 416.881 229.395 C 414.413 228.978 411.874 228.981 409.039 228.776 C 409.981 229.925 411.217 229.756 411.965 229.764 C 414.33 229.791 416.645 230.32 419.007 230.251 C 421.475 230.179 423.904 230.607 426.343 230.924 C 427.902 231.127 429.469 230.873 431.022 230.635 C 431.539 230.555 431.25 230.879 431.328 231.093 C 431.575 231.773 432.354 231.714 433.016 231.7 C 435.429 231.646 437.759 232.145 440.074 232.762 C 440.412 232.851 440.824 232.777 440.846 233.31 C 440.869 233.837 440.452 233.766 440.138 233.92 C 438.338 234.806 436.601 233.783 434.835 233.757 C 433.847 233.742 432.82 232.691 431.975 234.112 C 431.821 234.371 431.343 234.163 430.979 234.063 C 428.862 233.487 426.64 233.665 424.484 232.96 C 423.41 232.609 421.852 233.058 420.505 233.32 C 418.637 233.684 416.733 232.812 414.803 232.655 C 413.172 232.521 411.447 232.285 409.823 232.175 C 406.462 231.947 403.089 231.296 399.311 231.855 C 401.632 232.68 403.767 232.729 405.799 232.731 C 410.416 232.735 414.873 234.398 419.515 233.895 C 422.943 236.23 427.044 235.019 430.751 235.994 C 433.06 236.601 435.535 236.575 437.932 236.855 C 438.128 236.878 438.303 237.072 438.445 237.49 C 428.985 235.924 419.411 236.448 409.676 235.325 C 411.986 236.855 414.789 235.118 416.926 237.335 C 413.116 238.752 409.45 236.659 405.796 237.276 C 407.138 238.301 409.182 238.07 410.167 239.664 C 410.37 239.994 410.225 240.463 409.617 240.598 C 410.729 241.308 411.254 239.078 412.325 240.332 C 412.38 239.925 412.429 239.569 412.476 239.225 C 412.866 238.976 413.411 239.817 413.216 240.312 C 413.177 240.411 413.222 240.543 413.231 240.66 C 422.071 240.951 430.835 241.908 439.816 243.263 C 439.047 244.046 438.477 244.167 437.845 244.101 C 434.511 243.754 431.175 243.416 427.841 243.061 C 426.349 242.902 424.827 242.783 423.357 242.734 C 419.8 242.616 416.279 242.227 412.74 241.981 C 408.512 241.687 404.248 241.903 400 241.919 C 399.38 241.922 398.629 241.659 398.199 242.651 C 405.246 242.869 412.23 243.077 419.192 243.484 C 426.213 243.894 433.306 244.4 440.118 246.547 C 438.047 247.28 435.934 247.215 433.946 246.914 C 431.464 246.539 428.955 246.108 426.488 246.01 C 421.06 245.794 415.648 245.322 410.218 245.116 C 401.839 244.798 393.464 244.908 385.089 244.838 C 379.972 244.796 374.85 244.681 369.74 244.864 C 361.303 245.165 352.861 244.997 344.431 245.264 C 338.218 245.461 332.004 245.339 325.802 245.605 C 320.498 245.832 315.186 246.018 309.894 246.365 C 303.686 246.772 297.49 246.482 291.293 246.661 C 289.484 246.714 287.678 246.808 285.763 246.513 C 286.211 245.635 286.892 245.537 287.612 245.564 C 291.561 245.707 295.467 245.296 299.392 244.928 C 301.202 244.758 303.117 244.6 305.03 245.075 C 306.182 245.36 307.54 244.855 308.815 244.754 C 312.29 244.479 315.764 244.268 319.243 244.062 C 324.849 243.728 330.461 243.192 336.065 243.448 C 339.689 243.612 343.281 242.98 346.885 243.376 C 347.986 243.497 348.956 242.992 349.991 242.641 C 347.22 242.641 344.449 242.641 341.678 242.641 C 337.169 242.641 332.658 242.555 328.151 242.668 C 324.361 242.763 320.569 242.887 316.78 243.233 C 315.555 243.345 314.226 243.277 312.931 243.335 C 308.167 243.545 303.394 243.748 298.629 243.681 C 296.094 243.645 293.594 243.605 291.104 244.093 C 290.032 244.303 289.166 243.137 288.037 243.652 C 288.13 243.968 288.226 244.291 288.359 244.744 C 287.485 244.744 286.463 245.062 286.006 244.689 C 284.009 243.055 281.556 243.58 279.344 243.041 C 278.534 242.844 277.553 242.991 277.322 241.968 C 277.103 240.992 278.214 240.9 278.602 240.035 C 276.609 239.017 276.39 236.364 274.6 234.761 C 273.887 234.87 274.164 236.798 272.635 235.713 C 272.807 237.497 274.738 238.559 273.949 240.382 C 272.875 240.633 272.383 239.779 271.998 239.114 C 270.336 236.248 269.101 233.021 269.154 229.839 C 269.237 224.857 269.196 219.766 270.819 214.917 C 270.932 214.58 271 214.208 271.195 213.926 C 271.633 213.29 271.749 212.197 272.869 212.393 C 273.899 212.574 274.062 213.492 274.101 214.331 C 274.147 215.329 274.829 215.653 275.652 216.153 C 276.057 215.157 275.888 214.001 276.863 213.416 C 276.943 213.368 277.025 213.147 276.992 213.112 C 275.508 211.524 277.579 211.509 278.063 210.71 C 276.61 209.357 276.172 207.593 276.289 205.579 C 275.526 205.389 274.82 205.279 274.151 205.609 C 273.313 206.02 273.146 205.234 272.725 204.894 C 273.03 204.531 273.068 204.055 273.779 203.931 C 277.366 203.307 280.924 202.658 284.589 202.467 C 294.024 201.975 303.461 201.827 312.905 201.725 C 318.555 201.664 324.157 202.019 329.765 202.511 C 331.472 202.661 333.107 201.845 334.797 202.16 C 338.53 202.855 342.292 202.397 346.038 202.5 C 349.458 202.594 352.855 202.06 356.309 202.461 C 362.074 203.132 367.898 202.68 373.684 202.933 C 378.136 203.128 382.605 203.26 387.038 203.666 C 392.655 204.181 398.274 204.643 403.895 205.106 C 409.151 205.539 414.476 205.482 419.643 206.589 C 422.995 207.307 426.423 207.429 429.765 208.334 C 431.687 208.854 433.639 209.502 435.629 209.748 C 436.618 209.87 436.044 210.484 436.328 210.866 C 434.449 210.25 432.505 210.315 430.648 209.822 C 428.607 209.28 426.588 209.116 424.565 210.139 C 423.177 210.842 421.594 210.319 420.196 210.093 C 415.364 209.313 410.498 208.898 405.647 208.321 C 399.92 207.639 394.165 207.332 388.431 206.803 C 383.714 206.367 378.995 206.449 374.299 206.088 C 368.901 205.674 363.506 206.105 358.134 205.731 C 355.224 205.529 352.324 205.523 349.42 205.436 C 347.417 205.377 345.434 206.366 343.368 205.637 C 343.65 205.805 343.931 206.123 344.213 206.122 C 349.212 206.115 354.084 207.477 359.12 207.33 C 362.215 207.24 365.359 207.471 368.462 207.947 C 369.966 208.178 371.453 207.666 373.063 207.88 C 376.662 208.357 380.348 208.209 383.975 208.438 C 389.826 208.808 395.698 208.761 401.517 209.21 C 407.843 209.7 414.15 210.732 420.384 212.206 C 423.305 212.897 426.413 213.298 429.481 213.465 C 429.745 213.48 430.005 213.57 430.229 213.795 C 428.008 213.847 425.821 213.803 423.676 213.402 C 423.4 214.23 424.329 214.038 424.44 214.803 C 419.797 216.002 415.14 213.764 410.567 214.707 C 411.562 215.712 412.967 215.408 414.105 215.427 C 417.519 215.485 420.795 216.349 424.122 216.85 C 425.461 217.052 426.886 216.825 428.168 217.462 C 428.917 217.834 430.328 216.654 430.478 218.447 C 432.357 217.934 433.883 219.545 435.733 219.304 C 437.62 219.057 439.4 219.754 441.219 220.074 C 441.619 220.144 442.217 220.259 442.295 220.856 C 442.385 221.565 441.818 221.738 441.314 221.963 C 439.681 222.692 438.155 221.658 436.56 221.655 C 436.125 221.655 435.625 221.473 435.147 221.488 C 430.614 221.636 426.195 220.576 421.705 220.24 C 418.845 219.907 415.991 219.571 413.135 219.236 C 413.121 219.393 413.106 219.55 413.091 219.707 C 415.954 220.028 418.781 220.725 421.721 220.222 Z "
                                fill="rgb(254,254,254)"
                              />
                            </svg>
                            Ink brush-strokes
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/11.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/13.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/14.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/9.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/ink-brush-strokes/10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="shape-badges">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ isolation: "isolate" }}
                              viewBox="635.423 319.15 189.923 253.893"
                              width="189.923pt"
                              height="253.893pt"
                            >
                              <path
                                d=" M 741.11 569.194 C 734.865 574.335 725.888 574.321 719.643 569.18 C 694.723 548.667 659.883 523.204 643.966 511.714 C 638.598 507.84 635.423 501.619 635.423 494.999 C 635.423 469.203 635.423 402.088 635.423 359.49 C 635.423 353.881 638.236 348.645 642.908 345.541 C 695.868 310.353 764.9 310.353 817.86 345.541 C 822.524 348.641 825.346 353.89 825.346 359.49 C 825.346 402.089 825.346 469.203 825.346 494.999 C 825.346 501.609 822.163 507.846 816.803 511.714 C 800.882 523.207 766.031 548.678 741.11 569.194 Z "
                                fill="rgb(255,255,255)"
                              />
                            </svg>
                            Shapes &amp; Badges
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/11.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/13.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/14.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/9.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/shape-badges/10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="speech-bubbles">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ isolation: "isolate" }}
                              viewBox="43.895 234.936 300.776 122.107"
                              width="300.776pt"
                              height="122.107pt"
                            >
                              <g>
                                <path
                                  d=" M 318.759 234.936 L 54.968 234.936 C 48.853 234.936 43.895 239.893 43.895 246.008 L 43.895 303.957 C 43.895 310.072 48.853 315.029 54.968 315.029 L 281.829 315.029 C 282.214 322.223 288.152 327.941 295.441 327.941 C 302.731 327.941 308.669 322.223 309.055 315.029 L 318.759 315.029 C 324.874 315.029 329.832 310.072 329.832 303.957 L 329.832 246.008 C 329.832 239.893 324.874 234.936 318.759 234.936 Z "
                                  fill="#FFFFFF"
                                />
                                <path
                                  d=" M 318.895 329.562 C 314.118 329.562 310.246 333.434 310.246 338.21 C 310.246 342.987 314.118 346.859 318.895 346.859 C 323.671 346.859 327.543 342.987 327.543 338.21 C 327.543 333.434 323.671 329.562 318.895 329.562 Z "
                                  fill="#FFFFFF"
                                />
                                <path
                                  d=" M 339.579 346.859 C 336.767 346.859 334.487 349.139 334.487 351.951 C 334.487 354.763 336.767 357.043 339.579 357.043 C 342.392 357.043 344.671 354.763 344.671 351.951 C 344.671 349.139 342.392 346.859 339.579 346.859 Z "
                                  fill="#FFFFFF"
                                />
                              </g>
                            </svg>
                            Speech Bubbles
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/11.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/13.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/14.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/9.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/speech-bubbles/10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="clouds">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ isolation: "isolate" }}
                              viewBox="49.778 10.09 40.093 21.033"
                              width="40.093pt"
                              height="21.033pt"
                            >
                              <path
                                d=" M 86.253 21.943 C 86.548 21.471 86.718 20.915 86.718 20.317 C 86.718 18.621 85.343 17.245 83.647 17.245 C 82.85 17.245 82.124 17.549 81.578 18.046 C 80.814 16.802 79.441 15.972 77.874 15.972 C 77.003 15.972 76.192 16.229 75.512 16.671 C 75.107 12.97 71.972 10.09 68.165 10.09 C 65.51 10.09 63.182 11.491 61.879 13.592 C 61.296 13.301 60.638 13.138 59.943 13.138 C 57.543 13.138 55.598 15.084 55.598 17.483 C 55.598 18.213 55.779 18.901 56.097 19.505 C 55.932 19.492 55.766 19.484 55.598 19.484 C 52.384 19.484 49.778 22.09 49.778 25.304 C 49.778 28.518 52.384 31.124 55.598 31.124 C 58.813 31.124 82.655 31.124 85.222 31.124 C 87.79 31.124 89.871 29.043 89.871 26.476 C 89.871 24.263 88.324 22.412 86.253 21.943 Z "
                                fill="rgb(254,254,254)"
                              />
                            </svg>
                            Clouds
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/11.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/13.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/14.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/9.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/clouds/10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="trees">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              width={103}
                              height={135}
                              viewBox="0 0 103 135"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M86.9693 119.119C86.9333 118.631 86.904 118.165 86.8867 117.716C86.9653 117.747 87.0467 117.76 87.128 117.781C87.068 118.219 87.0133 118.66 86.9693 119.119ZM85.7453 116.761C85.816 116.863 85.888 116.965 85.9667 117.052C85.932 117.289 85.8973 117.527 85.872 117.756C85.8253 117.4 85.784 117.071 85.7453 116.761ZM74.648 100.091C74.8187 100.091 75.0053 100.091 75.1933 100.091C74.5027 101.66 74.2947 103.184 74.1373 105.08C74.0747 105.587 74.4173 105.895 74.844 105.967C74.6947 106.479 74.5573 106.985 74.4173 107.552C74.3307 107.86 74.4173 108.188 74.62 108.407C74.5307 109.024 74.5813 109.68 74.9093 110.575C75.0573 110.973 75.448 111.245 75.8333 111.28C75.8933 112.116 75.984 112.933 76.12 113.808C76.2547 114.751 77.6213 114.697 78.028 114.027C78.1107 113.9 78.204 113.753 78.2947 113.624C78.2947 113.683 78.2947 113.733 78.2947 113.768C78.352 114.627 79.4947 115.265 80.1133 114.517C81.1307 113.316 81.6027 119.517 84.7707 112.533C84.684 113.644 84.8187 114.639 85.096 115.468C85.0907 115.487 85.0747 115.495 85.0733 115.516C84.9893 117.447 85.0733 119.392 85.016 121.301C84.8573 121.469 84.7507 121.696 84.7707 122.005C84.7707 122.773 84.8093 123.537 84.8573 124.287C84.616 126.447 84.0947 128.503 82.8933 130.447C82.6227 130.884 83.0813 131.284 83.4973 131.211C84.0053 131.139 84.3907 130.923 84.7507 130.608C84.7507 131.392 84.7507 132.176 84.7507 132.975C84.7707 133.868 85.5853 134.176 86.2293 133.904C86.388 133.959 86.548 133.973 86.7133 133.973C87.0787 134.044 87.48 133.973 87.716 133.611C87.9667 133.539 88.2 133.341 88.28 132.96C88.28 132.867 88.28 132.795 88.3053 132.707C88.3053 132.684 88.3053 132.684 88.3053 132.684C88.3933 132.975 88.4973 133.228 88.6507 133.468C88.8573 133.812 89.3147 133.796 89.5267 133.444C90.392 132.105 89.7147 129.649 89.5187 128.139C89.2413 126.229 88.9667 124.337 88.4413 122.503C88.3933 121.955 88.3427 121.408 88.2973 120.865C88.24 119.812 88.224 118.767 88.2413 117.719C89.2627 117.352 90.3147 116.124 91.0987 113.683C93.596 115.936 93.028 116.479 96.2973 117.792C97.0973 118.117 97.7187 117.153 97.5707 116.479C97.3547 115.5 97.1693 114.568 96.9173 113.683C97.7293 114.153 98.5187 114.627 99.2973 115.155C100.08 115.68 100.963 114.751 100.773 113.991C100.407 112.591 100.133 111.205 99.7227 109.88C99.7227 109.88 99.7547 109.897 99.8 109.916C100.609 110.315 101.475 109.644 101.265 108.771C101.008 107.627 100.755 106.573 100.407 105.553C101.048 105.641 101.737 104.935 101.497 104.28C101.016 102.912 100.581 101.549 100.08 100.241C100.336 100.333 100.537 100.44 100.781 100.531C101.507 100.805 102.193 99.9667 101.989 99.292C101.355 97.132 100.373 95.272 99.0787 93.5493C99.5747 93.4027 99.9 92.8213 99.748 92.328C99.2493 90.712 98.572 89.2387 97.7707 87.8027C98.4947 87.9507 99.264 87.4533 99.0107 86.5613C98.752 85.6347 98.5187 84.7093 98.2053 83.816C98.972 84.056 99.7227 83.4173 99.5347 82.584C99.0787 80.728 98.2893 79.0307 97.372 77.4307C97.9693 77.3787 98.4293 76.78 98.2893 76.1107C97.7707 73.5613 96.6613 71.3453 95.3333 69.1787C95.8947 68.996 96.32 68.4347 96.08 67.8893C95.5533 66.6707 95.128 65.4133 94.6253 64.192C94.6693 64.2133 94.7387 64.2467 94.7867 64.2467C95.5373 64.3747 96.4013 63.7213 96.096 62.8893C95.0267 59.956 93.5547 57.2693 91.8347 54.7187C92.136 54.3747 92.2293 53.8493 91.9973 53.4307C91.4613 52.4107 91.148 51.3573 90.8253 50.264C91.5707 50.432 92.3867 49.7893 92.0987 48.9547C91.4613 47.0827 90.8253 45.464 89.7147 44.0293C89.768 44.0293 89.7867 44.0293 89.8467 44.0293C90.4973 43.9373 90.9587 43.4093 90.7867 42.736C90.1347 40.192 89.2627 37.808 87.716 35.6587C87.6827 35.5893 87.6253 35.5533 87.5867 35.5307C86.948 33.772 85.656 26.136 84.5907 28.256C82.5933 32.2587 79.0853 39.4267 79.5613 42.7933C79.6587 43.3547 80.096 43.7547 80.548 43.8093C80.3333 44.68 80.104 45.592 79.8413 46.4973C79.752 46.8307 79.852 47.156 80.0507 47.3907C78.912 50.048 78.06 52.776 77.6213 55.7027C77.5053 56.4893 78.12 57.048 78.7627 56.9653C78.7733 57.1133 78.7787 57.2613 78.7947 57.4107C78.3747 58.864 78.0933 60.368 78.0933 61.9573C78.0933 62.1547 78.1693 62.34 78.2813 62.488C76.3787 65.4307 75.2853 68.7933 75.352 72.4173C75.352 72.9773 75.8853 73.4307 76.4173 73.4547C76.076 75.4133 75.912 77.472 76.64 79.016C76.7827 79.3053 76.9587 79.5613 77.1533 79.7293C75.8333 81.508 74.9587 83.5427 74.6427 85.8587C74.5307 86.6187 75.096 87.308 75.912 87.1093H75.968C75.148 89.2013 74.5027 91.3107 74.368 93.6213C74.312 94.132 74.7267 94.4733 75.1933 94.5653C74.5027 95.896 74 97.2747 73.6613 98.8227C73.4947 99.476 73.9693 100.091 74.648 100.091Z M37.3853 110.732C37.576 111.28 38.0627 111.716 38.6133 111.751C38.6667 112.933 38.8147 114.116 38.984 115.352C39.1733 116.716 40.9213 116.641 41.4853 115.66C41.5853 115.476 41.7253 115.277 41.8333 115.084C41.8333 115.155 41.8493 115.247 41.8493 115.316C41.932 116.519 43.4253 117.408 44.2427 116.351C45.584 114.607 46.1933 123.448 50.3613 113.517C50.18 115.943 50.664 118.005 51.5013 119.365C51.4787 120.272 51.4867 121.187 51.5053 122.103C51.3147 124.029 51.3053 125.988 51.22 127.921C50.9787 129.123 50.5613 130.251 49.852 131.305C49.688 131.54 49.7307 131.957 49.964 132.141C51.0133 133.027 51.724 132.539 52.2307 131.593C52.388 131.556 52.552 131.481 52.672 131.376C52.6893 131.957 52.7187 132.539 52.8693 133.045C52.8693 133.393 53.088 133.668 53.372 133.776C53.4147 133.812 53.4507 133.812 53.532 133.843C53.532 133.843 53.58 133.868 53.6187 133.868C53.6907 133.884 53.7987 133.904 53.88 133.904L53.9373 133.884C54.0307 133.868 54.14 133.843 54.232 133.812C54.2547 133.812 54.2653 133.812 54.2653 133.812C54.5653 133.668 54.7787 133.431 54.8067 133.065C54.9067 132.741 54.964 132.376 55.016 131.993C55.3067 132.011 55.6453 131.865 55.7307 131.507C56.5533 127.883 56.3933 123.901 56.252 119.976C57.1413 119.037 57.992 117.48 58.6827 115.155C61.984 118.388 61.2267 119.137 65.528 121.013C66.5853 121.447 67.38 120.12 67.2026 119.137C66.9293 117.756 66.672 116.444 66.352 115.155C67.4067 115.848 68.464 116.479 69.476 117.261C70.492 118.027 71.6773 116.732 71.4066 115.608C70.9466 113.624 70.576 111.645 69.9907 109.736C70.0413 109.771 70.092 109.804 70.1307 109.804C71.2 110.371 72.3507 109.427 72.056 108.148C71.7227 106.573 71.3987 105.041 70.9467 103.584C71.7907 103.711 72.6667 102.731 72.364 101.784C71.736 99.8427 71.1827 97.912 70.492 96.024C70.8213 96.148 71.1067 96.3093 71.456 96.4573C72.4013 96.8227 73.2747 95.6573 73.024 94.692C72.1933 91.64 70.8907 88.9653 69.1973 86.5267C69.828 86.3107 70.2813 85.4907 70.0706 84.76C69.4186 82.4893 68.5293 80.36 67.4907 78.3253C68.4213 78.5627 69.4613 77.836 69.1067 76.5973C68.7547 75.2707 68.4373 73.9613 68.0547 72.652C69.044 73.0347 70.0413 72.104 69.784 70.924C69.1827 68.2467 68.1533 65.8693 66.9373 63.5907C67.732 63.5213 68.312 62.632 68.1533 61.7053C67.4733 58.084 66.0133 54.9013 64.2773 51.848C64.9813 51.592 65.56 50.792 65.2347 50.0147C64.5467 48.2467 63.972 46.4627 63.3253 44.7387C63.392 44.7733 63.4667 44.7933 63.544 44.812C64.5267 44.9733 65.656 44.08 65.2653 42.88C63.8547 38.6933 61.9267 34.8747 59.6507 31.2587C60.036 30.7533 60.2 30.02 59.8693 29.388C59.1747 27.9693 58.7427 26.4547 58.3333 24.916C59.292 25.1333 60.3827 24.2293 60.016 23.044C59.1747 20.352 58.324 18.08 56.8493 16.0427C56.9147 16.0347 56.9893 16.0267 57.0347 16.0267C57.8907 15.8947 58.4973 15.1493 58.292 14.1907C58.128 13.5013 57.9347 12.8347 57.7427 12.1733C57.4173 11.5573 57.1613 10.9027 57.004 10.1027C56.9653 9.79732 56.8013 9.30666 56.5987 8.72399C55.984 7.10399 55.2173 5.57866 54.2547 4.13199C54.1947 4.02799 54.116 4.00399 54.0693 3.91999C53.9787 3.73066 53.9373 3.46532 53.852 3.17599C52.3413 1.03466 50.5533 -0.293344 48.9333 1.52666C48.84 1.63066 48.7453 1.74532 48.652 1.87332C46.5027 4.84532 45.276 8.16399 43.636 11.2947C43.4493 12.408 43.396 13.4173 43.5027 14.2693C43.6013 15.096 44.1867 15.6333 44.8333 15.6947C44.5053 16.9693 44.2027 18.2613 43.868 19.532C43.7427 20.0253 43.9013 20.476 44.164 20.8267C42.6493 24.5867 41.5387 28.496 40.9493 32.66C40.8067 33.7587 41.5933 34.592 42.4533 34.456C42.4693 34.676 42.4733 34.896 42.4973 35.1147C41.9413 37.1547 41.5853 39.2867 41.5853 41.552C41.5853 41.8453 41.6827 42.0787 41.8333 42.336C39.3053 46.4973 37.872 51.2667 37.948 56.468C37.964 57.2507 38.6667 57.8853 39.36 57.92C38.9067 60.704 38.724 63.632 39.6693 65.8133C39.864 66.2493 40.0787 66.5747 40.3133 66.8507C38.5907 69.3787 37.4493 72.2707 37.028 75.58C36.8987 76.672 37.6147 77.6187 38.6827 77.34L38.7507 77.3227C37.712 80.3253 36.8467 83.3307 36.6453 86.6C36.612 87.3427 37.1333 87.86 37.74 87.9827C36.8467 89.836 36.1947 91.8373 35.7213 94.004C35.5413 94.9467 36.144 95.8053 37.028 95.8053C37.2627 95.8053 37.5213 95.8053 37.752 95.8053C36.8467 98.0573 36.576 100.22 36.356 102.896C36.284 103.659 36.7347 104.08 37.2867 104.187C37.104 104.917 36.9147 105.661 36.7347 106.423C36.612 106.897 36.7347 107.369 37.0053 107.681C36.8987 108.553 36.9533 109.463 37.3853 110.732Z M34.9147 90.4347C34.1533 88.072 32.9933 85.9827 31.456 84.0893C32.028 83.9107 32.4267 83.2907 32.248 82.7267C31.6653 80.9427 30.844 79.288 29.9187 77.7107C30.7547 77.8707 31.6853 77.3227 31.3853 76.3627C31.084 75.3413 30.7547 74.3093 30.4093 73.3093C31.3173 73.58 32.2133 72.8707 31.992 71.9427C31.448 69.892 30.5187 68.0093 29.4267 66.2493C30.12 66.1773 30.6827 65.5053 30.5187 64.7773C29.8987 61.9573 28.584 59.504 27.0253 57.1027C27.6667 56.9027 28.188 56.2827 27.8947 55.6867C27.256 54.2853 26.7547 52.936 26.1707 51.592C26.2267 51.612 26.3 51.6307 26.364 51.6493C27.256 51.7733 28.268 51.0667 27.9173 50.1347C26.64 46.8787 24.9013 43.916 22.848 41.096C23.196 40.6973 23.3213 40.136 23.0653 39.6427C22.424 38.5333 22.044 37.376 21.644 36.1733C22.5307 36.3133 23.5107 35.624 23.1827 34.7147C22.424 32.624 21.644 30.8387 20.3147 29.2547C20.3787 29.2547 20.4373 29.2547 20.4973 29.24C21.2627 29.1693 21.8053 28.5853 21.6067 27.84C21.464 27.296 21.3 26.7693 21.1333 26.2387C20.8547 25.7867 20.588 25.2773 20.4693 24.6453C20.4107 24.408 20.2787 24.0307 20.1147 23.5613C19.524 22.324 18.8547 21.1067 17.988 20.0013C17.9333 19.9227 17.8707 19.896 17.808 19.8453C17.7547 19.68 17.696 19.488 17.6147 19.2613C16.4973 17.8787 15.1853 16.952 13.9413 17.4907L13.9427 17.4853C13.9133 17.4987 13.8813 17.524 13.8507 17.5373C13.728 17.5987 13.6053 17.6533 13.484 17.7453C13.3 17.8733 13.1187 18.0333 12.9507 18.2533C12.42 18.8613 11.9693 19.5053 11.5333 20.16C11.5253 20.1813 11.516 20.2027 11.5067 20.224C10.3667 21.976 9.48133 23.808 8.40666 25.568C8.23999 26.4387 8.19599 27.2227 8.30132 27.8787C8.39066 28.5107 8.91466 28.952 9.47866 29.0067C9.208 30.004 8.932 30.988 8.64133 31.9707C8.51333 32.3707 8.64133 32.7147 8.884 32.988C7.51733 35.9173 6.52399 38.9533 5.98932 42.192C5.85732 43.0373 6.58933 43.6813 7.35199 43.576C7.36399 43.7507 7.36933 43.9253 7.39066 44.1C6.89066 45.7027 6.568 47.3413 6.568 49.116C6.568 49.336 6.65466 49.5187 6.792 49.6987C4.51333 52.952 3.23199 56.668 3.29733 60.704C3.31466 61.304 3.95066 61.812 4.55466 61.828C4.16933 63.9933 3.98532 66.2907 4.83866 67.976C5.00532 68.308 5.224 68.5747 5.42 68.7933C3.86666 70.744 2.84133 72.9773 2.45866 75.58C2.328 76.4133 2.98933 77.1827 3.97866 76.944H4.03066C3.07866 79.2507 2.30533 81.5987 2.11466 84.148C2.09333 84.7093 2.56799 85.1093 3.10933 85.22C2.30533 86.6747 1.70133 88.2013 1.29466 89.9107C1.11999 90.62 1.67733 91.3107 2.45866 91.3107C2.696 91.3107 2.89733 91.3107 3.13066 91.3107C2.30533 93.0533 2.06533 94.732 1.85466 96.8227C1.80399 97.4 2.20533 97.7467 2.696 97.8413C2.52933 98.4 2.38399 98.968 2.20533 99.5667C2.09333 99.9307 2.21066 100.277 2.43733 100.531C2.328 101.224 2.39332 101.928 2.78666 102.931C2.95599 103.348 3.404 103.659 3.88533 103.711C3.95066 104.619 4.076 105.553 4.21866 106.495C4.39333 107.552 5.98933 107.513 6.476 106.753C6.568 106.587 6.69466 106.463 6.808 106.296C6.82266 106.369 6.82266 106.423 6.82266 106.479C6.86932 107.42 8.22266 108.113 8.96799 107.279C10.1667 105.917 10.732 112.827 14.4867 105.08C14.3267 106.923 14.7373 108.501 15.4587 109.56C14.9987 112.607 15.692 116.025 15.7627 118.987C15.8773 123.355 14.9707 127.34 14.664 131.593C14.588 132.484 15.7387 132.539 16.156 131.972C16.536 131.481 16.8253 130.907 17.06 130.308C17.1347 130.192 17.2053 130.105 17.2453 129.957C17.2813 129.868 17.2813 129.757 17.292 129.649C17.3773 129.409 17.444 129.173 17.4973 128.939C17.536 129.157 17.5707 129.392 17.6067 129.628C17.696 130.105 18.364 130.192 18.6827 129.883C18.7627 130.321 18.8547 130.792 18.9987 131.189C19.2467 131.939 20.3147 131.957 20.5547 131.156C20.8987 129.907 20.388 128.573 20.0373 127.319C19.5947 125.684 19.1533 124.048 19.2627 122.357C19.2773 122.196 19.188 122.103 19.0827 122.028C18.8987 118.324 18.464 114.58 18.5467 110.84C19.768 110.445 21.0293 109.083 21.9693 106.349C24.9427 108.88 24.26 109.463 28.136 110.899C29.0987 111.263 29.8253 110.207 29.6627 109.463C29.4093 108.388 29.1907 107.369 28.9027 106.369C29.8467 106.876 30.7973 107.385 31.7187 107.988C32.6133 108.588 33.6853 107.572 33.4613 106.717C33.0467 105.152 32.6973 103.621 32.1627 102.149C32.2133 102.165 32.2547 102.185 32.304 102.185C33.2547 102.641 34.2893 101.897 34.0267 100.913C33.7307 99.6773 33.4373 98.496 33.0267 97.3507C33.792 97.4587 34.596 96.6933 34.32 95.9653C33.7547 94.4387 33.228 92.9493 32.6307 91.4587C32.9173 91.584 33.172 91.6907 33.4867 91.804C34.336 92.1107 35.136 91.18 34.9147 90.4347Z"
                                fill="black"
                              />
                            </svg>
                            Trees
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/2.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/3.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/4.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/9.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/trees/10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="animals">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ isolation: "isolate" }}
                              viewBox="251.01 297.912 30.347 34.754"
                              width="30.347pt"
                              height="34.754pt"
                            >
                              <path
                                d=" M 270.516 328.839 L 270.906 329.072 L 271.158 329.27 L 270.375 329.256 L 268.072 329.21 L 267.243 328.75 L 265.935 327.02 L 266.491 326.416 L 267.813 325.792 L 268.457 327.828 L 268.825 328.566 L 270.516 328.839 Z  M 276.628 305.24 L 278.469 305.591 L 280.005 305.406 L 280.988 305.344 L 281.357 305.591 L 281.294 304.67 L 280.926 303.072 L 279.821 301.66 L 278.224 300.493 L 277.006 300.187 L 276.995 300.124 L 276.319 299.203 L 276.025 299.069 L 273.739 298.035 L 272.019 297.912 L 269.993 298.71 L 268.087 302.028 L 267.78 303.625 L 267.659 305.529 L 266.123 307.433 L 265.629 308.601 L 265.384 309.154 L 261.269 312.778 L 259.857 315.051 L 259.549 315.604 L 255.679 318.429 C 255.78 318.682 257.615 318.272 258.273 318.118 C 258.417 318.083 258.504 318.06 258.504 318.06 L 255.373 320.703 L 253.958 322.545 L 253.345 323.467 L 251.01 325.617 L 251.809 327.029 L 252.916 327.828 L 256.232 325.801 L 259.365 325.002 L 261.023 325.249 L 262.006 325.739 L 262.614 326.537 L 262.614 326.536 L 262.989 327.029 L 264.402 327.828 L 264.613 327.727 L 266.368 329.441 L 266.551 330.086 L 267.197 331.099 L 269.786 332.28 L 269.792 332.374 L 270.315 332.528 L 270.667 332.666 L 270.229 332.239 L 270.791 332.16 L 273.14 331.652 L 273.201 331.625 L 273.524 331.714 L 273.954 331.775 L 274.031 331.836 L 273.877 331.529 L 273.611 331.438 L 273.861 331.324 L 273.861 331.324 L 274.154 331.191 L 273.693 330.269 L 273.221 329.65 L 273.221 329.65 L 273.181 329.597 L 273.263 329.594 L 273.617 329.655 L 273.431 329.424 L 273.024 329.391 L 272.956 329.302 L 271.201 329.271 L 271.006 328.881 L 274.784 328.996 L 275.729 329.232 L 275.927 329.417 L 276.434 329.649 L 276.388 329.325 L 276.14 329.079 L 276.243 328.903 L 276.243 328.903 L 276.933 327.706 L 276.958 327.469 L 277.287 327.436 L 277.631 327.529 L 277.541 327.275 L 276.984 327.198 L 276.995 327.09 L 274.599 326.722 L 272.081 326.784 L 269.993 326.846 L 269.148 325.205 L 271.037 324.45 L 276.074 321.194 L 279.207 318.06 L 279.927 316.62 L 280.005 316.463 L 280.435 313.761 C 280.435 313.761 280.251 311.857 280.251 311.672 C 280.251 311.489 279.083 309.215 279.083 309.215 L 277.916 308.109 L 277.118 307.679 L 276.454 305.627 L 276.468 305.621 L 276.628 305.24 Z "
                                fill="rgb(0,0,0)"
                              />
                            </svg>
                            Animals{" "}
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/11.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/13.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/14.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/9.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/animals/10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="vehicles">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              width={330}
                              height={132}
                              viewBox="0 0 330 132"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M57.664 87.9C65.832 87.9 72.476 94.5453 72.476 102.712C72.476 110.88 65.832 117.524 57.664 117.524C49.4973 117.524 42.8506 110.88 42.8506 102.712C42.8506 94.5453 49.4973 87.9 57.664 87.9Z M36.52 102.712C36.52 91.0533 46.0053 81.5693 57.6639 81.5693C69.3226 81.5693 78.8067 91.0533 78.8067 102.712C78.8067 114.371 69.3226 123.855 57.6639 123.855C46.0053 123.855 36.52 114.371 36.52 102.712ZM29.1813 102.712C29.1813 118.441 41.9333 131.193 57.6639 131.193C73.3933 131.193 86.1453 118.441 86.1453 102.712C86.1453 86.9826 73.3933 74.2307 57.6639 74.2307C41.9333 74.2307 29.1813 86.9826 29.1813 102.712Z M254.119 87.9C262.287 87.9 268.932 94.5453 268.932 102.712C268.932 110.88 262.287 117.524 254.119 117.524C245.952 117.524 239.307 110.88 239.307 102.712C239.307 94.5453 245.952 87.9 254.119 87.9Z M232.976 102.712C232.976 91.0533 242.461 81.5693 254.119 81.5693C265.777 81.5693 275.263 91.0533 275.263 102.712C275.263 114.371 265.777 123.855 254.119 123.855C242.461 123.855 232.976 114.371 232.976 102.712ZM225.637 102.712C225.637 118.441 238.388 131.193 254.119 131.193C269.849 131.193 282.601 118.441 282.601 102.712C282.601 86.9826 269.849 74.2307 254.119 74.2307C238.388 74.2307 225.637 86.9826 225.637 102.712Z M29.1813 40.1613C29.1813 40.1613 29.7866 24.7667 44.8479 17.0693C46.4826 16.2333 48.7573 15.5013 51.5413 14.8587V40.1613C38.1693 40.1613 29.1813 40.1613 29.1813 40.1613ZM60.2133 13.9387C71.536 11.3653 96.8333 10.6227 120.82 10.4987V40.1613H60.2133V13.9387ZM127.848 10.4773C140.957 10.4693 153.317 10.616 162.989 10.7093C197.461 11.044 210.513 36.48 210.513 36.48C210.513 43.8227 168.573 40.1826 127.848 40.1613V10.4773ZM298.868 51.356C298.868 51.356 316.272 57.564 318.948 68.944C318.948 68.944 307.904 74.6333 298.868 68.944C289.832 63.2533 298.868 51.356 298.868 51.356ZM0 87.9C0 102.84 5.02132 102.712 5.02132 102.712H23.0947C23.0947 102.712 24.0986 67.9387 57.6639 67.9387C91.2279 67.9387 92.0373 102.712 92.0373 102.712H220.888C220.888 102.712 218.212 69.948 254.119 69.948C290.027 69.948 287.824 102.712 287.824 102.712H325.643C325.643 102.712 329.324 102.745 329.324 90.028C329.324 77.3106 324.973 78.3147 324.973 78.3147C324.973 36.48 265.735 44.1773 230.94 34.1373C196.144 24.0973 220.555 0 126.175 0C31.7947 0 41.1653 4.68532 23.764 20.4147C6.35996 36.1453 8.03333 74.2307 8.03333 74.2307C5.69066 74.1627 0 72.96 0 87.9Z"
                                fill="black"
                              />
                            </svg>
                            Vehicles
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/vehicles/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/vehicles/2.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/vehicles/3.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/vehicles/4.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/vehicles/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/vehicles/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/vehicles/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/vehicles/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/vehicles/9.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="weapons">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="512px"
                              height="512px"
                              viewBox="0 0 512 512"
                              xmlSpace="preserve"
                            >
                              <path
                                d="M477.564 231.561c-.62-.972-2.023-1.592-4.434-1.997-1.592-.287-4.641-.845-8.509-1.456-17.035-2.987-48.586-8.526-56.825-9.624a39.529 39.529 0 0 0-5.415-.342c-3.543 0-5.459.611-7.204 1.24-1.034.343-1.942.621-3.103.757-.685.144-1.476.144-2.357.144-3.66 0-7.969-.701-8.382-.765-.621-.136-10.38-2.42-13.626-3.247-1.035-.216-1.943-.359-2.708-.359-1.376 0-1.942.422-2.141.701l-.144.207-.072.207v.071c-2.636-.414-6.493-1.043-6.493-1.043l-2.51-.899c-.126-4.426-5.459-7.951-6.988-8.302.071-.207.152-.423.152-.62 0-1.602-4.083-7.682-9.345-7.682H234.101v-.216l-1.233-.899h-1.816v-.216h5.261v-3.598c0-.972-.054-1.169-1.034-1.169-1.448 0-2.482 2.347-2.482 2.347h-2.932c-.189-1.033-.954-1.727-1.862-1.727-.89 0-1.655.693-1.844 1.727h-.567c-2.635-2.212-6.916-.62-6.916-.62h-2.24l-.54-.558h-3.193c-1.799-2.626-3.391 0-3.391 0h-2.905v.899h-.81c-.369-.413-.765-.611-1.403-.611-2.905 0-3.391 1.52-3.391 3.598v.971a1.595 1.595 0 0 0-.621-.144c-.342 0-.612.072-.765.216v-.846c0-.827-.144-1.241-1.295-1.241h-.989c-.072-.071-.072-.135-.144-.207-.467-.485-1.232-.692-2.563-.692-1.646 0-11.63.207-22.126.414-10.334.144-20.983.351-22.656.351-1.178 0-2.06.342-2.699.972h-1.304c-1.035 0-3.247 0-3.247 2.698v-.485H106.04c-.27 0-.558.063-.756.063h-.225c-.198 0-.342.072-.468.072h-.297c-.117.071-.27.071-.342.144h-.27c-.144.063-.27.063-.342.144-.072 0-.153 0-.198.063a.894.894 0 0 0-.422.135c-.072 0-.144 0-.216.071a2.27 2.27 0 0 1-.468.199c-.153.144-.369.215-.494.287-.072.072-.072.072-.144.072-.072.126-.198.207-.351.27 0 0-.072.072-.144.072-.045.144-.197.206-.27.27-.072.072-.072.072-.126.145-.072.071-.216.144-.297.278-.045 0-.045.063-.117.063-.072.145-.225.217-.341.352v.063c-2.167 2.356-3.346 5.819-5.685 8.311-.566.558-1.178 1.115-1.871 1.529H91.782c-1.376.756-3.049 1.17-4.992 1.17h-.198v.144c-.072 0-.153.063-.225.144H58.209v-2.213l-7.546-14.688c.494-.342.908-1.385.908-2.563 0-1.521-.639-2.762-1.331-2.762H43.332c-.71 0-1.25 1.241-1.25 2.762 0 1.178.342 2.148.836 2.563h-.225v.207c.072.072 1.034 5.612.072 9.696h-.072c-.27 0-.684.071-.684.071l-.153.072v3.589c0 .207-1.151 2.978-2.977 2.978v.287H36.2c-1.25 0-2.212 1.655-2.212 3.732s.962 3.805 2.212 3.805h4.623s2.779.342 4.308 3.741c.198 0 2.482.756 5.189.145h48.713c.639.962 1.673 1.871 3.346 1.871h1.646s.225-1.602 1.332-1.602v-.27h39.862c.495 2.761 2.833 2.761 6.44 2.761 1.457 0 3.741.279 6.719.692 5.531.756 13.923 1.943 23.808 1.943 13.995 0 23.043 1.025 28.521 3.255 1.232.549 2.563.685 3.67.685.54 0 1.106-.072 1.718-.072.639 0 1.259-.063 1.943-.063.566 0 .989-.144 1.331-.484a1.68 1.68 0 0 0 .27-.424c1.25-.125 1.943-.611 2.357-1.313l.396.144h.153c.215 0 9.488.486 20.408 1.044l3.273 2.626c-.072 1.654-.836 8.859-5.343 18.618-4.623 10.18-14.454 25.268-34.816 39.246l-.125.072c-.423.484-.225.898.468 2.086.414.684 1.034 1.727 1.798 2.969 1.323 2.141 3.193 5.055 5.55 8.725 4.011 6.223 8.167 12.52 8.167 12.592l.423.557.54-.27c.144-.072 12.322-6.854 25.4-20.848 11.09-11.838 24.869-31.139 30.4-58.009.837-.063 2.141-.063 2.779.63h.27c0 2.77.27 5.54 1.799 6.224 0 0 .756 4.442 1.718 5.819h1.106v-2.284s-.881-1.179 0-2.078h.495v-1.457c.413-.27.684-.899 1.592.144h.692c.765 1.313 2.779 3.184 7.744 3.454 2.015.072 3.957.216 5.756.287 3.391.198 6.566.414 9.84.414h1.79c3.4-.071 5.118-1.385 6.152-2.626 1.034 1.025 2.356 3.112 4.227 7.682 4.507 11.201 8.393 18.883 9.543 24.836 1.106 5.973.567 7.971 9.84 7.07 9.273-.973 12.322-7.609 12.125-10.738-.226-3.113-6.521-16.186-8.464-21.799-1.916-5.603-2.411-8.238-1.034-11 1.105-2.077 2.141-5.747 1.87-7.474h.567l1.304-2.428c1.673.342 5.189 1.24 7.204 1.663.495.063.963.207 1.305.279.494 2.482 4.92 4.218 11.782 6.781 2.06.828 4.497 1.727 6.979 2.698 10.253 4.156 72.745 32.806 80.444 37.231 2.015 1.188 3.886 1.816 5.388 1.816 3.463 0 5.63-2.914 6.026-8.113.413-8.85 7.348-39.587 8.04-42.636.412-1.792.753-3.177-.003-4.364zM231.339 207.33h-8.877 8.877zm-9.984 4.371h-.342.342zm-75.371-1.6h5.261c3.175-.899 6.098-1.377 8.932-1.377 3.049 0 5.333.478 7.205.963 1.106.217 1.987.414 2.752.414h7.357c2.824-.899 5.532-1.313 7.942-1.313 2.698 0 4.641.559 6.018.899a8.3 8.3 0 0 0 1.529.414c-.684.144-.836.629-.962.972-.144.413-.27.898-2.356.898h-9.489c-.738 0-.819-.063-.891-.27-.225-.629-.612-1.043-1.943-1.043h-11.144c-1.322 0-1.664.414-1.861 1.043-.081.207-.153.27-.99.27h-9.048c-.765 0-.836-.063-.909-.27-.198-.629-.611-1.043-1.871-1.043h-6.44v2.914h-1.925V210.1h2.833zm-39.863.485v-1.034H135.263l.468.477-1.035 3.544h-28.458v-1.457h-.117v-1.53zm-61.898-2.896c0-1.602 1.322-2.915 2.896-2.915h5.612l2.923 5.811h-8.535c-1.574 0-2.896-1.314-2.896-2.896zm7.969 15.498c.836-1.035 1.646-2.078 1.646-2.078H86.37c.072 0 .153.071.225.071v.073h2.482c-.27.197-.495.476-.495.827 0 .62.495 1.034 1.062 1.034h8.508v.072h-45.96zm53.165-.073h.54c.611 0 1.034-.414 1.034-1.034 0-.414-.27-.756-.692-.972h34.754v2.078h-35.635v-.072zm208.836 27.073c-3.732.063-7.474-.135-11.432-.423-1.798-.063-3.714-.206-5.729-.27-4.92-.278-5.954-2.285-6.026-2.572v-9.543c.144-.063.27-.144.414-.278.152-.207.27-.342.351-.486.144-.207.342-.485 2.554-.485 2.356 0 7.816.278 10.865.414 1.26.071 2.141.144 2.563.216.765.557 1.521 1.583 1.521 3.256 0 3.31.494 5.117-5.388 7.681-.145-.144-.288.899 1.573.684 1.943-.27 4.039-2.141 4.776-3.247.765-1.178 2.581-5.189 2.627-5.747l2.023-.558s1.942-.756 2.554-1.997h.297v4.911s-.765 2.968 0 5.811c.117.62.342.899.611 1.106-.681.762-1.941 1.455-4.154 1.527z"
                                fill="#010101"
                                id="army_x2C__military_x2C__war_x2C__weapon__x2C_navy_x2C__aviation_x2C___ak47__x2C__gun__x2C_"
                              />
                            </svg>
                            Weapons
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/weapons/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/weapons/11.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/weapons/13.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/weapons/14.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/weapons/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/weapons/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/weapons/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/weapons/9.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/weapons/10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="gifts">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              width={89}
                              height={113}
                              viewBox="0 0 89 113"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M44.4427 56.752C44.4667 56.748 44.4574 56.7493 44.4667 56.7467C44.4374 56.748 44.4187 56.748 44.4107 56.7493C44.408 56.7507 44.4053 56.7507 44.4027 56.752C44.408 56.7533 44.4267 56.7547 44.4427 56.752Z M5.88669 97.5573L16.592 101.756V59.4187L5.88669 55.2213V97.5573Z M57.664 29.6733L57.6254 29.6587C57.6214 29.6707 57.62 29.684 57.6174 29.696L57.664 29.6733Z M21.1254 103.532L24.1494 104.719V62.3827L21.1254 61.1973V103.532Z M22.1573 39.4667C20.784 38.2173 19.388 37.0533 17.9093 35.8187C17.668 35.6173 17.4187 35.4053 17.1733 35.2013L16.7907 35.012L0.534668 41.0307V51.016L16.592 57.4147V49.5747L28.104 43.9973C26.136 42.756 24.1693 41.2613 22.1573 39.4667Z M69.1093 102.989L82.9627 97.5573V55.2213L69.1093 60.6547V102.989Z M72.0187 34.9907L71.5147 35.2387C71.3387 35.3853 71.1574 35.5373 70.9827 35.6827C69.44 36.9613 67.9813 38.1693 66.5733 39.4493C64.5613 41.244 62.6027 42.7347 60.656 43.968L69.1093 48.064V58.6773L88.3333 51.016V41.0307L72.0187 34.9907Z M52.5493 47.48L61.5534 51.8413V61.6907L64.5747 60.484V51.0853L55.516 46.6147C54.64 46.948 53.6413 47.264 52.5493 47.48Z M61.5533 105.952L64.5747 104.768V62.432L61.5533 63.6173V105.952Z M28.6827 64.1613V106.496L44.424 112.669L57.0173 107.731V65.3947L44.424 70.3347L28.6827 64.1613Z M33.2227 46.6267L21.1254 52.596V59.224L24.1494 60.4267V53.3533L36.24 47.4947C35.12 47.28 34.1013 46.96 33.2227 46.6267Z M28.6827 56.3733V62.2333L44.4347 68.512L57.0173 63.4973V54.864L44.3827 48.6267L28.6827 56.3733Z M78.788 18.684C78.4027 17.772 77.8974 17.0933 77.2294 16.484L76.96 16.2507L76.4934 15.8893C76.1387 15.6173 75.892 15.4933 75.5934 15.3067C75.02 14.992 74.4414 14.724 73.8694 14.524C72.7227 14.1107 71.5907 13.8747 70.4774 13.7387C68.2507 13.4653 66.0867 13.664 64 14.06C61.1253 14.6413 58.404 15.776 55.9707 17.332C55.9 15.44 55.704 13.5133 55.2774 11.5573C54.7547 9.40666 54 7.18133 52.4067 5.08666C51.6027 4.04666 50.608 3.02266 49.2454 2.20399C47.9107 1.37733 46.156 0.82666 44.3627 0.831993L44.0587 0.842659L43.9694 0.85066L43.7894 0.86266C43.732 0.863993 43.4267 0.89466 43.152 0.93466C42.5654 1.01066 42.1734 1.12399 41.7547 1.23866C40.9427 1.49599 40.164 1.83333 39.5014 2.24266C38.1387 3.05066 37.144 4.06666 36.3067 5.07599C34.6654 7.12799 33.7374 9.27999 33.0654 11.4107C32.524 13.2347 32.192 15.0547 32.0107 16.86C29.8227 15.564 27.416 14.608 24.8867 14.0813C22.8067 13.6707 20.6427 13.4653 18.4174 13.732C17.304 13.8653 16.1734 14.1013 15.0294 14.5133C14.4574 14.7133 13.88 14.9813 13.3094 15.292C13.008 15.4827 12.7733 15.596 12.42 15.8667L11.94 16.2347L11.6707 16.468C11.0307 17.0467 10.5107 17.7213 10.1227 18.612C9.74003 19.484 9.60535 20.4733 9.66401 21.3227C9.80001 23.0453 10.4573 24.2293 11.0493 25.2413C12.312 27.228 13.7614 28.6307 15.212 29.9933C18.144 32.6467 21.1454 34.9427 23.932 37.476C26.84 40.0707 30.064 42.4227 33.76 43.9827C35.6054 44.7133 37.64 45.3187 39.7587 44.968C40.808 44.784 41.8107 44.3653 42.656 43.6707C42.7374 43.6067 42.8147 43.528 42.8947 43.4573C43.3694 43.5627 43.8587 43.62 44.3627 43.6C44.84 43.588 45.296 43.5053 45.7347 43.3853C45.8254 43.4667 45.912 43.5573 46.004 43.6307C46.8507 44.3373 47.848 44.7667 48.9 44.9587C51.0254 45.3293 53.0694 44.7253 54.92 43.9947C58.6307 42.4373 61.864 40.0773 64.7787 37.476C67.5707 34.9387 70.5854 32.6493 73.5374 30.012C74.9974 28.6573 76.4587 27.268 77.7454 25.3027C78.3494 24.3 79.0214 23.1373 79.1947 21.4213C79.2734 20.576 79.1587 19.576 78.788 18.684ZM51.348 35.04C50.7933 36.8027 50.0067 38.5227 48.8307 39.9187C48.108 40.7907 47.1974 41.52 46.2027 41.924C45.8894 41.5213 45.6493 41.0787 45.4773 40.5827C45.224 39.816 45.1307 38.9893 45.1534 38.148C45.1547 38.1 45.1534 38.052 45.1534 38.0027C45.192 37.14 45.3533 36.2653 45.6093 35.424C46.132 33.704 46.9 32.0307 47.9053 30.504C49.16 28.5747 50.684 26.78 52.3307 25.1787C52.524 28.472 52.2653 31.8307 51.348 35.04ZM44.504 9.49466C44.4894 9.49466 44.4627 9.49599 44.44 9.49599L44.4854 9.49466H44.504ZM40.1547 14.12C40.864 12.6827 41.712 11.3653 42.584 10.5067C43.0067 10.08 43.44 9.76933 43.7507 9.63199C43.892 9.55066 44.004 9.53199 44.0987 9.50799C44.0987 9.50799 44.1013 9.50666 44.1067 9.50533C44.1147 9.50399 44.1227 9.50266 44.1307 9.49999C44.1694 9.49866 44.196 9.49466 44.1627 9.50266C44.1787 9.50266 44.1907 9.50266 44.216 9.50266L44.364 9.49866C44.492 9.51733 44.6334 9.52666 44.952 9.66933C45.2614 9.79733 45.6934 10.1 46.152 10.4973C47.0707 11.312 48.0894 12.556 48.9507 13.9747C50.1774 15.976 51.1547 18.308 51.7334 20.7893C50.684 21.888 49.7747 23.048 48.896 24.244C47.7307 25.8573 46.6947 27.5627 45.8374 29.36C45.2694 30.5707 44.756 31.8133 44.356 33.1C43.9654 31.8453 43.4667 30.632 42.916 29.448C41.5547 26.6333 39.8334 24.0267 37.7254 21.648C38.2427 18.952 39.0494 16.3707 40.1547 14.12ZM42.6107 41.8013C41.6614 41.336 40.8307 40.5667 40.172 39.676C39.116 38.264 38.44 36.5547 37.932 34.828C37.156 31.9413 36.964 28.9147 37.164 25.9493C38.528 27.3707 39.7867 28.9227 40.856 30.5813C41.848 32.1093 42.6133 33.776 43.124 35.4947C43.3667 36.316 43.5173 37.1707 43.5547 38.0133C43.5547 38.068 43.56 38.124 43.5614 38.18C43.5827 39.0307 43.4827 39.864 43.2147 40.6347C43.064 41.0587 42.864 41.4453 42.6107 41.8013ZM39.552 43.6507C37.872 43.8747 36.112 43.2333 34.5747 42.3253C31.472 40.444 28.924 37.684 26.4454 34.96C23.8694 32.1147 21.244 29.2987 18.9227 26.4653C17.776 25.068 16.6587 23.6293 15.968 22.3507C15.6067 21.7333 15.456 21.136 15.4534 20.9533C15.4494 20.8573 15.452 20.88 15.448 20.88C15.428 20.8947 15.4974 20.7947 15.5574 20.736C16.2427 19.984 17.6454 19.44 19.176 19.1787C20.7134 18.928 22.3893 18.8787 24.052 19.0827C26.752 19.4067 29.4587 20.2427 31.8814 21.6307C31.9147 22.4413 31.968 23.248 32.0507 24.0493C32.504 28.148 33.5307 32.1533 35.2894 35.8373C36.1627 37.6787 37.2614 39.4387 38.7174 40.936C39.4694 41.716 40.3867 42.436 41.4134 42.9347C40.8627 43.3027 40.224 43.5787 39.552 43.6507ZM72.8667 22.3467C72.1494 23.6293 71.0147 25.0627 69.852 26.46C67.5 29.2893 64.852 32.104 62.2654 34.96C59.78 37.6907 57.2267 40.4613 54.1107 42.34C52.568 43.248 50.8 43.8853 49.1174 43.6453C48.3934 43.5587 47.7094 43.2333 47.1347 42.8173C48.1414 42.272 49.0147 41.5053 49.7267 40.6947C51.0654 39.1787 52.052 37.4293 52.8787 35.6253C54.5574 32.0107 55.4667 28.0587 55.808 24.0493L55.8067 24.0267C55.8467 23.4213 55.8827 22.8107 55.9147 22.1973C58.5974 20.4453 61.7094 19.4333 64.808 19.072C66.4787 18.8773 68.1627 18.9347 69.7094 19.1867C71.2534 19.452 72.6494 19.992 73.3454 20.7547C73.372 20.7813 73.4174 20.8467 73.4187 20.8547C73.4187 20.86 73.4187 20.8773 73.4147 20.928C73.4094 21.1187 73.24 21.7267 72.8667 22.3467Z"
                                fill="white"
                              />
                            </svg>
                            Gifts
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/1.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/2.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/3.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/4.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/5.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/6.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/7.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/8.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/9.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/gifts/10.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-keyword="people">
                        <a>
                          <span className="elements-icon-shape-container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              style={{ isolation: "isolate" }}
                              viewBox="22.751 293.53 77.765 126.746"
                              width="77.765pt"
                              height="126.746pt"
                            >
                              <g>
                                <path
                                  d=" M 22.985 420.276 C 20.765 411.911 34.904 375.499 40.425 371.09 L 74.277 389.263 C 79.581 406.322 85.525 406.005 88.738 420.276 L 22.985 420.276 Z "
                                  fill="#000000"
                                />
                                <path
                                  d=" M 36.748 374.037 L 43.719 363.558 C 43.719 363.558 54.048 365.427 67.741 376.922 C 73.481 381.739 74.864 386.774 77.583 397.09 C 77.583 397.09 63.997 378.461 36.748 374.037 Z "
                                  fill="#000000"
                                />
                                <path
                                  d=" M 40.298 337.467 C 38.519 332.428 38.759 326.627 39.463 323.097 C 45.333 293.631 79.968 299.484 89.747 311.844 C 95.113 318.628 95.313 324.275 95.349 326.063 C 95.404 328.734 93.764 331.082 93.764 332.215 C 93.764 336.821 96.947 339.693 99.683 342.036 C 102.765 344.674 96.316 347.54 96.152 348.405 C 95.98 349.3 96.911 349.758 97.393 350.331 C 97.809 350.825 97.687 351.647 97.011 352.322 C 95.997 353.338 94.457 353.658 94.457 353.658 C 94.457 353.658 96.96 355.115 96.371 356.412 C 95.847 357.559 93.626 356.806 93.652 360.291 C 93.687 364.953 84.75 367.017 78.44 364.964 C 71.078 362.564 71.613 386.24 71.613 386.24 L 59.038 377.211 L 44.742 372.868 C 52.986 351.592 42.078 342.505 40.298 337.467 Z "
                                  fill="#000000"
                                />
                                <path
                                  d=" M 88.076 307.289 L 92.697 305.217 C 87.838 301.72 81.968 301.72 81.968 301.72 L 86.269 298.551 C 80.49 297.512 76.789 298.853 76.789 298.853 L 80.658 295.516 C 73.839 295.26 68.736 298.673 68.736 298.673 L 72.008 293.53 C 65.097 294.616 59.502 298.907 59.502 298.907 L 59.853 293.53 C 56.784 296.279 55.994 299.706 55.745 299.649 C 51.421 298.693 46.177 299.946 46.177 299.946 L 50.266 301.72 C 44.287 302.715 38.936 306.738 38.936 306.738 L 43.904 306.469 C 37.162 310.92 34.03 316.091 34.03 316.091 L 38.194 315.959 C 34.608 318.611 31.099 326.14 31.099 326.14 L 36.125 325.674 C 33.183 329.46 32.194 336.086 32.194 336.086 L 36.748 333.698 C 36.748 333.698 34.817 339.049 35.449 344.55 L 39.794 343.122 C 39.794 343.122 37.372 348.951 38.936 352.076 L 42.671 348.7 C 42.671 348.7 41.183 352.412 42.333 355.7 L 45.085 354.193 C 45.085 354.193 43.654 357.731 45.008 361.207 C 45.008 361.207 46.582 356.984 51.027 355.301 C 59.434 352.118 64.806 372.043 70.518 365.601 L 72.13 347.083 C 72.13 347.083 72.853 320.472 81.773 315.578 C 85.799 313.37 97.393 317.634 97.393 317.634 C 93.63 311.497 92.289 309.956 88.076 307.289 Z "
                                  fill="#000000"
                                />
                              </g>
                            </svg>
                            People
                          </span>
                          <span className="material-icons arrow">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div>
                          <div
                            className="hexa-grid hexa-elements-grid four-column paginated"
                            data-perpage={12}
                          >
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/17.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/18.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/13.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/14.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/15.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/16.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/17.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/18.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/19.svg"
                              />
                            </div>
                            <div
                              className="hexa-element dark hexa-mask-shape-select-option"
                              data-value="other"
                              data-loader="no"
                            >
                              <img
                                className="lazy"
                                data-src="files/elements/people/25.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hexa-control-wrap label-block"></div>
              <div
                id="hexa-framing-wrapper"
                className="hexa-accordion-framing-parent"
              >
                <div
                  className="hexa-accordion-mask"
                  id="hexa-framing"
                  style={{ cursor: "pointer" }}
                >
                  <label className="hexa-control-label"> Framing</label>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </div>
                <div
                  id="hexa-framing-toggle"
                  style={{ display: "none", margin: 8, marginBottom: 20 }}
                >
                  <div className="hexa-control-wrap label-block">
                    <div className="hexa-control">
                      <div className="hexa-btn-group icon-group">
                        <button
                          id="img-flip-horizontal"
                          type="button"
                          className="hexa-btn tooltip tooltip-top"
                          data-title="Flip X"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                        <button
                          id="img-flip-vertical"
                          type="button"
                          className="hexa-btn tooltip tooltip-top"
                          data-title="Flip Y"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                        <button
                          type="button"
                          className="hexa-horizontal-center hexa-btn tooltip tooltip-top"
                          data-title="H-Align Center"
                        >
                          <span className="material-icons">
                            align_horizontal_center
                          </span>
                        </button>
                        <button
                          type="button"
                          className="hexa-vertical-center hexa-btn tooltip tooltip-top"
                          data-title="V-Align Center"
                        >
                          <span className="material-icons">
                            vertical_align_center
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hexa-control-wrap label-block">
                    <label className="hexa-control-label slider-label">
                      Opacity<span>1</span>
                    </label>
                    <div className="hexa-control">
                      <input
                        id="img-opacity"
                        type="range"
                        min={0}
                        max={1}
                        defaultValue={1}
                        step="0.1"
                        className="hexa-slider"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="hexa-control-wrap label-block">
                    <label className="hexa-control-label slider-label">
                      Skew X<span>0</span>
                    </label>
                    <div className="hexa-control">
                      <input
                        id="img-skew-x"
                        type="range"
                        min={0}
                        max={180}
                        defaultValue={0}
                        step={1}
                        className="hexa-slider"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="hexa-control-wrap label-block">
                    <label className="hexa-control-label slider-label">
                      Skew Y<span>0</span>
                    </label>
                    <div className="hexa-control">
                      <input
                        id="img-skew-y"
                        type="range"
                        min={0}
                        max={180}
                        defaultValue={0}
                        step={1}
                        className="hexa-slider"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="hexa-control-wrap label-block">
                    <label className="hexa-control-label slider-label">
                      Rotate<span>0</span>
                    </label>
                    <div className="hexa-control">
                      <input
                        id="img-rotate"
                        type="range"
                        min={0}
                        max={360}
                        defaultValue={0}
                        step={1}
                        className="hexa-slider"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div id="hexa-shapes" className="hexa-icon-panel-content panel-hide">
        <div className="hexa-select-btn-set">
          <div className="hexa-select-container">
            <div className="flex-shape">
              <div
                className="hexa-option hexa-shape-square"
                data-value="square"
              />
              <div
                className="hexa-option hexa-shape-rectangle"
                data-value="rectangle"
              />
            </div>
            <div className="flex-shape">
              <div
                className="hexa-option hexa-shape-circle"
                data-value="circle"
              />
              <div
                className="hexa-option hexa-shape-triangle"
                data-value="triangle"
              />
            </div>
          </div>
        </div>
        <div id="hexa-shape-settings" className="hexa-sub-settings">
          <div className="hexa-control-wrap">
            <label className="hexa-control-label">Fill Style</label>
            <div className="hexa-control">
              <select
                id="hexa-shape-gradient"
                className="hexa-select"
                autoComplete="off"
              >
                <option value="none" selected="">
                  Solid Color
                </option>
                <option value="vertical">Vertical Gradient</option>
                <option value="horizontal">Horizontal Gradient</option>
              </select>
            </div>
          </div>
          <div id="shape-gradient-settings">
            <div className="hexa-control-wrap control-text-color">
              <label className="hexa-control-label">Color 1</label>
              <div className="hexa-control">
                <input
                  id="shape-gradient-color-1"
                  type="text"
                  className="hexa-colorpicker disallow-empty"
                  autoComplete="off"
                  defaultValue="#9C27B0"
                />
              </div>
            </div>
            <div className="hexa-control-wrap control-text-color">
              <label className="hexa-control-label">Color 2</label>
              <div className="hexa-control">
                <input
                  id="shape-gradient-color-2"
                  type="text"
                  className="hexa-colorpicker disallow-empty"
                  autoComplete="off"
                  defaultValue="#000000"
                />
              </div>
            </div>
            <div className="hexa-control-wrap control-text-color">
              <label className="hexa-control-label">Color 3</label>
              <div className="hexa-control">
                <input
                  id="shape-gradient-color-3"
                  type="text"
                  className="hexa-colorpicker allow-empty"
                  autoComplete="off"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="hexa-control-wrap control-text-color">
              <label className="hexa-control-label">Color 4</label>
              <div className="hexa-control">
                <input
                  id="shape-gradient-color-4"
                  type="text"
                  className="hexa-colorpicker allow-empty"
                  autoComplete="off"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <div id="shape-fill-color" className="hexa-control-wrap">
            <label className="hexa-control-label">Fill Color</label>
            <div className="hexa-control">
              <input
                id="hexa-shape-color"
                type="text"
                className="hexa-colorpicker allow-empty"
                autoComplete="off"
                defaultValue="#fff"
              />
            </div>
          </div>
          <div className="hexa-control-wrap">
            <label className="hexa-control-label">Outline Size</label>
            <div className="hexa-control">
              <input
                id="shape-outline-width"
                className="hexa-form-field"
                type="number"
                defaultValue={0}
                data-min={0}
                data-max={1000}
                step={1}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="hexa-control-wrap">
            <label className="hexa-control-label">Outline Color</label>
            <div className="hexa-control">
              <input
                id="shape-outline-color"
                type="text"
                className="hexa-colorpicker disallow-empty"
                autoComplete="off"
                defaultValue="#000000"
              />
            </div>
          </div>
          <div className="hexa-control-wrap conditional">
            <label className="hexa-control-label">Shadow</label>
            <div className="hexa-control hexa-toggle-control">
              <label className="hexa-toggle">
                <input
                  id="hexa-shape-shadow"
                  className="hexa-toggle-checkbox"
                  data-conditional="#shape-shadow-settings"
                  type="checkbox"
                  autoComplete="off"
                />
                <div className="hexa-toggle-switch" />
              </label>
            </div>
          </div>
          <div id="shape-shadow-settings" className="d-none conditional-settings">
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Shadow Color</label>
              <div className="hexa-control">
                <input
                  id="shape-shadow-color"
                  type="text"
                  className="hexa-colorpicker disallow-empty"
                  autoComplete="off"
                  defaultValue="#000"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Shadow Blur</label>
              <div className="hexa-control">
                <input
                  id="shape-shadow-blur"
                  className="hexa-form-field"
                  type="number"
                  defaultValue={5}
                  step={1}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Offset X</label>
              <div className="hexa-control">
                <input
                  id="shape-shadow-offset-x"
                  className="hexa-form-field"
                  type="number"
                  defaultValue={5}
                  step={1}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Offset Y</label>
              <div className="hexa-control">
                <input
                  id="shape-shadow-offset-y"
                  className="hexa-form-field"
                  type="number"
                  defaultValue={5}
                  step={1}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="hexa-control-wrap label-block">
            <div className="hexa-control">
              <div className="hexa-btn-group icon-group">
                <button
                  type="button"
                  className="hexa-horizontal-center hexa-btn tooltip tooltip-top"
                  data-title="Horizontal Align Center"
                >
                  <span className="material-icons">align_horizontal_center</span>
                </button>
                <button
                  type="button"
                  className="hexa-vertical-center hexa-btn tooltip tooltip-top"
                  data-title="Vertical Align Center"
                >
                  <span className="material-icons">vertical_align_center</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hexa-control-wrap label-block">
            <label className="hexa-control-label slider-label">
              Opacity<span>1</span>
            </label>
            <div className="hexa-control">
              <input
                id="shape-opacity"
                type="range"
                min={0}
                max={1}
                defaultValue={1}
                step="0.1"
                className="hexa-slider"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="hexa-control-wrap label-block">
            <label className="hexa-control-label slider-label">
              Skew X<span>0</span>
            </label>
            <div className="hexa-control">
              <input
                id="shape-skew-x"
                type="range"
                min={0}
                max={180}
                defaultValue={0}
                step={1}
                className="hexa-slider"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="hexa-control-wrap label-block">
            <label className="hexa-control-label slider-label">
              Skew Y<span>0</span>
            </label>
            <div className="hexa-control">
              <input
                id="shape-skew-y"
                type="range"
                min={0}
                max={180}
                defaultValue={0}
                step={1}
                className="hexa-slider"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="hexa-control-wrap label-block">
            <label className="hexa-control-label slider-label">
              Rotate<span>0</span>
            </label>
            <div className="hexa-control">
              <input
                id="shape-rotate"
                type="range"
                min={0}
                max={360}
                defaultValue={0}
                step={1}
                className="hexa-slider"
                autoComplete="off"
              />
            </div>
          </div>
          <div id="shape-custom-width-wrap">
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Custom Width</label>
              <div className="hexa-control">
                <input
                  id="shape-custom-width"
                  className="hexa-form-field"
                  type="number"
                  defaultValue=""
                  data-min={0}
                  data-max={10000}
                  step={1}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap">
              <label className="hexa-control-label">Custom Height</label>
              <div className="hexa-control">
                <input
                  id="shape-custom-height"
                  className="hexa-form-field"
                  type="number"
                  defaultValue=""
                  data-min={0}
                  data-max={10000}
                  step={1}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="hexa-control-wrap label-block">
              <label className="hexa-control-label">Aspect Ratio</label>
              <div className="hexa-control">
                <div className="hexa-aspect-ratio">
                  <input
                    id="hexa-shape-ratio-w"
                    className="hexa-form-field"
                    type="number"
                    defaultValue={12}
                    autoComplete="off"
                  />
                  <span className="material-icons">clear</span>
                  <input
                    id="hexa-shape-ratio-h"
                    className="hexa-form-field"
                    type="number"
                    defaultValue={16}
                    autoComplete="off"
                  />
                  <button
                    id="hexa-shape-ratio-lock"
                    type="button"
                    className="hexa-btn hexa-lock-unlock"
                  >
                    <span className="material-icons">lock_open</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="hexa-elements" className="hexa-icon-panel-content panel-hide">
        <div className="hexa-tabs">
          <ul className="hexa-tabs-menu">
            <li
              id="hexa-all-elements-open"
              className="active"
              data-target="#hexa-all-elements"
            >
              All
            </li>
            <li id="hexa-custom-element-open" data-target="#hexa-custom-element">
              Settings
            </li>
          </ul>
          <div id="hexa-all-elements" className="hexa-tab active">
            <ul
              id="hexa-elements-wrap"
              className="hexa-accordion hexa-elements-accor-shapes-container"
            >
              <li data-keyword="numbers">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg viewBox="0 0 512 512">
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                        .st0 {\n                          display: none;\n                        }\n\n                        .st1 {\n                          font-family: "Arial-Black";\n                        }\n\n                        .st2 {\n                          font-size: 556.3365px;\n                        }\n\n                        .st3 {\n                          display: inline;\n                        }\n                      '
                        }}
                      />
                      <text
                        transform="matrix(1 0 0 1 30.2354 447.9053)"
                        className="st0 st1 st2"
                      >
                        E
                      </text>
                      <g>
                        <path
                          d="M93.3,254.4c0-75.7,13.6-128.7,40.9-158.9c27.3-30.2,68.8-45.4,124.6-45.4c26.8,0,48.8,3.3,66,9.9
                    c17.2,6.6,31.2,15.2,42.1,25.8c10.9,10.6,19.4,21.7,25.7,33.4c6.2,11.7,11.3,25.3,15.1,40.9c7.4,29.7,11.1,60.7,11.1,92.9
                    c0,72.3-12.2,125.1-36.7,158.6c-24.4,33.5-66.6,50.3-126.3,50.3c-33.5,0-60.6-5.3-81.2-16c-20.6-10.7-37.6-26.3-50.8-47
                    c-9.6-14.7-17.1-34.7-22.4-60.2C96,313.3,93.3,285.2,93.3,254.4z M203,254.6c0,50.7,4.5,85.3,13.4,103.9c9,18.6,22,27.8,39,27.8
                    c11.2,0,21-3.9,29.2-11.8c8.2-7.9,14.3-20.3,18.2-37.4c3.9-17,5.8-43.6,5.8-79.6c0-52.9-4.5-88.4-13.4-106.6
                    c-9-18.2-22.4-27.3-40.3-27.3c-18.3,0-31.5,9.3-39.7,27.8C207.1,170.1,203,204.5,203,254.6z"
                        />
                      </g>
                      <g className="st0">
                        <path
                          className="st3"
                          d="M370.1,53.5v405H258.2V193.1c-18.1,13.8-35.6,24.9-52.6,33.4c-16.9,8.5-38.2,16.7-63.7,24.4v-90.7
                    c37.7-12.1,66.9-26.7,87.7-43.7c20.8-17,37.1-38,48.9-63H370.1z"
                        />
                      </g>
                      <g className="st0">
                        <path
                          className="st3"
                          d="M422,458.5H90c3.8-32.8,15.3-63.6,34.6-92.5c19.3-28.9,55.5-63,108.5-102.3c32.4-24.1,53.1-42.4,62.2-54.9
                    c9.1-12.5,13.6-24.4,13.6-35.6c0-12.1-4.5-22.5-13.4-31.1c-9-8.6-20.2-12.9-33.8-12.9c-14.1,0-25.7,4.4-34.6,13.3
                    c-9,8.9-15,24.5-18.1,47l-110.8-9c4.3-31.1,12.3-55.5,23.9-72.9c11.6-17.5,27.9-30.9,49-40.2c21.1-9.3,50.3-14,87.6-14
                    c38.9,0,69.2,4.4,90.9,13.3c21.6,8.9,38.7,22.5,51.1,40.9c12.4,18.4,18.6,39,18.6,61.8c0,24.3-7.1,47.4-21.3,69.5
                    c-14.2,22.1-40.1,46.4-77.6,72.8c-22.3,15.4-37.2,26.2-44.7,32.3c-7.5,6.2-16.3,14.2-26.5,24.2H422V458.5z"
                        />
                      </g>
                      <g className="st0">
                        <path
                          className="st3"
                          d="M202.1,172.1L97.5,153.3c8.7-33.3,25.4-58.9,50.1-76.6c24.7-17.7,59.7-26.6,105-26.6c52,0,89.6,9.7,112.7,29.1
                    c23.2,19.4,34.8,43.7,34.8,73.1c0,17.2-4.7,32.8-14.1,46.7c-9.4,13.9-23.6,26.2-42.6,36.7c15.4,3.8,27.2,8.2,35.3,13.3
                    c13.2,8.1,23.5,18.9,30.8,32.2c7.3,13.3,11,29.2,11,47.7c0,23.2-6.1,45.4-18.2,66.7c-12.1,21.3-29.6,37.7-52.4,49.2
                    c-22.8,11.5-52.8,17.2-89.9,17.2c-36.2,0-64.8-4.3-85.7-12.8c-20.9-8.5-38.1-21-51.6-37.4c-13.5-16.4-23.9-37-31.1-61.8l110.6-14.7
                    c4.3,22.3,11.1,37.7,20.2,46.3c9.1,8.6,20.8,12.9,34.9,12.9c14.8,0,27.2-5.4,37.1-16.3c9.9-10.9,14.8-25.4,14.8-43.5
                    c0-18.5-4.8-32.8-14.3-42.9c-9.5-10.1-22.4-15.2-38.7-15.2c-8.7,0-20.6,2.2-35.9,6.5l5.7-79c6.2,0.9,11,1.4,14.4,1.4
                    c14.5,0,26.6-4.6,36.3-13.9c9.7-9.2,14.5-20.2,14.5-32.9c0-12.1-3.6-21.8-10.9-29.1c-7.2-7.2-17.2-10.9-29.9-10.9
                    c-13,0-23.6,3.9-31.8,11.8S205,152.3,202.1,172.1z"
                        />
                      </g>
                      <g className="st0">
                        <path
                          className="st3"
                          d="M283.6,384.1H82v-91L283.6,53.5H380v244.8h50v85.8h-50v74.4h-96.4V384.1z M283.6,298.2V172.9L177.1,298.2
                    H283.6z"
                        />
                      </g>
                      <g className="st0">
                        <path
                          className="st3"
                          d="M139.9,53.5h262.7v88.3H224.6l-9.5,59.8c12.3-5.8,24.5-10.1,36.5-13c12-2.9,23.9-4.3,35.7-4.3
                    c39.8,0,72.2,12,97,36.1c24.8,24.1,37.2,54.4,37.2,91c0,25.7-6.4,50.4-19.2,74.2c-12.8,23.7-30.9,41.8-54.3,54.3
                    c-23.5,12.5-53.5,18.7-90.1,18.7c-26.3,0-48.8-2.5-67.5-7.5c-18.7-5-34.7-12.4-47.8-22.3c-13.1-9.9-23.8-21.1-31.9-33.5
                    s-14.9-28.1-20.4-46.7l111.9-12.2c2.7,17.9,9.1,31.6,19,40.9c10,9.3,21.8,14,35.6,14c15.4,0,28.1-5.8,38.2-17.5
                    c10.1-11.7,15.1-29.1,15.1-52.3c0-23.7-5.1-41.1-15.2-52.2c-10.1-11-23.6-16.6-40.5-16.6c-10.7,0-21,2.6-31,7.9
                    c-7.4,3.8-15.6,10.7-24.4,20.6l-94.3-13.6L139.9,53.5z"
                        />
                      </g>
                      <g className="st0">
                        <path
                          className="st3"
                          d="M411.7,146.5l-110,13.6c-2.9-15.4-7.7-26.3-14.5-32.6c-6.8-6.3-15.2-9.5-25.1-9.5c-17.9,0-31.9,9.1-41.8,27.2
                    c-7.2,13-12.6,40.9-16,83.7c13.2-13.4,26.8-23.3,40.7-29.7c13.9-6.4,30.1-9.6,48.4-9.6c35.5,0,65.5,12.7,90.1,38
                    c24.5,25.4,36.8,57.5,36.8,96.4c0,26.3-6.2,50.3-18.6,72c-12.4,21.7-29.6,38.2-51.6,49.3c-22,11.1-49.6,16.7-82.7,16.7
                    c-39.8,0-71.8-6.8-95.9-20.4c-24.1-13.6-43.3-35.3-57.7-65.1c-14.4-29.8-21.6-69.2-21.6-118.3c0-71.9,15.1-124.6,45.4-158
                    c30.2-33.4,72.2-50.1,125.8-50.1c31.7,0,56.7,3.7,75.1,11c18.4,7.3,33.6,18.1,45.8,32.2C396.1,107.4,405.3,125.2,411.7,146.5z
                    M207.9,323.9c0,21.6,5.4,38.4,16.3,50.7c10.9,12.2,24.2,18.3,39.9,18.3c14.5,0,26.6-5.5,36.4-16.6c9.8-11,14.7-27.5,14.7-49.4
                    c0-22.5-5.1-39.6-15.2-51.3c-10.1-11.8-22.7-17.7-37.8-17.7c-15.4,0-28.3,5.7-38.7,17.1C213.1,286.4,207.9,302.7,207.9,323.9z"
                        />
                      </g>
                      <g className="st0">
                        <path
                          className="st3"
                          d="M94.5,56.9h323v74.7c-28.1,25.4-51.5,52.8-70.4,82.3c-22.8,35.9-40.8,75.8-54.1,119.8
                    c-10.5,34.2-17.6,74.7-21.2,121.4H161.6c8.7-65,22.4-119.5,41-163.5c18.7-44,48.2-91.1,88.6-141.3H94.5V56.9z"
                        />
                      </g>
                      <g className="st0">
                        <path
                          className="st3"
                          d="M159.8,241.1c-17.4-9.2-30.1-19.6-38-31c-10.9-15.6-16.3-33.5-16.3-53.8c0-33.3,15.7-60.6,47-81.8
                    c24.4-16.3,56.8-24.4,97-24.4c53.2,0,92.6,10.1,118,30.4c25.4,20.3,38.2,45.8,38.2,76.6c0,17.9-5.1,34.7-15.2,50.3
                    c-7.6,11.6-19.6,22.8-35.9,33.7c21.5,10.3,37.6,24,48.2,41c10.6,17,15.9,35.9,15.9,56.5c0,19.9-4.6,38.5-13.7,55.8
                    c-9.1,17.3-20.4,30.7-33.7,40.1c-13.3,9.4-29.9,16.3-49.7,20.8c-19.8,4.4-41,6.7-63.4,6.7c-42.2,0-74.4-5-96.7-14.9
                    c-22.3-10-39.2-24.6-50.8-44c-11.6-19.4-17.4-41-17.4-64.9c0-23.4,5.4-43.1,16.3-59.4C120.4,262.5,137.2,249.9,159.8,241.1z
                    M203.6,334.2c0,17.6,5.3,31.9,16,43.1c10.7,11.1,22.9,16.7,36.7,16.7c13.2,0,25.1-5.7,35.6-17c10.5-11.3,15.8-25.7,15.8-43.1
                    c0-17.6-5.3-32-15.9-43.2c-10.6-11.2-22.9-16.8-36.8-16.8c-13.8,0-25.8,5.4-36,16.3C208.7,301.1,203.6,315.8,203.6,334.2z
                    M209.5,162.8c0,13.8,4.3,24.9,12.9,33.3c8.6,8.4,20.1,12.6,34.4,12.6c12.7,0,23.1-4.2,31.2-12.5c8.1-8.3,12.2-19.1,12.2-32.3
                    c0-13.8-4.3-24.9-12.8-33.5c-8.5-8.6-19.4-12.9-32.6-12.9c-13.4,0-24.3,4.2-32.7,12.6C213.8,138.5,209.5,149.4,209.5,162.8z"
                        />
                      </g>
                      <g className="st0">
                        <path
                          className="st3"
                          d="M100.3,365.7l110-13.9c2.9,15.4,7.8,26.3,14.7,32.6c6.9,6.3,15.3,9.5,25.3,9.5c17.7,0,31.6-9,41.6-26.9
                    c7.2-13.2,12.7-41.2,16.3-83.9c-13.2,13.6-26.8,23.5-40.7,29.9c-13.9,6.3-30.1,9.5-48.4,9.5c-35.7,0-65.8-12.7-90.3-38
                    c-24.5-25.4-36.8-57.4-36.8-96.2c0-26.4,6.2-50.5,18.7-72.3c12.5-21.7,29.7-38.2,51.6-49.3c21.9-11.1,49.4-16.7,82.6-16.7
                    c39.8,0,71.8,6.8,95.9,20.5c24.1,13.7,43.3,35.4,57.7,65.2c14.4,29.8,21.6,69.1,21.6,118c0,71.9-15.1,124.6-45.4,158
                    c-30.2,33.4-72.2,50.1-125.8,50.1c-31.7,0-56.7-3.7-75-11c-18.3-7.3-33.5-18.1-45.6-32.2C116.2,404.6,106.9,386.9,100.3,365.7z
                    M304.1,188.1c0-21.5-5.4-38.4-16.3-50.7c-10.9-12.2-24.1-18.3-39.7-18.3c-14.7,0-26.9,5.5-36.5,16.6c-9.7,11-14.5,27.6-14.5,49.7
                    c0,22.3,5,39.3,15.1,51.1c10.1,11.8,22.6,17.7,37.6,17.7c15.6,0,28.5-5.7,38.8-17.1C298.9,225.6,304.1,209.3,304.1,188.1z"
                        />
                      </g>
                    </svg>
                    Numbers
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/2.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/2.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/3.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/3.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/4.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/4.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/Numbers/0.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/Numbers/0.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="alphabets">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      version="1.1"
                      id="Layer_1_copy"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      {/* <style type="text/css">
                    .st0 {
                      display: none;
                    }
  
                    .st1 {
                      font-family: "Arial-Black";
                    }
  
                    .st2 {
                      font-size: 556.3365px;
                    }
                  </style> */}
                      <g>
                        <path
                          d="M315.8,382.2H176.1l-19.4,65.7H31.1L180.7,49.7H315l149.6,398.2H335.7L315.8,382.2z M290.3,296.1l-44-143.2l-43.5,143.2
                      H290.3z"
                        />
                      </g>
                      <text
                        transform="matrix(1 0 0 1 30.2354 447.9053)"
                        className="st0 st1 st2"
                      >
                        B
                      </text>
                      <text
                        transform="matrix(1 0 0 1 30.2354 447.9053)"
                        className="st0 st1 st2"
                      >
                        C
                      </text>
                      <text
                        transform="matrix(1 0 0 1 30.2354 447.9053)"
                        className="st0 st1 st2"
                      >
                        D
                      </text>
                    </svg>
                    Alphabets
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/a.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/a.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/b.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/b.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/c.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/c.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/d.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/d.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/e.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/e.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/f.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/f.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/g.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/g.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/h.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/h.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/i.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/i.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/j.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/j.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/k.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/k.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/l.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/l.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/m.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/m.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/n.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/n.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/o.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/o.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/q.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/q.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/r.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/r.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/s.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/s.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/t.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/t.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/u.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/u.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/v.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/v.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/w.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/w.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/x.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/x.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/y.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/y.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/alphabets/z.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/alphabets/z.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="abstract-shapes">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ isolation: "isolate" }}
                      viewBox="419.789 45.083 164.11 137.865"
                      width="164.11pt"
                      height="137.865pt"
                    >
                      <path
                        d=" M 419.822 107.519 C 419.928 104.604 420.291 101.647 420.934 98.655 C 432.947 42.8 510.456 34.285 552.962 56.297 C 561.183 60.555 568.877 66.102 574.56 73.41 C 590.095 93.385 582.275 117.316 579.111 140.139 C 578.121 147.277 577.077 154.586 573.689 160.947 C 568.468 170.749 558.206 177.071 547.5 180.021 C 536.793 182.97 525.528 182.967 514.423 182.944 C 503.727 182.922 492.828 182.869 482.648 179.584 C 452.608 169.892 418.58 141.68 419.822 107.519 Z "
                        fill="#FFFFFF"
                      />
                    </svg>
                    Abstract Shapes
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-abstract-shapes"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/1.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/2.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/2.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/3.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/3.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/4.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/4.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/5.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/7.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/8.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/9.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/10.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/10.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/abstract-shapes/11.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/abstract-shapes/11.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="geometric-shapes">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M 4.9960938,2.0039062 C 3.9802089,1.9505853 2.9614454,2.2897237 2.2109375,3.0410156 0.70954307,4.544026 0.86729496,7.0683685 2.4726562,8.6757812 l 0.5136719,0.5136719 4.6621094,4.6660159 c 0.1950388,0.193887 0.5100393,0.193887 0.7050781,0 L 13.013672,9.1894531 13.527344,8.6757812 C 15.132778,7.0683685 15.2885,4.544026 13.787109,3.0410156 12.285787,1.5381119 9.76725,1.697808 8.1621094,3.3046875 L 8,3.4667969 7.8378906,3.3046875 C 7.0354005,2.5012477 6.0125131,2.057867 4.9960938,2.0039062 Z"
                        color="#fff"
                        fontFamily="sans-serif"
                        fontWeight={400}
                        overflow="visible"
                        style={{
                          lineHeight: "normal",
                          textIndent: 0,
                          textAlign: "start",
                          textDecorationLine: "none",
                          textDecorationStyle: "solid",
                          textDecorationColor: "#fff",
                          textTransform: "none",
                          blockProgression: "tb",
                          isolation: "auto",
                          mixBlendMode: "normal"
                        }}
                      />
                    </svg>
                    Geometric Shapes
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-geometric-shapes"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/1.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/11.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/11.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/13.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/13.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/14.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/14.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/5.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/6.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/7.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/8.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/9.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/geometric-shapes/10.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/geometric-shapes/10.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="shape-badges">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ isolation: "isolate" }}
                      viewBox="635.423 319.15 189.923 253.893"
                      width="189.923pt"
                      height="253.893pt"
                    >
                      <path
                        d=" M 741.11 569.194 C 734.865 574.335 725.888 574.321 719.643 569.18 C 694.723 548.667 659.883 523.204 643.966 511.714 C 638.598 507.84 635.423 501.619 635.423 494.999 C 635.423 469.203 635.423 402.088 635.423 359.49 C 635.423 353.881 638.236 348.645 642.908 345.541 C 695.868 310.353 764.9 310.353 817.86 345.541 C 822.524 348.641 825.346 353.89 825.346 359.49 C 825.346 402.089 825.346 469.203 825.346 494.999 C 825.346 501.609 822.163 507.846 816.803 511.714 C 800.882 523.207 766.031 548.678 741.11 569.194 Z "
                        fill="rgb(255,255,255)"
                      />
                    </svg>
                    Shapes &amp; Badges
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-shape-badges"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/1.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/11.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/11.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/13.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/13.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/14.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/14.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/5.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/6.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/7.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/8.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/9.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/shape-badges/10.svg"
                      data-loader="no"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/shape-badges/10.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="animals">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ isolation: "isolate" }}
                      viewBox="251.01 297.912 30.347 34.754"
                      width="30.347pt"
                      height="34.754pt"
                    >
                      <path
                        d=" M 270.516 328.839 L 270.906 329.072 L 271.158 329.27 L 270.375 329.256 L 268.072 329.21 L 267.243 328.75 L 265.935 327.02 L 266.491 326.416 L 267.813 325.792 L 268.457 327.828 L 268.825 328.566 L 270.516 328.839 Z  M 276.628 305.24 L 278.469 305.591 L 280.005 305.406 L 280.988 305.344 L 281.357 305.591 L 281.294 304.67 L 280.926 303.072 L 279.821 301.66 L 278.224 300.493 L 277.006 300.187 L 276.995 300.124 L 276.319 299.203 L 276.025 299.069 L 273.739 298.035 L 272.019 297.912 L 269.993 298.71 L 268.087 302.028 L 267.78 303.625 L 267.659 305.529 L 266.123 307.433 L 265.629 308.601 L 265.384 309.154 L 261.269 312.778 L 259.857 315.051 L 259.549 315.604 L 255.679 318.429 C 255.78 318.682 257.615 318.272 258.273 318.118 C 258.417 318.083 258.504 318.06 258.504 318.06 L 255.373 320.703 L 253.958 322.545 L 253.345 323.467 L 251.01 325.617 L 251.809 327.029 L 252.916 327.828 L 256.232 325.801 L 259.365 325.002 L 261.023 325.249 L 262.006 325.739 L 262.614 326.537 L 262.614 326.536 L 262.989 327.029 L 264.402 327.828 L 264.613 327.727 L 266.368 329.441 L 266.551 330.086 L 267.197 331.099 L 269.786 332.28 L 269.792 332.374 L 270.315 332.528 L 270.667 332.666 L 270.229 332.239 L 270.791 332.16 L 273.14 331.652 L 273.201 331.625 L 273.524 331.714 L 273.954 331.775 L 274.031 331.836 L 273.877 331.529 L 273.611 331.438 L 273.861 331.324 L 273.861 331.324 L 274.154 331.191 L 273.693 330.269 L 273.221 329.65 L 273.221 329.65 L 273.181 329.597 L 273.263 329.594 L 273.617 329.655 L 273.431 329.424 L 273.024 329.391 L 272.956 329.302 L 271.201 329.271 L 271.006 328.881 L 274.784 328.996 L 275.729 329.232 L 275.927 329.417 L 276.434 329.649 L 276.388 329.325 L 276.14 329.079 L 276.243 328.903 L 276.243 328.903 L 276.933 327.706 L 276.958 327.469 L 277.287 327.436 L 277.631 327.529 L 277.541 327.275 L 276.984 327.198 L 276.995 327.09 L 274.599 326.722 L 272.081 326.784 L 269.993 326.846 L 269.148 325.205 L 271.037 324.45 L 276.074 321.194 L 279.207 318.06 L 279.927 316.62 L 280.005 316.463 L 280.435 313.761 C 280.435 313.761 280.251 311.857 280.251 311.672 C 280.251 311.489 279.083 309.215 279.083 309.215 L 277.916 308.109 L 277.118 307.679 L 276.454 305.627 L 276.468 305.621 L 276.628 305.24 Z "
                        fill="rgb(0,0,0)"
                      />
                    </svg>
                    Animals{" "}
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/11.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/11.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/13.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/13.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/14.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/14.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/animals/10.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/animals/10.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="gifts">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      width={89}
                      height={113}
                      viewBox="0 0 89 113"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M44.4427 56.752C44.4667 56.748 44.4574 56.7493 44.4667 56.7467C44.4374 56.748 44.4187 56.748 44.4107 56.7493C44.408 56.7507 44.4053 56.7507 44.4027 56.752C44.408 56.7533 44.4267 56.7547 44.4427 56.752Z M5.88669 97.5573L16.592 101.756V59.4187L5.88669 55.2213V97.5573Z M57.664 29.6733L57.6254 29.6587C57.6214 29.6707 57.62 29.684 57.6174 29.696L57.664 29.6733Z M21.1254 103.532L24.1494 104.719V62.3827L21.1254 61.1973V103.532Z M22.1573 39.4667C20.784 38.2173 19.388 37.0533 17.9093 35.8187C17.668 35.6173 17.4187 35.4053 17.1733 35.2013L16.7907 35.012L0.534668 41.0307V51.016L16.592 57.4147V49.5747L28.104 43.9973C26.136 42.756 24.1693 41.2613 22.1573 39.4667Z M69.1093 102.989L82.9627 97.5573V55.2213L69.1093 60.6547V102.989Z M72.0187 34.9907L71.5147 35.2387C71.3387 35.3853 71.1574 35.5373 70.9827 35.6827C69.44 36.9613 67.9813 38.1693 66.5733 39.4493C64.5613 41.244 62.6027 42.7347 60.656 43.968L69.1093 48.064V58.6773L88.3333 51.016V41.0307L72.0187 34.9907Z M52.5493 47.48L61.5534 51.8413V61.6907L64.5747 60.484V51.0853L55.516 46.6147C54.64 46.948 53.6413 47.264 52.5493 47.48Z M61.5533 105.952L64.5747 104.768V62.432L61.5533 63.6173V105.952Z M28.6827 64.1613V106.496L44.424 112.669L57.0173 107.731V65.3947L44.424 70.3347L28.6827 64.1613Z M33.2227 46.6267L21.1254 52.596V59.224L24.1494 60.4267V53.3533L36.24 47.4947C35.12 47.28 34.1013 46.96 33.2227 46.6267Z M28.6827 56.3733V62.2333L44.4347 68.512L57.0173 63.4973V54.864L44.3827 48.6267L28.6827 56.3733Z M78.788 18.684C78.4027 17.772 77.8974 17.0933 77.2294 16.484L76.96 16.2507L76.4934 15.8893C76.1387 15.6173 75.892 15.4933 75.5934 15.3067C75.02 14.992 74.4414 14.724 73.8694 14.524C72.7227 14.1107 71.5907 13.8747 70.4774 13.7387C68.2507 13.4653 66.0867 13.664 64 14.06C61.1253 14.6413 58.404 15.776 55.9707 17.332C55.9 15.44 55.704 13.5133 55.2774 11.5573C54.7547 9.40666 54 7.18133 52.4067 5.08666C51.6027 4.04666 50.608 3.02266 49.2454 2.20399C47.9107 1.37733 46.156 0.82666 44.3627 0.831993L44.0587 0.842659L43.9694 0.85066L43.7894 0.86266C43.732 0.863993 43.4267 0.89466 43.152 0.93466C42.5654 1.01066 42.1734 1.12399 41.7547 1.23866C40.9427 1.49599 40.164 1.83333 39.5014 2.24266C38.1387 3.05066 37.144 4.06666 36.3067 5.07599C34.6654 7.12799 33.7374 9.27999 33.0654 11.4107C32.524 13.2347 32.192 15.0547 32.0107 16.86C29.8227 15.564 27.416 14.608 24.8867 14.0813C22.8067 13.6707 20.6427 13.4653 18.4174 13.732C17.304 13.8653 16.1734 14.1013 15.0294 14.5133C14.4574 14.7133 13.88 14.9813 13.3094 15.292C13.008 15.4827 12.7733 15.596 12.42 15.8667L11.94 16.2347L11.6707 16.468C11.0307 17.0467 10.5107 17.7213 10.1227 18.612C9.74003 19.484 9.60535 20.4733 9.66401 21.3227C9.80001 23.0453 10.4573 24.2293 11.0493 25.2413C12.312 27.228 13.7614 28.6307 15.212 29.9933C18.144 32.6467 21.1454 34.9427 23.932 37.476C26.84 40.0707 30.064 42.4227 33.76 43.9827C35.6054 44.7133 37.64 45.3187 39.7587 44.968C40.808 44.784 41.8107 44.3653 42.656 43.6707C42.7374 43.6067 42.8147 43.528 42.8947 43.4573C43.3694 43.5627 43.8587 43.62 44.3627 43.6C44.84 43.588 45.296 43.5053 45.7347 43.3853C45.8254 43.4667 45.912 43.5573 46.004 43.6307C46.8507 44.3373 47.848 44.7667 48.9 44.9587C51.0254 45.3293 53.0694 44.7253 54.92 43.9947C58.6307 42.4373 61.864 40.0773 64.7787 37.476C67.5707 34.9387 70.5854 32.6493 73.5374 30.012C74.9974 28.6573 76.4587 27.268 77.7454 25.3027C78.3494 24.3 79.0214 23.1373 79.1947 21.4213C79.2734 20.576 79.1587 19.576 78.788 18.684ZM51.348 35.04C50.7933 36.8027 50.0067 38.5227 48.8307 39.9187C48.108 40.7907 47.1974 41.52 46.2027 41.924C45.8894 41.5213 45.6493 41.0787 45.4773 40.5827C45.224 39.816 45.1307 38.9893 45.1534 38.148C45.1547 38.1 45.1534 38.052 45.1534 38.0027C45.192 37.14 45.3533 36.2653 45.6093 35.424C46.132 33.704 46.9 32.0307 47.9053 30.504C49.16 28.5747 50.684 26.78 52.3307 25.1787C52.524 28.472 52.2653 31.8307 51.348 35.04ZM44.504 9.49466C44.4894 9.49466 44.4627 9.49599 44.44 9.49599L44.4854 9.49466H44.504ZM40.1547 14.12C40.864 12.6827 41.712 11.3653 42.584 10.5067C43.0067 10.08 43.44 9.76933 43.7507 9.63199C43.892 9.55066 44.004 9.53199 44.0987 9.50799C44.0987 9.50799 44.1013 9.50666 44.1067 9.50533C44.1147 9.50399 44.1227 9.50266 44.1307 9.49999C44.1694 9.49866 44.196 9.49466 44.1627 9.50266C44.1787 9.50266 44.1907 9.50266 44.216 9.50266L44.364 9.49866C44.492 9.51733 44.6334 9.52666 44.952 9.66933C45.2614 9.79733 45.6934 10.1 46.152 10.4973C47.0707 11.312 48.0894 12.556 48.9507 13.9747C50.1774 15.976 51.1547 18.308 51.7334 20.7893C50.684 21.888 49.7747 23.048 48.896 24.244C47.7307 25.8573 46.6947 27.5627 45.8374 29.36C45.2694 30.5707 44.756 31.8133 44.356 33.1C43.9654 31.8453 43.4667 30.632 42.916 29.448C41.5547 26.6333 39.8334 24.0267 37.7254 21.648C38.2427 18.952 39.0494 16.3707 40.1547 14.12ZM42.6107 41.8013C41.6614 41.336 40.8307 40.5667 40.172 39.676C39.116 38.264 38.44 36.5547 37.932 34.828C37.156 31.9413 36.964 28.9147 37.164 25.9493C38.528 27.3707 39.7867 28.9227 40.856 30.5813C41.848 32.1093 42.6133 33.776 43.124 35.4947C43.3667 36.316 43.5173 37.1707 43.5547 38.0133C43.5547 38.068 43.56 38.124 43.5614 38.18C43.5827 39.0307 43.4827 39.864 43.2147 40.6347C43.064 41.0587 42.864 41.4453 42.6107 41.8013ZM39.552 43.6507C37.872 43.8747 36.112 43.2333 34.5747 42.3253C31.472 40.444 28.924 37.684 26.4454 34.96C23.8694 32.1147 21.244 29.2987 18.9227 26.4653C17.776 25.068 16.6587 23.6293 15.968 22.3507C15.6067 21.7333 15.456 21.136 15.4534 20.9533C15.4494 20.8573 15.452 20.88 15.448 20.88C15.428 20.8947 15.4974 20.7947 15.5574 20.736C16.2427 19.984 17.6454 19.44 19.176 19.1787C20.7134 18.928 22.3893 18.8787 24.052 19.0827C26.752 19.4067 29.4587 20.2427 31.8814 21.6307C31.9147 22.4413 31.968 23.248 32.0507 24.0493C32.504 28.148 33.5307 32.1533 35.2894 35.8373C36.1627 37.6787 37.2614 39.4387 38.7174 40.936C39.4694 41.716 40.3867 42.436 41.4134 42.9347C40.8627 43.3027 40.224 43.5787 39.552 43.6507ZM72.8667 22.3467C72.1494 23.6293 71.0147 25.0627 69.852 26.46C67.5 29.2893 64.852 32.104 62.2654 34.96C59.78 37.6907 57.2267 40.4613 54.1107 42.34C52.568 43.248 50.8 43.8853 49.1174 43.6453C48.3934 43.5587 47.7094 43.2333 47.1347 42.8173C48.1414 42.272 49.0147 41.5053 49.7267 40.6947C51.0654 39.1787 52.052 37.4293 52.8787 35.6253C54.5574 32.0107 55.4667 28.0587 55.808 24.0493L55.8067 24.0267C55.8467 23.4213 55.8827 22.8107 55.9147 22.1973C58.5974 20.4453 61.7094 19.4333 64.808 19.072C66.4787 18.8773 68.1627 18.9347 69.7094 19.1867C71.2534 19.452 72.6494 19.992 73.3454 20.7547C73.372 20.7813 73.4174 20.8467 73.4187 20.8547C73.4187 20.86 73.4187 20.8773 73.4147 20.928C73.4094 21.1187 73.24 21.7267 72.8667 22.3467Z"
                        fill="white"
                      />
                    </svg>
                    Gifts
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/2.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/2.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/3.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/3.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/4.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/4.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/gifts/10.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/gifts/10.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="weapons">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      width="512px"
                      height="512px"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M477.564 231.561c-.62-.972-2.023-1.592-4.434-1.997-1.592-.287-4.641-.845-8.509-1.456-17.035-2.987-48.586-8.526-56.825-9.624a39.529 39.529 0 0 0-5.415-.342c-3.543 0-5.459.611-7.204 1.24-1.034.343-1.942.621-3.103.757-.685.144-1.476.144-2.357.144-3.66 0-7.969-.701-8.382-.765-.621-.136-10.38-2.42-13.626-3.247-1.035-.216-1.943-.359-2.708-.359-1.376 0-1.942.422-2.141.701l-.144.207-.072.207v.071c-2.636-.414-6.493-1.043-6.493-1.043l-2.51-.899c-.126-4.426-5.459-7.951-6.988-8.302.071-.207.152-.423.152-.62 0-1.602-4.083-7.682-9.345-7.682H234.101v-.216l-1.233-.899h-1.816v-.216h5.261v-3.598c0-.972-.054-1.169-1.034-1.169-1.448 0-2.482 2.347-2.482 2.347h-2.932c-.189-1.033-.954-1.727-1.862-1.727-.89 0-1.655.693-1.844 1.727h-.567c-2.635-2.212-6.916-.62-6.916-.62h-2.24l-.54-.558h-3.193c-1.799-2.626-3.391 0-3.391 0h-2.905v.899h-.81c-.369-.413-.765-.611-1.403-.611-2.905 0-3.391 1.52-3.391 3.598v.971a1.595 1.595 0 0 0-.621-.144c-.342 0-.612.072-.765.216v-.846c0-.827-.144-1.241-1.295-1.241h-.989c-.072-.071-.072-.135-.144-.207-.467-.485-1.232-.692-2.563-.692-1.646 0-11.63.207-22.126.414-10.334.144-20.983.351-22.656.351-1.178 0-2.06.342-2.699.972h-1.304c-1.035 0-3.247 0-3.247 2.698v-.485H106.04c-.27 0-.558.063-.756.063h-.225c-.198 0-.342.072-.468.072h-.297c-.117.071-.27.071-.342.144h-.27c-.144.063-.27.063-.342.144-.072 0-.153 0-.198.063a.894.894 0 0 0-.422.135c-.072 0-.144 0-.216.071a2.27 2.27 0 0 1-.468.199c-.153.144-.369.215-.494.287-.072.072-.072.072-.144.072-.072.126-.198.207-.351.27 0 0-.072.072-.144.072-.045.144-.197.206-.27.27-.072.072-.072.072-.126.145-.072.071-.216.144-.297.278-.045 0-.045.063-.117.063-.072.145-.225.217-.341.352v.063c-2.167 2.356-3.346 5.819-5.685 8.311-.566.558-1.178 1.115-1.871 1.529H91.782c-1.376.756-3.049 1.17-4.992 1.17h-.198v.144c-.072 0-.153.063-.225.144H58.209v-2.213l-7.546-14.688c.494-.342.908-1.385.908-2.563 0-1.521-.639-2.762-1.331-2.762H43.332c-.71 0-1.25 1.241-1.25 2.762 0 1.178.342 2.148.836 2.563h-.225v.207c.072.072 1.034 5.612.072 9.696h-.072c-.27 0-.684.071-.684.071l-.153.072v3.589c0 .207-1.151 2.978-2.977 2.978v.287H36.2c-1.25 0-2.212 1.655-2.212 3.732s.962 3.805 2.212 3.805h4.623s2.779.342 4.308 3.741c.198 0 2.482.756 5.189.145h48.713c.639.962 1.673 1.871 3.346 1.871h1.646s.225-1.602 1.332-1.602v-.27h39.862c.495 2.761 2.833 2.761 6.44 2.761 1.457 0 3.741.279 6.719.692 5.531.756 13.923 1.943 23.808 1.943 13.995 0 23.043 1.025 28.521 3.255 1.232.549 2.563.685 3.67.685.54 0 1.106-.072 1.718-.072.639 0 1.259-.063 1.943-.063.566 0 .989-.144 1.331-.484a1.68 1.68 0 0 0 .27-.424c1.25-.125 1.943-.611 2.357-1.313l.396.144h.153c.215 0 9.488.486 20.408 1.044l3.273 2.626c-.072 1.654-.836 8.859-5.343 18.618-4.623 10.18-14.454 25.268-34.816 39.246l-.125.072c-.423.484-.225.898.468 2.086.414.684 1.034 1.727 1.798 2.969 1.323 2.141 3.193 5.055 5.55 8.725 4.011 6.223 8.167 12.52 8.167 12.592l.423.557.54-.27c.144-.072 12.322-6.854 25.4-20.848 11.09-11.838 24.869-31.139 30.4-58.009.837-.063 2.141-.063 2.779.63h.27c0 2.77.27 5.54 1.799 6.224 0 0 .756 4.442 1.718 5.819h1.106v-2.284s-.881-1.179 0-2.078h.495v-1.457c.413-.27.684-.899 1.592.144h.692c.765 1.313 2.779 3.184 7.744 3.454 2.015.072 3.957.216 5.756.287 3.391.198 6.566.414 9.84.414h1.79c3.4-.071 5.118-1.385 6.152-2.626 1.034 1.025 2.356 3.112 4.227 7.682 4.507 11.201 8.393 18.883 9.543 24.836 1.106 5.973.567 7.971 9.84 7.07 9.273-.973 12.322-7.609 12.125-10.738-.226-3.113-6.521-16.186-8.464-21.799-1.916-5.603-2.411-8.238-1.034-11 1.105-2.077 2.141-5.747 1.87-7.474h.567l1.304-2.428c1.673.342 5.189 1.24 7.204 1.663.495.063.963.207 1.305.279.494 2.482 4.92 4.218 11.782 6.781 2.06.828 4.497 1.727 6.979 2.698 10.253 4.156 72.745 32.806 80.444 37.231 2.015 1.188 3.886 1.816 5.388 1.816 3.463 0 5.63-2.914 6.026-8.113.413-8.85 7.348-39.587 8.04-42.636.412-1.792.753-3.177-.003-4.364zM231.339 207.33h-8.877 8.877zm-9.984 4.371h-.342.342zm-75.371-1.6h5.261c3.175-.899 6.098-1.377 8.932-1.377 3.049 0 5.333.478 7.205.963 1.106.217 1.987.414 2.752.414h7.357c2.824-.899 5.532-1.313 7.942-1.313 2.698 0 4.641.559 6.018.899a8.3 8.3 0 0 0 1.529.414c-.684.144-.836.629-.962.972-.144.413-.27.898-2.356.898h-9.489c-.738 0-.819-.063-.891-.27-.225-.629-.612-1.043-1.943-1.043h-11.144c-1.322 0-1.664.414-1.861 1.043-.081.207-.153.27-.99.27h-9.048c-.765 0-.836-.063-.909-.27-.198-.629-.611-1.043-1.871-1.043h-6.44v2.914h-1.925V210.1h2.833zm-39.863.485v-1.034H135.263l.468.477-1.035 3.544h-28.458v-1.457h-.117v-1.53zm-61.898-2.896c0-1.602 1.322-2.915 2.896-2.915h5.612l2.923 5.811h-8.535c-1.574 0-2.896-1.314-2.896-2.896zm7.969 15.498c.836-1.035 1.646-2.078 1.646-2.078H86.37c.072 0 .153.071.225.071v.073h2.482c-.27.197-.495.476-.495.827 0 .62.495 1.034 1.062 1.034h8.508v.072h-45.96zm53.165-.073h.54c.611 0 1.034-.414 1.034-1.034 0-.414-.27-.756-.692-.972h34.754v2.078h-35.635v-.072zm208.836 27.073c-3.732.063-7.474-.135-11.432-.423-1.798-.063-3.714-.206-5.729-.27-4.92-.278-5.954-2.285-6.026-2.572v-9.543c.144-.063.27-.144.414-.278.152-.207.27-.342.351-.486.144-.207.342-.485 2.554-.485 2.356 0 7.816.278 10.865.414 1.26.071 2.141.144 2.563.216.765.557 1.521 1.583 1.521 3.256 0 3.31.494 5.117-5.388 7.681-.145-.144-.288.899 1.573.684 1.943-.27 4.039-2.141 4.776-3.247.765-1.178 2.581-5.189 2.627-5.747l2.023-.558s1.942-.756 2.554-1.997h.297v4.911s-.765 2.968 0 5.811c.117.62.342.899.611 1.106-.681.762-1.941 1.455-4.154 1.527z"
                        fill="#010101"
                        id="army_x2C__military_x2C__war_x2C__weapon__x2C_navy_x2C__aviation_x2C___ak47__x2C__gun__x2C_"
                      />
                    </svg>
                    Weapons
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/11.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/11.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/133.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/13.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/14.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/14.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/weapons/10.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/weapons/10.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="trees">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      width={103}
                      height={135}
                      viewBox="0 0 103 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M86.9693 119.119C86.9333 118.631 86.904 118.165 86.8867 117.716C86.9653 117.747 87.0467 117.76 87.128 117.781C87.068 118.219 87.0133 118.66 86.9693 119.119ZM85.7453 116.761C85.816 116.863 85.888 116.965 85.9667 117.052C85.932 117.289 85.8973 117.527 85.872 117.756C85.8253 117.4 85.784 117.071 85.7453 116.761ZM74.648 100.091C74.8187 100.091 75.0053 100.091 75.1933 100.091C74.5027 101.66 74.2947 103.184 74.1373 105.08C74.0747 105.587 74.4173 105.895 74.844 105.967C74.6947 106.479 74.5573 106.985 74.4173 107.552C74.3307 107.86 74.4173 108.188 74.62 108.407C74.5307 109.024 74.5813 109.68 74.9093 110.575C75.0573 110.973 75.448 111.245 75.8333 111.28C75.8933 112.116 75.984 112.933 76.12 113.808C76.2547 114.751 77.6213 114.697 78.028 114.027C78.1107 113.9 78.204 113.753 78.2947 113.624C78.2947 113.683 78.2947 113.733 78.2947 113.768C78.352 114.627 79.4947 115.265 80.1133 114.517C81.1307 113.316 81.6027 119.517 84.7707 112.533C84.684 113.644 84.8187 114.639 85.096 115.468C85.0907 115.487 85.0747 115.495 85.0733 115.516C84.9893 117.447 85.0733 119.392 85.016 121.301C84.8573 121.469 84.7507 121.696 84.7707 122.005C84.7707 122.773 84.8093 123.537 84.8573 124.287C84.616 126.447 84.0947 128.503 82.8933 130.447C82.6227 130.884 83.0813 131.284 83.4973 131.211C84.0053 131.139 84.3907 130.923 84.7507 130.608C84.7507 131.392 84.7507 132.176 84.7507 132.975C84.7707 133.868 85.5853 134.176 86.2293 133.904C86.388 133.959 86.548 133.973 86.7133 133.973C87.0787 134.044 87.48 133.973 87.716 133.611C87.9667 133.539 88.2 133.341 88.28 132.96C88.28 132.867 88.28 132.795 88.3053 132.707C88.3053 132.684 88.3053 132.684 88.3053 132.684C88.3933 132.975 88.4973 133.228 88.6507 133.468C88.8573 133.812 89.3147 133.796 89.5267 133.444C90.392 132.105 89.7147 129.649 89.5187 128.139C89.2413 126.229 88.9667 124.337 88.4413 122.503C88.3933 121.955 88.3427 121.408 88.2973 120.865C88.24 119.812 88.224 118.767 88.2413 117.719C89.2627 117.352 90.3147 116.124 91.0987 113.683C93.596 115.936 93.028 116.479 96.2973 117.792C97.0973 118.117 97.7187 117.153 97.5707 116.479C97.3547 115.5 97.1693 114.568 96.9173 113.683C97.7293 114.153 98.5187 114.627 99.2973 115.155C100.08 115.68 100.963 114.751 100.773 113.991C100.407 112.591 100.133 111.205 99.7227 109.88C99.7227 109.88 99.7547 109.897 99.8 109.916C100.609 110.315 101.475 109.644 101.265 108.771C101.008 107.627 100.755 106.573 100.407 105.553C101.048 105.641 101.737 104.935 101.497 104.28C101.016 102.912 100.581 101.549 100.08 100.241C100.336 100.333 100.537 100.44 100.781 100.531C101.507 100.805 102.193 99.9667 101.989 99.292C101.355 97.132 100.373 95.272 99.0787 93.5493C99.5747 93.4027 99.9 92.8213 99.748 92.328C99.2493 90.712 98.572 89.2387 97.7707 87.8027C98.4947 87.9507 99.264 87.4533 99.0107 86.5613C98.752 85.6347 98.5187 84.7093 98.2053 83.816C98.972 84.056 99.7227 83.4173 99.5347 82.584C99.0787 80.728 98.2893 79.0307 97.372 77.4307C97.9693 77.3787 98.4293 76.78 98.2893 76.1107C97.7707 73.5613 96.6613 71.3453 95.3333 69.1787C95.8947 68.996 96.32 68.4347 96.08 67.8893C95.5533 66.6707 95.128 65.4133 94.6253 64.192C94.6693 64.2133 94.7387 64.2467 94.7867 64.2467C95.5373 64.3747 96.4013 63.7213 96.096 62.8893C95.0267 59.956 93.5547 57.2693 91.8347 54.7187C92.136 54.3747 92.2293 53.8493 91.9973 53.4307C91.4613 52.4107 91.148 51.3573 90.8253 50.264C91.5707 50.432 92.3867 49.7893 92.0987 48.9547C91.4613 47.0827 90.8253 45.464 89.7147 44.0293C89.768 44.0293 89.7867 44.0293 89.8467 44.0293C90.4973 43.9373 90.9587 43.4093 90.7867 42.736C90.1347 40.192 89.2627 37.808 87.716 35.6587C87.6827 35.5893 87.6253 35.5533 87.5867 35.5307C86.948 33.772 85.656 26.136 84.5907 28.256C82.5933 32.2587 79.0853 39.4267 79.5613 42.7933C79.6587 43.3547 80.096 43.7547 80.548 43.8093C80.3333 44.68 80.104 45.592 79.8413 46.4973C79.752 46.8307 79.852 47.156 80.0507 47.3907C78.912 50.048 78.06 52.776 77.6213 55.7027C77.5053 56.4893 78.12 57.048 78.7627 56.9653C78.7733 57.1133 78.7787 57.2613 78.7947 57.4107C78.3747 58.864 78.0933 60.368 78.0933 61.9573C78.0933 62.1547 78.1693 62.34 78.2813 62.488C76.3787 65.4307 75.2853 68.7933 75.352 72.4173C75.352 72.9773 75.8853 73.4307 76.4173 73.4547C76.076 75.4133 75.912 77.472 76.64 79.016C76.7827 79.3053 76.9587 79.5613 77.1533 79.7293C75.8333 81.508 74.9587 83.5427 74.6427 85.8587C74.5307 86.6187 75.096 87.308 75.912 87.1093H75.968C75.148 89.2013 74.5027 91.3107 74.368 93.6213C74.312 94.132 74.7267 94.4733 75.1933 94.5653C74.5027 95.896 74 97.2747 73.6613 98.8227C73.4947 99.476 73.9693 100.091 74.648 100.091Z M37.3853 110.732C37.576 111.28 38.0627 111.716 38.6133 111.751C38.6667 112.933 38.8147 114.116 38.984 115.352C39.1733 116.716 40.9213 116.641 41.4853 115.66C41.5853 115.476 41.7253 115.277 41.8333 115.084C41.8333 115.155 41.8493 115.247 41.8493 115.316C41.932 116.519 43.4253 117.408 44.2427 116.351C45.584 114.607 46.1933 123.448 50.3613 113.517C50.18 115.943 50.664 118.005 51.5013 119.365C51.4787 120.272 51.4867 121.187 51.5053 122.103C51.3147 124.029 51.3053 125.988 51.22 127.921C50.9787 129.123 50.5613 130.251 49.852 131.305C49.688 131.54 49.7307 131.957 49.964 132.141C51.0133 133.027 51.724 132.539 52.2307 131.593C52.388 131.556 52.552 131.481 52.672 131.376C52.6893 131.957 52.7187 132.539 52.8693 133.045C52.8693 133.393 53.088 133.668 53.372 133.776C53.4147 133.812 53.4507 133.812 53.532 133.843C53.532 133.843 53.58 133.868 53.6187 133.868C53.6907 133.884 53.7987 133.904 53.88 133.904L53.9373 133.884C54.0307 133.868 54.14 133.843 54.232 133.812C54.2547 133.812 54.2653 133.812 54.2653 133.812C54.5653 133.668 54.7787 133.431 54.8067 133.065C54.9067 132.741 54.964 132.376 55.016 131.993C55.3067 132.011 55.6453 131.865 55.7307 131.507C56.5533 127.883 56.3933 123.901 56.252 119.976C57.1413 119.037 57.992 117.48 58.6827 115.155C61.984 118.388 61.2267 119.137 65.528 121.013C66.5853 121.447 67.38 120.12 67.2026 119.137C66.9293 117.756 66.672 116.444 66.352 115.155C67.4067 115.848 68.464 116.479 69.476 117.261C70.492 118.027 71.6773 116.732 71.4066 115.608C70.9466 113.624 70.576 111.645 69.9907 109.736C70.0413 109.771 70.092 109.804 70.1307 109.804C71.2 110.371 72.3507 109.427 72.056 108.148C71.7227 106.573 71.3987 105.041 70.9467 103.584C71.7907 103.711 72.6667 102.731 72.364 101.784C71.736 99.8427 71.1827 97.912 70.492 96.024C70.8213 96.148 71.1067 96.3093 71.456 96.4573C72.4013 96.8227 73.2747 95.6573 73.024 94.692C72.1933 91.64 70.8907 88.9653 69.1973 86.5267C69.828 86.3107 70.2813 85.4907 70.0706 84.76C69.4186 82.4893 68.5293 80.36 67.4907 78.3253C68.4213 78.5627 69.4613 77.836 69.1067 76.5973C68.7547 75.2707 68.4373 73.9613 68.0547 72.652C69.044 73.0347 70.0413 72.104 69.784 70.924C69.1827 68.2467 68.1533 65.8693 66.9373 63.5907C67.732 63.5213 68.312 62.632 68.1533 61.7053C67.4733 58.084 66.0133 54.9013 64.2773 51.848C64.9813 51.592 65.56 50.792 65.2347 50.0147C64.5467 48.2467 63.972 46.4627 63.3253 44.7387C63.392 44.7733 63.4667 44.7933 63.544 44.812C64.5267 44.9733 65.656 44.08 65.2653 42.88C63.8547 38.6933 61.9267 34.8747 59.6507 31.2587C60.036 30.7533 60.2 30.02 59.8693 29.388C59.1747 27.9693 58.7427 26.4547 58.3333 24.916C59.292 25.1333 60.3827 24.2293 60.016 23.044C59.1747 20.352 58.324 18.08 56.8493 16.0427C56.9147 16.0347 56.9893 16.0267 57.0347 16.0267C57.8907 15.8947 58.4973 15.1493 58.292 14.1907C58.128 13.5013 57.9347 12.8347 57.7427 12.1733C57.4173 11.5573 57.1613 10.9027 57.004 10.1027C56.9653 9.79732 56.8013 9.30666 56.5987 8.72399C55.984 7.10399 55.2173 5.57866 54.2547 4.13199C54.1947 4.02799 54.116 4.00399 54.0693 3.91999C53.9787 3.73066 53.9373 3.46532 53.852 3.17599C52.3413 1.03466 50.5533 -0.293344 48.9333 1.52666C48.84 1.63066 48.7453 1.74532 48.652 1.87332C46.5027 4.84532 45.276 8.16399 43.636 11.2947C43.4493 12.408 43.396 13.4173 43.5027 14.2693C43.6013 15.096 44.1867 15.6333 44.8333 15.6947C44.5053 16.9693 44.2027 18.2613 43.868 19.532C43.7427 20.0253 43.9013 20.476 44.164 20.8267C42.6493 24.5867 41.5387 28.496 40.9493 32.66C40.8067 33.7587 41.5933 34.592 42.4533 34.456C42.4693 34.676 42.4733 34.896 42.4973 35.1147C41.9413 37.1547 41.5853 39.2867 41.5853 41.552C41.5853 41.8453 41.6827 42.0787 41.8333 42.336C39.3053 46.4973 37.872 51.2667 37.948 56.468C37.964 57.2507 38.6667 57.8853 39.36 57.92C38.9067 60.704 38.724 63.632 39.6693 65.8133C39.864 66.2493 40.0787 66.5747 40.3133 66.8507C38.5907 69.3787 37.4493 72.2707 37.028 75.58C36.8987 76.672 37.6147 77.6187 38.6827 77.34L38.7507 77.3227C37.712 80.3253 36.8467 83.3307 36.6453 86.6C36.612 87.3427 37.1333 87.86 37.74 87.9827C36.8467 89.836 36.1947 91.8373 35.7213 94.004C35.5413 94.9467 36.144 95.8053 37.028 95.8053C37.2627 95.8053 37.5213 95.8053 37.752 95.8053C36.8467 98.0573 36.576 100.22 36.356 102.896C36.284 103.659 36.7347 104.08 37.2867 104.187C37.104 104.917 36.9147 105.661 36.7347 106.423C36.612 106.897 36.7347 107.369 37.0053 107.681C36.8987 108.553 36.9533 109.463 37.3853 110.732Z M34.9147 90.4347C34.1533 88.072 32.9933 85.9827 31.456 84.0893C32.028 83.9107 32.4267 83.2907 32.248 82.7267C31.6653 80.9427 30.844 79.288 29.9187 77.7107C30.7547 77.8707 31.6853 77.3227 31.3853 76.3627C31.084 75.3413 30.7547 74.3093 30.4093 73.3093C31.3173 73.58 32.2133 72.8707 31.992 71.9427C31.448 69.892 30.5187 68.0093 29.4267 66.2493C30.12 66.1773 30.6827 65.5053 30.5187 64.7773C29.8987 61.9573 28.584 59.504 27.0253 57.1027C27.6667 56.9027 28.188 56.2827 27.8947 55.6867C27.256 54.2853 26.7547 52.936 26.1707 51.592C26.2267 51.612 26.3 51.6307 26.364 51.6493C27.256 51.7733 28.268 51.0667 27.9173 50.1347C26.64 46.8787 24.9013 43.916 22.848 41.096C23.196 40.6973 23.3213 40.136 23.0653 39.6427C22.424 38.5333 22.044 37.376 21.644 36.1733C22.5307 36.3133 23.5107 35.624 23.1827 34.7147C22.424 32.624 21.644 30.8387 20.3147 29.2547C20.3787 29.2547 20.4373 29.2547 20.4973 29.24C21.2627 29.1693 21.8053 28.5853 21.6067 27.84C21.464 27.296 21.3 26.7693 21.1333 26.2387C20.8547 25.7867 20.588 25.2773 20.4693 24.6453C20.4107 24.408 20.2787 24.0307 20.1147 23.5613C19.524 22.324 18.8547 21.1067 17.988 20.0013C17.9333 19.9227 17.8707 19.896 17.808 19.8453C17.7547 19.68 17.696 19.488 17.6147 19.2613C16.4973 17.8787 15.1853 16.952 13.9413 17.4907L13.9427 17.4853C13.9133 17.4987 13.8813 17.524 13.8507 17.5373C13.728 17.5987 13.6053 17.6533 13.484 17.7453C13.3 17.8733 13.1187 18.0333 12.9507 18.2533C12.42 18.8613 11.9693 19.5053 11.5333 20.16C11.5253 20.1813 11.516 20.2027 11.5067 20.224C10.3667 21.976 9.48133 23.808 8.40666 25.568C8.23999 26.4387 8.19599 27.2227 8.30132 27.8787C8.39066 28.5107 8.91466 28.952 9.47866 29.0067C9.208 30.004 8.932 30.988 8.64133 31.9707C8.51333 32.3707 8.64133 32.7147 8.884 32.988C7.51733 35.9173 6.52399 38.9533 5.98932 42.192C5.85732 43.0373 6.58933 43.6813 7.35199 43.576C7.36399 43.7507 7.36933 43.9253 7.39066 44.1C6.89066 45.7027 6.568 47.3413 6.568 49.116C6.568 49.336 6.65466 49.5187 6.792 49.6987C4.51333 52.952 3.23199 56.668 3.29733 60.704C3.31466 61.304 3.95066 61.812 4.55466 61.828C4.16933 63.9933 3.98532 66.2907 4.83866 67.976C5.00532 68.308 5.224 68.5747 5.42 68.7933C3.86666 70.744 2.84133 72.9773 2.45866 75.58C2.328 76.4133 2.98933 77.1827 3.97866 76.944H4.03066C3.07866 79.2507 2.30533 81.5987 2.11466 84.148C2.09333 84.7093 2.56799 85.1093 3.10933 85.22C2.30533 86.6747 1.70133 88.2013 1.29466 89.9107C1.11999 90.62 1.67733 91.3107 2.45866 91.3107C2.696 91.3107 2.89733 91.3107 3.13066 91.3107C2.30533 93.0533 2.06533 94.732 1.85466 96.8227C1.80399 97.4 2.20533 97.7467 2.696 97.8413C2.52933 98.4 2.38399 98.968 2.20533 99.5667C2.09333 99.9307 2.21066 100.277 2.43733 100.531C2.328 101.224 2.39332 101.928 2.78666 102.931C2.95599 103.348 3.404 103.659 3.88533 103.711C3.95066 104.619 4.076 105.553 4.21866 106.495C4.39333 107.552 5.98933 107.513 6.476 106.753C6.568 106.587 6.69466 106.463 6.808 106.296C6.82266 106.369 6.82266 106.423 6.82266 106.479C6.86932 107.42 8.22266 108.113 8.96799 107.279C10.1667 105.917 10.732 112.827 14.4867 105.08C14.3267 106.923 14.7373 108.501 15.4587 109.56C14.9987 112.607 15.692 116.025 15.7627 118.987C15.8773 123.355 14.9707 127.34 14.664 131.593C14.588 132.484 15.7387 132.539 16.156 131.972C16.536 131.481 16.8253 130.907 17.06 130.308C17.1347 130.192 17.2053 130.105 17.2453 129.957C17.2813 129.868 17.2813 129.757 17.292 129.649C17.3773 129.409 17.444 129.173 17.4973 128.939C17.536 129.157 17.5707 129.392 17.6067 129.628C17.696 130.105 18.364 130.192 18.6827 129.883C18.7627 130.321 18.8547 130.792 18.9987 131.189C19.2467 131.939 20.3147 131.957 20.5547 131.156C20.8987 129.907 20.388 128.573 20.0373 127.319C19.5947 125.684 19.1533 124.048 19.2627 122.357C19.2773 122.196 19.188 122.103 19.0827 122.028C18.8987 118.324 18.464 114.58 18.5467 110.84C19.768 110.445 21.0293 109.083 21.9693 106.349C24.9427 108.88 24.26 109.463 28.136 110.899C29.0987 111.263 29.8253 110.207 29.6627 109.463C29.4093 108.388 29.1907 107.369 28.9027 106.369C29.8467 106.876 30.7973 107.385 31.7187 107.988C32.6133 108.588 33.6853 107.572 33.4613 106.717C33.0467 105.152 32.6973 103.621 32.1627 102.149C32.2133 102.165 32.2547 102.185 32.304 102.185C33.2547 102.641 34.2893 101.897 34.0267 100.913C33.7307 99.6773 33.4373 98.496 33.0267 97.3507C33.792 97.4587 34.596 96.6933 34.32 95.9653C33.7547 94.4387 33.228 92.9493 32.6307 91.4587C32.9173 91.584 33.172 91.6907 33.4867 91.804C34.336 92.1107 35.136 91.18 34.9147 90.4347Z"
                        fill="black"
                      />
                    </svg>
                    Trees
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/2.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/2.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/3.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/3.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/4.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/4.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/trees/10.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/trees/10.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="thunderbolts">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ isolation: "isolate" }}
                      viewBox="295.91 512.658 327.352 667.262"
                      width="327.352pt"
                      height="667.262pt"
                    >
                      <path
                        d=" M 436.542 512.658 L 436.542 514.986 L 441.657 512.658 L 474.715 512.658 C 501.096 512.658 541.155 513.438 594.861 514.986 C 595.48 518.405 597.175 520.115 599.976 520.115 C 557.441 623.799 526.873 700.63 508.244 750.607 L 615.348 750.607 C 620.624 750.607 623.262 754.027 623.262 760.851 C 473.005 997.71 383.44 1137.4 354.583 1179.92 L 352.254 1179.92 L 347.14 1172.46 C 391.532 974.423 413.728 872.921 413.728 867.939 L 301.039 867.939 L 295.91 865.61 C 341.849 644.595 367.464 530.358 372.74 522.9 C 378.945 517.624 384.84 514.986 390.441 514.986 L 418.842 514.986 L 436.542 512.658 Z "
                        fill="rgb(0,0,0)"
                      />
                    </svg>
                    Thunderbolts
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/2.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/2.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/3.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/3.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/4.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/4.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/10.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/10.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/11.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/11.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/thunderbolts/12.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/thunderbolts/12.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="vehicles">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      width={330}
                      height={132}
                      viewBox="0 0 330 132"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M57.664 87.9C65.832 87.9 72.476 94.5453 72.476 102.712C72.476 110.88 65.832 117.524 57.664 117.524C49.4973 117.524 42.8506 110.88 42.8506 102.712C42.8506 94.5453 49.4973 87.9 57.664 87.9Z M36.52 102.712C36.52 91.0533 46.0053 81.5693 57.6639 81.5693C69.3226 81.5693 78.8067 91.0533 78.8067 102.712C78.8067 114.371 69.3226 123.855 57.6639 123.855C46.0053 123.855 36.52 114.371 36.52 102.712ZM29.1813 102.712C29.1813 118.441 41.9333 131.193 57.6639 131.193C73.3933 131.193 86.1453 118.441 86.1453 102.712C86.1453 86.9826 73.3933 74.2307 57.6639 74.2307C41.9333 74.2307 29.1813 86.9826 29.1813 102.712Z M254.119 87.9C262.287 87.9 268.932 94.5453 268.932 102.712C268.932 110.88 262.287 117.524 254.119 117.524C245.952 117.524 239.307 110.88 239.307 102.712C239.307 94.5453 245.952 87.9 254.119 87.9Z M232.976 102.712C232.976 91.0533 242.461 81.5693 254.119 81.5693C265.777 81.5693 275.263 91.0533 275.263 102.712C275.263 114.371 265.777 123.855 254.119 123.855C242.461 123.855 232.976 114.371 232.976 102.712ZM225.637 102.712C225.637 118.441 238.388 131.193 254.119 131.193C269.849 131.193 282.601 118.441 282.601 102.712C282.601 86.9826 269.849 74.2307 254.119 74.2307C238.388 74.2307 225.637 86.9826 225.637 102.712Z M29.1813 40.1613C29.1813 40.1613 29.7866 24.7667 44.8479 17.0693C46.4826 16.2333 48.7573 15.5013 51.5413 14.8587V40.1613C38.1693 40.1613 29.1813 40.1613 29.1813 40.1613ZM60.2133 13.9387C71.536 11.3653 96.8333 10.6227 120.82 10.4987V40.1613H60.2133V13.9387ZM127.848 10.4773C140.957 10.4693 153.317 10.616 162.989 10.7093C197.461 11.044 210.513 36.48 210.513 36.48C210.513 43.8227 168.573 40.1826 127.848 40.1613V10.4773ZM298.868 51.356C298.868 51.356 316.272 57.564 318.948 68.944C318.948 68.944 307.904 74.6333 298.868 68.944C289.832 63.2533 298.868 51.356 298.868 51.356ZM0 87.9C0 102.84 5.02132 102.712 5.02132 102.712H23.0947C23.0947 102.712 24.0986 67.9387 57.6639 67.9387C91.2279 67.9387 92.0373 102.712 92.0373 102.712H220.888C220.888 102.712 218.212 69.948 254.119 69.948C290.027 69.948 287.824 102.712 287.824 102.712H325.643C325.643 102.712 329.324 102.745 329.324 90.028C329.324 77.3106 324.973 78.3147 324.973 78.3147C324.973 36.48 265.735 44.1773 230.94 34.1373C196.144 24.0973 220.555 0 126.175 0C31.7947 0 41.1653 4.68532 23.764 20.4147C6.35996 36.1453 8.03333 74.2307 8.03333 74.2307C5.69066 74.1627 0 72.96 0 87.9Z"
                        fill="black"
                      />
                    </svg>
                    Vehicles
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/vehicles/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/vehicles/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/vehicles/2.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/vehicles/2.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/vehicles/3.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/vehicles/3.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/vehicles/4.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/vehicles/4.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/vehicles/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/vehicles/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/vehicles/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/vehicles/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/vehicles/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/vehicles/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/vehicles/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/vehicles/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/vehicles/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/vehicles/9.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="clouds">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ isolation: "isolate" }}
                      viewBox="49.778 10.09 40.093 21.033"
                      width="40.093pt"
                      height="21.033pt"
                    >
                      <path
                        d=" M 86.253 21.943 C 86.548 21.471 86.718 20.915 86.718 20.317 C 86.718 18.621 85.343 17.245 83.647 17.245 C 82.85 17.245 82.124 17.549 81.578 18.046 C 80.814 16.802 79.441 15.972 77.874 15.972 C 77.003 15.972 76.192 16.229 75.512 16.671 C 75.107 12.97 71.972 10.09 68.165 10.09 C 65.51 10.09 63.182 11.491 61.879 13.592 C 61.296 13.301 60.638 13.138 59.943 13.138 C 57.543 13.138 55.598 15.084 55.598 17.483 C 55.598 18.213 55.779 18.901 56.097 19.505 C 55.932 19.492 55.766 19.484 55.598 19.484 C 52.384 19.484 49.778 22.09 49.778 25.304 C 49.778 28.518 52.384 31.124 55.598 31.124 C 58.813 31.124 82.655 31.124 85.222 31.124 C 87.79 31.124 89.871 29.043 89.871 26.476 C 89.871 24.263 88.324 22.412 86.253 21.943 Z "
                        fill="rgb(254,254,254)"
                      />
                    </svg>
                    Clouds
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/11.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/11.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/13.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/13.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/14.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/14.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/clouds/10.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/clouds/10.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="ink-brush-strok">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ isolation: "isolate" }}
                      viewBox="269.152 201.718 173.152 45.409"
                      width="173.152pt"
                      height="45.409pt"
                    >
                      <path
                        d=" M 409.288 221.471 C 411.739 222.925 414.273 222.397 416.717 222.515 C 414.326 222.01 411.93 221.539 409.288 221.471 Z  M 421.721 220.222 C 421.715 221.279 423.098 220.821 423.177 221.394 C 423.512 222.22 422.651 222.381 422.9 223.162 C 429.214 223.815 435.645 224.433 441.937 226.101 C 440.798 226.631 439.6 227.27 438.465 226.886 C 436.569 226.245 434.604 226.161 432.69 226.001 C 428.663 225.664 424.71 224.615 420.637 224.763 C 420.336 224.775 420.034 224.765 419.171 224.765 C 420.422 225.228 421.442 225.093 421.875 226.368 C 418.46 226.685 415.221 225.792 411.819 225.558 C 411.716 225.971 411.606 226.415 411.485 226.902 C 421.572 227.409 431.607 228.075 441.958 230.304 C 439.965 231.46 438.332 231.06 436.808 230.897 C 433.612 230.554 430.442 229.971 427.255 229.523 C 426.805 229.459 426.127 229.42 425.895 229.676 C 424.851 230.839 423.858 230.134 422.592 229.955 C 423.274 229.253 423.769 230.312 424.415 229.4 C 421.813 228.646 419.334 229.808 416.881 229.395 C 414.413 228.978 411.874 228.981 409.039 228.776 C 409.981 229.925 411.217 229.756 411.965 229.764 C 414.33 229.791 416.645 230.32 419.007 230.251 C 421.475 230.179 423.904 230.607 426.343 230.924 C 427.902 231.127 429.469 230.873 431.022 230.635 C 431.539 230.555 431.25 230.879 431.328 231.093 C 431.575 231.773 432.354 231.714 433.016 231.7 C 435.429 231.646 437.759 232.145 440.074 232.762 C 440.412 232.851 440.824 232.777 440.846 233.31 C 440.869 233.837 440.452 233.766 440.138 233.92 C 438.338 234.806 436.601 233.783 434.835 233.757 C 433.847 233.742 432.82 232.691 431.975 234.112 C 431.821 234.371 431.343 234.163 430.979 234.063 C 428.862 233.487 426.64 233.665 424.484 232.96 C 423.41 232.609 421.852 233.058 420.505 233.32 C 418.637 233.684 416.733 232.812 414.803 232.655 C 413.172 232.521 411.447 232.285 409.823 232.175 C 406.462 231.947 403.089 231.296 399.311 231.855 C 401.632 232.68 403.767 232.729 405.799 232.731 C 410.416 232.735 414.873 234.398 419.515 233.895 C 422.943 236.23 427.044 235.019 430.751 235.994 C 433.06 236.601 435.535 236.575 437.932 236.855 C 438.128 236.878 438.303 237.072 438.445 237.49 C 428.985 235.924 419.411 236.448 409.676 235.325 C 411.986 236.855 414.789 235.118 416.926 237.335 C 413.116 238.752 409.45 236.659 405.796 237.276 C 407.138 238.301 409.182 238.07 410.167 239.664 C 410.37 239.994 410.225 240.463 409.617 240.598 C 410.729 241.308 411.254 239.078 412.325 240.332 C 412.38 239.925 412.429 239.569 412.476 239.225 C 412.866 238.976 413.411 239.817 413.216 240.312 C 413.177 240.411 413.222 240.543 413.231 240.66 C 422.071 240.951 430.835 241.908 439.816 243.263 C 439.047 244.046 438.477 244.167 437.845 244.101 C 434.511 243.754 431.175 243.416 427.841 243.061 C 426.349 242.902 424.827 242.783 423.357 242.734 C 419.8 242.616 416.279 242.227 412.74 241.981 C 408.512 241.687 404.248 241.903 400 241.919 C 399.38 241.922 398.629 241.659 398.199 242.651 C 405.246 242.869 412.23 243.077 419.192 243.484 C 426.213 243.894 433.306 244.4 440.118 246.547 C 438.047 247.28 435.934 247.215 433.946 246.914 C 431.464 246.539 428.955 246.108 426.488 246.01 C 421.06 245.794 415.648 245.322 410.218 245.116 C 401.839 244.798 393.464 244.908 385.089 244.838 C 379.972 244.796 374.85 244.681 369.74 244.864 C 361.303 245.165 352.861 244.997 344.431 245.264 C 338.218 245.461 332.004 245.339 325.802 245.605 C 320.498 245.832 315.186 246.018 309.894 246.365 C 303.686 246.772 297.49 246.482 291.293 246.661 C 289.484 246.714 287.678 246.808 285.763 246.513 C 286.211 245.635 286.892 245.537 287.612 245.564 C 291.561 245.707 295.467 245.296 299.392 244.928 C 301.202 244.758 303.117 244.6 305.03 245.075 C 306.182 245.36 307.54 244.855 308.815 244.754 C 312.29 244.479 315.764 244.268 319.243 244.062 C 324.849 243.728 330.461 243.192 336.065 243.448 C 339.689 243.612 343.281 242.98 346.885 243.376 C 347.986 243.497 348.956 242.992 349.991 242.641 C 347.22 242.641 344.449 242.641 341.678 242.641 C 337.169 242.641 332.658 242.555 328.151 242.668 C 324.361 242.763 320.569 242.887 316.78 243.233 C 315.555 243.345 314.226 243.277 312.931 243.335 C 308.167 243.545 303.394 243.748 298.629 243.681 C 296.094 243.645 293.594 243.605 291.104 244.093 C 290.032 244.303 289.166 243.137 288.037 243.652 C 288.13 243.968 288.226 244.291 288.359 244.744 C 287.485 244.744 286.463 245.062 286.006 244.689 C 284.009 243.055 281.556 243.58 279.344 243.041 C 278.534 242.844 277.553 242.991 277.322 241.968 C 277.103 240.992 278.214 240.9 278.602 240.035 C 276.609 239.017 276.39 236.364 274.6 234.761 C 273.887 234.87 274.164 236.798 272.635 235.713 C 272.807 237.497 274.738 238.559 273.949 240.382 C 272.875 240.633 272.383 239.779 271.998 239.114 C 270.336 236.248 269.101 233.021 269.154 229.839 C 269.237 224.857 269.196 219.766 270.819 214.917 C 270.932 214.58 271 214.208 271.195 213.926 C 271.633 213.29 271.749 212.197 272.869 212.393 C 273.899 212.574 274.062 213.492 274.101 214.331 C 274.147 215.329 274.829 215.653 275.652 216.153 C 276.057 215.157 275.888 214.001 276.863 213.416 C 276.943 213.368 277.025 213.147 276.992 213.112 C 275.508 211.524 277.579 211.509 278.063 210.71 C 276.61 209.357 276.172 207.593 276.289 205.579 C 275.526 205.389 274.82 205.279 274.151 205.609 C 273.313 206.02 273.146 205.234 272.725 204.894 C 273.03 204.531 273.068 204.055 273.779 203.931 C 277.366 203.307 280.924 202.658 284.589 202.467 C 294.024 201.975 303.461 201.827 312.905 201.725 C 318.555 201.664 324.157 202.019 329.765 202.511 C 331.472 202.661 333.107 201.845 334.797 202.16 C 338.53 202.855 342.292 202.397 346.038 202.5 C 349.458 202.594 352.855 202.06 356.309 202.461 C 362.074 203.132 367.898 202.68 373.684 202.933 C 378.136 203.128 382.605 203.26 387.038 203.666 C 392.655 204.181 398.274 204.643 403.895 205.106 C 409.151 205.539 414.476 205.482 419.643 206.589 C 422.995 207.307 426.423 207.429 429.765 208.334 C 431.687 208.854 433.639 209.502 435.629 209.748 C 436.618 209.87 436.044 210.484 436.328 210.866 C 434.449 210.25 432.505 210.315 430.648 209.822 C 428.607 209.28 426.588 209.116 424.565 210.139 C 423.177 210.842 421.594 210.319 420.196 210.093 C 415.364 209.313 410.498 208.898 405.647 208.321 C 399.92 207.639 394.165 207.332 388.431 206.803 C 383.714 206.367 378.995 206.449 374.299 206.088 C 368.901 205.674 363.506 206.105 358.134 205.731 C 355.224 205.529 352.324 205.523 349.42 205.436 C 347.417 205.377 345.434 206.366 343.368 205.637 C 343.65 205.805 343.931 206.123 344.213 206.122 C 349.212 206.115 354.084 207.477 359.12 207.33 C 362.215 207.24 365.359 207.471 368.462 207.947 C 369.966 208.178 371.453 207.666 373.063 207.88 C 376.662 208.357 380.348 208.209 383.975 208.438 C 389.826 208.808 395.698 208.761 401.517 209.21 C 407.843 209.7 414.15 210.732 420.384 212.206 C 423.305 212.897 426.413 213.298 429.481 213.465 C 429.745 213.48 430.005 213.57 430.229 213.795 C 428.008 213.847 425.821 213.803 423.676 213.402 C 423.4 214.23 424.329 214.038 424.44 214.803 C 419.797 216.002 415.14 213.764 410.567 214.707 C 411.562 215.712 412.967 215.408 414.105 215.427 C 417.519 215.485 420.795 216.349 424.122 216.85 C 425.461 217.052 426.886 216.825 428.168 217.462 C 428.917 217.834 430.328 216.654 430.478 218.447 C 432.357 217.934 433.883 219.545 435.733 219.304 C 437.62 219.057 439.4 219.754 441.219 220.074 C 441.619 220.144 442.217 220.259 442.295 220.856 C 442.385 221.565 441.818 221.738 441.314 221.963 C 439.681 222.692 438.155 221.658 436.56 221.655 C 436.125 221.655 435.625 221.473 435.147 221.488 C 430.614 221.636 426.195 220.576 421.705 220.24 C 418.845 219.907 415.991 219.571 413.135 219.236 C 413.121 219.393 413.106 219.55 413.091 219.707 C 415.954 220.028 418.781 220.725 421.721 220.222 Z "
                        fill="rgb(254,254,254)"
                      />
                    </svg>
                    Ink brush-strokes
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/11.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/11.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/13.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/13.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/14.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/14.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/ink-brush-strokes/10.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/ink-brush-strokes/10.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="people">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ isolation: "isolate" }}
                      viewBox="22.751 293.53 77.765 126.746"
                      width="77.765pt"
                      height="126.746pt"
                    >
                      <g>
                        <path
                          d=" M 22.985 420.276 C 20.765 411.911 34.904 375.499 40.425 371.09 L 74.277 389.263 C 79.581 406.322 85.525 406.005 88.738 420.276 L 22.985 420.276 Z "
                          fill="#000000"
                        />
                        <path
                          d=" M 36.748 374.037 L 43.719 363.558 C 43.719 363.558 54.048 365.427 67.741 376.922 C 73.481 381.739 74.864 386.774 77.583 397.09 C 77.583 397.09 63.997 378.461 36.748 374.037 Z "
                          fill="#000000"
                        />
                        <path
                          d=" M 40.298 337.467 C 38.519 332.428 38.759 326.627 39.463 323.097 C 45.333 293.631 79.968 299.484 89.747 311.844 C 95.113 318.628 95.313 324.275 95.349 326.063 C 95.404 328.734 93.764 331.082 93.764 332.215 C 93.764 336.821 96.947 339.693 99.683 342.036 C 102.765 344.674 96.316 347.54 96.152 348.405 C 95.98 349.3 96.911 349.758 97.393 350.331 C 97.809 350.825 97.687 351.647 97.011 352.322 C 95.997 353.338 94.457 353.658 94.457 353.658 C 94.457 353.658 96.96 355.115 96.371 356.412 C 95.847 357.559 93.626 356.806 93.652 360.291 C 93.687 364.953 84.75 367.017 78.44 364.964 C 71.078 362.564 71.613 386.24 71.613 386.24 L 59.038 377.211 L 44.742 372.868 C 52.986 351.592 42.078 342.505 40.298 337.467 Z "
                          fill="#000000"
                        />
                        <path
                          d=" M 88.076 307.289 L 92.697 305.217 C 87.838 301.72 81.968 301.72 81.968 301.72 L 86.269 298.551 C 80.49 297.512 76.789 298.853 76.789 298.853 L 80.658 295.516 C 73.839 295.26 68.736 298.673 68.736 298.673 L 72.008 293.53 C 65.097 294.616 59.502 298.907 59.502 298.907 L 59.853 293.53 C 56.784 296.279 55.994 299.706 55.745 299.649 C 51.421 298.693 46.177 299.946 46.177 299.946 L 50.266 301.72 C 44.287 302.715 38.936 306.738 38.936 306.738 L 43.904 306.469 C 37.162 310.92 34.03 316.091 34.03 316.091 L 38.194 315.959 C 34.608 318.611 31.099 326.14 31.099 326.14 L 36.125 325.674 C 33.183 329.46 32.194 336.086 32.194 336.086 L 36.748 333.698 C 36.748 333.698 34.817 339.049 35.449 344.55 L 39.794 343.122 C 39.794 343.122 37.372 348.951 38.936 352.076 L 42.671 348.7 C 42.671 348.7 41.183 352.412 42.333 355.7 L 45.085 354.193 C 45.085 354.193 43.654 357.731 45.008 361.207 C 45.008 361.207 46.582 356.984 51.027 355.301 C 59.434 352.118 64.806 372.043 70.518 365.601 L 72.13 347.083 C 72.13 347.083 72.853 320.472 81.773 315.578 C 85.799 313.37 97.393 317.634 97.393 317.634 C 93.63 311.497 92.289 309.956 88.076 307.289 Z "
                          fill="#000000"
                        />
                      </g>
                    </svg>
                    People
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/17.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/17.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/18.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/18.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/13.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/13.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/14.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/14.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/15.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/15.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/16.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/16.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/17.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/17.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/18.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/18.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/19.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/19.svg"
                      />
                    </div>
                    <div
                      className="hexa-element light"
                      data-elsource="files/elements/people/25.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/people/25.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li data-keyword="speech-bubbles">
                <a>
                  <span className="elements-icon-shape-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ isolation: "isolate" }}
                      viewBox="43.895 234.936 300.776 122.107"
                      width="300.776pt"
                      height="122.107pt"
                    >
                      <g>
                        <path
                          d=" M 318.759 234.936 L 54.968 234.936 C 48.853 234.936 43.895 239.893 43.895 246.008 L 43.895 303.957 C 43.895 310.072 48.853 315.029 54.968 315.029 L 281.829 315.029 C 282.214 322.223 288.152 327.941 295.441 327.941 C 302.731 327.941 308.669 322.223 309.055 315.029 L 318.759 315.029 C 324.874 315.029 329.832 310.072 329.832 303.957 L 329.832 246.008 C 329.832 239.893 324.874 234.936 318.759 234.936 Z "
                          fill="#FFFFFF"
                        />
                        <path
                          d=" M 318.895 329.562 C 314.118 329.562 310.246 333.434 310.246 338.21 C 310.246 342.987 314.118 346.859 318.895 346.859 C 323.671 346.859 327.543 342.987 327.543 338.21 C 327.543 333.434 323.671 329.562 318.895 329.562 Z "
                          fill="#FFFFFF"
                        />
                        <path
                          d=" M 339.579 346.859 C 336.767 346.859 334.487 349.139 334.487 351.951 C 334.487 354.763 336.767 357.043 339.579 357.043 C 342.392 357.043 344.671 354.763 344.671 351.951 C 344.671 349.139 342.392 346.859 339.579 346.859 Z "
                          fill="#FFFFFF"
                        />
                      </g>
                    </svg>
                    Speech Bubbles
                  </span>
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div
                    id="hexa-elements-grid-animals"
                    className="hexa-grid hexa-elements-grid four-column paginated"
                    data-perpage={12}
                  >
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/1.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/1.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/11.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/11.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/13.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/13.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/14.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/14.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/5.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/5.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/6.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/6.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/7.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/7.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/8.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/8.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/9.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/9.svg"
                      />
                    </div>
                    <div
                      className="hexa-element dark"
                      data-elsource="files/elements/speech-bubbles/10.svg"
                      data-loader="yes"
                    >
                      <img
                        className="lazy"
                        data-src="files/elements/speech-bubbles/10.svg"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div id="hexa-my-favorites" className="hexa-tab">
            <div className="hexa-grid hexa-elements-grid five-column">
              <div className="notice notice-info">
                <h6>No favorites yet</h6>
                Click the star icon on any element, and you will see it here next
                time you visit.
              </div>
            </div>
          </div>
          <div id="hexa-custom-element" className="hexa-tab">
            <div
              id="hexa-custom-element-options-info"
              className="notice notice-info"
            >
              <h6>No element is selected</h6>
              Select an element to adjust the settings.
            </div>
            <div id="hexa-custom-element-options">
              <div className="hexa-control-wrap">
                <label className="hexa-control-label">Fill Style</label>
                <div className="hexa-control">
                  <select
                    id="hexa-element-gradient"
                    className="hexa-select"
                    autoComplete="off"
                  >
                    <option value="none" selected="">
                      Solid Color
                    </option>
                    <option value="vertical">Vertical Gradient</option>
                    <option value="horizontal">Horizontal Gradient</option>
                  </select>
                </div>
              </div>
              <div id="element-gradient-settings">
                <div className="hexa-control-wrap control-text-color">
                  <label className="hexa-control-label">Color 1</label>
                  <div className="hexa-control">
                    <input
                      id="element-gradient-color-1"
                      type="text"
                      className="hexa-colorpicker disallow-empty"
                      autoComplete="off"
                      defaultValue="#9C27B0"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap control-text-color">
                  <label className="hexa-control-label">Color 2</label>
                  <div className="hexa-control">
                    <input
                      id="element-gradient-color-2"
                      type="text"
                      className="hexa-colorpicker disallow-empty"
                      autoComplete="off"
                      defaultValue="#000000"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap control-text-color">
                  <label className="hexa-control-label">Color 3</label>
                  <div className="hexa-control">
                    <input
                      id="element-gradient-color-3"
                      type="text"
                      className="hexa-colorpicker allow-empty"
                      autoComplete="off"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap control-text-color">
                  <label className="hexa-control-label">Color 4</label>
                  <div className="hexa-control">
                    <input
                      id="element-gradient-color-4"
                      type="text"
                      className="hexa-colorpicker allow-empty"
                      autoComplete="off"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <div id="element-fill-color" className="hexa-control-wrap">
                <label className="hexa-control-label">Fill Color</label>
                <div className="hexa-control">
                  <input
                    id="hexa-element-color"
                    type="text"
                    className="hexa-colorpicker disallow-empty"
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="hexa-control-wrap conditional">
                <label className="hexa-control-label">Shadow</label>
                <div className="hexa-control hexa-toggle-control">
                  <label className="hexa-toggle">
                    <input
                      id="hexa-element-shadow"
                      className="hexa-toggle-checkbox"
                      data-conditional="#element-shadow-settings"
                      type="checkbox"
                      autoComplete="off"
                    />
                    <div className="hexa-toggle-switch" />
                  </label>
                </div>
              </div>
              <div
                id="element-shadow-settings"
                className="d-none conditional-settings"
              >
                <div className="hexa-control-wrap">
                  <label className="hexa-control-label">Shadow Color</label>
                  <div className="hexa-control">
                    <input
                      id="element-shadow-color"
                      type="text"
                      className="hexa-colorpicker disallow-empty"
                      autoComplete="off"
                      defaultValue="#000"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap">
                  <label className="hexa-control-label">Shadow Blur</label>
                  <div className="hexa-control">
                    <input
                      id="element-shadow-blur"
                      className="hexa-form-field"
                      type="number"
                      defaultValue={5}
                      step={1}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap">
                  <label className="hexa-control-label">Offset X</label>
                  <div className="hexa-control">
                    <input
                      id="element-shadow-offset-x"
                      className="hexa-form-field"
                      type="number"
                      defaultValue={5}
                      step={1}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="hexa-control-wrap">
                  <label className="hexa-control-label">Offset Y</label>
                  <div className="hexa-control">
                    <input
                      id="element-shadow-offset-y"
                      className="hexa-form-field"
                      type="number"
                      defaultValue={5}
                      step={1}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="hexa-control-wrap label-block">
                <div className="hexa-control">
                  <div className="hexa-btn-group icon-group">
                    <button
                      id="element-flip-horizontal"
                      type="button"
                      className="hexa-btn tooltip tooltip-top"
                      data-title="Flip X"
                    >
                      <span className="material-icons">flip</span>
                    </button>
                    <button
                      id="element-flip-vertical"
                      type="button"
                      className="hexa-btn tooltip tooltip-top"
                      data-title="Flip Y"
                    >
                      <span className="material-icons">flip</span>
                    </button>
                    <button
                      type="button"
                      className="hexa-horizontal-center hexa-btn tooltip tooltip-top"
                      data-title="H-Align Center"
                    >
                      <span className="material-icons">
                        align_horizontal_center
                      </span>
                    </button>
                    <button
                      type="button"
                      className="hexa-vertical-center hexa-btn tooltip tooltip-top"
                      data-title="V-Align Center"
                    >
                      <span className="material-icons">
                        vertical_align_center
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hexa-control-wrap label-block">
                <label className="hexa-control-label slider-label">
                  Opacity<span>1</span>
                </label>
                <div className="hexa-control">
                  <input
                    id="element-opacity"
                    type="range"
                    min={0}
                    max={1}
                    defaultValue={1}
                    step="0.1"
                    className="hexa-slider"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap label-block">
                <label className="hexa-control-label slider-label">
                  Skew X<span>0</span>
                </label>
                <div className="hexa-control">
                  <input
                    id="element-skew-x"
                    type="range"
                    min={0}
                    max={180}
                    defaultValue={0}
                    step={1}
                    className="hexa-slider"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap label-block">
                <label className="hexa-control-label slider-label">
                  Skew Y<span>0</span>
                </label>
                <div className="hexa-control">
                  <input
                    id="element-skew-y"
                    type="range"
                    min={0}
                    max={180}
                    defaultValue={0}
                    step={1}
                    className="hexa-slider"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap label-block">
                <label className="hexa-control-label slider-label">
                  Rotate<span>0</span>
                </label>
                <div className="hexa-control">
                  <input
                    id="element-rotate"
                    type="range"
                    min={0}
                    max={360}
                    defaultValue={0}
                    step={1}
                    className="hexa-slider"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="hexa-noelements" className="notice notice-warning">
          Nothing found.
        </div>
      </div>
      <div id="hexa-icons" className="hexa-icon-panel-content panel-hide">
        <div className="hexa-tabs">
          <ul className="hexa-tabs-menu">
            <li className="active" data-target="#hexa-all-icons">
              Icons
            </li>
            <li id="hexa-custom-svg-open" data-target="#hexa-customsvg-upload">
              Custom SVG
            </li>
          </ul>
          <div id="hexa-all-icons" className="hexa-tab active">
            <div className="hexa-control-wrap" style={{ margin: 0 }}>
              <label className="hexa-control-label">Icon Style</label>
              <div className="hexa-control">
                <select
                  id="hexa-icon-style"
                  className="hexa-select"
                  autoComplete="off"
                >
                  <option selected="" value="materialicons">
                    Filled
                  </option>
                  <option value="materialiconsoutlined">Outlined</option>
                  <option value="materialiconsround">Round</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="hexa-search-wrap">
              <input
                id="hexa-icon-search"
                type="search"
                className="hexa-form-field"
                placeholder="Enter a keyword..."
                autoComplete="off"
              />
              <span id="hexa-icon-search-icon" className="material-icons">
                search
              </span>
            </div>
            <div
              id="hexa-icons-grid"
              className="hexa-grid hexa-elements-grid four-column"
            />
            <div id="hexa-noicons" className="notice notice-warning">
              Nothing found.
            </div>
          </div>
          <div id="hexa-customsvg-upload" className="hexa-tab">
            <div className="hexa-file-field">
              <input
                type="file"
                name="hexa-element-upload"
                id="hexa-element-upload"
                className="hexa-hidden-file"
                accept="image/svg+xml"
              />
              <label
                htmlFor="hexa-element-upload"
                className="hexa-btn primary hexa-lg-btn btn-full"
              >
                <span className="material-icons">upload</span>
                <span>Upload SVG from computer</span>
              </label>
            </div>
            <div id="hexa-custom-svg-options">
              <hr />
              <div className="hexa-control-wrap label-block">
                <div className="hexa-control">
                  <div className="hexa-btn-group icon-group">
                    <button
                      id="customsvg-flip-horizontal"
                      type="button"
                      className="hexa-btn tooltip tooltip-top"
                      data-title="Flip X"
                    >
                      <span className="material-icons">flip</span>
                    </button>
                    <button
                      id="customsvg-flip-vertical"
                      type="button"
                      className="hexa-btn tooltip tooltip-top"
                      data-title="Flip Y"
                    >
                      <span className="material-icons">flip</span>
                    </button>
                    <button
                      type="button"
                      className="hexa-horizontal-center hexa-btn tooltip tooltip-top"
                      data-title="H-Align Center"
                    >
                      <span className="material-icons">
                        align_horizontal_center
                      </span>
                    </button>
                    <button
                      type="button"
                      className="hexa-vertical-center hexa-btn tooltip tooltip-top"
                      data-title="V-Align Center"
                    >
                      <span className="material-icons">
                        vertical_align_center
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hexa-control-wrap label-block">
                <label className="hexa-control-label slider-label">
                  Opacity<span>1</span>
                </label>
                <div className="hexa-control">
                  <input
                    id="customsvg-opacity"
                    type="range"
                    min={0}
                    max={1}
                    defaultValue={1}
                    step="0.1"
                    className="hexa-slider"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap label-block">
                <label className="hexa-control-label slider-label">
                  Skew X<span>0</span>
                </label>
                <div className="hexa-control">
                  <input
                    id="customsvg-skew-x"
                    type="range"
                    min={0}
                    max={180}
                    defaultValue={0}
                    step={1}
                    className="hexa-slider"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap label-block">
                <label className="hexa-control-label slider-label">
                  Skew Y<span>0</span>
                </label>
                <div className="hexa-control">
                  <input
                    id="customsvg-skew-y"
                    type="range"
                    min={0}
                    max={180}
                    defaultValue={0}
                    step={1}
                    className="hexa-slider"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="hexa-control-wrap label-block">
                <label className="hexa-control-label slider-label">
                  Rotate<span>0</span>
                </label>
                <div className="hexa-control">
                  <input
                    id="customsvg-rotate"
                    type="range"
                    min={0}
                    max={360}
                    defaultValue={0}
                    step={1}
                    className="hexa-slider"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Iconpanel