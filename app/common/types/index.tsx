import { ReactElement } from "react";

export type Error = {
  status: string;
  code: string;
  message: string;
};

export type ModalItem = {
  isButtonVisible?: boolean
  butonText?: string
  onPress?: () => void
  title: string
  description?: string | ReactElement
  hasCloseButton?: boolean
  onModalCloseEnd?: () => void
  isFooterVisible?: boolean
  hasDennyButton?: boolean
  onPressDenny?: () => void
}