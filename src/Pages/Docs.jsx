import React, { useState } from 'react'
import DynamicTabs from '../components/Commons/DynamicTabs'
import EntrepreneurshipBusinessPlanMaker from '../components/Docs/Enterprnourship/EntreprenoushipDocMaker';
import Dashboard from '../commons/Dashboard';
import MindMap from '../components/Docs/mindMap/mindMap';
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";

const Tab = ({ children }) => {
  return <div className='w-full h-full'>{children}</div>;
};
function Docs() {  


  return (
  
    <Dashboard>

      <DynamicTabs>
      <Tab tabName="Busisness Plan Doc"> 
      <EntrepreneurshipBusinessPlanMaker />
      </Tab>
      <Tab tabName="Strategy"> 
      Strategy
      </Tab>
      <Tab  tabName="Mind Map"> 
      <ReactFlowProvider>
      <MindMap />

      </ReactFlowProvider>
      </Tab>
      <Tab tabName="Marketing"> 
      Marketing
      </Tab>
      <Tab tabName="Opportunity"> 
      Opportunity
      </Tab>
      <Tab tabName="Investment"> 
      Investment
      </Tab>
      </DynamicTabs>
      </Dashboard>
  )
}

export default Docs