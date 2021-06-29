import React, { ReactElement, useEffect, useRef } from 'react'
import {
  Animated,
  Dimensions,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/types'
import { CloseVector } from '../../res'
import colors from "../res/colors";
import { closeModal } from "../../redux/actions/modal";

const { width, height } = Dimensions.get('window')

const ModalComponent = (): ReactElement => {
  const {
    isVisible,
    modalItem
  } = useSelector(({ modal }: RootState) => ({ ...modal }))

  const dispatch = useDispatch()

  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isVisible ? 1 : 0,
      useNativeDriver: true,
      duration: 500,
      easing: Easing.linear
    }).start()
  }, [isVisible])

  if (!modalItem) {
    return <></>
  }

  const {
    title,
    description,
    isButtonVisible,
    onPress,
    butonText,
    hasCloseButton,
    onModalCloseEnd,
    isFooterVisible,
    hasDennyButton,
    onPressDenny
  } = modalItem

  const closeModalComponent = (): void => {
    dispatch(closeModal());

    if (onModalCloseEnd) {
      setTimeout(() => {
        onModalCloseEnd()
      }, 10)
    }
  }

  return (
    <Modal
      onBackdropPress={closeModalComponent}
      onBackButtonPress={closeModalComponent}
      isVisible={isVisible}
      animationOut='fadeOut'
      animationIn='fadeIn'
      backdropOpacity={0.2}
      useNativeDriver
      animationInTiming={1000}
      animationOutTiming={1000}
      hideModalContentWhileAnimating
      backdropColor={colors.dark}>
      <View
        style={[
          styles.container, { bottom: isFooterVisible ? 30 : 84 }
        ]}>
        {hasCloseButton && (
          <TouchableOpacity style={styles.closeButton} onPress={closeModalComponent}>
            <CloseVector mainColor={colors.black} />
          </TouchableOpacity>
        )}
        {title !== '' && <Text style={styles.title} allowFontScaling={false}>{title}</Text>}
        {description && (
          <ScrollView>
            <Text
              style={title !== '' ? styles.desk : [styles.desk, { marginTop: 0 }]}
              allowFontScaling={false}
            >
              {description}
            </Text>
          </ScrollView>
        )}

        {isButtonVisible && (
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText} allowFontScaling={false}>{butonText}</Text>
          </TouchableOpacity>
        )}
        {hasDennyButton && (
          <Text onPress={onPressDenny} style={styles.dennyText} allowFontScaling={false}>
            Отменить
          </Text>
        )}
      </View>
    </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: `${colors.dark}70`,
    position: 'absolute',
    top: 0,
    bottom: 0,
    alignSelf: 'center',
    width,
    height
  },
  container: {
    backgroundColor: colors.white,
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: width - 58,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 84,
    maxHeight: height - 160
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.black,
    fontWeight: 'bold'
  },
  desk: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    color: colors.black,
    marginTop: 20
  },
  button: {
    width: width - 60 - 150,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 25
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dennyText: {
    marginTop: 37,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.black
  }
})
