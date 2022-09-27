import { useState } from 'react'
import Resume from '../assets/fraley_resume.pdf'
import { Container, Button } from 'semantic-ui-react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

const Contact = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div>
      <div className="home-page">
        <div className="home-container">
          <Container textAlign="left">
            <h1 className="headings">Resume</h1>
          </Container>
        </div>
      </div>
      <div className="pdf-file">
        <a href={Resume} download>
          <Button primary>Download PDF</Button>
        </a>

        <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  )
}

export default Contact
