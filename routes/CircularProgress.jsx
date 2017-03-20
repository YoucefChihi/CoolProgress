
// This is the sketchiest progress bar you will ever see

// There is a weird [Object object] inside the rendered foreground path
// couldn't figure out where did it came from but everything is working fine :)

import React, { Component }  from 'react';
import * as d3      from 'd3';

let foreground, arc, background, tau;
export default class CircularProgress extends Component {

	componentDidMount (){
		let bgColor = this.props.bgColor ? this.props.bgColor : '#ddd'
		let fgColor = this.props.color ? this.props.color : 'orange'
		let size = this.props.size
		let percent = this.props.percent
		let svg = d3.select("svg")
		let g = svg.append('g').attr("transform", "translate(" + size / 2 + "," + size / 2 + ")")

		tau = 2 * Math.PI;
		arc = d3.arc()
		    .innerRadius(size/2 - 2)
		    .outerRadius(size/2)
		    .startAngle(0);

		// Add the background arc, from 0 to 100% (tau).
		background = g.append("path")
		    .datum({endAngle: tau})
		    .style("fill", bgColor)
		    .attr("d", arc);

		// Add the foreground arc in orange, currently showing 12.7%.
		foreground = g.append("path")
		    .datum({endAngle: 0})
		    .style("fill", fgColor)
		    .style("opacity", .85)
		    .attr("d", arc);

		foreground.transition()
		    .duration(750)
		    .attrTween("d", arcTween(percent * tau));

		let res = foreground.html(function(d){return d}).node()[0]
		return res
	}

	componentDidUpdate(){
		try{
			foreground.transition()
	    .duration(750)
	    .attrTween("d", arcTween(this.props.percent * tau));
	  } catch(e){ console.log('error with transition')}
	}

	render(){
		return(
			<svg width={this.props.size+''} height={this.props.size+''}></svg>
		)
	}
}

function arcTween(newAngle) {
  return function(d) {
    var interpolate = d3.interpolate(d.endAngle, newAngle);
    return function(t) {
      d.endAngle = interpolate(t);
      return arc(d);
    };
  };
}