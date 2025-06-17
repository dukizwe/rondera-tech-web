export default function PrivacyPolicy() {
  const sidebarStyle = {
    position: 'sticky',
    top: '20px',
    height: 'fit-content',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
    minWidth: '250px'
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    padding: '8px 0',
    display: 'block',
    borderRadius: '4px',
    transition: 'color 0.2s ease'
  };

  const articleStyle = {
    maxWidth: '800px',
    lineHeight: '1.6',
    color: '#333',
    fontSize: '16px'
  };

  const headingStyle = {
    color: '#2c3e50',
    marginTop: '40px',
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: '600'
  };

  const firstHeadingStyle = {
    ...headingStyle,
    marginTop: '0'
  };

  const subHeadingStyle = {
    color: '#34495e',
    marginTop: '30px',
    marginBottom: '15px',
    fontSize: '24px',
    fontWeight: '500'
  };

  const paragraphStyle = {
    marginBottom: '16px',
    textAlign: 'justify'
  };

  const marginTopStyle = {
    marginTop: '20px'
  };

  const strongStyle = {
    fontWeight: '600',
    color: '#2c3e50'
  };

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#ffffff',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        <div style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start'
        }}>
          {/* Sidebar Navigation */}
          <aside style={sidebarStyle}>
            <div>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={linkStyle}>
                    Charte de confidentialité
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#data" style={linkStyle}>
                    Collecte de données
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#data-uses" style={linkStyle}>
                    Utilisations des informations fournies
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#communication" style={linkStyle}>
                    Communication
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#procedure" style={linkStyle}>
                    Procédures juridiques
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#ads" style={linkStyle}>
                    Ads
                  </a>
                </li>
                <li>
                  <a href="#security" style={linkStyle}>
                    Sécurité
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <article style={articleStyle}>
            <div>
              <h1 style={firstHeadingStyle}>
                Charte de confidentialité
              </h1>
              
              <p style={{
                ...paragraphStyle,
                fontSize: '18px',
                fontWeight: '500',
                color: '#2c3e50',
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '6px',
                border: '1px solid #e9ecef'
              }}>
                Bienvenue. Veuillez lire attentivement notre charte de confidentialité.
              </p>
              
              <p style={paragraphStyle}>
{`                Nous (JobSpring) sommes pleinement engagés à respecter votre vie privée et nous assurons que vos informations personnelles sont en sécurité avec nous. Cette politique de confidentialité («Politique de confidentialité») définit les pratiques d'information, en ce qui concerne l'utilisation de notre site Web et notre application sous le nom JobSpring, y compris le type d'information recueillie, la façon dont l'information est recueillie, comment l'information est utilisée et avec qui elle est partagée. Le site Web et l'application JobSpring sont conjointement désignés sous le nom de «Plateforme». Les références à «vous» ou «votre» dans cette Politique de confidentialité se réfèrent aux utilisateurs de cette Plateforme, que vous accédiez ou non aux services disponibles sur la Plateforme ou que vous réalisiez une transaction sur la Plateforme. Les références à "nous", "notre" ou "nous" signifient JobSpring.
`}              </p>
              
              <p style={paragraphStyle}>
{`                En utilisant ou en accédant à cette Plateforme, vous acceptez les termes et conditions de cette Politique de confidentialité. Vous consentez également expressément à l'utilisation et à la divulgation de vos informations personnelles (telles que définies ci-dessous) de la manière décrite dans la présente Politique de confidentialité et signifient également votre acceptation de cette Politique de confidentialité et des Conditions d'utilisation. Si vous n'êtes pas d'accord avec les termes et conditions de cette politique de confidentialité, veuillez ne pas continuer à utiliser ou accéder à cette plate-forme.
`}              </p>
              
              <div id="data">
                <h1 style={subHeadingStyle}>
{`                  Collecte de données personnelles ou d'informations sensibles
`}                </h1>
                <p style={paragraphStyle}>
                  Nous ne collectons pas, stockons ou traitons des données personnelles sensibles ou des informations dans le cadre de nos services.
                </p>
                <p style={{ ...paragraphStyle, ...marginTopStyle }}>
                  <strong style={strongStyle}>
{`                    Informations personnelles fournies par vous en relation avec l'utilisation de la Plateforme:
`}                  </strong> Afin que nous puissions vous assurer la livraison de votre commande, nous collectons vos Informations personnelles selon les besoins qui y sont liés lorsque vous passez une commande sur la Plateforme.
                </p>
                <p style={{ ...paragraphStyle, ...marginTopStyle }}>
{`                  <strong style={strongStyle}>Autres:</strong> Outre les cookies, nous pouvons également collecter des informations pour nous permettre de mieux vous comprendre afin que nous puissions améliorer (i) votre expérience utilisateur; (ii) aider notre service à la clientèle et notre personnel de soutien technique; et (iii) mettre en place des processus pour prévenir la fraude et l'utilisation illégale. Dans le but de rendre la Plateforme efficace et d'améliorer la Plateforme, certaines informations peuvent être collectées chaque fois que vous accédez à la Plateforme. Ces informations peuvent être sauvegardées dans les journaux du serveur sous une forme cryptée qui peut ne pas vous identifier personnellement. Ces informations ou données peuvent inclure, sans s'y limiter, l'adresse IP, les détails de votre serveur, la durée de votre visite, la date, l'heure ou le but de votre visite. En plus des cookies, nous utilisons des balises Web, des tags d'emplacement publicitaire et des pixels pour faire de la publicité dans le cadre de la Plateforme. Les données susmentionnées peuvent être utilisées par nous et peuvent être partagées avec nos sponsors, investisseurs, annonceurs, développeurs, partenaires commerciaux stratégiques ou autres associés pour améliorer et développer l'expérience de l'utilisateur par rapport à la plate-forme.
`}                </p>
              </div>

              <div id="data-uses">
                <h1 style={subHeadingStyle}>
                  Autres utilisations des informations fournies
                </h1>
                <p style={paragraphStyle}>
{`                  Nous faisons tous les efforts pour s'assurer que nous recueillons seulement ces renseignements personnels que nous considérons comme pertinent d'enregistrer, de soutenir et de faciliter l'accès à la Plateforme.
`}                </p>
                <p style={{ ...paragraphStyle, ...marginTopStyle }}>
                  <strong style={strongStyle}>
                    Charger des informations avec des fournisseurs de services tiers en relation avec la Plateforme:
                  </strong> Dans la mesure nécessaire pour vous fournir les services sur la Plateforme, nous pouvons fournir vos Informations personnelles à: Les entrepreneurs tiers qui travaillent pour nous ou avec nous pour vous fournir de tels services, pour nous aider à communiquer avec vous ou pour maintenir la plateforme.
                </p>
              </div>

              <div id="communication">
                <h1 style={subHeadingStyle}>Communication</h1>
                <p style={paragraphStyle}>
{`                  Nous pouvons offrir des courriels, des notifications App CongoEats, SMS, MMS ou d'autres formes de communication pour partager avec vous des informations sur certaines promotions ou fonctionnalités que la Plate-forme peut choisir d'offrir ou sur nos affiliés, filiales, partenaires commerciaux, annonceurs et sponsors. Vous pouvez recevoir une telle communication lorsque vous vous êtes enregistré en tant qu'utilisateur afin de fournir des publicités sur des biens et services qui vous intéressent.
`}                </p>
              </div>

              <div id="procedure">
                <h1 style={subHeadingStyle}>Procédures juridiques</h1>
                <p style={paragraphStyle}>
{`                  Dans l'éventualité où nous devions répondre à des citations, ordonnances judiciaires ou autres procédures légales, vos renseignements personnels peuvent être divulgués en vertu d'une telle assignation, ordonnance judiciaire ou procédure légale, qui peut être sans préavis.
`}                </p>
              </div>

              <div id="ads">
                <h1 style={subHeadingStyle}>
                  Lien vers des applications tierces et des sites Web
                </h1>
                <p style={paragraphStyle}>
{`                  La Plateforme et toute communication qui vous est envoyée peuvent également contenir des publicités tierces et des liens vers d'autres sites ou sites Web. produits et services. Vous acceptez et reconnaissez que ces applications et sites Web sont exploités par des tiers et ne sont pas contrôlés par, ou affiliés à, ou associés à nous, sauf indication expresse. Nous ne sommes pas responsables de toute forme de transmission, quelle qu'elle soit, reçue par vous de la part d'un tiers. Par conséquent, nous ne faisons aucune déclaration concernant les pratiques ou politiques de confidentialité de ces tiers ou les conditions d'utilisation de ces sites ou applications, ni contrôlons ou garantissons l'exactitude, l'intégrité ou la qualité des informations, données, textes, logiciels , de la musique, du son, des photographies, des graphiques, des vidéos, des messages ou d'autres documents disponibles sur ces sites Web ou applications. L'inclusion ou l'exclusion n'implique aucune approbation de notre part du site Web, de la tierce partie ou des informations sur le site Web. Les informations que vous fournissez sur ces sites Web tiers sont régies conformément aux politiques de confidentialité de ces sites Web et il est recommandé que vous examiniez la politique de confidentialité sur ces sites Web et applications avant d'utiliser ces sites Web.
`}                </p>
                <p style={paragraphStyle}>
{`                  Ces sites Web et applications tiers et les annonceurs peuvent utiliser la technologie pour envoyer les publicités directement sur votre navigateur. Dans de tels cas, les sites Web tiers ou les annonceurs reçoivent automatiquement votre adresse IP. Ils peuvent également utiliser des cookies, JavaScript, balises Web et autres technologies pour mesurer l'efficacité de leurs publicités et personnaliser le contenu publicitaire. Nous n'avons pas accès aux témoins ni aux autres fonctionnalités que les sites Web tiers, les applications et les annonceurs peuvent utiliser, et les pratiques d'information de ces sites tiers et des applications et annonceurs ne sont pas couvertes par cette politique de confidentialité. Veuillez les contacter directement pour plus d'informations sur leurs pratiques de confidentialité.
`}                </p>
              </div>

              <div id="security">
                <h1 style={subHeadingStyle}>Sécurité</h1>
                <p style={paragraphStyle}>
{`                  Nous nous efforçons d'assurer la sécurité, l'intégrité et la confidentialité de vos informations personnelles et de protéger vos informations personnelles contre tout accès non autorisé ou modification, divulgation ou destruction non autorisée.
`}                </p>
                <p style={paragraphStyle}>
                  Nous ne sommes pas responsables de sécurité ou pour toute action de tiers qui reçoivent vos informations personnelles. Les Services sont également liés à de nombreux autres sites et nous ne sommes / ne seront pas responsables de leurs politiques ou pratiques de confidentialité car elles sont indépendantes de notre volonté.
                </p>
                <p style={paragraphStyle}>
                  Nonobstant toute disposition contenue dans cette Politique de confidentialité ou ailleurs, nous ne serons pas tenus responsables , dommage ou utilisation abusive de vos renseignements personnels, si une telle perte, dommage ou mésusage est attribuable à un événement de force majeure.
                </p>
                <p style={paragraphStyle}>
{`                  JobSpring répondra à vos divergences et griefs en ce qui concerne le traitement de l'information dans des délais prescrits. Pour ce faire, envoyez un courriel à
`}                  <a href="mailto:info@jobspring.com" style={{ color: '#007bff', textDecoration: 'none' }}>info@jobspring.com
                  </a>.
                </p>
              </div>

              <div id="change">
                <h1 style={subHeadingStyle}>
                  Changements à la politique de confidentialité
                </h1>
                <p style={paragraphStyle}>
{`                  Nous pouvons changer cette politique de confidentialité de temps en temps. Si nous apportons des modifications importantes à cette politique de confidentialité et de la manière dont nous traitons vos informations personnelles, nous vous fournirons un avis sur le site Web et / ou l'application CongoEats. Votre utilisation continue des services après cet avis constitue votre consentement aux changements. Nous vous encourageons à consulter régulièrement cette politique de confidentialité pour les dernières mises à jour de nos pratiques de confidentialité.
`}                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}