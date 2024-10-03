import DynamicLayout from "./DyanmicLayout";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className=" text-black">
      <DynamicLayout border={false}>
        <div className="gap-10 flex flex-col">
          <div className="w-72 h-auto flex-shrink-0">
            <img
              src="/LogoFooter.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex justify-between gap-12">
            <div className="flex-1">
              <p className="font-semibold text-xl mb-2 text-primary/60">
                Categories
              </p>
              <div className="text-sm">
                <p>Women</p>
                <p>Men</p>
                <p>Shoes</p>
                <p>Accessories</p>
                <p>New Arrivals</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-xl mb-2 text-primary/60">
                Links
              </p>
              <div className="text-sm">
                <p>FAQ</p>
                <p>Pages</p>
                <p>Stores</p>
                <p>Compare</p>
                <p>Cookies</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-xl mb-2 text-primary/60">
                About
              </p>
              <div className="text-sm">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  adipisci vel eius ipsa dolorum similique veniam beatae, at eos
                  a quia asperiores earum, totam nulla vitae? Autem distinctio
                  qui, amet saepe aspernatur eius ipsa a, velit voluptate fugit
                  quisquam sed.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-xl mb-2 text-primary/60">
                Contact
              </p>
              <div className="text-sm">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
                  facere ab libero cum error neque accusamus nihil eveniet omnis
                  odio optio! Provident, est sit perferendis rem error, rerum
                  nesciunt blanditiis quasi fugit cupiditate labore autem,
                  cumque quia repudiandae nobis! Blanditiis?
                </p>
              </div>
            </div>
          </div>

          <hr className="mb-1" />

          <div className="flex items-center flex-col gap-4">
            <div className="flex justify-center gap-6">
              <div className=" border text-xl p-3 rounded-full text-primary/60">
                <FaFacebook />
              </div>
              <div className=" border text-xl p-3 rounded-full text-primary/60">
                <FaTwitter />
              </div>
              <div className=" border text-xl p-3 rounded-full text-primary/60">
                <FaInstagramSquare />
              </div>
              <div className=" border text-xl p-3 rounded-full text-primary/60">
                <FaYoutube />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>
                Made with <span className="text-primary/60">❤</span> by
                @itssejo.s
              </p>
              <p>Copyright © 2024 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
