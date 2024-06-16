import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-80 bg-primary-yellow pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center  ">
          <p className="font-custom font-semibold text-5xl text-primary-red">
            House of X
          </p>
          <p className="font-averia text-md mt:20">
            ©2024 House of X. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
