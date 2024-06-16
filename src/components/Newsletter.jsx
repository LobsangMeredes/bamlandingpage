import React from 'react';

function Newsletter() {
  return (
    <section id="newsletter" className="p-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
        <p className="text-lg mb-4">Subscribe to our newsletter to get the latest updates and special offers.</p>
        <form className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded-l-lg"/>
          <button type="submit" className="p-2 bg-blue-600 text-white rounded-r-lg">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
