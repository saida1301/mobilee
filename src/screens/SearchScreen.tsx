import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = () => {
    
    setRecentSearches([searchQuery, ...recentSearches.slice(0, 4)]);
 
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
      <TouchableOpacity>
        <Icon name="search" size={20} color="#999" style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for jobs..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          placeholderTextColor="#000"
        />
      
      </View>
      {recentSearches.length > 0 && (
        <View style={styles.recentSearches}>
          <Text style={styles.recentSearchesTitle}>Recent Searches:</Text>
          {recentSearches.map((search, index) => (
            <TouchableOpacity key={index} onPress={() => setSearchQuery(search)} style={styles.recent}>
              <Text style={styles.recentSearch}>{search}</Text>
            <TouchableOpacity onPress={}>
            <Icon name="search" size={20} color="#999" style={styles.icon} />
            </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop:102
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchButton: {
    backgroundColor: '#8843E1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  recentSearches: {
    marginTop: 36,
    paddingHorizontal:20
  },
  recentSearchesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recentSearch: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  icon: {
    marginLeft: 20,
 
  },
  recent:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});

export default SearchScreen;