import ServicesSection from "../../components/services/Services";

const customOffers = [
  {
    title: "Service One",
    description: "Short description ",
    images: ["/img/prva.jpg", "/img/druga.jpg", "/img/treca.jpg"],
  },
  {
    title: "Service Two",
    description: "Short description",
    images: ["/img/prva.jpg", "/img/druga.jpg"],
  },
  {
    title: "Service Three",
    description: "Short description",
    images: ["/img/prva.jpg", "/img/druga.jpg"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <ServicesSection />
    </div>
  );
}
