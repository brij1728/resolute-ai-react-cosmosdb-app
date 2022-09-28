import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';

export interface IProps extends SelectProps {
  options: [string, string][];
  error?: boolean;
  helperText?: string;
}

export const SelectInput = ({
  options,
  error,
  label,
  helperText,
  fullWidth,
  ...props
}: IProps) => {
  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      error={error}
      fullWidth={fullWidth}
    >
      <InputLabel>{label}</InputLabel>
      <Select id="demo-simple-select-error" label={label} {...props}>
        {options.map(([k, v]) => (
          <MenuItem key={k} value={v}>
            {v}
          </MenuItem>
        ))}
      </Select>
      {helperText?.trim() && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
