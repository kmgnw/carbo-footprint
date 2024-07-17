import './StandardButton.css'

function StandardButton({title, backgroundColor='black', color='white', onClick, width='350px', height= '40px'}){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: "Noto Sans KR",
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: "150%"
            }}>
        <button className="button" style={{width:width, height:height, backgroundColor: backgroundColor, color: color, display: 'flex', justifyContent:'center', alignItems:'center'}} onClick={onClick} >
            <div style={{color: color}}>{title}</div>
        </button>
        </div>
    )
}
export default StandardButton;
