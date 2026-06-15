import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import styles from './index.module.scss';

const craftSteps = [
  {
    name: '炼烟',
    desc: '取黄山松枝或桐油灯盏，密闭炼烟室焚烧。烟上升凝于棚顶，以鹅翎轻扫收烟，取上层细烟为上等墨料，下层粗烟为普通墨料。',
    details: [
      { label: '松烟炼法', value: '取皖南老松，截段入窑，密闭焚烧' },
      { label: '油烟炼法', value: '桐油灯盏百余盏，覆碗收烟' },
      { label: '收烟时机', value: '焚烧12小时后扫取棚顶凝烟' },
      { label: '品质鉴别', value: '上层细烟为上等，色青黑质轻' }
    ]
  },
  {
    name: '和料',
    desc: '将烟料与牛皮胶或鱼鳔胶按古方配比，加入冰片、麝香、金箔等名贵香料，入臼捣研万杵以上，使烟与胶充分交融成团。',
    details: [
      { label: '胶料选择', value: '牛皮胶为常用，鱼鳔胶为上品' },
      { label: '配比原则', value: '烟胶比例因方而异，一般3:1至4:1' },
      { label: '和料温度', value: '40-60°C温水化胶，渐次加烟' },
      { label: '成料标准', value: '烟胶交融，手感细腻无颗粒' }
    ]
  },
  {
    name: '制墨',
    desc: '将和好之料入铁臼捶打数千杵至细腻无气泡，再入木模压制，成各种形制墨锭。脱模后需轻敲模具，避免损伤墨体。',
    details: [
      { label: '捶打工具', value: '铁臼木杵，手工捶打' },
      { label: '捶打次数', value: '至少2000杵，极品万杵以上' },
      { label: '模具类型', value: '长方、圆形、方形、椭圆等' },
      { label: '品检标准', value: '棱角分明、无裂纹气泡' }
    ]
  },
  {
    name: '晾墨',
    desc: '脱模后入晾房阴干，根据墨锭大小不同，晾制周期从一个月到半年不等。期间需每日翻墨，使墨锭均匀脱水，防止开裂变形。',
    details: [
      { label: '晾制周期', value: '小墨30天，大墨可达180天' },
      { label: '翻墨频率', value: '初期每3天翻一次，后期每周翻' },
      { label: '环境要求', value: '温度20-25°C，湿度55-65%' },
      { label: '翻墨目的', value: '均匀脱水，防止翘曲开裂' }
    ]
  },
  {
    name: '描金',
    desc: '墨锭晾干后，以金粉调胶，用细笔在墨锭表面描绘纹饰图案。常见纹样有龙凤呈祥、山水人物、花鸟虫鱼等，一笔一划皆需精心细作。',
    details: [
      { label: '描金材料', value: '金粉调胶，矿物颜料填彩' },
      { label: '常见纹样', value: '龙凤、山水、梅兰竹菊' },
      { label: '工艺要求', value: '线条流畅、金粉均匀、色彩鲜明' },
      { label: '成品检验', value: '纹饰清晰、无溢色、无脱落' }
    ]
  }
];

const CraftPage: React.FC = () => {
  return (
    <ScrollView scrollY className={styles.container}>
      <View className={styles.hero}>
        <Text className={styles.heroTitle}>徽墨制作工艺</Text>
        <Text className={styles.heroDesc}>
          徽墨制作历史悠久，始于南唐，兴于明清。每锭徽墨须经炼烟、和料、制墨、晾墨、描金五道核心工序，历时数月方成。
        </Text>
      </View>

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>五道核心工序</Text>
        {craftSteps.map((step, index) => (
          <View className={styles.stepCard} key={index}>
            <View className={styles.stepHeader}>
              <View className={styles.stepIndex}>
                <Text className={styles.stepIndexText}>{index + 1}</Text>
              </View>
              <Text className={styles.stepName}>{step.name}</Text>
            </View>
            <Text className={styles.stepDesc}>{step.desc}</Text>
            <View className={styles.stepDetails}>
              {step.details.map((detail, dIdx) => (
                <View className={styles.detailRow} key={dIdx}>
                  <Text className={styles.detailLabel}>{detail.label}</Text>
                  <Text className={styles.detailValue}>{detail.value}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View className={styles.timeline}>
        <Text className={styles.timelineTitle}>工艺流程总览</Text>
        {craftSteps.map((step, index) => (
          <View className={styles.timelineItem} key={index}>
            <View className={styles.timelineLine}>
              <View className={styles.timelineDot} />
              {index < craftSteps.length - 1 && <View className={styles.timelineConnector} />}
            </View>
            <View className={styles.timelineContent}>
              <Text className={styles.timelineName}>{step.name}</Text>
              <Text className={styles.timelineDesc}>
                {step.desc.substring(0, 30)}...
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CraftPage;
