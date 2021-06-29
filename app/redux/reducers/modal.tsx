import { ModalItem } from '../../common/types'
import { ModalActionType } from '../actions/modal'
import { CLOSE_MODAL, OPEN_MODAL } from "../actionTypes/modal";

export type ModalState = {
  isVisible: boolean
  modalItem?: ModalItem
}

const initialState: ModalState = {
  isVisible: false,
  modalItem: undefined
}

export default (state = initialState, action: ModalActionType): ModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isVisible: true,
        modalItem: action.modalItem
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isVisible: false,
        modalItem: undefined
      }
    default:
      return state
  }
}
