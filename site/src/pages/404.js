import React from 'react'
import Layout from '../components/layout'
import Image from '../elements/Image';

const NotFoundPage = () => (
  <Layout>
    <div class="flex mb-20 mx-auto max-w-3xl bg-palette-5 border-t-4 border-palette-6 rounded-b text-palette-15 px-4 py-3 shadow-md" role="alert">
    <Image
                src={require('../images/icons/file-drive-icon.svg')}
                alt="Features tile icon 02"
                width={92}
                height={92} />
      <div className="ml-5">
        <p class="h4 text-palette-15">Not Found</p>
        <p class="text-m">You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
