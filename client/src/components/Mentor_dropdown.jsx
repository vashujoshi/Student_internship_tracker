import React from "react";

const mentors = [
  { name: "Dr. Vaibhav joshi", email: "vaibhav.22b0101022@abes.ac.in" },
  { name: "Prof. Rakesh Gupta", email: "rakesh.gupta@college.edu" },
  { name: "Ms. Pooja Verma", email: "pooja.verma@college.edu" }
];

const MentorDropdown = ({ onChange }) => (
  <select onChange={onChange} required>
    <option value="">Select Mentor</option>
    {mentors.map((mentor, index) => (
      <option key={index} value={JSON.stringify(mentor)}>
        {mentor.name}
      </option>
    ))}
  </select>
);

export default MentorDropdown;
