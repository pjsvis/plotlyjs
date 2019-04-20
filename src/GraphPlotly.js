import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Plot from "react-plotly.js";

const GraphPlotly = ({ data, shapes, title }) => (
  <Plot
    data={data}
    layout={{
      title,
      shapes,
      hovermode: "closest",
      showlegend: true,
      xaxis: { rangeslider: {} },
      yaxis: {
        fixedrange: true,
        title: "title"
      }
    }}
    style={{
      width: "100%",
      minHeight: "500px"
    }}
    useResizeHandler={true}
    config={{ locale: "fr-FR", responsive: true }}
  />
);

GraphPlotly.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  shapes: PropTypes.array
};

GraphPlotly.defaultProps = {
  shapes: []
};

export default GraphPlotly;
