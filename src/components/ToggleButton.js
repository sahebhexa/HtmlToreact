import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const ToggleButton = () => {
  const hexaRef = useRef(null);

  useEffect(() => {
    const selector = $(hexaRef.current);

    selector.find(".thr-d").on("click", function () {
      selector.find(".two-d").addClass("active");
      selector.find(".thr-d").removeClass("active");
      selector.find(".td-interactive-btn-container-main-contianer").removeClass("interactive-btn-alignment");
      selector.find(".web-thr-d-main-container").removeClass("display-unity");
      selector.find("#hexa-canvas").removeClass("hide-canvas");
      selector.find("#hexa").removeClass("hide-canva");
    });  
  }, [hexaRef]);

  return (
    <div ref={hexaRef} id="webg-buttons-container" className="td-interactive-btn-container-main-contianer">
      <div className="td-interactive-btn-container-inner-contianer">
        <button className="two-d td-interactive-btn-container td-interactive-btn-container-two-d active">
          2D
        </button>
        <button className="thr-d td-interactive-btn-container td-interactive-btn-container-three-d">
          3D
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;