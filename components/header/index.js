import Head from "next/head";
function index() {
  return (
    <>
      <div class="header">
        <div class="container">
          <div class="logo">
            <h1>
              <a href="index.html">
                PERFUMES<span>Lorem</span>
              </a>
            </h1>
          </div>

          <div class="nav-top">
            <nav class="navbar navbar-default">
              <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="/" class="hyper">
                      <span>Home</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
