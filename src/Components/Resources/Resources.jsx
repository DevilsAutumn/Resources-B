import React from "react";
import ResourceCard from "../Resource card/ResourceCard";
import "./resources.css";

const categories = [
  { name: "Internships" },
  { name: "Hackathons" },
  { name: "Scholarships" },
  { name: "Competitive Programming" },
];
const levels = [
  { name: "Beginner" },
  { name: "Intermediate" },
  { name: "Advanced" },
  { name: "All Levels" },
];
const eligibility = [
  { name: "Lorem ipsum" },
  { name: "Lorem ipsum" },
  { name: "Lorem ipsum" },
  { name: "Lorem ipsum" },
];

const Resources = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <div className="logo-div"></div>
          <p>Befikra</p>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <input type="text" id="nav-search" />
          </div>
          <div className="nav-item">
            <p>Login/Register</p>
          </div>
          <div className="nav-item">
            <h3>Menu</h3>
            <img
              src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/35/000000/external-_18-user-interface-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png"
              alt="menu"
            />
          </div>
        </div>
      </div>
      <div className="resources-carousel">
        <h1>Carousel</h1>
      </div>
      <div className="down-arrow">
        <img
          src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"
          alt="down"
        />
      </div>
      <div className="resources">
        <div className="resources-heading">
          <h1>Resources</h1>
          <p>Find all kinds of internships,hackathons,scholarships here.</p>
        </div>
        <div className="all-resources">
          <div className="filter-resources">
            <h1>Filters</h1>
            <div className="filter-search">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
                alt="search"
              />
              <input type="text" />
              <img
                src="https://img.icons8.com/ios/30/000000/empty-filter.png"
                id="filter-icon"
                alt="filter"
              />
            </div>
            <h1>Categories</h1>
            <div className="filter-categories">
              {categories.map((category) => {
                return (
                  <div className="checkbox-group">
                    <label class="category-container">
                      {category.name}
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                );
              })}
            </div>
            <h1>Level</h1>
            <div className="filter-categories">
              {levels.map((level) => {
                return (
                  <div className="checkbox-group">
                    <label class="category-container">
                      {level.name}
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                );
              })}
            </div>
            <h1>Eligibility</h1>
            <div className="filter-categories">
              {eligibility.map((item) => {
                return (
                  <div className="checkbox-group">
                    <label class="category-container">
                      {item.name}
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                );
              })}
            </div>
            <h1>Status</h1>
            <div className="filter-categories">
              {eligibility.map((item) => {
                return (
                  <div className="checkbox-group">
                    <label class="category-container">
                      {item.name}
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="resources-cards">
            <ResourceCard
              title="Learn Fundamentals of Python Programming"
              duration="6 hours"
              author="Anugrah Toby"
            />
            <ResourceCard
              title="Learn Fundamentals of Python Programming"
              duration="6 hours"
              author="Anugrah Toby"
            />
            <ResourceCard
              title="Learn Fundamentals of Python Programming"
              duration="6 hours"
              author="Anugrah Toby"
            />
            <ResourceCard
              title="Learn Fundamentals of Python Programming"
              duration="6 hours"
              author="Anugrah Toby"
            />
            <ResourceCard
              title="Learn Fundamentals of Python Programming"
              duration="6 hours"
              author="Anugrah Toby"
            />
            <ResourceCard
              title="Learn Fundamentals of Python Programming"
              duration="6 hours"
              author="Anugrah Toby"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
