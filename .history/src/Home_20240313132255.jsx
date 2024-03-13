import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const data = [
    { month: "January", January_2020: 1000, profit_lastyear: 1100 },
    { month: "February", profit_thisyear: 1500, profit_lastyear: 1200 },
    { month: "March", profit_thisyear: 1200, profit_lastyear: 1300 },
    { month: "April", profit_thisyear: 1700, profit_lastyear: 2000 },
    { month: "May", profit_thisyear: 1400, profit_lastyear: 1300 },
    { month: "June", profit_thisyear: 1800, profit_lastyear: 1400 },
    { month: "July", profit_thisyear: 1600, profit_lastyear: 1500 },
    { month: "August", profit_thisyear: 1900, profit_lastyear: 1000 },
    { month: "September", profit_thisyear: 2100, profit_lastyear: 3000 },
    { month: "October", profit_thisyear: 2000, profit_lastyear: 2100 },
    { month: "November", profit_thisyear: 2200, profit_lastyear: 2000 },
    { month: "December", profit_thisyear: 2500, profit_lastyear: 2200 },
  ];

  return (
    <>
      <div className="main-container">
        <div className="column">
          <div className="main-title">
            <h3>Monitoring Business Health</h3>
          </div>

          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className="card_icon" />
              </div>
              <h1>300</h1>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className="card_icon" />
              </div>
              <h1>12</h1>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className="card_icon" />
              </div>
              <h1>33</h1>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>ALERTS</h3>
                <BsFillBellFill className="card_icon" />
              </div>
              <h1>42</h1>
            </div>
          </div>
          <div className="charts">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="profit_thisyear" fill="#F7B5BF" />
                <Bar dataKey="profit_lastyear" fill="#8CACD5" />
              </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="profit_thisyear"
                  stroke="#F7B5BF"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="profit_lastyear"
                  stroke="#8CACD5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="column">
          {/* <div className="card"> */}
            <div className="card-inner">
            <img src="./images/cafe_inside.jpg" alt="cafe img" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
