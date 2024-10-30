import React from 'react';

import { Worker, Viewer } from '@react-pdf-viewer/core';


const PdfViewer = ({ pdfUrl }) => {
    return (
        <div style={{ height: '100vh' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}>
                <Viewer fileUrl={pdfUrl} />
            </Worker>
        </div>
    );
}

export default PdfViewer;
