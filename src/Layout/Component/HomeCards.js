const HomeCards = () => {
  return (
    <>
      <div className="card-group px-1 py-1">
        <div className="card bg-dark text-white">
          <img

            className="card-image image-fluid"
            src="https://source.unsplash.com/1400x600/?cardio"

            alt="Exercise"
          />
          <div className="card-image-overlay"></div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="display-4">Monitor your Activities</h5>
            <p className="card-text text-justify">
              ActivityTracker will keep track of your Cardio and Workout and daily active calorie burn.
              Research has shown that just by being more active you will also be healthier.
            </p>
            <a href="" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="card-group px-1 pb-1">
        <div className="card">
          <div className="card-body">
            <h5 className="display-4">Plan your diets!</h5>
            <p className="card-text text-justify">
              Make the important decisions ahead of time and on your own schedule.
              Then there's nothing to worry about when it's time to eat.
              Planning ahead means less produce going bad in the fridge.
            </p>
            <a href="" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card bg-dark text-white">
          <img
            className="card-image image-fluid"
            src="https://source.unsplash.com/1400x600/?oatmeal"
            alt="Exercise"
          />
          <div className="card-image-overlay"></div>
        </div>
      </div>
      <div className="card-group px-1 pb-1">
        <div className="card bg-dark text-white">
          <img
            className="card-image image-fluid"
            src="https://source.unsplash.com/1400x650/?gym"
            alt="Exercise"
          />
          <div className="card-image-overlay"></div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="display-5">Daily Report & Recommendations</h5>
            <p className="card-text text-justify">
              Manage your health by getting daily interactive reports based on the
              total amount of calories you are consuming and burning.<br />
              Also get diet Recommendation based on your specific body type!
            </p>
            <a href="" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
