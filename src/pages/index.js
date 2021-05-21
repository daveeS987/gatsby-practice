import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout.js';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p> This homepage is using a layout component</p>
    </Layout>
  );
};

export default IndexPage;
