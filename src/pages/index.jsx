import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"

const Index = () => (
  <Layout>
    <Status />
    <View title="Aquario">
      <p>
        <span role="img" aria-label="hand">
          👋
        </span>{" "}
        This is a simple demo of creating dynamic pages with Gatsby that require{" "}
        <b>user authentication</b> and using <b>Firebase</b> as authentication
        provider.
      </p>
      <br />
      <p>
        <span role="img" aria-label="books">
          📚
        </span>{" "}
        It uses concepts from the
        {` `}
        <a
          className="underline text-blue-500"
          href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/"
        >
          client-only routes section
        </a>
        <a
          className="underline text-blue-500"
          href="https://www.gatsbyjs.org/tutorial/authentication-tutorial"
        >
          making a site with user authentication
        </a>
        tutorial in the official gatsby doc.
      </p>
      <br />
      <p>
        This is the public home, and here it is a private route to start:
        <br />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
          type="button"
        >
          <Link to="/app/profile">Go to your profile</Link>
        </button>
      </p>
    </View>
  </Layout>
);

export default Index
