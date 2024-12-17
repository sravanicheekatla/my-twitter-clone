import React from "react";

const FollowSuggestions = () => {
  return (
    <div className="follow-suggestions">
      <h3>Who to follow</h3>
      <div className="suggested-user">
        <div>
        <i class="fa-solid fa-jedi"></i>
          <strong>  Allu Arjun</strong>
          <span>@AlluArjun</span>
        </div>
        <button>Follow</button>
      </div>
      <div className="suggested-user">
        <div>
        <i class="fa-solid fa-cloud-moon"></i>
          <strong>  Prabhas</strong>
          <span>@Prabhas</span>
        </div>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default FollowSuggestions;
