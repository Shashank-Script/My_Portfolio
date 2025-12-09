import BounceCards from "../components/BounceCards";

const Certificates = () => {
  const images = [
    "assets/certificates/AWS.png",
    "assets/certificates/dsa.jpg",
    "assets/certificates/hackthon.jpg",
    "assets/certificates/web-dev.jpg",
    "assets/certificates/internship.jpg",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  return (
    <section className="c-space mt-25 md:mt-35">
      <h2 className="text-heading">My Certificates</h2>
      <div className="flex items-center justify-center pt-20">
        <BounceCards
        className="custom-bounceCards"
        images={images}
        containerWidth={500}
        containerHeight={250}
        animationDelay={1}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.5)"
        transformStyles={transformStyles}
        enableHover={true}
      />
      </div>
    </section>
  );
};

export default Certificates;
