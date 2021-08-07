import Head from 'next/head'
import Header from '../components/header'
import Banner from '../components/banner'
import SmallCard from '../components/smallcard'
import MediumCard from '../components/mediumcard'
import LargeCard from '../components/largecard'
import Footer from '../components/footer'



export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">

      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Explore Nearby
          </h2>

          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key = {img}
                img = {img}
                distance = {distance}
                location = {location}
                />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">
            Live Anywhere
          </h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard 
                key={img}
                img={img}
                title={title}
                />
            ))}
          </div>
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists Curated by Airbnb."
          buttonText="Get Inspired"
        />

        <Footer />
      </main>
    </div>  
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
    )

  return {
    props: {
      exploreData,
      cardsData
    },
  }
}