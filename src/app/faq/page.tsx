import React from 'react';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mt-4">Find answers to some of the most common questions from our users</p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto">
        {/* Question 1 */}
        <div className="bg-white shadow-lg rounded-lg mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-950">1. What is QAFIX?</h2>
            <p className="text-gray-700 mt-2">
              QAFIX is a blog website where you can read articles, explore different topics, and stay updated on various trends. Our mission is to provide valuable content to help you stay informed and inspired.
            </p>
          </div>
        </div>


        {/* Question 2 */}
        <div className="bg-white shadow-lg rounded-lg mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-950">2. Can I share blog posts on social media?</h2>
            <p className="text-gray-700 mt-2">
              Absolutely! We encourage our users to share blog posts with their friends and followers. You can easily share any post using the social media icons provided on each post.
            </p>
          </div>
        </div>



        {/* Question 3 */}
        <div className="bg-white shadow-lg rounded-lg mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-950">3. How can I contact customer support?</h2>
            <p className="text-gray-700 mt-2">
              If you have any questions or need assistance, you can reach out to our support team via the <strong>Contact </strong> page. We’ll get back to you as soon as possible.
            </p>
          </div>
        </div>


        {/* Question 4 */}
        <div className="bg-white shadow-lg rounded-lg mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-950">4. Do you have a mobile app?</h2>
            <p className="text-gray-700 mt-2">
              Currently, we dont have a dedicated mobile app, but our website is fully responsive and optimized for mobile browsing. You can enjoy the full experience on your mobile device.
            </p>
          </div>
        </div>

        {/* Question 5 */}
        <div className="bg-white shadow-lg rounded-lg mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-950">5. How do I find the most popular blogs?</h2>
            <p className="text-gray-700 mt-2">
              You can find the most popular and trending blogs on our homepage. We also have a dedicated section for featured and trending posts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;