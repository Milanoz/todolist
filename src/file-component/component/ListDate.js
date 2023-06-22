function ListDate()
{
    const today = new Date();
    const time =today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var dayname = ''
    var current_day = today.getDay();
    switch (current_day)
    {
        case 0:
            dayname = "Chủ nhật";
            break;
        case 1:
            dayname = "Thứ hai";
            break;
        case 2:
            dayname = "Thứ ba";
            break;
        case 3:
            dayname = "Thứ tư";
            break;
        case 4:
            dayname = "Thứ năm";
            break;
        case 5:
            dayname = "Thứ sáu";
            break; 
        case 6:
            dayname = "Thứ bảy";
            break;
        default:
            throw new Error('Lỗi');
    }
    var timeList = dayname + ", " + time
    return(
        <div className="time">
            <h5>{timeList}</h5>
        </div>
    )
}

export default ListDate