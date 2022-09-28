import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export interface IProps {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  options: [string, string][];
  label: string;
  error?: boolean;
  helperText?: string;
}

export const SelectInput = ({
  value,
  options,
  label,
  handleChange,
  error,
  helperText,
}: IProps) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} error={error}>
      <InputLabel>{label}</InputLabel>
      <Select
        id="demo-simple-select-error"
        value={value}
        label={label}
        onChange={(e) => handleChange}
      >
        {options.map(([k, v]) => (
          <option key={k} value={v}>
            {v}
          </option>
        ))}
      </Select>
      {helperText?.trim() && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
