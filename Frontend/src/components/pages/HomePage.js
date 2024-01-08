import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default HomePage;

{/* <div className='homepage'>
    //   <header className='homepage-header'>
    //     <h1>Welcome to Your Budgeting Application</h1>
    //     <p>Manage your finances with ease and efficiency.</p>
    //   </header>
    //   <main className='homepage-content'>
    //     <section className='overview-section'>
    //       <h2>Your Financial Overview</h2>
    //       <p>Summary of your financial status will go here.</p>
    //       {/* You can add components like charts, graphs, summary cards go here. */}
    //     </section>
    //     <section className='features-section'>
    //       <h2>Features</h2>
    //       <ul>
    //         <li>Track your income and expenses</li>
    //         <li>Visualize your financial trends</li>
    //         <li>Set and monitor financial goals</li>
    //         {/* Add more features as needed */}
    //       </ul>
    //     </section>
    //     <section className='action-section'>
    //       <h2>Get Started</h2>
    //       <p>Take control of your finances today!</p>
    //       {/* Add call-to-action button/link */}
    //     </section>
    //   </main>
    // </div> */}