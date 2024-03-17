
import Section from "./Section";
import { socials } from "../constants";
import  hmi3  from "../assets/benefits/hmi3.png";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";



const aboutLinks = [
	"Companies",
	"Pricing",
	"Terms",
	"Advice",
	"Privacy Policy",
];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];



const Footer = () => {
  return (
    <>
     <div className="bg-slate-900 px-32 pt-16 pb-11">
			<div className="flex flex-row items-start justify-between">
				<div>
					<img
						src={hmi3}
						alt="logo hmi"
						width={160}
						height={36}
					/>
					<div className="text-muted mt-8">
						Great platform for the job seeker that <br />
						passionate about startups. Find your dream job <br />
						easier.
					</div>
				</div>
				<div>
					<div className="text-lg text-primary-foreground font-semibold mb-5">
						About
					</div>

					<div className="space-y-4">
						{aboutLinks.map((item) => (
							<Link className="block text-muted" key={item.id} href="/">
								{item}
							</Link>
						))}
					</div>
				</div>
				<div>
					<div className="text-lg text-primary-foreground font-semibold mb-5">
						Resources
					</div>

					<div className="space-y-4">
						{resourceLinks.map((item) => (
							<Link className="block text-muted" key={item.id} href="/">
								{item}
							</Link>
						))}
					</div>
				</div>
				
			</div>
			<Separator className="mt-20 mb-11 bg-gray-300" />
			
		</div>
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
    </>
   
  );
};

export default Footer;
