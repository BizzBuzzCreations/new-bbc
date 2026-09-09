import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";

export const metadata = {
  title: "PHP Web Application Development | BizzBuzz Creations",
  description: "BizzBuzz Creations is a PHP web application development company building custom PHP and Laravel solutions for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development/php-web-application-development"
  }
};

const staticContent = getSubServicePageContent("web-development", "php-web-application-development");

export default async function PhpWebApplicationDevelopment() {
  const overrides = await getPageContent("subservice-web-development-php-web-application-development");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
