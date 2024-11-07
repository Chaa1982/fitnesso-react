import "./freeHome2.css";

export const FreeHome2 = () => {
  return (
    <div className="free-home2">
      <h1>Free home workouts and fitness plans</h1>
      <p>
        I’ve created these premium fitness classes for everyone starting from
        beginner to advanced level with an in depth FAQ.
      </p>

      <div className="items-wrapper">
        <div className="item item1">
          <div className="img"></div>
          <div className="description">
            <div>
              <span>3 days a week</span>
              <span>$ 19.99 USD</span>
            </div>
            <p>Home Burn</p>
            <p>View</p>
          </div>
        </div>
        <div className="item item2">
          <div className="img"></div>
          <div className="description">
            <div>
              <span>30 days</span>
              <span>$ 29.99 USD</span>
            </div>
            <p>Shedded Meal Plan</p>
            <p>View</p>
          </div>
        </div>
        <div className="item item3">
          <div className="img"></div>
          <div className="description">
            <div>
              <span>7 Days a Week</span>
              <div className="price-wrapper">
                <span>$ 89.99 USD</span>
                <span>$ 129.99 USD</span>
              </div>
              
            </div>
            <p>High Intensity Training</p>
            <p>View</p>
          </div>
        </div>
      </div>
    </div>
  );
};
