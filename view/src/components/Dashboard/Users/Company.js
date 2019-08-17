import React from "react";
import { RecipeCard, ProductCard } from "react-ui-cards";
import image from "../images/route.png";
// import "./Company.css";

export default function Company({ graph }) {
  console.log(graph);
  return (
    <div>
      <section id="mst" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              {graph && (
                <h3 className="text-bold text-center text-uppercase">
                  {`You have ${graph.length} Minimized Graph${
                    graph.length > 1 ? "s" : ""
                  } Saved `}
                </h3>
              )}
              <hr />
              {graph && (
                <div className="card-container">
                  <div className="row">
                    {graph &&
                      graph.map((data, index) => {
                        return (
                          <div key={index} className="col-md-6">
                            <RecipeCard
                              href={`/${index}`}
                              thumbnail={image}
                              title="Save Minimized Graph"
                              time={`nodes: ${data.nodes.length}`}
                              servings={`edges: ${data.edges.length}`}
                              likeCallback={() =>
                                alert("You added Fluffy pancakes to favourites")
                              }
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
              {graph && !graph.length && (
                <div className="card-container mb-5">
                  <h3
                    // style={{ margin: "auto" }}
                    className="text-center text-muted ml-auto mr-auto mb-3"
                  >
                    Thinking of what to do?
                  </h3>
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <ProductCard
                        photos={[
                          "https://cdn2.iconfinder.com/data/icons/flaticons-stroke/16/minimize-1-512.png"
                          // "https://i.imgur.com/raPe27t.jpg",
                          // "https://i.imgur.com/IpEsYSH.jpg"
                        ]}
                        // price="$99"
                        productName="Kruskal"
                        description="Minimize your graph using Kruskal's Algorithm now."
                        buttonText="Minimize"
                        rating={3}
                        url="/kruskal"
                      />
                    </div>
                    <div className="col-md-4 mb-4">
                      <ProductCard
                        photos={[
                          "https://upload.wikimedia.org/wikipedia/commons/d/d2/Minimum_spanning_tree.svg"
                          // "https://i.imgur.com/raPe27t.jpg",
                          // "https://i.imgur.com/IpEsYSH.jpg"
                        ]}
                        // price="$99"
                        productName="MST"
                        description="Know more about Minimum Spanning Tree Algorithms"
                        buttonText="Search"
                        rating={3}
                        url="https://en.wikipedia.org/wiki/Minimum_spanning_tree"
                      />
                    </div>
                    <div className="col-md-4 mb-4">
                      <ProductCard
                        photos={[
                          "https://i1.wp.com/geeks10.com/wp-content/uploads/2018/05/Dijkstra-algorithm-geeks10-2018.jpg"
                          // "https://i.imgur.com/raPe27t.jpg",
                          // "https://i.imgur.com/IpEsYSH.jpg"
                        ]}
                        // price="$99"
                        productName="Shortest Path"
                        description="Get the Shortest path between two points in a graph"
                        buttonText="Dijkstra"
                        rating={3}
                        url="/dijkstra"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-md-12" />
      </div>
    </div>
  );
}
