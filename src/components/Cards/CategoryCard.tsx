export default function CategoryCard() {
  return (
    <div className="flex flex-col items-center bg-secondary">
      <div className="h-[250px] w-full flex items-center justify-center">
        <img
          className="object-contain h-44 w-44"
          src="https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F63ead2f2-2ee2-4f9c-b3f9-c734c479a305.png&w=2160&q=75"
          alt=""
        />
      </div>
      <p className="py-4">Testing Category</p>
    </div>
  );
}
