import { toast } from "react-hot-toast";

const ToastComponent = (props) => {
    const { textData, color = "rgb(239 68 68)" } = props;
    toast(
        (t) => (
            <div>
                <p className="text-white">{textData}</p>
            </div>
        ),
        {
            style: {
                background: color,
            },
        }
    );
};

export default ToastComponent;
