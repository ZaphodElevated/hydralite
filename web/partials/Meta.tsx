import Head from 'next/head'

const MetaData = (props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={props.title} />
        <meta
            name="og:description"
            property="og:description"
            content={props.description}
        />
        <meta property="og:url" content={props.url} />
        <meta name="twitter:card" content={props.description} />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:site" content={props.url} />
        <meta name="keywords" content={props.keywords} />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={props.url} />
    </Head>
)

export default MetaData
