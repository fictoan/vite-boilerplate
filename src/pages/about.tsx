// EXTERNAL DEPS ===============================================================

// INTERNAL DEPS ===============================================================
import { Element, Heading1, Portion, Row } from "fictoan-react";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "../styles/page-about.css";

const AboutPage = () => {
  return (
    <Element as="article" id="page-about">
      <Row layoutAsGrid padding="small" gutters="huge">
        <Portion>
          <Heading1 as="h1">This is the about page!</Heading1>
        </Portion>
      </Row>
    </Element>
  );
};

export default AboutPage;
