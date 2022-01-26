const ProgressBar = ({ bgcolor, current }) => {
    
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${+current}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${current}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  