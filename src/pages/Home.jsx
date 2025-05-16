import Header from '../components/global/Header';
import bookWelcomePicture from '../assets/images/book19-banner.png';
import BookCategory from '../components/home/BookCategory';
import PeopleReview from '../components/home/PeopleReview';
import BookContainer from '../components/home/BookContainer';
import ContactForm from '../components/home/ContactForm';
import Footer from "../components/global/Footer";
import { FaGlobeAfrica } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Head from '../components/global/Head';


function Home() {
  return (
   <> 
   <Head title="Books19 - Homepage" />
    <main className="main-homepage">
      <Header />
      <section className="welcome-banner">
        <div>
          <h1>Your Ultimate Digital Reading Heaven! </h1>
          <p>
            Welcome to Books19, where endless knowledge, captivating stories, and cutting-edge research come together in one seamless, user-friendly platform. Whether you're a voracious reader, a dedicated student,
            a curious researcher, or a busy professional, our online library is your gateway to a world of books, audiobooks, academic journals, and more—all accessible anytime, anywhere.
          </p>
        </div>
        <div>
          <img src={bookWelcomePicture} alt=''/>
        </div>
      </section>

      <section className="features-list">
        <h2>Features</h2>
        <article>
          <div>
            <span> 
              <FaGlobeAfrica />
            </span>
            <h3>A Massive, Ever-Expanding Collection</h3>
            <p>
              From best-selling novels and timeless classics to cutting-edge academic papers and industry reports, 
              our digital shelves are stocked with millions of titles across every genre and subject.
            </p>
          </div>
          <div>
            <span> 
              <IoIosRocket />
            </span>
            <h3>Read Anywhere, Anytime</h3>
            <p>No more waiting for bookstore trips or library hours—our cloud-based platform lets you access your favorite books on your phone, tablet, laptop, or e-reader. Download for offline reading and enjoy your books .</p>
          </div>
          <div>
            <span> 
              <IoSearch />
            </span>
            <h3>Smart, Personalized Recommendations</h3>
            <p>Our AI-powered recommendation engine learns your reading habits and suggests books you’ll love. The more you read, the better</p>
          </div>
        </article>
      </section>

      <BookCategory />
      <section id="about" className="about-us" >
        <div>
          <h1> About Us </h1>
          <p>
            At Books19, we believe in the power of knowledge and the magic of stories. Our mission is to make
             reading accessible, affordable, and enjoyable for everyone—whether you're a student, book lover, researcher,
            or professional. With a vast digital collection of eBooks, audiobooks, academic journals, and more, 
            we provide a seamless reading experience that fits your lifestyle. We're on a 
            mission to democratize knowledge and inspire lifelong learning. We believe everyone deserves free, unlimited access to books and educational resources - regardless of their location, budget, or background
          </p>
        </div>
        <div>
          <ul>
            <li>
              <div className='orange-form-1'> <span> 1 </span> </div>
              <div> 
                <h4>Break down barriers </h4>
                <p>by providing a free, open-access digital library</p>
              </div>
            </li>
            <li>
              <div className='orange-form-2'> <span> 2 </span> </div>
              <div> 
                <h4> Preserve and share </h4>
                <p>the world's most important books, documents and cultural works</p>
              </div>
            </li>
            <li>
              <div className='orange-form-3'> <span> 3 </span> </div>
              <div> 
                <h4>Empower communities </h4>
                <p>through literacy programs and educational initiatives</p>
              </div>
            </li>
            <li>
              <div className='orange-form-4'> <span> 4 </span> </div>
              <div> 
                <h4>Build the most comprehensive</h4>
                <p>public domain collection available online</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="explore" className="explore-books">
        <h2>Most Popular Books</h2>
        <BookContainer />
      </section>

      <PeopleReview />

      <ContactForm />
    </main>
      <Footer />
   </>
  );
}

export default Home;