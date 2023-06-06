import React from "react";
import GitHubCalendar from "react-github-calendar";

// CSS
import "./githubCalendar.css";

// --------------------------------------------------------------------

const GithubCalendar = () => {
  return (
    <div className="github__calendar_container flex__center">
      <GitHubCalendar
        username="Diego-Nieves26"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={15}
        loading={false}
        showWeekdayLabels={true}
        // hideTotalCount={true}
      />
    </div>
  );
};

export default GithubCalendar;
