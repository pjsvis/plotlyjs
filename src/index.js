import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Mock data
import measures1 from "./measures1.json";
import measures2 from "./measures2.json";

import { getTracesByStatus, getFullTrace } from "./helpers";
import GraphPlotly from "./GraphPlotly";
import {
  CONFIG_MEASURES,
  CONFIG_MEASURES2,
  CONFIG_MEASURES3
} from "./plotly.config";

const shapes = [
  {
    type: "rect",
    // x-reference is assigned to the x-values
    xref: "x",
    // y-reference is assigned to the plot paper [0,1]
    yref: "paper",
    x0: "2018-01-03",
    y0: 0,
    x1: "2018-01-05",
    y1: 1,
    fillcolor: "#d3d3d3",
    opacity: 0.4,
    line: {
      width: 0
    }
  },
  {
    type: "rect",
    xref: "x",
    yref: "paper",
    x0: "2018-01-17",
    y0: 0,
    x1: "2018-01-19",
    y1: 1,
    fillcolor: "#d3d3d3",
    opacity: 0.4,
    line: {
      width: 0
    }
  }
];

const App = () => {
  const data1 = getTracesByStatus(measures1, "m3", CONFIG_MEASURES);
  const data2 = [
    getFullTrace(measures1, "m3", CONFIG_MEASURES2.default),
    ...getTracesByStatus(measures1, "m3", CONFIG_MEASURES2),
    getFullTrace(measures2, "ls", CONFIG_MEASURES3.default),
    ...getTracesByStatus(measures2, "ls", CONFIG_MEASURES3)
  ];
  return (
    <div>
      <GraphPlotly data={data1} title="Multi status lines" />
      <GraphPlotly data={data2} title="Multiple graph with status" />
      <GraphPlotly data={data1} title="With shapes" shapes={shapes} />
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
