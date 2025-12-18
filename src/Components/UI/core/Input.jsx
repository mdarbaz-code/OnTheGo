
import { Input } from 'antd';

const InputElement = (size='', ...args) => {
    return <Input size={size} {...args} />;
}

export default InputElement;