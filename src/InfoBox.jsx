import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1075";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332";
    const COLD_URL="https://images.unsplash.com/photo-1668418321923-becc3ef20077?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1297";
    return (
        <div className="InfoBox">
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>75?RAIN_URL: (info.Temp>15)?HOT_URL:COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.City} {info.humidity>75?<ThunderstormIcon/>: (info.Temp>15)?<SunnyIcon/>:<AcUnitIcon/>},{info.State}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
                    <p>Temperature: {info.Temp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>The weather can be described as <i>{info.Weather}</i> feels like {info.feelslike}&deg;C</p>
                </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}