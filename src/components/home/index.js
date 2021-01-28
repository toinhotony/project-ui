import {connect} from "react-redux";
import Home from "./home";
import { bindActionCreators } from "redux";
import { changeName, changeCpf, findAll, save, update } from "../../userService/actions";

const mapStateToProps = state => ({user: state.reducerUsers.user});
const mapDispatchToProps = dispatch => bindActionCreators({changeName, changeCpf, findAll, save, update}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)