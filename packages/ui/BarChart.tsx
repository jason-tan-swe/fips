
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function BarChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current).attr("width", 400).attr("height", 300);
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 50)
      .attr("y", (d) => 300 - d.value)
      .attr("width", 40)
      .attr("height", (d) => d.value)
      .style("fill", "blue");
  }, [data]);

  return <svg ref={ref} />;
}
