import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker/generateRangePicker';

const RangePicker = generatePicker<Date>(dateFnsGenerateConfig);

export default RangePicker;
