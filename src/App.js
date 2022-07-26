function App() {
  return (
    <div className="App">
      <header
        style={{
          position: "absolute",
          top: "0",
          height: "50px",
          backgroundColor: "darkgray",
          width: "100%",
          color: "white",
        }}
      >
        CV Creator
      </header>
      <div
        className="main-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
          height: "1400px",
          marginTop: "50px",
        }}
      >
        <div className="cv-form">
          <form action="">
            <label htmlFor="personal-info">Personal Information</label>
            <input type="text" name="" id="" placeholder="Name" />
            <input type="text" name="" id="" placeholder="Title" />
            <input type="text" name="" id="" placeholder="Address" />
            <input type="number" name="" id="" placeholder="Phone Number" />
            <input type="email" name="" id="" placeholder="Email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
            ></textarea>

            <label htmlFor="Experience">Experience</label>
            <input type="text" name="" id="" placeholder="Position" />
            <input type="text" name="" id="" placeholder="Company" />
            <input type="text" name="" id="" placeholder="Location" />
            <label htmlFor="job-start">From</label>
            <input type="date" name="job-start" id="" />
            <label htmlFor="job-end">To</label>
            <input type="date" name="job-end" id="" />

            <label htmlFor="Experience">Education</label>
            <input type="text" name="" id="" placeholder="University" />
            <input type="text" name="" id="" placeholder="Location" />
            <input type="text" name="" id="" placeholder="Degree" />
            <label htmlFor="school-start">From</label>
            <input type="date" name="school-start" id="" />
            <label htmlFor="school-end">To</label>
            <input type="date" name="school-end" id="" />

            <input type="submit" value="Generate PDF" />
          </form>
        </div>

        <div className="cv-output">
          <div className="cv-header">
            <h2>firstname lastname</h2>
            <h3>title</h3>
            <p>number</p>
            <p>email</p>
            <p>location</p>
          </div>
          <div className="description">
            this is a place for an about me section, why i want the job etc
          </div>
          <div className="work-experience">
            my previous companies, title, etc
          </div>
          <div className="education-experience">my degrees, name, etc</div>
        </div>
      </div>
      <footer
        style={{
          position: "absolute",
          bottom: "0",
          height: "30px",
          width: "100%",
          color: "white",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Created by Bryant Young
      </footer>
    </div>
  );
}

export default App;
