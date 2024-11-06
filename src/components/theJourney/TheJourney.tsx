import './theJourney.css';


export const TheJourney = () => {
    return (
        <div className='the-journey'>
            <h1>The journey to a healthier body starts right now</h1>
            <button>Online coaching</button>
            <div className='greed-container'>
                <div className="item item1">
                    <div className='img'></div>
                    <p>Learn to live a healthy life with fitness</p>
                    <p>hanging your lifestyle with a fast paced life may seem hard or impossible, but with small steps each week you can achieve your dream physique and live a healthier life.</p>
                </div>
                <div className="item item2">
                <div className='img'></div>
                <p>Understand how to do exercises properly</p>
                <p>Just going to the gym and lifting weights won't make you healthy, after all it may even cause some harm to your body. We teach proper exercise techniques</p>
                </div>
                <div className="item item3">
                <div className='img'></div>
                <p>Track your progress weekly</p>
                <p>We're tracking your goal weight with body fat measures, weight and general feeling. You may have the same body weight but feel 10x better.</p>
                </div>
                <div className="item item4">
                <div className='img'></div>
                <p>Follow a specific plan made just for you</p>
                <p>Everyone is different, and we know it. That's why all of our clients get a programme specific just for their lifestyle and body tipe. This give the best possible results.</p>
                </div>

            </div>
        </div>
    );
}