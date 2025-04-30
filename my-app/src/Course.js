import React, { useState } from 'react';

function Course() {
  const [formData, setFormData] = useState({
    epam: '',
    deeplearning: '',
    cloud: '',
    ps2: '',
    sil: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store the submitted data
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Course Selection</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {['epam', 'deeplearning', 'cloud', 'ps2', 'sil'].map((item) => (
          <div key={item} style={styles.formGroup}>
            <label style={styles.label}>{item}:</label>
            <select
              name={item}
              value={formData[item]}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="" disabled>
                Select
              </option>
              <option value="s1">S1</option>
              <option value="s2">S2</option>
            </select>
          </div>
        ))}
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div>
          <h3 style={styles.subHeading}>Selected Courses</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Course</th>
                <th style={styles.tableHeader}>Selection</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(submittedData).map(([course, selection]) => (
                <tr key={course}>
                  <td style={styles.tableCell}>{course}</td>
                  <td style={styles.tableCell}>{selection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    flex: '1',
  },
  select: {
    flex: '2',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'center',
    fontSize: '16px',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  subHeading: {
    textAlign: 'center',
    color: '#333',
    marginTop: '30px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#f4f4f4',
    textAlign: 'left',
    padding: '10px',
    border: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  },
};

export default Course;
