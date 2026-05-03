import FooterLogo from "@/component/FooterLogo";
import logoFooter from "../../assets/logo_footer.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#eadfce] bg-[#1f1209] text-[#fffaf3]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-center sm:px-8 md:grid-cols-[1.3fr_1fr_1fr] md:text-left lg:px-12">
        <div className="flex flex-col items-center md:items-start">
          <FooterLogo logo={logoFooter} />
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#dac8b6]">
            Your favorite books, anytime, anywhere. Explore stories, technology, and science
            from one warm digital shelf.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Social Links</h3>
          <div className="mt-3 flex justify-center gap-3 md:justify-start">
            <a
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-lg font-bold hover:bg-white/20"
              href="https://facebook.com"
            >
              f
            </a>
            <a
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-xs font-black hover:bg-white/20"
              href="https://instagram.com"
            >
              IG
            </a>
            <a
              aria-label="X"
              className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-sm font-black hover:bg-white/20"
              href="https://x.com"
            >
              X
            </a>
            <a
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-sm font-black hover:bg-white/20"
              href="https://linkedin.com"
            >
              in
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Contact Us</h3>
          <p className="mt-3 text-sm leading-6 text-[#dac8b6]">
            Email: hello@booknest.com<br />
            Phone: +880 1700 000 000<br />
            Address: Mango Bookstall, Dhaka
          </p>
        </div>
      </div>
    </footer>
  );
}
