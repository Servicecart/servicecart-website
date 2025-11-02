import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO = ({
  title = "Get Home Services in 30 Minutes | Servicecart - Book Instantly",
  description = "Get home services in 30 minutes! Professional cleaning, plumbing, electrical work, beauty treatments and more. Book instantly with Servicecart in Kolhapur & Mumbai.",
  keywords = "home services, cleaning services, plumbing, electrical work, beauty services, servicecart, kolhapur, mumbai, 30 minutes service, on-demand services",
  image = "https://myservicecart.com/og-image.png",
  url = "https://myservicecart.com",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO

