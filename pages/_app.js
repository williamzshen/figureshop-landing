import '../styles/global.css'
import { useEffect } from 'react'
import TerminalSidebar from '../components/TerminalSidebar'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Add Excel-like styling to the introduction page
    if (typeof window !== 'undefined') {
      const applyExcelStyling = () => {
        // We'll apply this on all pages for now, especially the index page
        const articles = document.querySelectorAll('main article, .nextra-content article, article.nx-prose');
        
        articles.forEach(article => {
          // Add padding and positioning for Excel layout
          article.style.position = 'relative';
          article.style.paddingLeft = '30px';
          article.style.paddingTop = '85px';
          article.style.backgroundColor = '#f0f0f0';
          article.style.border = '1px solid #e0e0e0';
          
          // Add row numbers to paragraphs
          const paragraphs = article.querySelectorAll('p');
          paragraphs.forEach((p, index) => {
            p.setAttribute('data-row-number', index + 1);
            p.style.border = '1px solid #e0e0e0';
            p.style.margin = '0';
            p.style.padding = '8px';
            p.style.backgroundColor = 'white';
            p.style.position = 'relative';
          });
          
          // Add Excel header
          if (!article.querySelector('.excel-header')) {
            const header = document.createElement('div');
            header.className = 'excel-header';
            header.textContent = 'Home   Insert   Page Layout   Formulas   Data   Review   View';
            header.style.position = 'absolute';
            header.style.top = '0';
            header.style.left = '0';
            header.style.width = '100%';
            header.style.background = 'linear-gradient(to bottom, #217346, #1e6b3e)';
            header.style.color = 'white';
            header.style.padding = '4px 16px';
            header.style.fontSize = '12px';
            header.style.zIndex = '10';
            article.appendChild(header);
          }
          
          // Add formula bar
          if (!article.querySelector('.excel-formula')) {
            const formula = document.createElement('div');
            formula.className = 'excel-formula';
            formula.textContent = '=SUM(A1:A10)';
            formula.style.position = 'absolute';
            formula.style.top = '30px';
            formula.style.left = '30px';
            formula.style.right = '0';
            formula.style.height = '24px';
            formula.style.backgroundColor = 'white';
            formula.style.border = '1px solid #e0e0e0';
            formula.style.padding = '4px 16px';
            formula.style.fontSize = '12px';
            formula.style.fontFamily = 'Consolas, monospace';
            formula.style.color = '#217346';
            formula.style.zIndex = '5';
            article.appendChild(formula);
          }
          
          // Add column headers
          if (!article.querySelector('.excel-columns')) {
            const columns = document.createElement('div');
            columns.className = 'excel-columns';
            columns.textContent = 'A   B   C   D   E   F   G   H';
            columns.style.position = 'absolute';
            columns.style.top = '55px';
            columns.style.left = '30px';
            columns.style.right = '0';
            columns.style.height = '25px';
            columns.style.backgroundColor = '#f8f8f8';
            columns.style.borderBottom = '1px solid #e0e0e0';
            columns.style.display = 'flex';
            columns.style.alignItems = 'center';
            columns.style.fontSize = '12px';
            columns.style.fontWeight = 'bold';
            columns.style.color = '#444';
            columns.style.paddingLeft = '15px';
            columns.style.letterSpacing = '25px';
            article.appendChild(columns);
          }
        });
      };
      
      // Run once on load
      setTimeout(applyExcelStyling, 500); // Small delay to ensure DOM is ready
      
      // Run when content might change
      const observer = new MutationObserver(() => {
        setTimeout(applyExcelStyling, 200);
      });
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => observer.disconnect();
    }
  }, []);
  
  return (
    <>
      <Component {...pageProps} />
      <TerminalSidebar />
    </>
  );
} 