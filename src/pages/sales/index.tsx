import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import { salesRecordList } from '@/data/sales';
import styles from './index.module.scss';

const SalesPage: React.FC = () => {
  const totalAmount = salesRecordList.reduce((sum, r) => {
    const amount = parseInt(r.totalAmount.replace(/[¥,]/g, ''), 10);
    return sum + amount;
  }, 0);
  const totalQuantity = salesRecordList.reduce((sum, r) => sum + r.quantity, 0);
  const avgPrice = Math.round(totalAmount / totalQuantity);

  const craftSteps = [
    { name: '选烟', desc: '精选上等松烟或油烟，筛去杂质，取细腻均匀之烟料' },
    { name: '和胶', desc: '以牛皮胶或鱼鳔胶温水化开，按秘方比例与烟料调和' },
    { name: '捣研', desc: '入石臼中捣研万杵以上，使烟与胶充分交融成团' },
    { name: '制胚', desc: '将墨料入铁臼捶打数千杵至细腻，再入木模压制成型' },
    { name: '晾干', desc: '脱模后入晾房阴干，期间反复翻墨，历时数月方可' },
    { name: '描金', desc: '晾干之墨锭以金粉、矿物颜料描金填彩，华美成器' }
  ];

  return (
    <ScrollView scrollY className={styles.container}>
      <View className={styles.summaryCard}>
        <Text className={styles.summaryTitle}>本月销售总额</Text>
        <Text className={styles.summaryAmount}>¥{totalAmount.toLocaleString()}</Text>
        <View className={styles.summaryRow}>
          <View className={styles.summaryItem}>
            <Text className={styles.summaryItemLabel}>销售数量</Text>
            <Text className={styles.summaryItemValue}>{totalQuantity}锭</Text>
          </View>
          <View className={styles.summaryItem}>
            <Text className={styles.summaryItemLabel}>均价</Text>
            <Text className={styles.summaryItemValue}>¥{avgPrice}/锭</Text>
          </View>
          <View className={styles.summaryItem}>
            <Text className={styles.summaryItemLabel}>交易笔数</Text>
            <Text className={styles.summaryItemValue}>{salesRecordList.length}笔</Text>
          </View>
        </View>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>销售明细</Text>
        {salesRecordList.map(record => (
          <View className={styles.salesCard} key={record.id}>
            <View className={styles.salesHeader}>
              <Text className={styles.salesProduct}>{record.productName}</Text>
              <Text className={styles.salesAmount}>{record.totalAmount}</Text>
            </View>
            <View className={styles.salesInfo}>
              <Text className={styles.infoItem}>日期: {record.date}</Text>
              <Text className={styles.infoItem}>数量: {record.quantity}锭</Text>
              <Text className={styles.infoItem}>单价: {record.unitPrice}</Text>
            </View>
            <View className={styles.salesInfo}>
              <Text className={styles.infoItem}>客户: {record.customer}</Text>
              <Text className={styles.infoItem}>支付: {record.paymentMethod}</Text>
            </View>
            <Text className={styles.channelTag}>{record.channel}</Text>
          </View>
        ))}
      </View>

      <View className={styles.craftSection}>
        <Text className={styles.sectionTitle}>制墨工艺展示</Text>
        <View className={styles.craftCard}>
          <Text className={styles.craftTitle}>徽墨六艺</Text>
          {craftSteps.map((step, index) => (
            <View className={styles.craftStep} key={index}>
              <View className={styles.craftStepDot} />
              <View className={styles.craftStepContent}>
                <Text className={styles.craftStepName}>{step.name}</Text>
                <Text className={styles.craftStepDesc}>{step.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default SalesPage;
