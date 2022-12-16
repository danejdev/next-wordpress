This is starter template for using NextJS with a headless Wordpress Backend.

1. npm install

2. Install and activate the following plugins on your WordPress installation:

- WPGraphQL
- WPGraphQL for Advanced Custom Fields
- Advanced Custom Fields

3. Locate and copy the GraphQL endpoint from the settings page of the WPGraphQL plugin.

4. Rename '.env.local.example' to '.env.local' and set the WORDPRESS_API_URL to the GraphQL endpoint.

5. npm run dev
