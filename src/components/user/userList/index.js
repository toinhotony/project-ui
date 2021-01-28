import { connect } from "../../../../node_modules/react-redux";
import UserList from "./userList";
import {selectUser, deleteUser} from "../userService/actions";
import {bindActionCreators} from "../../../../node_modules/redux";

const mapStateToProps = state => ({list: state.reducerUsers.list});
const mapDispatchToProps = dispatch => bindActionCreators({selectUser, deleteUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList)