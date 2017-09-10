import React from 'react'
import Layout from 'react-toolbox/lib/layout/Layout'
import Panel from 'react-toolbox/lib/layout/Panel'
import AppBar from 'react-toolbox/lib/app_bar/AppBar'

import TrailBuddiesLogo from "../imgs/trail-buddies-logo.png"

const TrailBuddiesIcon = () => (
  <img src={TrailBuddiesLogo} alt="Trail Buddies" />
);

const AppLayout = (props) => (
  <Layout>
    <Panel>
      <a href='/'><AppBar className="layout header" leftIcon={<TrailBuddiesIcon />} /></a>
      <div className="layout main">
        {props.children}
      </div>
    </Panel>
    <style>{`
      .header {
        margin-bottom: 24px;
      }
      .header img {
        height: 36px;
      }
      .header div div button span {
        color: white;
      }
      .main {
        width: 85%;
        min-width: 300px;
        margin: 0 auto;
        margin-bottom: 20px;
      }
      body .header {
        background: #1c1c1c;
      }
    `}</style>
  </Layout>
)

export default AppLayout
