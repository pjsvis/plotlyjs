import { CONFIG_BASE } from "./plotly.config";

/**
 * Returns an array of times or NaN depends on status
 *
 * @param {object} data
 * @param {array} data.timeline
 * @param {array} data.status
 * @param {number} status
 * @returns {array}
 */
function getTimelineArray(data, status) {
  return data.timeline.map((item, i) => {
    if (data.status[i] === status) {
      return item;
    }
    return NaN;
  });
}

/**
 * Returns an array of values or NaN depends on status
 *
 * @param {object} data
 * @param {array} data.timeline
 * @param {array} data.status
 * @param {number} status
 * @param {number} coef
 * @returns {array}
 */
function getValuesArray(data, status, coef) {
  return data.values.map((item, i) => {
    if (data.status[i] === status) {
      return coef * item;
    }
    return NaN;
  });
}

/**
 * Parse recived data for Plotly and diveded traces by status
 *
 * @param {object} data
 * @param {string} unit
 * @returns {array}
 * @memberof GraphPlotly
 */
export const getTracesByStatus = (data, unit, config) => {
  let stops = {};
  if (data.timeline && data.timeline.length) {
    let coef = CONFIG_BASE.COEF;
    if (unit === "m3") {
      coef = CONFIG_BASE.COEF_M3;
    }

    data.timeline.forEach((item, i) => {
      let status = !data.status[i] ? -1 : data.status[i];

      if (!stops[status]) {
        const { ...traceConfig } = config[status] || config.default;

        stops[status] = {
          x: getTimelineArray(data, status), // timeline
          y: getValuesArray(data, status, coef), // values
          ...traceConfig
        };
      }
    });
  }

  return Object.values(stops);
};

/**
 * Parse recived data for Plotly
 *
 * @param {object} data
 * @param {string} unit
 * @returns {array}
 * @memberof GraphPlotly
 */
export const getFullTrace = (data, unit, config) => {
  const { ...traceConfig } = config;
  let trace = {
    x: [], // timeline
    y: [], // values
    ...traceConfig
  };
  if (data.timeline && data.timeline.length) {
    let coef = CONFIG_BASE.COEF;
    if (unit === "m3") {
      coef = CONFIG_BASE.COEF_M3;
    }

    data.timeline.forEach((item, i) => {
      trace.x.push(item);
      trace.y.push(coef * data.values[i]);
    });
  }

  return trace;
};
