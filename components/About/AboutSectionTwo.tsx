import Image from "next/image";
import "./about.css";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="https://res.cloudinary.com/dpxpjd5fb/image/upload/v1741198644/safaridesk-infographic-two_s6dtq3.png"
                alt="about image"
                height={500}
                width={500}
                fill={false}
                className="lightImageTwo animate-flip-up drop-shadow-three animate-duration-[1600ms] dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="https://res.cloudinary.com/dpxpjd5fb/image/upload/v1741198644/safaridesk-infographic-two_s6dtq3.png"
                alt="about image"
                height={500}
                width={500}
                fill={false}
                className="darkimageTwo animate-flip-up drop-shadow-three animate-duration-[1600ms] hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Effortless Integration, Maximum Impact
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Transform your workflow without disruption. Our system seamlessly connects with your existing tools and processes, creating a unified platform that enhances productivity from day one. Say goodbye to juggling multiple systems and hello to streamlined efficiency.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Scale Without Limits
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Whether you&apos;re a growing startup or an established enterprise, our platform grows with you. Handle ten tickets or ten thousand with the same level of precision and control. Dynamic resource allocation ensures peak performance even during high-demand periods.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Insights That Drive Action
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Turn data into decisions with our powerful analytics suite. Track response times, identify bottlenecks, and measure team performance through intuitive dashboards. Make informed choices based on real-time metrics and historical trends that matter to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
