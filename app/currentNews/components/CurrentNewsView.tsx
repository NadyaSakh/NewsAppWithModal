import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import colors from '../../common/res/colors';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import dateFormater from '../../common/helpers/dateFormater';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import FastImage from 'react-native-fast-image';
import NewsImg from '../../../assets/img/news.jpg';

const { width } = Dimensions.get('window');

const CurrentNewsView = (): React.ReactElement => {
  const route = useRoute<RouteProp<RootStackParamList, 'CurrentNews'>>();

  const { newsWithIdList } = useSelector(({ news }: RootState) => news);

  const {
    params: { newsId }
  } = route;

  const currentNews = newsWithIdList.find(innerItem => innerItem.id === newsId);

  if (!currentNews) {
    return <></>;
  }

  const date = dateFormater({
    date: currentNews.publishedAt,
    toFormat: 'DD MMMM YYYY'
  });

  const renderImage = (): React.ReactElement => {
    if (currentNews.urlToImage !== null &&
      (currentNews.urlToImage.startsWith('https://') || currentNews.urlToImage.startsWith('http://'))) {
      return <FastImage
        source={{ uri: currentNews.urlToImage }}
        style={styles.image}
        resizeMode="cover"
      />;
    } else {
      return <FastImage
        source={NewsImg}
        style={styles.image}
        resizeMode="cover"
      />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.contentContainerStyle}>
        {renderImage()}
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title} numberOfLines={0}>
          {currentNews.title}
        </Text>
        <Text style={styles.desc} numberOfLines={0}>
          {currentNews.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurrentNewsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: colors.white
  },
  list: {
    width,
    marginTop: 25,
    backgroundColor: colors.white
  },
  contentContainerStyle: {
    paddingHorizontal: 30
  },
  image: {
    width: width - 60,
    alignSelf: 'center',
    height: 180,
    borderRadius: 4,
    overflow: 'hidden'
  },
  date: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.dark,
    opacity: 0.7,
    fontWeight: '500',
    marginTop: 12
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.dark,
    fontWeight: 'bold',
    marginTop: 8
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.dark,
    marginTop: 16
  },
  backDropView: {
    position: 'absolute',
    alignSelf: 'center',
    top: 220 - 89,
    borderRadius: 4,
    overflow: 'hidden'
  }
});
