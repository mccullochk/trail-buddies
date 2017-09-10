import React from 'react'
import Layout from 'react-toolbox/lib/layout/Layout'
import Panel from 'react-toolbox/lib/layout/Panel'
import AppBar from 'react-toolbox/lib/app_bar/AppBar'

const TrailBuddiesIcon = () => (
  <img src="" alt="Trail Buddies" />
);

const AppLayout = (props) => (
  <Layout>
    <Panel>
      <AppBar className="layout header" leftIcon={<TrailBuddiesIcon />} />
      <div className="layout main">
        {props.children}
      </div>
    </Panel>
    <style>{`
      .header {
        margin-bottom: 24px;
      }
      .header h1 {
        padding-left: 3%;
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
    `}</style>
  </Layout>
)

export default AppLayout
