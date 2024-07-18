import React from 'react'

export const Body = () => {
  return (
<>
  <div id="hexa-body">
    <div className="hexa-wrap">
      <div id="hexa-ruler" className="hexa-inner-wrap">
        <div id="hexa-content" className="">
          <div id="hexa-canvas-img-wrap">
            <img
              id="hexa-canvas-img"
              src="/assets/3d/base-canvas.png"
              data-filename="placeholder"
              data-template=""
            />
          </div>
          <div id="hexa-canvas-wrap">
            <div id="hexa-canvas-overlay" />
            <div id="hexa-canvas-loader">
              <div className="hexa-loader" />
            </div>
            <canvas id="hexa-canvas" />
          </div>
          <div className="hexa-content-bar">
            <div id="hexa-img-zoom-counter" className="hexa-counter">
              <button id="hexa-img-zoom-out" className="counter-minus hexa-btn">
                <span className="material-icons">remove</span>
              </button>
              <input
                id="hexa-img-zoom"
                className="hexa-form-field numeric-field"
                type="text"
                defaultValue={100}
                autoComplete="off"
                data-min={10}
                data-max={200}
                data-step={5}
              />
              <button id="hexa-img-zoom-in" className="counter-plus hexa-btn">
                <span className="material-icons">add</span>
              </button>
              <div className="Z4DSZoomControl-divider" />
              <button id="hexa-fit-container" className="counter-fit hexa-btn">
                Fit
              </button>
            </div>
            <div></div>
          </div>
          <div className="hexa-canvas-footer-main-container">
            <div className="hexa-canvas-inner-footer-container">
              <button
                id="hexa-img-drag"
                className="hexa-btn tooltip tooltip-top"
                data-title="Pan"
              >
                <span className="material-icons">pan_tool</span>
              </button>
              <button
                id="hexa-undo"
                type="button"
                className="hexa-btn-simple tooltip tooltip-top"
                data-title="Undo"
                autoComplete="off"
                disabled=""
              >
                <span className="material-icons">undo</span>
              </button>
              <button
                id="hexa-redo"
                type="button"
                className="hexa-btn-simple tooltip tooltip-top"
                data-title="Redo"
                autoComplete="off"
                disabled=""
              >
                <span className="material-icons">redo</span>
              </button>
              <button
                className="hexa-btn-simple tooltip tooltip-top"
                data-title="Mask"
                id="hexa-maskbutton-outsied"
              >
                <img src="assets/custom/mask-icon.png" />
              </button>
              <button
                id="hexa-unmask"
                data-title="Unmask"
                className="hexa-btn-simple tooltip tooltip-top"
              >
                <img src="assets/custom/mask.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="web-thr-d-main-container">
    <div tabIndex={-1} id="3d-container" />
  </div>
  <div id="hexa-right-col">
    <h6 className="hexa-layers-title">
      <span className="material-icons">layers</span>Layers
    </h6>
    <div id="hexa-no-layer">
      No layers found. You can add text, element, image etc. to the canvas to
      create a layer.
    </div>
    <ul id="hexa-layers" />
    <div id="hexa-layer-delete-wrap">
      <select id="hexa-layer-select" className="hexa-select" autoComplete="off">
        <option value="all" selected="">
          All Layers
        </option>
        <option value="textbox">Texts</option>
        <option value="image">Images</option>
        <option value="frame">Frames</option>
        <option value="element">Elements</option>
        <option value="circle">Circles</option>
        <option value="ellipse">Ellipses</option>
        <option value="square">Squares</option>
        <option value="rectangle">Rectangles</option>
        <option value="triangle">Triangles</option>
        <option value="trapezoid">Trapezoids</option>
        <option value="pentagon">Pentagons</option>
        <option value="octagon">Octagons</option>
        <option value="emerald">Emeralds</option>
        <option value="star">Stars</option>
      </select>
      <button id="hexa-layer-delete" className="hexa-btn primary">
        <span className="material-icons">delete</span>
      </button>
    </div>
  </div>
</>


  )
}
