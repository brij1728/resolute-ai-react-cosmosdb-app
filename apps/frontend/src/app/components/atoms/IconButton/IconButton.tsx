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
        paddingLeft: '30px',
        paddingRight: '30px',
        borderColor: '#black',
      }}
      onClick={onClick}
    >
      <Typography sx={{ paddingLeft: '20px', color: 'black' }}>
        {buttonName}
      </Typography>
    </Button>
  );
};
