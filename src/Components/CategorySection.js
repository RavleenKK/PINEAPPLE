import React from "react";
import styles from "./CategorySection.module.css";
import pic from "../images/about5.jpg";
import pic2 from "../images/pic2.jpg";
import FadeInComponent from './Fade';

const categories = [
  {
    title: "Men's",
    imageUrl: pic,
   
  },
  {
    title: "Women's",
    imageUrl: pic2,
    
  },
];

const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.headingCategory}>Category</h2>
      <p className={styles.categoryDescription}>
  Discover an exclusive selection of clothing categories tailored to fit every style and occasion. Whether you're looking for casual wear or the latest trends, our collection has something for everyone. 
</p>
    <FadeInComponent>
    <div className={styles.CardsContainer}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <img
              src={category.imageUrl}
              alt={category.title}
              className={styles.categoryImage}
            />
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            
          </div>
        ))}
      </div>
      </FadeInComponent>
    </section>
  );
};

export default CategorySection;
