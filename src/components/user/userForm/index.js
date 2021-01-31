import UserForm from "./userForm";
import {connect} from "../../../../node_modules/react-redux";
import { bindActionCreators } from "../../../../node_modules/redux";
import { changeName, changeCpf, findAll, save, update, clearForm } from "../../../service/userService/actions";

const mapStateToProps = state => ({user: state.reducerUsers.user,
                                    messageText : state.reducerMessage.messageText,
                                    openDialog : state.reducerMessage.openDialog,
                                    severity : state.reducerMessage.severity});
const mapDispatchToProps = dispatch => bindActionCreators({changeName, changeCpf, findAll, save, update, clearForm}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)