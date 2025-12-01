import React from "react";
import "./Blog.css";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Obliq",
      excerpt: "Learn how to set up your first project in just 5 minutes.",
      date: "Dec 1, 2025",
      category: "Tutorial",
    },
    {
      id: 2,
      title: "10 Tips to Boost Your Productivity",
      excerpt: "Discover our top strategies for maximizing efficiency with Obliq.",
      date: "Nov 28, 2025",
      category: "Tips",
    },
    {
      id: 3,
      title: "New Features in v2.0",
      excerpt: "Explore the latest updates and improvements in our newest release.",
      date: "Nov 25, 2025",
      category: "Updates",
    },
    {
      id: 4,
      title: "Case Study: How Company X Saved 40 Hours/Week",
      excerpt: "Read how a growing startup transformed their workflow with Obliq.",
      date: "Nov 20, 2025",
      category: "Case Study",
    },
    {
      id: 5,
      title: "Best Practices for Team Collaboration",
      excerpt: "Guidelines and tips for working effectively with your team.",
      date: "Nov 15, 2025",
      category: "Best Practices",
    },
    {
      id: 6,
      title: "API Integration Guide",
      excerpt: "Step-by-step guide to integrating Obliq with your existing tools.",
      date: "Nov 10, 2025",
      category: "Development",
    },
  ];

  return (
    <section className="blog-section">
      <h1>Latest from Our Blog</h1>
      <p>Tips, tutorials, and insights from the Obliq team</p>
      
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-category">{post.category}</div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div className="blog-footer">
              <span className="blog-date">{post.date}</span>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
