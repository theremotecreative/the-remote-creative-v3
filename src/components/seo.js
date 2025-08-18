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
  const getImageMeta = image => {
    if (!image || !image.images || !image.images.fallback) {
      return null
    }
    const { fallback } = image.images
    return {
      src: `${site.siteMetadata.siteUrl}${fallback.src}`,
      width: fallback.width || image.width,
      height: fallback.height || image.height,
    }
  }

  const ogImage = getImageMeta(ogMetaImage)
  const twitterImage = getImageMeta(twitterMetaImage)

  const og_image = ogImage ? ogImage.src : null
  const twitter_title = twitterTitle || site.siteMetadata.title
  const twitter_description = twitterDescription || site.siteMetadata.description
  const twitter_image = twitterImage ? twitterImage.src : null
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
        ogImage
          ? [
              {
                property: "og:image",
                content: og_image,
              },
              {
                property: "og:image:width",
                content: ogImage.width,
              },
              {
                property: "og:image:height",
                content: ogImage.height,
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
        twitterImage
          ? [
              {
                property: "twitter:image",
                content: twitter_image,
              },
              {
                property: "twitter:image:width",
                content: twitterImage.width,
              },
              {
                property: "twitter:image:height",
                content: twitterImage.height,
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
  ogImage: PropTypes.object,
  twitterTitle: PropTypes.string.isRequired,
  twitterDescription: PropTypes.string,
  twitterImage: PropTypes.object,
  pathname: PropTypes.string,
}

export default SEO
