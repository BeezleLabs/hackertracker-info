/* eslint-disable react/function-component-definition */
import type { NextPage } from "next";
import Head from "next/head";
import Apps from "../../components/apps/Apps";

const AppsPage: NextPage = () => (
  <div>
    <Head>
      <title>D3F C0N Apps</title>
      <meta name='description' content='DEF CON 30 Apps' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='bg-black'>
      <Apps />
    </main>
  </div>
);

export default AppsPage;
