import React from 'react'
import hexa from '../hexa';
import { useRef, useEffect } from 'react';

const Savemodel = () => {
  return (
    <div id="modal-save" className="hexa-modal">
  <div className="hexa-modal-close" data-target="#modal-save">
    <span className="material-icons">close</span>
  </div>
  <div className="hexa-modal-wrap">
    <div className="hexa-modal-inner">
      <div className="hexa-tabs">
        <ul className="hexa-tabs-menu">
          <li className="active" data-target="#modal-tab-save">
            <span className="material-icons">save</span>Save
          </li>
          <li data-target="#modal-tab-download">
            <span className="material-icons">download</span>Download
          </li>
        </ul>
        <div id="modal-tab-save" className="hexa-tab active">
          <div id="hexa-save-as-img">
            <div className="hexa-block-50">
              <div>
                <label>File Name</label>
                <input
                  id="hexa-save-img-name"
                  className="hexa-form-field hexa-file-name"
                  type="text"
                  defaultValue=""
                  autoComplete="off"
                  data-default=""
                />
              </div>
              <button
                id="hexa-save-img"
                type="button"
                className="hexa-btn primary"
              >
                <span className="material-icons">save</span>Save As Image
              </button>
            </div>
            <div className="hexa-block-33">
              <div>
                <label>DPI</label>
                <select
                  id="hexa-save-img-dpi"
                  className="hexa-select"
                  autoComplete="off"
                >
                  <option selected="" value={72}>
                    72 DPI - Monitor Resolution
                  </option>
                  <option value={96}>96 DPI</option>
                  <option value={144}>144 DPI</option>
                  <option value={300}>300 DPI - Printer Resolution</option>
                </select>
              </div>
              <div>
                <label>Image Quality</label>
                <select
                  id="hexa-save-img-quality"
                  className="hexa-select"
                  autoComplete="off"
                >
                  <option selected="" value={1}>
                    100%
                  </option>
                  <option value="0.9">90%</option>
                  <option value="0.8">80%</option>
                  <option value="0.7">70%</option>
                  <option value="0.6">60%</option>
                  <option value="0.5">50%</option>
                  <option value="0.4">40%</option>
                  <option value="0.3">30%</option>
                  <option value="0.2">20%</option>
                  <option value="0.1">10%</option>
                </select>
              </div>
              <div>
                <label>File Format</label>
                <select
                  id="hexa-save-img-format"
                  className="hexa-select"
                  autoComplete="off"
                >
                  <option selected="" value="jpeg">
                    JPEG
                  </option>
                  <option value="png">PNG</option>
                  <option value="svg">SVG</option>
                  <option value="webp">WEBP</option>
                </select>
              </div>
            </div>
          </div>
          <div id="hexa-save-as-json">
            <div className="hexa-block-50">
              <div>
                <label>File Name</label>
                <input
                  id="hexa-json-save-name"
                  className="hexa-form-field hexa-file-name"
                  type="text"
                  defaultValue=""
                  autoComplete="off"
                  data-default=""
                />
              </div>
              <button
                id="hexa-json-save"
                type="button"
                className="hexa-btn primary"
              >
                <span className="material-icons">save</span>Save As Template
              </button>
            </div>
          </div>
        </div>
        <div id="modal-tab-download" className="hexa-tab">
          <div id="hexa-download-as-img">
            <div className="hexa-block-50">
              <div>
                <label>File Name</label>
                <input
                  id="hexa-download-name"
                  className="hexa-form-field hexa-file-name"
                  type="text"
                  defaultValue=""
                  autoComplete="off"
                  data-default=""
                />
              </div>
              <button
                id="hexa-download"
                type="button"
                className="hexa-btn primary"
              >
                <span className="material-icons">download</span>Download As
                Image
              </button>
            </div>
            <div className="hexa-block-33">
              <div>
                <label>DPI</label>
                <select
                  id="hexa-download-img-dpi"
                  className="hexa-select"
                  autoComplete="off"
                >
                  <option selected="" value={72}>
                    72 DPI - Monitor Resolution
                  </option>
                  <option value={96}>96 DPI</option>
                  <option value={144}>144 DPI</option>
                  <option value={300}>300 DPI - Printer Resolution</option>
                </select>
              </div>
              <div>
                <label>Image Quality</label>
                <select
                  id="hexa-download-quality"
                  className="hexa-select"
                  autoComplete="off"
                >
                  <option selected="" value={1}>
                    100%
                  </option>
                  <option value="0.9">90%</option>
                  <option value="0.8">80%</option>
                  <option value="0.7">70%</option>
                  <option value="0.6">60%</option>
                  <option value="0.5">50%</option>
                  <option value="0.4">40%</option>
                  <option value="0.3">30%</option>
                  <option value="0.2">20%</option>
                  <option value="0.1">10%</option>
                </select>
              </div>
              <div>
                <label>File Format</label>
                <select
                  id="hexa-download-format"
                  className="hexa-select"
                  autoComplete="off"
                >
                  <option selected="" value="jpeg">
                    JPEG
                  </option>
                  <option value="png">PNG</option>
                  <option value="svg">SVG</option>
                  <option value="webp">WEBP</option>
                </select>
              </div>
            </div>
          </div>
          <div id="hexa-download-as-json">
            <div className="hexa-block-50">
              <div>
                <label>File Name</label>
                <input
                  id="hexa-json-download-name"
                  className="hexa-form-field hexa-file-name"
                  type="text"
                  defaultValue=""
                  autoComplete="off"
                  data-default=""
                />
              </div>
              <button
                id="hexa-json-download"
                type="button"
                className="hexa-btn primary"
              >
                <span className="material-icons">download</span>Download As
                Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Savemodel