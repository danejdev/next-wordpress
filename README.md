This template utilizes GraphQL to facilitate communication between a Wordpress backend and NextJS frontend.

1. npm install

2. Install and activate the following plugins on your WordPress installation:

- <a href="https://wordpress.org/plugins/wp-graphql/">WPGraphQL</a>
- - <a href="https://www.wpgraphql.com/acf">Advanced Custom Fields (ACF)</a>
- <a href="https://wordpress.org/plugins/advanced-custom-fields/">WPGraphQL for ACF</a>

3. Locate and copy the GraphQL endpoint from the settings page of the WPGraphQL plugin.

4. Rename '.env.local.example' to '.env.local' and set the WORDPRESS_API_URL to the GraphQL endpoint.

5. npm run dev
