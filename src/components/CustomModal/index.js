import { Modal } from 'react-native';

import { ModalBody, Overlay } from './styles';

export default function CustomModal({visible, onClose, children}){

    return(
        <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Overlay>
        <ModalBody>

          {children}
          
          <Actions>
            <Button primary={false} onPress={onClose}>Cancelar</Button>
            <Button onPress={onConfirm}>Confirmar</Button>
          </Actions>
        </ModalBody>
      </Overlay>
    </Modal >
    );
}