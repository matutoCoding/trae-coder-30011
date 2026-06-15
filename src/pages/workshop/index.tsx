import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import StatCard from '@/components/StatCard';
import ProcessCard from '@/components/ProcessCard';
import { makingRecordList } from '@/data/making';
import { dryingRecordList } from '@/data/drying';
import { productList } from '@/data/product';
import { orderList } from '@/data/order';
import styles from './index.module.scss';

const WorkshopPage: React.FC = () => {
  const producingCount = makingRecordList.filter(r => r.status !== 'done').length;
  const dryingCount = dryingRecordList.filter(r => r.status !== 'done').length;
  const stockCount = productList.reduce((sum, p) => sum + p.stock, 0);
  const activeOrders = orderList.filter(o => o.status !== 'done' && o.status !== 'shipped').length;

  const processSteps = [
    { key: 'recipe', name: '配方库', description: '松烟油烟古法秘方', color: '#5C3A28', bgColor: '#F0E6DA' },
    { key: 'smoke', name: '炼烟记录', description: '炼烟收烟工序管理', color: '#6B4C3B', bgColor: '#F5EDE6' },
    { key: 'making', name: '和料制墨', description: '胶料配比捶打成墨', color: '#7A5C3E', bgColor: '#FAF0E4' },
    { key: 'drying', name: '晾墨管理', description: '晾墨翻墨周期追踪', color: '#8B6F4E', bgColor: '#FFF5E8' },
    { key: 'product', name: '描金成品', description: '描金填彩墨锭档案', color: '#C4973B', bgColor: '#FFF8EB' },
    { key: 'order', name: '定制订单', description: '文房定制礼盒包装', color: '#4A6741', bgColor: '#EDF5EB' }
  ];

  const craftSteps = [
    { name: '炼烟', desc: '取黄山松枝或桐油灯盏，密闭炼烟室焚烧，烟上升凝于棚顶，扫取细烟为料' },
    { name: '和料', desc: '将烟料与牛皮胶、名贵香料按古方配比，入臼捣研万杵，使烟胶交融' },
    { name: '制墨', desc: '将和好之料入铁臼捶打数千杵，再入木模压制，成各种形制墨锭' },
    { name: '晾墨', desc: '脱模后入晾房，每日翻墨，阴干数月，使墨锭逐步脱水定型' },
    { name: '描金', desc: '墨锭晾干后，以金粉、彩料描绘纹饰图案，增添华美典雅之气' }
  ];

  const quickNavItems = [
    { icon: '📜', text: '配方', path: '/pages/recipe/index' },
    { icon: '🔥', text: '炼烟', path: '/pages/smoke/index' },
    { icon: '⚒️', text: '制墨', path: '/pages/making/index' },
    { icon: '🌬️', text: '晾墨', path: '/pages/drying/index' },
    { icon: '✨', text: '成品', path: '/pages/product/index' },
    { icon: '📋', text: '订单', path: '/pages/order/index' },
    { icon: '💰', text: '台账', path: '/pages/sales/index' },
    { icon: '🏛️', text: '工艺', path: '' }
  ];

  const handleNavClick = (path: string) => {
    if (!path) {
      Taro.showToast({ title: '工艺展示开发中', icon: 'none' });
      return;
    }
    Taro.navigateTo({ url: path });
  };

  const handleProcessClick = (key: string) => {
    const pathMap: Record<string, string> = {
      recipe: '/pages/recipe/index',
      smoke: '/pages/smoke/index',
      making: '/pages/making/index',
      drying: '/pages/drying/index',
      product: '/pages/product/index',
      order: '/pages/order/index'
    };
    const path = pathMap[key];
    if (path) {
      Taro.navigateTo({ url: path });
    }
  };

  return (
    <ScrollView scrollY className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.shopName}>徽墨制作坊</Text>
        <Text className={styles.shopSlogan}>千年徽墨 · 古法传承</Text>
      </View>

      <View className={styles.statRow}>
        <StatCard label="制墨中" value={producingCount} unit="批" color="#7A5C3E" />
        <StatCard label="晾墨中" value={dryingCount} unit="批" color="#8B6F4E" />
        <StatCard label="库存" value={stockCount} unit="锭" color="#C4973B" />
        <StatCard label="进行订单" value={activeOrders} unit="个" color="#4A6741" />
      </View>

      <View className={styles.section}>
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>制墨流程</Text>
        </View>
        <View className={styles.processGrid}>
          {processSteps.map(step => (
            <View className={styles.processItem} key={step.key}>
              <ProcessCard
                name={step.name}
                description={step.description}
                color={step.color}
                bgColor={step.bgColor}
                onClick={() => handleProcessClick(step.key)}
              />
            </View>
          ))}
        </View>
      </View>

      <View className={styles.craftCard}>
        <Text className={styles.craftTitle}>制墨工艺</Text>
        {craftSteps.map((step, index) => (
          <View className={styles.craftStep} key={index}>
            <View className={styles.stepDot} />
            <View className={styles.stepContent}>
              <Text className={styles.stepName}>{step.name}</Text>
              <Text className={styles.stepDesc}>{step.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      <View className={styles.quickNav}>
        <Text className={styles.navTitle}>快捷入口</Text>
        <View className={styles.navGrid}>
          {quickNavItems.map((item, index) => (
            <View
              className={styles.navItem}
              key={index}
              onClick={() => handleNavClick(item.path)}
            >
              <Text className={styles.navIcon}>{item.icon}</Text>
              <Text className={styles.navText}>{item.text}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default WorkshopPage;
