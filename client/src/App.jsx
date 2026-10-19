import { useState } from "react";
import "./App.css";
import timetableData from "./data/timetableData";

function App() {
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [showTimetable, setShowTimetable] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const sectionsByBranch = {
    "CSE Core": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
    ],

    AIML: ["A", "B", "C"],

    DS: ["A", "B"],
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
    setSection("");
    setShowTimetable(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!branch || !section) {
      alert("Please select your Branch and Section.");
      return;
    }

    const selectedTimetable =
      timetableData[branch]?.[section];

    if (!selectedTimetable) {
      alert(
        `Timetable for ${branch} - Section ${section} is not added yet.`
      );
      return;
    }

    setShowTimetable(true);
  };

  const handleBack = () => {
    setShowTimetable(false);
  };
const getClassStatus = (selectedTimetable) => {
  const now = new Date();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = dayNames[now.getDay()];

  if (!selectedTimetable.schedule[today]) {
    return {
      type: "none",
      title: "No Classes Today",
      subject: "Enjoy your day! 🎉",
      time: "",
    };
  }

  const currentMinutes =
    now.getHours() * 60 + now.getMinutes();

  for (
    let i = 0;
    i < selectedTimetable.timings.length;
    i++
  ) {
    const timing = selectedTimetable.timings[i];

    if (
      timing === "10:50-10:55" ||
      timing === "3:05-3:10"
    ) {
      continue;
    }

    const [start, end] = timing.split("-");

    const [startHour, startMinute] =
      start.split(":").map(Number);

    const [endHour, endMinute] =
      end.split(":").map(Number);

    const startTotal =
      startHour * 60 + startMinute;

    const endTotal =
      endHour * 60 + endMinute;

    const subject =
      selectedTimetable.schedule[today][i];

    if (
      currentMinutes >= startTotal &&
      currentMinutes < endTotal
    ) {
      if (
        subject === "LUNCH" ||
        subject === "BREAK"
      ) {
        return {
          type: "break",
          title: subject === "LUNCH"
            ? "Lunch Break"
            : "Short Break",
          subject: "No class right now",
          time: timing,
        };
      }

      return {
        type: "current",
        title: "Current Class",
        subject,
        time: timing,
      };
    }

    if (currentMinutes < startTotal) {
      if (
        subject !== "LUNCH" &&
        subject !== "BREAK"
      ) {
        return {
          type: "next",
          title: "Next Class",
          subject,
          time: timing,
        };
      }
    }
  }

  return {
    type: "none",
    title: "Classes Finished",
    subject: "No more classes today.",
    time: "",
  };
};
  // ---------------- TIMETABLE PAGE ----------------

  if (showTimetable) {
    const selectedTimetable =
      timetableData[branch][section];

    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];

    return (
      <div className="app">

        {/* NAVBAR */}
        <nav className="navbar">

          <div className="logo">
            <span className="logo-icon">📅</span>
            <span>ITS Engineering College</span>
          </div>

          <button className="staff-btn">
            Staff Login
          </button>

        </nav>


        {/* TIMETABLE CONTENT */}
        <main className="timetable-page">

          <div className="timetable-header">

            <button
              className="back-btn"
              onClick={handleBack}
            >
              ← Back
            </button>

            <div className="timetable-title">

              <div className="badge">
                ✦ Academic Schedule
              </div>

              <h1>
                {branch} — Section {section}
              </h1>

              <p>
                {selectedTimetable.year} •{" "}
                {selectedTimetable.semester} •{" "}
                {selectedTimetable.session}
              </p>

              <div className="room-info">
                📍 {selectedTimetable.room}
              </div>
{(() => {
  const classStatus =
    getClassStatus(selectedTimetable);

  return (
    <div
      className={`class-status ${classStatus.type}`}
    >
      <div className="status-icon">
        {classStatus.type === "current"
          ? "🟢"
          : classStatus.type === "next"
          ? "🔵"
          : classStatus.type === "break"
          ? "☕"
          : "📅"}
      </div>

      <div className="status-content">

        <span className="status-title">
          {classStatus.title}
        </span>

        <strong>
          {classStatus.subject}
        </strong>

        {classStatus.time && (
          <span className="status-time">
            ⏰ {classStatus.time}
          </span>
        )}

      </div>
    </div>
  );
})()}
            </div>

          </div>


          {/* TIMETABLE TABLE */}
          <div className="table-container">

            <table className="timetable">

              <thead>
                <tr>

                  <th>Day</th>

                  {selectedTimetable.timings.map(
                    (time) => (
                      <th key={time}>
                        {time}
                      </th>
                    )
                  )}

                </tr>
              </thead>


              <tbody>

                {days.map((day) => (

                  <tr key={day}>

                    <td className="day-cell">
                      {day}
                    </td>

                    {selectedTimetable.schedule[
                      day
                    ].map((subject, index) => (

                     <td
  key={index}
  className={
    subject === "BREAK" ||
    subject === "LUNCH"
      ? "break-cell"
      : "subject-cell"
  }
  onClick={() => {
    if (
      subject !== "BREAK" &&
      subject !== "LUNCH"
    ) {
      setSelectedSubject(subject);
    }
  }}
>
  {subject}
</td>

                    ))}

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* INFORMATION */}
          <div className="timetable-note">

            <strong>📌 Timetable Information</strong>

            <p>
              This timetable is for{" "}
              <b>
                {branch} — Section {section}
              </b>
              .
            </p>

            <p>
              Timetable session:{" "}
              <b>{selectedTimetable.session}</b>
            </p>

          </div>

        </main>


        {/* FOOTER */}
        <footer>

          <p>
            ITS Engineering College • Timetable
            Management System
          </p>

          <p>
            © 2026 • Academic Schedule Portal
          </p>

        </footer>

      </div>
    );
  }


  // ---------------- HOME PAGE ----------------

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">📅</span>
          <span>ITS Engineering College</span>
        </div>

        <button className="staff-btn">
          Staff Login
        </button>

      </nav>


      {/* MAIN CONTENT */}
      <main className="hero">

        <div className="hero-content">

          <div className="badge">
            ✦ Smart Academic Schedule
          </div>


          <h1>
            ITS Engineering College.
            <br />
            <span>Your Timetable.</span>
          </h1>


          <p className="subtitle">
            View your daily schedule, weekly timetable
            and important class updates — all in one
            place.
          </p>


          {/* SELECTION CARD */}
          <div className="selection-card">

            <h2>Select Your Class</h2>

            <p className="card-subtitle">
              Currently available for 2nd Year
              students.
            </p>


            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                {/* YEAR */}
                <div className="input-group">

                  <label>
                    Academic Year
                  </label>

                  <select
                    value="2nd Year"
                    disabled
                  >
                    <option value="2nd Year">
                      2nd Year
                    </option>
                  </select>

                </div>


                {/* BRANCH */}
                <div className="input-group">

                  <label>
                    Branch
                  </label>

                  <select
                    value={branch}
                    onChange={handleBranchChange}
                  >

                    <option value="">
                      Select Branch
                    </option>

                    <option value="CSE Core">
                      Computer Science & Engineering
                    </option>

                    <option value="AIML">
                      Artificial Intelligence &
                      Machine Learning
                    </option>

                    <option value="DS">
                      Data Science
                    </option>

                  </select>

                </div>


                {/* SECTION */}
                <div className="input-group">

                  <label>
                    Section
                  </label>

                  <select
                    value={section}
                    onChange={(e) =>
                      setSection(e.target.value)
                    }
                    disabled={!branch}
                  >

                    <option value="">
                      {branch
                        ? "Select Section"
                        : "Select Branch First"}
                    </option>

                    {branch &&
                      sectionsByBranch[
                        branch
                      ].map((sectionName) => (

                        <option
                          key={sectionName}
                          value={sectionName}
                        >
                          Section {sectionName}
                        </option>

                      ))}

                  </select>

                </div>

              </div>


              <button
                type="submit"
                className="view-btn"
              >
                View My Timetable
                <span>→</span>
              </button>

            </form>

          </div>


          {/* FEATURES */}
          <div className="features">

            <div className="feature">

              <div className="feature-icon">
                📅
              </div>

              <div>
                <strong>
                  Daily Schedule
                </strong>

                <p>
                  Know what's next
                </p>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon">
                🔄
              </div>

              <div>
                <strong>
                  Live Updates
                </strong>

                <p>
                  Substitution & changes
                </p>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon">
                👨‍🏫
              </div>

              <div>
                <strong>
                  Faculty Updates
                </strong>

                <p>
                  Stay informed
                </p>
              </div>

            </div>

          </div>

        </div>

      </main>


      {/* FOOTER */}
      <footer>

        <p>
          ITS Engineering College • Timetable
          Management System
        </p>

        <p>
          © 2026 • Academic Schedule Portal
        </p>

      </footer>

    </div>
  );
}

export default App;