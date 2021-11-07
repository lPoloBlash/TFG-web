import * as React from 'react';
import { Searchbar } from 'react-native-paper';

export function MyComponent() {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={setSearchQuery}
        />
    );

};

