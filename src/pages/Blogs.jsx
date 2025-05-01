function Blogs() {
  const posts = [
    {
      id: 1,
      title: "How to Design Effective Mobile Interfaces",
      excerpt:
        "Learn the key principles of creating effective mobile interfaces that users love.",
      date: "May 15, 2022",
      category: "UI/UX",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "The Future of Web Development in 2023",
      excerpt:
        "A look at emerging trends and technologies shaping the future of web development.",
      date: "April 28, 2022",
      category: "Development",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "Color Theory for Digital Designers",
      excerpt:
        "Understanding color theory and how to apply it effectively in digital designs.",
      date: "April 10, 2022",
      category: "Design",
      image: "/blog3.jpg",
    },
    {
      id: 4,
      title: "Optimizing Website Performance",
      excerpt:
        "Tips and techniques for improving your website's loading speed and performance.",
      date: "March 22, 2022",
      category: "Development",
      image: "/blog4.jpg",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-2">
          <p className="text-gray-500 uppercase text-sm tracking-wider">
            - BLOG
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-indigo-600">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
