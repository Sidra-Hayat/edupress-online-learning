import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { icon: 'Icon (7).png', name: 'Art & Design', count: 38 },
  { icon: 'Component 2.png', name: 'Development', count: 38, active: true },
  { icon: 'Icon.png', name: 'Communication', count: 38 },
  { icon: 'Icon (1).png', name: 'Videography', count: 38 },
  { icon: 'Icon (2).png', name: 'Photography', count: 38 },
  { icon: 'Icon (3).png', name: 'Marketing', count: 38 },
  { icon: 'Icon (4).png', name: 'Content Writing', count: 38 },
  { icon: 'Icon (5).png', name: 'Finance', count: 38 },
  { icon: 'Icon (6).png', name: 'Science', count: 38 },
  { icon: 'Icon (7).png', name: 'Network', count: 38 },
];

const featuredCourses = [0, 1, 2].map((id) => ({
  id,
  category: 'Photography',
  instructor: 'DeterminePolmas',
  title: 'Create An LMS Website With LearnPress',
  duration: '2 Weeks',
  students: 156,
  price: 0,
}));

const addonIcons = [
  { color: 'purple', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z' },
  { color: 'orange', path: 'M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' },
  { color: 'blue', path: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z' },
  { color: 'red', path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' },
];

const stats = [
  { value: '25K+', label: 'Active Students' },
  { value: '899', label: 'Total Courses' },
  { value: '158', label: 'Instructors' },
  { value: '100%', label: 'Satisfaction Rate' },
];

const skillPoints = ['Certification', 'Expert Instructors', 'Flexible Learning', 'Lifetime Access'];

const feedbackNames = ['Roe Smith', 'Jane Doe', 'Mark Lee', 'Sara Khan'];
const feedbackQuote =
  '"I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."';

const articles = [
  { img: 'Rectangle 139.png', title: 'Best LearnPress WordPress Theme Collection For 2023', date: 'Jan 24, 2023' },
  { img: 'Rectangle 139 (1).png', title: 'Best LearnPress WordPress Theme Collection For 2023', date: 'Jan 24, 2023' },
  { img: 'Rectangle 139 (2).png', title: 'Best LearnPress WordPress Theme Collection For 2023', date: 'Jan 24, 2023' },
];

export default function Home() {
  useEffect(() => {
    document.title = 'Home - Build Skills Online';
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-text">
          <h1>
            ONLINE<br />SCHOOL
          </h1>
        </div>

        <div className="hero-inner">
          <div className="hero-text">
            <h2>
              Build Skills With<br />Online Course
            </h2>
            <p>
              We denounce with righteous indignation and dislike men who are<br />
              so beguiled and demoralized that cannot trouble.
            </p>
            <Link to="/courses" className="btn btn-primary btn-shadow">
              Explore Courses
            </Link>
          </div>
          <div className="hero-image">
            <img
              src="/images/beautiful-student-girl-wearing-backpack-holding-notebook-isolated-white-background 1.png"
              alt="Student"
            />
          </div>
        </div>
      </section>

      {/* TOP CATEGORIES + FEATURED COURSES */}
      <section className="section-gray">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Top Categories</h2>
              <p>Explore our Popular Categories</p>
            </div>
            <Link to="/courses" className="pill-link">All Categories</Link>
          </div>

          <div className="category-grid">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`category-card ${cat.active ? 'active' : ''}`}
              >
                <img src={`/images/${cat.icon}`} alt={cat.name} />
                <div className="category-name">{cat.name}</div>
                <div className="category-count">{cat.count} Courses</div>
              </div>
            ))}
          </div>

          <div className="divider divider--after-categories"></div>

          <div className="section-head">
            <div>
              <h2>Featured Courses</h2>
              <p>Explore our Popular Courses</p>
            </div>
            <Link to="/courses" className="pill-link">All Courses</Link>
          </div>

          <div className="course-grid">
            {featuredCourses.map((course, index) => (
              <div
                key={course.id}
                className={`course-card ${index === 1 ? 'featured' : ''}`}
              >
                <div className="course-thumb">
                  <div className="course-thumb-placeholder">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <span className="course-tag">{course.category}</span>
                </div>
                <div className="course-body">
                  <p className="course-author">
                    by <strong>{course.instructor}</strong>
                  </p>
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-meta">
                    <span>⏱ {course.duration}</span>
                    <span>👥 {course.students} Students</span>
                  </div>
                  <div className="course-footer">
                    <span className={`course-price ${course.price > 0 ? '' : 'free'}`}>
                      {course.price > 0 ? `$${course.price.toFixed(2)}` : 'Free'}
                    </span>
                    <Link to="/courses" className="course-link">View More →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="divider divider--before-next"></div>
        </div>
      </section>

      <section className="section-banner">
        <div className="wrap">
          <div className="addon-banner">
            <div className="addon-text">
              <p className="addon-eyebrow">Get More Power From</p>
              <h3>LearnPress Add-Ons</h3>
              <p className="addon-desc">
                The next level of LearnPress - LMS WordPress Plugin. More Powerful,
                Flexible and Magical Inside.
              </p>
              <Link to="/courses" className="btn btn-primary btn-sm">
                Explore Courses
              </Link>
            </div>
            <div className="addon-art">
              <div className="addon-art-inner">
                {addonIcons.map((icon) => (
                  <div key={icon.color} className={`addon-icon addon-icon--${icon.color}`}>
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d={icon.path} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-stats">
        <div className="wrap">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-skills">
        <div className="skills-grid">
          <div className="skills-image">
            <img src="/images/picture.jpeg" alt="Skills" />
          </div>
          <div className="skills-text">
            <h2>
              Grow Us Your Skill<br />With LearnPress LMS
            </h2>
            <p>
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized that cannot trouble.
            </p>
            <ul className="check-list">
              {skillPoints.map((item) => (
                <li key={item}>
                  <span className="check-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/courses" className="btn btn-primary btn-md btn-shadow">
              Explore Course
            </Link>
          </div>
        </div>
      </section>

      <section className="section-plain">
        <div className="center-wrap">
          <h2 className="feedback-title">Student Feedbacks</h2>
          <p className="feedback-sub">What Students Say About Academy LMS</p>
          <div className="feedback-grid">
            {feedbackNames.map((name) => (
              <div key={name} className="feedback-card">
                <p>{feedbackQuote}</p>
                <h4>{name}</h4>
                <span>Designer</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="cta-box">
          <div className="cta-left">
            <div className="cta-icon"><span>🎓</span></div>
            <h3>Let's Start With Academy LMS</h3>
          </div>
          <div className="cta-buttons">
            <button type="button" className="btn-outline-orange">I'm A Student</button>
            <button type="button" className="btn-solid-orange">Become An Instructor</button>
          </div>
        </div>
      </section>

      <section className="section-plain">
        <div className="center-wrap">
          <div className="articles-head">
            <h2>Latest Articles</h2>
            <Link to="/blog">All Articles</Link>
          </div>
          <div className="articles-grid">
            {articles.map((article) => (
              <div key={article.img} className="article-card">
                <div className="article-img">
                  <img src={`/images/${article.img}`} alt={article.title} />
                </div>
                <div className="article-body">
                  <h3>{article.title}</h3>
                  <p className="article-date">{article.date}</p>
                  <p className="article-excerpt">
                    Looking for an amazing &amp; well-functional LearnPress WordPress Theme?...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}