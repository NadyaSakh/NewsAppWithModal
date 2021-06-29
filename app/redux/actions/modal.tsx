import { Action, AnyAction, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ModalItem } from '../../common/types'
import { AppThunk, RootState } from '../types'
import { CLOSE_MODAL, OPEN_MODAL } from "../actionTypes/modal";

interface IOpenModalAction {
  type: typeof OPEN_MODAL
  modalItem: ModalItem
}

interface ICloseModalAction {
  type: typeof CLOSE_MODAL
}

export const openModalAction = (modalItem: ModalItem): IOpenModalAction => ({
  type: 'OPEN_MODAL',
  modalItem
})

const closeModalAction = (): ICloseModalAction => ({
  type: 'CLOSE_MODAL'
})

export const openModal = (modalItem: ModalItem): AppThunk => (
  dispatch: Dispatch<AnyAction>
) => {
  return dispatch(openModalAction(modalItem))
}

export const closeModal = (): ThunkAction<void, RootState, unknown, Action> => (
  dispatch: Dispatch<AnyAction>
) => {
  return dispatch(closeModalAction())
}

export type ModalActionType = IOpenModalAction | ICloseModalAction
