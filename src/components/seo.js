import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta, pathname, title, description, keywords, ogTitle, ogDescription, ogImage: ogMetaImage, twitterTitle, twitterDescription, twitterImage: twitterMetaImage  }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  const og_title = ogTitle || site.siteMetadata.title
  const og_description = ogDescription || site.siteMetadata.description
  const og_image =
    ogMetaImage && ogMetaImage.src
      ? `${site.siteMetadata.siteUrl}${ogMetaImage.src}`
      : null
  const twitter_title = twitterTitle || site.siteMetadata.title
  const twitter_description = twitterDescription || site.siteMetadata.description
  const twitter_image =
    twitterMetaImage && twitterMetaImage.src
      ? `${site.siteMetadata.siteUrl}${twitterMetaImage.src}`
      : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:title`,
          content: og_title,
        },
        {
          property: `og:description`,
          content: og_description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: twitter_title,
        },
        {
          name: `twitter:description`,
          content: twitter_description,
        },
      ]
      .concat(
        ogMetaImage
          ? [
              {
                property: "og:image",
                content: og_image,
              },
              {
                property: "og:image:width",
                content: ogMetaImage.width,
              },
              {
                property: "og:image:height",
                content: ogMetaImage.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
      )
      .concat(
        twitterMetaImage
          ? [
              {
                property: "twitter:image",
                content: twitter_image,
              },
              {
                property: "twitter:image:width",
                content: twitterMetaImage.width,
              },
              {
                property: "twitter:image:height",
                content: twitterMetaImage.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
      )
      .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  ogTitle: PropTypes.string.isRequired,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  twitterTitle: PropTypes.string.isRequired,
  twitterDescription: PropTypes.string,
  twitterImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO
