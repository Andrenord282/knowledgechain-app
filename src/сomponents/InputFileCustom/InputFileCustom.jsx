//-----style-----//
import './InputFileCustom.scss';

const InputFileCustom = (props) => {
	const { refInputFile } = props;
	return <input ref={refInputFile} type="file" id="EditorNewPostAddImage" className="input-file-custom" />;
};

export default InputFileCustom;
