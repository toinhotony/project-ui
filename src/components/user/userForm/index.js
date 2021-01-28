import UserForm from "./userForm";
import {connect} from "../../../../node_modules/react-redux";
import { bindActionCreators } from "../../../../node_modules/redux";
import { changeName, changeCpf, findAll, save, update, clearForm } from "../userService/actions";

const mapStateToProps = state => ({user: state.reducerUsers.user});
const mapDispatchToProps = dispatch => bindActionCreators({changeName, changeCpf, findAll, save, update, clearForm}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)