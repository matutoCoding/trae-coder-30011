import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, unit, color }) => {
  return (
    <View className={styles.card}>
      <Text className={styles.label}>{label}</Text>
      <View className={styles.valueRow}>
        <Text className={styles.value} style={color ? { color } : undefined}>{value}</Text>
        {unit && <Text className={styles.unit}>{unit}</Text>}
      </View>
    </View>
  );
};

export default StatCard;
