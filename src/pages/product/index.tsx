import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import classnames from 'classnames';
import { productList } from '@/data/product';
import styles from './index.module.scss';

const FILTERS = ['全部', '油烟墨', '松烟墨'];

const ProductPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('全部');

  const filteredProducts = activeFilter === '全部'
    ? productList
    : productList.filter(p => p.type === activeFilter);

  return (
    <ScrollView scrollY className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.headerTitle}>描金成品</Text>
        <Text className={styles.headerDesc}>描金填彩 · 墨锭档案</Text>
      </View>

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

      <View className={styles.section}>
        <Text className={styles.sectionTitle}>墨锭成品档案</Text>
        {filteredProducts.map(product => (
          <View className={styles.productCard} key={product.id}>
            <Image
              className={styles.productImage}
              src={product.image}
              mode="aspectFill"
            />
            <View className={styles.productInfo}>
              <View>
                <Text className={styles.productName}>{product.name}</Text>
                <Text className={styles.productType}>{product.type}</Text>
              </View>
              <View className={styles.productDetail}>
                <Text className={styles.detailItem}>规格: {product.weight}</Text>
                <Text className={styles.detailItem}>描金: {product.gildingType}</Text>
              </View>
              <View className={styles.productBottom}>
                <Text className={styles.productPrice}>{product.price}</Text>
                <Text className={styles.productStock}>库存: {product.stock}锭</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View className={styles.gildingSection}>
        <Text className={styles.sectionTitle}>描金工艺</Text>
        <View className={styles.gildingCard}>
          <Text className={styles.gildingTitle}>描金</Text>
          <Text className={styles.gildingDesc}>
            以金粉调胶，用细笔在墨锭表面描绘纹饰。常见纹样有龙凤呈祥、山水人物、花鸟虫鱼等，一笔一划皆需精心细作。
          </Text>
        </View>
        <View className={styles.gildingCard}>
          <Text className={styles.gildingTitle}>填彩</Text>
          <Text className={styles.gildingDesc}>
            在描金纹饰的基础上，以矿物颜料填色，使图案色彩斑斓。朱砂红、石青蓝、石绿绿等传统矿物色经久不褪。
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductPage;
