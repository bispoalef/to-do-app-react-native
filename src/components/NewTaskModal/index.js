import CustomModal from "../CustomModal";
import { Header } from "./styles";

export default function NewTaskModal({visible, onclose}){

    return(
        <CustomModal>
            visible={visible}
            onClose={onclose}

            <Header>
                <Text height="600">Adicionar tarefa</Text>
            </Header>
        </CustomModal>
    );
}