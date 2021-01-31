import { connect } from "../../../../node_modules/react-redux";
import UserList from "./userList";
import {selectUser, deleteUser, findAll} from "../../../service/userService/actions";
import {bindActionCreators} from "../../../../node_modules/redux";

const mapStateToProps = state => ({list: state.reducerUsers.list});
const mapDispatchToProps = dispatch => bindActionCreators({selectUser, deleteUser, findAll}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList)