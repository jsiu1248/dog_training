import Head from 'next/head'
import NextImage from 'next/image'


export default function AboutPage() {
  return (
    <>
    <Head />

    <div className="container">
      <div className="wrapper">
        <h1 className="title">Our Vision</h1>
        <p className="description">
          Our vision is to create an innovative and user-friendly app that revolutionizes pet care and training. We aim to provide dog owners with a convenient solution to track their dog's potty activities through smart potty buttons. Our app will empower dog owners by offering real-time monitoring and notifications, enabling them to better understand their dog's behavior and ensure timely and effective training.
        </p>
        <p className="description">
          Through our app, we strive to enhance the bond between dog owners and their furry companions, promoting responsible pet ownership and a happier, healthier lifestyle for both dogs and their owners. We envision a future where our app becomes the go-to tool for pet owners worldwide, offering valuable insights, seamless communication, and actionable data to improve the well-being of dogs everywhere.
        </p>
        <p className="description">
          We are committed to delivering an exceptional user experience, combining a sleek and intuitive interface with advanced technology. Our app will continuously evolve with new features and integrations, aiming to become the ultimate companion for dog owners. We value simplicity, reliability, and innovation, and we are dedicated to providing the highest level of customer satisfaction.
        </p>
        <p className="description">
          Ultimately, our vision is to make a positive impact in the lives of dogs and their owners, fostering stronger relationships and promoting a deeper understanding of canine behavior. We aspire to be a trusted leader in the pet care industry, constantly pushing the boundaries of what is possible in the realm of dog training and monitoring.
        </p>
      </div>
     <div className="image-container">
        <NextImage
          src="/images/dog1.jpeg"
          alt="Dog 1"
          width={300}
          height={300}
        />
        <NextImage
          src="/images/dog2.jpeg"
          alt="Dog 2"
          width={300}
          height={300}
        />
      </div>
      <div className="image-container">
        <NextImage
          src="/images/potty_button1.jpeg"
          alt="Potty Button 1"
          width={300}
          height={300}
        />
        <NextImage
          src="/images/potty_button2.jpeg"
          alt="Potty Button 2"
          width={300}
          height={300}
        />
      </div>
    </div>
    </>
  )
}
