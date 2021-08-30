import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: flex;
  .sidebar {
    flex-shrink: 0;
    width: 0;
    overflow: hidden;
    background-image: radial-gradient(
      circle,
      #070707,
      #101010,
      #161616,
      #1b1c1c,
      #202121
    );
    border-radius: 20px;
    transition: 0.3s;
    height: 100vh;
    position: sticky;
    top: 0;
    padding-top: 20px;
    padding-bottom: 20px;

    &.show {
      width: 300px;
      padding: 20px;
    }
    nav {
      li {
        a {
          background-color: white !important;
          .MuiButtonBase-root {
            display: block !important;
            padding: 10px 20px !important;
            border-radius: 6px !important;
            background-color: rgba(255, 255, 255, 0.3) !important;
            color: white !important;
            margin-bottom: 10px !important;
            transition: 0.3s !important;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3) !important;
            min-width: 200px !important;
            overflow: hidden !important;
            &:hover {
              background-color: rgba(255, 255, 255, 0.5) !important;
            }
          }

          &.active {
            .MuiButtonBase-root {
              background-color: blue !important;
              color: white !important;
            }
          }
        }
      }
    }
  }

  .rightside {
    flex: 1;
    /* flex: 1 1 0%; */
    /* overflow-x: hidden; */
    position: relative;
    header {
      animation: morph 12s infinite;
      padding: 20px;
      position: sticky;
      top: 0;
      background-color: aqua;
      z-index: 1000;
      .logo {
        height: 20px;
        margin-right: 20px;
      }
    }

    @keyframes morph {
      0% {
        background-color: red;
      }
      25% {
        background-color: green;
      }
      50% {
        background-color: blue;
      }
      75% {
        background-color: darkgray;
      }
      100% {
        background-color: red;
      }
    }

    .content {
      padding: 20px;
    }
    .content:hover {
      background-image: linear-gradient(
        to right top,
        #d3d3cc,
        #d6dbd4,
        #d9e2dd,
        #dceae7,
        #e1f1f2
      );
      height: 100%;
    }
  }
`;

export default DashboardWrapper;
