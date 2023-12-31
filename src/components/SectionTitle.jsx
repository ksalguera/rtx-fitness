import Typography from '@mui/material/Typography';

const SectionTitle = ({ title, titleColor }) => {
  return (
    <Typography variant='h4' 
      sx={{ 
        textTransform: 'uppercase', 
        fontWeight: 'bold', 
        color: titleColor,
        my: 2
    }}>
      {title}
    </Typography>
  )
}

export default SectionTitle;