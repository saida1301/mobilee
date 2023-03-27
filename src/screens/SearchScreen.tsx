import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import SearchInput from '../components/Input/SearchInput';
import companies from '../services/data/companies.json';
import vacancies from '../services/data/vacancies.json';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVacancies, setFilteredVacancies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = (query: string) => {
    const filteredVacancies = vacancies.filter((vacancy) =>
      vacancy.position.toLowerCase().includes(query.toLowerCase())
    );
    const filteredCompanies = companies.filter((company) =>
      company.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVacancies(filteredVacancies);
    setFilteredCompanies(filteredCompanies);
    setSearchHistory([...searchHistory, query]);
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  return (
    <View>
      <SearchInput onSearch={handleSearch} />
      <FlatList
        data={filteredVacancies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.position}</Text>
            <Text>{item.company}</Text>
          </View>
        )}
      />
      <FlatList
        data={filteredCompanies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <View>
        <Text>Recent Searches:</Text>
        <FlatList
          data={searchHistory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
        <TouchableOpacity onPress={clearSearchHistory}>
          <Text>Clear Search History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;
