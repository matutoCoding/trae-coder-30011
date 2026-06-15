import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import classnames from 'classnames';
import StatCard from '@/components/StatCard';
import { dryingRecordList } from '@/data/drying';
import styles from './index.module.scss';

const DryingPage: React.FC = () => {
  const dryingCount = dryingRecordList.filter(r => r.status === 'drying').length;
  const turningCount = dryingRecordList.filter(r => r.status === 'turning').length;
  const doneCount = dryingRecordList.filter(r => r.status === 'done').length;

  const getStatusClass = (status: string) => {
    const map: Record<string, string> = {
      drying: styles.statusDrying,
      turning: styles.statusTurning,
      done: styles.statusDone
    };
    return map[status] || '';
  };

  const todayTurning = dryingRecordList.filter(r => r.status === 'turning');

  return (
    <ScrollView scrollY className={styles.container}>
      <View className={styles.summaryRow}>
        <StatCard label="晾制中" value={dryingCount} unit="批" color="#8B6F4E" />
        <StatCard label="今日翻墨" value={turningCount} unit="批" color="#C4973B" />
        <StatCard label="已完成" value={doneCount} unit="批" color="#00b42a" />
      </View>

      {todayTurning.length > 0 && (
        <View className={styles.alertBanner}>
          <Text className={styles.alertTitle}>今日翻墨提醒</Text>
          {todayTurning.map(item => (
            <Text className={styles.alertText} key={item.id}>
              {item.inkName}（批次{item.batchNo}）需翻墨
            </Text>
          ))}
        </View>
      )}

      {dryingRecordList.map(record => {
        const progressPercent = Math.round((record.currentDay / record.totalDays) * 100);
        return (
          <View className={styles.dryingCard} key={record.id}>
            <View className={styles.dryingHeader}>
              <Text className={styles.dryingName}>{record.inkName}</Text>
              <Text className={classnames(styles.statusTag, getStatusClass(record.status))}>
                {record.statusName}
              </Text>
            </View>

            <View className={styles.dryingInfo}>
              <Text className={styles.infoItem}>批次: {record.batchNo}</Text>
              <Text className={styles.infoItem}>开始: {record.startDate}</Text>
              <Text className={styles.infoItem}>已翻: {record.turnCount}次</Text>
            </View>

            <View className={styles.dryingProgress}>
              <View className={styles.progressHeader}>
                <Text className={styles.progressLabel}>晾制进度</Text>
                <Text className={styles.progressValue}>
                  第{record.currentDay}天 / 共{record.totalDays}天
                </Text>
              </View>
              <View className={styles.progressBar}>
                <View
                  className={styles.progressFill}
                  style={{ width: `${progressPercent}%` }}
                />
              </View>
            </View>

            <View className={styles.envInfo}>
              <View className={styles.envItem}>
                <Text className={styles.envLabel}>温度</Text>
                <Text className={styles.envValue}>{record.temperature}</Text>
              </View>
              <View className={styles.envItem}>
                <Text className={styles.envLabel}>湿度</Text>
                <Text className={styles.envValue}>{record.humidity}</Text>
              </View>
            </View>

            {record.status !== 'done' && (
              <View className={styles.nextTurn}>
                <Text className={styles.nextTurnLabel}>下次翻墨</Text>
                <Text className={styles.nextTurnDate}>{record.nextTurnDate}</Text>
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default DryingPage;
