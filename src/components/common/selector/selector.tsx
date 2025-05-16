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

const color = '#454545';

function printIcon(icon: string) {
  return icon === 'AttachMoneyIcon' ? (
    <AttachMoneyIcon color="inherit" sx={{ color: color }} />
  ) : (
    <LanguageIcon color="inherit" sx={{ color: color }} />
  );
}

export default function Selector({ icon, options, optionSelected, selectorName, setOptionSelected }: SelectorsType) {
  const handleChange = (event: SelectChangeEvent) => {
    setOptionSelected(event.target.value);
  };
  return (
    <FormControl variant="standard" sx={{ flexDirection: 'row', alignItems: 'center', marginRight: '10px' }}>
      {icon && printIcon(icon)}
      <Select
        data-testid={selectorName}
        onChange={handleChange}
        sx={{ marginLeft: icon ? '10px' : '0', color: color }}
        value={optionSelected}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{ color: color }}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
