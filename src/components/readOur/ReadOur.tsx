import "./readOur.css";

export const ReadOur = () => {
  return (
    <div className="read-our">
      <h1>Read our tips and tricks</h1>
      <p>
      We post a lot of free content around health fitness and general wellbeing. Make sure to check all of our posts down below.
      </p>
      <button>View all posts</button>
      <div className="items-wrapper">
        <div className="item item1">
          <div className="img"></div>
        </div>
        <div className="item item2">
          <div className="img"></div>
        </div>
        <div className="item item3">
          <div className="img"></div>            
        </div>
      </div>
    </div>
  );
};
