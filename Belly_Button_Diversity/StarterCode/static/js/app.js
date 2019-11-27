function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

    var url = "/metadata/" + sample;
    d3.json(url).then(function(data) {
      var metaData = d3.select("#sample-metadata");
      metaData.html("");
      Object.entries(data).forEach(([key, value]) => {
        metaData.append("h6").text(key + " : " +value);
      });
  }); 
}

function buildCharts(sample) {

    var url1 = "/samples/" + sample;
  
    d3.json(url1).then(function(data) {
   

  // Pie Chart

    var val = data.sample_values.slice(0,10);
    var eti = data.otu_ids.slice(0,10);
    var tex = data.otu_labels.slice(0,10);

    var dataP = [{
      values: val,
      labels: eti,
      hovertext: tex,
      type: "pie"
    }];
  
    var layout = {
      title: 'Belly Button Pie Chart',
      height: 600,
      width: 800
    };
  
    Plotly.newPlot("pie", dataP, layout);
  
    // Bubble Chart 
    // https://plot.ly/javascript/bubble-charts/

    var valx = data.otu_ids;
    var valy = data.sample_values;
    var texB = data.otu_labels;
    var col = data.otu_ids;
    var tam = data.sample_values;


    var traceBubble = {
      x: valx,
      y: valy,
      text: texB,
      mode: 'markers',
      marker: {
        color: col,
        size: tam,
        colorscale: "Earth"
      }
    };
    
    var dataB = [traceBubble];
    
    var layout = {
      title: 'Belly Button Bubble Chart ',
      xaxis: {
        text: 'UTO ID'
    },
      showlegend: false,
      height: 600,
      width: 1500
    };
    
    Plotly.newPlot("bubble", dataB, layout);
   
    }
  )}

     // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
