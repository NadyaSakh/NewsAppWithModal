import React from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import colors from "../../common/res/colors";
import dateFormater from "../../common/helpers/dateFormater";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import FastImage from "react-native-fast-image";
import NewsImg from "../../../assets/img/news.jpg";
import { closeModal, openModal } from "../../redux/actions/modal";

const { width } = Dimensions.get('window');

interface OwnProps {
  id: string;
}

const NewsListItemView = ({ id}: OwnProps): React.ReactElement => {
  const dispatch = useDispatch();

  const newsItem = useSelector(({ news: { newsWithIdList } }: RootState) =>
    newsWithIdList.find(innerItem => innerItem.id === id)
  );

  if (!newsItem) {
    return <></>;
  }

  const onPressNews = (): void => {
    dispatch(closeModal());
    dispatch(
      openModal({
        title: newsItem.title,
        description: newsItem.description,
        hasCloseButton: true
      })
    );

  };

  const date = dateFormater({ date: newsItem.publishedAt, toFormat: 'DD MMMM YYYY' });

  const renderImage = (): React.ReactElement => {
    if(newsItem.urlToImage !== null &&
      (newsItem.urlToImage.startsWith("https://")|| newsItem.urlToImage.startsWith("http://"))){
      return <FastImage
        source={{uri: newsItem.urlToImage}}
        style={styles.image}
        resizeMode="cover"
      />
    }
    else {
      return <FastImage
        source={NewsImg}
        style={styles.image}
        resizeMode="cover"
      />
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressNews}>
      {renderImage()}
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title} numberOfLines={0}>
        {newsItem.title}
      </Text>
    </TouchableOpacity>
  )
};

export default NewsListItemView;

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: colors.white,
    marginBottom: 10,
    overflow: 'visible'
  },
  date: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.dark,
    opacity: 0.7,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 8,
    marginLeft: 12
  },
  image: {
    width: width - 60,
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignSelf: 'center'
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.dark,
    fontWeight: 'bold',
    marginTop: 12,
    marginHorizontal: 12,
    marginBottom: 12
  },
  backDropView: {
    position: 'absolute',
    top: 220 - 89
  }
});
