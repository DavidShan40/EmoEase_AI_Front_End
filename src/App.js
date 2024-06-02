import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // 定义加载状态变量
  const [load, updateLoad] = useState(true);

  // 使用 useEffect 设置定时器更新加载状态
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 600);

    // 清除定时器
    return () => clearTimeout(timer);
  }, []);

  return (
    // 配置路由
    <Router>
      {/* 显示预加载组件 */}
      {/* <Preloader load={load} /> */}
      {/* 设置滚动 */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* 导航栏 */}
        <Navbar />
        {/* 滚动到顶部组件 */}
        {/* <ScrollToTop /> */}
        {/* 定义路由 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* 页脚 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
