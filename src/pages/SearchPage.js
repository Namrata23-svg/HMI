import React from "react";
import hmi from "../assets/hmi.png";
import ux from "../assets/ux.jpg";
import { PhoneOutlined, MenuOutlined } from "@ant-design/icons";
import logo1 from "../assets/logo1.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import "../pages/chnaging.css";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";
import Hoverview from "../assets/Hoverview.png";
import SearchBar from "./SearchBar";
const { Title, Text } = Typography;
const SearchPage = () => {
  const navigate = useNavigate();
  return (
    <div className="changing">
      <div
        className="site-page-header-ghost-wrapper"
        style={{ margin: 0, padding: 0 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 60px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo1}
              style={{ height: "50px", marginTop: "5px", marginRight: "10px" }}
            />
            <h4 style={{ margin: 0, color: "red", fontSize: "34px" }}>BOSCH</h4>
          </div>

          <Space style={{ paddingRight: "60px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={hmi}
                style={{
                  height: "55px",
                  width: "65px",
                  marginTop: "-15px",
                  marginRight: "50px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Home")}
              />
            </div>
          </Space>
        </div>{" "}
      </div>

      <Card
        style={{
          width: 300,
          marginTop: "10px",
          cursor: "pointer",
          marginLeft: "50px",
          marginTop: "20px",
        }}
        bodyStyle={{ padding: 0 }}
        hoverable
        onClick={() => navigate("/HMI")}
        className="card1-hover"
      >
        <div className="custom-image">
          <img alt="example" width="100%" src={Hoverview} />
        </div>
        <div className="custom-card">
          <h3
            style={{ textAlign: "center", fontSize: "20px", marginTop: "40px" }}
          >
            UX/UI
          </h3>
          {/* <p>www.instagram.com</p> */}
        </div>
      </Card>
    </div>
  );
};

export default SearchPage;
