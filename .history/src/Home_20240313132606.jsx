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
    { month: "January", profit_2021: 1000, profit_2022: 1100 },
    { month: "February", profit_2021: 1500, profit_2022: 1200 },
    { month: "March", profit_2021: 1200, profit_2022: 1300 },
    { month: "April", profit_2021: 1700, profit_2022: 2000 },
    { month: "May", profit_2021: 1400, profit_2022: 1300 },
    { month: "June", profit_2021: 1800, profit_2022: 1400 },
    { month: "July", profit_2021: 1600, profit_2022: 1500 },
    { month: "August", profit_2021: 1900, profit_2022: 1000 },
    { month: "September", profit_2021: 2100, profit_2022: 3000 },
    { month: "October", profit_2021: 2000, profit_2022: 2100 },
    { month: "November", profit_2021: 2200, profit_2022: 2000 },
    { month: "December", profit_2021: 2500, profit_2022: 2200 },
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
              <div>
                <h1>300</h1>
                <h1>+3 last day</h1>
              </div>
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
                {/* <Legend /> */}
                <Bar dataKey="profit_2021" fill="#F7B5BF" />
                <Bar dataKey="profit_2022" fill="#8CACD5" />
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
                {/* <Legend /> */}
                <Line
                  type="monotone"
                  dataKey="profit_2021"
                  stroke="#F7B5BF"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="profit_2022" stroke="#8CACD5" />
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
