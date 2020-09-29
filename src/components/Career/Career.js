
import React, { useState } from 'react';
import resume from './../../Resume.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './Career.css';

function Career() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    
    return (
      <>
            <Document  file={resume}
                        onLoadSuccess={onDocumentLoadSuccess}>
                {[...Array(numPages).keys()].map((p) => (
              <Page pageNumber={p + 1} />
            ))}
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
      </>
    );
}

export default Career;
