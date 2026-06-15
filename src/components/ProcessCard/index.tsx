import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

interface ProcessCardProps {
  name: string;
  description: string;
  color: string;
  bgColor: string;
  onClick?: () => void;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ name, description, color, bgColor, onClick }) => {
  return (
    <View className={styles.card} style={{ background: bgColor }} onClick={onClick}>
      <Text className={styles.name} style={{ color }}>{name}</Text>
      <Text className={styles.desc}>{description}</Text>
    </View>
  );
};

export default ProcessCard;
