import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Header />

      <main
        style={{
          flex: 1,
          //maxWidth: "1000px",
          //margin: "0 auto",
          width: "100%",
          padding: "24px 16px",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
