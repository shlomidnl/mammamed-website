import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPage.css';

const LegalPage = ({ htmlFile, title }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/legal/${htmlFile}`)
      .then(response => response.text())
      .then(html => {
        // Extract the content inside the body tag or the main content div
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const contentDiv = doc.querySelector('[data-custom-class="body"]') || doc.body;
        setContent(contentDiv ? contentDiv.innerHTML : html);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Error loading ${title}:`, error);
        setLoading(false);
      });
  }, [htmlFile, title]);

  if (loading) {
    return (
      <div className="legal-page">
        <Header />
        <main className="legal-content">
          <div className="container">
            <div className="loading">Loading {title}...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="legal-page">
      <Header />
      <main className="legal-content">
        <div className="container">
          <div className="legal-document">
            <div 
              className="legal-content-html"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
