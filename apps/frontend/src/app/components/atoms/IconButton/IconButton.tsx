import { Button, SvgIconProps, Typography } from '@mui/material';

type IProps = {
  buttonName: string;
  buttonIcon: React.ReactElement<SvgIconProps>;
  onClick?: () => void;
};

export const IconButton = ({ buttonName, buttonIcon, onClick }: IProps) => {
  return (
    <Button
      variant="outlined"
      startIcon={buttonIcon}
      color="secondary"
      sx={{
        my: 2,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        paddingLeft: '40px',
        paddingRight: '40px',
        borderColor: '#black',
      }}
      onClick={onClick}
    >
      <Typography sx={{ paddingLeft: '30px', color: 'black' }}>
        {buttonName}
      </Typography>
    </Button>
  );
};
