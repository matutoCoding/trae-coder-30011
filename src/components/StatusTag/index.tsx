import React from 'react';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.module.scss';

interface StatusTagProps {
  text: string;
  type?: 'default' | 'success' | 'warning' | 'error' | 'gold' | 'info';
}

const typeColorMap: Record<string, { color: string; bgColor: string }> = {
  default: { color: '#5C4A3A', bgColor: '#EDE7DF' },
  success: { color: '#00b42a', bgColor: '#E8F7EB' },
  warning: { color: '#ff7d00', bgColor: '#FFF3E8' },
  error: { color: '#f53f3f', bgColor: '#FFECE8' },
  gold: { color: '#C4973B', bgColor: '#FFF8EB' },
  info: { color: '#3D5A80', bgColor: '#E8F0F8' }
};

const StatusTag: React.FC<StatusTagProps> = ({ text, type = 'default' }) => {
  const colorConfig = typeColorMap[type] || typeColorMap.default;

  return (
    <View
      className={classnames(styles.tag)}
      style={{ color: colorConfig.color, backgroundColor: colorConfig.bgColor }}
    >
      <Text className={styles.text} style={{ color: colorConfig.color }}>{text}</Text>
    </View>
  );
};

export default StatusTag;
