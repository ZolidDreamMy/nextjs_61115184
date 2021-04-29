import React from "react";
import Link from "next/link";

function index(props) {
  return (
    <>
      <div class="content-top">
        <div class="container ">
          <div class="tab-head ">
            <div class=" tab-content tab-content-t ">
              <div class="tab-pane active text-style" id="tab1">
                <div class=" con-w3l">
                  {/* <!-- loop --> */}

                  <div className="row">
                    {props.data.map((data) => (
                      <div class="col-md-3 m-wthree col-m">
                        <a>
                          <img
                            className="default-img"
                            src={data.image}
                            alt="#"
                          />
                          {/* <img className="hover-img" src={data.product_img} alt="#" /> */}
                        </a>
                        <div class="mid-1">
                          <div class="women">
                            <h6>
                              <a href="/">
                                {data.title}
                              </a>
                            </h6>
                          </div>
                          <div class="mid-2">
                            <p>
                              <em class="item_price">
                                ${data.price}
                                .00
                              </em>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
