// Function to fetch collection types from the first API endpoint
async function fetchCollectionTypes() {
    try {
      const response = await fetch('../data/collectiontype.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching collection types:', error);
      throw error;
    }
  }
  
  // Function to fetch articles for a specific collection ID
  async function fetchArticlesForCollection(collectionId) {
    try {
      const response = await fetch(`../data/collection/${collectionId}/collection.json`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  }
  
  // Export functions to be used in other files
  export { fetchCollectionTypes, fetchArticlesForCollection };  