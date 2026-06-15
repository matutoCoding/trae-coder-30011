import React, { useState } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import classnames from 'classnames';
import { recipeList } from '@/data/recipe';
import styles from './index.module.scss';

const FILTERS = ['全部', '油烟', '松烟'];

const RecipePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('全部');

  const filteredRecipes = activeFilter === '全部'
    ? recipeList
    : recipeList.filter(r =>
        activeFilter === '油烟' ? r.type === 'oil' : r.type === 'pine'
      );

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

      {filteredRecipes.map(recipe => (
        <View className={styles.recipeCard} key={recipe.id}>
          <View className={styles.recipeHeader}>
            <Text className={styles.recipeName}>{recipe.name}</Text>
            <Text
              className={classnames(
                styles.recipeTypeTag,
                recipe.type === 'oil' ? styles.typeOil : styles.typePine
              )}
            >
              {recipe.typeName}
            </Text>
          </View>

          <View className={styles.recipeInfo}>
            <Text className={styles.infoItem}>配比: {recipe.ratio}</Text>
            <Text className={styles.infoItem}>料重: {recipe.weight}</Text>
            <Text className={styles.infoItem}>适用: {recipe.suitableFor}</Text>
          </View>

          <View className={styles.ingredientsWrap}>
            <Text className={styles.ingredientsLabel}>原料组成</Text>
            <View className={styles.ingredientsList}>
              {recipe.ingredients.map((ing, idx) => (
                <Text className={styles.ingredientTag} key={idx}>{ing}</Text>
              ))}
            </View>
          </View>

          <View className={styles.recipeNote}>
            <Text className={styles.noteText}>{recipe.note}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default RecipePage;
