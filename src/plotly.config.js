export const CONFIG_BASE = {
  COEF: 1,
  COEF_M3: 0.001
};

export const CONFIG_MEASURES = {
  0: {
    name: "Sans validation",
    mode: "lines",
    showlegend: true,
    marker: {
      color: "#ffb136",
      size: 5
    },
    hoverinfo: "x+y"
  },
  4: {
    name: "Données brutes",
    mode: "lines",
    showlegend: true,
    marker: {
      color: "#e34a33",
      size: 5
    },
    hoverinfo: "x+y"
  },
  8: {
    name: "Données corrigées",
    mode: "lines",
    showlegend: true,
    marker: {
      color: "#8857a5",
      size: 5
    },
    hoverinfo: "x+y"
  },
  12: {
    name: "Données pré-validées",
    mode: "lines",
    showlegend: true,
    marker: {
      color: "#2b8cbe",
      size: 5
    },
    hoverinfo: "x+y"
  },
  16: {
    name: "Données validées",
    mode: "lines",
    showlegend: true,
    marker: {
      color: "#2aa25f",
      size: 5
    },
    hoverinfo: "x+y"
  },
  default: {
    name: "NC",
    mode: "lines",
    showlegend: true,
    marker: {
      color: "grey",
      size: 5
    },
    hoverinfo: "x+y"
  }
};

export const CONFIG_MEASURES2 = {
  0: {
    name: "Sans validation",
    mode: "lines",
    showlegend: false,
    legendgroup: "status",
    marker: {
      color: "#ffb136",
      size: 5
    }
  },
  4: {
    name: "Données brutes",
    mode: "lines",
    showlegend: false,
    legendgroup: "status",
    marker: {
      color: "#e34a33",
      size: 5
    }
  },
  8: {
    name: "Données corrigées",
    mode: "lines",
    showlegend: false,
    legendgroup: "status",
    marker: {
      color: "#8857a5",
      size: 5
    }
  },
  12: {
    name: "Données pré-validées",
    mode: "lines",
    showlegend: false,
    legendgroup: "status",
    marker: {
      color: "#2b8cbe",
      size: 5
    }
  },
  16: {
    name: "Données validées",
    mode: "lines",
    showlegend: false,
    legendgroup: "status",
    marker: {
      color: "#2aa25f",
      size: 5
    }
  },
  default: {
    name: "Mesures 1",
    mode: "lines",
    showlegend: true,
    legendgroup: "status",
    marker: {
      color: "#d4dde4",
      size: 5
    }
  }
};

export const CONFIG_MEASURES3 = {
  0: {
    name: "Sans validation",
    mode: "lines",
    showlegend: false,
    legendgroup: "status2",
    marker: {
      color: "#ffb136",
      size: 5
    },
    line: {
      dash: "dot",
      width: 2
    }
  },
  4: {
    name: "Données brutes",
    mode: "lines",
    showlegend: false,
    legendgroup: "status2",
    marker: {
      color: "#e34a33",
      size: 5
    },
    line: {
      dash: "dot",
      width: 2
    }
  },
  8: {
    name: "Données corrigées",
    mode: "lines",
    showlegend: false,
    legendgroup: "status2",
    marker: {
      color: "#8857a5",
      size: 5
    }
  },
  12: {
    name: "Données pré-validées",
    mode: "lines",
    showlegend: false,
    legendgroup: "status2",
    marker: {
      color: "#2b8cbe",
      size: 5
    },
    line: {
      dash: "dot",
      width: 2
    }
  },
  16: {
    name: "Données validées",
    mode: "lines",
    showlegend: false,
    legendgroup: "status2",
    marker: {
      color: "#2aa25f",
      size: 5
    },
    line: {
      dash: "dot",
      width: 2
    }
  },
  default: {
    name: "Mesures 2",
    mode: "lines",
    showlegend: true,
    legendgroup: "status2",
    marker: {
      color: "#d4dde4",
      size: 5
    },
    line: {
      dash: "dot",
      width: 2
    }
  }
};
