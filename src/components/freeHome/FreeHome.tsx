import "./freeHome.css";

export const FreeHome = () => {
  return (
    <div className="free-home">
      <h1>Free home workouts and fitness plans</h1>
      <p>
        With free online classes people who don’t have the time or money to
        afford a personal coach can make change their lives forever.
      </p>
      <button>View all</button>
      <div className="items-wrapper">
        <div className="item item1">
          <div className="img"></div>
          <div className="description">
            <div>
              <span>30 MINUTES</span>
              <span>Free</span>
            </div>
            <p>The Perfect Outdoor Workout</p>
            <p>Train now</p>
          </div>
        </div>
        <div className="item item2">
          <div className="img"></div>
          <div className="description">
            <div>
              <span>1 HOUR</span>
              <span>Free</span>
            </div>
            <p>Back Day</p>
            <p>Train now</p>
          </div>
        </div>
        <div className="item item3">
          <div className="img"></div>
          <div className="description">
            <div>
              <span>40 MINUTES</span>
              <span>Free</span>
            </div>
            <p>The Ultimate Abs Tabata</p>
            <p>Train now</p>
          </div>
        </div>
      </div>
    </div>
  );
};
