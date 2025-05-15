import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import LanguageIcon from '@mui/icons-material/Language';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface SelectorsType {
  icon?: string;
  options: Array<{
    label: string;
    value: string;
    icon?: string;
  }>;
  optionSelected: string;
  selectorName: string;
  setOptionSelected: (value: string) => void;
}

function printIcon(icon: string) {
  return icon === 'AttachMoneyIcon' ? <AttachMoneyIcon /> : <LanguageIcon />;
}

export default function Selector({ icon, options, optionSelected, selectorName, setOptionSelected }: SelectorsType) {
  const handleChange = (event: SelectChangeEvent) => {
    setOptionSelected(event.target.value);
  };
  return (
    <FormControl variant="standard" sx={{ flexDirection: 'row', alignItems: 'center', marginRight: '10px' }}>
      {icon && printIcon(icon)}
      <Select id={selectorName} value={optionSelected} onChange={handleChange} sx={{ marginLeft: icon ? '10px' : '0' }}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
