import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text, TextInput, TouchableOpacity, View
} from "react-native";
import colors from "../../common/res/colors";
import { NewsItemWithId } from "../types";
import NewsListItemView from "./NewsListItemView";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { CloseVector } from "../../res";
import ModalComponent from "../../common/components/ModalComponent";

const { width } = Dimensions.get('window');

interface OwnProps {
  onRefresh: () => void;
  onEndReached: () => void;
  refreshing: boolean;
  onSearchPressed: (searchText: string) => void;
  onClosePressed: () => void;
}

const renderItem = ({ item }: ListRenderItemInfo<NewsItemWithId>): React.ReactElement => {
  return <NewsListItemView id={item.id} />;
};

const keyExtractor = (item: NewsItemWithId): string => `${item.id}`;

const NewsListView = ({
  onRefresh,
  onEndReached,
  refreshing,
  onSearchPressed,
  onClosePressed
}: OwnProps): React.ReactElement => {
  const { newsWithIdList } = useSelector(({ news }: RootState) => news);

  const [searchText, setSearchText] = useState('');

  const onChangeSearchText = (searchText: string): void => {
    setSearchText(searchText);
  };

  const onPressLocal = (): void => {
    onSearchPressed(searchText);
  };

  const onClosePressedLocal = (): void => {
    setSearchText('');
    onClosePressed();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ModalComponent />
      <Text style={styles.title}>Новости</Text>
      <View style={styles.searchContainer}>
        <TextInput
          value={searchText}
          style={styles.input}
          placeholderTextColor={`${colors.dark}40`}
          placeholder="Введите название новости"
          onChangeText={onChangeSearchText}
        />
        <TouchableOpacity style={styles.closeButton} onPress={onClosePressedLocal}>
          <CloseVector />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton} onPress={onPressLocal}>
          <Text style={styles.searchText}>Поиск</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={newsWithIdList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
      />
    </SafeAreaView>
  );
};

export default NewsListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.lightGray
  },
  closeButton: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    right: 60,
    top: 10
  },
  searchContainer: {
    flexDirection: 'row',
    width: width - 40,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    height: 48,
    marginBottom: 20
  },
  searchButton: {
    width: 55,
    height: 40,
    backgroundColor: colors.blue,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  searchText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700'
  },
  input: {
    width: (width - 100),
    height: 48,
    paddingLeft: 13,
    fontSize: 14,
    color: colors.dark,
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: `${colors.dark}10`,
    borderRadius: 4,
    marginBottom: 25,
    flexWrap: 'wrap'
  },
  list: {
    width
  },
  title: {
    fontSize: 30,
    backgroundColor: 'transparent',
    fontWeight: '700',
    color: colors.black,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 30
  }
});
