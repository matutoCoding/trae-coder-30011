import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import StatCard from '@/components/StatCard';
import StatusTag from '@/components/StatusTag';
import { orderList } from '@/data/order';
import styles from './index.module.scss';

const OrderPage: React.FC = () => {
  const pendingCount = orderList.filter(o => o.status === 'pending').length;
  const producingCount = orderList.filter(o => ['producing', 'gilding'].includes(o.status)).length;
  const packingCount = orderList.filter(o => ['packing', 'shipped'].includes(o.status)).length;
  const doneCount = orderList.filter(o => o.status === 'done').length;

  const getStatusType = (status: string): 'default' | 'warning' | 'gold' | 'success' | 'info' => {
    const map: Record<string, 'default' | 'warning' | 'gold' | 'success' | 'info'> = {
      pending: 'warning',
      producing: 'gold',
      gilding: 'gold',
      packing: 'info',
      shipped: 'default',
      done: 'success'
    };
    return map[status] || 'default';
  };

  return (
    <ScrollView scrollY className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.headerTitle}>定制订单</Text>
        <Text className={styles.headerDesc}>文房定制 · 礼盒包装</Text>
      </View>

      <View className={styles.statRow}>
        <StatCard label="待接单" value={pendingCount} unit="个" color="#ff7d00" />
        <StatCard label="制作中" value={producingCount} unit="个" color="#C4973B" />
        <StatCard label="包装发货" value={packingCount} unit="个" color="#3D5A80" />
        <StatCard label="已完成" value={doneCount} unit="个" color="#00b42a" />
      </View>

      {orderList.map(order => (
        <View className={styles.orderCard} key={order.id}>
          <View className={styles.orderHeader}>
            <Text className={styles.orderCustomer}>{order.customerName}</Text>
            <StatusTag text={order.statusName} type={getStatusType(order.status)} />
          </View>

          <View className={styles.orderInfo}>
            <View className={styles.orderInfoRow}>
              <Text className={styles.orderLabel}>下单日期</Text>
              <Text className={styles.orderValue}>{order.orderDate}</Text>
            </View>
            <View className={styles.orderInfoRow}>
              <Text className={styles.orderLabel}>交付日期</Text>
              <Text className={styles.orderValue}>{order.deliveryDate}</Text>
            </View>
          </View>

          <View className={styles.orderItems}>
            <Text className={styles.orderItemsText}>{order.items}</Text>
          </View>

          <View className={styles.packageInfo}>
            <Text className={styles.packageLabel}>{order.packageType}</Text>
          </View>

          <View className={styles.orderBottom}>
            <Text className={styles.orderAmount}>{order.totalAmount}</Text>
            <Text className={styles.orderDate}>{order.remark}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default OrderPage;
