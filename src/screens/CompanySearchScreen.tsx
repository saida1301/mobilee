import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import SearchInput from '../components/Input/SearchInput';
import companies from '../services/data/companies.json';
import vacancies from '../services/data/vacancies.json';

const CompanySearchScreen = () => {
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query: string) => {
    if (query) {
      const filteredCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(query.toLowerCase())
      );
      const filteredVacancies = vacancies.filter((vacancy) =>
        vacancy.position.toLowerCase().includes(query.toLowerCase())
      );
      const filteredData = [...filteredCompanies, ...filteredVacancies];
      setFilteredData(filteredData);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <View>
      <SearchInput onSearch={handleSearch} />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            {item.position && <Text>{item.position}</Text>}
            {item.name && <Text>{item.name}</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default CompanySearchScreen;
