
   var svgContainer = d3.select("#graph").append("svg")
                                    .attr("class", "network");
 
var nodes = svgContainer.append("g")
                          .attr("id", "mainNodes")
                          .selectAll("circle")
                          .data(mainNodes)
                          .enter()
                          .append("circle")
                          .selectAll("text")
                          .data(mainNodes)
                          .enter()
                          .append("text");
                          
                          

var nodesAttributes = nodes
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke", function(d) { return d.color; })
                       .style("fill", function(d) { return d.color; })
                       .attr("x", function(d) { return d.x_axis ; })
                          .attr("y", function(d) { return d.y_axis; })
                          .attr("font-size", "20px")
                       .text(function(d) { return d.question;});

var node1 = svgContainer.append("g")
                          .attr("id", "node1")
                          .selectAll("circle")
                          .data(node1_data)
                          .enter()
                          .append("circle")
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke", function(d) { return d.color; })
                       .style("fill", "none");

var node2 = svgContainer.append("g")
                          .attr("id", "node2")
                          .selectAll("circle")
                          .data(node2_data)
                          .enter()
                          .append("circle")
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke", function(d) { return d.color; })
                       .style("fill", "none");

var node3 = svgContainer.append("g")
                          .attr("id", "node3")
                          .selectAll("circle")
                          .data(node3_data)
                          .enter()
                          .append("circle")
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke", function(d) { return d.color; })
                       .style("fill", "none");

var node4 = svgContainer.append("g")
                          .attr("id", "node4")
                          .selectAll("circle")
                          .data(node4_data)
                          .enter()
                          .append("circle")
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke", function(d) { return d.color; })
                       .style("fill", "none");


var node5 = svgContainer.append("g")
                          .attr("id", "node5")
                          .selectAll("circle")
                          .data(node5_data)
                          .enter()
                          .append("circle")
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke", function(d) { return d.color; })
                       .style("fill", "none");
                       


var node1_arr = $.map(node1_data, function(el) { return el; });
var node2_arr = $.map(node2_data, function(el) { return el; });
var node3_arr = $.map(node3_data, function(el) { return el; });
var node4_arr = $.map(node4_data, function(el) { return el; });
var node5_arr = $.map(node5_data, function(el) { return el; });


draw_lines(node1_arr);
draw_lines(node2_arr);
draw_lines(node3_arr);
draw_lines(node4_arr);
draw_lines(node5_arr);

    function pulse() {
      var circle = svgContainer.selectAll("circle");
      
      //(function repeat() {
        circle = circle.transition()
          .duration(1000)
          //.attr("stroke-width", .5)
          .attr("r", 0)
          .transition()
          .duration(2000)
          //.attr('stroke-width', 20)
          .style('fill', function(d) { return d.color; })
          .attr("r", 10)
          .ease('sine')
          //.each("end", repeat);
      //})();
    }


svgContainer.append("g").each(pulse);

function draw_lines(arr) {
  for (i = 0; i < arr.length; i++) { 
      var line = svgContainer.append("line")
          .style("stroke", arr[0]["color"])
          .attr("x1", arr[0]["x_axis"])
          .attr("y1", arr[0]["y_axis"])
          .attr("x2", arr[i]["x_axis"])
          .attr("y2", arr[i]["y_axis"]);
  }


}