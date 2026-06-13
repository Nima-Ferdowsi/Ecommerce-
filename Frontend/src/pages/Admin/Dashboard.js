import { Helmet } from "react-helmet";
import Overview from "../../components/Admin/Overview";
import Sidebar from "./../../components/Admin/SideBar";
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { useState } from "react";
import Usa from "../../img/flags/US.png";
import Ger from "../../img/flags/DE.png";
import Uk from "../../img/flags/GB.png";
import Br from "../../img/flags/BR.png";
import { Redirect } from "react-router";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../../utils/chart";
import TableItem from "../../components/Admin/TableItem";
import Navbar from "./../../components/Admin/Navbar";
import { getLocal } from './../../utils/localstorage';

const Dashboard = () => {
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  const user = getLocal("user");
  if (user.length === 0) {
    return <Redirect to="/login" />;
  } else {
    return (
      <>
        <Helmet>
          <title>Admin</title>
          <link rel="stylesheet" href="/css/Admin/sidebar.css" />
          <link rel="stylesheet" href="/css/Admin/admin.css" />
          <link rel="stylesheet" href="/css/Admin/nav.css" />
          <link rel="stylesheet" href="/css/Admin/overview.css" />
        </Helmet>
        <div className="container-fluid">
          <Navbar toggle={toggle} />
          <div className="top"> </div>
          <div className="row">
            <Sidebar toggle={toggle} show={show} setShow={setShow} />
            <div className="col-lg-10 col-sm-12 col-12 admin_container">
              <Overview />

              <div className="chart_section container-fluid">
                <div className="row">
                  <div className="chart_container col-lg-7 col-sm-12 col-12">
                    <h6 class="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 class="text-white mb-0">Sales value</h2>{" "}
                    <div className="chart">
                      <Line
                        data={chartExample1[chartExample1Data]}
                        options={chartExample1.options}
                        getDatasetAtEvent={(e) => console.log(e)}
                      />
                    </div>
                  </div>
                  <div className="  bar_container col-lg-4 col-sm-12 col-12">
                    <h6 class="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>

                    <h2 class="mb-0">Total orders</h2>
                    <div className="chart">
                      <Bar
                        data={chartExample2.data}
                        options={chartExample2.options}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="sales_catergory_section container-fluid">
                <div className="row">
                  <div className="table_box  col-lg-7 col-sm-12 col-12">
                    <h6 className="table_box_title ">Sales by Country</h6>
                    <TableItem
                      img={Usa}
                      country="Usa"
                      sales="520"
                      value="2000$"
                      bounce="30%"
                    />
                    <TableItem
                      img={Ger}
                      country="Germany"
                      sales="520"
                      value="2000$"
                      bounce="30%"
                    />
                    <TableItem
                      img={Uk}
                      country="England"
                      sales="520"
                      value="2000$"
                      bounce="30%"
                    />
                    <TableItem
                      img={Br}
                      country=" Brazil"
                      sales="520"
                      value="2000$"
                      bounce="30%"
                    />
                  </div>

                  <div className=" table_box  col-lg-3  col-sm-12 col-12">
                    <h6 className="table_box_title ">Sales by category</h6>

                    <TableItem
                      img={Usa}
                      country="Usa"
                      sales="520"
                      value="2000$"
                      bounce="30%"
                    />
                    <TableItem
                      img={Ger}
                      country="Germany"
                      sales="520"
                      value="2000$"
                      bounce="30%"
                    />
                    <TableItem
                      img={Uk}
                      country="England"
                      sales="520"
                      value="2000$"
                      bounce="30%"
                    />
                    <TableItem
                      img={Br}
                      country=" Brazil"
                      sales="520"
                      value="2000$"
                      bounce="30%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
