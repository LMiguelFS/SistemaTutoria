export default function ApplicationLogo(props) {
    const imageUrl = 'https://scontent.fcuz2-1.fna.fbcdn.net/v/t39.30808-6/344416923_1302938110653119_8120961861430256547_n.png?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5NNsO7BNCCMY2wcKW1BF_ABGdPkLkucYAEZ0-QuS5xtaLk1h4LFobGKn5mEn0xwVsIjCXQa1Y3dN5cS9PoyJy&_nc_ohc=zGocOYn3NdQQ7kNvgHWkOT4&_nc_zt=23&_nc_ht=scontent.fcuz2-1.fna&_nc_gid=AqYDsVR6Nabtov-p5t519Ct&oh=00_AYBAxBh28h_GpK25OO6zvDy4QeHLCDROenSV_Dtv9scMkg&oe=672AF0B6'; // Reemplaza con tu URL

    return (
        <div>
            <center><img src={imageUrl} style={{ width: '5%', height: 'auto' }} /></center>
        </div>
    );
}
