import Message from "./message";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { closeMessage } from "../../service/messageService/actions";

const mapStateToProps = state => ({
    messageText : state.reducerMessage.messageText,
    openDialog : state.reducerMessage.openDialog,
    severity : state.reducerMessage.severity});

const mapDispatchToProps = dispatch => bindActionCreators({closeMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Message)