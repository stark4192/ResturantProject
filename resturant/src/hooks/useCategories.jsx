import { useEffect } from "react";

const useCategories = ()=>{
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('http://localhost:3000/restaurant');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
          console.error(response);
        }
        const data = await response.json();
        if (
          data.menu.categories
        ) {
          const itemsWithCategory = data.menu.categories.reduce(
            (allItems, category) => {
              if (category.items) {
                const itemsWithCategoryName = category.items.map((item) => ({
                  categoryName: category.name,
                  ...item,
                }));
                return [...allItems, ...itemsWithCategoryName];
              }
              return allItems;
            },
            []
          );
          setMenus(itemsWithCategory);
          setLoading(false); 
        } else {
          setError('Data structure is invalid'); 
        }
      } catch (error) {
        setError('Error fetching menu data'); 
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenuData();
  }, []); 
  console.log(category);
  return { category, loading, error }; 
};

export default useCategories