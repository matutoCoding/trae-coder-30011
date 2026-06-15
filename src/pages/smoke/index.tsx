import React, { useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import classnames from 'classnames';
import StatCard from '@/components/StatCard';
import { smokeRecordList } from '@/data/smoke';
import styles from './index.module.scss';

const FILTERS = ['全部', '油烟', '松烟'];

const SmokePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('全部');

  const filteredRecords = activeFilter === '全部'
    ? smokeRecordList
    : smokeRecordList.filter(r =>
        activeFilter === '油烟' ? r.type === 'oil' : r.type === 'pine'
      );

  const totalSoot = smokeRecordList.length;
  const excellentCount = smokeRecordList.filter(r => r.quality === 'excellent').length;

  const getQualityClass = (quality: string) => {
    const map: Record<string, string> = {
      excellent: styles.qualityExcellent,
      good: styles.qualityGood,
      normal: styles.qualityNormal
    };
    return map[quality] || '';
  };

  return (
    <ScrollView scrollY className={styles.container}>
      <View className={styles.filterRow}>
        {FILTERS.map(f => (
          <View
            key={f}
            className={classnames(styles.filterTag, activeFilter === f && styles.filterActive)}
            onClick={() => setActiveFilter(f)}
          >
            <Text>{f}</Text>
          </View>
        ))}
      </View>

      <View className={styles.summaryRow}>
        <StatCard label="总炼烟批数" value={totalSoot} unit="批" />
        <StatCard label="上等烟比例" value={Math.round(excellentCount / totalSoot * 100)} unit="%" color="#C4973B" />
      </View>

      {filteredRecords.map(record => (
        <View className={styles.smokeCard} key={record.id}>
          <View className={styles.smokeHeader}>
            <Text className={styles.smokeDate}>{record.date}</Text>
            <Text className={classnames(styles.qualityTag, getQualityClass(record.quality))}>
              {record.typeName} · {record.qualityName}
            </Text>
          </View>

          <View className={styles.smokeInfo}>
            <Text className={styles.infoItem}>窑号: {record.furnaceNo}</Text>
            <Text className={styles.infoItem}>时间: {record.startTime}-{record.endTime}</Text>
            <Text className={styles.infoItem}>收烟: {record.sootWeight}</Text>
            <Text className={styles.infoItem}>操作: {record.operator}</Text>
          </View>

          <View className={styles.smokeRemark}>
            <Text className={styles.remarkText}>{record.remark}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default SmokePage;
