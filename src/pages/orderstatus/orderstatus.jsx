import React from 'react'
import { Footer, Header, OrderStatusList } from '../../components';
import './orderstatus.css';

export const Orderstatus = () => {
  return (
    <div>
        <Header />
        <OrderStatusList />
        <Footer />
    </div>
  )
}
