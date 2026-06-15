import React, { useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import classnames from 'classnames';
import StatusTag from '@/components/StatusTag';
import { makingRecordList } from '@/data/making';
import styles from './index.module.scss';

const TABS = [
  { key: 'mixing', label: '和料' },
  { key: 'hammering', label: '捶打' },
  { key: 'molding', label: '压模' },
  { key: 'records', label: '全部记录' }
];

const MakingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('records');

  const getStatusType = (status: string): 'default' | 'warning' | 'gold' | 'success' => {
    const map: Record<string, 'default' | 'warning' | 'gold' | 'success'> = {
      mixing: 'warning',
      hammering: 'gold',
      molding: 'default',
      done: 'success'
    };
    return map[status] || 'default';
  };

  const getProgressPercent = (status: string): number => {
    const map: Record<string, number> = {
      mixing: 25,
      hammering: 55,
      molding: 80,
      done: 100
    };
    return map[status] || 0;
  };

  const filteredRecords = activeTab === 'records'
    ? makingRecordList
    : makingRecordList.filter(r => r.status === activeTab);

  return (
    <ScrollView scrollY className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.headerTitle}>和料制墨</Text>
        <Text className={styles.headerDesc}>胶料配比 · 捶打成型 · 模具压制</Text>
      </View>

      <View className={styles.tabs}>
        {TABS.map(tab => (
          <View
            key={tab.key}
            className={classnames(styles.tab, activeTab === tab.key && styles.tabActive)}
            onClick={() => setActiveTab(tab.key)}
          >
            <Text>{tab.label}</Text>
          </View>
        ))}
      </View>

      <View className={styles.tabContent}>
        {activeTab !== 'records' && (
          <View className={styles.stepSection}>
            <Text className={styles.stepTitle}>
              {activeTab === 'mixing' ? '胶料配比和料' : activeTab === 'hammering' ? '捶打成型' : '模具压制'}
            </Text>
            {activeTab === 'mixing' && (
              <View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>配比原则</Text>
                  <Text className={styles.formValue}>烟胶比例按配方严格执行</Text>
                </View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>和料温度</Text>
                  <Text className={styles.formValue}>40-60°C温水化胶</Text>
                </View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>搅拌方式</Text>
                  <Text className={styles.formValue}>先胶后烟，渐次加入</Text>
                </View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>成料标准</Text>
                  <Text className={styles.formValue}>烟胶交融，手感细腻</Text>
                </View>
              </View>
            )}
            {activeTab === 'hammering' && (
              <View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>捶打工具</Text>
                  <Text className={styles.formValue}>铁臼木杵</Text>
                </View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>捶打次数</Text>
                  <Text className={styles.formValue}>至少2000杵以上</Text>
                </View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>捶打标准</Text>
                  <Text className={styles.formValue}>墨胚细密无气泡</Text>
                </View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>检验方法</Text>
                  <Text className={styles.formValue}>切开无白点瑕疵</Text>
                </View>
              </View>
            )}
            {activeTab === 'molding' && (
              <View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>模具类型</Text>
                  <Text className={styles.formValue}>长方/圆形/方形/椭圆</Text>
                </View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>压模方式</Text>
                  <Text className={styles.formValue}>墨胚入模，杠杆加压</Text>
                </View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>脱模时机</Text>
                  <Text className={styles.formValue}>压制定型后轻敲脱模</Text>
                </View>
                <View className={styles.formRow}>
                  <Text className={styles.formLabel}>品检标准</Text>
                  <Text className={styles.formValue}>棱角分明，无裂纹气泡</Text>
                </View>
              </View>
            )}
          </View>
        )}

        <Text className={styles.stepTitle}>制作记录</Text>
        {filteredRecords.length === 0 && (
          <View style={{ textAlign: 'center', padding: '48rpx 0' }}>
            <Text style={{ color: '#8C7B6B', fontSize: '28rpx' }}>暂无记录</Text>
          </View>
        )}
      </View>

      {filteredRecords.map(record => (
        <View className={styles.recordCard} key={record.id}>
          <View className={styles.recordHeader}>
            <Text className={styles.recordName}>{record.recipeName}</Text>
            <StatusTag text={record.statusName} type={getStatusType(record.status)} />
          </View>
          <View className={styles.recordInfo}>
            <Text className={styles.recordInfoItem}>日期: {record.date}</Text>
            <Text className={styles.recordInfoItem}>胶比: {record.glueRatio}</Text>
            <Text className={styles.recordInfoItem}>料重: {record.mixWeight}</Text>
          </View>
          <View className={styles.recordInfo}>
            <Text className={styles.recordInfoItem}>捶打: {record.hammerCount}杵</Text>
            <Text className={styles.recordInfoItem}>模具: {record.moldName}</Text>
            <Text className={styles.recordInfoItem}>产量: {record.inkCount}锭</Text>
          </View>
          {record.status !== 'done' && (
            <View>
              <View className={styles.progressBar}>
                <View
                  className={styles.progressFill}
                  style={{ width: `${getProgressPercent(record.status)}%` }}
                />
              </View>
              <Text className={styles.progressLabel}>
                进度 {getProgressPercent(record.status)}%
              </Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default MakingPage;
