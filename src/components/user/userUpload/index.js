import UserUpload from "./userUpload";
import { connect } from "../../../../node_modules/react-redux";
import {importFile} from "../../../service/userService/actions";
import {bindActionCreators} from "../../../../node_modules/redux";

const mapDispatchToProps = dispatch => bindActionCreators({importFile}, dispatch);

export default connect(null, mapDispatchToProps)(UserUpload)